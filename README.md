# Facespace!

## What is Facespace?

## Goal

To create a site that will serve up Facespace! Oh, and learn a little more about Node, routing, EJS, and CSS along the way.

### MVP Functionality

- Users arrive at the homepage, and need to enter their name to "sign in."
- Access is granted if their name is found in the `users` array.
  - If the name entered is not recognized, it reloads the signin page.
- Once signed in, the homepage will show that user's Friendface page.
  - For now, the page will consist of the image of the user, as big and bold as yuor feel comfortable going.
  - A gallery of all of their friends.
  - Clicking on a friend's face, will take us to their Friendface page.

### Stretch Goals

- Ability to view all Faces that are not yet friends. (A button on the page labeled 'FFF' or 'Find Future Friends'.)
- Ability to add/remove friends faces.
- Adding/reomving a friend should also update the friend's page. \_It may look like that is happening already but don't be fooled. It ain't!
- Ability reorder your Friends (upvote/downvote?)

## Limitations

### Data Persistence

Because we don't have and form of data storage, we cannot persist changes when the server reloads. 🤔

---

## Setup

- `yarn install`
- `yarn dev` to launch the server.

### Server Endpoints

You will be creating the following endpoints.

| Endpoint    | Description                                                           |
| ----------- | --------------------------------------------------------------------- |
| `/`         | home/main page                                                        |
| `/signin`   | signin page                                                           |
| `/user/:id` | user page                                                             |
| `/getname`  | this is the endpoint that will receive the data from the signin form |
| `*`         | Don't forget to have a 404 page setup as well.                        |

### About the Data

There is `/data/users.js` file that contains an array of `user` objects.

```js
{
  id: '1008',
  name: 'Fletcher',
  friends: ['1006', '1007', '1009'],
  avatarUrl: '/images/profile-pics/000003.jpg',
},
```

- `friends` is an array of the `id`s of the people that user is currently friends with.
- In an effort, to start with _good_ data, I have created friendships.

Enough talk! Let's get started!

---

## The Workshop

### Exercise 1- The Sign in page

Our security system will be total crap, but will work for our purposes. True site security is too important for us to implement ourselves! When the time comes, we'll leverage code from experts in the field.

For this workshop, we're going to simply ask for the user's name and if it's in the users array, we'll assume that that is the person that is logging in.

#### 1.1 Create the endpoint

In `server.js` we need to have an endpoint that will receive requests for the signin page. This endpoint will call a function called `handleSignin`.

Here is the server file. Add the `/signin` endpoint and `handleSignin` function.

```diff
  'use strict';

  const express = require('express');
  const morgan = require('morgan');

  const { users } = require('./data/users');

  // declare the 404 function
  const handleFourOhFour = (req, res) => {
    res.status(404).send("I couldn't find what you're looking for.");
  };

+ const handleSignin = (req, res) => {
+   res.status(200).send('ok');
+ };

  // -----------------------------------------------------
  // server endpoints
  express()
    .use(morgan('dev'))
    .use(express.static('public'))
    .use(express.urlencoded({ extended: false }))
    .set('view engine', 'ejs')

    // endpoints
+  .get('/signin', handleSignin)

    // a catchall endpoint that will send the 404 message.
    .get('*', handleFourOhFour)

    .listen(8000, () => console.log('Listening on port 8000'));
```

This will allow us to "see" what is on the signin page... Nothing.

<img src="./__lecture/assets/signin_1.png" />

#### 1.2 Create the form

In `views/pages/`, create a new file called `signin.ejs`. Add the following `<form>` to the file.

```html
<%- include('../partials/header') %>
<div class="signin-page">
  <form method="get" action="/getname" class="signin-page__form">
    <label for="firstName" class="signin-page__form--label">First name</label>
    <input type="text" name="firstName" placeholder="Your first name" class="signin-page__form--input" />
    <button type="submit" class="signin-page__form--button">Submit</button>
  </form>
</div>
<%- include('../partials/footer') %>
```

#### 1.3 Render the signin page.

The form we've just added doesn't yet render on the `/signin` page. We need to tell `handleSign` to render that particular `ejs` page template.

```diff
  const handleSignin = (req, res) => {
-   res.status(200).send('ok');
+   res.status(200).render('pages/signin');
  };
```

<img src="./__lecture/assets/signin_2.png" />

#### 1.4 Receive the data from the form

Our form looks good but it doesn't yet do anything. We need the form to send the input to the server.

Notice that the form (in `signin.ejs`) has `action` attribute. That is the endpoint that the form will contact when a user submits the form. Let's create a `GET` endpoint that will receive the data from the form.

```js
.get('/getname', handleName)
````

Notice that the endpoint is calling a new function. We need to define that function above. _You can define it right after the `handleSignin` function._

```js
const handleName = (req, res) => {

}
```

This type of HTML form sends the data from the form as query parameters in the `req`uest.

1. Define a variable `firstName` and assign the value of `req.query.firstName`. You can also write a temporary `console.log()` to make sure that your function works and that you have access to the value of `firstName`.
2. Use the `firstName` to `find()` that user's data in `users.js`. That array is already imported and available to you. (See line 6 of `server.js`). 
3. If it exists assign it to the `currentUser` variable that is defined on line 8, and then redirect to the homepage.
4. If it doesn't exist, redirect to the signin page.

We can redirect the browser to an endpoint with the following code.

```js
res.redirect('/the-endpoint')
```

5. You should also return a status code to the browser.

```js
res.status(200) // when the request is successful
res.status(404) // when the request is not successful. In this case, the user was not found.
```

### Exercise 2 - The Profile Page

