---
layout: default
title: Bloglist
---

<article>
  <h1>Welcome friends!</h1>
    <p>319 blogs and counting! I strive to make this list as extensive as possible so that everybody can find a blog for their favorite college in their native language. This wouldn't be possible without you. Thanks to everybody who submitted a blog!<br>You have a blog yourself or know one that isn't listed here? Use the button above to submit the link and I'll add it as soon as possible. I'm especially looking for blogs by students at UWC Changshu which opened in September 2015. Thank you!</p>
</article>
<br>
<br>
<hr>
<br>

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