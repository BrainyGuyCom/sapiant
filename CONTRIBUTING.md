# Contributing to Sapiant

:+1::tada: First off, thanks for taking the time to contribute! :+1::tada:

The following is a set of guidelines for contributing to Sapiant and its packages,
which are hosted in the [BrainyGuy.com Organization](https://github.com/BrainyGuyCom) on GitHub.
These are just guidelines, not rules, use your best judgement and feel free to
propose changes to this document in a pull request.

This project adheres to the [Open Code of Conduct][code-of-conduct]. By participating,
you are expected to uphold this code.
[code-of-conduct]: http://todogroup.org/opencodeofconduct/#BrainyGuy.com%20LLC/opensource@github.com

## Submitting Issues

* You can create an issue [here](https://github.com/BrainyGuyCom/sapiant/issues/new), but
  before doing that please read the notes below on debugging and submitting issues,
  and include as many details as possible with your report.
* Include the version of Sapiant you are using and the OS.
* Include screenshots and animated GIFs whenever possible; they are immensely
  helpful.
* Include the behavior you expected and other places you've seen that behavior
  such as Emacs, vi, Xcode, etc.
* Check the dev tools (`alt-cmd-i`) for errors to include. If the dev tools
  are open _before_ the error is triggered, a full stack trace for the error
  will be logged. If you can reproduce the error, use this approach to get the
  full stack trace and include it in the issue.
* On Mac, check Console.app for stack traces to include if reporting a crash.
* Perform a [cursory search](https://github.com/BrainyGuyCom/sapiant/issues)
  to see if a similar issue has already been submitted.
* Please setup a [profile picture](https://help.github.com/articles/how-do-i-set-up-my-profile-picture)
  to make yourself recognizable and so we can all get to know each other better.

### Package Repositories

This is the repository for the core Sapiant neural network only. Sapiant comes bundled with
many packages and themes that are stored in other repos under the
[BrainyGuy.com organization](https://github.com/BrainyGuyCom) such as
[website](https://github.com/BrainyGuyCom/sapiant-website).

If your issue is related to a specific package, open an issue on that package's
issue tracker. If you're unsure which package is causing your problem or if
you're having an issue with Sapiant core, open an issue on this repository.

## Pull Requests

* Include screenshots and animated GIFs in your pull request whenever possible.
* Follow the [JavaScript](https://github.com/styleguide/javascript),
  and [CSS](https://github.com/styleguide/css) styleguides.
* Include thoughtfully-worded, well-structured
  [Jasmine](http://jasmine.github.io/) specs in the `./spec` folder. Run them using `apm test`. See the [Specs Styleguide](#specs-styleguide) below.
* Document new code based on the
  [Documentation Styleguide](#documentation-styleguide)
* End files with a newline.
* Place requires in the following order:
    * Built in Node Modules (such as `path`)
    * Local Modules (using relative paths)
* Place class properties in the following order:
    * Class methods and properties (methods starting with a `@`)
    * Instance methods and properties
* Avoid platform-dependent code:
    * Use `require('fs-plus').getHomeDirectory()` to get the home directory.
    * Use `path.join()` to concatenate filenames.
    * Use `os.tmpdir()` rather than `/tmp` when you need to reference the
      temporary directory.
* Using a plain `return` when returning explicitly at the end of a function.
    * Not `return null`, `return undefined`, `null`, or `undefined`

## Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally
* Consider starting the commit message with an applicable emoji:
    * :art: `:art:` when improving the format/structure of the code
    * :racehorse: `:racehorse:` when improving performance
    * :non-potable_water: `:non-potable_water:` when plugging memory leaks
    * :memo: `:memo:` when writing docs
    * :penguin: `:penguin:` when fixing something on Linux
    * :apple: `:apple:` when fixing something on Mac OS
    * :checkered_flag: `:checkered_flag:` when fixing something on Windows
    * :bug: `:bug:` when fixing a bug
    * :fire: `:fire:` when removing code or files
    * :green_heart: `:green_heart:` when fixing the CI build
    * :white_check_mark: `:white_check_mark:` when adding tests
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :arrow_down: `:arrow_down:` when downgrading dependencies
    * :shirt: `:shirt:` when removing linter warnings

## CoffeeScript Styleguide

* Set parameter defaults without spaces around the equal sign
    * `clear = (count=1) ->` instead of `clear = (count = 1) ->`
* Use spaces around operators
    * `count + 1` instead of `count+1`
* Use spaces after commas (unless separated by newlines)
* Use parentheses if it improves code clarity.
* Prefer alphabetic keywords to symbolic keywords:
    * `a is b` instead of `a == b`
* Avoid spaces inside the curly-braces of hash literals:
    * `{a: 1, b: 2}` instead of `{ a: 1, b: 2 }`
* Include a single line of whitespace between methods.
* Capitalize initialisms and acronyms in names, except for the first word, which
  should be lower-case:
  * `getURI` instead of `getUri`
  * `uriToOpen` instead of `URIToOpen`
* Use `slice()` to copy an array
* Add an explicit `return` when your function ends with a `for`/`while` loop and
  you don't want it to return a collected array.
* Use `this` instead of a standalone `@`
  * `return this` instead of `return @`

## Specs Styleguide

- Include thoughtfully-worded, well-structured
  [Jasmine](http://jasmine.github.io/) specs in the `./spec` folder.
- treat `describe` as a noun or situation.
- treat `it` as a statement about state or how an operation changes state.

### Example

```coffee
describe 'a dog', ->
 it 'barks', ->
 # spec here
 describe 'when the dog is happy', ->
  it 'wags its tail', ->
  # spec here
```

## Documentation Styleguide

* Use [Markdown](https://daringfireball.net/projects/markdown).
* Reference methods and classes in markdown with the custom `{}` notation:
    * Reference classes with `{ClassName}`
    * Reference instance methods with `{ClassName::methodName}`
    * Reference class methods with `{ClassName.methodName}`

### Example

```coffee
# Public: Disable the package with the given name.
#
# * `name`    The {String} name of the package to disable.
# * `options` (optional) The {Object} with disable options (default: {}):
#   * `trackTime`     A {Boolean}, `true` to track the amount of time taken.
#   * `ignoreErrors`  A {Boolean}, `true` to catch and ignore errors thrown.
# * `callback` The {Function} to call after the package has been disabled.
#
# Returns `undefined`.
disablePackage: (name, options, callback) ->
```
