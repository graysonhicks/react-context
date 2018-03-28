import styled from 'styled-components';

const Box = styled.section`
    padding: 20px;
    text-align: center;
    border-radius: 15px;
    background-color: ${props => props.bgColor}
`

export default Box;