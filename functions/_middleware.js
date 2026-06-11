const canonicalHost = "jorgeschwember.cl";

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();

  if (host === "www.jorgeschwember.cl" || host.endsWith(".pages.dev")) {
    url.protocol = "https:";
    url.hostname = canonicalHost;
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
