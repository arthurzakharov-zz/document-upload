import { useRef, ChangeEvent, useCallback, RefObject } from "react";
import type { FileUploadErrorType, FileUploadPropsType, FileUploadListType } from "./file-upload.types";
import type { DocumentResolutionType } from "../../types";

function FileUpload(props: FileUploadPropsType) {
  const { files, fileResolutions, maxFileSize, maxFileNumber, children, onChange } = props;

  const inFiles = files || [];

  const inputRef = useRef<HTMLInputElement>(null);

  const getAccept = (fileResolutions: DocumentResolutionType[]): string => {
    const convertedTypes = fileResolutions.map((type) => ".".concat(type));
    return convertedTypes.join(", ");
  };

  const getBase64 = (file: File): Promise<string> => {
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.addEventListener("load", () => resolve(String(reader.result)));
      reader.readAsDataURL(file);
    });
  };

  const getListFiles = (files: FileList, dataURLKey: string): Promise<FileUploadListType> => {
    const promiseFiles: Array<Promise<string>> = [];
    for (let i = 0; i < files.length; i += 1) {
      promiseFiles.push(getBase64(files[i]));
    }
    return Promise.all(promiseFiles).then((fileListBase64: Array<string>) => {
      const fileList: FileUploadListType = fileListBase64.map((base64, index) => ({
        [dataURLKey]: base64,
        file: files[index],
      }));
      return fileList;
    });
  };

  const isMaxNumberValid = (totalNumber: number, maxNumber: number): boolean => {
    if (maxNumber !== 0) return true;
    return totalNumber <= maxNumber + 1;
  };

  const isMaxFileSizeValid = (fileSize: number, maxFileSize: number): boolean => {
    return maxFileSize ? fileSize <= maxFileSize : true;
  };

  const getErrorValidation = (
    fileList: FileUploadListType,
    inFiles: FileUploadListType,
    maxNumber: number,
    maxFileSize: number,
  ): FileUploadErrorType => {
    const newErrors: FileUploadErrorType = {};
    if (!isMaxNumberValid(fileList.length + inFiles.length, maxNumber)) {
      newErrors.maxNumber = true;
    } else {
      for (let i = 0; i < fileList.length; i += 1) {
        const { file } = fileList[i];
        if (file && !isMaxFileSizeValid(file.size, maxFileSize)) {
          newErrors.maxFileSize = true;
        }
      }
    }
    if (Object.values(newErrors).find(Boolean)) return newErrors;
    return {};
  };

  const validate = (fileList: FileUploadListType): FileUploadErrorType => {
    return getErrorValidation(fileList, inFiles, maxFileNumber, maxFileSize);
  };

  const handleChange = async (files: FileList | null) => {
    if (!files) return;
    const fileList = await getListFiles(files, "dataURL");
    if (!fileList.length) return;
    onChange([...inFiles, ...fileList], validate(fileList));
  };

  const onFilesChange = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    await handleChange(e.target.files);
    if (inputRef.current) inputRef.current.value = "";
  };

  const openFileDialog = (inputRef: RefObject<HTMLInputElement>): void => {
    if (inputRef.current) inputRef.current.click();
  };

  const handleClickInput = useCallback(() => openFileDialog(inputRef), [inputRef]);

  const onFileUpload = useCallback((): void => {
    handleClickInput();
  }, [handleClickInput]);

  const onFileRemove = (index: number) => {
    const updatedList = [...inFiles];
    if (Array.isArray(index)) {
      index.forEach((i) => {
        updatedList.splice(i, 1);
      });
    } else {
      updatedList.splice(index, 1);
    }
    onChange(updatedList);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        multiple
        accept={getAccept(fileResolutions)}
        style={{ display: "none" }}
        onChange={onFilesChange}
      />
      {children({
        onFileUpload,
        onFileRemove,
      })}
    </>
  );
}

export default FileUpload;
