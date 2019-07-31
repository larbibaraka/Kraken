import asyncio
from channels.consumer import AsyncConsumer
from channels.db import database_sync_to_async

class TaskConsumer(AsyncConsumer):
    async def websocket_connect(self, event):
        print("connected", event)
        await self.send({
            "type": "websocket.accept"
        })

    async def websocket_recive(self, event):
        print("recived", event)

    async def websocket_disconnect(self, event):
        print("disconnected", event)
