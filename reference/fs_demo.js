const fs = require('fs')
const path = require('path')

// Create folder
fs.mkdir(path.join(__dirname, 'test1'), { }, err => {
    if(err) throw err
    console.log('Folder created...')
})/**/

// Create and write to file
fs.writeFile(path.join(__dirname, '/test', '/hello.txt'), 'Hello World!', err => {
    if(err) throw err
    console.log('File written to...')
})

/*
// Create and write to file
fs.writeFile(path.join(__dirname, '/test', '/hello.txt'), 'Tuto NodeJs', err => {
    if(err) throw err
    console.log('File written to...')
})*/

// File append
/*fs.appendFile(path.join(__dirname, '/test', '/hello.txt'), ' Tuto NodeJs', err => {
    if(err) throw err
    console.log('File written to...')
})

fs.writeFile(path.join(__dirname, '/test', '/hello.txt'), 'Hello World!', err => {
    if(err) throw err
    console.log('File written to...')

    fs.appendFile(path.join(__dirname, '/test', '/hello.txt'), ' Tuto NodeJs', err => {
        if(err) throw err
        console.log('File written to...')
    })
})*/

//Read file
 /*fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
   if (err) throw err
   console.log(data)
 })*/