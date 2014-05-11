from django.conf.urls import patterns, include, url

from django.contrib import admin
from apps.SmartHome import views
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'SmartHome.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    #url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.IndexView.as_view(), name = 'index'),
)

urlpatterns += patterns('django.contrib.staticfiles.views',
    url(r'^static/(?P<path>.*)$', 'serve'),
)
