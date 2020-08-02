---
layout: archive-without-title
title: "Projects"
permalink: /projects/
---

<br>
<h1>Clinical</h1>
<div class="grid__wrapper">
  {% assign n = site.projects | size %}
  {% assign shuffled_array = site.projects | sample: n %}
  {% for project in shuffled_array %}
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
  {% assign n = site.projects | size %}
  {% assign shuffled_array = site.projects | sample: n %}
  {% for project in shuffled_array %}
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
<div class="grid__wrapper">
{% assign n = site.data.funders | size %}
{% assign shuffled_array = site.data.funders | sample: n %}
{% for post in shuffled_array %}
    {% include archive-founder.html type="grid" %}
{% endfor %}
</div>
