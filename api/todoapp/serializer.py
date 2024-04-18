from rest_framework import serializers

from .models import Project, Section, Todo
from action_serializer import ModelActionSerializer


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ["project", "section", "name", "description", "done"]


class SectionSerializer(ModelActionSerializer):
    todos = TodoSerializer(many=True, read_only=True)

    class Meta:
        model = Section
        fields = ["id", "name", "todos"]
        action_fields = {
            "retrieve": {"fields": ["id", "name"]},
        }

    def create(self, validated_data):
        project_id = self.context["project_id"]
        return Section.objects.create(project_id=project_id, **validated_data)


class ProjectSerializer(ModelActionSerializer):
    class Meta:
        model = Project
        fields = ["id", "name", "sections", "todos"]
        action_fields = {"list": {"fields": ["id", "name", "sections"]}}

    sections = SectionSerializer(many=True, read_only=True)
    todos = TodoSerializer(many=True, read_only=True)
