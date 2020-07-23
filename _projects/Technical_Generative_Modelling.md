---
layout: project
id: Technical_Generative_Modelling
title: "Generative Modelling"
project: Generative Modelling
author: AMIGO
logo: "assets/images/projects/generative.png"
excerpt: "Learning to generate brains will bring us closer to understanding them"
domain: "Technical"
funding:
  - "Wellcome Trust"
  - "EPSRC"

---
Generative Modelling is a category of unsupervised learning that learns the distribution of its input data, and models it so that it is possible to sample instances from it.  These models can be implemented using classic Machine Learning algorithms, like Gaussian Mixture Models (GMM), or Deep Learning algorithms, like Variational Autoencoders (VAE). Generative Modelling can be applied to different areas: some examples are Google DeepMind's speech generator, "WaveNet", OpenAi's GPT2 network, able to generate coherent text or Google's face generator "FaceNet". In Generative Modelling applied to images, most state-of-the-art models derive from two main architectures based con Convolutional Neural Networks: the autoencoder (AE) or variational autoencoder (VAE), which downsample the image to a compressed latent space (VAEs differ from AEs in that VAEs impose a specific statistical distribution of that code) and then decode it to regenerate the input image, and the Generative Adversarial Network (GAN), a generator network coupled to a discriminator network that forces the first to produce images that are realistic enough to make it believe they are as real as the ground truth ones. In Medical Imaging, Generative Models can be used for data augmentation, a critical point in the application of Machine Learning models in the area, due to the usual unavailability of large datasets in the field.  
