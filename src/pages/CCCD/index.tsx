import apis from "@/apis/apis";
import Uploader from "@/components/Uploader";
import { useEffect } from "react";

const CCCDTab = () => {
	return (
		<div className="border border-gray-200 rounded-md p-4 flex gap-4 min-h-[500px]">
			<div className="flex-1">
				<Uploader onUpload={(file) => console.log("file", file)} />
			</div>
			<div className="flex-1">
				<div className="bg-[#0f172a] flex justify-center items-center w-full h-full rounded-md max-h-[400px] mt-12">
					<span className="text-white">
						Vui lòng thêm ảnh và nhấn xử lý để trải nghiệm dịch vụ
					</span>
				</div>
			</div>
		</div>
	);
};

export default CCCDTab;
