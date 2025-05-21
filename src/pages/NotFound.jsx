import { Link } from "react-router-dom";

function NotFound() {

    return (
        <>
            <div className="col-10 mt-4 mx-auto alert alert-success" role="alert">
                <h4 className="alert-heading">404 Pagina non trovata</h4>
                <p>La pagina che stai cercando potrebbe essere stata rimossa, rinominata o non è disponibile al momento.</p>
                <hr />
                <Link className="btn btn-success" to={"/"}>Homepage</Link>
            </div>
        </>
    )
}

export default NotFound;