import http from "@/utils/http";
import { IBHYT } from "@/types/bhyt.type";

interface ISuccessResponseApi<T> {
	data: T;
	errorCode: string;
	errorMessage: string;
}

type IParams =
	| "cccd"
	| "bhyt"
	| "cccdc"
	| "cmt9"
	| "cmt12"
	| "dkx"
	| "gplx"
	| "ttq";

const apis = {
	getData<T>(body: FormData, type: IParams) {
		return http.post<ISuccessResponseApi<{ info: T }>>(
			`card?format_type=file&get_thumb=false&type_card=${type}`,
			body,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			}
		);
	},
};

export default apis;
