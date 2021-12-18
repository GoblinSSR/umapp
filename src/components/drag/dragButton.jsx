import React from 'react';
import { useDrag } from 'react-dnd'
const movePosition = (x,y)=>{
	console.log(x,y);
}
const DragButton = () => {
	const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		type:'dragComponent',
		item: {
			id: 'dragButton'
		},
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging()
		}),
		drop: () => movePosition(x, y),
		collect: (monitor) => ({
			isOver: !!monitor.isOver()
		})
	}), [x,y]
	);
	return (
		<div ref={drag} 
			style={{
				opacity: isDragging ? 0.5 : 1,
				fontSize: 25,
				fontWeight: 'bold',
				cursor: 'move',
		}}>
			aaaaa	
		</div>
	);
}
export default DragButton; 
