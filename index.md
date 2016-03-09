---
layout: default
title: Bloglist
---

<div class="posts">
  {% assign sorted_posts = (site.posts | sort: 'title') %}
  {% for post in sorted_posts %}
  <div class="post">
    <h1 id="{{ post.title | downcase | url_encode }}" class="post-title">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </h1>
    <div class="cols2">
    {{ post.content }}
    </div>
  </div>
  <hr>
  <br>
  {% endfor %}
</div>