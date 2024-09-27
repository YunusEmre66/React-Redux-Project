import React from 'react'
import PageContainers from './containers/PageContainers'
import RouterConfig from './config/RouterConfig';

const App = () => {
    return (
        <>
            <Navbar />
            <PageContainers>
                <RouterConfig />
            </PageContainers>
        </>
    )
}

export default App;
