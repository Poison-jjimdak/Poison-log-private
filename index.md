---
layout: default
---

<h1>{{ site.title }}</h1>
<p>{{ site.description }}</p>

<h2>글 목록</h2>

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">
        {{ post.title }}
      </a>
    </li>
  {% endfor %}
</ul>
