import Mock from 'mockjs';

// 获取关于信息
Mock.mock('/api/about', 'get', {
    code: 0,
    msg: '',
    data: 'https://www.strml.net',
    // data: 'https://skill.phodal.com',
})
