import { post } from "./apiBase";
import { API_EndPoints } from "./config";

export function addVote(data) {
    return post(API_EndPoints.Votes.Post, data)
        .then((response) => response.data)
        .catch((e) => {
            alert(e);
        });
}
