---
layout: default
---

<link rel="stylesheet" href="{{ '/assets/css/style.scss' | relative_url }}">

<header class="topbar">
  <a href="{{ '/' | relative_url }}" class="logo">
    {{ site.title }}
  </a>

  <div class="top-actions">
    <button id="theme-toggle" aria-label="다크모드">☾</button>
    <button aria-label="메뉴">☰</button>
  </div>
</header>

<main>

  <section class="hero">
    <h1>최신 아티클</h1>
  </section>

  <nav class="categories">
    <button class="category active" data-category="all">전체</button>

    {% for category in site.categories %}
      <button
        class="category"
        data-category="{{ category[0] }}"
      >
        {{ category[0] }}
      </button>
    {% endfor %}
  </nav>

  <section class="articles">

    {% for post in site.posts %}

      {% assign words = post.content | number_of_words %}
      {% assign minutes = words | divided_by: 200 %}
      {% if minutes < 1 %}
        {% assign minutes = 1 %}
      {% endif %}

      <article
        class="article-card"
        data-category="{% for category in post.categories %}{{ category }} {% endfor %}"
      >

        {% if post.thumbnail %}
          <a href="{{ post.url | relative_url }}" class="cover">
            <img
              src="{{ post.thumbnail | relative_url }}"
              alt="{{ post.title }}"
            >
          </a>
        {% endif %}

        <div class="article-info">

          {% if post.categories %}
            <span class="article-category">
              {{ post.categories | first }}
            </span>
          {% endif %}

          <h2>
            <a href="{{ post.url | relative_url }}">
              {{ post.title }}
            </a>
          </h2>

          {% if post.description %}
            <p>{{ post.description }}</p>
          {% else %}
            <p>
              {{ post.excerpt | strip_html | strip_newlines | truncate: 140 }}
            </p>
          {% endif %}

          <div class="meta">
            <span>{{ site.author | default: "주현" }}</span>
            <span>•</span>
            <span>{{ post.date | date: "%Y년 %-m월 %-d일" }}</span>
            <span>•</span>
            <span>{{ minutes }}분 소요</span>
          </div>

        </div>

      </article>

    {% endfor %}

  </section>

</main>

<footer>
  <strong>{{ site.title }}</strong>
  <p>{{ site.description }}</p>
</footer>

<script>
const buttons = document.querySelectorAll(".category");
const cards = document.querySelectorAll(".article-card");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    buttons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.category;

    cards.forEach(card => {
      const categories = card.dataset.category.split(" ");

      card.style.display =
        category === "all" || categories.includes(category)
          ? ""
          : "none";
    });
  });
});


const themeButton = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
  themeButton.textContent = "☀";
}

themeButton.addEventListener("click", () => {

  document.documentElement.classList.toggle("dark");

  const dark =
    document.documentElement.classList.contains("dark");

  localStorage.setItem(
    "theme",
    dark ? "dark" : "light"
  );

  themeButton.textContent = dark ? "☀" : "☾";
});
</script>
