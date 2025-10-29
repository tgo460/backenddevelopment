require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

const githubData = {
  "login": "tgo460",
  "id": 131740706,
  "node_id": "U_kgDOB9o0Ig",
  "avatar_url": "https://avatars.githubusercontent.com/u/131740706?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/tgo460",
  "html_url": "https://github.com/tgo460",
  "followers_url": "https://api.github.com/users/tgo460/followers",
  "following_url": "https://api.github.com/users/tgo460/following{/other_user}",
  "gists_url": "https://api.github.com/users/tgo460/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/tgo460/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/tgo460/subscriptions",
  "organizations_url": "https://api.github.com/users/tgo460/orgs",
  "repos_url": "https://api.github.com/users/tgo460/repos",
  "events_url": "https://api.github.com/users/tgo460/events{/privacy}",
  "received_events_url": "https://api.github.com/users/tgo460/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 14,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-04-25T05:04:07Z",
  "updated_at": "2025-10-29T03:58:54Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("Hello Ningappa");
})


app.get('/login', (req, res) => {
    res.send('<h1>Please Login At Ningappa.com</h1>');
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai Aur Code</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
