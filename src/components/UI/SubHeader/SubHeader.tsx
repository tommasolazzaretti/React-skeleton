import React from 'react'
import styled from 'styled-components'

const StyledSubHeader = styled.div`

    padding: 2.5rem 1rem 2.5rem 5rem;
    /* text-transform: uppercase; */
    /* border-bottom: 2px solid lightgray; */

    /* h1 {
        color: var(--color-primary);
    } */

`

interface SubHeaderProps {
    title: string,
    subTitle?: string
}

export default function SubHeader({ title, subTitle }: SubHeaderProps) {

    return (
        <StyledSubHeader>
            {subTitle && <div>
                {subTitle}
            </div>}
            <h2>
                {title}
            </h2>
        </StyledSubHeader>
    )

}
