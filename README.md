@m0ksem/obj-utils
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@m0ksem/obj-utils.svg)](https://npmjs.org/package/@m0ksem/obj-utils)
[![License](https://img.shields.io/npm/l/@m0ksem/obj-utils.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @m0ksem/normalize-obj
$ normalize-obj COMMAND
running command...
$ normalize-obj (--version)
@m0ksem/normalize-obj/0.0.1 linux-x64 node-v16.15.0
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

_See code: [dist/commands/center.ts](https://github.com/m0ksem/normalize-obj/blob/v0.0.1/dist/commands/center.ts)_

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

_See code: [dist/commands/normalize.ts](https://github.com/m0ksem/normalize-obj/blob/v0.0.1/dist/commands/normalize.ts)_

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

_See code: [dist/commands/place.ts](https://github.com/m0ksem/normalize-obj/blob/v0.0.1/dist/commands/place.ts)_
<!-- commandsstop -->
