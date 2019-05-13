module.exports = [
  ["link", { rel: "shortcut icon", href: "/favicon/favicon.ico" }],
  ["meta", { "http-equiv": "x-ua-compatible", content: "ie=edge" }],
  ["meta", { name: "apple-mobile-web-app-title", content: `Dâmocles Gil Marçal - Desenvolvedor Front End` }],
  ["meta", { name: "theme-color", content: `#2c3e50` }],
  ["meta", { name: "msapplication-navbutton-color", content: `#2c3e50` }],
  ["meta", { name: "mobile-web-app-capable", content: "yes" }],
  [
    "meta",
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent"
    }
  ],
  ["meta", { name: "coverage", content: "WorldWide" }],
  ["meta", { name: "rating", content: "general" }],
  ["meta", { name: "robots", content: "index,follow" }],
  ["meta", { name: "googlebot", content: "index,follow" }],

  // Twitter
  ["meta", { name: "twitter:card", content: "summary_large_image" }],
  ["meta", { name: "twitter:site", content: "@ktquez" }],

  // Facebook
  ["meta", { property: "fb:app_id", content: `MY FACEBOOK APP ID` }],
  ["meta", { property: "og:type", content: "website" }],
  ["meta", { property: "og:site_name", content: `Dâmocles Gil Marçal` }],
  ["meta", { property: "og:image:height", content: "1200" }],
  ["meta", { property: "og:image:width", content: "360" }],
  ["meta", { property: "og:image:type", content: "image-social-share/png" }],

  ["meta", { name: "google-site-verification", content: `MY VERIFICATION KEY` }],

  // Link
  ["link", { rel: "manifest", href: "/manifest.json" }],

  [
    "link",
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png"
    }
  ]
];
