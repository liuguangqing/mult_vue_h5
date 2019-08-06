const cprocess = require('child_process')
let entryDir = process.argv[process.argv.length-1]
let cmd = 'npm run startdev -- --env.name=' + entryDir 
let dev = cprocess.exec(cmd, {detached: true} ,function(error, stdout, stderr) {
        if(error) console.log(error)   
})
dev.stdout.pipe(process.stdout)
dev.stderr.pipe(process.stderr)