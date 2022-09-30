from django.db import models

# Create your models here.


class TestTodo1(models.Model):
    title = models.CharField(max_length=100, blank=True, null=True)


class TestTodo2(models.Model):
    title = models.CharField(max_length=100, blank=True, null=True)
