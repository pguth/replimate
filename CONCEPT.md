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
