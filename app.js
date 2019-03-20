new Vue({
    el: '#vue-app',
    data: {
        name: '周秉颐',
        job: 'Web前端工程师',
        aboutMeItems: [
            {
                aboutMe: '男 / 1996.5'
            },
            {
                aboutMe: '大连民族大学 · 软件工程'
            },
            {
                aboutMe: '本科 / 2019年7月毕业'
            },
            {
                aboutMe: 'm: 136xxxxxxxx'
            }

        ],
        Email: 'e: <a href="mailto:zhoubingyiya@gmail.com" target="_blank">zhoubingyiya@gmail.com</a>',
        projectContentNames:[
            {
                projectName: '购物网站'
            }
        ],
        projectContents:[
                        {
                            projectContent: '主要是使用 HTML 标记、div + CSS + JavaScript Dom 操作等前端 Web 技术进行网站的开发'
                        },
                        {
                            projectContent: '通过 JavaScript(jQuery框架) 实现效果，如轮播图及回到顶部，导航下拉菜单及三级菜单实现'
                        }
        ]
    }
});
