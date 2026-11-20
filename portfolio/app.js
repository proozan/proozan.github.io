const THEME_KEY = "portfolio-theme";
const LANG_KEY = "portfolio-lang";

const COPY = {
  tr: {
    themeToLight: "Açık",
    themeToDark: "Koyu",
    langSwitch: "EN",
    nav: {
      recent: "Son Eklenenler",
      projects: "Projeler",
      posts: "Yazılar",
      about: "Hakkımda"
    },
    sections: {
      recent: {
        title: "Son Eklenenler",
        subtitle: "En son eklenen algoritma projeleri ve blog yazıları."
      },
      projects: {
        title: "Projeler",
        subtitle: "Geliştirdiğim projeler ve interaktif araçlar."
      },
      posts: {
        title: "Yazılar",
        subtitle: "Teknik notlar ve blog yazıları."
      },
      about: {
        title: "Hakkımda",
        subtitle: "Kısa tanıtım ve iletişim bağlantıları."
      }
    },
    typeLabels: {
      project: "Proje",
      post: "Yazı"
    },
    actions: {
      project: "Projeyi aç →",
      post: "Yazıyı oku →",
      back: "← Geri",
      github: "GitHub ↗",
      demo: "Canlı Demo ↗"
    },
    states: {
      loading: "Yükleniyor...",
      empty: "Henüz içerik eklenmemiş.",
      notFoundTitle: "Sayfa bulunamadı",
      notFoundBody: "Aradığın içerik bulunamadı veya taşınmış olabilir.",
      loadError: "İçerik yüklenemedi. Dosya yolunu veya yerel sunucu bağlantısını kontrol et."
    }
  },
  en: {
    themeToLight: "Light",
    themeToDark: "Dark",
    langSwitch: "TR",
    nav: {
      recent: "Recent",
      projects: "Projects",
      posts: "Posts",
      about: "About"
    },
    sections: {
      recent: {
        title: "Recent",
        subtitle: "Latest algorithm projects and technical writing."
      },
      projects: {
        title: "Projects",
        subtitle: "Selected projects and interactive tools."
      },
      posts: {
        title: "Posts",
        subtitle: "Technical notes and articles."
      },
      about: {
        title: "About",
        subtitle: "Short bio and contact links."
      }
    },
    typeLabels: {
      project: "Project",
      post: "Post"
    },
    actions: {
      project: "Open project →",
      post: "Read post →",
      back: "← Back",
      github: "GitHub ↗",
      demo: "Live Demo ↗"
    },
    states: {
      loading: "Loading...",
      empty: "No entries yet.",
      notFoundTitle: "Page not found",
      notFoundBody: "The page you are looking for does not exist.",
      loadError: "Failed to load content. Check the file path or local server."
    }
  }
};

const ICONS = {
  sun: '<svg class="control-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>',
  moon: '<svg class="control-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>',
  github: '<svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"></path></svg>',
  linkedin: '<svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"></path></svg>'
};

const state = {
  theme: "dark",
  lang: "tr",
  manifest: null,
  markdownCache: new Map(),
  lastListView: "recent",
  renderSequence: 0
};

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeUrl(url) {
  if (typeof url !== "string") {
    return "";
  }
  const trimmed = url.trim();
  if (!trimmed) {
    return "";
  }
  if (/^(https?:|mailto:)/i.test(trimmed)) {
    return trimmed;
  }
  if (trimmed.startsWith("#") || trimmed.startsWith("./") || trimmed.startsWith("../")) {
    return trimmed;
  }
  if (/^[a-zA-Z0-9_-][a-zA-Z0-9_./-]*$/.test(trimmed)) {
    return trimmed;
  }
  return "";
}

function toRelativeFetchPath(filePath) {
  const cleaned = String(filePath || "").trim().replace(/^\/+/, "");
  if (!cleaned) {
    return "";
  }
  if (cleaned.startsWith("./") || cleaned.startsWith("../")) {
    return cleaned;
  }
  return "./" + cleaned;
}

