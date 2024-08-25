# React Package Starter Kit

Welcome to the React Package Starter Kit! This project serves as a foundational template for building and publishing npm packages for React applications. It includes essential configurations and scripts to streamline the development process, making it easier to focus on writing your package code.

## Getting Started

### 1. Installation

Clone the repository and navigate into the project directory:

```bash
git clone https://github.com/Rohit-B-Kadam/react-package-starter
cd react-package-starter
```

### 2. Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

### 3. Build the Package

To build your package, use the following command:

```bash
npm run build
```

This will transpile your source code from the `src` directory into the `dist` directory, making it ready for distribution.

### 4. Start in Watch Mode

If you want to start the development server in watch mode, use:

```bash
npm run start
```

This command will watch for changes in your source files and automatically rebuild the package, making it easier to test and develop.

### 5. Load the Package Locally

To load your package locally and test it in other projects, use:

```bash
npm link
```

This will create a symbolic link globally, allowing you to use this package as if it were installed from npm.

### 6. Link the Package in Another Project

To use your locally linked package in another project, navigate to the directory of the other project and run:

```bash
npm link react-package-starter
```

This command creates a symbolic link from node_modules/react-package-starter in the other project to the globally linked package. Now, you can use the package in your project as if it were installed from npm.


### 7. Unlinking the Package

If you want to remove the link, you can run:

```bash
npm unlink react-package-starter
```

This will remove the symbolic link, and you can install the package from npm normally again.


## Project Structure

```bash
react-package-starter-kit/
├── src/
│   └── index.js   # Main entry point for your package
├── dist/          # Compiled output (auto-generated)
├── package.json   # Package configuration
└── README.md      # Project documentation
```


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
