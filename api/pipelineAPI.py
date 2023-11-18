from flask import Blueprint, request, jsonify
from firebase_admin import firestore
from pipelineManager import Pipeline
pipeline_api = Blueprint('pipeline_api', __name__)

db = firestore.client()
pipelines_ref = db.collection('pipelines')
pipelines={}

'''
POST /api/pipeline/create

Description: Creates a new pipeline in the database.

JSON request format:
{
    "name": "pipeline name",
    "description": "pipeline description",
    "author": "pipeline author (uid)",
    "created": "pipeline creation date",
    "last_updated": "pipeline last update date",
    "visibility_public": boolean,
    "has_upload": boolean,
    "dynmaic_upload": boolean (always false if has_upload is false, otherwise depends on user input),
    "uploads": [
        {
            "name": "upload name",
            "type": "upload type",
            "content": "upload content"
            "reference": "upload reference"
        },
        ...
    ],
    "model": [
        {
            "type": "model type (ex. generative, classification, etc.)",
            "is_custom": boolean,
            "train_file_format": "train file format (N/A if is_custom is false)",
            "train_file": "train file blob (N/A if is_custom is false)",
            "has_test": boolean (always false if is_custom is false, otherwise depends on user input),
            "test_file": "test file blob (N/A if is_custom is false or has_test is false)",
            "generation":
        },
        ...
    ]
    
}

JSON response format:
{
    "success": boolean,
    "pipeline_id": "pipeline id"
}

JSON error format:
{
    "success": boolean,
    "error": "error message"
}
'''
@pipeline_api.route('/create', methods=['POST'])
def create_pipeline():
    request_json = request.json
    pipeline = Pipeline(request_json)
    pipeline.create_pipeline()
    # create uid for document name
    pipeline_id = pipelines_ref.document().id
    # create document
    pipeline_doc = pipelines_ref.document(pipeline_id)
    # get json pipeline data and set as document data
    pipeline_doc.set(pipeline_data = pipeline.export_as_json())
    pipelines[pipeline_id] = pipeline
    return jsonify({'success': True, 'pipeline_id': pipeline_id}), 200

'''
GET /api/pipeline/<pipeline_id>

Description: Gets a pipeline's information.

JSON response format:

{
    "name": "pipeline name",
    "description": "pipeline description",
    "author": "pipeline author (uid)",
    "created": "pipeline creation date",
    "last_updated": "pipeline last update date",
    "visibility_public": boolean,
    "has_upload": boolean,
    "dynmaic_upload": boolean (always false if has_upload is false, otherwise depends on user input),
    "uploads": [
        {
            "name": "upload name",
            "type": "upload type",
            "content": "upload content"
            "reference": "upload reference"
        },
        ...
    ],
    "model": [
        {
            "type": "model type (ex. generative, classification, etc.)",
            "is_custom": boolean,
            "train_file_format": "train file format (N/A if is_custom is false)",
            "train_file": "train file blob (N/A if is_custom is false)",
            "has_test": boolean (always false if is_custom is false, otherwise depends on user input),
            "test_file": "test file blob (N/A if is_custom is false or has_test is false)",
            generation": boolean,
            "generation_prompt": "generation prompt" (N/A if generation is false),
        },
        ...
    ]
}

JSON error format:

{
    "error": "error message"
}
'''
@pipeline_api.route('/<pipeline_id>', methods=['GET'])
def get_pipeline(pipeline_id):
    try:
        pipeline = pipelines[pipeline_id]
        return jsonify(pipeline.export_as_json()), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    
'''
GET /api/pipeline/<pipeline_id>/run

Description: Runs a pipeline for a specified prompt.

JSON request format:

{
    "prompt": "prompt text"
}

JSON response format:

{
    "success": boolean,
    "output": "output text"
}

JSON error format:
    
{
    "success": boolean,
    "error": "error message"
}

'''
@pipeline_api.route('/<pipeline_id>/run', methods=['GET'])
def run_pipeline(pipeline_id):
    try:
        pipeline = pipelines[pipeline_id]
        prompt = request.json['prompt']
        response = pipeline.call_rag_model(prompt)
        return jsonify({'success': True, 'output': response}), 200
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

'''
GET /api/pipeline/public_pipelines

Description: Gets all public pipeline ids.

JSON response format:

{
    "pipeline_ids": [
        "pipeline id 1",
        "pipeline id 2",
        ...
    ]
}

 
JSON error format:

{
    "error": "error message"
}
'''
@pipeline_api.route('/public_pipelines', methods=['GET'])
def get_public_pipelines():
    try:
        # use firestore database to get all public pipeline ids
        pipeline_ids = []
        # for pipeline in pipelines_ref
        for pipeline_doc in pipelines_ref:
            # if pipeline is public
            if pipeline_doc['visibility_public']:
                # add pipeline id to pipeline_ids
                pipeline_ids.append(pipeline_doc.id)
        return jsonify({'pipeline_ids': pipeline_ids}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 
