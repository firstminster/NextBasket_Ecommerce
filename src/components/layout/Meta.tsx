import { FC } from "react";
import Head from "next/head";

export const Meta: FC<MetaProps> = ({ title, keywords, description }) => {
    const name = "NextBasket Ecommerce";
    const websiteURL = "";
    const twitterHandle = "";
    const metaContent = "";

    return (
        <Head>
            <meta data-charset="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
            />
            <meta name="title" content={title} />
            <meta name="author" content="NextBasket Engineering Team" />
            <meta name="theme-color" content="#001028" />
            <meta name="msapplication-navbutton-color" content="#001028" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#001028" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="pagename" content={title} />
            <meta name="url" content={websiteURL} />
            <meta itemProp="name" content={title} />
            <meta property="og:site_name" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={websiteURL} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:url" content={websiteURL} />
            <meta property="twitter:title" content={title} />
            <meta name="twitter:site" content={twitterHandle} />
            <meta name="twitter:creator" content={twitterHandle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image:alt" content={`A picture of ${title}`} />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <title>{title}</title>
        </Head>
    );
};

Meta.defaultProps = {
    title: "NextBasket",
    keywords: "",
    description: "",
};
