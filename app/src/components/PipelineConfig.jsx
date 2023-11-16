import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import WizardPage2 from "./WizardPage2";
import WizardPage1 from "./WizardPage1";
import WizardPage3 from "./WizardPage3";
import WizardPage4 from "./WizardPage4";
import axios from 'axios';

const PipelineConfig = () => {
  const [page, setPage] = useState(1);
  const [btnName, setBtnName] = useState("Next")
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
    model: 
      {
        type: "",
        is_custom: false,
        train_file_format: "",
        train_file: "",
        has_test: false,
        test_file: "",
        generation: "",
      },
  });

  const fileToBlob = () => {}
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith("model.")) {
      setFormData((prevData) => ({
        ...prevData,
        model: {
          ...prevData.model,
          [name.split(".")[1]]: type === "checkbox" ? checked : value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
    // console.log(formData)
  };

  const handleNext = (e) => {
    handleChange(e);

    if (page == 1){
      if (formData.has_upload === true){
        setPage(2)
      }
      else{
        setFormData((prevData) => ({
          ...prevData,
          dynamic_upload: false,
          uploads: [],
        }));
        setPage(3)
      }
    }
    else if (page === 2){
        setPage(3)
    }
    else if (page === 3){
      if (formData.model.is_custom === true){
        setPage(4)
        setBtnName("Create")
      }
      else{
        // TO DO: Reset training files in formData to null
        console.log("Finished creating pipeline")
        console.log(formData)
      }
    }
    else if (page === 4){
      console.log("Finished creating pipeline")
      console.log(formData)
    }
    
  }

  const handleBack = (e) => {
    handleChange(e);

    if (page === 4) {
      setPage(3);
    } else if (page === 3) {
      if (formData.has_upload === true){
        setPage(2);
      }
      else{
        setPage(1);
      }
    } else if (page === 2) {
      setPage(1);
    }
  };

  const createPipeline = async () => {
    try {
      const response = await axios.post('your_api_endpoint_here', formData);
      console.log('Pipeline created:', response.data);
      // TO DO: Navigate to Model Page
    } catch (error) {
      console.error('Error creating pipeline:', error);
    }
  }

  const clearFormData = () => {
    setFormData({
      name: "",
      description: "",
      author: "",
      created: "",
      last_updated: "",
      visibility_public: false,
      has_upload: false,
      dynamic_upload: false,
      uploads: [],
      model: 
        {
          type: "",
          is_custom: false,
          train_file_format: "",
          train_file: "",
          has_test: false,
          test_file: "",
          generation: "",
        },
    });
  }
  
  return (
    <Popup
      trigger={
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          Create Pipeline
        </button>
      }
      position="center center"
      modal
      nested
      closeOnDocumentClick={false}
    >
      {(close) => (
        <div className="bg-white h-file-upload-modal rounded-t-lg flex flex-col justify-between">
          <div className="flex justify-center items-center w-full mb-4 bg-gray-200 rounded-t-lg">
            <h1 className="text-xl font-medium">New Pipeline</h1>
          </div>
            <WizardPage1
              visibility={page === 1}
              formData={formData}
              handleChange={handleChange}
            />
         
          
            <WizardPage2
              visibility={page === 2}
              formData={formData}
              handleChange={handleChange}
              handleFiles={handleFiles}
            />
         
          
            <WizardPage3
              visibility={page === 3}
              formData={formData}
              handleChange={handleChange}
            />
          
        
            <WizardPage4
              visibility={page === 4}
              formData={formData}
              handleChange={handleChange}
            />
          
          
            <div className="flex justify-between w-full rounded-t-lg">
            <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                onClick={handleBack}
              >
                Back
              </button>

              <div className="flex flex-row space-x-4">
                <button
                  className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                  onClick={() => {
                    setPage(1)
                    close();
                    clearFormData();
                  }}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-300"
                  onClick={handleNext}
                >
                  {btnName}
                </button>
                
              </div>
            </div>
        </div>
      )}
    </Popup>
  );
};

export default PipelineConfig;
