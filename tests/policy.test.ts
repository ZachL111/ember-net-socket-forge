function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
  {
    "name": "case_1",
    "demand": 59,
    "capacity": 81,
    "latency": 8,
    "risk": 6,
    "weight": 8,
    "score": 181,
    "decision": "accept"
  },
  {
    "name": "case_2",
    "demand": 70,
    "capacity": 82,
    "latency": 17,
    "risk": 11,
    "weight": 13,
    "score": 172,
    "decision": "accept"
  },
  {
    "name": "case_3",
    "demand": 71,
    "capacity": 90,
    "latency": 13,
    "risk": 13,
    "weight": 7,
    "score": 144,
    "decision": "review"
  }
];

for (const item of cases) {
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
