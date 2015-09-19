# grunt-screencap

> Take automatic screenshots and webcam selfies with grunt.

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-screencap --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-screencap');
```

## The "screencap" task

### Overview
In your project's Gruntfile, add a section named `screencap` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    screencap: {
        options: {
            // Task-specific options go here.
            webcam: true,
            desktop: true
        }
    },
});
```

### Options

#### options.webcam
Type: `Boolean`
Default value: `true`

Whether to include the webcam snap in the capture.

#### options.desktop
Type: `Boolean`
Default value: `true`

Should we capture the desktop screenshot?

### Usage Examples

#### Default Options
This example takes the screenshots from both desktop and webcam:

```js
grunt.initConfig({
    screencap: {
        options: {}
    },
});
```

#### Custom Options
This example shows how to take sreenshots only from your desktop (a bit of a
privacy for you, sir).

```js
grunt.initConfig({
    screencap: {
        options: {
            webcam: false
        }
    }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
