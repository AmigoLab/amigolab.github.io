---
layout: project
id: Clinical_Cancer_Breast
title: "Cancer - Breast"
project: "Cancer - Breast"
author: AMIGO
logo: "assets/images/projects/breast_cancer.png"
excerpt: "Early Detection Saves Lives"
domain: "Clinical"
funding:
  - "KHP"
  - "Innovate UK"

---

Breast cancer is currently the most detrimental cancer in women claiming approximately 500,000 deaths worldwide every year. Population screening programs using mammography have been proven very effective in reducing mortality. In England, 3.1 million women were invited for screening in 2016/17, of which 71.1% attended and 18,402 cancers were detected. The challenges are the difficulty in interpreting images; 20% of cancers are not detected and some are visible in retrospect. On the other hand, 4.1% of patients in the UK are recalled from screening for assessment. However, only 20% of these patients require intervention whereas 80% have only benign or no findings. The high recall rate and the 25% shortage of radiologists, which is forecast to increase to 50% in five years, put immense pressure on the NHS to maintain a high quality of service.

To date, breast screening with two-dimensional (2D) full-field digital mammography (FFDM) is the gold standard for detecting early-state breast cancer. Studies have shown that there is an approximate 20% relative risk reduction in breast cancer mortality in women participating in breast cancer screening. Nevertheless, the intensity of a pixel in a 2D FFDM image constitutes the average of all tissue layers traversed by X-ray. Therefore, overlapping fibro glandular tissue can either appear as abnormality or occlude malignant abnormalities that translates into a reduction of sensitivity of screening and an increase in the number of false-positive recalls which are an unnecessary additional burden for the NHS. The national breast screening programme fails to detect 15-30% of cancers with 2D FFDM imaging, mostly in women with dense breasts, who have reduced screening programme sensitivity and tend to have larger screen-detected and interval cancer.

<img src="{{ site.url }}{{ site.baseurl }}/assets/images/projects/object_detection_mammo.png" alt="">
<figcaption style="text-align:center;color:#333333;">An AI breast screening workflow that detects lesions and generates automatic imaging reports.</figcaption>

In contrast to 2D FFDM, in which objects can be occluded, digital breast tomosynthesis (DBT) is a three-dimensional (3D) imaging technique disentangling contrast of individual layers of breast tissue. Therefore, DBT improves visibility of cancerous tissue and facilitates the differentiation between malignant and non-malignant features. Cancers below 20mm, which may be obscured by normal fibro-glandular tissue in standard 2D FFDM projection imaging, could be more readily detected using DBT, particularly in women with dense breast tissue. In addition, by facilitating the analysis of superimposed breast structures, DBT may enable the reader to identify features such as asymmetrical density (ASD) on 2D imaging as normal composite shadows and thereby decrease the number of false- positive recalls. The reduction of the recall rate would instantly translate into a reduction of unnecessary health-care costs and patient anxiety, ultimately reducing pressure on the NHS.

DBT increases specificity by 11% across all women, but especially in women with dense breasts, increases of sensitivity and specificity by 7% and 13%, respectively, have been reported. The ongoing Prospective Trial of DBT in Breast Cancer Screening (PROSPECTS) is measuring impact and cost effectiveness of DBT in routine screening in the NHS. While this trial will likely conclude that DBT is more sensitive and specific as already found in other EU countries, its associated increase in reading time, might make this new technology practically and financially prohibitive to use within the NHS.
Reading and reporting times of 3D DBT imaging double those of 2D FFDM, from approximately 45 second to 91 seconds, respectively, in a screen-reading setting. The adoption of DBT imaging for breast cancer screening will therefore only be possible by reducing the reading time of DBT images while, at the same time, coping with the current workforce radiology crisis.

The objective of Thames Mammography in collaboration with the AMIGOS group is to translate recent state-of-the-art object detection research in computer vision into the domain of breast imaging, providing an AI-based radiology workflow for breast cancer screening to significantly reduce DBT reading times by selective presentation and prioritisation to a human readers. The developed model by Thames Mammography has surpassed Google Health / DeepMind's performance of its breast cancer detection model as published in Nature, 2020.