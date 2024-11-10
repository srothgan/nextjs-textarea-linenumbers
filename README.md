# TextArea Editor with Line Numbers

![TextArea Editor Screenshot](/public/example.png)

Welcome to the **TextArea Editor with Line Numbers**! This editor provides a simple interface for text editing with automatic line numbering, including wrapped lines and synchronized scrolling. It’s perfect for anyone looking to integrate a robust text editor component in their project.

## Features

- **Dynamic Line Numbering**: Automatically calculates and displays line numbers for each line, including wrapped lines for accurate numbering.
- **Toggleable Line Numbers**: Option to show or hide line numbers to suit your preference.
- **Responsive Layout**: The editor adjusts to different textarea sizes, wrapping lines and updating line numbers accordingly.
- **Synchronized Scrolling**: Line numbers and text scomponents/Textareacroll together seamlessly to maintain alignment.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed on your machine.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/srothgan/nextjs-textarea-linenumbers.git
    ```

2. **Navigate to the Project Directory**

    cd nextjs-textarea-linenumbers

    #### Install Dependencies

    Run the following command to install the necessary dependencies:
    ```bash
    npm install
    ```

    #### Running the Project

    To start the development server, run:
    ```bash
    npm run dev
    ```

## Usage

- **Edit Text**: Type directly into the textarea.
- **Toggle Line Numbers**: Click the "Toggle Line Numbers" button to show or hide line numbers.

## Project Structure

- **page.tsx**: Main component that manages state and renders the TextAreaWithLineNumbers component.
- **components/Textarea.tsx**: Contains the textarea and line number logic, including line wrapping calculations and scroll synchronization.

## Contributing & License

Contributions are welcome! Feel free to open an issue or submit a pull request.

This project is licensed under the **MIT License**.


