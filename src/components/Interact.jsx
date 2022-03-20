import StyledContainer from 'components/styled/styledContainer'
import StyledPhone from 'components/styled/styledPhone'
import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd'
import { nanoid } from 'nanoid'
import {containerBg} from 'components/styled/styledConst';
const clientRect  = ()=>{
	let element = document.getElementById('phone-panel');
	return element.getBoundingClientRect();
}
const generateComponent = ({x,y}, typeName) => {
	let id = nanoid();
	let left="0";
	let top = 0;
	let ob = {
		x: x-clientRect().left,
		y: y-clientRect().top,
		id: nanoid(),
		typeName
	}
	return ob;
}
const Container = () => {
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
	return <StyledContainer>
		<StyledPhone ref = {drop} id="phone-panel">
		{
			components.map(item=>{
				return (
					<div style={{
						position:"absolute",
							top: item.y,
							left:item.x,
					}} key={item.id}>
					{item.typeName}
					</div>
				)
			})
		}
		</StyledPhone>
		</StyledContainer>
}
const Interact = ()=>{
	return <p>Interact</p>
}
export default Interact; 
