---
layout: archive
title: "Funders"
permalink: /funders/
---

{% for post in site.data.funders %}
    {% include archive-single.html type="grid" %}
{% endfor %}
