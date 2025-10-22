import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="container">
            <h1>Not found</h1>
            <Link to={'/'}> Home page </Link>
        </div>
    )

}
export default NotFoundPage;