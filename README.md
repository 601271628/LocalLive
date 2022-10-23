# 运行
## 下载微信npm依赖
## 构建npm
## 下载nodeApi文件夹的npm依赖
## 小程序运行即可

# npm   
- npm i 进行下载
- 很多包小程序不支持
- 下载后构建npm

# 分包
- app.json内配置subpacks
- {
        "root":"pagesA",
        "name":"p1",
        "pages": [
        "pages/cat/cat"
        ]
    },
- 独立分包 "independent": true
- 独立：无法使用主包的资源

# 分包预下载配置
- app.json中：
-   "preloadRule": {
        "pages/message/message":{
            "packages": [
                "p1"
            ],
            "network": "all" //wifi
        }
    },


# 自定义tabbar （查看开发文档）
- 按照步骤来
- 使用vant的tabbar快速开发
- page页面的路径直接写/pages...就行 不需要../../....
- 注意图片路径
- 修改样式注意开启styleIsolation:"shared"
- 使用store来解决active问题