import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function InjectRouteParams(props) {
    const params = { params: useParams(), location: useLocation(), navigate: useNavigate() };

    return <>{React.cloneElement(props.children, { route: {...params} })}</>;
}
