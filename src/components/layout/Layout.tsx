import React, { FC } from 'react'
import { Meta } from './Meta';

interface Props extends MetaProps {
    children: JSX.Element;
    // title: string;
    // keywords: string;
    // description: string;
}

const Layout: FC<Props> = ({
    children,
    title,
    keywords,
    description,
}) => {
    return (
        <div>
            <Meta title={title} keywords={keywords} description={description} />
            <div className="">

                {children}
            </div>
        </div>
    )
}

export default Layout