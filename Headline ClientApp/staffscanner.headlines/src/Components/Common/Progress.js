import React from "react";
import Loader from "react-loader-advanced-next";

export default function Progress(props) {
    return (
        <>
            <Loader show={props.show} message={props.message || "Loading..."} style={{ position: "" }}>
                {props.children}
            </Loader>
        </>
    );
}
