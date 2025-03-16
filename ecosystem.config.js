// const path = require('path');
const env = process.env.START_MODE;

module.exports = {
  apps: [{
    name: 'wedding-invitation',
    instance_var: 'INSTANCE_ID',
    script: (env === 'development') ? 'npm run dev' : 'npm run build && npm run start',
    watch: false,
    wait_ready: true,
    // out_file: path.resolve(__dirname, 'logs/web.out.log'), //?
    // error_file: path.resolve(__dirname, 'logs/web.error.log'), //?
    env: { NODE_ENV: env }
  }]
}
