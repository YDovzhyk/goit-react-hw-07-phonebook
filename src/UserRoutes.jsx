import {Routes, Route} from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "components/Loader/Loader";

const Home = lazy(() => import('./pages/Home/Home'));
const Family = lazy(() => import('./pages/Family/Family'));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/family" element={<Family />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;