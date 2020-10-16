import React from 'react'
import styled, { StyledComponent } from 'styled-components'

const StyledImg: StyledComponent<"img", any, any, never> = styled.img`
    //max-width: 100%;
    //height: auto;
    width: auto;
`

function Logo(props: any) {

    return (
        // <StyledImg src={props.src} className="img-fluid" />
        <StyledImg src={props.src} height={props.height} />
    )

}

export default Logo
