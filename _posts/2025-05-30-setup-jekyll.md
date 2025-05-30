---
layout: post
title: "jekyll_:D"
date: 2025-05-30
tags: [IT]
---
# Jekyll 網站檔案與模板細部細解

這篇教學適合新手理解 Jekyll 網站中各個檔案與資料夾的功能與運作邏輯，以及 Liquid 基礎語法結構。

---

##  基本 Jekyll 架構說明

###  `_includes/`

放置「可被其他 layout 引用」的 HTML 組件，像是：

* `head.html`：`<head>` 區塊內容 (meta / CSS)
* `header.html`：頁首對應导覽列
* `footer.html`：頁尾區域
* `icon-*.html`：圖示對應小組件

※ 使用方式：

```liquid
{% include header.html %}
```

---

###  `_layouts/`

定義頁面的模板。每種 page 會指定一種 layout：

* `default.html`：基礎模板
* `home.html`：首頁層級
* `page.html`：普通單頁 (About, Courses)
* `post.html`：博客單篇
* `tag.html`：標籤分類頁

※ 例如：

```yaml
---
layout: page
title: About Me
---
```

---

###  `_posts/`

放置 blog 文章 markdown 檔，格式:

```
YYYY-MM-DD-title.md
```

Jekyll 會自動處理為頁面

---

###  `assets/`

網頁靜態資源

* `css/`：自定義 CSS (e.g. `main.css`)
* `fonts/`：字體 (如 crayon.ttf 螢光粉絲風)
* `images/`：圖片

---

###  `tags/`

手動生成的 tag 分類頁面文件，配合 `tag.html` layout

```md
---
layout: tag
tag: normal
permalink: /tags/normal/
---
```

---

###  `_site/`

Jekyll build 後的靜態網頁資料夾，**不要手動編輯**，也不需上傳 GitHub

---

###  單一頁面

* `index.md`：首頁
* `about.md`：自我介紹
* `projects.md`：個人展示
* `courses.md`：教學說明

---

###  `_config.yml`

完整網站配置檔

* `baseurl` 或 `url` 執行線上有用
* `theme` 設定 (minima)
* `plugins` 使用套件 (e.g. seo-tag)
* `permalink` 檔名親和化

---

##  Liquid 語法

Jekyll 用 Liquid 實現資料進入與指示相關功能
基本關鍵詞:

* {% raw %}{% if %}{% endraw %}：條件
* {% raw %}{% for post in site.posts %}{% endraw %}：輸出部落格
* {% raw %}{{ page.title }}{% endraw %}：檢視形式表示
例如：

{% raw %}
    {% if post.tags %}
        {% for tag in post.tags %}
            <a href="/tags/{{ tag | slugify }}/">#{{ tag }}</a>
        {% endfor %}
    {% endif %}
{% endraw %}

---

##  執行流程概覽

1. 新增 md 檔作為頁面 / 文章
2. 指定 layout: post/page/home
3. layout.html 中 include header/footer/css
4. Jekyll 進行 build 產生 `_site/` 內容
5. Push 到 GitHub Pages
6. Done！

---
