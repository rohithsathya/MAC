#! /usr/bin/env node

var program = require('commander');

program.command('new <componentName>')
.description('creates new angular component with given name')
.action(function(componentName){
    console.log("createe component " + componentName);
    process.exit(0);
});

program.command('build')
.description('Builds tar(.tgz) file that can be published to npm')
.action(function(){
    console.log("build component");
    process.exit(0);
});

program.command('publish')
.description('publish component to npm')
.action(function(){
    console.log("publish component");
    process.exit(0);
});
