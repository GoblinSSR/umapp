import React, {useState, useCallback} from 'react';
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
};

const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
};

const Card = function Card({ id, text, moveCard, findCard, }) {
    const originalIndex = findCard(id).index;
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'cards'
        item: { id, originalIndex },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => {
            const { id: droppedId, originalIndex } = item;
            const didDrop = monitor.didDrop();
            if (!didDrop) {
                moveCard(droppedId, originalIndex);
            }
        },
    }), [id, originalIndex, moveCard]);
    const [, drop] = useDrop(() => ({
        accept: ItemTypes.CARD,
        hover({ id: draggedId }) {
            if (draggedId !== id) {
                const { index: overIndex } = findCard(id);
                moveCard(draggedId, overIndex);
            }
        },
    }), [findCard, moveCard]);
    const opacity = isDragging ? 0 : 1;
    return (<div ref={(node) => drag(drop(node))} style={{ ...style, opacity }}>
			{text}
		</div>);
};

function Bucket() {
	const [cards, setCards] = useState(items);
	const findCard = useCallback((id)=>{
		const card = cards.filter((c)=> `${c.id}` === id)[0];
		return {
			cards,
			index: cards.indexOf(card)
		};
	}, [cards]);
	const moveCard = useCallback((id, atIndex) => {
		const {card, index } = findCard(id);
		setCards((cards, {
			$splice: [
                [index, 1],
                [atIndex, 0, card],
            ],
		}));
	}, [findCard, cards, setCards])
	const [, drop] = useDrop(() => ({ accept: 'cards' }));
    return (<div ref={drop} style={style}>
			{cards.map((card) => (<Card key={card.id} id={`${card.id}`} text={card.text} moveCard={moveCard} findCard={findCard}/>))}
		</div>);
}
const Test = ()=>{
	return (
		<div>
			<Bucket />
		</div>
	)
}

export default Test;

