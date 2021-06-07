---
name            : "Andres Diaz-Pinto"
avatar          : "/assets/images/people/Andres.png"
position        : "PosDoc"
display_pos		  : "Research Fellow"
bio             : "Deep Learning Researcher in Healthcare - Research Fellow @ KCL"
email           : "andres.diaz-pinto@kcl.ac.uk"
twitter         : "diazandr3s"
uri             :
linkedin        : "diazandr3s"
github          : "diazandr3s"
google_scholar  : "-L0XFlMAAAAJ"

projects:
  - "Neurology - Dementia"
  - "Image Segmentation"
  - "Radiology - Triaging"

---

Andres Diaz-Pinto received his B.Sc. in Electronic Engineering from Pontificia Universidad Javeriana in Colombia and the M.Sc. in Telecommunications Engineering from Politecnico di Torino in Italy. During his M.Sc., he was a visiting researcher at the San Diego State University (SDSU) in the USA. In 2019, Andres was awarded his PhD Cum Laude at the Universitat Politecnica de Valencia in Spain where he was working on Computer Vision and Deep Learning techniques for automatic image classification and segmentation. After his PhD, Andres did a postdoc at the University of Leeds where he worked on designing and developing AI tools to analyse multi-modality images and demographic data to better understand heart diseases. He is currently a Research Fellow at King's College London and part of the London AI centre. In collaboration with NVIDIA, Andres is developing the new MONAILabel platform that facilitates medical image annotation using Deep Learning and Active Learning techniques.


## MONAILabel

The MONAI-label is a platform that facilitates interactive medical image annotation by using AI algorithms ([https://github.com/Project-MONAI/MONAILabel](https://github.com/Project-MONAI/MONAILabel)). It is an open-source and easy-to-install ecosystem that can run in a single machine with one GPU. MONAILabel shares the same principles with MONAI. This means it is modular, Pythonic, Extensible, Easy to debug, User friendly and Portable.



<figure class="image">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/people/andrez_page/MONIALabel_before_after.png" alt="">
  <em>MONAILabel in action, segmenting part of a cardiac image. Left: the partially-trained AI algorithm suggests an initial segmentation. Right: the human expert adds a few mouse clicks to guide the algorithm, which then redraws its segmentation and learns from the human input. This saves the human expert a lot of time compared to drawing the whole segmentation by hand.</em>
</figure>{: .align-center}


MONAI-label is composed of the following key components:

- Viewer (3D Slicer or OHIF)
- Viewer client
- MONAI-label engine
- Algorithms (DeepGrow, DeepEdit, Active Learning techniques, deep learning models, etc)

### Viewer

#### 3D Slicer (Slicer)

It is a free and open-source software package for medical image analysis and scientific visualization. Slicer is extensible, with powerful plug-in capabilities for adding algorithms and applications. Some of the features included in Slicer are multi-organ, support for multi-modality imaging (MRI, CT, US, nuclear medicine, and microscopy), and bidirectional interface for devices.

### Open Health Imaging Foundation (OHIF) viewer

It is an open-source and web-based medical image viewer. OHIF viewer supports DicomWeb and offers support for mapping to any proprietary and open-source API format. It supports viewing, annotating, and reporting on DICOM images in 2D (slices) and 3D (volumes).

### Viewer client

This component handles calls/events created by the viewer and/or the available algorithms in the MONAI-label engine.

### MONAI-label engine

The MONAI-label engine is a component that integrates all MONAI-label functionalities (active learning techniques, DeepEdit, DeepGrow, etc). It also has a REST API that allows communication between the MONAI-OHIF client and the engine itself.

### Algorithms

Available algorithms are DeepEdit (work in progress), Scribble-Based segmentation, DeepGrow ([https://arxiv.org/abs/1903.08205](https://arxiv.org/abs/1903.08205)), several U-Net architectures (i.e. vanilla U-Net, nnU-Net), and different active learning techniques such as Test Time Augmentation (TTA) and Module Loss
