import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import '../Chat.css';
import axios from 'axios';

const ChatBot = () => {
    const { user } = {};
    const [name, setName] = useState(null);
    const [documentID, setDocumentID] = useState(null);
    const [loading, setLoading] = useState(false);
    const [inputList, setInputList] = useState([]);
    const [outputList, setOutputList] = useState(["Pipeline loaded. Make an inquiry!"]);
    const [inputValue, setInputValue] = useState('');

    // useEffect(() => {
    //     if (user) {
    //         if (query) {
    //             setName(query.name);
    //             setDocumentID(query.id);
    //         }
    //     } else {
    //         window.location = "/auth/login";
    //     }
    // }, []);

    const arrayMerge = (array1, array2) => {
        const mergedArray = [];

        for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
            if (array1[i] !== undefined) {
                mergedArray.push(array1[i]);
            }

            if (array2[i] !== undefined) {
                mergedArray.push(array2[i]);
            }
        }

        return mergedArray;
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        if (inputValue.trim() !== '') {
            setInputList([...inputList, inputValue]);
            setInputValue('');

            axios.post(``, {
                question: inputValue,
                document_id: documentID
            }).then(doc => {
                setOutputList([...outputList, doc.data.answer]);
                setLoading(false);
            }).catch(e => {
                console.log(e);
                setLoading(false);
            });
        }
    }

    return (
        <>
            <div className="Chat">
                <div className="top">
                    <h3><a href="/dashboard"><button className="back">Go Back</button></a> Session name</h3>
                </div>
                <div className="messageContainer">
                    <div className="messages">
                        {arrayMerge(outputList, inputList).map((message, index) => (
                            <div className="message" key={index}>
                                {message}
                            </div>
                        ))}
                    </div>
                    <form className="form" onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            autoFocus={true}
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Type your message..."
                            className="input"
                        />
                        <button disabled={loading} className={loading ? "disabled" : "sendButton"} type="submit">{loading ? "Processing" : "Send"}</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChatBot;