from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import (
    api_view,
    permission_classes,
    authentication_classes)
from django.contrib.auth.models import User, Permission, Group
from users_mgs.serializers import *
from rest_framework import status
from rest_framework import permissions, authentication
from users_mgs.utils import superuser_only


@api_view(["GET"])
@permission_classes([permissions.IsAuthenticated])
@authentication_classes([authentication.TokenAuthentication])
@superuser_only
def allUsers(request):
    """
    It takes a request, tries to get all the users from the database, serializes them, and returns them
    in a response

    Args:
      request: The request object is the first parameter to any view. It contains the request data,
    including the HTTP method, the URL, the headers, the body, and any other information that the client
    sent.

    Returns:
      A list of all users in the database.
    """
    try:
        users_serializers = UserSerializer(User.objects.all(), many=True)
        return Response(users_serializers.data, status.HTTP_200_OK)
    except Exception as e:
        return Response(e, status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET"])
@permission_classes([permissions.IsAuthenticated])
@authentication_classes([authentication.TokenAuthentication, authentication.SessionAuthentication])
@superuser_only
def allPermission(request):
    """
    It returns a list of all the permissions in the database

    Args:
      request: The request object.

    Returns:
      A list of all the permissions in the database.
    """
    permissions_serializers = PermissionSerializer(
        Permission.objects.all(), many=True)
    # print(Permission.objects.count())
    return Response(permissions_serializers.data)


@api_view(["GET"])
@permission_classes([permissions.IsAuthenticated])
@authentication_classes([authentication.TokenAuthentication,
                         authentication.SessionAuthentication, ])
@superuser_only
def allGroups(requst):
    """
    It takes a request, gets all the groups from the database, serializes them, and returns them as a
    response

    Args:
      requst: This is the request object that is sent to the server.

    Returns:
      A list of all the groups in the database.
    """
    groups_serializers = GroupSerializer(Group.objects.all(), many=True)
    return Response(groups_serializers.data)


@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
@authentication_classes([authentication.TokenAuthentication, authentication.SessionAuthentication])
@superuser_only
def gaveUserPermission(request, *args, **kwargs):
    """
    It takes a request, and if the request is valid, it adds the permissions to the user

    Args:
      request: The request object.

    Returns:
      A list of all the permissions that the user has.
    """
    try:
        data = request.data
        # print("data----->", data)
        user = User.objects.get(id=data["user_id"])
        for permission_id in data["permission_ids"]:
            permission = Permission.objects.get(id=permission_id)
            user.user_permissions.add(permission)
        return Response(status=status.HTTP_201_CREATED)
    except Exception as e:
        # print(e)
        return Response(
            {"error": "Wrong permission"},
            status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
@authentication_classes([authentication.TokenAuthentication, authentication.SessionAuthentication])
@superuser_only
def permissionUserDontHave(request):
    """
    It returns all the permissions that a user doesn't have

    Args:
      request: The request object.

    Returns:
      This function returns all the permissions that the user does not have.
    """
    try:
        user = User.objects.get(id=request.data["user_id"])
        if user.is_superuser:
            return Response(

                {
                    "message": "This is a superuser,Superuser have all the permissions"
                }
            )
        permissions_obj = Permission.objects.exclude(user=user)
        permissions_serializers = PermissionSerializer(
            permissions_obj, many=True)
        # print(permissions_obj.count())
        return Response({
            "data": permissions_serializers.data
        })
    except Exception as e:
        # print(e)
        return Response(
            status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
@authentication_classes([authentication.TokenAuthentication, authentication.SessionAuthentication])
@superuser_only
def groupsUserDontHave(request):
    """
    It returns all the groups that a user doesn't have access to

    Args:
      request: The request object.

    Returns:
      This function returns all the groups that the user does not have access to.
    """
    try:
        user = User.objects.get(id=request.data["user_id"])
        if user.is_superuser:
            return Response(

                {
                    "message": "This is a superuser,Superuser have all the Group access"
                }
            )
        group_obj = Group.objects.exclude(user=user)
        group_serializers = GroupSerializer2(
            group_obj, many=True)
        # print(group_obj.count())
        return Response({
            "data": group_serializers.data
        })
    except Exception as e:
        # print(e)
        return Response(
            status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
@authentication_classes([
    authentication.TokenAuthentication,
    authentication.SessionAuthentication])
@superuser_only
def createAGroup(request):
    """
    It creates a group with the name passed in the request

    Args:
      request: The request object is the first parameter to any view. It contains the HTTP request sent
    by the client.

    Returns:
      A list of all the groups
    """
    try:
        group_name = request.data["group_name"]
        # print("Group name----->", group_name)
        Group.objects.create(name=group_name)
        return Response(
            {"message": "Group Created"},
            status=status.HTTP_201_CREATED)
    except Exception as e:
        # print(e)
        return Response(
            {"error": "Wrong group"},
            status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
@authentication_classes([authentication.TokenAuthentication, authentication.SessionAuthentication])
@superuser_only
def addPermissionsOnGroup(request):
    """
    It takes a request, gets the group_id and permission_ids from the request, gets the group and
    permission objects from the database, and adds the permission to the group

    Args:
      request: The request object.

    Returns:
      A list of all the permissions that are associated with a group.
    """
    try:
        data = request.data
        group_id = data["group_id"]
        permissions_ids = data["permission_ids"]
        # print("Group ID----->", group_id)
        # print("Permissions Ids-------->", permissions_ids)
        group = Group.objects.get(id=group_id)
        for permission_id in permissions_ids:
            permission = Permission.objects.get(id=permission_id)
            group.permissions.add(permission)
        return Response(status=status.HTTP_201_CREATED)
    except Exception as e:
        # print(e)
        return Response(
            {"error": "Wrong group"},
            status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
@authentication_classes([authentication.TokenAuthentication, authentication.SessionAuthentication])
@superuser_only
def addUserToGroup(request):
    """
    It takes a request object, and adds the user to the group

    Args:
      request: The request object.

    Returns:
      A list of all the groups that the user is a member of.
    """
    try:
        data = request.data
        group_ids = data["group_ids"]
        # print("data--->", data)
        # user = request.user
        user = User.objects.get(id=data["user_id"])
        # print("Group IDs----->", group_ids)
        # print("User-->", user)
        if user.is_superuser:
            return Response("This is a superuser,Superuser have Access to all Groups and permissions by Default !")
        for group_id in group_ids:
            group = Group.objects.get(id=group_id)
            user.groups.add(group)
        return Response(status=status.HTTP_201_CREATED)
    except Exception as e:
        # print(e)
        return Response(
            {"error": "Wrong group"},
            status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
@authentication_classes([authentication.TokenAuthentication, authentication.SessionAuthentication])
@superuser_only
def getPermissionsNotInGroup(request):
    """
    It gets all the permissions that are not in the group

    Args:
      request: The request object.

    Returns:
      A list of permissions that are not in the group.
    """
    try:
        data = request.data
        group_obj = Group.objects.get(id=data["group_id"])
        # print("data--->", data)
        permission_objs = Permission.objects.exclude(group=group_obj)
        permissions_serializers = PermissionSerializer(
            permission_objs, many=True)
        return Response(permissions_serializers.data)
    except Exception as e:
        return Response(
            {"error": "Wrong group"},
            status=status.HTTP_400_BAD_REQUEST)
