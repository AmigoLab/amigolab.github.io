---
layout: archive-without-title
title: "Projects"
permalink: /projects/
---
<br>

<h1>Clinical</h1>
<div class="grid__wrapper">
  {% for project in site.projects %}
      {% if project.domain == "Clinical" %}
        {% include archive-project.html type="grid" %}
      {% endif %}
  {% endfor %}
</div>

<!-- Do not remove -->
<div style="clear:both;"></div>
<!-- Do not remove -->

<h1>Technical</h1>
<div class="grid__wrapper">
  {% for project in site.projects %}
      {% if project.domain == "Technical" %}
        {% include archive-project.html type="grid" %}
      {% endif %}
  {% endfor %}
</div>

<!-- Do not remove -->
<div style="clear:both;"></div>
<!-- Do not remove -->

<br>

<h1>Funders</h1>
<div class="grid_wrapper">
{% for post in site.data.funders %}
    {% include archive-founder.html type="grid" %}
{% endfor %}
</div>
