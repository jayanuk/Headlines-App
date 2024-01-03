import { get, post } from "./apiBase";
import { API_EndPoints } from "./config";

export function getHeadlines() {
    return get(API_EndPoints.HeadLines)
        .then((response) => response.data)
        .catch((e) => {
            alert(e);
        });
}

export function getHeadlineById(id) {
    return get(API_EndPoints.HeadLine.Get + id)
        .then((response) => response.data)
        .catch((e) => {
            alert(e);
        });
}

export function syncHeadlines() {
    return post(API_EndPoints.HeadLines)
        .then((response) => response.data)
        .catch((e) => {
            alert(e);
        });
}
