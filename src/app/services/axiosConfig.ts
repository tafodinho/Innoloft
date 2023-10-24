"use client";

import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
// axios.defaults.headers.get["Content-Type"] =
//   "application/x-www-form-urlencoded";
// axios.defaults.headers.get["Access-Control-Allow-Origin"] =
//   "http://localhost:3000";
// axios.defaults.headers.get["Access-Control-Allow-Methods"] =
//   "GET, POST, PATCH, PUT, DELETE, OPTIONS";
// axios.defaults.headers.get["Access-Control-Allow-Headers"] =
//   "Origin, Content-Type, X-Auth-Token";
axios.defaults.timeout = 5000;

export default axios;
