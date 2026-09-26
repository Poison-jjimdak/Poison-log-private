---
layout: default
---

<h1>{{ site.title }}</h1>

<p>작성 글 수: {{ site.posts.size }}</p>

{% for post in site.posts %}
  <p>
    <a href="{{ post.url | relative_url }}">
      {{ post.title }}
    </a>
  </p>
{% endfor %}
