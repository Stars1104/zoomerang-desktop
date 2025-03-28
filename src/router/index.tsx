import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RouteConfig } from "../types/types";

//Components
import HomePage from "../pages/Homepage";
import Loading from "../components/ui/Loading";

const components: Record<string, React.FC> = { HomePage };

const Routers = () => {
    const [routeConfig, setRouteConfig] = useState<RouteConfig[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("/router.json") // Load from public folder
            .then((response) => response.json())
            .then((data: RouteConfig[]) => setRouteConfig(data))
            .catch((error) => console.error("Failed to load routes:", error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <Router>
            <Routes>
                {
                    routeConfig.map(({ path, component }, index) => {
                        const Component = components[component];
                        return Component ? <Route key={index} path={path} element={<Component />} /> : null
                    })
                }
            </Routes>
        </Router>
    )
}

export default Routers;