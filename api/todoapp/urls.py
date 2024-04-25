from django.urls import path, include
from rest_framework_nested import routers

from . import views

# Create a router and register our ViewSets with it.
router = routers.DefaultRouter()
router.register("projects", views.ProjectViewSet, basename="project")

projects_router = routers.NestedDefaultRouter(router, "projects", lookup="project")
projects_router.register("sections", views.SectionViewSet, basename="project-sections")

router.register("todos", views.TodoViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path("", include(router.urls)),
]

urlpatterns = [
    path(r"", include(router.urls)),
    path(r"", include(projects_router.urls)),
]
