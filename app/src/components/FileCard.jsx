import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs'

const File = ({FileName, Size, Download}) => {
    return (
      <div className="bg-white p-6 w-full h-16 rounded-lg border-grey-200 border-2 flex items-center">
        <BsFillTrashFill className="text-red-500 text-2xl hover:text-red-700 cursor-pointer" />
  
        <div className="mx-4 h-6 border-l border-gray-300"></div>
  
        <div className="ml-4">
          <span className="block text-lg font-semibold">{FileName}</span>
          <span className="block text-lg text-gray-600">{Size}</span>
        </div>
  
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 ml-auto">
          {Download}
        </button>
      </div>
    );
  };
  
  
  

export default File;
