import axios, { AxiosInstance } from "axios";

class Http {
	instance: AxiosInstance;
	constructor() {
		this.instance = axios.create({
			baseURL: "http://192.168.1.16:1904/",
			timeout: 30000,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
}

const http = new Http().instance;
export default http;
