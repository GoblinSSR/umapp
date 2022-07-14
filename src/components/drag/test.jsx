import React from 'react';
import { useDrop, useDrag, useDragDropManager } from 'react-dnd';
function Box() {
	const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		type: 'BOX',
		item: {id: 'kkkkk'},
		collect: (monitor) => ({
			isDragging: monitor.isDragging()
		}),
		end: (item,monitor)=>{
//			console.log(item);
//			console.log(monitor.getItem().id);
		}
	}))
	return (
		<div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1}}>
			<div role="Handle" ref={drag} >
				box
			</div>
		</div>
	)
}
function Bucket() {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: 'BOX',
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		}),
		drop: (item, monitor)=>{
			console.log(item);
			console.log(monitor);
		}
	}))

	return (
		<div
		ref={drop}
		role={'Dustbin'}
		style={{ backgroundColor: isOver ? 'red' : 'white' }}
		>
		{canDrop ? 'Release to drop' : 'Drag a box here'}
		</div>
	)
}
const Test = ()=>{
	return (
		<div>
			<Bucket />
			<Box />
		</div>
	)
}

export default Test;

