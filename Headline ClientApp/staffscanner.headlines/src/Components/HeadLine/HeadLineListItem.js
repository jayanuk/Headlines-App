import React from "react";

export default function HeadLineListItem(props) {
    const { article, navigate } = props;

    const onReadMoreClick = () => {
        navigate(`/Headline/${article.id}`);
    }

    return (
        <>
            <div className="container-fluid">
                <div className="m-3 p-3 border">
                    <div className="row ">
                        <div className="col-2">
                            <img src={article?.urlToImage} alt="Title" className="img-thumbnail"></img>
                        </div>

                        <div className="col-10">
                            <div>
                                <h6>{article?.title}</h6>
                            </div>
                            <div>
                                <p>{article?.content.substr(0, article?.content.indexOf('[+'))}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 offset-2">
                            <span>Author: {article?.author}</span>
                        </div>
                        <div className="col-4">
                            <span>Published At: {article?.publishedAt}</span>
                        </div>
                        <div className="col-4">
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary" onClick={onReadMoreClick}>Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
