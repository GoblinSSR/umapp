import StyledContainer from 'components/styled/styledContainer'
import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd'
import { nanoid } from 'nanoid'
import {asideWidth, headerHeight} from 'components/styled/styledConst';
const generateComponent = ({x,y}, typeName) => {
	let id = nanoid();
	const getNumRe = /.*?(\d+)px.*?/;
	let top = getNumRe.exec(headerHeight)[1];
	let left= getNumRe.exec(asideWidth)[1];
	let ob = {
		x: x-left,
		y: y-top,
		id: nanoid(),
		typeName
	}
	return ob;
}
const Container = () => {
    const plainOb = {}
	const [components, setComponents] = useState([]);
    const [collectedProps, drop] = useDrop(() => ({
        accept: 'dragComponent',
        drop(item, monitor) {
			let component = generateComponent(monitor.getClientOffset(), item.typeName);
			let newComponents = [...components];
			debugger;
			newComponents.push(component);
			console.log(newComponents);
			setComponents(newComponents);
        },
    }),[components])
	useEffect(()=>{
		console.log(components);
	},[components]);
	return <StyledContainer ref={drop}>
		{
			components.map(item=>{
				return (
					<div style={{
						position:"relative",
							top: item.y,
							left:item.x,
					}} key={item.id}>
					{item.typeName}
					</div>
				)
			})
		}
		</StyledContainer>
}
export default Container
