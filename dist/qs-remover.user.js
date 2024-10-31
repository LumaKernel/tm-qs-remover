// ==UserScript==
// @name         QueryString Remover
// @namespace    github.com/LumaKernel
// @version      0.0.2
// @author       Luma
// @description  Remove query strings from URLs
// @homepageURL  https://github.com/LumaKernel/tm-qs-remover
// @match        https://*/*
// @match        http://*/*
// ==/UserScript==

(function () {
  'use strict';

  let changed = false;
  const url = new URL(location.href);
  const allowlist = [
    (url2) => url2.host === "amazon.co.jp",
    (url2) => url2.host === "www.amazon.co.jp"
  ];
  const allowed = allowlist.some((fn) => fn(url));
  if (!allowed) {
    const removeIfExists = (str) => {
      if (url.searchParams.get(str) != null) {
        url.searchParams.delete(str);
        changed = true;
      }
    };
    removeIfExists("utm_source");
    removeIfExists("ck_subscriber_id");
    if (url.searchParams.get("s") === "bytes") {
      url.searchParams.delete("s");
      changed = true;
    }
    if (changed && location.href !== url.toString()) {
      location.replace(url.toString());
    }
  }

})();