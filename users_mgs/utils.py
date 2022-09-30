from functools import wraps
from django.core.exceptions import PermissionDenied
from django.http import HttpResponse


def superuser_only(function):
    """
    Limit to superusers only.
    Usage:
        @superuser_only
        def my_view(request):
            ...
    """
    def _inner(request, *args, **kwargs):
        if not request.user.is_superuser:
            raise PermissionDenied
        return function(request, *args, **kwargs)
    return _inner


def groups_only(*groups):
    """
    It takes a list of groups as an argument, and returns a function that takes a view function as an
    argument, and returns a function that takes a request as an argument, and returns the view function
    if the user is in one of the groups, and returns a 403 response if the user is not in one of the
    groups

    Returns:
      A function that takes a view function as an argument.

    Usage:
        @groups_only('Admin', 'Registrar')
    """
    def inner(view_func):
        @wraps(view_func)
        def wrapper_func(request, *args, **kwargs):
            if request.user.groups.filter(name__in=groups).exists():
                return view_func(request, *args, **kwargs)
            else:
                return HttpResponse('You are not authorized to view this page')
        return wrapper_func
    return inner


# >>> from django.contrib.auth.decorators import permission_required
# >>>
# >>> @permission_required('auth.view_user')
# ... def users_list_view(request):
# ...     pass
