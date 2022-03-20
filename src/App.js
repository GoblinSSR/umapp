import StyledBox from './components/styled/styledBox'
import Aside from './components/Aside'
import Header from './components/Header'
import Operate from './components/Operate'
import Interact from './components/Interact'
import Panel from './components/Panel'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
function App() {
    return (
        <StyledBox>
            <Header />
            <DndProvider backend={HTML5Backend}>
                <Aside />
                <Operate/>
            </DndProvider>
			<Interact />
            <Panel />
        </StyledBox>
    )
}

export default App
