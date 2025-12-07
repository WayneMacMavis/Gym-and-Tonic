// src/pwa.ts
import { registerSW } from 'virtual:pwa-register';

registerSW({
  onNeedRefresh() {
    const wantsReload = window.confirm('Update available. Reload now?');
    if (wantsReload) {
      window.location.reload(); // just reload the page
    }
  },
  onOfflineReady() {
    console.log('Offline ready');
  },
});