###Example of webpack configuration (following along webpack docs)

1. Install webpack cli and webpack
   `yarn add -D webpack webpack-cli`

#####Notions and terms:

- dist (may be also build) folder is for bundled project. It is the output of webpack
- src (source) folder is the folder webpack will use to build our project (into a bundle)

---

- everything that will be **bundled** is installed with `yarn add`
- if we use `yarn add -D package name` it **will not** be added to the bundle

####Plugins and their goal:

- **HtmlWebpackPlugin** - automatically creates index.html for us
  Then takes all files specified in entry

  ```
  entry: {
      app: "./src/index.js",
      anotherModule: "./src/anotherModule.js"
    },
  ```

  and puts them into index.html

- **clean-webpack-plugin**
  Will clear `dist/` folder before every build
