import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

const File = ({ FileName, Size, onDelete, index }) => {
  const handleDeleteClick = () => {
    onDelete(index);
  };

  return (
    <div className="bg-white p-6 w-full h-16 rounded-lg border-grey-200 border-2 flex items-center justify-between">
      <div className="ml-4">
        <span className="block text-lg font-semibold">{FileName}</span>
        <span className="block text-lg text-gray-600">{Size}</span>
      </div>
      <div className='flex flex-row'>
        <div className="mx-4 h-6 border-l border-gray-300"></div>
        <BsFillTrashFill
          onClick={handleDeleteClick}
          className="ml-11 text-red-500 text-2xl hover:text-red-700 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default File;
