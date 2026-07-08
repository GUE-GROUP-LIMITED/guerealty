export const SITE_NAME = "GUE REALTY LIMITED";
export const SITE_TITLE = "GUE Realty Limited";
export const SITE_DESCRIPTION =
  "GUE Realty Limited delivers real estate marketing, investment, development, appraisal, and property management services across Nigeria.";

export function getBaseUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export function toAbsoluteUrl(pathname = "/") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${getBaseUrl()}${normalizedPath}`;
}

export const DEFAULT_OG_IMAGE = "/logo.png";
