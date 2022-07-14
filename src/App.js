import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Test from './components/drag/sort';
import React, {useRef, useState, useEffect} from 'react';
function Example(){
	const [count, setCount] = useState(0);
	const numRef = useRef(0);
	console.log(numRef);
	useEffect(()=>{
		numRef.current = count;
	},[count]);
	return (
		<div>
			<p>上一次值: {numRef.current}</p>
			<p>这一次值: {count}</p>
			<button onClick={()=>{setCount(count+10)}}> +10 </button>
		</div>
	)
}
function App() {
	return (
		<div className="main">
			<Example />
			<DndProvider backend={HTML5Backend}>
				<Test />
			</DndProvider>
		</div>
		)
}

export default App
