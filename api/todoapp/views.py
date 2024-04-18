from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Project, Section, Todo
from .serializer import ProjectSerializer, SectionSerializer, TodoSerializer

from django.db.models import Count
from rest_framework import viewsets


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class SectionViewSet(viewsets.ModelViewSet):
    serializer_class = SectionSerializer

    def get_queryset(self):
        return Section.objects.filter(project_id=self.kwargs["project_pk"])

    def get_serializer_context(self):
        return {"project_id": self.kwargs["project_pk"]}


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
