import { useState } from "react";
import ImageUploading, { ImageListType, ImageType } from "react-images-uploading";
import { useDispatch, useSelector } from "react-redux";
import { modalClose } from "../../store/modal/modal.actions";
import { addFilesToCategory } from "../../store/file/file.actions";
import { selectFileCategoryByName } from "../../store/file/file.selectors";
import SvgUpload from "../../svg/Upload";
import Button from "../../components/button";
import Collapse from "../../components/collapse";
import File from "../../components/file";
import Input from "../../components/input";
import { buttonName, documentLabel } from "./load.utils";
import "./load.css";

export interface LoadModalProps {
  multi: boolean;
  label: string;
}

function LoadModal(props: LoadModalProps) {
  const { multi, label } = props;

  const [fileToClose, setFileToClose] = useState<string>("");
  const [title, setTitle] = useState<string>(label);

  const files = useSelector(selectFileCategoryByName(label));

  const dispatch = useDispatch();

  const saveFiles = () => {
    dispatch(modalClose());
  };

  const onFileClick = (image: ImageType, index: number, onImageRemove: (index: number) => void) => {
    setFileToClose(image.file!.name);
    setTimeout(() => {
      onImageRemove(index);
      setFileToClose("");
    }, 450);
  };

  const onFileNameChange = (name: string, value: string) => {
    setTitle(value);
  };

  const onChange = (images: ImageListType) => {
    dispatch(addFilesToCategory(label, images));
  };

  return (
    <div className="load">
      <div className="load__content">
        <ImageUploading multiple maxNumber={5} value={files} onChange={onChange}>
          {({ onImageUpload, onImageRemove }) => (
            <div className="load__main">
              <h6 className="load__head">{documentLabel(title, multi ? 2 : undefined)}</h6>
              <div className="load__info">
                Wählen Sie hier nur Dateien/Photos Ihres Personalausweises/Reisepasses aus.
              </div>
              <div className="load__files">
                {files.map((image: ImageType, index: number) => (
                  <Collapse key={image.file!.name} opened={fileToClose !== image.file!.name} duration={300}>
                    <div
                      className="load__file"
                      style={{
                        marginTop: index === 0 ? 10 : 0,
                        marginBottom: files.length - 1 >= index ? 10 : 0,
                      }}
                    >
                      <File name={image.file!.name} onClick={() => onFileClick(image, index, onImageRemove)} />
                    </div>
                  </Collapse>
                ))}
              </div>
              <button type="button" className="load__button" onClick={onImageUpload}>
                <SvgUpload className="load__button-icon" />
                <span className="load__button-text">Datei(en) auswählen</span>
              </button>
              <p className="load__manual">
                Maximale Dateigröße pro Datei: 6MB. Unterstützte Dateitypen: PDF, JPG, JPEG, GIF, PNG.
              </p>
              {multi ? (
                <>
                  <hr className="load__line" />
                  <p className="load__rename">Möchten Sie dieses Dokument benennen?</p>
                  <Input
                    id="file-name"
                    name="file-name"
                    placeholder="z.B. Mahnung, Forderungsaufstellung, ..."
                    onChange={onFileNameChange}
                  />
                  <p className="load__tip">Leer lassen wenn unsicher</p>
                </>
              ) : null}
            </div>
          )}
        </ImageUploading>
      </div>
      <div className="load__save">
        <Collapse opened={files.length > 0}>
          <Button text={buttonName(title, multi ? 2 : undefined)} onClick={saveFiles} />
        </Collapse>
      </div>
    </div>
  );
}

export default LoadModal;
