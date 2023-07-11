module.exports = {
  apps: [
    {
      name: 'macroprint',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
