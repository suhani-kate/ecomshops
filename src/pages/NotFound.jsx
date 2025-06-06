import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for doesn't exist.</p>
      <Link to="/" className="back-home">Go back to Home</Link>
    </div>
  );
}

export default NotFound;
