import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AiFillFileAdd, AiOutlineArrowUp } from 'react-icons/ai'
import { useState } from 'react';
import File from './FileCard';

const File_Upload_Window = () => {
    return(
        <Popup trigger={
            <button className='w-full flex flex-col items-center bg-slate-200 p-4 rounded-md hover:bg-slate-300 transition duration-300 ease-in-out'>
                <AiFillFileAdd className='text-9xl text-blue-500' />
                <span className='text-lg mt-2 text-gray-800 font-semibold'>Initial File Upload</span>
            </button>} position="center center" modal nested>

            {close => (
            <div className="font-sans text-sm bg-white p-8 rounded-lg w-full h-file-upload-modal">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-semibold">Your Files</h1>
                    <button className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-900 focus:outline-none focus:ring focus:border-blue-300 flex flex-row items-center space-x-2">
                        <AiOutlineArrowUp />
                        <span>Upload a new File</span>
                    </button>
                </div>

                <div className="flex justify-end mt-4">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700 focus:outline-none focus:ring focus:border-green-300">
                        Select
                    </button>
                </div>

                <div className="flex mt-4">
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
            
            )}
        </Popup>
    )
}

export default File_Upload_Window