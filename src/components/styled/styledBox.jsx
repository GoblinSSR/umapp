import styled from 'styled-components'
import { headerHeight, asideWidth, panelWidth } from 'components/styled/styledConst'
const StyledBox = styled.div`
    display: grid;
    grid-template-columns: ${asideWidth} 1fr ${panelWidth};
    grid-template-rows: ${headerHeight} 1fr;
    height: 100vh;
    width: 100vw;
`
export default StyledBox
