import React, { Component } from 'react';

type Props = {
    children?: any,
    FallbackComponent?: any,
    onError?: (error: Error, componentStack: string) => void,
};

type ErrorInfo = {
    componentStack: string,
};

type State = {
    error?: Error,
    info?: ErrorInfo,
};

class ErrorBoundary extends Component<Props, State> {

    state: any = {
        error: null,
        info: null
    }

    componentDidCatch(error, info: ErrorInfo): void {
        const { onError } = this.props;

        if (typeof onError === 'function') {
            // Chiamo l'eventuale funzione passata per gestire l'errore
            onError.call(this, error, info ? info.componentStack : '')
        }
    }

    render() {
        const { children, FallbackComponent } = this.props;
        const { error, info } = this.state;

        // Se è stato passato un componente di fallback renderizzo quello, se no quello di default
        if (error !== null) {
            return (
                <>
                    {<FallbackComponent /> || <div>Oops, something went't wrong!</div>}
                </>

            )
        }

        return children || null;
    }
}

export default ErrorBoundary;