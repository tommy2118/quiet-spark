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
├── index.html          # Main HTML file (built)
├── css/                # Compiled CSS directory
│   └── styles.css      # Compiled CSS file
├── js/                 # JavaScript files directory
│   └── main.js         # Main JavaScript file
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
   - Select '/' (root) as the folder
   - Click Save

The repository is already set up with a GitHub Actions workflow that will automatically deploy the site when you push to the main branch. The workflow file is located at `.github/workflows/deploy-to-github-pages.yml`.

The build process is configured to output the compiled files to the root directory, making it compatible with GitHub Pages deployment. This makes it easy to set up GitHub Pages to serve directly from your main branch.

When you push to GitHub, the workflow will:
1. Check out your code
2. Set up Node.js
3. Install dependencies
4. Build the project
5. Deploy the built files to GitHub Pages

Your site will be available at `https://yourusername.github.io/quiet-spark/`

## License

This project is licensed under the MIT License.

## Credits

- Story: "The Quiet Spark"
- Design & Development: Tommy A. Caruso
