class Pipeline:
    def __init__(self, request):
        # self.request = request
        # self.pipeline = {}
        self.name = request['name']
        self.description = request['description']
        self.author = request['author']
        self.created = request['created']
        self.last_updated = request['last_updated']
        self.visibility_public = request['visibility_public']
        self.has_upload = request['has_upload']
        self.dynamic_upload = request['dynamic_upload'] if self.request['has_upload'] else False
        self.uploads = self.handle_uploads(request)
        self.model = self.handle_model(request)

    def handle_uploads(self, request):
        # Logic to handle and store uploads
        uploads = []
        for upload in request['uploads']:
            current_upload = {
                'name': upload['name'],
                'type': upload['type'],
                'content': upload['content'],
                'reference': upload['reference']
            }
            uploads.append(current_upload)
        return uploads

    def handle_model(self, request):
        models = []
        for model in request['model']:
            current_model = {
                'type': model['type'],
                'is_custom': model['is_custom'],
                'train_file_format': model['train_file_format'] if model['is_custom'] else 'N/A',
                'train_file': model['train_file'] if model['is_custom'] else 'N/A',
                'has_test': model['has_test'] if model['is_custom'] else False,
                'test_file': model['test_file'] if model['is_custom'] and model['has_test'] else 'N/A',
                'generation': model['generation']
            }
            models.append(current_model)
        return models

    def process_data(self, document_list):
        # logic to process uploads into weviate vector database

    

    def search_data(self, search_query):
        # logic to search the database for the search query
        pass

    def create_pipeline(self):
        # logic to create the pipeline in the database
        pass


    def export_as_api(self):
        # Logic to export the pipeline as a REST API
        pass

    def export_as_json(self):
        # Logic to export the pipeline as a JSON file
        pass
