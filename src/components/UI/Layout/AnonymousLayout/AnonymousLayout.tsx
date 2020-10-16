import React from 'react'

export default function AnonymousLayout({ children }: any) {

    return (
        <section className="container-fluid">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col">
                    {children}
                </div>
            </div>
        </section>
    )

}
