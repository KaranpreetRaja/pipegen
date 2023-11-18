import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import File from "./FileCard";
import { useState, useEffect } from "react";

const WizardPage2 = ({ visibility, formData, handleChange, handleFilesUpdate }) => {
  const [blobs, setBlobs] = useState([]);
  const [files, setFiles] = useState([]);

  const filetoBLOB = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });
  
  const handleFileUpload = (e) => {
    const files = e.target.files;

    Promise.all(files).then((files) => {
      setFiles((prevFiles) => [...prevFiles, ...files]);
    });

    const uploadFiles = Array.from(files).map(async (file) => {
      return await filetoBLOB(file);
    });
  
    Promise.all(uploadFiles).then((uploads) => {
      setBlobs((prevBlobs) => [...prevBlobs, ...uploads]);
    });
  };

  const handleDeleteFile = (index) => {
    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });

    setBlobs((prevBlobs) => {
      const updatedBlobs = [...prevBlobs];
      updatedBlobs.splice(index, 1);
      return updatedBlobs;
    });
  };
  
  useEffect(() => {
    // console.log(blobs);
    handleFilesUpdate([blobs]);
  }, [blobs]);

  return (
    <div className={visibility ? "" : "hidden"}>
      <div className="font-sans text-sm bg-white p-8 rounded-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-semibold">RAG Files</h1>

          <label className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-900 focus:outline-none focus:ring focus:border-blue-300 flex flex-row items-center space-x-2 cursor-pointer">
            <AiOutlineArrowUp />
            <span>Upload RAG File</span>
            <input
              type="file"
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