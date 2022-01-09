import React from 'react'
import { useDrag } from 'react-dnd'
import StyledDragButton from 'components/styled/styledDragButton'
/*
const movePosition = (x, y) => {
    console.log(x, y)
}
*/
const DragButton = () => {
    const [{ isDragging }, drag ] = useDrag(() => ({
        type: 'dragComponent',
        item: {
            typeName: 'button',
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        //drop: () => movePosition(),
    }))
    return (
        <StyledDragButton>
			<div
			ref={drag}
			style={{
				opacity: isDragging ? 0.5 : 1,
					fontSize: 25,
					fontWeight: 'bold',
					cursor: 'move',
			}}>
			aaaa
			</div>
        </StyledDragButton>
    )
}
export default DragButton
