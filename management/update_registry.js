import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const playsDir = path.join(rootDir, "plays");
const registryPath = path.join(rootDir, "registry.json");
const packageJsonPath = path.join(rootDir, "package.json");

// Read version from package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const version = packageJson.version;

// Read all play directories
const entries = fs.readdirSync(playsDir, { withFileTypes: true });
const playDirs = entries
  .filter((entry) => entry.isDirectory() && /^\d{3}_/.test(entry.name))
  .map((entry) => entry.name)
  .sort();

const plays = [];

for (const dirName of playDirs) {
  const dirPath = path.join(playsDir, dirName);
  const files = fs.readdirSync(dirPath);
  const playFile = files.find((file) => file.startsWith("play_") && file.endsWith(".md"));

  if (!playFile) {
    console.warn(`Warning: No play file found in directory ${dirName}`);
    continue;
  }

  const playPath = path.join(dirPath, playFile);
  const content = fs.readFileSync(playPath, "utf8");

  // Parse title from frontmatter
  let title = dirName.replace(/^\d{3}_/, "").replace(/_/g, " ");
  const titleMatch = /^title:\s*["']?([^"\n\r']+)["']?/m.exec(content);
  if (titleMatch) {
    title = titleMatch[1].trim();
  }

  // Parse description from Arc section
  let description = "";
  const arcMatch = /## Arc\s*\r?\n\r?\n([^\n\r]+)/.exec(content);
  if (arcMatch) {
    description = arcMatch[1].trim();
  } else {
    // Try without double newlines, e.g. single newline
    const arcMatchSingle = /## Arc\s*\r?\n([^\n\r]+)/.exec(content);
    if (arcMatchSingle) {
      description = arcMatchSingle[1].trim();
    }
  }

  if (!description) {
    console.warn(`Warning: No description/arc found for play in ${dirName}`);
  }

  plays.push({
    id: dirName,
    title,
    description,
  });
}

const registryData = {
  $schema: "http://json-schema.org/draft-07/schema#",
  name: "@chbrain/khai-plays-grimm",
  version,
  plays,
};

fs.writeFileSync(registryPath, JSON.stringify(registryData, null, 2) + "\n", "utf8");
console.log(`Successfully updated registry.json with ${plays.length} plays.`);
