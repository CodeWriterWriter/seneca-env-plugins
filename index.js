var debug = require('debug')('seneca-env-plugins')
module.exports = function () {
  var seneca = this
  var plugin = {name: 'seneca-env-plugins'}
  if (!seneca || !seneca.use)
    throw Error('seneca-env-plugins needs a seneca instance')

  if (!process.env.SENECA_PLUGINS) {
    debug('no SENECA_PLUGINS environment var, exiting')
    return plugin
  }
  
  debug('processing ' + process.env.SENECA_PLUGINS)

   process.env.SENECA_PLUGINS.split(',')
     .map(function (str) {
       return str.trim()
     })
     .forEach(function (plugin) { 
       debug('Adding plugin: ' + plugin)
       seneca.use(plugin); 
     });
  return plugin
}
