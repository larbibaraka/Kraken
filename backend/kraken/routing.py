from django.conf.urls import url
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator, OriginValidator
from Tasks.consumer import TaskConsumer

application = ProtocolTypeRouter({
    # (http->django views is added by default)
    'websocket': AllowedHostsOriginValidator (
        URLRouter (
            [
                url(r'^tasks/', TaskConsumer)
            ]
        )
    )
})
