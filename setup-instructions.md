# Setup Instructions for "The Quiet Spark" Website

## Project Structure

We've created a static website using TailwindCSS for "The Quiet Spark" story with the following structure:

```
quiet-spark/
├── .github/               # GitHub configurations
│   └── workflows/         # GitHub Actions workflows
├── index.html             # Main HTML file (built)
├── css/                   # Compiled CSS directory
│   └── styles.css         # Compiled CSS file
├── js/                    # JavaScript files directory
│   └── main.js            # Main JavaScript file
├── src/                   # Source files
│   ├── css/               # CSS source files
│   │   └── tailwind.css   # Tailwind CSS source
│   ├── js/                # JavaScript source files
│   │   └── main.js        # Main JavaScript file
│   └── index.html         # HTML source file
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── package.json           # NPM package file
├── .gitignore             # Git ignore file
└── README.md              # Project documentation
```

## Features Implemented

1. **Clean, Responsive Design**:
   - Mobile-friendly layout
   - Typography optimized for readability
   - Proper spacing and content hierarchy

2. **Interactive Elements**:
   - Dark/light mode toggle
   - Font size adjustment
   - Reading progress indicator
   - Table of contents navigation
   - Smooth scrolling

3. **Performance Optimizations**:
   - Minimal JavaScript
   - TailwindCSS for efficient styling
   - No heavy frameworks

4. **Deployment Ready**:
   - GitHub Actions workflow for deploying to GitHub Pages
   - Production-ready build process

## How to Deploy

The project is ready to be deployed to GitHub Pages. Follow these steps:

1. Create a new GitHub repository
2. Push this project to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/quiet-spark.git
   git push -u origin main
   ```

3. Go to your repository settings on GitHub:
   - Navigate to "Settings" > "Pages"
   - For "Source", select "Deploy from a branch"
   - For "Branch", select "main" and "/" (root)
   - Click "Save"

4. GitHub will deploy your site and provide a URL like `https://yourusername.github.io/quiet-spark/`

The build process has been configured to output the compiled files directly to the root directory, which makes it compatible with GitHub Pages. The built files (index.html, css/styles.css, js/main.js) are committed to the repository, so GitHub Pages can serve them directly.

Alternatively, the repository is also set up with a GitHub Actions workflow that will automatically build and deploy the site when you push changes. This is handled by the `.github/workflows/deploy-to-github-pages.yml` file.

## Local Development

You can also continue developing the site locally:

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Make your changes to the files in the `src` directory.

3. Build for production when you're ready:
   ```bash
   npm run build
   ```

## Customization Options

The site is designed to be easily customizable:

- **Colors**: Edit the color schemes in `tailwind.config.js`
- **Typography**: Adjust font families and sizes in `tailwind.config.js`
- **Layout**: Modify the HTML structure in `src/index.html`
- **Interactions**: Update the JavaScript in `src/js/main.js`
