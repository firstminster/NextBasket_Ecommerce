import axios from "axios";
import baseURL from "./config";

// create a http instance
export default axios.create({
    baseURL: baseURL as string,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});
