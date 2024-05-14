import { useState } from "react";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InputFile from "../InputFile";
import Loading from "../Loading";
import { IBHYT } from "@/types/bhyt.type";
import { ICCCD } from "@/types/cccd.type";
import { ICCCDC } from "@/types/cccdc.type";

interface IProps {
	onUpload?: (file?: File) => void;
	data?: IBHYT | ICCCD | ICCCDC;
	shimer?: boolean;
	onLoadData?: () => void;
	onDelete?: () => void;
}
const Uploader = (props: IProps) => {
	const { onUpload, onLoadData, data, shimer, onDelete } = props;
	const [file, setFile] = useState<File>();
	const previewImage = file ? URL.createObjectURL(file) : "";

	const handleUpdate = (file?: File) => {
		onUpload && onUpload(file);
	};

	const handleGetData = () => {
		onLoadData && onLoadData();
	};

	const handleDelete = () => {
		setFile(undefined);
		onDelete && onDelete();
	};
	return (
		<div>
			{previewImage ? (
				<Tabs defaultValue="root" className="w-100% gap-4">
					<TabsList>
						<TabsTrigger value="root">Ảnh gốc</TabsTrigger>
						{!!data && (
							<TabsTrigger value="processed">
								Ảnh đã xử lý
							</TabsTrigger>
						)}
					</TabsList>
					<TabsContent
						value="root"
						className="flex items-center justify-center relative"
					>
						<div>
							<div className="relative">
								<img
									className="w-full object-cover"
									src={previewImage}
									alt=""
								/>

								<div className="absolute right-0 top-0">
									<Button
										variant="outline"
										className="rounded-none p-3"
										onClick={handleDelete}
									>
										<Trash color="black" size={18} />
									</Button>
								</div>

								<div className="w-full mt-2">
									<Input
										type="text"
										placeholder="Hoặc nhập link ảnh"
									/>
								</div>

								<div className="w-full mt-3">
									<Button
										className="w-full"
										onClick={handleGetData}
									>
										{shimer ? (
											<Loading />
										) : data ? (
											"Thử lại"
										) : (
											"Xử lý"
										)}
									</Button>
								</div>
							</div>
						</div>
					</TabsContent>
					{!!data && (
						<TabsContent value="processed">Test</TabsContent>
					)}
				</Tabs>
			) : (
				<div className="w-100% gap-4 min-h-[400px]">
					<div className="flex items-center justify-center relative">
						<div className="absolute top-[230px] left-[40%]">
							<InputFile
								onChange={(fileInput) => {
									setFile(fileInput);
									handleUpdate(fileInput);
								}}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Uploader;
