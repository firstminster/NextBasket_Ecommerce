import React, { FC } from 'react'
import { Meta } from './Meta';
import { Container } from '@mui/material';

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
        <>
            <Meta title={title} keywords={keywords} description={description} />
            {children}
        </>
    )
}

export default Layout