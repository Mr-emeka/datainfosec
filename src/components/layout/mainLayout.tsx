import React from 'react'
import Header from '../../containers/NavigationMenu'
import Footer from '../../containers/Footer'
import { Helmet } from 'react-helmet';

export interface IProps {
    children: React.ReactNode,
    title?: string,
    description?: string
}

const MainLayout: React.FC<IProps> = ({ title, children, description }) => {
    return <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
}

export default MainLayout;