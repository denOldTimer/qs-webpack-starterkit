![Quickstart logo](./quickstart.png)

# QS - Webpack - Starterkit

This is a webpack based starterkit that contains:

- Webpack 5.0 & Webpack Dev Server
- Scss -> css transition
- PostCss
  - Autoprefixer
  - CssNano
- EsLint v.6
- PurgeCss

## how does it work

There are two Directories 'Project' & ' Public'

- Both start with the letter 'p' so that they would be next to one and other.
- All development is done within the 'project' directory.
- All web-development is doen within 'project/src' directory.

### installation

1.  You can either fork or clone the repo You can also download the files.

2.  Within the project directory run all `npm` commands

3.  `npm install` Will install all devDependency packages and the node_modules
    folder will appear within the project directory.

### The Commands

As you can see within `package.json` there are two commands.

- `npm start` :

  - will startup the development environment.
  - All files will be copied from the src to the public and then webpack dev
    server will consume them in it's server root.
  - Do not be worried this is normal. Your public folder will be empty.

- `npm run build`:
  - will generate the public folder and all it's content ready for transfer to
    production.

---
