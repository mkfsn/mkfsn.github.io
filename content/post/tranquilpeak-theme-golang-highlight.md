---
title: "tranquilpeak 主題中 golang 沒有 highlight"
date: 2018-08-19T00:36:19+08:00
tags:
- hugo
- tranquilpeak
- highlight
keywords:
- tech
draft: true
---

身為一個工程師，寫部落格文章最重要當然是要可以 highlight 程式碼，但沒想到
tranquilpeak 主題中使用的 highlight.js 竟然預設沒有把 golang 包進來。

<!--more-->

tranquilpeak 中 highlight 的方式有兩種：

1. highlight.js
2. prism.js (似乎在實驗中)

但是 highlight.js 預設沒有 golang，只有包含一些“常見”的語法

https://github.com/highlightjs/highlight.js/issues/1218

從 highlight.js 官網也可以看到 golang 沒有在 common 裡面：

https://highlightjs.org/download/


所以必須要另外去 include cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/go.min.js


所幸 tranquilpeak 有方法可以去載入其他 javascript

{{< codeblock lang="go" >}}
package main

import "fmt"

func main() {
    fmt.Println("Hello world")
}
{{< /codeblock >}}
