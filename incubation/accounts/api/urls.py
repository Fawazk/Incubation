from django.contrib import admin
from django.urls import path,include
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView


urlpatterns = [
    path('register/',views.Register.as_view(),name='signup'),
    
    path('application/',views.ApplicationAV.as_view(),name='application'),
    path('adminapplication/',views.AdminApplication.as_view(),name='adminapplication'),
    path('updateapplication/<int:id>/',views.UpdateApplication.as_view(),name='updateapplication'),
    
    path('slots/',views.SlotsAV.as_view(),name='slots'),
    path('updateslot/<int:id>/',views.UpdateSlot.as_view(),name='updateslot'),
    
    
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]