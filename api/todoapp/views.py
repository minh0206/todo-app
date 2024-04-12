from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Todo
from .serializer import TodoSerializer


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
    # GET
    if request.method == "GET":
        product = get_object_or_404(Todo, id=id)
        serializer = TodoSerializer(product)
        return Response(serializer.data)

    # PUT
    elif request.method == "PUT":
        product = get_object_or_404(Todo, id=id)
        serializer = TodoSerializer(product, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    # DELETE
    elif request.method == "DELETE":
        product = get_object_or_404(Todo, id=id)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
