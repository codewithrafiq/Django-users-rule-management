from django.contrib.auth.models import User, Permission, Group
from rest_framework import serializers


def get_user_permissions(user):
    if user.is_superuser:
        return Permission.objects.all()
    return user.user_permissions.all() | Permission.objects.filter(group__user=user)


class UserSerializer(serializers.ModelSerializer):
    user_permissions = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('id', 'username', 'user_permissions', 'is_staff',
                  "is_active", "is_superuser",  'groups')
        depth = 1

    def get_user_permissions(self, obj):
        return list(PermissionSerializer(get_user_permissions(obj), many=True).data)


class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = "__all__"


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = "__all__"
        depth = 1
class GroupSerializer2(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ["id","name"]
