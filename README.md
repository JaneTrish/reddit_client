# Reddit Client

This is a React application that uses reddit json API.

## Overview

The application is a mini reddit client that fetches and displays 26 most popular posts from Reddit when the page first loads. 
A user can search reddit for a specific post or filter posts by categories.

Toggle dark/light mode is also available.

## API features

Since an undocumented **Reddit JSON API** (https://github.com/reddit-archive/reddit/wiki/JSON) was used for this project, there are a couple of things to note:
1. A user can only search and view posts and comments without interacting with them. 
2. Some graphic objects (like pictures from reddit gallery or embedded images/videos etc) can not be displayed in posts due to limitations. In these cases a link to the official website is displayed in the post.
