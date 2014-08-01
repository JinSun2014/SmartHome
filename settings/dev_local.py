from settings import *

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'MyHome',
        'USER': 'me',
        'PASSWORD': 'my_pwd',
        'HOST': '127.0.0.1',
        'PORT': '',
    }
}
