# URL Shortener Backend

This is the backend for a URL shortener web application built with Node.js, Express, and MongoDB.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/url-shortener-backend.git
   ```

2. Install dependencies:

   ```bash
   cd url-shortener
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/url-shortener
   ```

   Replace `MONGODB_URI` with your MongoDB connection string.

4. Start the server:

   ```bash
   npm start
   ```

5. The backend server will start running on the specified port.

## API Endpoints

### Shorten a URL

- **POST /create**

  Request Body:

  ```json
  {
    "redirectUrl": "https://www.example.com/very-long-url-that-needs-to-be-shortened"
  }
  ```

  Response:

  ```json
  {
    "shortUrl": "http://localhost:3000/abc123"
  }
  ```

### Redirect to Original URL

- **GET /:shortId**

  Redirects to the original long URL associated with the `shortId`.

## Technologies Used

- Node.js
- Express
- MongoDB
- shortid (for generating short IDs)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

