import StyledOperate from 'components/styled/styledOperate'
import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd'
import { nanoid } from 'nanoid'
import {containerBg} from 'components/styled/styledConst';
const generateComponent = ({x,y}, typeName) => {
	let id = nanoid();
	let ob = {
		id: nanoid(),
		typeName
	}
	return ob;
}
const Operate= () => {
	const plainOb = {}
	const [components, setComponents] = useState([]);
	const [collectedProps, drop] = useDrop(() => ({
		accept: 'dragContainer',
		drop(item, monitor) {
			let component = generateComponent(monitor.getClientOffset(), item.typeName);
			let newComponents = [...components];
			newComponents.push(component);
			setComponents(newComponents);
		},
	}),[components])
	return <StyledOperate ref={drop}>
		{
			components.map(item=>{
				return (
					<div style={{
						position:"relative",
					}} key={item.id}>
					{item.typeName}
					</div>
				)
			})
		}
		</StyledOperate>
}
export default Operate; 
