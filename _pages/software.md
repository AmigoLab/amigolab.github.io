---
layout: archive
title: "Software"
permalink: /software/
---

<br>

<section>
    {% for software in site.software %}
        {% if software.status == "Current" %}
          {% include archive-software.html type="grid" %}
        {% endif %}
    {% endfor %}
</section>



<section>
  <!--- TODO: Improve separation of sections -->
  <br><br><br>
  <h1>Unmaintained</h1>
    {% for software in site.software %}
        {% if software.status == "Unmaintained" %}
          {% include archive-software.html type="grid" %}
        {% endif %}
    {% endfor %}
</section>