from django.urls import path

from . import views

urlpatterns = [
    path("", views.home),
    path("todos/", views.todo_list),
    path("todos/<int:id>/", views.todo_detail),
    path("categories/", views.category_list),
    path("categories/<int:id>/", views.category_detail),
]
