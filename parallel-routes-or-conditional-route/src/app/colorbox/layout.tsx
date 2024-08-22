import React, { ReactNode } from 'react';

interface ColorBoxLayoutProps {
    children: ReactNode;
    left: ReactNode;
    right: ReactNode;
}

const ColorBoxLayout: React.FC<ColorBoxLayoutProps> = ({ children, left, right }) => {
    const isSideBar=false;
    return (
        <section>
            {children}
            {/* {left}
            {right} */}
            {isSideBar?left:right}
        </section>
    );
}

export default ColorBoxLayout;