// ==UserScript==
// @name         QueryString Remover
// @namespace    github.com/LumaKernel
// @version      0.0.1
// @author       Luma
// @description  Remove query strings from URLs
// @match        https://*/*
// @match        http://*/*
// ==/UserScript==

(function () {
  'use strict';

  const url = new URL(location.href);
  url.searchParams.delete("utm_source");
  url.searchParams.delete("ck_subscriber_id");
  if (url.searchParams.get("s") === "bytes") {
    url.searchParams.delete("s");
  }
  if (location.href !== url.toString()) {
    location.replace(url.toString());
  }

})();