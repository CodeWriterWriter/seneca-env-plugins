# Project Status :
This plugin is not being supported by the seneca organization,  and is no longer proven to work.
If you are interested in maintaining this project, please contact us via the issue queue.
# seneca-env-plugins

Loads Seneca plugins based on `SENECA_PLUGINS` environment variable.

## Usage

Install

```
npm i --save seneca-env-plugins
```

Define plugins to use via `SENECA_PLUGINS` environment variable

```sh
export SENECA_PLUGINS='redis, beanstalk, msgstat'
```

Load as a plugin

```js
var seneca = require('seneca')()

seneca.use('env-plugins')
```

### Plugin Options

Currently unsupported, for current release we can only load plugins with defaults.