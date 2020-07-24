---
layout: project
id: Technical_Image_Synthesis
title: "Image Synthesis"
project: "Image Synthesis"
author: AMIGO
logo: "assets/images/projects/placeholder.png"
excerpt: "Exployting the links between modalities"
domain: "Technical"
funding:
  - "Wellcome Trust"
  - "EPSRC"
  - "Siemens"

---
Synthesising data of one medical image modality from data of other modalities is known as image synthesis (or image translation). Applications of medical image synthesis are numerous, including harmonising data across scanners; synthesising computed tomography (CT) images from magnetic resonance (MR) images for positron emission tomography (PET) attenuation correction; simplifying the problem of multi-modal image registration; or generalising machine learning techniques by transferring out-of-distribution input data to the domain of the model's training data.



Image synthesis can be loosely categorised as either optimisation- or learning-based. Optimisation-based methods rely only on the data at hand to optimise a mapping between modalities, and do not use training data. Examples include using non-parametric joint histograms, estimating an intensity transformation during image registration, and biophysical models. Learning-based methods, on the other hand, use training data to learn the mapping, and can be applied to translating an unseen image from one domain into another. Some examples in this category use clustering, random forests, patch-matching and dictionaries. Learning-based methods based on various convolutional neural network architectures are currently the most popular approach for this. Trained end-to-end, on either paired or unpaired training data, they show promising results at this task.



Current projects   

- Medical images are routinely acquired in clinical practise for diagnosis and monitoring in order to assess anatomical structures within the body. While Computed Tomography (CT) has a short acquisition time and provides good density information about the body, Magnetic Resonance Imaging (MRI) stands out due to its excellent ability to image soft tissue. Both modalities can be combined with a simultaneous Positron Emission Tomography (PET) acquisition that provides valuable functional information about the body. It is often necessary to scan patients with multiple imaging modalities, which results in a significant increase in scanning costs. Furthermore, it is desirable to reduce both, the scanning time and the radiation dose that the patient is exposed to. Therefore, the field of image synthesis has been thoroughly explored for clinical applications. For many years multi-atlas propagation methods were the method of choice due to their excellent performance and robustness, however, in recent years deep learning methods have taken the lead in the field demonstrating superior performance. Within the AMIGO group deep image synthesis is part of multiple projects making use of convolutional neural networks (CNNs) and generative adversarial networks (GANs). These projects include the development of novel deep networks that attempt to solve the MR to CT image translation task specifically aiming to improve PET/MR attenuation correction.

- Data synthesis can be applied to generate simulated data when a large database is absent. For example, in vascular segmentation, we simulate volumetric images of vascular tree to train the network. In brief, the algorithm starts at growing the vascular structure (with spatial variation), balancing between in vs outflow, and later optimising with oxygen demand. At present, we apply this technique to generate a large database to train our network to improve the performance in segmenting the vascular structure from MRA, CTA images, and/or enhancing the accuracy of the centreline detection algorithm. Another application is the production of a generative model of the brain that integrates multiple MR modalities and pathologies in order to synthetise large datasets of the diseased brain that can help improving the performance of state-of-the-art brain segmentation models.  
