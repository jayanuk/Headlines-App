import { get, post } from "./apiBase";
import { API_EndPoints } from "./config";

export function getComments(headlineId) {
    return get(`${API_EndPoints.Comments.Get}${headlineId}`)
        .then((response) => response.data)
        .catch((e) => {
            alert(e);
        });
}

export function addComment(data) {
    return post(API_EndPoints.Comments.Post, data)
        .then((response) => response.data)
        .catch((e) => {
            alert(e);
        });
}
