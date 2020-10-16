import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`

function FallbackComponent() {
    return (
        <StyledDiv>
        </StyledDiv>
    )
}

export default FallbackComponent
