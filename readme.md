
# Lightweight Browser Detector

This is a simple Express application that detects the user's browser, operating system, platform, and device model based on the User-Agent string.

## Features

- Detects browser name
- Identifies operating system
- Determines platform (mobile or desktop)
- Gets device model (if applicable)

## Technologies Used

- Node.js
- Express
- UA-Parser-JS

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/drealdumore/lightweight-browser-detector
    
    cd lightweight-browser-detector
    ```

2. Install the required dependencies:
    ```bash
    npm install express ua-parser-js
    ```

## Usage

1. Start the server:
    ```bash
    node index.js
    ```

2. Open your browser and navigate to `http://localhost:3000`. If port 3000 is in use, the application will automatically switch to the next available port.

3. The browser will return a JSON response with the following structure:
    ```json
    {
        "browser": "Chrome",
        "os": "iOS",
        "platform": "mobile",
        "model": "iPhone"
    }
    ```

## Contributing

Feel free to fork the repository and submit pull requests for improvements or features.

## License

This project is licensed under the MIT License.
