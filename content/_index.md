---
title: Artificial Medical Intelligence Group (AMIGO) at King's College London (KCL)
date: 2022-10-24
type: landing

# Custom header styling
custom_css: |
  <style>
    /* Elegant Navigation Header */
    .navbar {
      background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,250,0.95) 100%) !important;
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(207, 128, 147, 0.1);
      box-shadow: 0 2px 20px rgba(0,0,0,0.08);
      transition: all 0.3s ease;
      padding: 1rem 0;
    }
    
    .navbar.scrolled {
      background: linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,249,250,0.98) 100%) !important;
      box-shadow: 0 4px 30px rgba(0,0,0,0.12);
    }
    
    .navbar-brand {
      font-weight: 700;
      font-size: 1.5rem;
      color: #2c3e50 !important;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    
    .navbar-brand:hover {
      color: #cf8093 !important;
      transform: translateY(-1px);
    }
    
    .navbar-nav .nav-link {
      color: #2c3e50 !important;
      font-weight: 500;
      font-size: 1rem;
      padding: 0.75rem 1.25rem !important;
      margin: 0 0.25rem;
      border-radius: 25px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    
    .navbar-nav .nav-link::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #cf8093 0%, #b86b7f 100%);
      transition: left 0.3s ease;
      z-index: -1;
    }
    
    .navbar-nav .nav-link:hover {
      color: white !important;
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(207, 128, 147, 0.3);
    }
    
    .navbar-nav .nav-link:hover::before {
      left: 0;
    }
    
    .navbar-nav .nav-link.active {
      color: white !important;
      background: linear-gradient(135deg, #cf8093 0%, #b86b7f 100%);
      box-shadow: 0 4px 15px rgba(207, 128, 147, 0.3);
    }
    
    .navbar-nav .nav-link.active::before {
      left: 0;
    }
    
    /* Mobile menu styling */
    .navbar-toggler {
      border: none;
      padding: 0.5rem;
      border-radius: 8px;
      transition: all 0.3s ease;
    }
    
    .navbar-toggler:hover {
      background-color: rgba(207, 128, 147, 0.1);
    }
    
    .navbar-toggler:focus {
      box-shadow: 0 0 0 0.2rem rgba(207, 128, 147, 0.25);
    }
    
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23cf8093' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
    
    /* Collapse menu styling */
    .navbar-collapse {
      background: rgba(255,255,255,0.95);
      border-radius: 15px;
      margin-top: 1rem;
      padding: 1rem;
      box-shadow: 0 8px 30px rgba(0,0,0,0.1);
      backdrop-filter: blur(10px);
    }
    
    /* Smooth scrolling for anchor links */
    html {
      scroll-behavior: smooth;
    }

    /* Keep section subtitles readable across browsers even when external CSS is cached */
    #about-us .section-heading p,
    #team .section-heading p,
    #open-positions .section-heading p,
    #contact .section-heading p {
      color: #5f6368 !important;
      opacity: 1 !important;
    }
    
    /* Header scroll effect */
    .navbar {
      transition: all 0.3s ease;
    }
    
    /* Logo styling if present */
    .navbar-brand img {
      height: 40px;
      width: auto;
      transition: all 0.3s ease;
    }
    
    .navbar-brand:hover img {
      transform: scale(1.05);
    }
    
    /* Make all section titles bold */
    .section-title,
    h1, h2, h3, h4, h5, h6,
    .hero-title,
    .page-title,
    .block-title,
    .section-heading,
    .content-title {
      font-weight: 700 !important;
    }
    
    /* Specific title styling for different sections */
    .hero-section h1,
    .hero-section .hero-title {
      font-weight: 800 !important;
      font-size: 2.5rem;
    }
    
    .section-title {
      font-weight: 700 !important;
      font-size: 2rem;
      color: #2c3e50;
    }
    
    .block-title {
      font-weight: 700 !important;
      font-size: 1.75rem;
      color: #2c3e50;
    }
    
    .card-title {
      font-weight: 600 !important;
    }
    
    /* Ensure all markdown titles are bold */
    .markdown h1,
    .markdown h2,
    .markdown h3,
    .markdown h4,
    .markdown h5,
    .markdown h6 {
      font-weight: 700 !important;
    }
    
    /* Responsive adjustments */
    @media (max-width: 991.98px) {
      .navbar-nav .nav-link {
        margin: 0.25rem 0;
        text-align: center;
      }
      
      .navbar-collapse {
        margin-top: 0.5rem;
        padding: 0.5rem;
      }
    }
    
    /* High contrast mode support */
    @media (prefers-contrast: high) {
      .navbar {
        background: #ffffff !important;
        border-bottom: 2px solid #cf8093;
      }
      
      .navbar-nav .nav-link {
        color: #000000 !important;
      }
      
      .navbar-nav .nav-link:hover,
      .navbar-nav .nav-link.active {
        background: #cf8093 !important;
        color: #ffffff !important;
      }
    }
    
    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
      .navbar,
      .navbar-nav .nav-link,
      .navbar-brand {
        transition: none;
      }
      
      html {
        scroll-behavior: auto;
      }
    }
  </style>

