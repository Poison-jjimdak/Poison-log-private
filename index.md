---
layout: default
---

<h1>최신 게시글</h1>

{% for post in site.posts %}
  <p>
    <a href="{{ post.url | relative_url }}">
      {{ post.title }}
    </a>
  </p>
{% endfor %}
