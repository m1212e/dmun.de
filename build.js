import * as http from "http";
import {build} from 'vite'

const requestListener = function(req, res) {
    try {
        ; (async () => {
            await build({
                root: ".",
            })
        })()
    } catch (error) {
        console.log(`[${Date.now()}] Error while building server: ${error}`);
        res.writeHead(400);
        res.end("Internal server error");
        return;
    }
    res.writeHead(200);
    res.end("OK");
};

const host = process.env.HOST ?? "0.0.0.0";
const port = process.env.PORT ?? "8000";
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`[${Date.now()}] Build server listening on http://${host}:${port}`);
});


