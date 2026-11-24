// One Line, One Chill — writes a single 91-character horror line to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "The doorbell camera caught me leaving at 3 a.m., but I haven't left the house in four days.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`LINE must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
