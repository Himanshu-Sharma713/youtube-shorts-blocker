const hideShortsCSS = `
  a[href^="/shorts"], 
  ytd-rich-section-renderer[is-shorts],
  ytd-reel-shelf-renderer,
  ytd-mini-guide-entry-renderer[aria-label*="Shorts"] {
    display: none !important;
  }
`;

const blockShortsURL = () => {
  if (window.location.pathname.startsWith("/shorts")) {
    window.location.href = "https://www.youtube.com/";
  }
};

const applyHideShorts = (shouldHide: boolean) => {
  if (shouldHide) {
    const style = document.createElement("style");
    style.id = "hide-shorts-style";
    style.innerText = hideShortsCSS;
    document.head.appendChild(style);
  } else {
    const style = document.getElementById("hide-shorts-style");
    style?.remove();
  }
};

const init = () => {
  chrome.storage.sync.get(["hideShorts", "blockShorts"], (result) => {
    if (result.hideShorts) {
      applyHideShorts(true);
    }
    if (result.blockShorts) {
      blockShortsURL();
    }
  });

  // Listen to page changes
  const observer = new MutationObserver(() => {
    chrome.storage.sync.get(["hideShorts", "blockShorts"], (result) => {
      if (result.hideShorts) {
        applyHideShorts(true);
      }
      if (result.blockShorts) {
        blockShortsURL();
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
};

init();
