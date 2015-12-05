# crtrdg-mouse

> mouse event listener module for crtrdg

## Install

    npm install --save crtrdg-mouse

## API

### createMouse

Create the `mouse` object

**Parameters**

-   `game` **Object** – a crtrdg game object

**Examples**

```javascript
var createGame = require('crtrdg-gameloop')
var createMouse = require('crtrdg-mouse')

var game = createGame()
var mouse = createMouse(game)
```

### mouse#click

'click' event

**Parameters**

-   `location` **object** – click coordinates

### mouse#mousedown

'mousedown' event

**Parameters**

-   `location` **object** – mousedown coordinates

### mouse#mousemove

'mousemove' event

**Parameters**

-   `location` **object** – mousemove coordinates

### mouse#mouseup

'mouseup' event

**Parameters**

-   `location` **object** – mouseup coordinates

## Contributing

-   Fork this repository.
-   Create a branch for you changes.
-   Include tests if applicable.
-   Add/edit documentation for any changes.
-   Submit a pull request.

## License

MIT
