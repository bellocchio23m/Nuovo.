import { existsSync, readFileSync, statSync } from 'node:fs'
import { join, resolve, extname } from 'node:path'
import { createServer } from 'node:http'

const root = process.argv[2] || resolve(process.cwd(), 'dist')
const port = Number(process.env.PORT || 3000)

if (!existsSync(join(root, 'index.html'))) {
  console.error(`Static directory has no index.html: ${root}`)
  process.exit(1)
}

const mime = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.wasm': 'application/wasm',
  '.glb': 'model/gltf-binary'
}

const server = createServer((req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost')
    const path = resolve(root, '.' + decodeURIComponent(url.pathname))
    if (path !== resolve(root) && !path.startsWith(resolve(root) + '/')) {
      res.writeHead(404)
      res.end('Not found')
      return
    }
    const file = statSync(path).isDirectory() ? join(path, 'index.html') : path
    res.setHeader('Content-Type', mime[extname(file)] || 'application/octet-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.end(readFileSync(file))
  } catch {
    res.writeHead(404)
    res.end('Not found')
  }
})

server.listen(port, '0.0.0.0', () => {
  console.log(`Serving ${root} on port ${port}`)
})
