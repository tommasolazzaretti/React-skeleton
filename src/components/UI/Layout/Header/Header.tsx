import React, {useEffect, useMemo} from 'react';
import {useHistory} from "react-router-dom";
import styled, {StyledComponent} from 'styled-components';
import HeaderContent from './HeaderContent';
import {useTranslation} from 'react-i18next';

interface StyledHeaderProps {
    height?: number,
    cssStyle?: { [key: string]: any }
}

const StyledHeader: StyledComponent<"nav", any, StyledHeaderProps, never> = styled.nav`
    height: ${(props: StyledHeaderProps) => props.height || 5}vh;
    ${(props: StyledHeaderProps) => props.cssStyle}
    >div{
        height:100%;
        display:flex;
        img{
            height:60%;
            margin:auto 15px;
            display:block;
            margin:auto 15px;
        }
    }
`

function Header(props: any) {

    const history = useHistory()

    const {t} = useTranslation('commons');

    useEffect(() => {
        // console.log("[Header#Render]")
    })

    const handleLogout = async () => {
        history.push("/auth")
    }

    return (
        <StyledHeader
            className="row no-gutters">
            <HeaderContent/>
        </StyledHeader>

    )
}

export default Header;
