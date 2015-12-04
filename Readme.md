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