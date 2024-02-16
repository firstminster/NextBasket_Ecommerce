import axios from "axios";
// import baseURL from "./config";

const baseURL = process.env.NEXT_PUBLIC_BASEURL as string

console.log(baseURL);

// create a http instance
export default axios.create({
    baseURL: process.env.NEXT_PUBLIC_AUTH_BASEURL as string,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});
