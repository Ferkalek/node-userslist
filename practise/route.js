const fs = require('fs');

const top = `
<html><head><title>Practise</title></head><body>
<div>
    <span><a href="/">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;</span>
    <span><a href="/create-user">Create user</a>&nbsp;&nbsp;&nbsp;&nbsp;</span>
</div>
`;
const bottom = '</body></html>';
const form = `
<form action="/new-user" method="POST">
    <div>
        <input type="text" name="username" placeholder="Enter username">
    </div>
    <button type="submit">Create</button>
</form>
`;

const handlerRoute = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write(`${top}<h1>Home</h1>${bottom}`);
        return res.end();
    } else if (url === '/users') {
        res.write(`${top}<h1>Users</h1>${bottom}`);
        return res.end();
    } else if (url === '/create-user') {
        res.write(`${top}<h1>Create user</h1>${form}${bottom}`);
        return res.end();
    } else if (url === '/new-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsBody = Buffer.concat(body).toString();
            const newUser = parsBody.split('=')[1];
            console.log('create a new user', newUser);

            fs.writeFile('users.txt', newUser, err => {
                if (err) {
                    console.log('ERROR:', err);
                }

                res.statusCode = 302;
                res.setHeader('Location', '/users');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
};

module.exports = handlerRoute;