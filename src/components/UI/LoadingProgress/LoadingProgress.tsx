import React, { useEffect } from 'react';
import styled, { StyledComponent } from 'styled-components';
import axios from 'axios';
import NProgress from 'nprogress';

interface StyledProgressProps {
    background?: string;
}

const StyledProgress: StyledComponent<'div', any, StyledProgressProps, never> = styled.div`
    pointer-events: none;

    #nprogress .bar {
        background: ${({ background }: StyledProgressProps) => `var(--color-${background})` || '#29d'};
      
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
      
        width: 100%;
        height: 2px;
    }

    /* Fancy blur effect */
    #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #29d, 0 0 5px#29d;
        opacity: 1.0;

        -webkit-transform: rotate(3deg) translate(0px, -4px);
            -ms-transform: rotate(3deg) translate(0px, -4px);
                transform: rotate(3deg) translate(0px, -4px);
    }

    /* Remove these to get rid of the spinner */
    #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
    }

    #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;

        border: solid 2px transparent;
        border-top-color: #29d;
        border-left-color: #29d;
        border-radius: 50%;

        -webkit-animation: nprogress-spinner 400ms linear infinite;
                animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
    }
      
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
        position: absolute;
    }
      
    @-webkit-keyframes nprogress-spinner {
        0%   { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

export default function LoadingProgress() {

    useEffect(() => {
        // setTimeout(() => loadProgressBar({ showSpinner: true }), 500)
    }, [])

    return (
        <StyledProgress
            id="nprogress"
            background={'primary'}
        />
    )
}

const calculatePercentage = (loaded, total) => (Math.floor(loaded * 1.0) / total)

export function loadProgressBar(config, instance = axios) {
    let requestsCounter = 0;

    const setupStartProgress = () => {
        instance.interceptors.request.use(axiosConfig => {
            requestsCounter++
            NProgress.start()
            return axiosConfig
        })
    }

    const setupUpdateProgress = () => {
        const update = e => NProgress.inc(calculatePercentage(e.loaded, e.total))
        instance.defaults.onDownloadProgress = update
        instance.defaults.onUploadProgress = update
    }

    const setupStopProgress = () => {
        const responseFunc = response => {
            if (!NProgress.isStarted()) return;
            if ((--requestsCounter) === 0) {
                NProgress.done()
            }
            return response
        }

        const errorFunc = error => {
            if (!NProgress.isStarted()) return;
            if ((--requestsCounter) === 0) {
                NProgress.done()
            }
            return Promise.reject(error)
        }

        instance.interceptors.response.use(responseFunc, errorFunc)
    }

    NProgress.configure(config)
    setupStartProgress()
    setupUpdateProgress()
    setupStopProgress()
} 
