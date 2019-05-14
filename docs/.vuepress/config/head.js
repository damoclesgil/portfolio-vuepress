module.exports = [
  ["link", { rel: "shortcut icon", href: "/favicon/favicon.ico" }],
  ["meta", { "http-equiv": "x-ua-compatible", content: "ie=edge" }],
  ["meta", { name: "apple-mobile-web-app-title", content: "Dâmocles Gil Marçal - Desenvolvedor Front End" }],
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
  ["meta", { name: "twitter:site", content: "@damoclesgil" }],

  // Facebook
  ["meta", { property: "og:type", content: "website" }],
  ["meta", { property: "og:site_name", content: "Dâmocles Gil Marçal - Desenvolvedor Front End" }],
  ["meta", { property: "og:image:height", content: "1200" }],
  ["meta", { property: "og:image:width", content: "360" }],
  ["meta", { property: "og:image:type", content: "image/png" }],

  // ["meta", { name: "google-site-verification", content: `MY VERIFICATION KEY` }],

  // Link
  ["link", { rel: "manifest", href: "/manifest.json" }],
  // ['link', { rel: 'author', href: '/humans.txt' }],

  ["link", { rel: "apple-touch-icon", sizes: "57x57", href: "/favicon/apple-touch-icon-57x57.png" }],
  ["link", { rel: "apple-touch-icon", sizes: "60x60", href: "/favicon/apple-touch-icon-60x60.png" }],
  ["link", { rel: "apple-touch-icon", sizes: "72x72", href: "/favicon/apple-touch-icon-72x72.png" }],
  ["link", { rel: "apple-touch-icon", sizes: "76x76", href: "/favicon/apple-touch-icon-76x76.png" }],
  ["link", { rel: "apple-touch-icon", sizes: "114x114", href: "/favicon/apple-touch-icon-114x114.png" }],
  ["link", { rel: "apple-touch-icon", sizes: "120x120", href: "/favicon/apple-touch-icon-120x120.png" }],
  ["link", { rel: "apple-touch-icon", sizes: "144x144", href: "/favicon/apple-touch-icon-144x144.png" }],
  ["link", { rel: "apple-touch-icon", sizes: "152x152", href: "/favicon/apple-touch-icon-152x152.png" }],
  ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon-180x180.png" }],

  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon/android-chrome-192x192.png",
      sizes: "192x192"
    }
  ],
  ["link", { rel: "icon", type: "image/png", href: "/favicon/icon-96x96", sizes: "96x96" }],
  ["link", { rel: "icon", type: "image/png", href: "/favicon/favicon-32x32.png", sizes: "32x32" }],
  ["link", { rel: "icon", type: "image/png", href: "/favicon/favicon-16x16.png", sizes: "16x16" }],

  ["link", { rel: "alternate", href: "https://damoclesgil.netlify.com/", hreflang: "pt-br" }],
  ["link", { rel: "alternate", href: "https://damoclesgil.netlify.com//en/", hreflang: "en" }],

  // Prebrowsing
  ["link", { rel: "preconnect", href: "https://connect.facebook.net/" }],
  ["link", { rel: "preconnect", href: "https://platform.twitter.com/" }],
  ["link", { rel: "preconnect", href: "https://www.google-analytics.com/" }],
  ["link", { rel: "preconnect", href: "https://stats.g.doubleclick.net" }],

  ["link", { rel: "preload", href: "https://www.google-analytics.com/analytics.js", as: "script" }]
];