function formatEmphasis(text) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function formatInlineMarkdown(raw) {
  const htmlTokens = [];
  const stash = (html) => {
    const index = htmlTokens.push(html) - 1;
    return "\u0000T" + index + "\u0000";
  };

  let text = String(raw || "").replace(/\u0000/g, "");

  text = text.replace(/`([^`]+)`/g, (_, code) => {
    return stash("<code>" + escapeHtml(code) + "</code>");
  });

  text = text.replace(/\\([\\`*_{}\[\]()#+\-.!])/g, (_, ch) => {
    return stash(escapeHtml(ch));
  });

  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, url) => {
    const safe = sanitizeUrl(url);
    const safeAlt = escapeHtml(alt);
    if (!safe) {
      return stash(safeAlt);
    }
    return stash('<img src="' + escapeHtml(safe) + '" alt="' + safeAlt + '" loading="lazy">');
  });

  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
    const safe = sanitizeUrl(url);
    const formattedLabel = formatEmphasis(escapeHtml(label));
    if (!safe) {
      return stash(formattedLabel);
    }
    const externalAttrs = /^https?:\/\//i.test(safe)
      ? ' target="_blank" rel="noopener noreferrer"'
      : "";
    return stash('<a href="' + escapeHtml(safe) + '"' + externalAttrs + ">" + formattedLabel + "</a>");
  });

  text = formatEmphasis(escapeHtml(text));

  for (let pass = 0; pass < 3 && text.includes("\u0000T"); pass += 1) {
    text = text.replace(/\u0000T(\d+)\u0000/g, (_, index) => htmlTokens[Number(index)]);
  }

  return text;
}

function parseMarkdown(markdown) {
  const lines = String(markdown || "").replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed.startsWith("```")) {
      const rawLang = trimmed.slice(3).trim().split(/\s+/)[0] || "";
      const cleanLang = rawLang.replace(/[^a-zA-Z0-9_-]/g, "");
      const langClass = cleanLang ? ' class="language-' + cleanLang + '"' : "";
      const codeLines = [];
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }
      if (index < lines.length) {
        index += 1;
      }
      blocks.push("<pre><code" + langClass + ">" + escapeHtml(codeLines.join("\n")) + "</code></pre>");
      continue;
    }

    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      blocks.push("<hr>");
      index += 1;
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      blocks.push("<h" + level + ">" + formatInlineMarkdown(headingMatch[2]) + "</h" + level + ">");
      index += 1;
      continue;
    }

    if (trimmed.startsWith(">")) {
      const quoteLines = [];
      while (index < lines.length && lines[index].trim().startsWith(">")) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }
      blocks.push("<blockquote><p>" + formatInlineMarkdown(quoteLines.join(" ")) + "</p></blockquote>");
      continue;
    }

    if (/^[-*+]\s+/.test(trimmed)) {
      const items = [];
      while (index < lines.length && /^[-*+]\s+/.test(lines[index].trim())) {
        items.push("<li>" + formatInlineMarkdown(lines[index].trim().replace(/^[-*+]\s+/, "")) + "</li>");
        index += 1;
      }
      blocks.push("<ul>" + items.join("") + "</ul>");
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push("<li>" + formatInlineMarkdown(lines[index].trim().replace(/^\d+\.\s+/, "")) + "</li>");
        index += 1;
      }
      blocks.push("<ol>" + items.join("") + "</ol>");
      continue;
    }

    const paragraphLines = [trimmed];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].trim().startsWith("```") &&
      !/^(-{3,}|\*{3,}|_{3,})$/.test(lines[index].trim()) &&
      !/^(#{1,3})\s+/.test(lines[index].trim()) &&
      !lines[index].trim().startsWith(">") &&
      !/^[-*+]\s+/.test(lines[index].trim()) &&
      !/^\d+\.\s+/.test(lines[index].trim())
    ) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }
    blocks.push("<p>" + formatInlineMarkdown(paragraphLines.join(" ")) + "</p>");
  }

  return blocks.join("\n");
}

