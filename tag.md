---
layout: page
title: Tags
permalink: /tags/
---

<h2>All Tags</h2>
<ul>
  {% assign tags_list = site.tags | sort %}
  {% for tag in tags_list %}
    <li><a href="/tags/{{ tag[0] | slugify }}/">#{{ tag[0] }} ({{ tag[1].size }})</a></li>
  {% endfor %}
</ul>
