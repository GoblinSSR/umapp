import styled from 'styled-components'
import { headerHeight, borderColor } from 'components/styled/styledConst'
const StyledAside = styled.aside`
    display: block;
    border-right: 1px solid ${borderColor};
	background-color: rgb(32,32,33);
    height: calc(100vh - ${headerHeight});
`
export default StyledAside
