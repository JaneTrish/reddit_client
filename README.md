# Reddit Client

This is a React application that uses reddit json API.

## Overview

The application is a mini reddit client that fetches and displays 26 most popular posts from Reddit when the page first loads. 
A user can search reddit for a specific post or filter posts by categories.

Toggle dark/light mode is also available.

## API features

Since a **not official, simplified reddit API** was used for this project, there are a couple of things to note:
1. A user can't log in and interact with posts.
2. Some graphic objects (like pictures from reddit gallery or embedded images/videos etc) can not be displayed in posts due to restrictions of this API. In these cases a link to the official website is displayed in the post.
