# Node YTDL Dockerized

A Dockered web-server designed to be a fetchable application which returns a json payload.

## Legal
You must only use this application when archiving content you have explicit legal rights too.

## Pull from Docker
```bash
Docker pull mrburtuk/ytdl:latest
```

## Fetch or Node-Fetch Usage

```javascript
let uri = "https://www.youtube.com/watch?v=bM7SZ5SBzyY"
let url = "https://yourdomain.com/fetch?url="
fetch(url + uri)
    .then(response => { return response.json() })
    .then(console.log)
```