function pickLocalized(value, lang) {
  if (typeof value === "string") {
    return value;
  }
  if (!value || typeof value !== "object") {
    return "";
  }
  const fallback = lang === "tr" ? "en" : "tr";
  if (typeof value[lang] === "string" && value[lang].trim()) {
    return value[lang];
  }
  if (typeof value[fallback] === "string" && value[fallback].trim()) {
    return value[fallback];
  }
  return "";
}

function sortItemsByDate(items) {
  return [...(items || [])].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
}

function parseRoute(hash) {
  const cleaned = String(hash || "")
    .replace(/^#/, "")
    .replace(/^\/+/, "")
    .replace(/\/+$/, "");

  if (!cleaned || cleaned === "recent") {
    return { view: "recent" };
  }
  if (cleaned === "projects" || cleaned === "posts" || cleaned === "about") {
    return { view: cleaned };
  }

  const parts = cleaned.split("/");
  if (parts.length === 2 && (parts[0] === "projects" || parts[0] === "posts") && parts[1]) {
    try {
      return {
        view: "detail",
        type: parts[0] === "projects" ? "project" : "post",
        slug: decodeURIComponent(parts[1])
      };
    } catch (error) {
      return { view: "not-found" };
    }
  }

  return { view: "not-found" };
}

function resolveItemAction(item, lang) {
  const contentPath = pickLocalized(item && item.content, lang);
  const routePrefix = item && item.type === "project" ? "#/projects/" : "#/posts/";
  if (contentPath) {
    return {
      href: routePrefix + encodeURIComponent(item.slug),
      external: false
    };
  }
  const links = (item && item.links) || {};
  const externalCandidate = sanitizeUrl(links.demo || links.github || "");
  if (externalCandidate && /^https?:\/\//i.test(externalCandidate)) {
    return {
      href: externalCandidate,
      external: true
    };
  }
  return {
    href: routePrefix + encodeURIComponent(item.slug),
    external: false
  };
}

function formatDate(dateString, lang) {
  const match = String(dateString || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) {
    return escapeHtml(dateString || "");
  }
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
  return new Intl.DateTimeFormat(lang === "tr" ? "tr-TR" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }).format(date);
}

function readStorage(key, allowed, fallback) {
  try {
    const value = localStorage.getItem(key);
    if (allowed.includes(value)) {
      return value;
    }
  } catch (error) { }
  return fallback;
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) { }
}

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  writeStorage(THEME_KEY, theme);
  renderControls();
}

function applyLanguage(lang) {
  state.lang = lang;
  document.documentElement.setAttribute("lang", lang);
  writeStorage(LANG_KEY, lang);
  renderShell();
  renderRoute();
}

function renderControls() {
  const copy = COPY[state.lang];
  const langButton = document.getElementById("lang-toggle");
  const themeButton = document.getElementById("theme-toggle");

  if (langButton) {
    langButton.textContent = copy.langSwitch;
  }
  if (themeButton) {
    const isDark = state.theme === "dark";
    const icon = isDark ? ICONS.sun : ICONS.moon;
    const label = isDark ? copy.themeToLight : copy.themeToDark;
    themeButton.innerHTML = icon + "<span>" + escapeHtml(label) + "</span>";
  }
}

function renderSidebarMeta() {
  if (!state.manifest) {
    return;
  }
  const profile = state.manifest.profile || {};
  const nameEl = document.getElementById("brand-name");
  const bioEl = document.getElementById("brand-bio");
  const socialEl = document.getElementById("social-links");

  if (nameEl && profile.name) {
    nameEl.textContent = profile.name;
    document.title = profile.name;
  }
  if (bioEl) {
    bioEl.textContent = pickLocalized(profile.bio, state.lang);
  }
  if (socialEl) {
    const links = Array.isArray(profile.links) ? profile.links : [];
    socialEl.innerHTML = links
      .map((link) => {
        const safeUrl = sanitizeUrl(link.url);
        if (!safeUrl) {
          return "";
        }
        const icon = ICONS[link.icon] || "";
        return (
          '<a class="social-link" href="' +
          escapeHtml(safeUrl) +
          '" target="_blank" rel="noopener noreferrer">' +
          icon +
          "<span>" +
          escapeHtml(link.label || "") +
          " ↗</span></a>"
        );
      })
      .join("");
  }
}

