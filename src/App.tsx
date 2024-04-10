import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Button } from "./components/ui/button";
import buttons from "./constants/buttons";

interface IProps {
	children: React.ReactNode;
}
function Layout(props: IProps) {
	const { children } = props;
	const [buttonActive, setButtonActive] = useState<string>(buttons[0].key);
	return (
		<div className="p-5">
			<div className="font-medium mb-10 text-2xl">Nhận diện ký tự</div>
			<div className="font-medium mb-2">Chọn loại tài liệu</div>
			<div className="flex w-full border border-gray-200 gap-4 p-4 rounded-md mb-8">
				{buttons.map((button) => {
					const { key, path, name } = button;
					return (
						<Link to={path} key={key}>
							<Button
								variant={
									buttonActive === key ? "default" : "outline"
								}
								onClick={() => setButtonActive(key)}
							>
								{name}
							</Button>
						</Link>
					);
				})}
			</div>
			<div className="font-medium mb-2">Tải ảnh từ máy của bạn lên</div>
			{children}
		</div>
	);
}

export default Layout;
