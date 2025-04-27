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

  return (
    <div style={{ padding: "1rem", width: "200px" }}>
      <h2>YouTube Shorts Control</h2>
      <div style={{ marginTop: "1rem" }}>
        <label>
          <input
            type="checkbox"
            checked={hideShorts}
            onChange={handleHideChange}
          />
          Hide Shorts
        </label>
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        <label>
          <input
            type="checkbox"
            checked={blockShorts}
            onChange={handleBlockChange}
          />
          Block Shorts
        </label>
      </div>
    </div>
  );
};

export default Popup;
