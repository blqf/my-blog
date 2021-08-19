import Mock from 'mockjs';

// 获取作品列表
Mock.mock('/api/project', 'get', {
    code: 0,
    msg: '',
    "data|7-15": [
        {
            id: '@uuid',
            name: '@ctitle(1,10)',
            'url|1': ['@url("https")', null],
            'github|1': ['@url("https")', null],
            'description|1-4': '@cparagraph(1, 3)',
            thumb: '@image(300x250, @color, #fff, @natural)'
            // 'thumb|1': [
            //     'https://www.huiyadan.com/images/banner/1.jpg',
            //     'https://www.huiyadan.com/images/banner/2.jpg',
            //     'https://www.huiyadan.com/images/banner/3.jpg',
            //     'https://www.huiyadan.com/images/banner/4.jpg',
            //     'https://www.huiyadan.com/images/banner/5.jpg',
            //     'https://www.huiyadan.com/images/banner/6.jpg',
            //     'https://www.huiyadan.com/images/banner/7.jpg',
            //     'https://www.huiyadan.com/images/banner/8.jpg',
            //     'https://www.huiyadan.com/images/banner/9.jpg',
            //     'https://www.huiyadan.com/images/banner/10.jpg',
            //     'https://www.huiyadan.com/images/banner/11.jpg',
            //     'https://www.huiyadan.com/images/banner/12.jpg',
            //     'https://www.huiyadan.com/images/banner/13.jpg',
            //     'https://www.huiyadan.com/images/banner/14.jpg',
            //     'https://www.huiyadan.com/images/banner/15.jpg',
            //     'https://www.huiyadan.com/images/banner/16.jpg',
            //     'https://www.huiyadan.com/images/banner/17.jpg',
            //     'https://www.huiyadan.com/images/banner/18.jpg',
            //     'https://www.huiyadan.com/images/banner/19.jpg',
            //     'https://www.huiyadan.com/images/banner/20.jpg',
            //     'https://www.huiyadan.com/images/banner/21.jpg',
            //     'https://www.huiyadan.com/images/banner/22.jpg',
            // ]
        }
    ]
})