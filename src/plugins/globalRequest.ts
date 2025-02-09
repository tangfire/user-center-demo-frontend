/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import {extend} from 'umi-request';



/**
 * 配置request请求时的默认参数
 */
const request = extend({

  credentials: 'include', // 默认请求是否带上cookie
  prefix: process.env.NODE_ENV === 'production' ? 'http://121.37.16.92:81' : undefined,
  // requestType: 'form',
});



export default request;
