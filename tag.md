---
layout: page
title: Tags
title_en: Tags
title_zh: 標籤
permalink: /tags/
---

<h2><span data-en="All Tags" data-zh="所有標籤">All Tags</span></h2>
<ul>
  {% assign tags_list = site.tags | sort %}
  {% for tag in tags_list %}
    <li><a href="/tags/{{ tag[0] | slugify }}/">#{{ tag[0] }} ({{ tag[1].size }})</a></li>
  {% endfor %}
</ul>
