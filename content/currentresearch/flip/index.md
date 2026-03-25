---
title: Federated Learning Interoperability Platform (FLIP)
summary: Open-source platform for federated training and evaluation of medical imaging AI across NHS Trusts
show_date: false
share: false
authors:
  - Alex
  - Rafa
  - Virginia
tags:
   - Current Research
   - Technical
external_link: ""

links:
  - icon: github
    icon_pack: fab
    name: Code
    url: https://github.com/londonaicentre/FLIP
  - icon: book-open
    icon_pack: fas
    name: Docs
    url: https://londonaicentreflip.readthedocs.io/en/latest/
  - icon: globe
    icon_pack: fas
    name: Website
    url: https://www.aicentre.co.uk/our-platforms
card_image:
  filename: flip-logo 1.png
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

slides: ""
---

FLIP is an open-source platform that links data from multiple NHS Trusts to enable federated training and evaluation of medical imaging AI models, while ensuring data privacy and security. Developed by the London AI Centre in collaboration with Guy's and St Thomas' NHS Foundation Trust and King's College London, FLIP comprises three main components.

**Secure Enclaves** - Dedicated secure data storage within each partner NHS Trust's firewall keeps sensitive patient data inside the Trust. Data from across the Trusts' patient records systems is transferred into the secure enclave for curating and aggregation, unifying medical imaging scans from PACS and other electronic health data.

**Interoperability and Data Harmonisation** - Electronic healthcare records are complex and heterogeneous. FLIP uses ontological and data interoperability standards to structure and harmonise data across multiple hospitals and clinical systems, enabling AI algorithms to query, learn, and action data via an open standards-based interface.

**Federated Learning and Evaluation** - FLIP brings algorithms to the data within each NHS Trust's secure enclave, without sharing information outside the secure firewall or breaking local governance rules. Algorithmic models are sent to multiple Trusts and trained on local data before being securely combined to achieve consensus. The platform supports both NVIDIA FLARE and Flower federated learning frameworks.
