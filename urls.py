from django.conf.urls import patterns, url, include

from django.contrib import admin
import apps.SmartHome.views as SHViews


admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'SmartHome.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', SHViews.IndexView.as_view(), name='index'),
    url(r'^operate/(?P<device>\w+)/(?P<motion>\w+)$', SHViews.EventView.as_view(), name='device'),
)

urlpatterns += patterns('django.contrib.staticfiles.views',
    url(r'^static/(?P<path>.*)$', 'serve'),
)
