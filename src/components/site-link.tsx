import Link from "next/link";
import type { ComponentProps } from "react";

// The router mishandles hash scrolling when basePath is set (the URL
// updates but the page never scrolls), so anchor links bypass <Link>
// and let the browser scroll natively. Plain <a> tags don't get the
// basePath prepended automatically, hence the helper.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(href: string): string {
  return href.startsWith("/") ? `${basePath}${href}` : href;
}

/** Drop-in for <Link> that routes hash links around the client router. */
export function SiteLink({
  href,
  ...props
}: ComponentProps<"a"> & { href: string }) {
  if (href.includes("#")) {
    return <a href={withBasePath(href)} {...props} />;
  }
  return <Link href={href} {...props} />;
}
