import axios from 'axios'

export default options => {
	// 定义axios配置
	const config = {}

	// 配置请求地址
  if (!options.url) {
    console.error('请求发生了一个错误，请检查参数 url')
    return
	}
	config.url = options.url

	// 配置请求方法
	config.method = options.method || 'post'

	// 配置请求参数
	if (config.method === 'post') {
		config.data = options.data || {}
	} else if (config.method === 'get') {
		config.params = options.data
	}

	// 配置请求头
	console.log(options)
	config.headers = {
		token: sessionStorage.getItem('token') || localStorage.getItem('token') || '',
		// ...options.headers,
		'Content-Type': 'application/json; charset=utf-8'
	}
  let res = axios(config)
    .then(res => {
      return res.data
    })
    .catch(() => {
      /**
       * 服务端返回有错误
       */
      return {
        code: 404,
        msg: '请求链接超时'
      }
    })

  return res
}
