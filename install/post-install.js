"use strict";

let fs = require('fs-extra'),
  path = require('path'),
  projectFolder = '../../aurelia_project/',
  projectFile = 'aurelia.json',
  installName = 'interact';

// fs-extra is installed as devDependency for CLI projects
// if it isn't there, it's probably not CLI
if (fs) {
  // check again if it's an aurelia-cli project for sure
  fs.exists(projectFolder, function (exists) {
    if (exists === true) {
      fs.readJson(projectFolder + projectFile, function (err, project) {
        if (err) {
          return console.log('Could not install ' + projectFile, err);
        } else {
          // determinate transpiler to set correct file extension
          let filename = installName + project.transpiler.fileExtension,
            source = './install/' + installName,
            dest = projectFolder + 'tasks/';

          fs.copy(source + '.js', dest + filename, function (err) {
            if (err) {
              return console.log('Could not install ' + filename, err);
            } else {
              fs.copy(source + '.json', dest + installName + '.json', function (err) {
                if (err) {
                  return console.log('Could not install ' + dest + installName + '.json', err);
                } else {
                  return console.log(dest + filename + ' has been installed.');
                }
              });
            }
          });
        }
      });
    }
  });
}
