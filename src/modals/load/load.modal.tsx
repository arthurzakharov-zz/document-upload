import { useState } from "react";
import ImageUploading, { ImageListType, ImageType } from "react-images-uploading";
import { useDispatch, useSelector } from "react-redux";
import { addFilesToCategory } from "../../store/image/image.actions";
import { selectRecordsByCategoryQuantity } from "../../store/image/image.selectors";
import { modalClose, openModal } from "../../store/modal/modal.actions";
import { setIsLoading } from "../../store/ui/ui.actions";
import { convertDataSize, get } from "../../utils";
import SvgUpload from "../../svg/Upload";
import Button from "../../components/button";
import Collapse from "../../components/collapse";
import File from "../../components/file";
import Input from "../../components/input";
import { allowedFilesDescription, buttonName, documentLabel, imageKey, loadFile } from "./load.utils";
import { mockHttp } from "../../mock";
import { DocumentCategory } from "../../types";
import "./load.css";

export interface LoadModalProps {
  documentCategory: DocumentCategory;
}

function LoadModal(props: LoadModalProps) {
  const { documentCategory } = props;
  const { label, uploadDescription, placeholder, fileSizeLimitInMb, fileFormats, multiple } = documentCategory;

  const [fileToClose, setFileToClose] = useState<string>("");
  const [title, setTitle] = useState<string>(label);
  const [images, setImages] = useState<ImageListType>([]);
  const [oversizedImages, setOversizedImages] = useState<number[]>([]);

  const recordsQuantity = useSelector(selectRecordsByCategoryQuantity(label));

  const dispatch = useDispatch();

  const saveFiles = async () => {
    try {
      dispatch(setIsLoading(true));
      dispatch(modalClose());
      await mockHttp(label !== "Gläubigerunterlagen");
      dispatch(addFilesToCategory(label, title, images));
    } catch (e) {
      dispatch(openModal("error", "xs", false));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const onFileClick = (image: ImageType, index: number, onImageRemove: (index: number) => void) => {
    setFileToClose(get(image, "file", "name"));
    setTimeout(() => {
      onImageRemove(index);
      setFileToClose("");
    }, 450);
  };

  const onFileNameChange = (name: string, value: string) => {
    setTitle(value || label);
  };

  const onChange = (imageList: ImageListType) => {
    const listOfOversizedImages: number[] = [];
    imageList.forEach((image: ImageType, index) => {
      const imageSize = get(image, "file", "size");
      if (convertDataSize(imageSize, "B", "MB") > fileSizeLimitInMb) {
        listOfOversizedImages.push(index);
      }
    });
    setOversizedImages(listOfOversizedImages);
    setImages(imageList);
  };

  return (
    <div className="load">
      <div className="load__content">
        <ImageUploading multiple maxNumber={100} acceptType={fileFormats} value={images} onChange={onChange}>
          {({ onImageUpload, onImageRemove }) => {
            return (
              <div className="load__main">
                <h6 className="load__head">
                  {documentLabel(label, title, multiple ? recordsQuantity + 1 : undefined)}
                </h6>
                <div className="load__info">{uploadDescription}</div>
                <div className="load__files">
                  {images.map((image: ImageType, index: number) => (
                    <Collapse key={imageKey(image)} opened={fileToClose !== get(image, "file", "name")} duration={300}>
                      <div
                        className={loadFile(oversizedImages.includes(index))}
                        style={{
                          marginTop: index === 0 ? 8 : 0,
                          marginBottom: images.length - 1 >= index ? 8 : 0,
                        }}
                      >
                        <File
                          name={get(image, "file", "name")}
                          onClick={() => onFileClick(image, index, onImageRemove)}
                        />
                      </div>
                    </Collapse>
                  ))}
                </div>
                <button type="button" className="load__button" onClick={onImageUpload}>
                  <SvgUpload className="load__button-icon" />
                  <span className="load__button-text">Datei(en) auswählen</span>
                </button>
                <p className="load__manual">{allowedFilesDescription(fileSizeLimitInMb, fileFormats)}</p>
                {multiple ? (
                  <div className="load__footer">
                    <Collapse opened={images.length > 0}>
                      <>
                        <hr className="load__line" />
                        <p className="load__rename">Möchten Sie dieses Dokument benennen?</p>
                        <Input id="file-name" name="file-name" placeholder={placeholder} onChange={onFileNameChange} />
                        <p className="load__tip">Leer lassen wenn unsicher</p>
                      </>
                    </Collapse>
                  </div>
                ) : null}
              </div>
            );
          }}
        </ImageUploading>
      </div>
      <div className="load__save">
        <Collapse opened={images.length > 0}>
          <Button
            text={buttonName(label, title, multiple ? recordsQuantity + 1 : undefined)}
            disabled={oversizedImages.length > 0}
            onClick={saveFiles}
          />
        </Collapse>
      </div>
    </div>
  );
}

export default LoadModal;
