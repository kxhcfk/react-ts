import React, { FC, useState } from 'react';

const EventsExample: FC = () => {
	const [value, setValue] = useState<string>('');
	const [isDrag, setIsDrag] = useState(false);
	
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	
	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(value);
	};
	
	const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
		console.log('Drag');
	};
	
	const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(true);
	};
	
	const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
	};
	
	const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
		console.log('Drop');
	};
	
	return (
		<div>
			<input
				type="text"
				value={value}
				onChange={onChange}
			/>
			<button onClick={onClick}>adgdf</button>
			
			<div
				onDrag={onDrag}
				draggable
				style={{ width: 200, height: 200, background: 'red' }}
			></div>
			<div
				onDrop={onDrop}
				onDragLeave={onDragLeave}
				onDragOver={onDragOver}
				style={{ width: 200, height: 200, background: isDrag ? 'green' :'red', marginTop: 30 }}
			></div>
		</div>
	);
};

export default EventsExample;