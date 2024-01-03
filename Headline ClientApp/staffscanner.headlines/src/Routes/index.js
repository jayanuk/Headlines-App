import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InjectRouteParams from "./InjectRouteParams";
import HeadLines from "../Pages/HeadLines";
import HeadLineDetail from "../Pages/HeadLineDetail";
import NotFound from "../Components/Common/NotFound";

export default function AppRoutes(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <InjectRouteParams>
                            <HeadLines />
                        </InjectRouteParams>
                    }
                />
                <Route
                    path="/Headlines"
                    element={
                        <InjectRouteParams>
                            <HeadLines />
                        </InjectRouteParams>
                    }
                />
                <Route
                    path="/Headline/:id"
                    element={
                        <InjectRouteParams>
                            <HeadLineDetail />
                        </InjectRouteParams>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
