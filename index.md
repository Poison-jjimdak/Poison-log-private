---
layout: default
---

<h1>고정된 게시글</h1>

{% for post in site.posts %}
{% if post.pinned == "t" %}
  <p>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </p>
{% endif %}
{% endfor %}

{% for post in site.posts %}
<article class="post-card">
  <a href="{{ post.url | relative_url }}">
    <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}">
    <h2>{{ post.title }}</h2>
  </a>
  <p>{{ post.date | date: "%Y.%m.%d" }}</p>
  <p>{{ post.excerpt | strip_html | truncate: 100 }}</p>
</article>
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
