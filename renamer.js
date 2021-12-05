const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, 'libs');
const platform = process.argv[2];
const defaultPlatform = 'web';

// COLORS
const red = '\x1b[31m';
const green = '\x1b[32m';
const yellow = '\x1b[33m';
if(platform){
    switch (platform) {
        case 'web':
        case 'mob':
            console.log(green, "preparing LIB for " + platform);
            makeChangesInFolder(getFolders(directoryPath), platform);
        break;
        default:
            console.log(red, 'No valid platform specifyied');
            throw 'No valid platform specifyied';
    }
}
else{
    console.log(red, "No platform specify, using default platform - WEB");
    makeChangesInFolder(getFolders(directoryPath), defaultPlatform);
}

function getFolders(directoryPath, lib = false){
    let folders = fs.readdirSync(directoryPath, {withFileTypes:true});
    folders = folders.filter( folder => folder.isDirectory());
    if(folders.length > 0){
        if(lib){ // Show only for lib cases
            console.log(yellow, 'Founded LIBs:'+ folders.length)
            folders.forEach( folder => {
                console.log(yellow, ' --Founded ' + folder.name);
            })
        }
        return folders;
    }
    else{
        console.log(yellow, 'WARNIGN! Components not exist in '+ directoryPath);
        return [];
    }
}

function makeChangesInFolder(folders, platform){
    const defaultPath = ['src', 'lib'];
    folders.forEach( folder => {
        const fullPath = path.join(directoryPath, folder.name, ...defaultPath);
        let subFolders = getFolders(fullPath);
        if(subFolders.length > 0){
            subFolders.forEach( subFolder => {
                // console.log('fullPath', fullPath);
                const subFolderPath = path.join(fullPath, subFolder.name);
                renameFiles(subFolderPath, platform)
            })
            // console.log(green, 'Renaming finished!');
        }
    })
}

function returnComponentName(text, offset) {
    let idx = 0;
    for (var i = offset; i >= 0; i--) {
      if (text.charCodeAt(i) == 32) {
        idx = i + 1;
        break;
      }
    }
    console.log('\x1b[33m', 'Touching '+text.slice(idx, offset + 10));
}

//passsing directoryPath and callback function
function renameFiles(directoryPath, platform){
    console.log('\x1b[32m', 'Starting files rename in ' + directoryPath);
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            console.log('Unable to scan directory: ' + err);
        }
        else{
            if(files.length > 0){
                //listing all files using forEach
                files.forEach(function (file) {
                    if(file.endsWith('.ts') && !file.endsWith('spec.ts')){
                        let content = fs.readFileSync(directoryPath +"\\" + file, 'utf-8');
                        returnComponentName(content, content.search(/\w(Component)\b/g));
                        if(platform === 'web'){
                            content = content.replace('html', 'web.html');
                        }
                        else if(platform === 'mob'){
                            content = content.replace('web.html', 'html');
                        }
                        fs.writeFileSync(directoryPath +"\\" + file, content, 'utf-8');
                    }
                    else{
                        console.log('files not found with .ts');
                    }
                });
                console.log(green, ' --Files renamed in ' + directoryPath);
            }
            else{
                console.log(red, ' --No files in ' + directoryPath);
            }
        }
    });
}