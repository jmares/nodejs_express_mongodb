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

## Chapter 04: Templating Engines

## Chapter 05: Introduction to MongoDB

