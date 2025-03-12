# Markdown Previewer

This project is a Markdown Previewer built using React. It allows users to input Markdown text and see a live preview of the rendered HTML output. The application is designed to be functionally similar to the Markdown Previewer available at [FreeCodeCamp](https://markdown-previewer.freecodecamp.rocks/).

## Features

- Live Markdown preview as you type.
- Supports GitHub flavored Markdown.
- Default text with various Markdown elements when the app loads.

## User Stories

1. A textarea element with the corresponding id `editor` is present.
2. An element with the corresponding id `preview` is present.
3. The `preview` element updates in real-time as text is entered into the `editor`.
4. Supports rendering of GitHub flavored Markdown using the Marked library.
5. Default text in the `editor` includes:
   - A heading element (H1 size)
   - A subheading element (H2 size)
   - A link
   - Inline code
   - A code block
   - A list item
   - A blockquote
   - An image
   - Bolded text
6. The default Markdown in the `editor` is rendered as HTML in the `preview` element upon loading.

## Technologies Used

- React
- JavaScript
- CSS/SASS
- Marked library for Markdown parsing

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd markdown-previewer
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## License

This project is licensed under the MIT License.