import * as http from "http";
import {build} from 'vite'

let debounceTimeout;

function run() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        console.log(`[${(new Date()).toISOString()}] Running build...`);
        ; (async () => {
            await build({
                root: ".",
            })
            console.log(`[${(new Date()).toISOString()}] Done!`);
        })()
    }, 5000);
}

const requestListener = function(req, res) {
    console.log(`[${(new Date()).toISOString()}] Recieved request, waiting for debounce...`);
    try {
        run();
    } catch (error) {
        console.log(`[${(new Date()).toISOString()}] Error while building server: ${error}`);
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
    console.log(`[${(new Date()).toISOString()}] Build server listening on http://${host}:${port}`);
});


