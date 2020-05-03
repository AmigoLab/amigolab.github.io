---
layout: archive-without-title
title: "People"
permalink: /people/
---
<h1>Academic</h1>
<div class="grid__wrapper">
{% for person in site.people %}
  {% if person.position == "Academic" %}
    {% include archive-person.html type="grid" %}
  {% endif %}
{% endfor %}
</div>

<!-- Do not remove -->
<div style="clear:both;"></div>
<!-- Do not remove -->

<h1>PosDoc</h1>
<div class="grid__wrapper">
{% for person in site.people %}
  {% if person.position == "PosDoc" %}
    {% include archive-person.html type="grid" %}
  {% endif %}
{% endfor %}
</div>

<!-- Do not remove -->
<div style="clear:both;"></div>
<!-- Do not remove -->

<h1>PhD Student</h1>
<div class="grid__wrapper">
{% for person in site.people %}
  {% if person.position == "PhD Student" %}
    {% include archive-person.html type="grid" %}
  {% endif %}
{% endfor %}
</div>
