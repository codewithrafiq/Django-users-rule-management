from django.contrib import admin
from django.urls import path
from users_mgs.views import *
from django.urls import re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title="Snippets API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)
urlpatterns = [
    path('admin/',
         admin.site.urls),
    path("allUsers/",
         allUsers,
         name="allUsers"),
    path("allPermission/",
         allPermission,
         name="allPermission"),
    path("allGroups/",
         allGroups,
         name="allGroups"),
    path("gaveUserPermission/",
         gaveUserPermission,
         name="gaveUserPermission"),
    path("permissionUserDontHave/",
         permissionUserDontHave,
         name="permissionUserDontHave"),
    path("createAGroup/",
         createAGroup,
         name="createAGroup"),
    path("addPermissionsOnGroup/",
         addPermissionsOnGroup,
         name="addPermissionsOnGroup"),
    path("addUserToGroup/",
         addUserToGroup,
         name="addUserToGroup"),
    path("groupsUserDontHave/",
         groupsUserDontHave,
         name="groupsUserDontHave"),
    path("getPermissionsNotInGroup/",
         getPermissionsNotInGroup,
         name="getPermissionsNotInGroup"),



    path('swagger/', schema_view.with_ui('swagger',
                                         cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc',
                                       cache_timeout=0), name='schema-redoc'),

]
