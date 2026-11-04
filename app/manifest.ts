import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Applied Commerce Zimbabwe",
    short_name: "AC Zimbabwe",
    description: "Your Applied Commerce learning platform for Forms 1–4.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f5f3ed",
    theme_color: "#17313b",
    lang: "en",
    icons: [
      { src: "/pwa/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/pwa/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/pwa/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
