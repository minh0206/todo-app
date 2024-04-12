from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Category, Todo
from .serializer import CategorySerializer, TodoSerializer

from django.db.models import Count


def home(request):
    return HttpResponse("Hello, world. You're at the todoapp index.")


@api_view(["GET", "POST"])
def todo_list(request):
    # GET
    if request.method == "GET":
        queryset = Todo.objects.select_related("category").all()
        serializer = TodoSerializer(queryset, many=True)
        return Response(serializer.data)

    # POST
    elif request.method == "POST":
        serializer = TodoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(["GET", "PUT", "DELETE"])
def todo_detail(request, id):
    todo = get_object_or_404(Todo, id=id)

    # GET
    if request.method == "GET":
        serializer = TodoSerializer(todo)
        return Response(serializer.data)

    # PUT
    elif request.method == "PUT":
        serializer = TodoSerializer(todo, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    # DELETE
    elif request.method == "DELETE":
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(["GET", "POST"])
def category_list(request):
    # GET
    if request.method == "GET":
        queryset = Category.objects.annotate(todos_count=Count("todo")).all()
        serializer = CategorySerializer(queryset, many=True)
        return Response(serializer.data)

    # POST
    elif request.method == "POST":
        serializer = CategorySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(["GET", "PUT", "DELETE"])
def category_detail(request, id):
    category = get_object_or_404(
        Category.objects.annotate(todos_count=Count("todo")), id=id
    )

    # GET
    if request.method == "GET":
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    # PUT
    elif request.method == "PUT":
        serializer = CategorySerializer(category, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    # DELETE
    elif request.method == "DELETE":
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
