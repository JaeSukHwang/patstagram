from django.urls import path, re_path
from . import views

app_name = "images"

urlpatterns = [
    path("", view=views.Feed.as_view(), name="feed"),
    re_path(r'^(?P<image_id>[0-9]+)/$', view=views.ImageDetail.as_view(), name="image_detail"),
    re_path(r'^(?P<image_id>[0-9]+)/likes/$', view=views.LikeImage.as_view(), name="like_image"),
    re_path(r'^(?P<image_id>[0-9]+)/unlikes/$', view=views.UnLikeImage.as_view(), name="unlike_image"),
    re_path(r'^(?P<image_id>[0-9]+)/comments/$', view=views.CommentOnImage.as_view(), name="comment_image"),
    re_path(r'^(?P<image_id>[0-9]+)/comments/(?P<comment_id>[0-9]+)/$', view=views.ModerateComments.as_view(), name="moderate_comment"),
    re_path(r'^comments/(?P<comment_id>[0-9]+)/$', view=views.Comment.as_view(), name="comment"),
    path("search/", view=views.Search.as_view(), name="search"),

]

