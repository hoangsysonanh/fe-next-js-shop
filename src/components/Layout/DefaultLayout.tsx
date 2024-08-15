import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const DefaultLayout = ({ children }: { children: React.ReactElement }) => {
    return (
        <>
            <div className="flex flex-col bg-[#F7F7F7]">
                <Header />
                <div className="relative flex flex-1 flex-col">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default DefaultLayout