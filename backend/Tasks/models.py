from django.db import models
from Columns.models import Column

class Task(models.Model):
    column = models.ForeignKey(Column, on_delete=models.CASCADE)
    content = models.CharField(max_length=255)

    def __str__(self):
        return self.content
