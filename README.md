# Lab Week09 Boilerplate
In the lab exercise, there were some confusing points about api.js and app.js. This boilerplate (template) complicates a few things, but also cleans up a few things.

## Structure
### server.js (New file)
The sole purpose of this file is to run the app. So we specify in our `package.json` that to run our project, do `node server`. We have this as a separate file from `app.js` because we want to be able to test `app.js` (without leaving any open processes hanging after the tests). For more info see "Seperate you app and server" in this article: http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/ 

### app.js
This file now defines the Express "app" and is responsible for taking requests and dealing with them. We also introduce the `app.use(...)` function that allows us to define routes in another file and redirect the queries to that file, see

```javascript
const express = require("express");
const app = express();
const api = require("./src/api.js");

app.use("/api", api);
...
```

We are saying that any request to "/api" should be handled by the api.js file. Note that this changes our API endpoint to use `/api/greeting/some_name` (not simply `/greeting/some_name`).

### src/api.js
Here we no longer create an Express app, but create a new express Router and define what that router should handle. This is the logic that our update `app.js` now uses.

Here you will need to make some changes to get the URL [localhost:3000/api/greeting/Diana][http://localhost:3000/api/greeting/Diana] return an object (in JSON) that looks like

```json
{
  "greeting": "Hello Diana!"
}
```

