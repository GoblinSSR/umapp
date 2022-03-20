import React from 'react'
import { useDrag } from 'react-dnd'
import StyledDragComponent from 'components/styled/styledDragComponent'
/*
const movePosition = (x, y) => {
    console.log(x, y)
}
*/
const DragButton = () => {
    const [{ isDragging }, drag ] = useDrag(() => ({
        type: 'dragContainer',
        item: {
            typeName: 'button',
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        //drop: () => movePosition(),
    }))
    return (
        <StyledDragComponent>
			<div
			ref={drag}
			style={{
				opacity: isDragging ? 0.5 : 1,
					fontSize: 25,
					fontWeight: 'bold',
					cursor: 'move',
			}}>
			Button
			</div>
        </StyledDragComponent>
    )
}
export default DragButton
