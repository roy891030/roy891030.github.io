---
layout: post
title: "頤起來架站！"
date: 2025-05-30
tags: [IT]
---
# 架設 GitHub Pages 個人網站（`yourname.github.io`）完整教學筆記

這是一份針對使用 Jekyll 架設個人網站（如 yourname.github.io）的完整流程紀錄，適合日後查找與筆記回顧。

---

## # 一、環境安裝

### 1. 安裝 Homebrew（Mac 專用）

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 2. 安裝 Ruby（建議使用 `rbenv` 管理）

```bash
brew install rbenv
rbenv init
rbenv install 3.4.0
rbenv global 3.4.0
```

### 3. 安裝 Jekyll 所需元件

```bash
brew install ruby
sudo gem install bundler jekyll
```

---

## # 二、初始化網站專案

### 1. 使用 Jekyll 建立新網站

```bash
jekyll new my-portfolio
cd my-portfolio
bundle install
```

### 2. 啟動開發伺服器

```bash
bundle exec jekyll serve --livereload
```

瀏覽器打開：[http://localhost:4000](http://localhost:4000)

---

## # 三、GitHub Pages 發佈流程

### 1. 初始化 Git 並上傳

```bash
git init
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git add .
git commit -m "first commit"
git push -u origin main
```

### 2. 設定 `_config.yml`

```yml
theme: minima
baseurl: "" # 對於 user.github.io 網站應保持空白
url: "https://yourusername.github.io"
```

---

## # 四、進階自訂與調整

### 1. 複製主題 layout 到本地專案（以 minima 為例）

```bash
bundle info minima # 找出主題路徑
cp -r /path/to/minima/_layouts ./_layouts
cp -r /path/to/minima/_includes ./_includes
```

### 2. 修改 `_layouts/default.html` 加入自訂 CSS：

```html
<link rel="stylesheet" href="{{ "/assets/css/style.css" | relative_url }}">
```

### 3. 設定中文與蠟筆字體

在 `assets/css/style.scss` 加入：

```scss
@font-face {
  font-family: 'CrayonFont';
  src: url('/assets/fonts/crayon_1-1.ttf') format('truetype');
}

@font-face {
  font-family: 'ChineseFont';
  src: url('/assets/fonts/chinese.ttf') format('truetype');
}

body {
  font-family: 'CrayonFont', sans-serif;
}

/* 中文專用字體 */
html:lang(zh) body {
  font-family: 'ChineseFont', 'CrayonFont', sans-serif;
}
```

---

## # 五、自訂內容頁面與圖片

### 1. 建立新頁面如 `about.md`

```markdown
---
layout: page
title: About Me
permalink: /about/
---

<img src="/assets/images/photo.png" alt="Me" style="max-width: 300px; display: block; margin: 0 auto;" />
```

### 2. 縮小 Markdown 圖片尺寸

```html
<img src="/assets/images/image.png" style="max-width: 300px;" />
```

### 3. 強調句子像螢光筆：

```html
<span style="background-color: #fff3b0;">這句話有螢光效果</span>
```

---

## # 六、錯誤排除技巧

### 常見錯誤：`Unknown tag 'seo'`：

**解法**：表示你有使用 `jekyll-seo-tag` 卻沒裝插件。解法如下：

```ruby
# 在 Gemfile 加入：
gem 'jekyll-seo-tag'
```

並在 `_config.yml` 裡加：

```yml
plugins:
  - jekyll-seo-tag
```

---

## # 七、上傳與同步 GitHub Pages

### 每次更動後：

```bash
git add .
git commit -m "update content"
git push
```

---
