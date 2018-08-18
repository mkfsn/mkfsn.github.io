---
title: "用 github page 來架設部落格"
tags:
  - github
  - hugo 
date: 2018-04-19T22:47:56+08:00
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

因為之前已經有用過 Github pages 來當作個人網站，所以這次還是一樣用
mkfsn.github.io 這個 repo 來當作主要的 repo。

目標是：

1. 除了 public 以外的 code 會 push 到 hugo branch
2. public 裡面的內容會 push 到 master branch


## hugo branch

所以先開一個 branch 叫做 hugo:

{{< codeblock lang="bash" >}}
cd /path/to/github.com/mkfsn/mkfsn.github.io
git checkout --orphan -b hugo
{{</ codeblock >}}

在 hugo branch 我們要忽略 pulbic 這個資料夾的所有東西

{{< codeblock lang="bash" >}}
echo "public" >> .gitignore
{{</ codeblock >}}


接著用 hugo 來幫我初始化整個 site

{{< codeblock lang="bash" >}}
hugo new site ./
{{</ codeblock >}}

然後就會報錯：說資料夾不是空的 ... 

很好，所以一個無腦的解法是先創一個新的資料夾，再把東西從新增的資料夾搬出來

```bash
hugo new site hugo
mv hugo/* ./
rmdir hugo
```

建立好以後，就是要想辦法把要 publish 出去的 public 推到 master 了。

## master branch

hugo 官方推薦使用 worktree (https://gohugo.io/hosting-and-deployment/hosting-on-github/#build-and-deployment):

{{< codeblock lang="bash" >}}
rm -rf public
git worktree add -B master public upstream/master
{{</ codeblock >}}

至於要怎麼 publish，會在最底下介紹。


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


# publish

hugo branch 的管理我就不多加描述，因為重點是要怎麼 publish 我的文章到
mkfsn.github.io。


其實還滿簡單的，就是把 public 資料夾一股腦兒的推到 master 就對了，所以可以利用以
下這個 script 來做到：

{{< codeblock lang="bash" title="deploy.sh" >}}
#!/bin/bash

hugo
cd public && git add --all && git commit -m "rebuilding site `date`" && cd ..
git push origin master
{{</ codeblock >}}

打完收工。

