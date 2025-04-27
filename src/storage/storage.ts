export const setStorage = (key: string, value: boolean) => {
  chrome.storage.sync.set({ [key]: value }, () => {
    console.log(`${key} set to ${value}`); // Log for debugging
  });
};

export const getStorage = (key: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get([key], (result) => {
      if (chrome.runtime.lastError) {
        console.error(`Error retrieving ${key}: ${chrome.runtime.lastError}`); // Log for debugging
        reject(`Error retrieving ${key}: ${chrome.runtime.lastError}`);
      } else {
        console.log(`Retrieved ${key}: ${result[key]}`); // Log for debugging
        resolve(result[key] || false);
      }
    });
  });
};
