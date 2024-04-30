from .common import *

DEBUG = True

SECRET_KEY = "django-insecure-un!2o2se!fnat=ws*7^ajga@w##_p&v7s6sla0e2jpwobiz460"

# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}
