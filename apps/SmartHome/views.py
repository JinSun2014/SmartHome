import json

from django import http
from django.utils.decorators import method_decorator
from django.views.generic import View, TemplateView
from django.views.decorators.csrf import csrf_exempt
from settings.dev_local import COMMAND_PATH

def writeCommand(node, motion):
    f = open(COMMAND_PATH, 'a')
    msg = str(node) + ' ' + motion + '\n'
    f.write(msg)

class JSONResponseMixin(object):
    def render_to_response(self, context):
        return self.get_json_response(self.convert_context_to_json(context))

    def get_json_response(self, content, **httpresponse_kwargs):
        return http.HttpResponse(
            content,
            content_type='application/json',
            **httpresponse_kwargs
        )

    def convert_context_to_json(self, context):
        return json.dumps(context)


class IndexView(TemplateView):
    template_name = 'index.html'


class APIView(JSONResponseMixin, View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(APIView, self).dispatch(request, *args, **kwargs)


class EventView(APIView):
    http_method_names = [u'post']

    def post(self, request, *args, **kwargs):
        device = kwargs['device']
        motion = kwargs['motion']
        # Do something with device and motion
        writeCommand(1, motion)
        print device, motion
        context = {'success': True}
        return self.render_to_response(context)
