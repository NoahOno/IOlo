export const SITE = {
  website: "https://blog.onov2.qzz.io",
  author: "Noah",
  profile: "https://github.com/NoahOno",
  desc: "欢迎来到 Noah 的个人小站，在这里我会写一些关于编程、设计等所有让我感兴趣的话题的内容。",
  title: "DOS{NoahOno}",
  ogImage: "devosfera-og.webp", // located in the public folder
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 12,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showGalleries: false,
  showGalleriesInIndex: false, // Show galleries in the general paginated list (only if showGalleries is true)
  showBackButton: true, // show back button in post detail
  heroTerminalPrompt: {
    prefix: "~", // highlighted part on the left
    path: "/.", // central prompt text
    suffix: "$", // terminal symbol on the right
  },
  backdropEffects: {
    cursorGlow: false, // cursor tracking with soft halo
    grain: true, // background visual noise layer
  },
  editPost: {
    enabled: true,
    text: "编辑这篇文章",
    url: "https://github.com/NoahOno/IOlo/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  introAudio: {
    enabled: true, // show/hide intro player in home and compact player while navigating
    // src: path to file (relative to /public or absolute URL). Example: "/intro.mp3" or "https://example.com/stream"
    src: "https://fluxfm.streamabc.net/flx-chillhop-mp3-128-8581707",
    // src: "/audio/intro-web.mp3",
    isStream: true, // true for radio/live stream URLs (example: https://fluxfm.streamabc.net/flx-chillhop-mp3-128-8581707)
    label: "LOFI", // display label in player
    duration: 30, // duration in seconds (used for local files, ignored on streams)
  },
} as const;
