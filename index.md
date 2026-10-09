---
layout: default
---

<h1>📌 고정된 게시글</h1>

{% for post in site.posts %}
  {% if post.pinned == t %}
    <p>
      <a href="{{ post.url | relative_url }}">
        {{ post.title }}
      </a>
    </p>
  {% endif %}
{% endfor %}

<hr>

<h1>최신 게시글</h1>

{% for post in site.posts %}
  <p>
    <a href="{{ post.url | relative_url }}">
      {{ post.title }}
    </a>
  </p>
{% endfor %}
