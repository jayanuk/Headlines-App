import React from "react";
import moment from "moment";
import { DATE_FORMAT } from "../../Constants";

export default function Comments(props) {
    const { comments, onVoteAdd } = props;

    const formatDate = (date) => {
        if (moment(date).isValid()) {
            return moment.utc(date).local().format(DATE_FORMAT);
        }
        return "N/A";
    };

    return (
        <>
            <div className="container-fluid mb-5">
                <div className="row mt-5">
                    <div className="">
                        <h6>Comments ({comments?.length})</h6>
                    </div>
                </div>

                <div className="container">
                    {comments &&
                        comments.map((comment) => (
                            <div key={comment.id} className="row border mb-3">
                                <div className="d-flex justify-content-start bd-highlight mb-3 ps-0 pe-0">
                                    <div className="bd-highlight bd-align">
                                        <span className="mt-1">{comment.createdBy}</span>
                                    </div>
                                    <div className="comment-time pt-1">
                                        <span className="mt-1">{formatDate(comment.createdTime)}</span>
                                    </div>
                                    <div style={{ width: "100%" }}>
                                        <div className="d-flex justify-content-end">
                                            <span className="mt-1 me-2">{comment.points || 0} points</span>
                                            <button
                                                className="btn btn-outline-secondary btn-sm"
                                                onClick={() => {
                                                    onVoteAdd({ commentId: comment.id, point: 1 });
                                                }}
                                            >
                                                <i style={{ fontSize: "1.3em", color: "#000" }}> &#128077;</i>
                                            </button>
                                            <button
                                                className="btn btn-outline-secondary btn-sm ms-1"
                                                onClick={() => {
                                                    onVoteAdd({ commentId: comment.id, point: -1 });
                                                }}
                                            >
                                                 <i style={{ fontSize: "1.3em", color: "#000" }}> &#x1F44E;</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <p>{comment.commentText}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}
