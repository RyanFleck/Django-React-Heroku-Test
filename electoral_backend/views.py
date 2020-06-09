import os
import datetime
import logging
from django.http import HttpResponse, JsonResponse
from django.views.generic import View
from django.conf import settings
from electoral_backend.models import Record
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator

terms_of_service = "Terms of Service\n\n\tBy using this web application you agree to have all data entered on this page used and stored by the Electoral system."
privacy_policy = "Privacy Policy\n\n\tThe developer of this application may look at the database to troubleshoot and be able to view emails and your submitted results."


class FrontendAppView(View):
    """
    Serves the compiled frontend entry point (only works if you have run `yarn
    build`).
    """
    index_file_path = os.path.join(
        settings.REACT_APP_DIR, 'build', 'index.html')

    @method_decorator(ensure_csrf_cookie)
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


class Authenticate(View):
    def post(self, request):
        return JsonResponse({'backend_up': True})


class TermsOfService(View):
    def get(self, request):
        return HttpResponse(terms_of_service, content_type="text/plain")


class PrivacyPolicy(View):
    def get(self, request):
        return HttpResponse(privacy_policy, content_type="text/plain")
