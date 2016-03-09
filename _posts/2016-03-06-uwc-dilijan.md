---
layout: post
title: UWC Dilijan
---

{% assign armenia_2017 = (site.data.armenia | where: 'year' , '2017' | sort: 'firstname')) %}
{% if armenia_2017 != empty %}
<h3>2015-2017</h3>
  <p>
    {% for blog in armenia_2017 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign armenia_2016 = (site.data.armenia | where: 'year' , '2016' | sort: 'firstname')) %}
{% if armenia_2016 != empty %}
<h3>2014-2016</h3>
  <p>
    {% for blog in armenia_2016 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign armenia_2015 = (site.data.armenia | where: 'year' , '2015' | sort: 'firstname')) %}
{% if armenia_2015 != empty %}
<h3>2013-2015</h3>
  <p>
    {% for blog in armenia_2015 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign armenia_2014 = (site.data.armenia | where: 'year' , '2014' | sort: 'firstname')) %}
{% if armenia_2014 != empty %}
<h3>2012-2014</h3>
  <p>
    {% for blog in armenia_2014 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign armenia_2013 = (site.data.armenia | where: 'year' , '2013' | sort: 'firstname')) %}
{% if armenia_2013 != empty %}
<h3>2011-2013</h3>
  <p>
    {% for blog in armenia_2013 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign armenia_2012 = (site.data.armenia | where: 'year' , '2012' | sort: 'firstname')) %}
{% if armenia_2012 != empty %}
<h3>2010-2012</h3>
  <p>
    {% for blog in armenia_2012 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign armenia_2011 = (site.data.armenia | where: 'year' , '2011' | sort: 'firstname')) %}
{% if armenia_2011 != empty %}
<h3>2009-2011</h3>
  <p>
    {% for blog in armenia_2011 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign armenia_2010 = (site.data.armenia | where: 'year' , '2010' | sort: 'firstname')) %}
{% if armenia_2010 != empty %}
<h3>2008-2010</h3>
  <p>
    {% for blog in armenia_2010 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign armenia_2009 = (site.data.armenia | where: 'year' , '2009' | sort: 'firstname')) %}
{% if armenia_2009 != empty %}
<h3>2007-2009</h3>
  <p>
    {% for blog in armenia_2009 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign armenia_2008 = (site.data.armenia | where: 'year' , '2008' | sort: 'firstname')) %}
{% if armenia_2008 != empty %}
<h3>2006-2008</h3>
  <p>
    {% for blog in armenia_2008 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}