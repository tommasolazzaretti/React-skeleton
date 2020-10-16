import React from 'react';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';

import loadingspin from '../../../assets/img/loadingspin.svg'

const StyledSpinner = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

interface ILoadingSpinnerProps {
    message?: string;
}

function LoadingSpinner({ message }: ILoadingSpinnerProps) {
    return (
        <StyledSpinner>
            <Spinner animation="border" />
            <span className="mt-3">{message}</span>
        </StyledSpinner>
    )
}

export default LoadingSpinner;
