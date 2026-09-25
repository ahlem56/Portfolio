# Ahlem Bouchahoua Portfolio

This repository contains the source code for my personal portfolio, built to present my work as an AI and full-stack software engineer. The website highlights my technical skills, selected projects, certifications, and contact information in a clean, responsive interface.

Live website: https://portfolio-steel-nu-61.vercel.app/

## Overview

The portfolio is designed as a professional developer profile rather than a static resume page. It includes:

- A personal hero section with role positioning and direct calls to action.
- A curated skills section grouped by core stack, AI and data, cloud and DevOps, and certifications.
- A projects section with detailed case studies.
- A featured final-year engineering project: AI-assisted IT audit platform.
- Clickable certification links.
- A responsive layout optimized for desktop and mobile.

## Featured Project

The main project presented in this portfolio is an AI-assisted IT audit platform developed during my final-year engineering internship.

The platform supports the lifecycle of an IT audit mission, including secure authentication, mission management, Excel observation import, finding validation, AI-assisted priority classification, contextual RAG chat, structured report generation, quality controls, document export, feedback collection, and audit logging.

Technologies used in the project include React, TypeScript, FastAPI, LangChain, Azure services, Docker, Docker Compose, and Nginx.

Source code: https://github.com/ahlem56/Audit-It-AI-Assistant

## Tech Stack

This portfolio is built with:

- Astro
- TypeScript
- Preact
- Tailwind CSS
- Astro Image Optimization
- GSAP
- Lenis smooth scrolling
- Vercel deployment

## Project Structure

```text
.
|-- public/
|   `-- Static public assets
|-- src/
|   |-- assets/
|   |   |-- Icons/
|   |   |-- Logos/
|   |   |-- Mockup/
|   |   `-- Shots/
|   |-- components/
|   |   |-- About.astro
|   |   |-- Contact.astro
|   |   |-- Hero.astro
|   |   |-- Projects.astro
|   |   |-- Skills.astro
|   |   `-- UI/
|   |-- layouts/
|   |-- pages/
|   |   |-- index.astro
|   |   `-- projects/
|   `-- utils/
|       |-- ProjectsList.ts
|       `-- SkillStack.ts
|-- astro.config.mjs
|-- package.json
`-- tailwind.config.mjs
```

## Getting Started

### Prerequisites

Make sure you have Node.js installed. This project uses npm for dependency management.

### Installation

```bash
git clone https://github.com/ahlem56/Portfolio.git
cd Portfolio
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

The site will be available at the local URL shown in the terminal, usually:

```text
http://localhost:4321/
```

### Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev
```

Starts the Astro development server.

```bash
npm run build
```

Runs Astro checks and builds the static production site.

```bash
npm run preview
```

Serves the production build locally for review.

```bash
npm run lint
```

Runs linting for the project.

## Deployment

The portfolio is deployed with Vercel. After changes are pushed to the `main` branch, Vercel automatically builds and publishes the latest version.

Typical deployment workflow:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

## Customization

Most portfolio content is managed through the following files:

- `src/utils/ProjectsList.ts`: project data, project descriptions, case studies, screenshots, logos, and technology lists.
- `src/utils/SkillStack.ts`: skill categories, certification links, and displayed technologies.
- `src/components/Hero.astro`: hero section content and personal introduction.
- `src/components/About.astro`: about section content.
- `src/components/Contact.astro`: contact section and call to action.

Project images, icons, logos, and screenshots are stored in `src/assets`.

## Author

Ahlem Bouchahoua  
AI and Full-Stack Software Engineer  
GitHub: https://github.com/ahlem56

## License

This project is based on an open-source portfolio template and has been customized for my personal profile, projects, and branding.

