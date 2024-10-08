import apis from "@/apis/apis";
import Loading from "@/components/Loading";
import Uploader from "@/components/Uploader";
import { IBHYT } from "@/types/bhyt.type";
import { useEffect, useState } from "react";
import { decodeUnicodeStrings } from "@/utils/utils";

const BHYTTab = () => {
	const [file, setFile] = useState<File>();
	const [data, setData] = useState<IBHYT>();
	const [isLoading, setIsLoading] = useState<boolean>();
	const dataDecoded = decodeUnicodeStrings(data) as IBHYT;

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
			apis.getData<IBHYT>(formData, "bhyt").then((res) => {
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
					{dataDecoded.hoten ? (
						<div className="flex flex-1 flex-col gap-2 p-4 items-start text-white">
							<div>Mã số: {dataDecoded?.maso}</div>
							<div>Họ và Tên: {dataDecoded?.hoten}</div>
							<div>Ngày sinh: {dataDecoded?.ngaysinh}</div>
							<div>Giới tính: {dataDecoded?.gioitinh}</div>
							<div>Địa chỉ: {dataDecoded?.diachi}</div>
							<div>Nơi cấp: {dataDecoded?.noicap}</div>
							<div>Nơi khám: {dataDecoded?.noikham}</div>
							<div>Mã nơi khám: {dataDecoded?.ma}</div>
							<div>Ngày sử dụng: {dataDecoded?.giatrisd}</div>
							<div>Thời điểm đủ 5 năm: {dataDecoded?.dunam}</div>
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

export default BHYTTab;
