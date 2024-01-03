export default function NotFound(props) {
    return (
        <div className="container">
            <div className="row m-5">
                <div className="col-12 m-5 p-5">
                    <div className="text-center">
                        <h1>No content in this location!!!</h1>
                        <div>
                            <button className="btn btn-primary" onClick={() => { window.location = "/" }}>Go to home page</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
