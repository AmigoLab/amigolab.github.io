---
title: MONAI
summary: PyTorch-based, open-source framework for deep learning in healthcare imaging
tags:
   - Collaborative Research
authors:
  - AMIGO
show_date: false
share: false
external_link: ""

image:
  caption: MONAI
  focal_point: Smart

links:
  - icon: github
    icon_pack: fab
    name: Code
    url: https://github.com/Project-MONAI/MONAI
  - icon: globe
    icon_pack: fas
    name: Website
    url: https://project-monai.github.io
  - icon: book-open
    icon_pack: fas
    name: Docs
    url: https://monai.readthedocs.io/en/latest/
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

slides: ""
---

MONAI is a [PyTorch](https://pytorch.org/)-based, [open-source](https://github.com/Project-MONAI/MONAI/blob/master/LICENSE) framework for deep learning in healthcare imaging. Its ambitions are:

- developing a community of academic, industrial and clinical researchers collaborating on a common foundation;
- creating state-of-the-art, end-to-end training workflows for healthcare imaging;
- providing researchers with the optimized and standardized way to create and evaluate deep learning models.

## Features

The codebase is currently under active development.

- flexible pre-processing for multi-dimensional medical imaging data;
- compositional & portable APIs for ease of integration in existing workflows;
- domain-specific implementations for networks, losses, evaluation metrics and more;
- customizable design for varying user expertise;
- multi-GPU data parallelism support.

## Installation

To install [the current release](https://pypi.org/project/monai/):

```
pip install monai
```

To install from the source code repository:

```
pip install git+https://github.com/Project-MONAI/MONAI#egg=MONAI
```

Alternatively, pre-built Docker image is available via [DockerHub](https://hub.docker.com/r/projectmonai/monai):

```
# with docker v19.03+
docker run --gpus all --rm -ti --ipc=host projectmonai/monai:latest
```

## Getting Started

Tutorials & examples are located at [monai/examples](https://github.com/Project-MONAI/MONAI/tree/master/examples).

Technical documentation is available via [Read the Docs](https://monai.readthedocs.io/en/latest/).

## Contributing

For guidance on making a contribution to MONAI, see the [contributing guidelines](https://github.com/Project-MONAI/MONAI/blob/master/CONTRIBUTING.md).

## Links

- Website: https://monai.io/
- API documentation: https://monai.readthedocs.io/en/latest/
- Code: https://github.com/Project-MONAI/MONAI
- Project tracker: https://github.com/Project-MONAI/MONAI/projects
- Issue tracker: https://github.com/Project-MONAI/MONAI/issues
- Wiki: https://github.com/Project-MONAI/MONAI/wiki
- Test status: https://github.com/Project-MONAI/MONAI/actions
