Color Change Button App

Description

This is a simple React application that allows users to change the background color by clicking on different buttons. The clicked button gets a black border to indicate selection.

Features

Changes the background color of the container when a button is clicked.

Applies a black border only to the clicked button.

Uses React's useState hook to manage color and button selection states.

Technologies Used

React.js

CSS (index.css)

Installation

# Clone the repository
git clone https://github.com/yourusername/color-change-app.git

# Navigate to the project directory
cd color-change-app

# Install dependencies
npm install

# Start the development server
npm start

File Structure

color-change-app/
│-- src/
│   │-- components/
│   │   │-- CreateButton.js
│   │-- index.css
│   │-- Application.js
│-- public/
│-- package.json
│-- README.md

Usage

Click on any button (Blue, Red, Green, or Purple) to change the background color.

The selected button will have a black border.

Code Explanation

Application.js

Manages color and selectedButton states.

Renders CreateButton components with different colors.

Updates the background color and highlights the selected button.

CreateButton.js

Accepts props (newColor, applyColor, isSelected, onSelect).

Calls applyColor(newColor) to update the background color.

Calls onSelect() to track the selected button.

Applies a black border to the selected button using isSelected.

License

This project is open-source and available under the MIT License.

Happy coding! 🚀

