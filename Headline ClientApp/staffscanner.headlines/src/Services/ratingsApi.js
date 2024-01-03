import { get, post } from "./apiBase";
import { API_EndPoints } from "./config";

export function getRatings(headlineId) {
    return get(`${API_EndPoints.Ratings.Get}${headlineId}`)
        .then((response) => response.data)
        .catch((e) => {
            alert(e);
        });
}

export function addRating(data) {
    return post(API_EndPoints.Ratings.Post, data)
        .then((response) => response.data)
        .catch((e) => {
            alert(e);
        });
}
