---
layout: default
---

<h1>{{ site.title }}</h1>

<p>인식된 글 개수: {{ site.posts.size }}</p>

{% for post in site.posts %}
  <p>
    <a href="{{ post.url | relative_url }}">
      {{ post.title }}
    </a>
  </p>
{% endfor %}
