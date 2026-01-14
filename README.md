# Personal Blog & Portfolio

A minimalist, high-performance personal blog and portfolio built with Astro, tailored for a technical professional background in Statistics, Machine Learning, and Software Engineering.

## 🚀 Features

- **Blazing Fast**: 100/100 Lighthouse performance.
- **Content Collections**: Managed sections for Blog, Projects, Research, and Book Notes.
- **Dynamic Book Notes**: Automatic 1-10 rating system and status tracking (Reading vs. Completed).
- **Academic Integration**: Support for research papers with author and publication metadata.
- **Blogroll**: A dedicated page for recommended reading.
- **Dark Mode**: Built-in support for light, dark, and system themes.
- **CI/CD**: Automatic deployment to GitHub Pages via GitHub Actions.

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Style**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: Inter & Lora
- **Deployment**: GitHub Pages

## 📖 How to add content

### Blog Posts
Create a new Markdown file in `src/content/blog/title.md`.

### Projects
Create a new Markdown file in `src/content/projects/title.md`.

### Research
Create a folder in `src/content/research/my-research/` and add an `index.md`.

### Book Notes
Create a folder in `src/content/books/book-title/` and add an `index.md`.
Use the following frontmatter:
```yaml
title: "Book Title"
author: "Author Name"
year: 2024 # Year you read it
pubYear: 2020 # Year published
status: "completed" # or "reading"
rating: 9 # 1-10 (optional)
description: "Brief summary for cards"
```

## 💻 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## 🏛️ License

This project is open-source and available under the MIT License.