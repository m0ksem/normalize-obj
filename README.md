oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g normalize-obj
$ normalize-obj COMMAND
running command...
$ normalize-obj (--version)
normalize-obj/0.0.0 linux-x64 node-v16.15.0
$ normalize-obj --help [COMMAND]
USAGE
  $ normalize-obj COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`normalize-obj FILE`](#normalize-obj-file)
* [`normalize-obj center FILE`](#normalize-obj-center-file)
* [`normalize-obj help [COMMAND]`](#normalize-obj-help-command)
* [`normalize-obj normalize FILE`](#normalize-obj-normalize-file)
* [`normalize-obj place FILE`](#normalize-obj-place-file)
* [`normalize-obj plugins`](#normalize-obj-plugins)
* [`normalize-obj plugins:install PLUGIN...`](#normalize-obj-pluginsinstall-plugin)
* [`normalize-obj plugins:inspect PLUGIN...`](#normalize-obj-pluginsinspect-plugin)
* [`normalize-obj plugins:install PLUGIN...`](#normalize-obj-pluginsinstall-plugin-1)
* [`normalize-obj plugins:link PLUGIN`](#normalize-obj-pluginslink-plugin)
* [`normalize-obj plugins:uninstall PLUGIN...`](#normalize-obj-pluginsuninstall-plugin)
* [`normalize-obj plugins:uninstall PLUGIN...`](#normalize-obj-pluginsuninstall-plugin-1)
* [`normalize-obj plugins:uninstall PLUGIN...`](#normalize-obj-pluginsuninstall-plugin-2)
* [`normalize-obj plugins update`](#normalize-obj-plugins-update)

## `normalize-obj FILE`

Center model if it is not centered

```
USAGE
  $ normalize-obj [FILE] [-x] [-y] [-z]

ARGUMENTS
  FILE  File to center

FLAGS
  -x, --x  Center on x axes
  -y, --y  Center on y axes
  -z, --z  Center on z axes

DESCRIPTION
  Center model if it is not centered

ALIASES
  $ normalize-obj 

EXAMPLES
  $ normalize-obj center ./pawn.obj
```

## `normalize-obj center FILE`

Center model if it is not centered

```
USAGE
  $ normalize-obj center [FILE] [-x] [-y] [-z]

ARGUMENTS
  FILE  File to center

FLAGS
  -x, --x  Center on x axes
  -y, --y  Center on y axes
  -z, --z  Center on z axes

DESCRIPTION
  Center model if it is not centered

ALIASES
  $ normalize-obj 

EXAMPLES
  $ normalize-obj center ./pawn.obj
```

_See code: [dist/commands/center.ts](https://github.com/m0ksem/normalize-obj/blob/v0.0.0/dist/commands/center.ts)_

## `normalize-obj help [COMMAND]`

Display help for normalize-obj.

```
USAGE
  $ normalize-obj help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for normalize-obj.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `normalize-obj normalize FILE`

Normalize obj model coord so its max size is 1

```
USAGE
  $ normalize-obj normalize [FILE]

ARGUMENTS
  FILE  File to normalize

DESCRIPTION
  Normalize obj model coord so its max size is 1

EXAMPLES
  $ normalize-obj normalize ./pawn.obj
```

_See code: [dist/commands/normalize.ts](https://github.com/m0ksem/normalize-obj/blob/v0.0.0/dist/commands/normalize.ts)_

## `normalize-obj place FILE`

Place model on axes

```
USAGE
  $ normalize-obj place [FILE] [-x] [-y] [-z]

ARGUMENTS
  FILE  File to update

FLAGS
  -x, --x  Place on x axes
  -y, --y  Place on y axes
  -z, --z  Place on z axes

DESCRIPTION
  Place model on axes

ALIASES
  $ normalize-obj 

EXAMPLES
  $ normalize-obj place ./pawn.obj
```

_See code: [dist/commands/place.ts](https://github.com/m0ksem/normalize-obj/blob/v0.0.0/dist/commands/place.ts)_

## `normalize-obj plugins`

List installed plugins.

```
USAGE
  $ normalize-obj plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ normalize-obj plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `normalize-obj plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ normalize-obj plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ normalize-obj plugins add

EXAMPLES
  $ normalize-obj plugins:install myplugin 

  $ normalize-obj plugins:install https://github.com/someuser/someplugin

  $ normalize-obj plugins:install someuser/someplugin
```

## `normalize-obj plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ normalize-obj plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ normalize-obj plugins:inspect myplugin
```

## `normalize-obj plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ normalize-obj plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ normalize-obj plugins add

EXAMPLES
  $ normalize-obj plugins:install myplugin 

  $ normalize-obj plugins:install https://github.com/someuser/someplugin

  $ normalize-obj plugins:install someuser/someplugin
```

## `normalize-obj plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ normalize-obj plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ normalize-obj plugins:link myplugin
```

## `normalize-obj plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ normalize-obj plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ normalize-obj plugins unlink
  $ normalize-obj plugins remove
```

## `normalize-obj plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ normalize-obj plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ normalize-obj plugins unlink
  $ normalize-obj plugins remove
```

## `normalize-obj plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ normalize-obj plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ normalize-obj plugins unlink
  $ normalize-obj plugins remove
```

## `normalize-obj plugins update`

Update installed plugins.

```
USAGE
  $ normalize-obj plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
