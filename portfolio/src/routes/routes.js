import React from 'react'
import { useRoutes } from 'react-router-dom'

const Private = React.lazy(() => import('./private-routes'));
const LandingPage = React.lazy(() => import('../components/landing-page'));
const Routes = () => {
    const routes = useRoutes([{
        element: <Private />,
        children: [{
            path: "/",
            exact: true,
            element: <LandingPage />,
        }]
    }])
    return routes
}

export default Routes