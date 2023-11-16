import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AiFillFileAdd, AiOutlineArrowUp } from 'react-icons/ai'
import { useState } from 'react';
import File from './FileCard';

const PipelineConfig = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        visibility_public: false,
        has_upload: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };

      
    return(
        <Popup trigger={
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                    Create Pipeline
                </button>
            } position="center center" modal nested>
            {close => (
            <div className="bg-white h-file-upload-modal rounded-t-lg">
                <div className="flex justify-center items-center w-full mb-4 bg-gray-200 rounded-t-lg">
                    <h1 className="text-xl font-medium">New Pipeline</h1>
                </div>

                    <form className="p-6">
                    {/* Pipeline Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Pipeline Name:
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        />
                    </div>

                    {/* Pipeline Description */}
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-semibold mb-2">
                        Pipeline Description:
                        </label>
                        <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        ></textarea>
                    </div>

                    {/* Visibility Public */}
                    <div className="mb-4">
                        <label htmlFor="visibility_public" className="flex items-center">
                        <input
                            type="checkbox"
                            id="visibility_public"
                            name="visibility_public"
                            checked={formData.visibility_public}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <span className="text-sm">Public Visibility</span>
                        </label>
                    </div>

                    {/* Has Upload */}
                    <div className="mb-4">
                        <label htmlFor="has_upload" className="flex items-center">
                        <input
                            type="checkbox"
                            id="has_upload"
                            name="has_upload"
                            checked={formData.has_upload}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <span className="text-sm">Has Upload</span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                    >
                        Create Pipeline
                    </button>
                    </form>
            </div>
            
            )}
        </Popup>
    )
}

export default PipelineConfig;