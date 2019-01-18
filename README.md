<img alt="cupcake-logo" src="http://funkyimg.com/i/2KN2G.png" width="350">

[![CodeFactor](https://www.codefactor.io/repository/github/cupcake-design-system/cupcake/badge)](https://www.codefactor.io/repository/github/cupcake-design-system/cupcake)
[![Travis (.org)](https://img.shields.io/travis/Cupcake-Design-System/Cupcake.svg)](https://travis-ci.org/Cupcake-Design-System/Cupcake)
![David](https://img.shields.io/david/Cupcake-Design-System/Cupcake.svg)
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/badges/shields.svg)](https://github.com/Cupcake-Design-System/Cupcake)



# Cupcake 2.0 UNDER DEVELOPMENT

This repository includes everything you need to build, customize, test, and deploy Cupcake.

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
- [SassDoc](http://sassdoc.com/) - Automated sass code docs.
- [PostCSS](https://github.com/postcss/postcss) - a tool for transforming styles with JS plugins.
- [Autoprefixer](https://github.com/postcss/autoprefixer) - adding vendor prefixes by the rules of [Can I Use](http://caniuse.com/).
- [csso](https://github.com/css/csso) - a CSS minifier with structural optimizations.
- [Stylelint](http://stylelint.io/) - a mighty, modern CSS linter

### Html
- [handlebars](https://github.com/wycats/handlebars.js) - a javascript template engine.
- [Fabricator Assemble](https://github.com/fbrctr/fabricator-assemble) - Fabricator is a tool for building website UI toolkits.


### Tests


### Git Hooks manager
- [husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)

## Installation

### Install Babel

[Install Babel globally](https://babeljs.io/docs/usage/cli/#installation).

```
npm install --global babel-cli
```

### Install Gulp
[Install Gulp globally](http://gulpjs.com/).

```
npm install --global gulp-cli
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
`docs`             | builds sassdocs.
`test`             | runs sass unit tests.

### Core tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`styles`           | compile all scss from `src/styles` to `dist/assets/styles` folder. 
`scripts`          | compile all js from `src/scripts` to `dist/assets/scripts` folder. 
`html`             | compile all hbs files to html files.

### Assets related tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`copy`             | copy files from `src/assets` path to `dist/assets` path.

### Dev tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`clean`            | remove `dist` folder.
`server`           | start a BrowserSync instance.
`settings`         | generate a variables file.
`watch`            | watchs for changes in `src/` path and rebuilds parts of the site as necessary.


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

## Configuration
Global variables and site metadata can be found inside `config.js`. Your can make some modification in the file.

## Directory Structure

The `source` directory contains your entire application code, including CSS, JavaScript, HTML.

The rest of the folders and files only exist to make your life easier, and should not need to be touched.

Below you can find full details about significant files and folders.

```bash
├── README.md               # Readme file
├── package.json            # Dependencies for node.js
├── .gitignore              # Git ignore rules
├── gulpfile.babel.js       # The Gulp task manager configuration
├── /tasks/                 # Gulp tasks definitions
├── /dist/                  # Minified, optimized and compiled files
│   ├── /assets/            # Assets folder
│   │   ├── /maps/          # SourceMaps for CSS files
│   │   ├── /scripts/       # JS files
│   │   ├── /fonts/         # Fonts folder
│   │   └── /images/        # Images files
│   └── *.html              # Rendered and compiled HTMLs from hbs
└── /html/                   # The source code of the html
    ├── /views/             # Html folder
    │   ├── /layouts/       # Handlebars layouts
            └── /includes/  # Handlebars partials that are included / extended
    │   └──  /pages/        # Handlebars pages, one per page on the site
    └── /data/              # Metadata associated with the site.
```

## Running tests

```bash
$ npm run test
```
