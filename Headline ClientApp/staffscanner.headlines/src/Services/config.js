import * as Constants from "../Constants";

export const API_EndPoints = {
   HeadLines : `${Constants.API_URL}/headlines`,
   HeadLine: {
      Get: `${Constants.API_URL}/headlines/getbyid?headlineItemId=`,
   },
   Comments: {
      Get: `${Constants.API_URL}/comment?headlineItemId=`,
      Post: `${Constants.API_URL}/comment`
   },  
   Ratings: {
      Get: `${Constants.API_URL}/rating?headlineItemId=`,
      Post: `${Constants.API_URL}/rating`,
   }, 
   Votes: {
      Post: `${Constants.API_URL}/vote`,
   }
}