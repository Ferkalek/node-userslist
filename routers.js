const path = require('path');
const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        fs.readFile(
            path.join(__dirname, 'view', 'index.html'),
            'utf-8',
            (err, content) => {
                if (err) {
                    throw new Error(err);
                }

                res.end(content);
            }
        );
    } else if (url === '/users') {
        fs.readFile(
            path.join(__dirname, 'view', 'users.html'),
            'utf-8',
            (err, content) => {
                if (err) {
                    throw new Error(err);
                }

                res.end(content);
            }
        );
    } else if (url === '/create-user') {
        fs.readFile(
            path.join(__dirname, 'view', 'create-user.html'),
            'utf-8',
            (err, content) => {
                if (err) {
                    throw new Error(err);
                }

                res.end(content);
            }
        );
    } else if (url === '/add-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });

        return req.on('end', () => {
            fs.readFile('users.txt', (err, data) => {
                if (err) {
                    // TODO need to add show error or revert on another page
                    console.log('----', err);
                    return
                };
                body.push(data);

                const parsData = Buffer.concat(body).toString();
                const userName = parsData.replace('user=', '&'); 

                fs.writeFile('users.txt', userName, err => {
                    res.statusCode = 302;
                    res.setHeader('Location', '/');
                    return res.end();
                });
            });
        });
    }
};

module.exports = requestHandler;