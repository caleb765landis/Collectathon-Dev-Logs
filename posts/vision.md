---
title: "The Vision"
date: "2023-11-29"
prev: "introduction"
next: null
---

# Here's what I'm thinking.

The best way to convey what I want the application to be is by listing all of my ideas that I'll inevitably want to add. I can then organize these ideas into related modules, which will help plan each feature's priority and the order of how I want to implement them. Organizing the modules will also help design the application's UI and navigation to each feature. I've found that creating wireframes and doing some initial UX testing helps make sure that I've thoroughly thought through how the features will work together, as well as pinpoint any data that I might not have initially thought about needing to store. This ensures that I can have a solid plan and diagram for my database from the start.

Listing all these features at the beginning of the project also helps people who aren't directly working on the project (you) imagine my vision for the application, especially when I don't have any UI designs or very many features developed yet. For the rest of this article, I'll list out my initial features that I want to add, and I'll try to organize them into related modules. These modules will help all of us visualize how certain features are connected.

# Brainstorming a bunch of features.

So far, I think I have found three modules that each feature could fit into: Personal, Social, and Functional. Each module describes who/what each feature relates to the most. Personal Features will primarily help users manage and view information about their collections. These features are more for the user's benefit rather than sharing their collection with others. Speaking of which, that leads to the next module: Social Features. These features are all about sharing your collection, thoughts, and rankings with others. The last module is for Functional Features. These make the experience of using the app feel much more put together, but most of them aren't necessarily required for the MVP.

### Personal

- Add games to your collection.
- Organize your collection into lists.
  - Sort/filter lists by console, date completed, alphabetical order, etc.
- Make lists and specific games viewable privately or publicly.
- Have what you're currently playing readily available so you can manage that game quickly and easily.
  - Also make this private/public.
- Keep track of how long you’ve been playing a game with an in-app timer.
  - Having the currently playing feature is useful for keeping track of playtime because it allows you to quickly navigate to the timer when you load up your game.
- Rank and display your top 10 games on your profile.
  - Maybe rank your entire collection, too.
  - Or create custom rankings in general.
- See statistics about your collection.
- Write personal notes about each game.
  - Useful for keeping track of if the game is a gift from someone or maybe writing down quest information if the game doesn't have a good quests/waypoint menu system.
- Keep track of shelf storage locations for large physical libraries.
  - Great for collectors.

### Social

- Write reviews for games you’ve played.
  - Flag reviews as having spoilers for others reading your review.
- Create and share tier lists.
- Create custom lists posts.
  - Top Games of October/2023, Best Platformers, etc.
- Talk or read about games through discussions in forum posts.
  - Have sections for Tutorials, Spoiler/Spoiler-free Threads, Wikis, Rumors/Leaks?, Collectibles.
  - Have a News section in each game's forum or creating an entirely separate News feed?
- See friends’ collections, reviews, currently playing, tier lists, forum posts, custom lists, etc. in a Twitter-like feed.
  - Comment, Like, "Retweet", Share.
  - Have Following, Trending, and For You feeds?

### Functional

- Every game should have its own view where you can learn more about it.
  - Release date, available consoles, description, etc.
- Add custom games not in database.
  - Indies, Itch.io games, smaller games from platforms such as Roblox, Dreams, etc.
- Customize how your games are displayed.
  - Change cover arts, how they show up in your collection (Cover Art Only, Alternate Cover Arts.)
- Import libraries from Steam, Epic, etc.
  - Need to look into if there is an API to do this.
- Scan barcodes on your physical games.
  - Need to see how possible this is.
  - Makes cataloguing your physical collection easier.
  - Maybe good for verifying collector's editions?

# I'm just spitballing here.

I'm honestly having fun with just imagining more and more features that I could add to the application, but I also have to realize it's going to take a _very_ long time to actually implement all of these. Right now, it looks like the Personal module has the most features, but this actually may end up taking the least amount of time because they mostly just have CRUD functionality. The Social features are what are going to make the app actually interesting for others to use, but there is a lot of business, UX, and algorithm logic to think about with this module. The second half of the Functional features are there for if I really plan on working on this app as a platform and service in the future. They will be nice from a business perspective because they will really make it feel like a social media app.

In the end, I want to add all of the features in the Personal module at the very least so that I can actually start using the app myself. I may also add the first few features of the Social module just for fun! By that point I think I'd have a solid MVP and an application that I feel is complete enough for me to use and maybe pause development on.

I think this list has already given me a good idea of how I want to start planning how/when to implement each feature. In the next article, I want to briefly talk about how my application is similar and different than other products that are already currently available. This should hopefully show why my app will be unique, and it may be useful down the line for business reasons. Then we can get into the fun part of mocking up some designs for the UI!

We're moving forward! As always, if you have any feedback or suggestions, please let me know! I'll link my [personal contact page](https://portfolio-caleb765landis.vercel.app/contact/) so you can send me a message or reach out in other ways.

-Caleb
