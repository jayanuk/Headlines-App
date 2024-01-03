import React, { useState } from "react";

export default function AddComment(props) {
    const { onCommentAdd } = props;
    const [comment, setComment] = useState({ text: "", createdBy: "" });
    const [validateClass, setValidateClass] = useState("");

    const onCommentChange = (e) => {
        setComment({ ...comment, text: e.target.value });
    };

    const onCreatedByChange = (e) => {
        setComment({ ...comment, createdBy: e.target.value });
    };

    const validate = () => {
        if (!comment.text || !comment.createdBy) {
            setValidateClass("was-validated");
            return false;
        } else {
            setValidateClass("");
        }
        return true;
    };

    const onSubmit = async(e) => {
        e.preventDefault();
        e.stopPropagation();

        if(validate()){
            await onCommentAdd(comment);
            setComment({ text: "", createdBy: "" });
        }
    };

    return (
        <>
            <div className="container-fluid border">
                <div className="row mt-5">
                    <div>
                        <h6>Add your comment</h6>
                    </div>
                </div>

                <div className="row mb-3">
                    <form className={`row g-3 needs-validation ${validateClass}`} noValidate>
                        <div className="mb-3">
                            <label htmlFor="comment" className="form-label">
                                Comment:
                            </label>
                            <textarea
                                className="form-control"
                                id="comment"
                                aria-describedby="commentHelp"
                                required
                                onChange={onCommentChange}
                                value={comment.text}
                                rows={5}
                                maxLength={500}
                            />
                            <div id="commentHelp" className="form-text">
                                * Required Max.length 500 characters.
                            </div>
                        </div>

                        <div className="row g-3 align-items-center">
                            <div className="col-6">
                                <label htmlFor="userName" className="form-label">
                                    Your name:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="userName"
                                    aria-describedby="nameHelp"
                                    required
                                    onChange={onCreatedByChange}
                                    value={comment.createdBy}
                                    maxLength={100}
                                />
                                <div id="nameHelp" className="form-text">
                                    * Required Max.length 100 characters.
                                </div>
                            </div>
                            <div className="col-6 pt-1">
                                <button className="btn btn-primary" onClick={onSubmit}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
