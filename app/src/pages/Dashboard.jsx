import React from 'react';
import Navbar from '../components/Navbar';
import Card1 from '../components/card1';
import Card2 from '../components/card2';
import { FaRocketchat } from 'react-icons/fa';
import PipelineConfig from '../components/PipelineConfig';

const Dashboard = () => {
	return (
		<div className="flex flex-col">
			<Navbar />
			<div className="flex-1 flex flex-col overflow-hidden bg-gray-100 h-full">
				<div className="container mx-auto mt-8 ml-8">
					<div className="mb-4">
						<h1 className="text-3xl font-bold mb-4">Dashboard</h1>
						<h2 className="text-1xl font-semibold">Sessions</h2>
						<div className="flex card-scroll">
							<Card1 />
							<Card1 />
							<Card1 />
							<Card1 />
						</div>
						<h2 className="text-1xl font-semibold mt-2">Recent Pipelines Pipeline</h2>
						<div className="flex card-scroll">
							<Card1 />
							<Card1 />
							<Card1 />
							<Card1 />
						</div>
					</div>
					<div className='flex flex-row justify-center items-center mb-6'>
						<div className="bg-white h-68 max-w-lg p-12 w-full  rounded-lg flex flex-col items-center">
							<div className="text-4xl text-blue-500 mb-4 mt-5">
								<FaRocketchat />
							</div>
							<h2 className="text-xl font-semibold mb-2">Create a New Pipeline</h2>
							<p className="text-gray-600 mb-4 center text-center">
								Click the button below to start your new Pipeline Session
							</p>
							<PipelineConfig/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
