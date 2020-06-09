import os
import datetime
import logging
from django.http import HttpResponse, JsonResponse
from django.views.generic import View
from django.conf import settings
from electoral_backend.models import Record


class FrontendAppView(View):
    """
    Serves the compiled frontend entry point (only works if you have run `yarn
    build`).
    """
    index_file_path = os.path.join(
        settings.REACT_APP_DIR, 'build', 'index.html')

    def get(self, request):
        try:
            with open(self.index_file_path) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse(
                """
                This URL is only used when you have built the production
                version of the app. Visit http://localhost:3000/ instead after
                running `yarn start` on the frontend/ directory
                """,
                status=501,
            )


class TestDataView(View):
    """
    Prove I can use Axios to fetch JSON.
    """

    def get(self, request):

        # Add a record with every access.
        # b = Record(
        #    content=f'Test record creation at {datetime.datetime.now()}.')
        # b.save()

        record_num = Record.objects.count()
        json = {'it_works': True,
                'sent_from': "DJANGO!",
                'records': record_num}
        return JsonResponse(json)
