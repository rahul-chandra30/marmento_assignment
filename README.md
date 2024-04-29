# Marmento_Assignment

# Product Catalog

This project is a dynamic web application that allows users to browse through a product catalogue categorized into Men, Women, and Kids sections.

## Description

The application features a tabbed interface where users can select between the different categories to display relevant products. The product information, including images, titles, vendors, and prices, is dynamically loaded from a JSON file. Additionally, users can view the discount on products and switch between the main and alternate product images.

## Features

- Tabbed navigation for different product categories
- Dynamic product card generation
- Image hover effect to display an alternate product image
- Automatic calculation of discount percentage
- Truncation of long product titles with ellipsis

## Technologies Used

- HTML5
- CSS3 (with responsive design)
- JavaScript (ES6)
- Font Awesome for icons
- Fetch API for loading JSON data

## Setup

To run this project, clone the repository, and open `index.html` in a modern web browser.

## Files Included

- `index.html` - The main HTML document with the structure for the catalogue.
- `style.css` - The stylesheet containing all the styles for the application.
- `script.js` - The JavaScript file that contains the logic for loading and displaying product data.
- `multiProduct.json` - A JSON file hosted externally that contains all the product data.

## Sample JSON Data Structure

```json
{
  "categories": [
    {
      "category_name": "Men",
      "category_products": [
        // Array of product objects
      ]
    },
    // Other categories...
  ]
}
