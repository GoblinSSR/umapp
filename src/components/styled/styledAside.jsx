import styled from 'styled-components'
import { headerHeight, borderColor } from 'components/styled/styledConst'
	//background-color: rgb(32,32,33);
const StyledAside = styled.aside`
    display: block;
    border-right: 1px solid ${borderColor};
    height: calc(100vh - ${headerHeight});
`
export default StyledAside
