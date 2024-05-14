import apis from "@/apis/apis";
import Loading from "@/components/Loading";
import Uploader from "@/components/Uploader";
import { useEffect, useState } from "react";
import { decodeUnicodeStrings } from "@/utils/utils";
import { ICCCDC } from "@/types/cccdc.type";

const CCCDCTab = () => {
	const [file, setFile] = useState<File>();
	const [data, setData] = useState<ICCCDC>();
	const [isLoading, setIsLoading] = useState<boolean>();
	const dataDecoded = decodeUnicodeStrings(data) as ICCCDC;

	useEffect(() => {
		if (!file) {
			setData(undefined);
		}
	}, [file]);

	const onLoadData = () => {
		if (file) {
			const formData = new FormData();
			formData.append("img", file);
			setIsLoading(true);
			apis.getData<ICCCDC>(formData, "cccdc").then((res) => {
				const data = res?.data?.data?.info;
				setData(data);
				setIsLoading(false);
			});
		}
	};

	const onUpload = (file?: File) => {
		setFile(file);
	};
	const onDelete = () => {
		setFile(undefined);
	};

	return (
		<div className="border border-gray-200 rounded-md p-4 flex gap-4 min-h-[500px]">
			<div className="flex-1">
				<Uploader
					onDelete={onDelete}
					onUpload={onUpload}
					onLoadData={onLoadData}
					data={data}
					shimer={isLoading}
				/>
			</div>
			<div className="flex-1">
				<div className="bg-[#0f172a] flex justify-center items-center w-full h-full rounded-md max-h-[400px] mt-12">
					{isLoading && (
						<div className="m-auto">
							<Loading />
						</div>
					)}
					{dataDecoded?.hoten ? (
						<div className="flex flex-1 flex-col gap-2 p-4 items-start text-white">
							<div>Họ tên: {dataDecoded?.hoten}</div>
							<div>Ngày sinh: {dataDecoded?.ngaysinh}</div>
							<div>Giới tính: {dataDecoded?.gioitinh}</div>
							<div>
								Nơi thường trú: {dataDecoded?.noithuongtru}
							</div>
							<div>Quê quán: {dataDecoded?.quequan}</div>
							<div>Quốc tịch: {dataDecoded?.quoctich}</div>
							<div>Giá trị đến: {dataDecoded?.gtriden}</div>
							<div>Số: {dataDecoded?.so}</div>
						</div>
					) : (
						<>
							{!file && (
								<span className="text-white">
									Vui lòng thêm ảnh và nhấn xử lý để trải
									nghiệm dịch vụ
								</span>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default CCCDCTab;
