
import React from 'react';
import Footer from './Footer';
import Headers from './Headers';

const BaseLayout = (props) => {
    return (<>
        <Headers />
        <br/>
        <br/>
        <br/>
        {props.children}
        <br/>
        <Footer />
        </>
    )
}

export default BaseLayout
