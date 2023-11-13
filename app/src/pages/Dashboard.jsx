import React from 'react';
import Navbar from '../components/Navbar';
import Card1 from '../components/card1';
import Card2 from '../components/card2';
import { FaRocketchat } from 'react-icons/fa';
import File_Upload_Window from '../components/FileUpload';

const Dashboard = () => {
    return (
        <div className="flex flex-col">
            <Navbar />

            <div className="flex-1 flex flex-col overflow-hidden bg-gray-100 h-full">
				<div className="container mx-auto my-8 p-4">
					<div className="mb-16">
						<h1 className="text-5xl font-semibold mb-4">Dashboard</h1>
						<h2 className="text-3xl font-semibold mb-4">Recent Pipeline Sessions</h2>
						<div className="gap-4 flex">
							<Card1/>
							<Card1/>
							<Card1/>
							<Card1/>
						</div>
					</div>
					<div className='flex flex-row justify-between'>
						<div className='w-full'>
							<div>
								<h2 className="text-3xl font-semibold mb-4 w-full">Pipeline Configurations</h2>
								<Card2>
									<File_Upload_Window/>
								</Card2>
							</div>
						</div>
						<div className="bg-white p-6 w-1/2 mt-11 h-64 rounded-lg shadow-md flex flex-col items-center">
							<div className="text-4xl text-blue-500 mb-4 mt-5">
								<FaRocketchat />
							</div>
							<h2 className="text-xl font-semibold mb-2">Create a New Pipeline</h2>
							<p className="text-gray-600 mb-4">
								Click the button below to start your new Pipeline Session.
							</p>
							<button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
								Create Pipeline
							</button>
						</div>

					</div>
				</div>
            </div>
        </div>
    );
};

export default Dashboard;
