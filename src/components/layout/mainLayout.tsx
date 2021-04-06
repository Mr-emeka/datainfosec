import React from 'react'


export interface IProps {
    children: React.ReactNode,
}

const MainLayout: React.FC<IProps> = ({ children }) => {
    return <div>
        <main>
            {children}
        </main>
        <aside>

        </aside>
    </div>
}

export default MainLayout;