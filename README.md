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
- Clean Blog theme: updated a month ago, while the book was published a year and a half ago

Still, I got everything working.

## Chapter 04: Templating Engines

December 19, 2020

Copied contents of directory ch03 into directory ch04. 
When I tried to run th app I got an error, which forced me to delete and reinstall nodemon.

Four chapters in and I feel I already have a better understanding of Node.js than after 3 Zenva courses.

## Chapter 05: Introduction to MongoDB

December 21, 2020

Aha! The errors I get when copying the contents of the directory of a previous chapter, can be avoided when I exclude the node_modules directory.

After everythin was copied in `ch05`, then execute the following commands at the command line

```bash
npm init
npm install
npm audit fix
```

Found some typos in the code and got a warning when executing the `test.js` file.

```
DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor
```

## Chapter 06: Applying MongoDB to Our Project

December 22, 2020

In this chapter you learn how to post new articles, display a list with all the articles and display a single article.
Two thirds in to the chapter, the author suggests you try out adding a functioning search bar to the site. Wait! What?

