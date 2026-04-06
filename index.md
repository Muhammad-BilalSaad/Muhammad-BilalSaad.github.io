---
layout: default
title: "Home"
---

# Welcome to My Portfolio & Blog

Hello! I am **Muhammad Bilal Saad**, and this is my personal portfolio and blog.  

## Pages
- [About Me](/about)
- [My Journey](/journey)
- [Contact Me](/contact)

---

## Latest Articles
{% for post in site.posts limit:5 %}
### [{{ post.title }}]({{ post.url }})
{{ post.excerpt }}
{% endfor %}
