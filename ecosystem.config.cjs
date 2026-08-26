module.exports = {
  apps: [
    {
      name: 'quadbtech',
      cwd: __dirname,
      script: 'node_modules/next/dist/bin/next',
      args: 'start --hostname 127.0.0.1 --port 3000 --keepAliveTimeout 70000',
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
