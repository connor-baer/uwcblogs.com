---
layout: default
title: A collection of UWC blogs
image: 'main'
theme: light
---

{% include navigation.html theme=page.theme %}

<article>
<header class="header">
  <div class="header-background" style="background-image: url('{{ site.baseurl }}/img/{{ page.image }}.jpg')">
    <svg class="header-large" viewBox="0 0 330 75">
      <defs>
        <g id="text-large">
          <text class="header-text" text-anchor="middle" x="165" y="55">UWCxBlogs</text>
        </g>
        <mask id="mask-large" x="0" y="0" width="450" height="75">
          <rect x="0" y="0" width="450" height="75" fill="#fff"/>
          <use xlink:href="#text-large" />
        </mask>
      </defs>
      <rect x="0" y="0" width="450" height="75" mask="url(#mask-large)" fill="white" fill-opacity="1"/>
      <use xlink:href="#text-large" mask="url(#mask-large)" />
    </svg>
  </div>
</header>

<section id="about" class="section">
  <h2 class="section-title">About</h2>
  <h1 class="section-header">{{ site.tagline }}</h1>
  <p class="section-body -large">{{ site.description }}</p>
  <a class="section-link -large" href="#submit" data-scroll>Submit a blog</a>
</section>

<section id="bloglist" class="section">
<h2 class="section-title">Bloglist</h2>
<div class="form-group section-blogs">
  <input class="form-input" type="search" name="js-search" id="js-search" placeholder=" " autocomplete="off" required/>
  <span class="form-highlight"></span>
  <span class="form-underline"></span>
  <label class="form-label" for="js-search">Filter the blogs...</label>
  <p class="section-hint">Enter a country, language, year or name in the field above to filter the blogs.</p>
</div>

{% assign colleges = site.data | sort: college[0] %}
{% for college in colleges %}
  <div class="section-blogs js-college">
    <h3 class="section-header">{{ college[0] | replace: '_', ' ' }}</h3>
    <p class="section-body section-columns">
    {% assign years = college[1] | sort: year[0] %}
    {% for year in years reversed %}
      <span class="js-list" id="{{ college[0] }}-{{ year[0] }}">
        <span class="section-year js-year">{{ year[0] }}</span>
        <span class="list js-years">
          {% assign blogs = year[1] | sort: 'firstname' %}
          {% for blog in blogs  %}
            <span data-year="{{ blog.year }}" class="section-blog"><a href="http://{{ blog.link }}" target="_blank" rel="noopener noreferrer" class="link"><span class="name">{{ blog.firstname }}</span></a> | <span class="country">{{ blog.country }}</span>{% if blog.country and blog.language %} - {% endif %}<span class="language">{{ blog.language }}</span></span>
          {% endfor %}
        </span>
      </span>
    {% endfor %}
    </p>
  </div>
{% endfor %}

</section>

<section id="submit" class="section">
  <h2 class="section-title">submit</h2>
    <h1 class="section-header">Submit your blog!</h1>
    <p class="section-body -large">Share your experiences with the world and get more readers! Fill out the form below to add your blog to the list of blogs.</p>
  <!-- Begin MailChimp Signup Form -->
  <div id="mc_embed_signup">
    <form action="//connor-baer.us7.list-manage.com/subscribe/post?u=b1caba133f37d9e536b7ee6c6&amp;id=7a0d71349c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll" class="section-inputs">
        <div class="mc-field-group form-group">
          <input type="text" value="" name="FNAME" class="required form-input" id="mce-FNAME" placeholder=" " required>
          <span class="form-highlight"></span>
          <label class="form-label" for="mce-FNAME">What's your name?</label>
        </div>
        <div class="mc-field-group form-group">
          <input type="email" value="" name="EMAIL" class="required email form-input" id="mce-EMAIL" placeholder=" " required>
          <span class="form-highlight"></span>
          <label class="form-label" for="mce-EMAIL">What’s your email address?</label>
          <p class="form-error"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>Please enter a valid email address, e.g. jane.doe@example.com</p>
        </div>
        <div class="mc-field-group form-group">
          <input type="text" value="" name="MCOUNTRY" class="required form-input" id="mce-MCOUNTRY" placeholder=" " pattern="[a-zA-Z]{2,}" required>
          <span class="form-highlight"></span>
          <label class="form-label" for="mce-MCOUNTRY">Which country are you from?</label>
          <p class="form-error"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>Please enter a valid country, e.g. Germany</p>
        </div>
        <div class="mc-field-group form-group">
          <input type="text" value="" name="MLANGUAGE" class="required form-input" id="mce-MLANGUAGE" placeholder=" " required>
          <span class="form-highlight"></span>
          <label class="form-label" for="mce-MLANGUAGE">Which language do you blog in?</label>
        </div>
        <div class="mc-field-group form-group">
          <input type="url" value="" name="MLINK" class="required url form-input" id="mce-MLINK" placeholder=" " required>
          <span class="form-highlight"></span>
          <label class="form-label" for="mce-MLINK">What's the link to your blog?</label>
          <p class="form-error"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>Please enter a valid link, e.g. http://example.com</p>
        </div>
        <div class="mc-field-group form-group">
          <select name="MCOLLEGE" class="form-select required" id="mce-MCOLLEGE">
            <option value=""></option>
            <option value="UWC Adriatic">UWC Adriatic</option>
            <option value="UWC Atlantic College">UWC Atlantic College</option>
            <option value="UWC Changshu">UWC Changshu</option>
            <option value="UWC Costa Rica">UWC Costa Rica</option>
            <option value="UWC Dilijan">UWC Dilijan</option>
            <option value="UWC Li Po Chun">UWC Li Po Chun</option>
            <option value="UWC Maastricht">UWC Maastricht</option>
            <option value="UWC Mahindra">UWC Mahindra</option>
            <option value="UWC Mostar">UWC Mostar</option>
            <option value="UWC Pearson College">UWC Pearson College</option>
            <option value="UWC Red Cross Nordic">UWC Red Cross Nordic</option>
            <option value="UWC Robert Bosch College">UWC Robert Bosch College</option>
            <option value="UWC South East Asia">UWC South East Asia</option>
            <option value="UWC Thailand">UWC Thailand</option>
            <option value="UWC USA">UWC USA</option>
            <option value="UWC Waterford Kamhlaba">UWC Waterford Kamhlaba</option>
          </select>
          <label for="mce-MCOLLEGE">Which UWC do/did you attend?</label>
        </div>
        <div class="mc-field-group size1of2 form-group">
          <input type="number" name="MYEAR" class="required form-input" value="" id="mce-MYEAR" placeholder=" " pattern="(?:19|20)[0-9]{2}" required>
          <span class="form-highlight"></span>
          <label class="form-label" for="mce-MYEAR">When will/did you finish UWC?</label>
          <p class="form-error"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>Please enter a valid year, e.g. 2016</p>
        </div>
        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b1caba133f37d9e536b7ee6c6_7a0d71349c" tabindex="-1" value=""></div>
        <input type="submit" value="Submit your blog →" name="subscribe" id="mc-embedded-subscribe" class="button">
      </div>
    </form>
  </div>
  <!--End mc_embed_signup-->
</section>
</article>