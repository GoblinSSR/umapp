import { useDrop, useDrag, useDragDropManager } from 'react-dnd';
const items = [
    {
        id: 1,
        text: 'index 1',
    },
	{
        id: 2,
        text: 'index 2',
    }
];
const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
};
const Card = function Card() {};

function Box() {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: 'BOX',
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));
  return (
    <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1}}>
	  <div role="Handle" ref={drag} >
		box
		box
		box
	  </div>
    </div>
  )
}

function Bucket(){
	const [{canDrop, isOver}, drop] = useDrop(()=>({
		accept:"BOX",
		collect: (monitor)=>({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	}));
	return (
		<div
		ref={drop}
		role={'Dustbin'}
		style={{ backgroundColor: isOver ? 'red' : 'white', height: "200px" }}
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

