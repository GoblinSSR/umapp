import styled from 'styled-components'
import { headerHeight, asideWidth, panelWidth } from 'components/styled/styledConst'

    //grid-template-columns: ${asideWidth} 1fr ${panelWidth};
const StyledBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: ${headerHeight} 1fr;
    height: 100vh;
    width: 100vw;
`
export default StyledBox
