# Contribution Guide

Thank you for your interest in contributing to **Galsen UI**!

Here are the steps to follow to add components:

## Step 1: How to Contribute

1. **[Fork the project](https://github.com/GalsenDev221/galsen.ui)**.

2. **Clone your fork**.

3. **Create a branch for your feature**.

4. **Commit your changes and push your modifications**.

5. **Create a pull request to the `dev` branch**.

6. **Wait for your pull request to be merged**.

## Step 2: Create a `.mdx` File

1. Navigate to the `src/components` folder.
2. Create a file named `galsen-ui-component-name.mdx` following the format below:

   ```mdx
   ---
   title: 
   emoji: 
   
   title: 
   description: 
   components:
     1:
       title:  
   ---

   # Component Name

   <RenderHTMLFiles
     components={components}
     files={files}
     componentSlug={componentSlug}
   />
   ```

   - **title**: The title of the component.
   - **emoji**: An emoji representing the component.
   - **components**: A list of component variations with their respective titles.

## Step 3: Create a Folder for Variations

1. Navigate to the `public/components` folder.
2. Create a folder with the same name as the `.mdx` file you created earlier in `src/components`.
3. Inside this folder, create files for each variation of the component. File names should be numbers starting from **1** (e.g., `1.html`, `2.html`).
