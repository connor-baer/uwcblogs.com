---
layout: default
title: Newsletter
image: main
theme: light
---

{% include navigation.html theme=page.theme %}

<header class="header">
</header>

<section id="about" class="section">
  <article>
  <h1 class="section-header">Problem solving is my passion.</h1>
  <p class="section-body -large">{{ site.tagline }}</p>
  <a class="section-link -large" href="#" data-scroll="">Let's create solutions together</a>
</article>
</section>

<section id="writing" class="section">
  <div class="section-writing">
    {% assign posts = site.posts | sort: 'date' | reverse | limit: 3 %}
    {% for post in posts %}
      <article>
  <a href="{{ site.baseurl }}{{ post.url }}" class="post-link">
  <h3 class="section-header">{{ post.title }}</h3>
  <div class="section-post"><p class="section-body post-body">{{ post.content | strip_html | truncatewords: 48 }}</p>
            {% if post.image %}
            <div class="post-image" style="background-image: url('{{ site.baseurl }}/img/{{ post.image }}-thumb.jpg')">
</div>
            {% endif %}
          </div>
</a>
</article>
    {% endfor %}
  </div>
</section>
