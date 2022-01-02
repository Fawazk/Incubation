from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Application(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    name = models.CharField(max_length=50,null=True)
    Address = models.CharField(max_length=100,null=True)
    city = models.CharField(max_length=10)
    state = models.CharField(max_length=10)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=10)
    companyname = models.CharField(max_length=20)
    companylogo = models.ImageField(max_length=20,null=True)
    describtion_on_team = models.TextField(max_length=100)
    describtion_on_company = models.TextField(max_length=100)
    unique_about_solution = models.TextField(max_length=100)
    value_proportion_for_customer = models.TextField(max_length=100)
    
    
class Slots(models.Model):
    serial_number = models.CharField(unique=True,max_length=2)
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    companyname = models.ForeignKey(Application, on_delete=models.CASCADE,null=True)
    

    