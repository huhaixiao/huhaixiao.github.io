const process = require("process");
const path = require("path");
const fs = require("fs");
const childProcess = require('child_process');

const clientDir = path.resolve(process.cwd(), './apps/client/dist');
console.log('line: 5 ',process.cwd());
process.chdir(clientDir);
console.log(process.cwd());
console.log('line: 7 ',process.cwd());
childProcess.exec('git init', (error, stdout, stderr) => {
  console.log(stdout);
  childProcess.exec('git commit -am "update"', (error, stdout, stderr) => {
    console.log('...git add . ... start')
    console.log(error)
    console.log(stdout)
    console.log(stderr)
    console.log('...git add . ... end')
    childProcess.exec('git log', (error, stdout, stderr) => {
      console.log(stdout)
      childProcess.exec('git remote add origin git@github.com:huhaixiao/huhaixiao.github.io.git', (error, stdout, stderr) => {
        childProcess.exec('git checkout -b main', (error, stdout, stderr) => {
            childProcess.exec('git push origin HEAD -f', (error, stdout, stderr) => {
            console.log(stdout)
          })
        })
      })
    })
  })
})
