import { Router } from 'vue-router';
import { setRouteChange } from '@/router/mitt/routeChange';

// Don't change the order of creation
export function setupRouterGuard(router: Router) {
  createPageGuard(router);
  // createPageLoadingGuard(router);
  // createHttpGuard(router);
  // createScrollGuard(router);
  // createMessageGuard(router);
  // createProgressGuard(router);
  // createPermissionGuard(router);
  // createParamMenuGuard(router); // must after createPermissionGuard (menu has been built.)
  // createStateGuard(router);
}
/**
 * Hooks for handling page state
 */
function createPageGuard(router: Router) {
  const loadedPageMap = new Map<string, boolean>();

  router.beforeEach(async (to) => {
    // The page has already been loaded, it will be faster to open it again, you don’t need to do loading and other processing
    to.meta.loaded = !!loadedPageMap.get(to.path);
    // Notify routing changes
    setRouteChange(to);

    return true;
  });

  router.afterEach((to) => {
    loadedPageMap.set(to.path, true);
  });
}
