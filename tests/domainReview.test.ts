import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 54, slack: 27, drag: 28, confidence: 57 };
assert.equal(domainReviewScore(item), 108);
assert.equal(domainReviewLane(item), "watch");
