---
title: NiftyNet
summary: NiftyNet is a TensorFlow-based open-source convolutional neural networks (CNN) platform for research in medical image analysis and image-guided therapy
tags:
   - Collaborative Research
authors:
  - AMIGO
show_date: false
share: false
external_link: ""

image:
  caption: NiftyNet
  focal_point: Smart

links:
  - icon: github
    icon_pack: fab
    name: Code
    url: https://github.com/NifTK/NiftyNet
  - icon: book-open
    icon_pack: fas
    name: Docs
    url: https://niftynet.readthedocs.io/
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

slides: ""
---

NiftyNet is a [TensorFlow](https://www.tensorflow.org/)-based open-source convolutional neural networks (CNN) platform for research in medical image analysis and image-guided therapy. NiftyNet's modular structure is designed for sharing networks and pre-trained models. Using this modular structure you can:

- Get started with established pre-trained networks using built-in tools
- Adapt existing networks to your imaging data
- Quickly build new solutions to your own image analysis problems

NiftyNet is a consortium of research organisations (BMEIS – [School of Biomedical Engineering and Imaging Sciences, King's College London](https://www.kcl.ac.uk/lsm/research/divisions/imaging/index.aspx); WEISS – [Wellcome EPSRC Centre for Interventional and Surgical Sciences, UCL](http://www.ucl.ac.uk/weiss); CMIC – [Centre for Medical Image Computing, UCL](http://cmic.cs.ucl.ac.uk/); HIG – High-dimensional Imaging Group, UCL), where BMEIS acts as the consortium lead.

### Features

- Easy-to-customise interfaces of network components
- Sharing networks and pretrained models
- Support for 2-D, 2.5-D, 3-D, 4-D inputs\*
- Efficient training with multiple-GPU support
- Implementation of recent networks (HighRes3DNet, 3D U-net, V-net, DeepMedic)
- Comprehensive evaluation metrics for medical image segmentation

NiftyNet is not intended for clinical use.

\*2.5-D: volumetric images processed as a stack of 2D slices; 4-D: co-registered multi-modal 3D volumes

### Installation

1. Please install the appropriate [TensorFlow](https://www.tensorflow.org/) package:
   - `pip install "tensorflow==1.15.*"`
2. `pip install niftynet`

All other NiftyNet dependencies are installed automatically as part of the pip installation process.

To install from the source repository, please checkout [the instructions](http://niftynet.readthedocs.io/en/dev/installation.html).

### Documentation

The API reference and how-to guides are available on [Read the Docs](http://niftynet.rtfd.io/).

### Useful links

- [NiftyNet website](http://niftynet.io/)
- [NiftyNet source code on GitHub](https://github.com/NifTK/NiftyNet)
- [NiftyNet Model zoo repository](https://github.com/NifTK/NiftyNetModelZoo/blob/master/README.md)
- [NiftyNet Google Group / Mailing List](https://groups.google.com/forum/#!forum/niftynet)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/niftynet) for general questions

### Citing NiftyNet

If you use NiftyNet in your work, please cite [Gibson and Li, et al. 2018](https://doi.org/10.1016/j.cmpb.2018.01.025):

E. Gibson\*, W. Li\*, C. Sudre, L. Fidon, D. I. Shakir, G. Wang, Z. Eaton-Rosen, R. Gray, T. Doel, Y. Hu, T. Whyntie, P. Nachev, M. Modat, D. C. Barratt, S. Ourselin, M. J. Cardoso† and T. Vercauteren† (2018) [NiftyNet: a deep-learning platform for medical imaging](https://doi.org/10.1016/j.cmpb.2018.01.025), Computer Methods and Programs in Biomedicine. DOI: [10.1016/j.cmpb.2018.01.025](https://doi.org/10.1016/j.cmpb.2018.01.025)

BibTeX entry:

```bibtex
@article{Gibson2018,
  title = "NiftyNet: a deep-learning platform for medical imaging",
  journal = "Computer Methods and Programs in Biomedicine",
  year = "2018",
  issn = "0169-2607",
  doi = "https://doi.org/10.1016/j.cmpb.2018.01.025",
  url = "https://www.sciencedirect.com/science/article/pii/S0169260717311823",
  author = "Eli Gibson and Wenqi Li and Carole Sudre and Lucas Fidon and
            Dzhoshkun I. Shakir and Guotai Wang and Zach Eaton-Rosen and
            Robert Gray and Tom Doel and Yipeng Hu and Tom Whyntie and
            Parashkev Nachev and Marc Modat and Dean C. Barratt and
            S\'{e}bastien Ourselin and M. Jorge Cardoso and Tom Vercauteren",
}
```

The NiftyNet platform originated in software developed for [Li, et al. 2017](https://doi.org/10.1007/978-3-319-59050-9_28):

Li W., Wang G., Fidon L., Ourselin S., Cardoso M.J., Vercauteren T. (2017) [On the Compactness, Efficiency, and Representation of 3D Convolutional Networks: Brain Parcellation as a Pretext Task.](https://doi.org/10.1007/978-3-319-59050-9_28) In: Niethammer M. et al. (eds) Information Processing in Medical Imaging. IPMI 2017. Lecture Notes in Computer Science, vol 10265. Springer, Cham. DOI: [10.1007/978-3-319-59050-9_28](https://doi.org/10.1007/978-3-319-59050-9_28)

### Licensing and Copyright

NiftyNet is released under [the Apache License, Version 2.0](https://github.com/NifTK/NiftyNet/blob/dev/LICENSE).

Copyright 2018 the NiftyNet Consortium.

### Acknowledgements

This project is grateful for the support from the [Wellcome Trust](https://wellcome.ac.uk/), the [Engineering and Physical Sciences Research Council (EPSRC)](https://www.epsrc.ac.uk/), the [National Institute for Health Research (NIHR)](https://www.nihr.ac.uk/), the [Department of Health (DoH)](https://www.gov.uk/government/organisations/department-of-health), [Cancer Research UK](https://www.cancerresearchuk.org/), [King's College London (KCL)](http://www.kcl.ac.uk/), [University College London (UCL)](http://www.ucl.ac.uk/), the [Science and Engineering South Consortium (SES)](https://www.ses.ac.uk/), the [STFC Rutherford-Appleton Laboratory](http://www.stfc.ac.uk/about-us/where-we-work/rutherford-appleton-laboratory/), and [NVIDIA](http://www.nvidia.com/).
