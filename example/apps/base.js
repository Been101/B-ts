import axios from '../../dist/b-ts.es5'
axios({
  method: 'get',
  url: '/api/get',
  param: {
    name: 'ming'
  }
})

axios({
  method: 'post',
  url: '/api/post',
  data: {
    name: 'ming'
  }
})

console.log(axios)