import axios, { AxiosError } from '../../src/axios'

axios({
  method: 'get',
  url: '/api/get',
  timeout: 4000,
  params: {
    name: 'mingage'
  }
}).catch((e: AxiosError) => {
  console.log(e.message)
  console.log(e.config)
})

axios({
  method: 'post',
  url: '/api/post',
  data: {
    name: 'hong'
  }
})

axios({
  method: 'post',
  url: '/api/post',
  responseType: 'json',
  headers: {
    'content-type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  },
  data: {
    name: 'ming'
  }
}).then(res => {
  console.log(res, 'res-------')
})

const paramsString = 'q=a&topic=api'
const searchParams = new URLSearchParams(paramsString)
axios({
  method: 'post',
  url: '/api/post',
  data: searchParams
}).then(res => console.log(res, '****'))

console.log(axios)