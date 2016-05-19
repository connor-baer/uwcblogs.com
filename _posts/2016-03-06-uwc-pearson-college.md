---
layout: post
title: UWC Pearson College
image: uwc_pea
---

{% assign canada_2017 = (site.data.canada | where: 'year' , '2017' | sort: 'firstname')) %}
{% if canada_2017 != empty %}
<h4>2015-2017</h4>
  <p>
    {% for blog in canada_2017 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign canada_2016 = (site.data.canada | where: 'year' , '2016' | sort: 'firstname')) %}
{% if canada_2016 != empty %}
<h4>2014-2016</h4>
  <p>
    {% for blog in canada_2016 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign canada_2015 = (site.data.canada | where: 'year' , '2015' | sort: 'firstname')) %}
{% if canada_2015 != empty %}
<h4>2013-2015</h4>
  <p>
    {% for blog in canada_2015 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign canada_2014 = (site.data.canada | where: 'year' , '2014' | sort: 'firstname')) %}
{% if canada_2014 != empty %}
<h4>2012-2014</h4>
  <p>
    {% for blog in canada_2014 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign canada_2013 = (site.data.canada | where: 'year' , '2013' | sort: 'firstname')) %}
{% if canada_2013 != empty %}
<h4>2011-2013</h4>
  <p>
    {% for blog in canada_2013 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign canada_2012 = (site.data.canada | where: 'year' , '2012' | sort: 'firstname')) %}
{% if canada_2012 != empty %}
<h4>2010-2012</h4>
  <p>
    {% for blog in canada_2012 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign canada_2011 = (site.data.canada | where: 'year' , '2011' | sort: 'firstname')) %}
{% if canada_2011 != empty %}
<h4>2009-2011</h4>
  <p>
    {% for blog in canada_2011 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign canada_2010 = (site.data.canada | where: 'year' , '2010' | sort: 'firstname')) %}
{% if canada_2010 != empty %}
<h4>2008-2010</h4>
  <p>
    {% for blog in canada_2010 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign canada_2009 = (site.data.canada | where: 'year' , '2009' | sort: 'firstname')) %}
{% if canada_2009 != empty %}
<h4>2007-2009</h4>
  <p>
    {% for blog in canada_2009 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}

{% assign canada_2008 = (site.data.canada | where: 'year' , '2008' | sort: 'firstname')) %}
{% if canada_2008 != empty %}
<h4>2006-2008</h4>
  <p>
    {% for blog in canada_2008 %}
        <a href="http://{{ blog.link }}" target="_blank">{{ blog.firstname }}</a> | {{ blog.country }} - {{ blog.language }}<br>
    {% endfor %}
  </p>
{% endif %}