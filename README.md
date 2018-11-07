# fast-h5plus
## 说明
- 使用webpack构建多页面移动APP开发的快速框架
- 使用scss预处理器提高app样式开发效率
- 使用h5plus库调用移动端底层接口
- 使用vue提高开发效率，远离dom操作的繁琐
- 使用移动端布局终极解决方案hotcss让移动端布局开发更加容易
- 框架默认使用750px的设计稿，开发过程中在样式文件里直接书写像素px单位，webpack编译后会自动转换成对应的rem值
- 支持es6，es7语法，打包编译自动转es5，让你感受丝滑一般的开发畅快

## 使用
### 获取fast-h5plus
```
git clone git@github.com:CC4J/fast-h5plus.git
```
### 安装依赖
```
npm install
```
若安装缓慢可切换淘宝源
```
npm install --registry=https://registry.npm.taobao.org
```
### 开发
#### 新建页面
新建一个页面我们需要做两步操作。

第一步是在 src/pages/ 目录下新建每个页面的入口js文件以及入口vue文件，如我们新建一个登陆页，我们需要在src/pages/下新建src/pages/login/login.js与src/pages/login/login.vue。

第二步需要在根目录下的config目录中修改page.config.js文件，如：
```js
exports.pageSet = [
  {title: '登陆页', filename: 'login'}
]
```
#### 页面调试
新建完页面之后，我们需要在手机或pc浏览器中调试页面，需要进行三步操作。

第一步：修改根目录下的config目录中修改page.config.js文件，如：
```js
exports.devPage = 'login';
```
在这里大家要注意，调试哪一个页面，就需要将devPage的值修改成对应页面的文件名。

第二步：修改src/config/ 目录下的api.js文件，如
```js
var devMode = true;
```
将devMode的值改为true，作用有两处，一是开发阶段将使用webpack-dev-server的反向代理功能进行跨域请求。二是启动vconsole模块，方便在手机端调试时查看控制台的输出信息。这一步操作在整个开发过程中只进行一次。

第三步：在命令行运行npm start指令，启动webpack-dev-server服务。控制台会打印当前服务器的ip地址与端口后，我们只需要在Hbuilder中修改manifest中的入口为此ip地址与端口号则可启动进行真机调试。

注意：每次新建一个页面之后需要先停掉webpack-dev-server服务，按上面步骤操作之后再重新运行npm start命令即可。Hbuilder启动一次之后不需要再重新启动，你甚至可以停掉Hbuilder项目，手机中的调试基座仍会进行自动刷新。

### 打包
整个开发结束之后，我们需要对项目进行打包成apk或者ipk。打包之前需要进行以下操作：

第一步：修改src/config/ 目录下的api.js文件，如
```js
var devMode = false;
```
将devMode的值改为false将关闭页面vconsole控制台，关闭webpack-dev-server反向代理进行跨域功能。

第二步：修改Hbuilder中manifest.json文件的入口，如我们app的入口页是登陆页面，则入口修改为dist/login.html.

第三步：使用Hbuilder打包时需要将除dist以外的文件或目录添加到un'pa'ckage非打包清单中，减少我们app的体积。



