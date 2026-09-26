---
layout: default
---

<link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">

<header class="site-header-custom">
  <div>
    <a class="site-title-custom" href="{{ '/' | relative_url }}">
      {{ site.title }}
    </a>
    <p>{{ site.description }}</p>
  </div>

  <button id="theme-toggle" class="theme-button">☾</button>
</header>

<main class="home-container">

  <section class="hero">
    <span class="eyebrow">TECH BLOG</span>
    <h1>최신 아티클</h1>
    <p>직접 해보고, 분석하고, 기록한 기술 이야기.</p>
  </section>

  <nav class="category-nav">
    <button class="category-button active" data-category="all">
      전체
    </button>

    {% for category in site.categories %}
      <button class="category-button" data-category="{{ category[0] | escape }}">
        {{ category[0] }}
      </button>
    {% endfor %}
  </nav>

  <section class="post-grid">

    {% for post in site.posts %}

      {% assign words = post.content | number_of_words %}
      {% assign minutes = words | divided_by: 200 %}
      {% if minutes < 1 %}
        {% assign minutes = 1 %}
      {% endif %}

      <article
        class="post-card"
        data-category="{% for category in post.categories %}{{ category }} {% endfor %}"
      >

        {% if post.thumbnail %}
          <a href="{{ post.url | relative_url }}" class="thumbnail-wrapper">
            <img
              src="{{ post.thumbnail | relative_url }}"
              alt=""
              class="post-thumbnail"
              loading="lazy"
            >
          </a>
        {% endif %}

        <div class="post-card-content">

          {% if post.categories %}
            <div class="post-category">
              {{ post.categories | first }}
            </div>
          {% endif %}

          <h2>
            <a href="{{ post.url | relative_url }}">
              {{ post.title }}
            </a>
          </h2>

          {% if post.description %}
            <p class="post-description">
              {{ post.description }}
            </p>
          {% else %}
            <p class="post-description">
              {{ post.excerpt | strip_html | strip_newlines | truncate: 120 }}
            </p>
          {% endif %}

          <div class="post-meta">
            <span>{{ post.date | date: "%Y.%m.%d" }}</span>
            <span>·</span>
            <span>{{ minutes }} min read</span>
          </div>

        </div>
      </article>

    {% endfor %}

  </section>

</main>

<script>
const buttons = document.querySelectorAll(".category-button");
const cards = document.querySelectorAll(".post-card");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.category;

    cards.forEach(card => {
      if (
        category === "all" ||
        card.dataset.category.split(" ").includes(category)
      ) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  themeButton.textContent =
    document.documentElement.classList.contains("dark")
      ? "☀"
      : "☾";
});
</script>
