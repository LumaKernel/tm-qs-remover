const url = new URL(location.href);

url.searchParams.delete("utm_source");
url.searchParams.delete("ck_subscriber_id");
if (url.searchParams.get("s") === "bytes") {
  url.searchParams.delete("s");
}

if (location.href !== url.toString()) {
  location.replace(url.toString());
}
