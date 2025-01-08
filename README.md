# Awwwards Website

<img src="public/resource.png" alt="Awwwards Website" width="100%" />

## Overview

The Awwwards Website is a modern web application built using React and Vite, showcasing a dynamic and interactive user experience. This project utilizes various technologies including Tailwind CSS for styling, GSAP for animations, and React for building user interfaces. The website is designed to be responsive and visually appealing, making it suitable for showcasing creative projects.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Responsive Design**: The website is fully responsive, adapting to different screen sizes.
- **Dynamic Video Gallery**: Users can interact with a video gallery that changes based on user input.
- **Smooth Animations**: Utilizes GSAP for smooth transitions and animations.
- **Custom Fonts**: Incorporates various custom fonts for a unique look and feel.

## Technologies Used

| Technology   | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| React        | A JavaScript library for building user interfaces.             |
| Vite         | A build tool that provides a fast development environment.     |
| Tailwind CSS | A utility-first CSS framework for styling.                     |
| GSAP         | A JavaScript library for high-performance animations.          |
| ESLint       | A tool for identifying and fixing problems in JavaScript code. |
| PostCSS      | A tool for transforming CSS with JavaScript plugins.           |

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/awwwards.git
   cd awwwards
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Usage

The Awwwards Website features a hero section with a dynamic video gallery. Users can click on video thumbnails to load and play different videos. The animations are handled by GSAP, providing a smooth user experience.

### Video Gallery Interaction

- Click on the video thumbnail to load the next video.
- The current video will scale down while the next video scales up and plays.

## File Structure

The project has the following structure:

```
awwwards/
├── public/
│   └── resource.png
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   └── Hero.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

### Component Breakdown

| Component    | Description                                                                 |
| ------------ | --------------------------------------------------------------------------- |
| `Button.jsx` | A reusable button component with customizable icons and styles.             |
| `Hero.jsx`   | The main component that displays the hero section with video functionality. |
| `App.jsx`    | The root component that renders the main application layout.                |

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
