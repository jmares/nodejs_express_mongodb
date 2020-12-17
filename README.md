# Beginning Node.js, Express and MongoDB Development

by Greg Lim, published by Greg Lim July 2019.

Started reading/studying this book on December 14, 2020.

This repo contains the exercises and examples of the book.

## Chapter 01: Introduction

December 14, 2020

## Chapter 02: Introduction to NPM & Express

December 16, 2020

Similar to chapter 1, but now we created a web server with Express.

Had to add extra code to make the example work, because of an error:

```
The resource from "http://localhost:3000/css/index.css" was blocked due to MIME type mismatch (X-Content-Type-Options: nosniff)
The resource from "http://localhost:3000/js/index.js" was blocked due to MIME type mismatch (X-Content-Type-Options: nosniff)
```

```javascript
app.use(express.static(__dirname + "/public", {
    index: false, 
    immutable: true, 
    cacheControl: true,
    maxAge: "30d"
}));
```

## Chapter 03: Beginning Our Blog Project

December 17, 2020

After installing theme and node packages, node found 4 low severity vulnerabilities.
Used `npm audit fix`, which ook care of 3 of them. For the 4th I found conflicting solutions via Google, but as it is a low severity vulnerability I decided to leave it as it is.

I have no idea, why the problem wasn't resolved by using `npm audit fix` as I am still new to server-side JS. Is it because I use more recent versions than the ones used in the book?

- node: v12.18.3 vs v10.15.3
- npm:  v6.14.9 vs v6.4.1
- Clean Blog theme: updated a month ago, while book was published a year and a half ago

Still, I got everything working.

## Chapter 04: Templating Engines

## Chapter 05: Introduction to MongoDB

