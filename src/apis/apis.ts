import http from "@/utils/http";
import { IBHYT } from "@/types/bhyt.type";

interface ISuccessResponseApi<T> {
	data: T;
	errorCode: string;
	errorMessage: string;
}
const apis = {
	getBHYT(body: FormData) {
		return http.post("card?format_type=file&get_thumb=false", body, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
	},
};

export default apis;
