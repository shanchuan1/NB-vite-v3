
# node服务器部署
终端窗口使用node开启服务后，不能关闭。所以使用pm2管理应用，解放终端窗口。
pm2使用：
启动项目：pm2 start脚本 --name自定义名称
查看运行项目：pm2 ls
重启项目：pm2 restart 自定义名称
停止项目：pm2 stop 自定义名称
删除项目：pm2 delete 自定义名称

```js
npm i pm2 -g
pm2 start .\index.js --name NB_vue
```

# 存在问题
利用node搭建服务器
托管vue项目打包生成的dist静态资源文件 

1. 启动服务器访问项目产生跨域问题暂时未解决