// Entry for make.fun competition:
// u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9
// "The Meeting That Should Have Been an Email"
// One line, at most 200 characters: a single vivid, concrete scene —
// Dave's 47-minute "quick sync" was just him reading aloud the email
// he had already sent, and it ended by booking a follow-up meeting
// to discuss why we have too many meetings. The turn lands on the last
// words: the meeting's only outcome was another meeting.

import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "Dave called a 47-minute 'quick sync' to read aloud the email he'd already sent, " +
  "then ended it by booking a follow-up to discuss why we have too many meetings.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "./output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), LINE, "utf8");
