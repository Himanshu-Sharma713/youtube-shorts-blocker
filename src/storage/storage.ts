export const setStorage = (key: string, value: boolean) => {
  chrome.storage.sync.set({ [key]: value }, () => {
    console.log(`${key} set to ${value}`);
  });
};

export const getStorage = (key: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get([key], (result) => {
      if (chrome.runtime.lastError) {
        reject(`Error retrieving ${key}: ${chrome.runtime.lastError}`);
      } else {
        resolve(result[key] || false);
      }
    });
  });
};

export const removeStorage = (key: string) => {
  chrome.storage.sync.remove([key], () => {
    console.log(`${key} removed`);
  });
};
