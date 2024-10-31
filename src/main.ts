let changed = false;
const url = new URL(location.href);
const allowlist: Array<(url: URL) => boolean> = [
  (url) => url.host === "amazon.co.jp",
  (url) => url.host === "www.amazon.co.jp",
];

const allowed = allowlist.some((fn) => fn(url));

if (!allowed) {
  const removeIfExists = (str: string) => {
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
