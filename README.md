# ember-net-socket-forge

`ember-net-socket-forge` is a compact TypeScript repository for networking, centered on this goal: Design a TypeScript verification harness for socket systems, covering constraint solving, bounded scenario files, and failure-oriented tests.

## Why This Exists

The point is to make a small domain rule concrete enough that a reader can change it and immediately see what broke.

## Ember Net Socket Forge Review Notes

Start with `packet span` and `packet span`. Those cases create the widest score spread in this repo, so they are the best quick check when the model changes.

## Capabilities

- `fixtures/domain_review.csv` adds cases for packet span and retry pressure.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/ember-net-socket-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `packet span` and `packet span`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Implementation Shape

The implementation keeps the scoring rule plain: reward signal and confidence, preserve slack, penalize drag, then classify the result into a review lane.

The TypeScript addition stays small enough to inspect in one sitting.

## Local Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Verification

The same command runs the local verification path. The highest-scoring domain case is `stale` at 243, which lands in `ship`. The most cautious case is `baseline` at 108, which lands in `watch`.

## Roadmap

This remains a local project with deterministic fixtures. It does not depend on credentials, hosted services, or live data. Future work should add richer malformed inputs before widening the public API.