function renderNav(activeView) {
  const navEl = document.getElementById("nav-list");
  if (!navEl) {
    return;
  }
  const copy = COPY[state.lang];
  const items = (state.manifest && state.manifest.items) || [];
  const projectCount = items.filter((item) => item.type === "project").length;
  const postCount = items.filter((item) => item.type === "post").length;

  const navItems = [
    { key: "recent", href: "#/recent", label: copy.nav.recent, count: null },
    { key: "projects", href: "#/projects", label: copy.nav.projects, count: projectCount },
    { key: "posts", href: "#/posts", label: copy.nav.posts, count: postCount },
    { key: "about", href: "#/about", label: copy.nav.about, count: null }
  ];

  navEl.innerHTML = navItems
    .map((entry) => {
      const isActive = activeView === entry.key;
      const countBadge =
        entry.count !== null ? '<span class="nav-count">' + entry.count + "</span>" : "";
      return (
        '<li><a class="nav-item' +
        (isActive ? " is-active" : "") +
        '" href="' +
        entry.href +
        '"' +
        (isActive ? ' aria-current="page"' : "") +
        "><span>" +
        escapeHtml(entry.label) +
        "</span>" +
        countBadge +
        "</a></li>"
      );
    })
    .join("");
}

function renderShell() {
  renderControls();
  renderSidebarMeta();
}

function buildTagLabel(item, lang) {
  const copy = COPY[lang];
  const category = item.type === "project" ? copy.typeLabels.project : copy.typeLabels.post;
  const tagText = pickLocalized(item.tag, lang);
  if (!tagText) {
    return category;
  }
  return category + " · " + tagText;
}

function renderFeedList(viewKey, items) {
  const mainEl = document.getElementById("main-content");
  const copy = COPY[state.lang];
  const section = copy.sections[viewKey];

  const headerHtml =
    '<header class="section-header">' +
    '<h1 class="section-title">' +
    escapeHtml(section.title) +
    "</h1>" +
    '<p class="section-subtitle">' +
    escapeHtml(section.subtitle) +
    "</p>" +
    "</header>";

  if (!items.length) {
    mainEl.innerHTML =
      headerHtml + '<p class="status-message">' + escapeHtml(copy.states.empty) + "</p>";
    return;
  }

  const listHtml = items
    .map((item) => {
      const title = pickLocalized(item.title, state.lang);
      const summary = pickLocalized(item.summary, state.lang);
      const tag = buildTagLabel(item, state.lang);
      const action = resolveItemAction(item, state.lang);
      const actionLabel =
        item.type === "project" ? copy.actions.project : copy.actions.post;
      const linkAttrs = action.external
        ? ' target="_blank" rel="noopener noreferrer"'
        : "";
      const href = escapeHtml(action.href);

      return (
        '<li class="feed-item">' +
        '<div class="feed-item-header">' +
        '<h2 class="feed-item-title"><a class="feed-item-title-link" href="' +
        href +
        '"' +
        linkAttrs +
        ">" +
        escapeHtml(title) +
        "</a></h2>" +
        '<span class="tag-badge">' +
        escapeHtml(tag) +
        "</span>" +
        "</div>" +
        '<p class="feed-item-summary">' +
        escapeHtml(summary) +
        "</p>" +
        '<a class="action-link" href="' +
        href +
        '"' +
        linkAttrs +
        ">" +
        escapeHtml(actionLabel) +
        "</a>" +
        "</li>"
      );
    })
    .join("");

  mainEl.innerHTML = headerHtml + '<ul class="feed-list">' + listHtml + "</ul>";
}

