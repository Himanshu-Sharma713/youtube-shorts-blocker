function removeShortsElements() {
  // Hide "Shorts" elements from the page
  const shortsSections = document.querySelectorAll('ytd-reel-shelf-renderer, ytd-reel-item-renderer, a[href^="/shorts"]');
  shortsSections.forEach(el => el.remove());

  // Hide the "Shorts" item in the sidebar (if it exists)
  const sidebarItems = document.querySelectorAll('a[title="Shorts"]');
  sidebarItems.forEach(el => el.parentElement?.remove());
} 

function blockShortsNavigation(event: MouseEvent) {
  // Block navigation if the target is a "Shorts" link
  const target = event.target as HTMLElement;
  const anchor = target.closest('a') as HTMLAnchorElement | null;

  if (anchor && anchor.href.includes("/shorts")) {
    event.preventDefault(); // Prevent the default action (navigating to the shorts page)
    event.stopPropagation(); // Stop the click event from propagating further
    alert("Blocked: Shorts are disabled.");
  }
}

function init() {
  // Get the saved preferences for hiding or blocking shorts
  chrome.storage.sync.get(["hideShorts", "blockShorts"], (result: { hideShorts?: boolean; blockShorts?: boolean }) => {
    // If the user has enabled "hideShorts", remove shorts from the page
    if (result.hideShorts) {
      removeShortsElements();
      
      // Observe the page for changes and remove new shorts as they appear
      const observer = new MutationObserver(removeShortsElements);
      observer.observe(document.body, { childList: true, subtree: true });
    }

    // If the user has enabled "blockShorts", block navigation to shorts
    if (result.blockShorts) {
      document.addEventListener("click", blockShortsNavigation, true);
    }
  });
}

init();
