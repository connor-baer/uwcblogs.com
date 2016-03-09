---
layout: post
title: UWC Robert Bosch College
---

{% assign germany_2017 = (site.data.germany | where: 'year' , '2017' | sort: 'firstname')) %}
{% if germany_2017 != empty %}
<h3>2015-2017</h3>
  <p>
    {% for blog in germany_2017 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign germany_2016 = (site.data.germany | where: 'year' , '2016' | sort: 'firstname')) %}
{% if germany_2016 != empty %}
<h3>2014-2016</h3>
  <p>
    {% for blog in germany_2016 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign germany_2015 = (site.data.germany | where: 'year' , '2015' | sort: 'firstname')) %}
{% if germany_2015 != empty %}
<h3>2013-2015</h3>
  <p>
    {% for blog in germany_2015 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign germany_2014 = (site.data.germany | where: 'year' , '2014' | sort: 'firstname')) %}
{% if germany_2014 != empty %}
<h3>2012-2014</h3>
  <p>
    {% for blog in germany_2014 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign germany_2013 = (site.data.germany | where: 'year' , '2013' | sort: 'firstname')) %}
{% if germany_2013 != empty %}
<h3>2011-2013</h3>
  <p>
    {% for blog in germany_2013 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign germany_2012 = (site.data.germany | where: 'year' , '2012' | sort: 'firstname')) %}
{% if germany_2012 != empty %}
<h3>2010-2012</h3>
  <p>
    {% for blog in germany_2012 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign germany_2011 = (site.data.germany | where: 'year' , '2011' | sort: 'firstname')) %}
{% if germany_2011 != empty %}
<h3>2009-2011</h3>
  <p>
    {% for blog in germany_2011 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign germany_2010 = (site.data.germany | where: 'year' , '2010' | sort: 'firstname')) %}
{% if germany_2010 != empty %}
<h3>2008-2010</h3>
  <p>
    {% for blog in germany_2010 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign germany_2009 = (site.data.germany | where: 'year' , '2009' | sort: 'firstname')) %}
{% if germany_2009 != empty %}
<h3>2007-2009</h3>
  <p>
    {% for blog in germany_2009 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign germany_2008 = (site.data.germany | where: 'year' , '2008' | sort: 'firstname')) %}
{% if germany_2008 != empty %}
<h3>2006-2008</h3>
  <p>
    {% for blog in germany_2008 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}