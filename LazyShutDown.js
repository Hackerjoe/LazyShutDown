const express = require('express')
const app = express()

app.get('/shutdown', function (req, res) {
    // On Windows Only ...
    const { spawn } = require('child_process');
    const bat = spawn('cmd.exe', ['/c', 'shutdown.bat']);

    // Log standard outs and errors.
    bat.stdout.on('data', (data) => {
        console.log(data.toString());
    });

    bat.stderr.on('data', (data) => {
        console.log(data.toString());
    });

    bat.on('exit', (code) => {
        console.log(`Child exited with code ${code}`);
    });
})

app.listen(3000, () => console.log('LazyShutDown app listening on port 3000!'))