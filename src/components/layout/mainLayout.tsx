import React from 'react'
import Header from '../../containers/NavigationMenu'
import Footer from '../../containers/Footer'


export interface IProps {
    children: React.ReactNode,
}

const MainLayout: React.FC<IProps> = ({ children }) => {
    return <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
}

export default MainLayout;