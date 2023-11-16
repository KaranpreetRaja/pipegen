import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import FileUpload from './FileUpload';
import WizardPage1 from './WizardPage1';

const PipelineConfig = () => {
    
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
                <WizardPage1 visibility={true}/>
                <FileUpload visibility={false}/>

            </div>
            
            )}
        </Popup>
    )
}

export default PipelineConfig;