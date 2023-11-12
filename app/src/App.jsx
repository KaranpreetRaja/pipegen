import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<div>
			<Navbar/>
			<div className="hero-section">
				<div className="hero-content">
					<h1 className="hero-text">Produce <span className='highlight'>RAG pipelines</span> with ease and integrate them seamlessly</h1>
					<a href="/signup"><button className='hero-btn'>Get started</button></a>
					<p>Turn your documents into AI in seconds</p>
				</div>
			</div>

			<div id='features' className='features-section'>
				<strong style={{ color: "#ef4f1a" }}>Features</strong>
				<h1>How we rock</h1>
				<main className="grid-container">
					<section className="data-section card">
						<h3>Data Ingestion</h3>
						<p><strong>Source Options:</strong> Ability to ingest data from various sources such as text documents, websites, or databases.</p>
						<p><strong>Data Preprocessing:</strong> Preprocess and clean the data to ensure it is suitable for training RAG models.</p>
					</section>
					<section className="model-training-section card">
						<h3>Model Training</h3>
						<p><strong>RAG Model Configuration:</strong> Allow users to configure parameters of the RAG model, including the retrieval component and the generation component.</p>
						<p><strong>Training Interface:</strong> Provide an interface for users to train the RAG model on their data.</p>
					</section>
					<section className="retrieval-section card">
						<h3>Retrieval Component</h3>
						<p><strong>Search Options:</strong> Integration with search engines or databases to retrieve relevant documents for a given query.</p>
						<p><strong>Scoring Mechanism:</strong> Implement a scoring mechanism for ranking retrieved documents based on relevance.</p>
					</section>
					<section className="generation-section card">
						<h3>Generation Component</h3>
						<p><strong>Language Generation:</strong> Utilize advanced natural language generation techniques for creating coherent and contextually relevant responses.</p>
						<p><strong>Fine-tuning:</strong> Enable fine-tuning of the generation model based on specific use cases or domains.</p>
					</section>
					<section className="user-interaction-section card">
						<h3>User Interaction</h3>
						<p><strong>User Interface (UI):</strong> Provide an intuitive and user-friendly interface for users to interact with the app, configure settings, and view results.</p>
						<p><strong>Query Input:</strong> Allow users to input queries for information retrieval and generation.</p>
					</section>
					<section className="integration-api-section card">
						<h3>Integration and API</h3>
						<p><strong>API Support:</strong> Offer APIs for integration with other applications and services, allowing developers to embed RAG capabilities into their own systems.</p>
						<p><strong>Third-Party Integrations:</strong> Support integration with external data sources, databases, or other AI services.</p>
					</section>
					<section className="monitoring-section card">
						<h3>Model Monitoring and Maintenance</h3>
						<p><strong>Monitoring Tools:</strong> Provide tools for monitoring the performance of the RAG model over time.</p>
						<p><strong>Automatic Updates:</strong> Implement mechanisms for automatic updates and retraining to adapt to evolving language patterns and data distributions.</p>
					</section>
					<section className="documentation-support-section card">
						<h3>Documentation and Support</h3>
						<p><strong>User Documentation:</strong> Offer comprehensive documentation to guide users on how to use the app effectively.</p>
						<p><strong>Customer Support:</strong> Provide customer support channels for users who need assistance or have inquiries.</p>
					</section>
					<section className="customization-section card">
						<h3>Customization</h3>
						<p><strong>Configurability:</strong> Allow users to customize the behavior of the RAG pipeline according to their specific requirements.</p>
						<p><strong>Plug-in System:</strong> Support a plug-in system for users to add custom modules or components.</p>
					</section>
				</main>
			</div>
		</div>
	);
};

export default App;
