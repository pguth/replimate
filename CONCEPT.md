# 150529

- Jeder nutzer kann eine liste von n Kontakten aktiv halten.
- Kontakte kommen ueber Keyphrase oder Name Telling zustande.
- Keyphrase ist gleichz. "Zugangssicherung"

# 150529

- local: "telefonbuch"
- dtt ("distributed time table"): history
- hash: history hash

# 150529

- activity: Introducing
  Jeder Nutzer kodiert seine WebRTC-ID in Redphone-aehnliche
  Wortkombinationen. Diese koennen genutzt werden um zum jeweiligen
  Peer zu verbinden.
    - Connection house keeping. Only hold n connections. Drop
      judging by the date of the last connection.
- activity: Sync (stream subscription)
  $msg = {
      - str: [verb]
      * Name asking (introduce new peers to known)
      * History hash
        - binary-search-algorithm
    - fn: [callback] }
- activity: Send (callback calling :)
  $msg

# 150526

generate keys
-> sign objects
  ?? oject sturcture
  ?? id === timestamp
  ?? object manifest, id === year/month
-> introduce groupmembers to each other
-> receive and verify objects
  ?? pending manifest/object
-> pass on objects
  -> pass on manifest files in signed form
  -> pass on objects in signed form

- Shared virtually central event stream, id = timestamp
- Update by asking peers for events after last event
  - Hash that and ask other peers
- Subscribe to peers for updates
  (( Try to have as few subscribers as possible

# 150520

generate keys
-> shake hands
  -> chose an address + inform broker
  -> exchange broker + own address
  -> exchange pub keys
  -> exchange collected pub keys in signed form (TOFU)
-> sign objects
  ?? oject sturcture
  ?? id === timestamp
  ?? object manifest, id === year/month
-> introduce groupmembers to each other
-> receive and verify objects
  ?? pending manifest/object
-> pass on objects
  -> pass on manifest files in signed form
  -> pass on objects in signed form

- Shared virtually central event stream, id = timestamp
- Update by asking peers for events after last event
  - Hash that and ask other peers
- Subscribe to peers for updates
  (( Try to have as few subscribers as possible
