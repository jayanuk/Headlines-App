import React from "react";
import { RATING_VALUE } from "../../Constants";

export default function Rating(props) {
    const { ratings, onRatingClick } = props;

    const getCount = (value) => {
        let count = 0;
        if (ratings && Array.isArray(ratings)) {
            let item = ratings.find((i) => i.value === value);
            count = item?.count || 0;
        }
        return count;
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="text-center">
                        <h6>Rate this news</h6>
                    </div>
                </div>

                <div className="row">
                    <div className="d-flex justify-content-center">
                        <div className="text-center m-3">
                            <button
                                className="btn btn-warning btn-lg rounded-circle"
                                onClick={() => {
                                    onRatingClick(RATING_VALUE.WORST);
                                }}
                            >
                                {RATING_VALUE.WORST}
                            </button>
                            <div>
                                <span>{getCount(RATING_VALUE.WORST)}</span>
                            </div>
                        </div>
                        <div className="text-center m-3">
                            <button
                                className="btn btn-warning btn-lg rounded-circle"
                                onClick={() => {
                                    onRatingClick(RATING_VALUE.BAD);
                                }}
                            >
                                {RATING_VALUE.BAD}
                            </button>
                            <div>
                                <span>{getCount(RATING_VALUE.BAD)}</span>
                            </div>
                        </div>
                        <div className="text-center m-3">
                            <button
                                className="btn btn-warning btn-lg rounded-circle"
                                onClick={() => {
                                    onRatingClick(RATING_VALUE.AVERAGE);
                                }}
                            >
                                {RATING_VALUE.AVERAGE}
                            </button>
                            <div>
                                <span>{getCount(RATING_VALUE.AVERAGE)}</span>
                            </div>
                        </div>
                        <div className="text-center m-3">
                            <button
                                className="btn btn-warning btn-lg rounded-circle"
                                onClick={() => {
                                    onRatingClick(RATING_VALUE.GOOD);
                                }}
                            >
                                {RATING_VALUE.GOOD}
                            </button>
                            <div>
                                <span>{getCount(RATING_VALUE.GOOD)}</span>
                            </div>
                        </div>
                        <div className="text-center m-3">
                            <button
                                className="btn btn-warning btn-lg rounded-circle"
                                onClick={() => {
                                    onRatingClick(RATING_VALUE.EXCELLENT);
                                }}
                            >
                                {RATING_VALUE.EXCELLENT}
                            </button>
                            <div>
                                <span>{getCount(RATING_VALUE.EXCELLENT)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
