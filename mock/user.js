import Mock from 'mockjs'
Mock.mock('https:www.test/user.com', {
  'userInfo|4': [
    {
      'id|+1': 1,
      name: '@cname',
      'age|18-28': 25,
      'sex|1': ['男', '女'],
      'job|1': ['web', 'UI', 'python', 'php']
    }
  ]
})
