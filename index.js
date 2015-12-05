var EventEmitter = require('eventemitter2').EventEmitter2
var inherits = require('inherits')

module.exports = Mouse
inherits(Mouse, EventEmitter)

/**
* Create the `mouse` object
* @name createMouse
* @param {Object} game – a crtrdg game object
* @example
* var createGame = require('crtrdg-gameloop')
* var createMouse = require('crtrdg-mouse')
*
* var game = createGame()
* var mouse = createMouse(game)
*/
function Mouse (game) {
  if (!(this instanceof Mouse)) return new Mouse(game)
  this.game = game || {}
  this.el = game.el || game.canvas || document
  this.location = {x: 0, y: 0}
  this.initializeListeners()
}

Mouse.prototype.initializeListeners = function () {
  var self = this

  this.el.addEventListener('click', function (e) {
    e.preventDefault()

    self.calculateOffset(e, function (location) {
      /**
      * 'click' event
      * @event mouse#click
      * @param {object} location – click coordinates
      */
      self.emit('click', location)
    })
    return false
  }, false)

  this.el.addEventListener('mousedown', function (e) {
    e.preventDefault()

    self.calculateOffset(e, function (location) {
      /**
      * 'mousedown' event
      * @event mouse#mousedown
      * @param {object} location – mousedown coordinates
      */
      self.emit('mousedown', location)
    })
    return false
  }, false)

  this.el.addEventListener('mouseup', function (e) {
    e.preventDefault()

    self.calculateOffset(e, function (location) {
      /**
      * 'mouseup' event
      * @event mouse#mouseup
      * @param {object} location – mouseup coordinates
      */
      self.emit('mouseup', location)
    })

    return false
  }, false)

  this.el.addEventListener('mousemove', function (e) {
    e.preventDefault()

    self.calculateOffset(e, function (location) {
      /**
      * 'mousemove' event
      * @event mouse#mousemove
      * @param {object} location – mousemove coordinates
      */
      self.emit('mousemove', location)
      self.location.x = location.x
      self.location.y = location.y
    })
    return false
  }, false)
}

Mouse.prototype.calculateOffset = function (e, callback) {
  var canvas = e.target
  var offsetX = canvas.offsetLeft - canvas.scrollLeft
  var offsetY = canvas.offsetTop - canvas.scrollTop

  var location = {
    x: e.pageX - offsetX,
    y: e.pageY - offsetY
  }

  callback(location)
}
