import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import File from "./FileCard";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const WizardPage2 = ({ visibility, formData, handleChange, handleFilesUpdate }) => {
  const [files, setFiles] = useState([]);
  const [textContents, setTextContents] = useState([]);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  const fileToText = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const textDecoder = new TextDecoder('utf-8');
    const text = textDecoder.decode(arrayBuffer);
    return text;
  };

  const handleFileUpload = async (e) => {
    const selectedFiles = e.target.files;

    const fileTextContents = await Promise.all(
      Array.from(selectedFiles).map(async (file) => {
        const textContent = await fileToText(file);
        return textContent;
      })
    );

    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    setTextContents((prevTextContents) => [...prevTextContents, ...fileTextContents]);
  };

  const handleDeleteFile = (index) => {
    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });

    setTextContents((prevTextContents) => {
      const updatedTextContents = [...prevTextContents];
      updatedTextContents.splice(index, 1);
      return updatedTextContents;
    });
  };

  useEffect(() => {
    handleFilesUpdate(textContents);
  }, [textContents]);

  return (
    <div className={visibility ? "" : "hidden"}>
      <div className="font-sans text-sm bg-white p-8 rounded-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-semibold">RAG Files</h1>

          <label className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-900 focus:outline-none focus:ring focus:border-blue-300 flex flex-row items-center space-x-2 cursor-pointer">
            <AiOutlineArrowUp />
            <span>Upload PDF Files for RAG</span>
            <input
              type="file"
              accept=".pdf"
              multiple
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>

        <div className="flex mt-8 flex-col">
          <label htmlFor="dynamic_upload" className="flex items-center space-x-2 cursor-pointer mb-8">
            <input
              id="dynamic_upload"
              name="dynamic_upload"
              type="checkbox"
              checked={formData.dynamic_upload}
              onChange={handleChange}
              className="text-blue-500"
            />
            <span className="text-lg">Enable Dynamic Upload</span>
          </label>

          <div className="w-full overflow-y-scroll space-y-4 ml-2 h-files-section">
            {files.map((file, index) => (
              <File
                key={index}
                FileName={file.name}
                Size={`${file.size} Bytes`}
                onDelete={() => handleDeleteFile(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizardPage2;
