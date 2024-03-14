<div align="center">
<h1>Gulp Boilerplate</h1>
<p>A boilerplate for creating static web projects using Gulp and WebPack</p>
<img src="https://img.shields.io/github/package-json/v/jixindev/gulp-boilerplate?style=for-the-badge&color=blue">
<img alt="GitHub Org's stars" src="https://img.shields.io/github/stars/gulp-boilerplate?style=for-the-badge&logo=github&logoColor=white&color=blue">

<br>
Mate with ♥ by <a href="https://jixindev.com" target="_blank">Serhii Mykulyn</a>
<br>
<br>
English | <a href="/readme-ua.md">Українська</a>
</div>

# Table of contents

- [Features](#features)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Working with files](#working-with-files)
- [Project structure](#project-structure)
- [Contributing](#contributing)

## Features

- [x] HTML:
  - [x] Pug compiling
  - [x] Creating components `yarn pug --add=ComponentName`
- [x] Styles:
  - [x] Compiling SCSS
  - [x] Autoprefixer
  - [x] Grouping media queries
  - [x] Cleaning and minify styles
  - [x] Removed unused css
  - [x] Automatic import from components `./src/pug/**/*.scss`
  - [x] Stylelint
- [x] Scripts:
  - [x] WebPack
  - [x] Babel
  - [x] Source maps
  - [x] Automatic import from modules `./src/pug/**/*.js`
  - [x] ESLint
- [x] Images:
  - [x] SVG optimization
  - [x] Conversion images to WebP
  - [x] PNG/JPG optimization
  - [x] Responsive images
  - [x] Lazy loading
  - [x] Automatic creation of sprites
- [x] Converting ttf to woff2
- [x] Local Server
- [x] Prettier

## Getting started

1. Create a folder for the project

```bash
mkdir NewProject && cd NewProject
```

2. Clone or download this repository

```bash
git clone git@github.com:jixindev/gulp-boilerplate.git .; rm -rf trunk .git
```

3. Install dependencies

```bash
yarn install
```

## Usage

**Development**

Run `yarn dev` to start the development server. This will compile Sass, minify JavaScript, optimize images, and set up live reloading.

```bash
yarn dev
```

**Compilation**

Run `yarn compile` to compile all assets without starting the development server.

```bash
yarn compile
```

**Production build**

Run `yarn build` to create a production-ready build of your project. This will minify all assets and prepare them for deployment.

```bash
yarn build
```

**Add pug component**

Run `yarn pug --add=ComponentName` to create a new Pug component with the specified name.

```bash
yarn pug --add=ComponentName
```

## Working with files

## Project structure

```
gulp-boilerplate            # Root directory
├── gulp                    # Gulp files
│   ├── config              # Gulp config files
│   └── tasks               # Gulp tasks
├── src                     # Source files
│   ├── assets              # Assets
│   │   ├── fonts           # Fonts
│   │   ├── icons           # SVG icons for sprite
│   │   ├── img             # Images
│   │   ├── js              # JavaScript files
│   │   └── scss            # SCSS files
│   └── pug                 # Pug components and mixins
├── .editorconfig           # IDE settings
├── .eslintrc.json          # ESLint configuration file
├── .gitignore              # Git ignore files
├── .prettierrc.json        # Prettier configuration file
├── .stylelintignore        # Stylelint ignore files
├── .stylelintrc.json       # Stylelint configuration file
├── gulpfile.js             # Main file for Gulp
├── jsconfig.json           # JavaScript configuration file
├── LICENSE                 # License
├── package.json            # Project info
├── readme-ua.md            # Documentation in Ukrainian
├── readme.md               # Documentation
└── yarn.lock               # Dependencies tree
```

## Contributing

Contributions are welcome! If you have suggestions, enhancements, or bug fixes, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute this code for personal or commercial projects.
