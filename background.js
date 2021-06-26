let color = '#FFFFFF';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });     //自動儲存用戶的數據
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
