import React, { Suspense } from 'react'
import FallbackComponent from './FallbackComponent';

export default function WaitingComponent(C: any) {
    return (props: any) => (
        <Suspense fallback={FallbackComponent()}>
            <C {...props} />
        </Suspense>
    )
}
