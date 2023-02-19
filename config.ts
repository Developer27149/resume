export const CONFIG = {
  email: "rivenqinyy@gmail.com",
  github: "https://github.com/Developer27149",
  intro:
    "我是一名Web开发者，你可以叫我妙才。我目前在福建厦门的一家从事跨境电商相关内容生产的公司工作，司职前端开发，同时也做一些前端岗位的新人面试、技术分享和Code Review 等。",
  description:
    "我喜欢了解业界的一些新知识和新技术，经常在网上看其他人的作品和分享，自己有时间也尝试去开发一些好玩的东西，比如浏览器插件和终端CLI程序。",
  subDescription:
    "对了，我还会在每周一或周二更新自己的前端周刊微信公众号分享，如果你有兴趣，欢迎联系我~",
  projects: [
    {
      name: "前端脚手架 - 零",
      date: "2022-03-22",
      url: "#",
      covers: [
        {
          url: "#1",
          imageSrc: "#1",
        },
        {
          url: "#2",
          imageSrc: "#1",
        },
        {
          url: "#3",
          imageSrc: "#1",
        },
      ],
      description:
        "《零》是为公司内部前端开发团队开发的通用脚手架，支持选择公司内部不同方向的技术栈来创建前端项目基础程序，统一前端开发的规范和环境。此脚手架由我单人进行开发，主要利用了TypeScript和NodeJS的便携性，配合Gitlab分支管理开发完成，至今依然在不断维护和更新中。",
    },
    {
      name: "Amz123 Admin Dashboard 和前台页面维护",
      date: "2022-03-22",
      url: "#",
      covers: [
        {
          url: "#2",
          imageSrc: "#2",
        },
      ],
      description:
        "Amz123 是公司内部的主要产品，其前身是一个基于PHP技术的跨境电商和资讯类导航门户网站，2022年中我们开始了对其整个系统的重构，新的后台和前台，主要技术栈为 Vue3 + TypeScript，前端UI库方面我们选用了ElementPlus和Naive-UI以及社区非常火热的Tailwindcss来进行开发，首页和前台页面分别使用了静态缓存技术和Nuxt的SSR能力来保证良好的首屏加载速度和SEO。",
    },
    {
      name: "原生通用SDK",
      date: "2022-03-22",
      url: "#",
      covers: [
        {
          url: "#3",
          imageSrc: "#3",
        },
      ],
      description:
        "公司的主要产品线需要针对性地最小化增加少数功能，因此选用了原生JavaScript来提供SDK以支持某些独立或通用的功能，比如：搜索建议、广告展示、活动预告、模块增强等功能。",
    },
    {
      name: "Chrome 扩展程序 - 临",
      date: "2022-03-22",
      url: "#",
      covers: [
        {
          url: "#4",
          imageSrc: "#4",
        },
      ],
      description:
        "《临》是我为团队内成员开发的一款Chrome浏览器扩展程序，主要技术栈为React+TypeScript，并且使用Plasmo框架进行开发，可扩展性强。主要功能为：提供内部Portainer容器管理平台的快捷操作，例如打包、启动、查看日志等功能；此外，还有针对不同内部平台的Token注入自动更新测试环境等，Gitlab仓库和内部应用快捷入口等功能。",
    },
  ],
};
