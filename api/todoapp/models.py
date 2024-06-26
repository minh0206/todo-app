from django.db import models
from django.conf import settings


class Project(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)


class Section(models.Model):
    project = models.ForeignKey(
        Project, on_delete=models.CASCADE, related_name="sections"
    )
    name = models.CharField(max_length=100)


class Todo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="todos")
    section = models.ForeignKey(
        Section, on_delete=models.CASCADE, related_name="todos", null=True
    )
    name = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    done = models.BooleanField()
