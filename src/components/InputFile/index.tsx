import React, { useRef } from "react";
import { toast } from "react-toastify";
import { Button } from "../ui/button";

const maxSizeUpload = 1048576;

interface IInputFileProps {
	onChange?: (file?: File) => void;
}
const InputFile = (props: IInputFileProps) => {
	const { onChange } = props;
	const fileInputRef = useRef<HTMLInputElement>(null);

	const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const fileUpload = event.target.files?.[0];
		if (
			fileUpload &&
			(fileUpload.size >= maxSizeUpload ||
				!fileUpload.type.includes("image"))
		) {
			toast.error("Lỗi file không đúng rule quy định");
		}
		onChange && onChange(fileUpload);
	};

	const handleUploadImage = () => {
		fileInputRef?.current?.click();
	};
	return (
		<>
			<input
				type="file"
				className="hidden"
				accept=".jpg, .jpeg, .png"
				ref={fileInputRef}
				onChange={onFileChange}
				onClick={(
					event: React.MouseEvent<HTMLInputElement, MouseEvent>
				) => {
					//fix loi chon cung 1 anh
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					(event.target as any).value = null;
				}}
			/>
			<Button onClick={handleUploadImage}>Chọn ảnh</Button>
		</>
	);
};

export default InputFile;
