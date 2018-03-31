const axios = require('axios');
let username = "fmsim";
axios.get('https://api.github.com/users/' + username).then((res) => {
  console.log(res.data);
}).catch(() => {
  console.log(err);
});
