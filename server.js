const express = require('express')
const app = express()
const port = 3000
const config = require('./config/config.json')

var GitHub = require('github-api');

app.use(express.static('../pro-git'));

app.get("/", function(req, res) {
    res.render("./index.html");
});

app.listen(port, () => console.log(`pro-git app listening on port ${port}!`))


var gh = new GitHub({
    username: config.USERNAME,
    token: config.TOKEN
});

app.get('/user', function(req, res, next) {
    var me = gh.getUser();
    me.getProfile().then(function({ data: respJson }) {
        res.json(respJson);
    })
});

app.get('/modules', function(req, res, next) {
    var issues = gh.getIssues(config.USER, config.REPO)

    issues.listLabels({}).then(function({ data: respJson }) {
        res.json(respJson);
    })
});