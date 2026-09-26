---
layout: default
---

{% assign featured = site.posts.first %}

<main class="home">

  <section class="latest">

    <div class="section-label">
      최신 아티클
    </div>

    {% if featured.categories %}
      <div class="featured-category">
        {{ featured.categories | first }}
      </div>
    {% endif %}

    <div class="featured">

      <div class="featured-content">

        <h1>
          <a href="{{ featured.url | relative_url }}">
            {{ featured.title }}
          </a>
        </h1>

        {% if featured.description %}
          <p class="featured-description">
            {{ featured.description }}
          </p>
        {% else %}
          <p class="featured-description">
            {{ featured.excerpt | strip_html | strip_newlines | truncate: 180 }}
          </p>
        {% endif %}

        {% assign words = featured.content | number_of_words %}
        {% assign minutes = words | divided_by: 200 %}
        {% if minutes < 1 %}
          {% assign minutes = 1 %}
        {% endif %}

        <div class="featured-meta">
          <span>{{ site.author | default: "주현" }}</span>
          <span>{{ featured.date | date: "%Y년 %-m월 %-d일" }}</span>
          <span>{{ minutes }}분 소요</span>
        </div>

        <a
          href="{{ featured.url | relative_url }}"
          class="read-more"
        >
          읽어보기 →
        </a>

      </div>

      {% if featured.thumbnail %}
        <a
          href="{{ featured.url | relative_url }}"
          class="featured-image"
        >
          <img
            src="{{ featured.thumbnail | relative_url }}"
            alt="{{ featured.title }}"
          >
        </a>
      {% endif %}

    </div>

    <div class="article-navigation">

      {% if site.posts.size > 1 %}
        <a href="{{ site.posts[1].url | relative_url }}">
          ← 이전 아티클
        </a>
      {% else %}
        <span></span>
      {% endif %}

      <span class="article-count">
        01 / {{ site.posts.size | prepend: "0" }}
      </span>

      {% if site.posts.size > 1 %}
        <a href="{{ site.posts[1].url | relative_url }}">
          다음 아티클 →
        </a>
      {% endif %}

    </div>

  </section>


  <section class="all-posts">

    <div class="section-label">
      모든 아티클
    </div>

    <div class="post-list">

      {% for post in site.posts %}

        <a
          href="{{ post.url | relative_url }}"
          class="post-row"
        >

          {% if post.thumbnail %}
            <div class="post-row-image">
              <img
                src="{{ post.thumbnail | relative_url }}"
                alt=""
              >
            </div>
          {% endif %}

          <div class="post-row-info">

            {% if post.categories %}
              <span class="post-row-category">
                {{ post.categories | first }}
              </span>
            {% endif %}

            <h2>{{ post.title }}</h2>

            {% if post.description %}
              <p>{{ post.description }}</p>
            {% endif %}

            <div class="post-row-meta">
              {{ post.date | date: "%Y.%m.%d" }}
            </div>

          </div>

          <span class="post-arrow">
            →
          </span>

        </a>

      {% endfor %}

    </div>

  </section>

</main>
