from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("profile/<str:username>", views.profile, name="profile"),
    path("follow/<str:username>", views.follow_user, name="follow_user"),
    path("posts/<int:post_id>", views.edit_post, name="edit_post"),
    path("posts/<int:post_id>/like", views.toggle_like, name="toggle_like"),
    path("following", views.following, name="following"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
]
