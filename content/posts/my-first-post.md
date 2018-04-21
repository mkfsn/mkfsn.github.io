---
title: ""
date: 2018-04-19T22:47:56+08:00
draft: true
---

# Outline

最近將服務都移過去 linode 上面，因為受限於選擇的方案儲存空間不夠，所以把腦筋動到
<username>.github.io 上面 ...

很久之前有用過 python 寫的 static site generator - pelican，不過稍微 survey 一下
發現滿多人在用 hugo 的，於是就來嘗試看看。

# Installation

在 macOS 上面安裝很簡單：

```bash
brew install hugo
```

# mkfsn.github.io

因為想放到 Github pages 的 User or organization site，所以先切到對應的資料夾跟
git branch

```bash
cd /path/to/github.com/mkfsn/mkfsn.github.io
git checkout -b hugo
```

接著用 hugo 來幫我初始化整個 site

```bash
hugo new site ./
```

然後就會報錯：說資料夾不是空的 ... 

很好，所以一個無腦的解法是先創一個新的資料夾，再把東西從新增的資料夾搬出來

```bash
hugo new site hugo
mv hugo/* ./
rmdir hugo
```

接下來要改的東西有 config 跟 theme，首先先隨意抓個 theme 來瞧瞧

```bash
git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke
```

再來就是修改 config.toml


```bash
vim config.toml
```

設定檔修改完以後，隨便新增一個文章

```bash
hugo new posts/my-first-post.md
```

最後啟動 localhost 的 server

```bash
hugo server -D
```


```go

import "fmt"

func main() {
    fmt.Println("Hello world")
}

```
