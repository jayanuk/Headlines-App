import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as headLineActions from "../Actions/headLine";
import * as ratingActions from "../Actions/rating";
import * as commentAction from "../Actions/comment";
import * as voteAction from "../Actions/vote";
import Progress from "../Components/Common/Progress";
import Rating from "../Components/Rating";
import AddComment from "../Components/Comment/AddComment";
import Comments from "../Components/Comment/Comments";

export default function HeadLineDetail(props) {
    const { route } = props;
    const headLineState = useSelector((state) => state.headLine);
    const ratingState = useSelector((state) => state.rating);
    const commentState = useSelector((state) => state.comment);
    const dispatch = useDispatch();
    const [headLineId, setHeadLineId] = useState(route.params.id);
    const [showLoader, setShowLoader] = useState(false);
    const { article } = headLineState;

    useEffect(() => {
        setHeadLineId(route.params.id);
    }, [route.params.id]);

    useEffect(() => {
        setShowLoader(headLineState.loading || commentState.loading || ratingState.loading);
    }, [commentState.loading, headLineState.loading, ratingState.loading]);

    const loadArticleCallback = useCallback(() => {
        dispatch(headLineActions.getHeadlineById(headLineId));
        dispatch(ratingActions.getRatings(headLineId));
        dispatch(commentAction.getComments(headLineId));
    }, [dispatch, headLineId]);

    useEffect(() => {
        loadArticleCallback();
    }, [loadArticleCallback]);

    const openNewsPage = (url) => {
        window.open(url);
    };

    const onRatingClick = async (rating) => {
        let params = { headLineId, rating };
        await dispatch(ratingActions.addRating(params));
        await dispatch(ratingActions.getRatings(headLineId));
    };

    const onCommentAdd = async (comment) => {
        let params = { headLineId, commentText: comment.text, createdBy: comment.createdBy };
        await dispatch(commentAction.addComment(params));
        await dispatch(commentAction.getComments(headLineId));
    };

    const onVoteAdd = async(vote) => {
        let params = { commentId: vote.commentId, point: vote.point};
        await dispatch(voteAction.addVote(params));
    }

    return (
        <>
            <Progress show={showLoader}>
                <div className="container-fluid">
                    <div className="m-3 p-3 border">
                        <div className="row">
                            <div>
                                <h5>{article?.title}</h5>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <img src={article?.urlToImage} alt="Title" className="rounded float-left headline-image"></img>
                                <p className="mt-3">{article.content && article?.content.substr(0, article?.content.indexOf("[+"))}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <span>Author: {article?.author}</span>
                            </div>
                            <div className="col-4">
                                <span>Published At: {article?.publishedAt}</span>
                            </div>
                            <div className="col-6">
                                <div className="d-flex justify-content-end">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => {
                                            openNewsPage(article.url);
                                        }}
                                    >
                                        Read Original News
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Rating ratings={ratingState.ratings} onRatingClick={onRatingClick} />
                        </div>
                        <div>
                            <AddComment onCommentAdd={onCommentAdd} />
                        </div>

                        <div>
                            <Comments comments={commentState.comments} onVoteAdd={onVoteAdd} />
                        </div>
                    </div>
                </div>
            </Progress>
        </>
    );
}