async function fetchMarkdown(relativePath) {
  const normalized = toRelativeFetchPath(relativePath);
  if (!normalized) {
    return "";
  }
  if (state.markdownCache.has(normalized)) {
    return state.markdownCache.get(normalized);
  }
  const response = await fetch(normalized);
  if (!response.ok) {
    throw new Error("HTTP " + response.status);
  }
  const text = await response.text();
  state.markdownCache.set(normalized, text);
  return text;
}

async function renderAboutView(sequence) {
  const mainEl = document.getElementById("main-content");
  const copy = COPY[state.lang];
  const section = copy.sections.about;
  const headerHtml =
    '<header class="section-header">' +
    '<h1 class="section-title">' +
    escapeHtml(section.title) +
    "</h1>" +
    '<p class="section-subtitle">' +
    escapeHtml(section.subtitle) +
    "</p>" +
    "</header>";

  mainEl.innerHTML =
    headerHtml + '<p class="status-message">' + escapeHtml(copy.states.loading) + "</p>";

  const filePath = pickLocalized(state.manifest && state.manifest.about, state.lang);
  try {
    const markdown = await fetchMarkdown(filePath);
    if (sequence !== state.renderSequence) {
      return;
    }
    mainEl.innerHTML =
      headerHtml + '<article class="markdown-body">' + parseMarkdown(markdown) + "</article>";
  } catch (error) {
    if (sequence !== state.renderSequence) {
      return;
    }
    mainEl.innerHTML =
      headerHtml + '<p class="status-message">' + escapeHtml(copy.states.loadError) + "</p>";
  }
}

async function renderDetailView(item, sequence) {
  const mainEl = document.getElementById("main-content");
  const copy = COPY[state.lang];
  const title = pickLocalized(item.title, state.lang);
  const tag = buildTagLabel(item, state.lang);
  const backTarget =
    state.lastListView === "recent" ||
      state.lastListView === "projects" ||
      state.lastListView === "posts"
      ? "#/" + state.lastListView
      : item.type === "project"
        ? "#/projects"
        : "#/posts";

  const linkButtons = [];
  if (item.links) {
    const githubUrl = sanitizeUrl(item.links.github || "");
    const demoUrl = sanitizeUrl(item.links.demo || "");
    if (githubUrl && /^https?:\/\//i.test(githubUrl)) {
      linkButtons.push(
        '<a class="detail-link-button" href="' +
        escapeHtml(githubUrl) +
        '" target="_blank" rel="noopener noreferrer">' +
        escapeHtml(copy.actions.github) +
        "</a>"
      );
    }
    if (demoUrl && /^https?:\/\//i.test(demoUrl)) {
      linkButtons.push(
        '<a class="detail-link-button" href="' +
        escapeHtml(demoUrl) +
        '" target="_blank" rel="noopener noreferrer">' +
        escapeHtml(copy.actions.demo) +
        "</a>"
      );
    }
  }

  const linksHtml = linkButtons.length
    ? '<div class="detail-links">' + linkButtons.join("") + "</div>"
    : "";

  const headerHtml =
    '<a class="detail-back" href="' +
    backTarget +
    '">' +
    escapeHtml(copy.actions.back) +
    "</a>" +
    '<header class="detail-header">' +
    '<h1 class="detail-title">' +
    escapeHtml(title) +
    "</h1>" +
    '<div class="detail-meta">' +
    '<span class="detail-date">' +
    escapeHtml(formatDate(item.date, state.lang)) +
    "</span>" +
    '<span class="tag-badge">' +
    escapeHtml(tag) +
    "</span>" +
    "</div>" +
    linksHtml +
    "</header>";

  const filePath = pickLocalized(item.content, state.lang);
  if (!filePath) {
    const summary = pickLocalized(item.summary, state.lang);
    mainEl.innerHTML =
      headerHtml + '<article class="markdown-body"><p>' + escapeHtml(summary) + "</p></article>";
    return;
  }

  mainEl.innerHTML =
    headerHtml + '<p class="status-message">' + escapeHtml(copy.states.loading) + "</p>";

  try {
    const markdown = await fetchMarkdown(filePath);
    if (sequence !== state.renderSequence) {
      return;
    }
    mainEl.innerHTML =
      headerHtml + '<article class="markdown-body">' + parseMarkdown(markdown) + "</article>";
  } catch (error) {
    if (sequence !== state.renderSequence) {
      return;
    }
    mainEl.innerHTML =
      headerHtml + '<p class="status-message">' + escapeHtml(copy.states.loadError) + "</p>";
  }
}

