import React, { lazy, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppearanceSetup from "../../components/UI/Layout/AppearanceSetup/AppearanceSetup";
import WaitingComponent from "../../components/UI/WaitingComponent/WaitingComponent";
import HomeLayout from "../Home/Home";

function Root(props: any) {

    useEffect(() => {
        console.log("[Root#Render]")
    })

    return (
        <AppearanceSetup>
            <Switch>
                <Route path="/" component={WaitingComponent(HomeLayout)} />
            </Switch>
        </AppearanceSetup>
    )

}

export default Root
