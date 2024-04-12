from rest_framework import serializers

from .models import Category, Todo


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name", "todos_count"]

    todos_count = serializers.IntegerField()


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ["category", "name", "description", "done"]
