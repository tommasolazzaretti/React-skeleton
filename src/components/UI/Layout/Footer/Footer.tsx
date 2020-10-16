import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import FooterContent from './FooterContent';

interface StyledFooterProps {
    height?: number,
    cssStyle?: { [key: string]: any }
}

const StyledFooter: StyledComponent<'footer', any, StyledFooterProps, never> = styled.footer`
    height: ${(props: StyledFooterProps) => props.height || 5}vh;
    background-color: #f5f5f5;
    ${(props: StyledFooterProps) => props.cssStyle}
`

export default function Footer() {
    return (
        <StyledFooter
            className="row no-gutters">
            <div className="col text-right py-3 mr-2">
                <FooterContent />
            </div>
        </StyledFooter>
    )
}
