import styled from 'styled-components'
import { headerHeight } from './styledConst.js'
const StyledBox = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr 400px;
    grid-template-rows: ${headerHeight} 1fr;
    height: 100vh;
    width: 100vw;
`
export default StyledBox
