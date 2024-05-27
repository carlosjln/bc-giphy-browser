## Giphy Browser

This project is a single-page web application built using Vue.js that functions as a GIF browser. It allows users to search for GIFs using the Giphy API and view them in a modal lightbox with slideshow functionality.

### Features

- Search for GIFs using the Giphy API.
- Display search results as thumbnails.
- Lazy load thumbnails as they come into view.
- Open a modal lightbox with a GIF slideshow when a thumbnail is clicked.
- Navigate between GIFs in the slideshow using Previous and Next buttons.

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:carlosjln/bc-giphy-browser.git
   cd bc-giphy-browser
   ```

2. **Install dependencies:**
   ```bash
   nvm use
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run serve
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3001
   ```

### Usage

1. **Search for GIFs:**
   - Enter a search query in the input field.
   - Click the "Search" button.

2. **View GIFs:**
   - Thumbnails of the search results will be displayed.
   - Click on a thumbnail to open the modal lightbox.

3. **Navigate GIFs:**
   - Use the Previous and Next buttons to navigate through the GIFs in the slideshow.
   - Click the Close button or outside the modal to close it.
