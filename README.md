<img alt="cupcake-logo" src="http://funkyimg.com/i/2KN2G.png" width="350">

[![CodeFactor](https://www.codefactor.io/repository/github/cupcake-design-system/cupcake/badge)](https://www.codefactor.io/repository/github/cupcake-design-system/cupcake)
[![Travis (.org)](https://img.shields.io/travis/Cupcake-Design-System/Cupcake.svg)](https://travis-ci.org/Cupcake-Design-System/Cupcake)
![David](https://img.shields.io/david/Cupcake-Design-System/Cupcake.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/00ab3d48-03ee-40f5-b448-10efe6c7ff7d/deploy-status)](https://app.netlify.com/sites/cupcake/deploys)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Cupcake/Cupcake-2)

# Cupcake 2.0 

This repository includes everything you need to build, customize, test, and deploy Cupcake.

[View the docs page for Cupcake](https://cupcake-design-system.github.io)

## Table of Contents

* [Features](#features)
* [Installation](#installation)
* [Getting Started](#getting-started)
* [List of Gulp tasks](#list-of-gulp-tasks)
* [Configuration](#configuration)
* [Directory Structure](#directory-structure)

## Features
This starter also features a number of great software (in the words of their creators):
- [Gulp](http://gulpjs.com/) - a task automation tool.
- [Browsersync](https://www.browsersync.io/) - time-saving synchronised browser testing, keep multiple browsers & devices in sync when editing files.
- [Sass](http://sass-lang.com/) - CSS with superpowers.
- [Autoprefixer](https://github.com/postcss/autoprefixer) - adding vendor prefixes by the rules of [Can I Use](http://caniuse.com/).
- [clean-css](https://github.com/jakubpawlowicz/clean-css) - Fast and efficient CSS optimizer for node.js and the Web.
- [Stylelint](http://stylelint.io/) - a mighty, modern CSS linter

### Html
- [handlebars](https://github.com/wycats/handlebars.js) - a javascript template engine.
- [Fabricator Assemble](https://github.com/fbrctr/fabricator-assemble) - Fabricator is a tool for building website UI toolkits.


### Tests


### Git Hooks manager
- [husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)

## Installation

### Install Gulp
[Install Gulp globally](http://gulpjs.com/).

```
npm install gulp-cli -g
```

## Getting started

1. Clone this repo

```bash
$ git clone # <PROJECT_NAME>
$ cd <PROJECT_NAME>
```

2. Install Dependencies

```bash
$ npm install
```

3. Build the project

```bash
$ npm start
```



## List of Gulp tasks

To run separate task type in command line `gulp [task_name]`.
Almost all tasks also have watch mode - `gulp watch:[task_name]`, but you don't need to use it directly.

### Main tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`default`          | will start all tasks required by project in dev mode: initial build, watch files, run server with livereload
`build`            | builds all content and assets from `src` to `dist`.
`dev`              | builds your project without optimization.
`test`             | runs sass unit tests.


All available tasks are placed in a folder `tasks`. 

### Workflow
Everything's ready to get started right away:

`npm start` - Compiles assets & html, launches development server:
- compiles styles & scripts are being compiled & concatenated
- builds the site & opens it in your default browser
- watches for changes and injects them right away

`npm run build` - Same as above, but in production mode:
- compiles & builds everything
- minifies & compresses everything


## Directory Structure

The `source` directory contains your entire application code, including CSS, JavaScript, HTML.

The rest of the folders and files only exist to make your life easier, and should not need to be touched.

Below you can find full details about significant files and folders.

```bash
├── README.md                 # Readme file
├── package.json              # Dependencies for node.js
├── .gitignore                # Git ignore rules
├── gulpfile.js               # The Gulp task manager configuration
├── /dist                     # Minified, optimized and compiled files
│   ├── /maps/                # SourceMaps for CSS files
│   ├── /pages/               # Rendered and compiled HTML pages
│   ├── /cupcake.css          # Main cupcake CSS file
│   ├── /cupcake-shim.css     # Cupcake shim CSS file for legacy compat.
│   ├── /cupcake-mint.css     # Main cupcake mint flavor css file
│   ├── /cupcake.min.css      # Main cupcake CSS file minified
│   ├── /cupcake-shim.min.css # Shim file minified
│   ├── /cupcake-mint.min.css # Mint file minified
│   └── *.html                # Rendered and compiled HTML
└── /src                      # The source code of the html
    ├── /docs                 # Html folder
        ├── /assets           # demo js for docs site and style
        ├── /core             # Handlebars layouts
            ├── /elements     # Element HTML - these are surfaced first
            ├── /experimental # Experimental HTML
            └── /tokens       # Tokens HTML 
        ├── /data             # Metadata associated with the site.      
        ├── /views            # Handlebars Views
            ├── /layouts      # Handlebars layouts
            ├── /pages        # Demo pages with extended html examples
            └── *.html        # Landing pages             
        └── /demo.scss        # Styling for docs page
    └── /scss                 # Html folder
        ├── /support          # Supporting scss files
        └── *.scss            # Element scss files
    └── /test                 # Tests folder    
```

## Running tests

```bash
$ npm run test
```
