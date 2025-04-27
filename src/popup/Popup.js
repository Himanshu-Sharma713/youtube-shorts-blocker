import { useEffect, useState } from "react";
import { setStorage, getStorage } from "../storage/storage";
import React from "react";
const Popup = () => {
    const [hideShorts, setHideShorts] = useState(false);
    const [blockShorts, setBlockShorts] = useState(false);
    useEffect(() => {
        // Retrieve the settings from storage on mount
        getStorage("hideShorts").then((value) => setHideShorts(value));
        getStorage("blockShorts").then((value) => setBlockShorts(value));
    }, []);
    const handleHideChange = () => {
        const newValue = !hideShorts;
        setStorage("hideShorts", newValue); // Save the new value
        setHideShorts(newValue); // Update the local state
    };
    const handleBlockChange = () => {
        const newValue = !blockShorts;
        setStorage("blockShorts", newValue); // Save the new value
        setBlockShorts(newValue); // Update the local state
    };
    return (React.createElement("div", { style: { padding: "1rem", width: "200px" } },
        React.createElement("h2", null, "YouTube Shorts Control"),
        React.createElement("div", { style: { marginTop: "1rem" } },
            React.createElement("label", null,
                React.createElement("input", { type: "checkbox", checked: hideShorts, onChange: handleHideChange }),
                "Hide Shorts")),
        React.createElement("div", { style: { marginTop: "0.5rem" } },
            React.createElement("label", null,
                React.createElement("input", { type: "checkbox", checked: blockShorts, onChange: handleBlockChange }),
                "Block Shorts"))));
};
export default Popup;
