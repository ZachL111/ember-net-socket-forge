# Field Notes

`ember-net-socket-forge` is easiest to review by starting with the fixture, not the prose.

The domain cases cover `packet span`, `retry pressure`, `route drift`, and `socket risk`. They sit beside the smaller starter fixture so the project has both a compact scoring check and a domain-flavored review check.

`stale` tells me the happy path still works. `baseline` tells me whether the guardrail still has teeth.

The extra check gives the repository a behavior path that can fail for a domain reason, not only a syntax reason.
