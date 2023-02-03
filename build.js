import * as http from "http";
import {exec} from "child_process";

const requestListener = function(req, res) {
    console.log("start build");
    exec("npm ci && npm run build", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            res.writeHead(500);
            res.end("INTERNAL SERVER ERROR");
            return;
        }

        if (stderr) {
            console.log(`stderr: ${stderr}`);
            res.writeHead(500);
            res.end("INTERNAL SERVER ERROR");
            return;
        }

        console.log(`stdout: ${stdout}`);
    });
    res.writeHead(200);
    res.end("OK");
};

const host = process.env.HOST ?? "0.0.0.0";
const port = process.env.PORT ?? "8000";
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Build server listening on http://${host}:${port}`);
});