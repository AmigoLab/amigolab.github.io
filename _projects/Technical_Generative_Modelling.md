---
layout: project
id: Technical_Generative_Modelling
title: "Generative Modelling"
project: "Generative Modelling"
author: AMIGO
logo: "assets/images/projects/generative.png"
excerpt: "Learning to generate brains will bring us closer to understanding them"
domain: "Technical"
funding:
  - "Wellcome Trust"
  - "EPSRC"

---
Generative models are an important class of unsupervised learning that has been receiving a lot of attention in these last few years. This class learns the distribution of the training data, and models it so that it is possible to generate new instances that appear to be from the same dataset. In other words, the model learns to estimate the probability density function of the data. Generative Modelling has been applied to several areas: some examples are Google DeepMind’s speech generator, “WaveNet”, OpenAi’s GPT2 network, able to generate coherent text or image generator “BigGAN”.

<img src="{{ site.url }}{{ site.baseurl }}/assets/images/projects/generative_biggan.png" alt="">
<figcaption style="text-align:center;color:#333333;">Samples from BigGAN.</figcaption>

These models can be implemented using classic Machine Learning algorithms, like Gaussian Mixture Models (GMM), or Deep Learning algorithms, known as Deep Gerentaive models. The Deep Generative models can then be divided into different categories depending on how they perform the density estimation task:
- Variational autoencoders (VAE) which use latent variable models to explicitly model the probability density function of the training set. Through the process of downsampling the image to a compressed latent space and then decode it to regenerate the input image, it can optimize the log-likelihood of the data by maximizing the evidence lower bound (ELBO).
- Autoregressive models and flow-based models create an explicit density model. By using the autoregressive rule or the change of variable formula,   these models can tractably maximize the likelihood of training data.
- Generative Adversarial Network (GAN) composed by a generator network coupled to a discriminator network that forces the first to produce images that are realistic enough to make it believe they are as real as the ground truth ones (implicit density estimation).

In Medical Imaging, Generative Models can be used for data augmentation, a critical point due to the usual unavailability of large datasets in the field; Anomaly detection (or detecting out-of-distribution examples), important for triaging and unsupervised segmentation; Image Super-Resolution; and Domain Adaptation.
