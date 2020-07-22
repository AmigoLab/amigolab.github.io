---
name            : "Pedro Borges"
avatar          : "/assets/images/people/Pedro.png"
position        : "PhD Student"
bio             : "Employing Deep Learning in conjunction with physics-based imaging models to address harmonisation issues"
email           : "pedro.borges@kcl.ac.uk"
twitter         :
uri             :
linkedin        :
github          : "pedrob37"
google_scholar  :
orcid           :

projects:
  - "Generative Modelling"
  - "Meaning of Life"
---

I joined the UCL CDT in intelligent integrated imaging in healthcare after graduating from Imperial College London with a MSci in Physics. I was first attracted to the Medical Imaging field when working on my Master’s project on Optical Projection Tomography, a type of optical tomographic imaging technique not dissimilar to X-ray CT. I wanted to employ what I had learned in Physics in a more pragmatic manner, and this CDT presented the perfect opportunity to do so. The project I have chosen to work on for the duration of the CDT is titled “Physics-based image synthesis for MRI sequence standardisation”. Its main aims are twofold, to attempt to standardise acquisitions from different MRI scanners, and to shift clinical MRI sequences from qualitative to quantitative so that they can be used to benefit day-to-day patient care.

**Nifti Viewer**:
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
  <head>
    <script type="text/javascript">
      var params = [];
      params["worldSpace"] = true;
      params["images"] = ["/assets/js/Papaya/tests/data/sample_image.nii.gz"];
      // params["surfaces"] = ["data/mySurface.surf.gii"];
      // params["myOverlayImage.nii.gz"] = {"min": 4, "max": 10};
    </script>
  </head>
  <div class="papaya" data-params="params"></div>
</html>

<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
    <head>
        <!-- <div id="scene-container"> -->
          <!-- This div will hold our scene-->
          <!-- <canvas width="400" height="300" style="width: 400px; height: 300px;"></canvas>
        </div> -->
        <canvas id="threejs-container" style="height: 400px; max-width: 600px; width: 100%; display:block; margin-left: auto;
    margin-right: auto;" ></canvas>
        <link rel="stylesheet" type="text/css" href="/assets/js/Papaya/release/current/standard/papaya.css" />
        <script type="text/javascript" src="/assets/js/Papaya/release/current/minimal/papaya.js">
          var params = [];
          params["worldSpace"] = true;
          params["images"] = ["/assets/js/Papaya/src/js/tests/data/sample_image.nii.gz", "/assets/js/Papaya/src/js/tests/data/dti_V1.nii.gz"];
        // params["myOverlayImage.nii.gz"] = {"min": 4, "max": 10};
        </script>
    </head>
    <!-- <div class="papaya" data-params="params"></div> -->
    <!-- <div class="papaya"></div> -->
</html>