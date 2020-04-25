---
layout: archive
title: Publications
permalink: /publications/

---


<ul class="taxonomy__index">
  {% assign publicationsInYear = site.publications | group_by_exp: 'publication', 'publication.date | date: "%Y"' %}
  {% for year in publicationsInYear %}
    <li>
      <a href="#{{ year.name }}">
        <strong>{{ year.name }}</strong> <span class="taxonomy__count">{{ year.items | size }}</span>
      </a>
    </li>
  {% endfor %}
</ul>


{% assign publicationsByYear = site.publications | group_by_exp: 'publication', 'publication.date | date: "%Y"' %}
{% for year in publicationsByYear reversed %}
  <section id="{{ year.name }}" class="taxonomy__section">
    <h2 class="archive__subtitle">{{ year.name }}</h2>
    <div class="entries-{{ page.entries_layout | default: 'list' }}">
      {% for post in year.items reversed %}
        {% include archive-publication.html type=page.entries_layout %}
      {% endfor %}
    </div>
    <a href="#page-title" class="back-to-top">{{ site.data.ui-text[site.locale].back_to_top | default: 'Back to Top' }} &uarr;</a>
  </section>
{% endfor %}
