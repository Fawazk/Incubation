from rest_framework import serializers
from django.contrib.auth.models import User
from accounts.models import Application, Slots

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = "_all_"
        exclude =('first_name','last_name')  
    
    def validate_password(self,value):
        if len(value)<4:
            raise serializers.ValidationError("Password must be minimum 4 characters")
        else:
            return value
    def save(self):
        reg = User(
            email=self.validated_data['email'],
            username=self.validated_data['username'],
        )
        password=self.validated_data['password']
        reg.set_password(password)
        reg.save()
        return reg            
        
class ApplicationSerializer(serializers.ModelSerializer):
    # companylogo = serializers.ImageField(max_length=None,use_url=True)
    class Meta:
        model = Application
        fields = "__all__"
        
    
    def validate_phone(self,value):
        if len(value)<10 or len(value)>10:
            raise serializers.ValidationError("Phone Number must be 10 characters")
        else:
            return value
        
        
class SlotsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slots
        fields = "__all__"