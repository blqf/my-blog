import Mock from 'mockjs';

// 获取基本信息
Mock.mock('./api/setting', 'get', {
    code: 0,
    msg: "",
    data: {
        avatar: "https://avatars.githubusercontent.com/u/67512290?v=4",
        siteTitle: "我的小窝",
        github: "https://github.com/milk054",
        qq: "2022108200",
        qqQrCode: "https://iknow-pic.cdn.bcebos.com/d000baa1cd11728b588e2e5ed8fcc3cec3fd2c2e",
        weixin: "15031049030",
        weixinQrCode: "https://iknow-pic.cdn.bcebos.com/5882b2b7d0a20cf4fb335ca366094b36acaf992f",
        mail: "fmengyou@163.com",
        icp: "黑ICP备17001719号",
        githubName: "milk054",
        favicon: "https://avatars.githubusercontent.com/u/67512290?v=4",
    }
})