import React, { Suspense, useCallback, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import SuspenseLoader from '../common/suspense-loader';
import Offline from '../common/offline-loader';
import LandingLayout from '../layouts/landing-page';

const PrivateRoutes = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    useEffect(() => {

        function onlineHandler() {
            setIsOnline(true);
        }

        function offlineHandler() {
            setIsOnline(false);
        }

        window.addEventListener("online", onlineHandler);
        window.addEventListener("offline", offlineHandler);


        return () => {
            window.removeEventListener("online", onlineHandler);
            window.removeEventListener("offline", offlineHandler);
        };
    }, []);

    const renderOutlets = useCallback(() => {
        if (!isOnline) return <Offline />
        return <Outlet />
    }, [isOnline])
    return (
        <React.Fragment>
            <Suspense fallback={<SuspenseLoader />}>
                <LandingLayout>
                    {renderOutlets()}
                </LandingLayout>
            </Suspense>
        </React.Fragment>)
}

export default PrivateRoutes