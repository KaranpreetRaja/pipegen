from flask import Blueprint, request, jsonify
from firebase_admin import firestore
from pipelineManager import Pipeline
pipeline_api = Blueprint('pipeline_api', __name__)

db = firestore.client()
pipelines_ref = db.collection('pipelines')


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
    pipeline_ref = pipelines_ref.document(pipeline_id)
    # set document data
    pipeline_ref.set({
        'name': pipeline.name,
        'description': pipeline.description,
        'author': pipeline.author,
        'created': pipeline.created,
        'last_updated': pipeline.last_updated,
        'visibility_public': pipeline.visibility_public,
        'has_upload': pipeline.has_upload,
        'dynamic_upload': pipeline.dynamic_upload,
        'uploads': pipeline.uploads,
        'model': pipeline.model
    })
    return jsonify({'success': True, 'pipeline_id': pipeline_id}), 200