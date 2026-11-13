// Hollow Vault service worker: help request notifications only (spec 2026-11-12 dungeon chat and
// help requests §2.3, Phase C). It has no fetch handler on purpose, so it never caches or changes
// how the game loads; it only shows push messages and opens the game when one is tapped.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

self.addEventListener('push', event => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch {
    data = {};
  }
  const scope = self.registration.scope;
  const title = typeof data.title === 'string' ? data.title : 'ヘルプ要請';
  event.waitUntil(self.registration.showNotification(title, {
    body: typeof data.body === 'string' ? data.body : '',
    tag: typeof data.tag === 'string' ? data.tag : 'help',
    icon: `${scope}pwa-icon-192.png`,
    badge: `${scope}pwa-icon-192.png`,
    data: { url: typeof data.url === 'string' && data.url.startsWith(scope) ? data.url : scope },
  }));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = event.notification.data && event.notification.data.url ? event.notification.data.url : self.registration.scope;
  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const open = windows.find(client => client.url.startsWith(self.registration.scope));
    if (open) {
      await open.focus();
      // The game reads ?help=<id> on load; an open tab is told directly.
      open.postMessage({ type: 'hv-help-open', url });
      return;
    }
    await self.clients.openWindow(url);
  })());
});
