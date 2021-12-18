import StyledBox from './components/styled/styledBox'
import Aside from './components/Aside'
import Header from './components/Header'
import Container from './components/Container'
import Panel from './components/Panel'
import { useDrag } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
function App() {
    return (
        <StyledBox>
            <Header />
			<DndProvider backend={HTML5Backend}>
				<Aside />
				<Container />
			</DndProvider>
            <Panel />
        </StyledBox>
    )
}

export default App
