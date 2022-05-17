import { useState } from "react";
import SvgUpload from "../../svg/Upload";
import Button from "../../components/button";
import Collapse from "../../components/collapse";
import File from "../../components/file";
import useCloseModal from "../../hooks/useCloseModal";
import { buttonName, documentLabel, loadFiles, loadSave } from "./load.utils";
import "./load.css";
import Input from "../../components/input";

export interface LoadModalProps {
  multi: boolean;
  label: string;
}

function LoadModal(props: LoadModalProps) {
  const { multi, label } = props;

  const [files, setFiles] = useState<string[]>([]);
  const [fileToClose, setFileToClose] = useState<string>();
  const [title, setTitle] = useState<string>(label);

  const closeModal = useCloseModal();

  const saveFiles = () => {
    closeModal();
  };

  const onFileClick = (file: string) => {
    setFileToClose(file);
    if (files.length)
      // TODO: Think about concept how to solve delete button blick on some cases. Maybe some kind of memo
      setTimeout(() => {
        setFiles(files.filter((f: string) => f !== file));
      }, 450);
  };

  const onFileNameChange = (name: string, value: string) => {
    setTitle(value);
  };

  return (
    <div className="load">
      <div className="load__content">
        <div className="load__main">
          <h6 className="load__head">{documentLabel(title, 2)}</h6>
          <div className="load__info">Wählen Sie hier nur Dateien/Photos Ihres Personalausweises/Reisepasses aus.</div>
          <div className={loadFiles(files.length > 0)}>
            {files.map((file: string) => (
              <Collapse key={file} isOpen={fileToClose !== file}>
                <div className="load__file">
                  <File name={file} onClick={() => onFileClick(file)} />
                </div>
              </Collapse>
            ))}
          </div>
          <button
            type="button"
            className="load__button"
            onClick={() => setFiles([...files, Math.ceil(Math.random() * 100).toString()])}
          >
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
      </div>
      <div className={loadSave(files.length > 0)}>
        <Button text={buttonName(title, 2)} onClick={saveFiles} />
      </div>
    </div>
  );
}

export default LoadModal;
