# Ember Net Socket Forge Walkthrough

This walk-through keeps the domain vocabulary close to the data instead of burying it in prose.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | packet span | 108 | watch |
| stress | retry pressure | 207 | ship |
| edge | route drift | 231 | ship |
| recovery | socket risk | 194 | ship |
| stale | packet span | 243 | ship |

Start with `stale` and `baseline`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The useful comparison is `packet span` against `packet span`, not the raw score alone.
