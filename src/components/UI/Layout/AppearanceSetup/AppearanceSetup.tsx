import React, {useEffect} from 'react';
import LoadingProgress from '../../LoadingProgress/LoadingProgress';
import Head from '../Head/Head';

function AppearanceSetup(props: any) {

    useEffect(() => {
        // console.log("[AppearanceSetup#Render]")
    })

    return (
        <>
            <LoadingProgress />
            <Head />
            {props.children}
        </>
    )

}

export default AppearanceSetup
