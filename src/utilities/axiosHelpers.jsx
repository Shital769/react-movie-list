import axios from "axios";


export const fetchData = (str) => {
    const apiEndPoint = `http://www.omdbapi.com/?&apikey=1c970a46&t=${str}`;
  const response = axios(apiEndPoint);
  return response;
};
