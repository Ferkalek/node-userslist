const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write(`
            <html>
                <head>
                    <title>Load home page</title>
                </head>
                <body>
                    <h1>Load home page</h1>
                    <form method="POST" action="/send-message">
                        <div>
                            <input type="text" name="message">
                        </div>
                        <button type="submit">Send message</button>
                    </form>
                </body>
            </html>
        `);
        return res.end();
    }

    if (url === '/send-message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log('----> chunk', chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsBody = Buffer.concat(body).toString();
            console.log('----> parsBody', parsBody);
            const message = parsBody.split('=')[1];

            // you can use writeFileSync next block that in the err must be after method "on"
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write(`
            <html>
                <head>
                    <title>Message page</title>
                </head>
                <body>
                    <h1>Your message was sent</h1>
                    <p><a href="/">Go home</a></p>
                </body>
            </html>
        `);
    res.end();
    
});

server.listen(3001);