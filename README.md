# Reddit Client

This is a React application that uses Reddit JSON API.
Visit the link to check it out: https://my-mini-reddit.netlify.app/

##### For some reason the app might not work properly in Mozilla browser and I haven't figured out the reason yet. Try opening in Chrome or other browsers instead.  

## Overview

The application is a mini reddit client that fetches and displays 26 most popular posts from Reddit on the initial load of the page. 
A user can search reddit for a specific post or filter posts by categories.

Toggle dark/light mode is also available.

## API features

Since an undocumented **Reddit JSON API** (https://github.com/reddit-archive/reddit/wiki/JSON) was used for this project, there are a couple of things to note:
1. No sign up or log in option is available.
2. Some graphic objects (like pictures from reddit gallery or embedded images/videos etc) can not be displayed in posts due to limitations. In these cases a link to the official website is displayed in the post.


