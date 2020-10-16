import React, {useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import {RootState} from '../../../redux/rootReducer'

const StyledError = styled.p`
    font-size: 1.1em;
    text-align: center;
`

export default function ErorrHandler() {

    const {t} = useTranslation('commons');
    const {message, details} = useSelector(({app}: RootState) => {
        return {message: app.error?.message, details: app.error?.details}
    })

    const errorMessage = useMemo(() => (<>
        {message &&
        <>
            <StyledError>{message}</StyledError>
        </>
        }
    </>), [message, details])

    return (
        {errorMessage}
    )

}
