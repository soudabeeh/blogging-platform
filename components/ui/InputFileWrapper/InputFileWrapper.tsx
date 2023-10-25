import React, { useRef } from "react";

interface Props {
  children: React.ReactNode;
  onSelectFile: (file: File) => void;
}
export default function InputFileWrapper({ children, onSelectFile }: Props) {
  const inputFile = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: any) => {
    const { files } = e.target;
    if (files && files.length) {
      const filename = files[0].name;
      var parts = filename.split(".");
      const fileType = parts[parts.length - 1];
      console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.
      onSelectFile(files[0]);
    }
  };
  const onButtonClick = () => {
    inputFile.current?.click();
  };

  return (
    <div>
      <input
        style={{ display: "none" }}
        // accept=".zip,.rar"
        ref={inputFile}
        onChange={handleFileUpload}
        type="file"
      />
      <div onClick={onButtonClick}>{children}</div>
    </div>
  );
}
