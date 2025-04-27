function removeShortsElements() {
  const shortsSections = document.querySelectorAll('ytd-reel-shelf-renderer, ytd-reel-item-renderer, a[href^="/shorts"]');
  shortsSections.forEach(el => el.remove());

  const sidebarItems = document.querySelectorAll('a[title="Shorts"]');
  sidebarItems.forEach(el => el.parentElement?.remove());
}

function blockShortsNavigation(event: MouseEvent) {
  const target = event.target as HTMLElement;
  const anchor = target.closest('a') as HTMLAnchorElement | null;

  if (anchor && anchor.href.includes("/shorts")) {
    event.preventDefault();
    event.stopPropagation();
    alert("Blocked: Shorts are disabled.");
  }
}

function init() {
  chrome.storage.sync.get(["hideShorts", "blockShorts"], (result) => {
    if (result.hideShorts) {
      removeShortsElements();
      const observer = new MutationObserver(removeShortsElements);
      observer.observe(document.body, { childList: true, subtree: true });
    }

    if (result.blockShorts) {
      document.addEventListener("click", blockShortsNavigation, true);
    }
  });
}

init();
