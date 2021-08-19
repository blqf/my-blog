import Mock from 'mockjs';
import qs from 'querystring';

//提交留言
Mock.mock('/api/message', 'post', {
    code: 0,
    msg: '',
    data: {
        id: '@guid',
        nickname: '@cname',
        content: '@cparagraph(1, 10)',
        createDate: Date.now(),
        "avatar|1": [
            'https://ae01.alicdn.com/kf/H960423c0c11a4ee2bc3704ad8c006060E.jpg',
            'https://ae01.alicdn.com/kf/H511268a49c104a7dad8d8c3cad977cff6.jpg',
            'https://ae01.alicdn.com/kf/H21cd55605e1d48388a439adc825c96edn.jpg',
            'https://ae01.alicdn.com/kf/Ha5101e5e64c74a7591ba3d5f22fb1ad7K.jpg',
            'https://ae01.alicdn.com/kf/H8072340e29b149d6b616fee751e2da1cl.jpg',
            'https://ae01.alicdn.com/kf/Ha6bcfc6b3b1145e79b8484bc4a3ccaf8j.jpg',
            'https://ae01.alicdn.com/kf/H7811c58b7f0b456d93b435e0cf7e97d3s.jpg',
            'https://ae01.alicdn.com/kf/Hcfa147ac0dea458ab352957159043359o.jpg',
        ],
    }
});

// 获取留言
Mock.mock(/^\/api\/message\/?(\?.+)?$/, 'get', function (options) {
    const query = qs.parse(options.url);
    return Mock.mock({
        code: 0,
        msg: '',
        data: {
            total: 52,
            [`rows|${query.limit || 10}`]: [{
                id: '@guid',
                nickname: '@cname',
                content: '@cparagraph(1, 10)',
                createDate: Date.now(),
                "avatar|1": [
                    'https://ae01.alicdn.com/kf/H960423c0c11a4ee2bc3704ad8c006060E.jpg',
                    'https://ae01.alicdn.com/kf/H511268a49c104a7dad8d8c3cad977cff6.jpg',
                    'https://ae01.alicdn.com/kf/H21cd55605e1d48388a439adc825c96edn.jpg',
                    'https://ae01.alicdn.com/kf/Ha5101e5e64c74a7591ba3d5f22fb1ad7K.jpg',
                    'https://ae01.alicdn.com/kf/H8072340e29b149d6b616fee751e2da1cl.jpg',
                    'https://ae01.alicdn.com/kf/Ha6bcfc6b3b1145e79b8484bc4a3ccaf8j.jpg',
                    'https://ae01.alicdn.com/kf/H7811c58b7f0b456d93b435e0cf7e97d3s.jpg',
                    'https://ae01.alicdn.com/kf/Hcfa147ac0dea458ab352957159043359o.jpg',
                ],
            }]
        }
    })
});
