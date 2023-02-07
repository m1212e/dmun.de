import * as http from "http";
import {build} from 'vite'

const requestListener = function(req, res) {
    ; (async () => {
        await build({
            root: ".",
        })
    })()
    res.writeHead(200);
    res.end("OK");
};

const host = process.env.HOST ?? "0.0.0.0";
const port = process.env.PORT ?? "8000";
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Build server listening on http://${host}:${port}`);
});


