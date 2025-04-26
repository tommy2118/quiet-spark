# The Quiet Spark

A static website built with TailwindCSS to showcase the story "The Quiet Spark".

## Features

- Clean, responsive design focused on readability
- Dark/light mode toggle
- Font size adjustment
- Reading progress indicator
- Table of contents navigation
- Mobile-friendly layout

## Project Structure

```
quiet-spark/
├── dist/               # Compiled assets
│   ├── css/            # Compiled CSS
│   ├── js/             # JavaScript files
│   └── index.html      # Main HTML file
├── src/                # Source files
│   ├── css/            # CSS source files
│   │   └── tailwind.css  # Tailwind CSS source
│   ├── js/             # JavaScript source files
│   │   └── main.js     # Main JavaScript file
│   └── index.html      # HTML source file
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── package.json        # NPM package file
└── README.md           # This file
```

## Setup and Development

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

### Development

```bash
# Build assets and watch for changes
npm run dev
```

### Build for Production

```bash
# Build assets for production
npm run build
```

## Deployment to GitHub Pages

1. Create a GitHub repository
2. Push the code to GitHub
3. Enable GitHub Pages in the repository settings:
   - Go to Settings > Pages
   - Select 'main' as the source branch
   - Select '/docs' or '/dist' as the folder (depending on your setup)
   - Click Save

Alternatively, you can use the GitHub Pages workflow:

1. Create a `.github/workflows/deploy.yml` file with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 16

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          branch: gh-pages
          folder: dist
```

2. Push this file to GitHub
3. GitHub Actions will build and deploy your site to the gh-pages branch

## License

This project is licensed under the MIT License.

## Credits

- Story: "The Quiet Spark"
- Design & Development: Tommy A. Caruso
