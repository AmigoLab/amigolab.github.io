---
layout: archive
title: Publications
permalink: /publications/

---

<ul class="taxonomy__index">
  {% for curryear in (2015..2023) reversed %}
    <li>
      <a href="#{{ curryear }}">
        <strong>{{ curryear }}</strong> <span class="taxonomy__count">{% assign yearcount = site.data.citations | where:'Year', curryear | size %}({{ yearcount }}) </span>
      </a>
    </li>
  {% endfor %}
</ul>


{% for curryear in (2015..2023) reversed %}
  <section id="{{ curryear }}" class="taxonomy__section">
    <h2 class="archive__subtitle">{{ curryear }}</h2>
    <div class="entries-{{ page.entries_layout | default: 'list' }}">
      {% include publications year=curryear %}
    </div>
    <a href="#page-title" class="back-to-top">{{ site.data.ui-text[site.locale].back_to_top | default: 'Back to Top' }} &uarr;</a>
  </section>
{% endfor %}
