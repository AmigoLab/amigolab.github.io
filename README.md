# AMIGO Website

This repository contains the AMIGO lab website built with Hugo and the HugoBlox/Wowchemy content model.

Most day-to-day edits happen in the `content/` directory:

- `content/authors/` contains team member profiles.
- `content/project/` contains project pages.
- `content/people/index.md` controls which profile groups appear on the People page.
- `content/_index.md` defines the homepage sections.

Do not edit `public/` directly. It is generated output.

## Local preview

Install Hugo Extended if it is not already available on your machine.

Run the local development server from the repository root:

```bash
hugo server
```

Then open the local URL printed by Hugo, usually `http://localhost:1313/`.

To build the production site locally:

```bash
hugo
```

## How To Add Your Profile

Each person has their own folder under `content/authors/`.

Example:

```text
content/authors/YourName/
├── _index.md
└── avatar.jpg
```

### Step 1: Create your folder

Create a new folder inside `content/authors/`. Use a short, stable folder name because it becomes part of the page path.

Examples already in the site:

- `content/authors/Yovin/`
- `content/authors/Alex/`

### Step 2: Add `_index.md`

Create `content/authors/YourName/_index.md` with front matter similar to this:

```yaml
---
title: Your Name
first_name: Your
last_name: Name
superuser: false
role: PhD Student
organizations:
  - name: King's College London
    url: 'https://www.kcl.ac.uk/'
interests:
  - Medical Imaging
  - Artificial Intelligence
social:
  - icon: envelope
    icon_pack: fas
    link: 'mailto:your.email@kcl.ac.uk'
  - icon: linkedin
    icon_pack: fab
    link: https://www.linkedin.com/in/your-profile/
  - icon: google-scholar
    icon_pack: ai
    link: https://scholar.google.com/citations?user=YOUR_ID
email: ''
highlight_name: false
user_groups:
  - PhD Students
---

Write a short biography here in Markdown.
```

Notes:

- `title` is the display name shown on the site.
- `first_name` and `last_name` are used for sorting and metadata.
- `superuser` should usually be `false`. Keep it `true` only when there is a specific reason.
- `user_groups` determines where you appear on the People page.
- Current People page groups are: `Principal Investigators`, `Researchers`, `PhD Students`, `Administration`, `Visitors`, and `Alumni`.
- The biography is the text below the front matter.

### Step 3: Add your profile photo

Place your image in the same folder as `_index.md` and name it `avatar` with the correct extension, for example:

- `content/authors/YourName/avatar.jpg`
- `content/authors/YourName/avatar.png`

Use a square or near-square headshot when possible.

### Step 4: Preview your changes

Run `hugo server` and check:

- your People page entry,
- your individual profile page,
- your image,
- your links and biography formatting.

## How To Update Your Profile

Edit your existing file in `content/authors/<YourFolder>/_index.md`.

Common updates:

- Change `role` when your position changes.
- Update `organizations` if you move institution.
- Add or remove `interests`.
- Update `social` links.
- Move yourself between `user_groups`, for example from `PhD Students` to `Alumni`.
- Revise the biography text below the front matter.

If you want to replace your photo, keep the same filename if possible and overwrite the existing `avatar.*` file.

## How To Add A Project

Each project has its own folder under `content/project/`.

Example:

```text
content/project/your-project/
├── featured.png
└── index.md
```

### Step 1: Create a project folder

Add a new folder under `content/project/` using a short slug, for example `my-new-project`.

### Step 2: Add `index.md`

Create `content/project/my-new-project/index.md` using this pattern:

```yaml
---
title: My New Project
summary: One-sentence description of the project
tags:
  - Collaborative Research
authors:
  - AMIGO
show_date: false
share: false
external_link: ''

image:
  caption: My New Project
  focal_point: Smart

links:
  - icon: globe
    icon_pack: fas
    name: Website
    url: https://example.org
  - icon: github
    icon_pack: fab
    name: Code
    url: https://github.com/example/repo

url_code: ''
url_pdf: ''
url_slides: ''
url_video: ''
slides: ''
---

Write the project description here in Markdown.
```

Notes:

- `summary` is used in project cards and listings.
- `tags` are optional but useful for grouping.
- `authors` can stay as `AMIGO` unless there is a reason to use a different label.
- Add useful links under `links`.
- The body text can include headings, lists, images, and normal Markdown links.

### Step 3: Add a project image

Place a featured image in the same folder, typically:

- `content/project/my-new-project/featured.png`
- `content/project/my-new-project/featured.jpg`

This image is used by the project card and the project page.

### Step 4: Preview the project

Run `hugo server` and verify:

- the project appears on the Projects page,
- the summary looks correct,
- the featured image renders properly,
- all external links work.

## How To Update An Existing Project

Edit the relevant file in `content/project/<project-slug>/index.md`.

Typical updates include:

- changing the title or summary,
- updating project links,
- refreshing the description,
- replacing the featured image,
- adding new sections such as publications, collaborators, or usage notes.

If the project already has a published URL, keep the folder name stable unless you intentionally want the page path to change.

## Common Mistakes To Avoid

- Do not edit files inside `public/`.
- Do not rename author or project folders casually, because that changes page URLs.
- Keep YAML indentation consistent. Use spaces, not tabs.
- Make sure front matter starts and ends with `---`.
- Put images in the same folder as the content file when they belong to one profile or one project.
- Check the page locally before opening a pull request.

## Useful References

- Hugo: https://gohugo.io/
- HugoBlox docs: https://docs.hugoblox.com/
- Existing author example: `content/authors/Yovin/_index.md`
- Existing project example: `content/project/monai/index.md`
