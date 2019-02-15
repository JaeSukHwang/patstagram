from django.urls import path, re_path
from . import views

app_name = "images"
urlpatterns = [
    path("", view=views.Feed.as_view(), name="feed"),
    re_path(r'(?P<image_id>\w+)/like/', view=views.LikeImage.as_view(), name="like_image"),
    re_path(r'(?P<image_id>\w+)/comment/', view=views.CommentOnImage.as_view(), name="comment_image"),
]

