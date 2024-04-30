import dj_database_url
from .common import *
import os

DEBUG = False

SECRET_KEY = os.environ["SECRET_KEY"]

ALLOWED_HOSTS = ["agile-depths-63211-0290749cc0cd.herokuapp.com"]

DATABASES = {"default": dj_database_url.config()}
