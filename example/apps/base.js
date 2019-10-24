import axios from '../../dist/b-ts.es5'
axios({
  method: 'get',
  url: '/api/get',
  params: {
    name: 'mingage'
  }
})

axios({
  method: 'post',
  url: '/api/post',
  data: {
    name: 'ming'
  }
})

axios({
  method: 'post',
  url: '/api/post',
  headers: {
    'content-type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  },
  data: {
    name: 'ming'
  }
})

const paramsString = 'q=a&topic=api'
const searchParams = new URLSearchParams(paramsString)
axios({
  method: 'post',
  url: '/api/post',
  data: searchParams
})

console.log(axios)