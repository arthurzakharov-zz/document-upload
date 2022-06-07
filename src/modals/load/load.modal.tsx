/* eslint-disable */
import { useState } from "react";
import useReactRedux from "../../hooks/useReactRedux";
import { selectFileCategoryQuantity } from "../../redux/file/file.selectors";
import { fileAddToCategory } from "../../redux/file/file.slice";
import { uiIsLoadingOn, uiIsLoadingOff } from "../../redux/ui/ui.slice";
import { modalClose, modalOpen } from "../../redux/modal/modal.slice";
import { convertDataSize, get } from "../../utils";
import SvgUpload from "../../svg/Upload";
import Button from "../../components/button";
import Collapse from "../../components/collapse";
import File from "../../components/file";
import FileUpload from "../../components/file-upload";
import Input from "../../components/input";
import { allowedFilesDescription, buttonName, documentLabel, fileKey, loadFile } from "./load.utils";
import { mockHttp } from "../../mock";
import { DocumentCategoryType } from "../../types";
import { FileUploadListType, FileUploadType } from "../../components/file-upload/file-upload.types";
import "./load.css";

export interface LoadModalProps {
  documentCategory: DocumentCategoryType;
}

function LoadModal(props: LoadModalProps) {
  const { documentCategory } = props;
  const { label, uploadDescription, placeholder, fileSizeLimitInMb, fileFormats, multiple } = documentCategory;

  const [fileToClose, setFileToClose] = useState<string>("");
  const [title, setTitle] = useState<string>(label);
  const [files, setFiles] = useState<FileUploadListType>([]);
  const [oversizedFiles, setOversizedFiles] = useState<number[]>([]);

  const { dispatch, useSelector } = useReactRedux();

  const recordsQuantity = useSelector(selectFileCategoryQuantity(label));

  const saveFiles = async () => {
    try {
      dispatch(uiIsLoadingOn());
      dispatch(modalClose());
      await mockHttp(label !== "Gläubigerunterlagen");
      dispatch(
        fileAddToCategory({
          category: label,
          name: title,
          files: files.map((file: FileUploadType) => ({
            dataURL: file.dataURL,
          })),
        }),
      );
    } catch (e) {
      dispatch(modalOpen({ type: "error", size: "xs", withCloseButton: false }));
    } finally {
      dispatch(uiIsLoadingOff());
    }
  };

  const onFileClick = (file: FileUploadType, index: number, onFileRemove: (index: number) => void) => {
    setFileToClose(get(file, "file", "name"));
    setTimeout(() => {
      onFileRemove(index);
      setFileToClose("");
    }, 450);
  };

  const onFileNameChange = (name: string, value: string) => {
    setTitle(value || label);
  };

  const onChange = (fileList: FileUploadListType) => {
    const listOfOversizedFiles: number[] = [];
    fileList.forEach((file: FileUploadType, index) => {
      const fileSize = get(file, "file", "size");
      if (convertDataSize(fileSize, "B", "MB") > fileSizeLimitInMb) {
        listOfOversizedFiles.push(index);
      }
    });
    setOversizedFiles(listOfOversizedFiles);
    setFiles(fileList);
  };

  return (
    <div className="load">
      <div className="load__content">
        <FileUpload
          files={files}
          fileResolutions={fileFormats}
          maxFileSize={convertDataSize(10, "MB", "B")}
          maxFileNumber={100}
          onChange={onChange}
        >
          {({ onFileUpload, onFileRemove }) => (
            <div className="load__main">
              <h6 className="load__head">{documentLabel(label, title, multiple ? recordsQuantity + 1 : undefined)}</h6>
              <div className="load__info">{uploadDescription}</div>
              <div className="load__files">
                {files.map((file: FileUploadType, index: number) => (
                  <Collapse key={fileKey(file)} opened={fileToClose !== get(file, "file", "name")} duration={300}>
                    <div
                      className={loadFile(oversizedFiles.includes(index))}
                      style={{
                        marginTop: index === 0 ? 8 : 0,
                        marginBottom: files.length - 1 >= index ? 8 : 0,
                      }}
                    >
                      <File name={get(file, "file", "name")} onClick={() => onFileClick(file, index, onFileRemove)} />
                    </div>
                  </Collapse>
                ))}
              </div>
              <button type="button" className="load__button" onClick={onFileUpload}>
                <SvgUpload className="load__button-icon" />
                <span className="load__button-text">Datei(en) auswählen</span>
              </button>
              <p className="load__manual">{allowedFilesDescription(fileSizeLimitInMb, fileFormats)}</p>
              {multiple ? (
                <div className="load__footer">
                  <Collapse opened={files.length > 0}>
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
          )}
        </FileUpload>
      </div>
      <div className="load__save">
        <Collapse opened={files.length > 0}>
          <Button
            text={buttonName(label, title, multiple ? recordsQuantity + 1 : undefined)}
            disabled={oversizedFiles.length > 0}
            onClick={saveFiles}
          />
        </Collapse>
      </div>
    </div>
  );
}

export default LoadModal;
