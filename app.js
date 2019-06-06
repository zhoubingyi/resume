new Vue({
    el: '#vue-app',
    data: {
        name: '周秉颐',
        job: 'Web前端工程师',
        aboutMeItems: [{
                aboutMe: '男 / 1996.5'
            },
            {
                aboutMe: '本科 · 大连民族大学 · 软件工程'
            },
            {
                aboutMe: 'm: 136xxxxxxxx'
            }
        ],
        Email: 'e: <a href="mailto:zhoubingyiya@gmail.com" target="_blank">zhoubingyiya@gmail.com</a>',

        // 实习经历
        exercitationExperience: '实习经历',
        exercitations: {
            One: {
                name: '贵阳朗玛科技实习',
                time: '2019/3-2019.5',
                content: '开发电视机顶盒相关 App。做了清明节等相关等活动页面，遥控器焦点的跟踪。相关技术：用 thinkPhP 框架，使用原生JS。'
            },
        },

        // 项目介绍
        projectExperience: '项目经历',
        projects: {
            One: {
                name: '购物网站',
                content: '主要是使用 HTML 标记、div + CSS + JavaScript Dom 操作等前端 Web 技术进行网站的开发,通过 JavaScript(jQuery框架) 实现效果，如轮播图及回到顶部，导航下拉菜单及三级菜单实现。'
            },
            Two: {
                name: '报表系统',
                content: '使用 HTML、CSS 完成页面基本布局,协助使用 Python/ Django 进行后端开发。用 JavaScript 实现在页面直接查找数据，不直接查找数据库,负责开发小组的工作调度、人员职能安排与分配、网站的功能策划与需求分析。'

            },
            Three: {
                name: '新闻管理系统',
                content: '负责编写详细需求分析和客户管理模块,使用 HTML、CSS 完成页面基本布局,协助使用 JSP 进行后端开发，实现了新闻添加、新闻修改、新闻删除等几大功能。'

            },
        },

        // 技能介绍
        skills: '技能',
        skillItems: [
            {
                skill: '掌握 Web 前端开发基本技能，熟悉 W3C 标准'
            },
            {
                skill: '熟知 JS 基本语法与知识，熟练使用原生 JavaScript 进行开发和交互'
            },
            {
                skill: '掌握 HTML、CSS 等网页制作技术'
            },
            {
                skill: '熟悉页面架构和布局'
            },
            {
                skill: '了解 jQuery，Vue.js 等主流框架'
            },
            {
                skill: '懂些审美，重视用户体验与代码可维护性'
            },
            {
                skill: '掌握 Python、Git、PhotoShop'
            },
            {
                skill: '资深 Mac 用户、Google 用户'
            }
        ],

        // 自我评价
        selfEvaluation: '自我评价',
        selfItems: [{
                self: '对互联网产品和Web技术有强烈兴趣，有优秀的学习能力和强烈的进取心'
            },
            {
                self: '开发过一些开源的小项目，比如使用 Python 将课表导入日历'
            },
            {
                self: '喜欢钻研各种新技术，经常到github学习代码'
            },
            {
                self: '较强的事业心和责任心'
            }
        ],

        resumeOnGithub: '<a class="footer-link" href="https://github.com/zhoubingyi/resume">Resume On Github</a>'
    }
});