sections:
  - block: hero
    content:
      # title: |
      #   AMIGO
      image:
        filename: welcome.png
        alt: AMIGO - Artificial Medical Intelligence Group logo
      text: |
        <br>

        We are the Artificial Medical Intelligence Group (AMIGO).

        <small>AMIGO is based in the <a href="https://www.kcl.ac.uk/bmeis" target="_blank" rel="noopener">School of Biomedical Engineering and Imaging Sciences</a> at <a href="https://www.kcl.ac.uk" target="_blank" rel="noopener">King's College London</a> (KCL), UK.</small>
    design:
      columns: '1'
  
  - block: markdown
    id: about-us
    content:
      title: Research Themes
      subtitle: 'Advancing medical AI through interdisciplinary research'
      text: |
        <div class="text-center mb-5">
          <p class="lead">Our research focuses on developing artificial intelligence solutions for real-world medical challenges. We combine cutting-edge machine learning with clinical expertise to create tools that improve patient care and advance medical knowledge.</p>
        </div>
        
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="research-theme-card">
              <div class="theme-icon">
                <i class="fas fa-brain fa-3x" style="color: #cf8093;"></i>
              </div>
              <h4>Medical AI & Machine Learning</h4>
              <p>Developing advanced deep learning algorithms for medical image analysis, clinical decision support, and predictive modeling using large-scale healthcare datasets.</p>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="research-theme-card">
              <div class="theme-icon">
                <i class="fas fa-x-ray fa-3x" style="color: #cf8093;"></i>
              </div>
              <h4>Medical Imaging</h4>
              <p>Creating AI-powered tools for automated analysis of MRI, CT, and other medical imaging modalities to assist radiologists and improve diagnostic accuracy.</p>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="research-theme-card">
              <div class="theme-icon">
                <i class="fas fa-user-md fa-3x" style="color: #cf8093;"></i>
              </div>
              <h4>Clinical Translation</h4>
              <p>Bridging the gap between research and clinical practice by developing deployable AI systems that integrate seamlessly into hospital workflows.</p>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="research-theme-card">
              <div class="theme-icon">
                <i class="fas fa-users fa-3x" style="color: #cf8093;"></i>
              </div>
              <h4>Multidisciplinary Collaboration</h4>
              <p>Bringing together computer scientists, engineers, clinicians, and mathematicians to tackle complex medical challenges from multiple perspectives.</p>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="research-theme-card">
              <div class="theme-icon">
                <i class="fas fa-code fa-3x" style="color: #cf8093;"></i>
              </div>
              <h4>Open Science</h4>
              <p>Promoting reproducible research through open-source software development, public datasets, and transparent methodologies that benefit the global research community.</p>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="research-theme-card">
              <div class="theme-icon">
                <i class="fas fa-chart-line fa-3x" style="color: #cf8093;"></i>
              </div>
              <h4>Healthcare Analytics</h4>
              <p>Leveraging large-scale hospital data to identify patterns, predict outcomes, and optimize healthcare delivery through advanced statistical and machine learning methods.</p>
            </div>
          </div>
        </div>
        
        <style>
          .research-theme-card {
            background: white;
            border-radius: 12px;
            padding: 1.2rem;
            box-shadow: 0 6px 20px rgba(0,0,0,0.08);
            border: 1px solid #f0f0f0;
            transition: all 0.3s ease;
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          
          .research-theme-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 30px rgba(207, 128, 147, 0.15);
            border-color: #cf8093;
          }
          
          .theme-icon {
            text-align: center;
            margin-bottom: 0.8rem;
          }
          
          .theme-icon .fa-3x {
            font-size: 1.6rem !important;
          }
          
          .research-theme-card h4 {
            color: #2c3e50;
            font-weight: 600;
            font-size: 0.82rem !important;
            margin-bottom: 0.4rem;
            text-align: center;
          }
          
          .research-theme-card p {
            color: #6c757d;
            font-size: 0.68rem !important;
            line-height: 1.5;
            margin-bottom: 0.8rem;
            flex-grow: 1;
          }
          
          .theme-tags {
            text-align: center;
          }
          
          .theme-tags .badge {
            background-color: #cf8093;
            color: white;
            padding: 0.2rem 0.5rem;
            border-radius: 15px;
            font-weight: 500;
            margin: 0.1rem;
            font-size: 0.58rem !important;
          }
        </style>

  
    design:
      columns: '1'
  
  # - block: collection
  #   id: recent-posts
  #   content:
  #     title: Recent posts
  #     subtitle: ''
  #     text: ''
  #     count: 5
  #     filters:
  #       author: ''
  #       category: ''
  #       exclude_featured: false
  #       publication_type: ''
  #       tag: ''
  #     offset: 0
  #     order: desc
  #     page_type: post
  #   design:
  #     view: card
  #     columns: '2'
  #     css_class: 'posts-section'

  - block: portfolio
    id: current-research
    content:
      title: Current Research Projects
      subtitle: 'Ongoing research initiatives and their impact'
      text: |
        <div class="text-center mb-5">
          <p class="lead">Explore our active research projects that are advancing the field of medical artificial intelligence and improving patient outcomes.</p>
        </div>
        
        <style>
          /* Force grid layout for portfolio items */
          #current-research .js-layout-row {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.5rem !important;
            padding-top: 10px !important;
          }
          
          #current-research .js-layout-row > div {
            width: 100% !important;
            position: relative !important;
            left: auto !important;
            top: auto !important;
            float: none !important;
            max-width: 100% !important;
            flex: none !important;
            padding: 0 !important;
          }
          
          @media (max-width: 991.98px) {
            #current-research .js-layout-row {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          
          @media (max-width: 767.98px) {
            #current-research .js-layout-row {
              grid-template-columns: 1fr !important;
            }
          }
          
          #current-research .js-layout-row > div.col-12 {
            max-width: 100%;
            padding: 0;
          }

          #current-research .card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 30px rgba(207, 128, 147, 0.15);
            border-color: #cf8093;
          }

          #current-research .btn-links .btn {
            display: inline-block;
            padding: 0.2rem 0.55rem;
            font-size: 0.72rem;
            margin: 0.1rem 0.15rem;
            background-color: #cf8093;
            border-color: #cf8093;
            color: white !important;
            border-radius: 20px;
            font-weight: 500;
            transition: all 0.3s ease;
          }

          #current-research .btn-links .btn:hover {
            background-color: #b86b7f;
            border-color: #b86b7f;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(207, 128, 147, 0.3);
          }

          #current-research .btn-links {
            display: flex;
            flex-wrap: wrap;
            gap: 0;
          }
          
          .research-theme-card {
            background: white;
            border-radius: 12px;
            padding: 1.2rem;
            box-shadow: 0 6px 20px rgba(0,0,0,0.08);
            border: 1px solid #f0f0f0;
            transition: all 0.3s ease;
            height: 100%;
            display: flex;
            flex-direction: column;
            cursor: pointer;
          }
          
          .research-card-link:hover .research-theme-card {
            transform: translateY(-8px);
            box-shadow: 0 12px 30px rgba(207, 128, 147, 0.15);
            border-color: #cf8093;
          }
          
          .research-card-link:hover .research-theme-card h4 {
            color: #cf8093;
          }
          
          .theme-icon {
            text-align: center;
            margin-bottom: 0.8rem;
          }
          
          .theme-icon .fa-3x {
            font-size: 1.6rem !important;
          }
          
          .research-theme-card h4 {
            color: #2c3e50;
            font-weight: 600;
            font-size: 0.82rem !important;
            margin-bottom: 0.4rem;
            text-align: center;
            transition: color 0.3s ease;
          }
          
          .research-theme-card p {
            color: #6c757d;
            font-size: 0.68rem !important;
            line-height: 1.5;
            margin-bottom: 0.8rem;
            flex-grow: 1;
            text-align: center;
          }
          
          .theme-tags {
            text-align: center;
            margin-bottom: 1rem;
          }
          
          .theme-tags .badge {
            background-color: #cf8093;
            color: white;
            padding: 0.4rem 0.8rem;
            border-radius: 15px;
            font-weight: 500;
            margin: 0.2rem;
            font-size: 0.8rem;
          }
          
          .theme-links {
            text-align: center;
          }
          
          .theme-links .btn {
            background-color: #cf8093;
            border-color: #cf8093;
            color: white;
            border-radius: 20px;
            padding: 0.5rem 1rem;
            font-weight: 500;
            transition: all 0.3s ease;
            margin: 0.2rem;
            text-decoration: none;
            display: inline-block;
            cursor: pointer;
          }
          
          .theme-links .btn:hover {
            background-color: #b86b7f;
            border-color: #b86b7f;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(207, 128, 147, 0.3);
          }
          
          /* Filter button styling */
          .btn-group {
            margin-bottom: 2rem;
          }
          
          .btn-group .btn {
            background-color: #09a898ff;
            border: 2px solid #40E0D0;
            color: #40E0D0;
            border-radius: 20px;
            padding: 0.5rem 1.5rem;
            font-weight: 500;
            transition: all 0.3s ease;
            margin: 0.25rem;
          }
          
          .btn-group .btn:hover,
          .btn-group .btn.active {
            background-color: #40E0D0;
            border-color: #40E0D0;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(64, 224, 208, 0.3);
          }
          
          .btn-group .btn:focus {
            box-shadow: 0 0 0 0.2rem rgba(64, 224, 208, 0.25);
          }
        </style>
      filters:
        folders:
          - currentresearch
        tag: ''
        category: ''
        publication_type: ''
        author: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
      default_button_index: 0
      buttons:
        - name: All
          tag: '*'
        - name: Technical
          tag: Technical
        - name: Clinical
          tag: Clinical
    design:
      columns: '1'
      view: community/research-card

  - block: portfolio
    id: collaborative-research
    content:
      title: Collaborative Research Projects
      subtitle: 'Partnerships driving medical AI innovation'
      text: |
        <div class="text-center mb-4">
          <p class="lead">Our collaborative projects bring together academic institutions, healthcare providers, and industry partners to advance medical AI research and clinical implementation.</p>
        </div>
        
        <style>
          .research-section .card {
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.08);
            border: 1px solid #f0f0f0;
            transition: all 0.3s ease;
            overflow: hidden;
          }
          
          .research-section .card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 30px rgba(207, 128, 147, 0.15);
            border-color: #cf8093;
          }
          
          .research-section .card-header {
            background: linear-gradient(135deg, #cf8093 0%, #b86b7f 100%);
            color: white;
            border: none;
            padding: 1.5rem;
          }
          
          .research-section .card-header h3 {
            color: white;
            font-weight: 600;
            margin: 0;
          }
          
          .research-section .card-body {
            padding: 2rem;
            background: white;
          }
          
          .research-section .card-text {
            color: #6c757d;
            line-height: 1.6;
          }
          
          .research-section .badge {
            background-color: #cf8093;
            color: white;
            padding: 0.4rem 0.8rem;
            border-radius: 15px;
            font-weight: 500;
            margin: 0.2rem;
          }
          
          .research-section .btn {
            background-color: #cf8093;
            border-color: #cf8093;
            color: white;
            border-radius: 20px;
            padding: 0.5rem 1.5rem;
            font-weight: 500;
            transition: all 0.3s ease;
          }
          
          .research-section .btn:hover {
            background-color: #b86b7f;
            border-color: #b86b7f;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(207, 128, 147, 0.3);
          }
          
          #collaborative-research .js-layout-row {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.5rem !important;
            padding-top: 10px !important;
          }
          
          #collaborative-research .js-layout-row > div {
            width: 100% !important;
            position: relative !important;
            left: auto !important;
            top: auto !important;
            float: none !important;
            max-width: 100% !important;
            flex: none !important;
            padding: 0 !important;
          }
          
          @media (max-width: 991.98px) {
            #collaborative-research .js-layout-row {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          
          @media (max-width: 767.98px) {
            #collaborative-research .js-layout-row {
              grid-template-columns: 1fr !important;
            }
          }
          
          .research-section .card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 30px rgba(207, 128, 147, 0.15);
            border-color: #cf8093;
          }

          .research-section .btn-links .btn {
            display: inline-block;
            padding: 0.2rem 0.55rem;
            font-size: 0.72rem;
            margin: 0.1rem 0.15rem;
            background-color: #cf8093;
            border-color: #cf8093;
            color: white !important;
            border-radius: 20px;
            font-weight: 500;
            transition: all 0.3s ease;
          }

          .research-section .btn-links {
            display: flex;
            flex-wrap: wrap;
            gap: 0;
          }
        </style>
      filters:
        folders:
          - project
        tag: 'Collaborative Research'
        category: ''
        publication_type: ''
        author: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
      # default_button_index: 0
      # buttons:
      #   - name: All
      #     tag: 'Collaborative Research'
      #   - name: Featured
      #     tag: Featured
    design:
      columns: '1'
      view: community/project-card-grid
      flip_alt_rows: false
      css_class: 'research-section'



  - block: people
    id: team
    content:
      title: The AMIGO Team
      subtitle: 'Meet our multidisciplinary research group'
      text: |
        <div class="text-center mb-4">
          <p class="lead">Our team brings together expertise from computer science, engineering, mathematics, physics, and clinical medicine to advance medical AI research.</p>
        </div>
        
        <style>
          .team-section .card {
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.08);
            border: 1px solid #f0f0f0;
            transition: all 0.3s ease;
            overflow: hidden;
          }
          
          .team-section .card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 30px rgba(207, 128, 147, 0.15);
            border-color: #cf8093;
          }
          
          .team-section .card-header {
            background: linear-gradient(135deg, #cf8093 0%, #b86b7f 100%);
            color: white;
            border: none;
            padding: 1.5rem;
          }
          
          .team-section .card-body {
            padding: 2rem;
            background: white;
          }
          
          .team-section .card-title {
            color: #2c3e50;
            font-weight: 600;
          }
          
          .team-section .card-text {
            color: #6c757d;
            line-height: 1.6;
          }
          
          .team-section .badge {
            background-color: #cf8093;
            color: white;
            padding: 0.4rem 0.8rem;
            border-radius: 15px;
            font-weight: 500;
            margin: 0.2rem;
          }
          
          .team-section .btn {
            background-color: #cf8093;
            border-color: #cf8093;
            color: white;
            border-radius: 20px;
            padding: 0.5rem 1.5rem;
            font-weight: 500;
            transition: all 0.3s ease;
          }
          
          .team-section .btn:hover {
            background-color: #b86b7f;
            border-color: #b86b7f;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(207, 128, 147, 0.3);
          }
          
          .team-section .social-links a {
            color: #cf8093;
            font-size: 1.2rem;
            margin: 0.3rem;
            transition: all 0.3s ease;
          }
          
          .team-section .social-links a:hover {
            color: #b86b7f;
            transform: translateY(-2px);
          }
        </style>
      user_groups:
        - Principal Investigators
        - Researchers
        - PhD Students
        - Affiliated research team members
        - Alumni
      sort_by: Params.last_name
      sort_ascending: true
    design:
      show_interests: false
      show_role: true
      show_social: true
      show_organizations: false
      css_class: 'team-section'

  - block: markdown
    content:
      title: 'Funders and Collaborators'
      subtitle: 'Supporting our research mission'
      text: |
        <div class="text-center mb-4">
          <p class="lead">We are grateful for the support of our funding partners and collaborators who enable our research in medical artificial intelligence.</p>
        </div>
        
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="collaboration-card">
              <div class="text-center">
                <img src="/media/AIC_logo.png" alt="AI Centre for Value Based Healthcare logo"
                style="display:block; margin:0 auto; width:100%; max-width:180px; height:100px; object-fit:contain;">
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="collaboration-card">
              <div class="text-center">
                <img src="/media/Siemens_logo.svg" alt="Siemens Healthineers logo" 
                style="display:block; margin:0 auto; width:100%; max-width:180px; height:100px; object-fit:contain;">
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="collaboration-card">
              <div class="text-center">
                <img src="/media/deepc_logo.svg" alt="deepc AI logo" 
                style="display:block; margin:0 auto; width:100%; max-width:180px; height:100px; object-fit:contain;">
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="collaboration-card">
              <div class="text-center">
                <img src="/media/Wellcome_Trust_logo.svg" alt="Wellcome Trust logo" 
                style="display:block; margin:0 auto; width:100%; max-width:180px; height:100px; object-fit:contain;">
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="collaboration-card">
              <div class="text-center">
                <img src="https://www.ukri.org/wp-content/uploads/2022/03/ukri-epsrc-square-logo.png" alt="EPSRC logo"
                style="display:block; margin:0 auto; width:100%; max-width:180px; height:100px; object-fit:contain;">
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="collaboration-card">
              <div class="text-center">
                <img src="https://www.kcl.ac.uk/newimages/folsm/logos/slcps/kings-health-partners-logo.xeb92b085.png?crop=575,241,103,102&f=webp" alt="King's Health Partners logo"
                style="display:block; margin:0 auto; width:100%; max-width:180px; height:100px; object-fit:contain;">
              </div>
            </div>
          </div>
        </div>
        
        <style>
          .industry-section {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 3rem 0;
            border-radius: 15px;
            margin: 2rem 0;
          }
          
          .collaboration-card {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 6px 20px rgba(0,0,0,0.08);
            border: 1px solid #f0f0f0;
            transition: all 0.3s ease;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .collaboration-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 30px rgba(207, 128, 147, 0.15);
            border-color: #cf8093;
          }
          
          .collaboration-card img {
            transition: all 0.3s ease;
          }
          
          .collaboration-card:hover img {
            transform: scale(1.05);
          }
        </style>
    design:
      columns: '2'
      css_class: 'industry-section'

  - block: collection
    id: open-positions
    content:
      title: Open Positions
      subtitle: ''
      text: |
        <div class="text-center mb-4 positions-intro">
          <p class="lead">We welcome applications from qualified researchers, PhD students, and postdoctoral fellows interested in advancing medical artificial intelligence.</p>
          <p class="positions-copy">For more information, please visit our <a href="https://www.kcl.ac.uk/study/postgraduate-research/areas/biomedical-engineering-imaging-sciences-mphil-phd">Postgraduate Research</a> page.</p>
        </div>
        
        
        <style>
          .positions-section .positions-intro {
            max-width: 58rem;
            margin-left: auto;
            margin-right: auto;
          }

          .positions-section .positions-copy {
            max-width: 52rem;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.7;
            overflow-wrap: normal;
            word-break: normal;
            color: rgba(0, 0, 0, 0.54) !important;
          }

          .positions-section .positions-copy a {
            white-space: nowrap;
            color: #8b1538 !important;
          }

          /* Render position cards side-by-side (responsive grid). */
          #open-positions .col-12.col-lg-8 {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.25rem;
            align-items: start;
          }

          /* Keep the intro full-width above the grid. */
          #open-positions .positions-intro {
            grid-column: 1 / -1;
          }

          /* Card styling */
          #open-positions .card-simple.view-card {
            margin: 0 !important;
            height: 100%;
            background: #ffffff !important;
            border: 1px solid #e0e0e0 !important;
            border-left: 4px solid #8B1538 !important;
            border-radius: 6px !important;
            padding: 1.5rem 1.75rem !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.06);
            transition: box-shadow 0.25s ease, transform 0.25s ease;
          }

          #open-positions .card-simple.view-card:hover {
            box-shadow: 0 6px 20px rgba(0,0,0,0.1);
            transform: translateY(-2px);
          }

          /* Author & date metadata */
          #open-positions .card-simple .article-metadata {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            margin-bottom: 0.75rem;
            font-size: 0.78rem;
            text-transform: uppercase;
            letter-spacing: 0.04em;
          }

          #open-positions .card-simple .article-metadata a {
            color: #8B1538 !important;
            font-weight: 600;
          }

          #open-positions .card-simple .article-date {
            color: #6c757d !important;
            font-weight: 400;
          }

          /* Title */
          #open-positions .card-simple .article-title {
            font-size: 1.15rem !important;
            font-weight: 600 !important;
            line-height: 1.4 !important;
            margin-bottom: 0.6rem !important;
            margin-top: 0.5rem !important;
          }

          #open-positions .card-simple .article-title a {
            color: #212529 !important;
            text-decoration: none !important;
          }

          #open-positions .card-simple .article-title a:hover {
            color: #8B1538 !important;
          }

          /* Summary text */
          #open-positions .card-simple .article-style {
            font-size: 0.88rem !important;
            line-height: 1.6 !important;
          }

          #open-positions .card-simple .article-style p {
            color: #5f6368 !important;
            margin: 0;
          }

          #open-positions .card-simple .summary-link {
            text-decoration: none !important;
          }

          @media (max-width: 991.98px) {
            #open-positions .col-12.col-lg-8 {
              grid-template-columns: 1fr;
            }
          }
        </style>
      count: 5
      filters:
        folders:
          - positions
        exclude_featured: false
      offset: 0
      order: desc
      page_type: positions
    design:
      view: card
      columns: '2'
      css_class: 'positions-section'

  - block: contact
    id: contact
    content:
      title: Get in Touch
      subtitle: 'We welcome collaborations and inquiries'
      text: |
        <div class="row text-center">
          <div class="col-md-6 mb-4">
            <div class="contact-info-card">
              <i class="fas fa-map-marker-alt fa-2x mb-3" style="color: #cf8093;"></i>
              <h5>Visit Us</h5>
              <p>Becket House, 9th floor<br>1 Lambeth Palace Road<br>London, SE1 7EU<br>United Kingdom</p>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="contact-info-card">
              <i class="fas fa-university fa-2x mb-3" style="color: #cf8093;"></i>
              <h5>Institution</h5>
              <p>King's College London<br>School of Biomedical Engineering</p>
            </div>
          </div>
        </div>
        
        <style>
          .contact-section .btn-primary,
          .contact-section .btn,
          .contact-section input[type="submit"],
          .contact-section button[type="submit"] {
            background-color: #cf8093 !important;
            border-color: #cf8093 !important;
            color: white !important;
          }
          
          .contact-section .btn-primary:hover,
          .contact-section .btn:hover,
          .contact-section input[type="submit"]:hover,
          .contact-section button[type="submit"]:hover {
            background-color: #b86b7f !important;
            border-color: #b86b7f !important;
          }
          
          .contact-section .btn-primary:focus,
          .contact-section .btn:focus,
          .contact-section input[type="submit"]:focus,
          .contact-section button[type="submit"]:focus {
            background-color: #cf8093 !important;
            border-color: #cf8093 !important;
            box-shadow: 0 0 0 0.2rem rgba(207, 128, 147, 0.25) !important;
          }
        </style>
      # email: m.jorge.cardoso@kcl.ac.uk
      phone: 
      address:
        # street: "Becket House, 9th floor, 1 Lambeth Palace Road"
        # city: "London"
        # region: "England"
        # postcode: "SE1 7EU"
        # country: "United Kingdom"
        country_code: "GB"
      coordinates:
        latitude: "51.499698"
        longitude: "-0.116236"
      # directions: "Located at Becket House, 9th floor, 1 Lambeth Palace Road. The AMIGO research group is based in the School of Biomedical Engineering and Imaging Sciences at King's College London."
      contact_links:
        - icon: github
          icon_pack: fab
          name: View our GitHub
          link: "https://github.com/AmigoLab"
      autolink: true
      # form:
      #   provider: netlify
      #   formspree:
      #     id: ''
      #   netlify:
      #     captcha: false
    design:
      columns: '1'
      css_class: 'contact-section'
---