function renderNotFound() {
  const mainEl = document.getElementById("main-content");
  const copy = COPY[state.lang];
  mainEl.innerHTML =
    '<a class="detail-back" href="#/recent">' +
    escapeHtml(copy.actions.back) +
    "</a>" +
    '<header class="section-header">' +
    '<h1 class="section-title">' +
    escapeHtml(copy.states.notFoundTitle) +
    "</h1>" +
    '<p class="section-subtitle">' +
    escapeHtml(copy.states.notFoundBody) +
    "</p>" +
    "</header>";
}

function renderRoute() {
  if (!state.manifest) {
    return;
  }
  state.renderSequence += 1;
  const sequence = state.renderSequence;
  const route = parseRoute(window.location.hash);
  const sortedItems = sortItemsByDate(state.manifest.items || []);

  if (route.view === "recent") {
    state.lastListView = "recent";
    renderNav("recent");
    renderFeedList("recent", sortedItems);
    return;
  }

  if (route.view === "projects") {
    state.lastListView = "projects";
    renderNav("projects");
    renderFeedList(
      "projects",
      sortedItems.filter((item) => item.type === "project")
    );
    return;
  }

  if (route.view === "posts") {
    state.lastListView = "posts";
    renderNav("posts");
    renderFeedList(
      "posts",
      sortedItems.filter((item) => item.type === "post")
    );
    return;
  }

  if (route.view === "about") {
    renderNav("about");
    renderAboutView(sequence);
    return;
  }

  if (route.view === "detail") {
    const match = sortedItems.find(
      (item) => item.type === route.type && item.slug === route.slug
    );
    renderNav(route.type === "project" ? "projects" : "posts");
    if (!match) {
      renderNotFound();
      return;
    }
    renderDetailView(match, sequence);
    return;
  }

  renderNav("");
  renderNotFound();
}

async function initApp() {
  state.theme = readStorage(THEME_KEY, ["dark", "light"], "dark");
  state.lang = readStorage(LANG_KEY, ["tr", "en"], "tr");

  document.documentElement.setAttribute("data-theme", state.theme);
  document.documentElement.setAttribute("lang", state.lang);
  renderControls();

  const langButton = document.getElementById("lang-toggle");
  const themeButton = document.getElementById("theme-toggle");

  if (langButton) {
    langButton.addEventListener("click", () => {
      applyLanguage(state.lang === "tr" ? "en" : "tr");
    });
  }
  if (themeButton) {
    themeButton.addEventListener("click", () => {
      applyTheme(state.theme === "dark" ? "light" : "dark");
    });
  }

  window.addEventListener("hashchange", () => {
    renderRoute();
    window.scrollTo({ top: 0, behavior: "instant" });
  });

  const mainEl = document.getElementById("main-content");
  if (mainEl) {
    mainEl.innerHTML =
      '<p class="status-message">' + escapeHtml(COPY[state.lang].states.loading) + "</p>";
  }

  try {
    const response = await fetch("./content/index.json");
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }
    state.manifest = await response.json();
    renderShell();
    renderRoute();
  } catch (error) {
    if (mainEl) {
      mainEl.innerHTML =
        '<p class="status-message">' + escapeHtml(COPY[state.lang].states.loadError) + "</p>";
    }
  }
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", initApp);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    escapeHtml,
    sanitizeUrl,
    parseMarkdown,
    pickLocalized,
    sortItemsByDate,
    parseRoute,
    resolveItemAction
  };
}

