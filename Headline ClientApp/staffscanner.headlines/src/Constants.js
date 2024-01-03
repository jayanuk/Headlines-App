const API_BASE_URL = process.env.REACT_APP_API_URL;
const API_PREFIX =  process.env.REACT_APP_API_PREFIX;

export const API_URL = `${API_BASE_URL}/${API_PREFIX}`;

export const RATING_VALUE = {
    WORST: 1, BAD:2 , AVERAGE: 3, GOOD: 4, EXCELLENT: 5
}

export const DATE_FORMAT = "YYYY-MM-DD hh:mm A";