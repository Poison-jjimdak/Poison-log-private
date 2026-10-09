---
layout: default
---

<h1>고정된 게시글</h1>

{% for post in site.posts %}
{% if post.pinned %}
<a href="{{ post.url | relative_url }}">{{ post.title }}</a><br>
{% endif %}
{% endfor %}

<hr>

<h1>최신 게시글</h1>

{% for post in site.posts %}
<a href="{{ post.url | relative_url }}">{{ post.title }}</a><br>
{% endfor %}
