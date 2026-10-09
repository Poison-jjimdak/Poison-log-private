---
layout: default
---

<h1>📌 고정된 게시글</h1>

{% assign pinned_posts = site.posts | where: "pinned", true %}

{% if pinned_posts.size > 0 %}
  {% for post in pinned_posts %}
    <p>
      <a href="{{ post.url | relative_url }}">
        {{ post.title }}
      </a>
    </p>
  {% endfor %}
{% else %}
  <p>고정된 게시글이 없어.</p>
{% endif %}

<hr>

<h1>최신 게시글</h1>

{% assign normal_posts = site.posts | where_exp: "post", "post.pinned != true" %}

{% for post in normal_posts %}
  <p>
    <a href="{{ post.url | relative_url }}">
      {{ post.title }}
    </a>
  </p>
{% endfor %}
