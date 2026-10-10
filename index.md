---
layout: default
---

<h1>고정된 게시글</h1>

<div class="pinned-posts">
{% for post in site.posts %}
{% if post.pinned == "t" %}
      <article class="post-card">
        <div class="post-info">
          <h2>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h2>
          <p>{{ post.date | date: "%Y.%m.%d" }}</p>
          <p>{{ post.excerpt | strip_html | truncate: 100 }}</p>
        </div>
      <a href="{{ post.url | relative_url }}" aria-label="{{ post.title }}">
      <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}">
        </a>
      </article>
{% endif %}
{% endfor %}
</div>

<nav class="pinned-pagination" aria-label="고정 게시글 페이지">
  <button class="pinned-page" type="button" disabled aria-label="이전 페이지">‹</button>
  <button class="pinned-page is-active" type="button" aria-current="page">1</button>
  <button class="pinned-page" type="button">2</button>
  <button class="pinned-page" type="button">3</button>
  <button class="pinned-page" type="button" aria-label="다음 페이지">›</button>
</nav>

<hr>

<h1>최신 게시글</h1>

<div class="latest-posts">
  {% for post in site.posts %}
    <article class="post-card">
      <div class="post-info">
        <h2>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        <p>{{ post.date | date: "%Y.%m.%d" }}</p>
        <p>{{ post.excerpt | strip_html | truncate: 100 }}</p>
      </div>
<a href="{{ post.url | relative_url }}" aria-label="{{ post.title }}">
        <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}">
      </a>
  </article>
  {% endfor %}
</div>

