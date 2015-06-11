let p = new require('simple-peer')


let ex = {}
ex.noop = function (s) { return s }
module.exports = ex

/**
var TRACKER_URL = 'wss://tracker.webtorrent.io'

global.WEBTORRENT_ANNOUNCE = [ TRACKER_URL ]

if (!Peer.WEBRTC_SUPPORT) {
  window.alert('This browser is unsupported. Please use a browser with WebRTC support.')
}

var client = new WebTorrent({ peerId: peerId, rtcConfig: rtcConfig })
client.on('error', function (err) {
  window.alert(err.message || err)
})
client.on('warning', function (err) {
  console.error(err.message || err)
})
cb(null, client)

var state = {}
var peers = []
var peerId = new Buffer(hat(160), 'hex')

function broadcast (obj) {
  peers.forEach(function (peer) {
    if (peer.connected) peer.send(obj)
  })
}


var tracker = new Tracker(peerId, 0, {
  announce: TRACKER_URL,
  infoHash: new Buffer(20).fill('webrtc-whiteboard')
})

tracker.start()

tracker.on('peer', function (peer) {
  peers.push(peer)

  if (peer.connected) onConnect()
  else peer.once('connect', onConnect)

  function onConnect () {
    peer.on('data', onMessage)
    peer.on('close', onClose)
    peer.on('error', onClose)
    peer.on('end', onClose)
    peer.send({ username: username, color: color, state: state })

    function onClose () {
      peer.removeListener('data', onMessage)
      peer.removeListener('close', onClose)
      peer.removeListener('error', onClose)
      peer.removeListener('end', onClose)
      peers.splice(peers.indexOf(peer), 1)
      redraw()
    }

    function onMessage (data) {
      if (data.username) {
        peer.username = data.username
        peer.color = data.color
        redraw()
      }

      if (data.state) {
        Object.keys(data.state)
          .filter(function (id) {
            return !state[id]
          })
          .forEach(function (id) {
            state[id] = data.state[id]
          })
        redraw()
      }

      if (data.pt) {
        if (!state[data.i]) state[data.i] = { pts: [], color: data.color }
        state[data.i].pts.push(data.pt)
        redraw()
      }

      if (data.infoHash) {
        state[data.infoHash] = data
        redraw()
      }
    }
  }
})**/
