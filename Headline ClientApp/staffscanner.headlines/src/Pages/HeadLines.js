import React, { useEffect } from "react";
import Progress from "../Components/Common/Progress";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../Actions/headLine";
import HeadLineListItem from "../Components/HeadLine/HeadLineListItem";

export default function HeadLines(props) {
    const { data, loading, syncResult } = useSelector((state) => state.headLine);
    const dispatch = useDispatch();
    const navigate = props.route.navigate;

    useEffect(() => {
        dispatch(actions.syncHeadlines());
    }, [dispatch]);

    useEffect(() => {
        if (syncResult) {
            dispatch(actions.getHeadlines());
        }
    }, [dispatch, syncResult]);

    return (
        <>
            <Progress show={loading}>
                <div className="container-fluid ps-4 pb-2 pt-1">
                    <h3>Latest News from TechCrunch</h3>
                </div>

                {data &&
                    data.articles &&
                    data.articles.map((article) => <HeadLineListItem key={article.id} article={article} navigate={navigate} />)}
            </Progress>
        </>
    );
}
