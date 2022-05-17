import { useState } from "react";
import SvgUpload from "../../svg/Upload";
import Button from "../../components/button";
import Collapse from "../../components/collapse";
import File from "../../components/file";
import { loadSingleFiles, loadSingleSave } from "./load-single.utils";
import "./load-single.css";
import useCloseModal from "../../hooks/useCloseModal";

function LoadSingleModal() {
  const [files, setFiles] = useState<string[]>([]);
  const [fileToClose, setFileToClose] = useState<string>();

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

  return (
    <div className="load-single">
      <div className="load-single__content">
        <div className="load-single__main">
          <h6 className="load-single__head">Personalausweis</h6>
          <div className="load-single__info">
            Wählen Sie hier nur Dateien/Photos Ihres Personalausweises/Reisepasses aus.
          </div>
          <div className={loadSingleFiles(files.length > 0)}>
            {files.map((file: string) => (
              <Collapse key={file} isOpen={fileToClose !== file}>
                <div className="load-single__file">
                  <File name={file} onClick={() => onFileClick(file)} />
                </div>
              </Collapse>
            ))}
          </div>
          <button
            type="button"
            className="load-single__button"
            onClick={() => setFiles([...files, Math.ceil(Math.random() * 100).toString()])}
          >
            <SvgUpload className="load-single__button-icon" />
            <span className="load-single__button-text">Datei(en) auswählen</span>
          </button>
          <p className="load-single__manual">
            Maximale Dateigröße pro Datei: 6MB. Unterstützte Dateitypen: PDF, JPG, JPEG, GIF, PNG.
          </p>
        </div>
      </div>
      <div className={loadSingleSave(files.length > 0)}>
        <Button text="LALA" onClick={saveFiles} />
      </div>
    </div>
  );
}

export default LoadSingleModal;