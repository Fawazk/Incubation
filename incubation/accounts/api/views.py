from rest_framework.response import Response
from rest_framework.views import APIView
from . serializers import ApplicationSerializer, SlotsSerializer, UserSerializer
from accounts.models import Application, Slots
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from rest_framework.decorators import api_view, parser_classes,authentication_classes,permission_classes
from rest_framework.parsers import FormParser, MultiPartParser


# 
class Register(APIView):
    permission_classes=[AllowAny]
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.validated_data)
        else:
            return Response(serializer.errors)
        
class ApplicationAV(APIView):
    permission_classes=[IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]
    def post(self, request):
        print('fawaazaaa')
        serializer = ApplicationSerializer(data=request.data)
        if serializer.is_valid():
            print('sanin')
            serializer.save()
            return Response(serializer.data)
        else:
            print(serializer.errors)
            return Response(serializer.errors)
        
class AdminApplication(APIView):
    permission_classes=[IsAdminUser]
    def get(self, request):
        details = Application.objects.all()
        serializer = ApplicationSerializer(details,many=True,context={'request': request})
        return Response(serializer.data)
class UpdateApplication(APIView):
    permission_classes=[AllowAny]
    def put(self, request,id):
        details = Application.objects.get(id=id)
        serializer = ApplicationSerializer(details,data=request.data,)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)    
    def delete(self, request,id):
        details = Application.objects.get(id=id)
        details.delete()
        return Response({'message':'Application deleted'})
        
class SlotsAV(APIView):
    permission_classes =[IsAdminUser]
    def get(self, request):
        slots = Slots.objects.all()
        serializer = SlotsSerializer(slots,many=True,context={'request': request})
        return Response(serializer.data)
    def post(self, request):
        serializer = SlotsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
class UpdateSlot(APIView):
    permission_classes =[IsAdminUser]
    def put(self,request,id):
        details = Slots.objects.get(id=id)
        serializer = SlotsSerializer(details,data=request.data,)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)  
    def delete(self,request,id):
        details = Slots.objects.get(id=id)
        details.delete()
        return Response({'message':'Slot deleted'})