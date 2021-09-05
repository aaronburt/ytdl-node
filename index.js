const youtubedl = require('youtube-dl-exec')
const ytdl_options = require('./ytdl_options')
const express = require('express')
const app = express()

app.get('/fetch', (req, res, next) => {
    if(req.query.id){
        let videoSrc = req.query.id.toString();
        req.query.format ? ytdl_options["format"] = req.query.format : false;
        youtubedl(videoSrc, ytdl_options).then(response => { res.send(response) }).catch(error => { res.sendStatus(400) });
    } else {
        res.sendStatus(400)
    }
})

app.get('*', (req, res, next) => {
    res.sendStatus(404)
})

app.listen(80, () => { console.log("[Express] started on port 80") })