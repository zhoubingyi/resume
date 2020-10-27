new Vue({
    el: '#vue-app',
    data: {
        name: '周秉颐',
        job: '前端开发工程师',
        aboutMeItems: [{
                aboutMe: '男 / 1996.5'
            },
            // {
            //     aboutMe: '现居住地：北京'
            // },
            {
                aboutMe: '电话: 13639013520'
            },
            {
                aboutMe: '教育经历: 大连民族大学 · 软件工程 · 本科'
            }
        ],
        Email: '邮箱: <a href="mailto:zhoubingyiya@gmail.com" target="_blank">zhoubingyiya@gmail.com</a>',

        //教育经历
        educationExperience: '教育经历',
        educations: {
            One: {
                name: '大连民族大学 · 软件工程 · 本科',
                time: '2015.9 - 2019.7',
                content: '获奖经历：第七届全国大学生电子商务“创新，创意及创业”挑战赛辽宁赛区三等奖；大连民族大学“挑战杯”选拔赛二等奖；大连民族大学计算机科学与工程学院网页设计大赛二等奖；'
            },
        },

        // 实习经历
        exercitationExperience: '实习经历',
        exercitations: {
            One: {
                name: '贵阳朗玛信息技术股份有限公司',
                time: '2019.3 - 2019.5',
                content: '开发电视机顶盒相关 App。做了清明节等相关等活动页面，使用 Ajax 数据加载，用于抽奖的活动；使用 原生 js 做了电视机遥控器焦点的跟踪。相关技术：用 thinkPhP 框架，原生JS，Ajax。'
            },
        },

        // 项目介绍
        projectExperience: '工作经历',
        projects: {
            One: {
                name: '北京东方国信科技股份有限公司',
                time: '2019.8 - 至今',
                content: {
                    One: {
                        tittle: '应急保障系统',
                        contents: [
                            '负责全部页面开发，使用 layUI，接口调用使用 Ajax',
                            '使用高德地图地图绘画相关区域',
                        ]
                    },
                    Two: {
                        tittle: '行销系统',
                        contents: [
                            '负责部分页面开发，使用 vue + elementUI，接口调用使用 axio',
                            '使用 Echarts 与 高德地图 进行数据展示，地图上展示热力图，绘制的区域',
                            '高德地图点击相关区域，刷新 Echarts 的数据'
                        ]
                    },
                    Three: {
                        tittle: '精准触达系统（出差）',
                        contents: [
                            '协助页面开发，使用 vue + elementUI，接口调用使用 axio',
                            '使用 Echarts 与 高德地图 进行数据展示',
                        ]
                    },
                    Four: {
                        tittle: '逍遥黔游系统',
                        contents: [
                            '安排相关工作与进度',
                            '负责全部页面开发，使用 vue + elementUI，接口调用，使用 axio',
                            '使用 Echarts 与 高德地图 进行数据展示',
                        ]
                    },
                }
            },
        },

        // 技能介绍
        skills: '技能',
        skillItems: [{
                skill: 'HTML、CSS、JavaScript'
            },
            {
                skill: 'Python、Django'
            },
            {
                skill: 'Vue.js、node.js、jQuery、Echarts、Ajax'
            },
            {
                skill: 'Google、Git、PhotoShop'
            }
        ],

        // 自我评价
        selfEvaluation: '自我评价',
        selfItems: [{
                self: '能手写就手写，不依赖插件，手写代码更简洁高效，也更能提升自己技术。'
            },
            {
                self: '对互联网产品和Web技术有强烈兴趣，有优秀的学习能力和强烈的进取心。'
            },
            {
                self: '喜欢钻研各种新技术，经常到 Github 学习代码。'
            },
            {
                self: '较强的事业心和责任心。'
            }
        ],

        resumeOnGithub: '<a class="footer-link" href="https://github.com/zhoubingyi/resume">简历链接（Github）</a>'
    }
});
