import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
function App() {
	return (
		<DndProvider backend={HTML5Backend}>
			<h1 className="text-3xl font-bold underline">
				Hello world!
			</h1>
		</DndProvider>
	)
}

export default App
