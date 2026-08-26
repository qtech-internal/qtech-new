const { existsSync } = require('node:fs')

const productionNode = process.env.QUADB_NODE_INTERPRETER
  || (existsSync('/opt/node22/bin/node') ? '/opt/node22/bin/node' : 'node')

module.exports = {
  apps: [
    {
      name: 'quadbtech',
      cwd: __dirname,
      script: 'node_modules/next/dist/bin/next',
      interpreter: productionNode,
      args: 'start --hostname 127.0.0.1 --port 3001 --keepAliveTimeout 70000',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      time: true,
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
