import React from 'react';
import 'reactjs-popup/dist/index.css';
import { AiOutlineArrowUp } from 'react-icons/ai';
import File from "./FileCard";

const FileUpload = ({ visibility }) => {
  return (
      <div className={visibility ? 'hidden' : ''}>
        <div className="font-sans text-sm bg-white p-8 rounded-lg w-full">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-semibold">Your Files</h1>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-900 focus:outline-none focus:ring focus:border-blue-300 flex flex-row items-center space-x-2">
              <AiOutlineArrowUp />
              <span>Upload a new File</span>
            </button>
          </div>

          <div className="flex mt-8">
            <div className="w-full overflow-y-scroll space-y-4 ml-2 h-files-section">
              <File />
              <File />
              <File />
              <File />
              <File />
              <File />
              <File />
              <File />
              <File />
              <File />
              <File />
              <File />
            </div>
          </div>
        </div>
      </div>
  );
};

export default FileUpload;
