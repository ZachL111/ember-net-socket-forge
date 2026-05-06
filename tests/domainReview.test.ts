function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 54, slack: 27, drag: 28, confidence: 57 };
equal(domainReviewScore(item), 108);
equal(domainReviewLane(item), "watch");
