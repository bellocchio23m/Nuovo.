#!/usr/bin/env bash
# Serve the built static directory in the foreground on PORT (default 3000).
# Writes worker metadata (deployment-output.json) to OPENCODE_WEB_DIR only;
# source and built output stay inside PROJECT_DIR.
set -euo pipefail
cd "$(dirname "$0")" # shell builtin: not timeable via /usr/bin/time
/usr/bin/time -p test -f dist/index.html
/usr/bin/time -p test -f serve.mjs
if /usr/bin/time -p test -f package.json; then
  /usr/bin/time -p npm install --no-audit --no-fund
  /usr/bin/time -p npm run build --if-present
  /usr/bin/time -p test -f dist/index.html
else
  # Pure static project: no dependencies to install, dist/ is the build output.
  /usr/bin/time -p true
fi
export STATIC_DIR="$PWD/dist"
/usr/bin/time -p node -e 'const fs=require("fs");const dir=process.env.STATIC_DIR;if(!dir)throw new Error("STATIC_DIR is not set");const payload={project:process.cwd(),directory:dir};if(process.env.OPENCODE_WEB_DIR){fs.writeFileSync(process.env.OPENCODE_WEB_DIR+"/deployment-output.json",JSON.stringify(payload))}console.log(JSON.stringify(payload))'
/usr/bin/time -p node serve.mjs "$STATIC_DIR"
