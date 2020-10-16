import React from 'react'
import Logo from '../Logo/Logo';

function HeaderContent(props: any) {

    return (
        <>
            {props.content.type === 'image' && <Logo src={props.content.value} width={props.content.size} height={props.content.size} />}
            {/*{props.content.type === 'text' && <Slogan size={props.content.size}>{props.content.value}</Slogan>}*/}
        </>
    )

}

export default HeaderContent
