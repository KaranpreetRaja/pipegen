import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import WizardPage2 from './WizardPage2';
import WizardPage1 from './WizardPage1';
import WizardPage3 from './WizardPage3';
import WizardPage4 from './WizardPage4';

const PipelineConfig = () => {
    const [currentPage, setCurrentPage] = useState(1); // Track the current page

    const filetoBLOB = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve(event.target.result)
        };
        reader.readAsDataURL(file);
    })

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        author: "", 
        created: "", 
        last_updated: "", 
        visibility_public: false,
        has_upload: false,
        dynamic_upload: false,
        uploads: [],
        model: [
          {
            type: "", 
            is_custom: false,
            train_file_format: "", 
            train_file: "", 
            has_test: false,
            test_file: "", 
            generation: "",
          },
        ],
    });
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === "has_upload" && !checked) {
            setFormData((prevData) => ({
                ...prevData,
                [name]: type === "checkbox" ? checked : value,
                dynamic_upload: false,
                uploads: [],
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: type === "checkbox" ? checked : value,
            }));
        }
    };

    const handleNext = () => {
        if (currentPage === 1) {
            setCurrentPage(formData.has_upload ? 2 : 3);
        } else if (currentPage === 2) {
            setCurrentPage(formData.model[0].is_custom ? 4 : 3);
        } else {
            console.log("Make Pipeline");
        }
    };
    

    return (
        <Popup
            trigger={
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                    Create Pipeline
                </button>
            }
            position="center center" modal nested>
            {close => (
                <div className="bg-white h-file-upload-modal rounded-t-lg">
                    <div className="flex justify-center items-center w-full mb-4 bg-gray-200 rounded-t-lg">
                        <h1 className="text-xl font-medium">New Pipeline</h1>
                    </div>
                    {currentPage === 1 && <WizardPage1 visibility={true} formData={formData} handleChange={handleChange} />}
                    {currentPage === 2 && <WizardPage2 visibility={false} formData={formData} handleChange={handleChange} />}
                    {currentPage === 3 && <WizardPage3 visibility={false} formData={formData} handleChange={handleChange} />}
                    {currentPage === 4 && <WizardPage4 visibility={false} formData={formData} handleChange={handleChange} />}
                    {currentPage !== 4 && (
                        <div className="flex justify-end w-full rounded-t-lg">
                            <button 
                                className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                                onClick={handleNext}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            )}
        </Popup>
    );
}

export default PipelineConfig;
