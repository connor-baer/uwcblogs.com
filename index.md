---
layout: home
title: UWCxBlogs
---

{% assign sorted_posts = (site.posts | sort: 'title') %}
{% for post in sorted_posts %}
{% assign length = site.posts.size %}
{% assign lengthID = site.posts.size | plus: 1%}
  <div id="js-{{ forloop.index }}" class="post -fixed{% if forloop.index == 1 %} -first{% endif %}{% if forloop.index == length %} -last{% endif %}">
    <span id="{{ post.url | remove: '/' }}">
    {% if forloop.index != 1 %}
      <div class="post-header ctnr-golden">
        <h1 class="post-title">{{ post.title }}</h1>
      </div>
    {% endif %}
    </span>
    <img class="post-image" style="z-index: {{ lengthID | minus: forloop.index }}" src="{{ site.baseurl }}/img/{{post.image}}.jpg">    
    <div class="ctnr-wide">
    {{ post.content }}
    </div>
  </div>
{% endfor %}