<h1>
  Daivik's Personal Website
</h1>

[![daiviknema](https://circleci.com/gh/daiviknema/daiviknema.github.io.svg?style=shield)](https://app.circleci.com/pipelines/github/daiviknema/daiviknema.github.io)
[![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/daiviknema/daiviknema.github.io?style=flat)](https://github.com/daiviknema/daiviknema.github.io/tags)
[![GitHub issues](https://img.shields.io/github/issues-raw/daiviknema/daiviknema.github.io?style=flat)](https://github.com/daiviknema/daiviknema.github.io/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/daiviknema/daiviknema.github.io)](https://github.com/daiviknema/daiviknema.github.io/pulls)
[![License](https://img.shields.io/github/license/daiviknema/daiviknema.github.io.svg)](license.txt)

This repository contains the source code for [my personal website](https://daiviknema.github.io) which hosts my [blog](https://daiviknema.github.io/blog) and [resume](https://daiviknema.github.io/about). The website is built using the [Gatsby](https://www.gatsbyjs.com) frontend framework; and I have also used the [Material UI](https://material-ui.com) library to design the layouts and for various other components. The website is still WIP, but once I've added a few more functionalities I do plan on publishing it (or atleast a sightly modified version of it) as a starter on the official Gatsby website. For now, anyone who wishes to copy or modify this code for their own use is welcome to do so (please see the [LICENSE](LICENSE) and copyright notice for complete details)

## Setting up a development environment and running the site locally

1.  **Make sure you have a relatively recent version of node and npm installed**

    Binaries for node (including npm) can be found [here](https://nodejs.org/en/download/). If you're on Ubuntu, I've found that the package manager version of Node/NPM is a little out of date, so I prefer to install via the binary archive. Instructions for the same can be found [here](https://github.com/nodejs/help/wiki/Installation)

2.  **Install gatsby-cli**

    On a terminal execute the following:

    ```shell
    npm install -g gatsby-cli
    ```

3.  **Clone the source code**

    On a terminal, execute:
    
    ```shell
    git clone https://github.com/daiviknema/daiviknema.github.io
    ```

4.  **Install node modules**

    Change directories into the cloned repo (eg `cd daiviknema.github.io/`) and execute:
    
    ```shell
    npm install
    ```
    
    This will install all the dependencies (such as Material-UI and other Gatsby plugins into a directory called `node_modules/`)

5.  **Deploy the site**
    
    The development server can be started by running `gatsby develop` from the command line. Note that this deploys a development bundle on `localhost:8000`. This is ideal if you are looking to modify the code.
    
    For a production bundle (with minified CSS and obfuscated JS), you will need to execute:
    ```shell
    gatsby build
    gatsby serve
    ```
    
    This will deploy your site to `localhost:9000`

## Found Issues?

I've tried my best to make the website experience as nice and bug-free as possible for the viewers, but I'm hardly above the universal truth that **all code that does anything useful has bugs**. In case you've found one, please do let me know by [raising an issue](https://github.com/daiviknema/daiviknema.github.io/issues/new).

## License

The code in this repository is licensed under the [MIT license](LICENSE)