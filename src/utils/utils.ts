export function decodeUnicodeStrings(data: any): any {
	const decodedData: any = {};

	if (data && typeof data === "object") {
		for (const [key, value] of Object.entries(data)) {
			if (typeof value === "string") {
				decodedData[key] = decodeURIComponent(JSON.parse(`"${value}"`));
			} else {
				decodedData[key] = value;
			}
		}
	}
	return decodedData;
}
