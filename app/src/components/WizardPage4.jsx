import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import File from "./FileCard";

const WizardPage4 = ({ visibility, formData, handleChange }) => {
  return (
    <div className={visibility ? "" : "hidden"}>
      <div className="font-sans text-sm bg-white p-8 rounded-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-semibold">Training Files</h1>
          <label className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-900 focus:outline-none focus:ring focus:border-blue-300 flex flex-row items-center space-x-2 cursor-pointer">
            <AiOutlineArrowUp />
            <span>Upload Training File</span>
            <input
              type="file"
              multiple
              onChange={handleChange}
              className="hidden"
            />
          </label>
        </div>

        <div className="flex mt-8 flex-col">
          <div className="w-full overflow-y-scroll space-y-4 ml-2 h-files-section">
            <File FileName={"File Name"} Size={"Size"} Download={"Download"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizardPage4;
