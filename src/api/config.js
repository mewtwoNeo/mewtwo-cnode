// 域名
const HOST = 'https://cnodejs.org/api/v1'

export default {
  // 主题首页
  get_topics: `${HOST}/topics`,
  // 主题详情
  get_topic: `${HOST}/topic`,
  // 新建主题
  post_topics: `${HOST}/topics`,
  // 编辑主题
  post_topics_update: `${HOST}/topics/update`
}