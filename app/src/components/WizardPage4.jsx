import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import File from "./FileCard";
import { useState, useEffect } from "react";

const WizardPage4 = ({ visibility, handleFilesUpdate }) => {
  const [trainBlob, setTrainBlob] = useState(null);
  const [testBlob, setTestBlob] = useState(null);
  const [trainFile, setTrainFile] = useState(null);
  const [testFile, setTestFile] = useState(null);

  const filetoBLOB = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });

  const handleFileUpload = (e, fileType) => {
    const file = e.target.files[0];
    const uploadFile = async () => await filetoBLOB(file);

    uploadFile().then((upload) => {
      if (fileType === "train") {
        setTrainBlob(upload);
        setTrainFile(file);
      } else if (fileType === "test") {
        setTestBlob(upload);
        setTestFile(file);
      }
    });
  };

  const handleDeleteFile = (fileType) => {
    if (fileType === "train") {
      setTrainBlob(null);
      setTrainFile(null);
    } else if (fileType === "test") {
      setTestBlob(null);
      setTestFile(null);
    }
  };

  useEffect(() => {
    const blobs = [];
    if (trainBlob !== null) blobs.push(trainBlob);
    if (testBlob !== null) blobs.push(testBlob);
    handleFilesUpdate(blobs);
  }, [trainBlob, testBlob]);

  return (
    <div className={visibility ? "" : "hidden"}>
      <div className="font-sans text-sm bg-white p-8 rounded-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-semibold">Training/Testing Files</h1>
        </div>

        <div className="flex mt-8 flex-col">
          <label className="w-1/4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-900 focus:outline-none focus:ring focus:border-blue-300 flex flex-row items-center space-x-2 cursor-pointer">
            <AiOutlineArrowUp />
            <span>Upload Training CSV</span>
            <input
              type="file"
              accept=".csv"
              onChange={(e) => handleFileUpload(e, "train")}
              className="hidden"
            />
          </label>

          <div className="w-full space-y-4 ml-2 h-24">
            {trainFile && (
              <File
                key={0}
                FileName={trainFile.name}
                Size={`${trainFile.size} Bytes`}
                onDelete={() => handleDeleteFile("train")}
                index={0}
              />
            )}
          </div>

          <label className="bg-blue-500 text-white w-1/4 px-4 py-2 rounded-full hover:bg-blue-900 focus:outline-none focus:ring focus:border-blue-300 flex flex-row items-center space-x-2 cursor-pointer">
            <AiOutlineArrowUp />
            <span>Upload Testing CSV</span>
            <input
              type="file"
              accept=".csv"
              onChange={(e) => handleFileUpload(e, "test")}
              className="hidden"
            />
          </label>

          <div className="w-full space-y-4 ml-2 h-24">
            {testFile && (
              <File
                key={1}
                FileName={testFile.name}
                Size={`${testFile.size} Bytes`}
                onDelete={() => handleDeleteFile("test")}
                index={1}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizardPage4;
