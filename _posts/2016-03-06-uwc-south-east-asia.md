---
layout: post
title: UWC South East Asia
---

{% assign singapore_2017 = (site.data.singapore | where: 'year' , '2017' | sort: 'firstname')) %}
{% if singapore_2017 != empty %}
<h3>2015-2017</h3>
  <p>
    {% for blog in singapore_2017 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign singapore_2016 = (site.data.singapore | where: 'year' , '2016' | sort: 'firstname')) %}
{% if singapore_2016 != empty %}
<h3>2014-2016</h3>
  <p>
    {% for blog in singapore_2016 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign singapore_2015 = (site.data.singapore | where: 'year' , '2015' | sort: 'firstname')) %}
{% if singapore_2015 != empty %}
<h3>2013-2015</h3>
  <p>
    {% for blog in singapore_2015 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign singapore_2014 = (site.data.singapore | where: 'year' , '2014' | sort: 'firstname')) %}
{% if singapore_2014 != empty %}
<h3>2012-2014</h3>
  <p>
    {% for blog in singapore_2014 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign singapore_2013 = (site.data.singapore | where: 'year' , '2013' | sort: 'firstname')) %}
{% if singapore_2013 != empty %}
<h3>2011-2013</h3>
  <p>
    {% for blog in singapore_2013 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign singapore_2012 = (site.data.singapore | where: 'year' , '2012' | sort: 'firstname')) %}
{% if singapore_2012 != empty %}
<h3>2010-2012</h3>
  <p>
    {% for blog in singapore_2012 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign singapore_2011 = (site.data.singapore | where: 'year' , '2011' | sort: 'firstname')) %}
{% if singapore_2011 != empty %}
<h3>2009-2011</h3>
  <p>
    {% for blog in singapore_2011 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign singapore_2010 = (site.data.singapore | where: 'year' , '2010' | sort: 'firstname')) %}
{% if singapore_2010 != empty %}
<h3>2008-2010</h3>
  <p>
    {% for blog in singapore_2010 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign singapore_2009 = (site.data.singapore | where: 'year' , '2009' | sort: 'firstname')) %}
{% if singapore_2009 != empty %}
<h3>2007-2009</h3>
  <p>
    {% for blog in singapore_2009 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign singapore_2008 = (site.data.singapore | where: 'year' , '2008' | sort: 'firstname')) %}
{% if singapore_2008 != empty %}
<h3>2006-2008</h3>
  <p>
    {% for blog in singapore_2008 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}