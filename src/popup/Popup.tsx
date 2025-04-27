import { useEffect, useState } from "react";

function Popup() {
  const [hideShorts, setHideShorts] = useState(false);
  const [blockShorts, setBlockShorts] = useState(false);

  useEffect(() => {
    chrome.storage.sync.get(["hideShorts", "blockShorts"], (result: { hideShorts?: boolean; blockShorts?: boolean }) => {
      setHideShorts(result.hideShorts || false);
      setBlockShorts(result.blockShorts || false);
    });
  }, []);

  const handleHideChange = () => {
    chrome.storage.sync.set({ hideShorts: !hideShorts });
    setHideShorts(!hideShorts);
  };

  const handleBlockChange = () => {
    chrome.storage.sync.set({ blockShorts: !blockShorts });
    setBlockShorts(!blockShorts);
  };

  return (
    <div style={{ padding: "20px", width: "200px" }}>
      <h2>YouTube Shorts</h2>
      <div>
        <input type="checkbox" checked={hideShorts} onChange={handleHideChange} />
        <label style={{ marginLeft: "8px" }}>Hide Shorts</label>
      </div>
      <div style={{ marginTop: "10px" }}>
        <input type="checkbox" checked={blockShorts} onChange={handleBlockChange} />
        <label style={{ marginLeft: "8px" }}>Block Shorts</label>
      </div>
    </div>
  );
}

export default Popup;
