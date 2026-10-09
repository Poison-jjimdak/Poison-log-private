---
layout: default
---

<h1>고정된 게시글</h1>

<div class="pinned-posts">
{% for post in site.posts %}
{% if post.pinned == "t" %}
  <article class="post-card pinned-card">
    <a href="{{ post.url | relative_url }}">
      <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}">
      <h2>{{ post.title }}</h2>
    </a>
    <p>{{ post.date | date: "%Y.%m.%d" }}</p>
    <p>{{ post.excerpt | strip_html | truncate: 100 }}</p>
  </article>
{% endif %}
{% endfor %}
</div>

<hr>

<h1>최신 게시글</h1>

<div class="latest-posts">
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
</div>

