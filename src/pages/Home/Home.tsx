import React, {useEffect} from 'react'
import styled from 'styled-components'

const StyledHomeLayout = styled.div`

`

export default function HomeLayout({children}: any) {
    useEffect(() => {
        console.log("[HomeLayout#Render]")
    })

    return (
        <StyledHomeLayout>
            home
        </StyledHomeLayout>
    )

}
