---
layout: archive-without-title
title: "People"
permalink: /people/
---

<!---
Sections to include photos and links to elements from people collection (defined
in _config.yml)
-->
<section>
<h1>Academic</h1>
{% for person in site.people %}
  {% if person.position == "Academic" %}
    {% include archive-person.html type="grid" %}
  {% endif %}
{% endfor %}
</section>

<section>
<!--- TODO: Improve separation of sections -->
<br><br><br><br><br><br><br>
<h1>PosDoc</h1>
{% for person in site.people %}
  {% if person.position == "PosDoc" %}
    {% include archive-person.html type="grid" %}
  {% endif %}
{% endfor %}
</section>

<section>
<!--- TODO: Improve separation of sections -->
<br><br><br><br><br><br><br>
<h1>PhD Student</h1>
{% for person in site.people %}
  {% if person.position == "PhD Student" %}
    {% include archive-person.html type="grid" %}
  {% endif %}
{% endfor %}
</section>
