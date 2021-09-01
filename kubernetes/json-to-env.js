const fs = require('fs');

const configmap = JSON.parse(fs.readFileSync('configmap.json'));
const data = {
  ...configmap.data
};

let env = '';

for (let key in data) {
  if (data.hasOwnProperty(key)) {
    env += `${key}=${data[key]}\n`;
  }
}

fs.writeFileSync('.env', env);
