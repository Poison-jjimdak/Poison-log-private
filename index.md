---
layout: default
---

<h1>고정된 게시글</h1>

<div class="pinned-posts">
  {% assign pinned_posts = site.posts | where: "pinned", "t" %}

  {% for post in pinned_posts %}
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
      {% if forloop.first %}
        <nav class="pinned-pagination" aria-label="고정 게시글 페이지">
          {% for i in (1..5) %}
            <button
              class="pinned-page{% if forloop.first %} is-active{% endif %}"
              type="button"
              aria-label="{{ i }}페이지"
              {% if forloop.first %}aria-current="page"{% endif %}
            ></button>
          {% endfor %}
        </nav>
      {% endif %}
    </article>
  {% endfor %}
</div>

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
