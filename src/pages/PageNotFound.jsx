import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="PageNotFound">
      <h1>Page Not Found</h1>
      <p>
        Sorry, your page could not be found. Try going <Link to="/">home </Link>
        OR
      </p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
export default PageNotFound;
