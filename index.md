---
layout: default
title: UWCxBlogs
image: '/assets/main.jpg'
---
<nav>
  {% include navigation.html %}
</nav>
<header>
  <div class="header" style="background-image: url('{{ site.baseurl }}{{ page.image }}')">
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

<section id="about" class="section ctnr-golden">
  <h3>About</h3>
  <h1>{{ site.tagline }}</h1>
  <h4>{{ site.description }}</h4>
  <a class="link-large" data-scroll href="#submit">Submit a blog →</a>
</section>

<section id="bloglist" class="section ctnr-golden">
<label for="js-search"><h3 class="section-beta">search is in beta</h3> Enter a country, language, year or name.</label>
<input id="js-search" class="section-search" placeholder="Search for a blog..." />
<h3>Bloglist</h3>  
{% assign colleges = site.data | sort: college[0] %}
{% for college in colleges %}
  <div class="section-blogs">
    <h1>{{ college[0] | replace: '_', ' ' }}</h1>
    <p class="section-columns">
    {% assign years = college[1] | sort: year[0] %}
    {% for year in years reversed %}
      <span class="js-list" id="{{ college[0] }}-{{ year[0] }}">
        <span class="h2">{{ year[0] }}</span>
        <span class="list">
          {% assign blogs = year[1] | sort: 'firstname' %}
          {% for blog in blogs  %}
            <span data-year="{{ blog.year }}" class="section-blog"><a href="http://{{ blog.link }}" target="_blank" class="link"><span class="name">{{ blog.firstname }}</span></a> | <span class="country">{{ blog.country }}</span>{% if blog.country and blog.language %} - {% endif %}<span class="language">{{ blog.language }}</span></span><br>
          {% endfor %}
        </span>
      </span>
    {% endfor %}
    </p>
  </div>
  {% assign mod = forloop.index | modulo: 3 %}
  {% if mod == 0 %}
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <!-- UWCxBlogs -->
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-4242118293341339"
         data-ad-slot="6920232204"
         data-ad-format="auto"></ins>
    <script>
    (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  {% endif %}
{% endfor %}

</section>

<section class="section ctnr-golden">
  <h3 id="submit">submit</h3>
  <!-- Begin MailChimp Signup Form -->
  <div id="mc_embed_signup">
    <form action="//connor-baer.us7.list-manage.com/subscribe/post?u=b1caba133f37d9e536b7ee6c6&amp;id=7a0d71349c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll" class="section-inputs">
        <div class="mc-field-group">
          <label for="mce-FNAME">What's your name?</label>
          <input type="text" value="" name="FNAME" class="required" id="mce-FNAME" placeholder="Jane">
        </div>
        <div class="mc-field-group">
          <label for="mce-EMAIL">What’s your email address?</label>
          <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="jane@example.com">
        </div>
        <div class="mc-field-group">
          <label for="mce-MCOUNTRY">Which country are you from?</label>
          <input type="text" value="" name="MCOUNTRY" class="required" id="mce-MCOUNTRY" placeholder="Germany">
        </div>
        <div class="mc-field-group">
          <label for="mce-MLANGUAGE">Which language do you blog in?</label>
          <input type="text" value="" name="MLANGUAGE" class="required" id="mce-MLANGUAGE" placeholder="English & German">
        </div>
        <div class="mc-field-group">
          <label for="mce-MLINK">What's the link to your blog?</label>
          <input type="url" value="" name="MLINK" class="required url" id="mce-MLINK" placeholder="http://connorbaer.io/" >
        </div>
        <div class="mc-field-group">
          <label for="mce-MCOLLEGE">Which UWC do/did you attend?</label>
          <select name="MCOLLEGE" class="required" id="mce-MCOLLEGE">
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
        </div>
        <div class="mc-field-group size1of2">
          <label for="mce-MYEAR">When will/did you finish UWC?</label>
          <input type="number" name="MYEAR" class="required" value="" id="mce-MYEAR" placeholder="2015">
        </div>
        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b1caba133f37d9e536b7ee6c6_7a0d71349c" tabindex="-1" value=""></div>
        <div class="clear section-button"><input type="submit" value="Submit your blog →" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
      </div>
    </form>
  </div>
  <!--End mc_embed_signup-->
</section>