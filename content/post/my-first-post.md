---
title: "用 github page 來架設部落格"
tags:
  - github
  - hugo 
date: 2018-04-19T22:47:56+08:00
draft: true
---

最近將服務都移過去 linode 上面，因為受限於選擇的方案儲存空間不夠，所以把腦筋動到
<username>.github.io 上面 ...

<!--more-->

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

# theme

hugo 有許多主題可以用： https://themes.gohugo.io/

試了幾個以後看到這篇文章：https://qiita.com/bake0937/items/e0914efbd9434be474a4

覺得其中介紹到的 tranquilpeak 還不錯，所以就來試試看

{{< codeblock lang="bash" >}}
git submodule add https://github.com/kakawait/hugo-tranquilpeak-theme.git themes/hugo-tranquilpeak-theme
{{</ codeblock >}}


再來就是修改 config.toml，當然是先複製 exampleSite 裡面的 config.toml 來用：

{{< codeblock lang="bash" >}}
cp themes/hugo-tranquilpeak-theme/exampleSite/config.toml ./
vim config.toml
{{</ codeblock >}}


設定檔修改完以後，隨便新增一個文章

{{< codeblock lang="bash" >}}
hugo new posts/my-first-post.md
{{</ codeblock >}}

最後啟動 localhost 的 server

{{< codeblock lang="bash" >}}
hugo server -D
{{</ codeblock >}}

恰啦～

到這一步已經完成一大半了，剩下把靜態頁面推到 github 就完成了。


{{< codeblock lang="go" >}}
package main

import "fmt"

func main() {
    fmt.Println("Hello world")
}
{{< /codeblock >}}
