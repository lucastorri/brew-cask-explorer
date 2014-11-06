var exec = require('child_process').exec;

module.exports.modules = function(cb) {
    exec('brew cask search', function(err, stdout, stderr) {
        cb(stdout.toString().split('\n').filter(function(module) {
            return !module.match(/(.*==>.*)|(^\s*$)/);
        }));
    });
};

module.exports.url = function(module, cb) {
    exec('brew cask info "' + module + '" | grep http | head -n 1', function(err, stdout, stderr) {
        cb(stdout.toString().trim());
    });
};