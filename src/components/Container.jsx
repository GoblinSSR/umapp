import StyledContainer from './styled/styledContainer'
import { useDrop } from 'react-dnd'
const Container = () => {
	const [collectedProps, drop] = useDrop(() => ({
		accept:'dragComponent',
	}))
	return (
		<StyledContainer ref={drop}>Container</StyledContainer>
	)
}
export default Container
