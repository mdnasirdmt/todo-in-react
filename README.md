<!-- # todo-in-react

# command for create react app using yarn
yarn create vite

# give project name
todo

# select template or framework ex- react, vue, vanilla 
react

# select variant ex- TypeScript , JavaScript
TypeScript

# use a tool like degit to scaffold your project with one of the templates.
npx degit user/project todo
cd todo


# install npm module  
yarn


# run App
yarn dev

# Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p



# Configure your template paths
# Add the paths to all of your template files in your tailwind.config.js file.

content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

# Add the Tailwind directives to your CSS
# Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

# add the following statement to the tsconfig.json file to disable the ‘any’ type errors:
"noImplicitAny": false,