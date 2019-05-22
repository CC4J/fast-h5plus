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

#### 转成app项目
将项目用Hbuilder打开，使用Hbuilder转换为app项目功能将项目进行转换，具体操作为鼠标右键点击项目目录，在弹出选项中选择转换为app项目，转换完成后项目中将多出manifest.json app配置文件

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

第一步：修改根目录下的config目录中修改page.config.js文件，若您的app中第一个页面是登录页login，则修改如下：
```js
exports.devPage = 'login';
```
在浏览器中想调试哪个静态页面样式，如我们要调试home.html页面样式，在浏览器地址栏输入如下：
```
http://xxxx.xxxx.xxxx.xxxx:9000/home.html
```

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

### 代码提交流程
```
// 检查本地工作区是否有代码发生修改
git status

// 将修改的代码添加到本地临时区
git add .

// 将本地临时去的代码提交到本地工作区
git commit -m"feat: 代码说明"

// 拉取远程代码与本地工作区代码合并
git pull

// 将本地工作区代码提交到远程
git push

// 切换分支（如切换到开发分支）
git checkout dev

// 分支合并（如主分支要合并开发分支的代码）
// 第一步： 由开发分支切换到主分支上
git checkout master
// 第二步： 合并开发分支代码
git merge dev
// 第三步： 将合并代码提交到远程
git push
// 第四部： 切回到开发分支进行开发
git checkout dev
```

### 常用方法

#### 页面跳转
```js
mui.openWindow({
  url: './' + pageName + '.html',
  id: 'pageName
});
```

#### 页面传参
```js
// a 页面 跳 b页面，并带参数 userId,

// a 页面
var userId = 'test';

mui.openWindow({
  url: './a.html',
  id: 'a',
  extras: {
    userId: userId
  }
})

// b 页面 获取参数userId
var userId = null;
mui.plusReady(function () {
  userId = plus.webview.currentWebview().userId
})

```

#### 发送ajax请求

```js
// 引入ajax库
import http from 'src/util/ajax'
// 引入api
import api from 'src/config/api'

// 发起请求
http({
  url: api.yourApiName,
  data: {
    xx: xx
  }
}).then(res => {

}).catch(err => {
  
})

```
#### 编程式子页面返回上一页
```js
// 为了用户体验，建议延迟一秒关闭页面
setTimeout(() => {
  mui.back()
}, 1000)
```

#### mui询问框
```js 

 mui.confirm('确认提交该信息?', '温馨提示', ['取消', '确定'], function (e) {
    if (e.index == 1) {
      // 用户点击确定之后的逻辑
    }
  }, 'div')
```

#### 逐渐消失的mui底部提醒
```js
  mui.toast('我在底部出现，而且会消失哟')
```

#### 单行折断
```html
<div class="mui-ellipsis">我是内容,超过行宽会出现省略号哟</div>
<!-- 两行折断 -->
<div class="mui-ellipsis-2">我是内容,超过行宽会出现省略号哟</div>
```

#### 区域滚动
```html
<div class="mui-scroll-wrapper">
	<div class="mui-scroll">
		<!--这里放置真实显示的DOM内容-->
	</div>
</div>
<script>
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });
</script>
```

#### 下拉刷新&上拉加载
```html
// 手动触发下拉刷新
// mui("#pullrefresh").pullRefresh().pulldownLoading();

// 手动触发上拉加载
// mui("#pullrefresh").pullRefresh().pullupLoading();

<template>
  <div>
    <heador :back="true">下拉刷新&上拉加载示例</heador>
    <!-- 刷新容器需添加 pullrefresh这个id -->
    <div id="pullrefresh" class="mui-content">
        <ul>
          <li v-for="item in list"></li>
        </ul>
    </div>
  </div>
</template>

<script>
import Heador from 'src/components/header/header.vue';
import mui from 'src/public/js/mui.min.js';
import api from 'src/config/api.js';
import http from 'src/util/ajax.js';

export default {
  components: {
    Heador
  },
  data () {
    return {
      list: []
    }
  },
  filters: {
    formatDate
  }, 
  methods: {
    getData (pageIndex, pageCount) { // 获取列表数据
    // pageIndex 请求的数据索引
    // pageCount 每一页显示的数据条数
      return http({
        url: api.yourapi,
        data: {
          pageIndex,
          pageCount
        }
      });
    },
    pulldownRefresh () { // 下拉刷新处理

      // 第一步：调用获取数据的接口
      this.getData(0, 10)
      // 第二步：请求成功后处理数据
      .then(data => {
        that.list = [];
        if (data.result == 0) {
          mui.toast('网络连接异常');
        }else {
          this.list = data.list;
        }
      })
      // 第三步：请求错误捕获
      .catch(err => {
        mui.toast('网络连接异常');
      })
      // 第四步：结束下拉刷新动作并更新下拉容器（该步骤为必须步骤，不可以省略）
      .then(() => {
          setTimeout(() => {
            mui('#pullrefresh').pullRefresh().endPulldown();
            mui('#pullrefresh').pullRefresh().refresh(true);
          }, 1000);
      });
    },
    pullupRefresh () { // 上拉加载处理
      // 第一步：获取下一页第一条数据的索引值
      var idx = this.list.length || 0;
      // 第二步：声明一个标识，判断请求成功后数据库时候还有多余数据可以进行下一次翻页
      var flag = false;
      // 第三步：发起请求获取数据
      this.getData(idx, 10)
      // 第四步：请求成功后数据处理
      .then(data => {
        if (data.result == 0) {
          mui.toast('网络连接异常');
        }else {
          data.list.map(item => {
            that.list.push(item);
          });
          // 第五步： 判断获取的数据是否小于10条，如果小于10条，说明当前页为最后一页，则将flag设置为true，表示已经翻页到底了
          if (data.list.length < 10) {
            flag = true;
          }
        }
      })
      // 第六步： 请求失败处理
      .catch(err => {
        mui.toast('网络连接异常');
      })
      // 第七步： 结束上拉加载动作，如果flag为false，则可以继续上拉加载下一页，如果为true，则页面到底，无法再进行上拉加载下一页
      .then(() => {
          setTimeout(() => {
            mui('#pullrefresh').pullRefresh().endPullup(flag);
          }, 1000);
      });
    }
  },
  mounted () {
    this.$nextTick(() => {
      // 初始化上拉下拉加载容器，该步骤不能省略
      mui.init({
				pullRefresh: {
					container: '#pullrefresh',
					down: {
						style:'circle',
						callback: this.pulldownRefresh
					},
					up: {
						auto:true,
						contentrefresh: '正在加载...',
						callback: this.pullupRefresh
					}
				}
			});
    })
  }
}
</script>
```

#### 使用相机拍摄图片
```js
// 引入拍照方法
import photoByCamera from 'src/util/photoByCamera.js'

// 在你的某个方法中使用它进行拍照
photoByCamera(
  imgSrc => {
	
  },
  err => {
	
  }
)
```

#### 使用相册选择照片
```js
// 引入相册选择的方法
import photoByGallery from 'src/util/photoByGallery.js'

// 在你的某个方法中使用它进行相册选择照片
// 默认是多选，最大为9张图片，若需修改，请查看h5plus api 
photoByGallery(
  imgSrcList => {

  },
  err => {
    
  })

```

#### 文件上传方法
```js
// 引入文件上传api
import api from 'src/config/api.js'

// 在你需要用到的方法里编写如下代码
plus.nativeUI.showWaiting('图片上传中'); // 启动loading动画

// 第一步：创建上传对象
var task = plus.uploader.createUpload(
  api.yourUploadApi,   // 请求接口
  { method:"POST"}, // 请求类型
  function ( t, status ) { // 上传结束回调
    plus.nativeUI.closeWaiting(); // 关闭loading动画
    if ( status == 200) {  // 上传成功
      plus.nativeUI.toast('提交成功') // 给个小提示
      // 之后的业务逻辑写在这里
      // 如果后台有返回值，则这样取 t.responseText 这是个字符串，需转为json对象
      var res = JSON.parse(t.responseText)
      if (res.code == 2001) {
        // todo
      }
    } else { // 失败处理
      plus.nativeUI.toast('提交成功')('网络连接异常');
    }
  }
);

// 第二步：添加上传图片路径以及其他要传给后台的参数
// 注意，参数只能为字符串！！！
var paths = [] // 假设path 是我们要上传的图片路径的集合
var userId = 'caocong' // 假设后台需要我们传递一个userId参数给它  

// 遍历图片数组
for (var i = 0; i < paths.length; i++) {
  var path = paths[i];
  // 将平台绝对路径转换为本地url路径
  var img = plus.io.convertAbsoluteFileSystem(path);
  // 添加图片参数
  task.addFile(img, {key: "file" + i});
}
// 添加其他参数，如userId 只能传字符串, 如果有多个参数,则传多次次adddata
task.addData("userId", userId + '');
task.addData('token', store.getUser().token + '')
tast.addData('content', this.content)

// 第三步： 开始上传
task.start();
```

#### 底部弹出选择器
```html
<!-- api 地址 -->
https://github.com/naihe138/vue-picker

<template>
  <div>
    <vue-pickers
      :show="show"
      :columns="columns"
      :defaultData="defaultData"
      :selectData="pickData"
      @cancel="close"
      @confirm="confirmFn"></vue-pickers>
  </div>
</template>

<script>
import vuepickers from "src/components/vuePickers/vuePickers.vue";
export default {
  components: {
    vuePickers
  },
  data() {
    return {
      show: false,
      columns: 1,
      defaultData: [
        {
          text: 1999,
          value: 1999
        }
      ],
      pickData: {
        // 第一列的数据结构
        data1: [
          {
            text: 1999,
            value: 1999
          },
          {
            text: 2001,
            value: 2001
          }
        ]
      }
    }
  },
  methods: {
    close() {
      this.show = false
    },
    confirmFn(val) {
      this.show = false
      // 你选择的内容为
      // 一级
      console.log(val.select1)
      // 二级
       console.log(val.select1 + val.select2)
       // 三级
       console.log(val.select1 + val.select2 + val.select3)
    },
    toShow() {
      this.show = true
    }
  }
}
</script
```

#### 打开内置浏览器跳转外部链接

```js
// 在您的方法里调用它
var url = 'www.baidu.com'
plus.runtime.openWeb(url)
```

#### 打开第三方地图进行抵制导航
```js
var address = addr.trim();
		
		var bdMapURI = '';
		// 判断当前环境是ios还是Android
		if( mui.os.ios ) {
			// 调用系统第三方程序进行导航
			var dst = new plus.maps.Point(axisx, axisy); // 目的地 
			var src = new plus.maps.Point(curLongitude, curLatitude); // 当前位置
			plus.maps.openSysMap( dst, address, src );
			
		} else {
			bdMapURI = 'bdapp://map/geocoder?src=openApiDemo&address=' + address;
			
			plus.runtime.openURL( bdMapURI, function(){
				mui.toast('未安装百度地图',{type:'div' });
			});
		}
```

#### 支付接口示例
```js
// 引入支付方法
import payment from 'src/util/payment.js'
// 根据用户选择的支付方式，定义支付标识  用于标识支付通道： "alipay" - 表示支付宝； "wxpay" - 表示微信支付； //"appleiap" - 表示苹果应用内支付； "qhpay" 
// 假设用户选择的是支付宝 那么设置支付标识
var payFlag = 'alipay';
var payBody = '' // 从后台获取支付参数

// 开始支付

payment(
  payFlag, 
  payBody, 
  function () {
    // 成功回调
  }, 
  function (err) {
    // 失败或取消回调
  }
)
```

#### 子页面触发父页面自定义事件
```js
// 第一步
import Heador from "src/components/header/header.vue";
import mui from "src/public/js/mui.min.js";
window.mui = mui; // 首先每个页面的.vue文件里要加上这一行

// 第二步，子页面触发自定义事件
// 这是子页面代码
mui.fire(
  plus.webview.getWebviewById('filename'), // 父页面webview对象
  'yourEventName', // 自定义事件名称，这个名称你自己随便取
  {name: 'cc'} // 你可以回传一些参数给父页面，我们这里随便传一点，比如传个name过去
)
mui.back();//子页面最后一步 Back回父级页面
// 第三步，父页面监听自定义事件
// 这是父页面代码
// 父页面这里监听的事件要跟你子页面触发的那个事件对应
 mui.plusReady(() => {
      window.addEventListener("yourEventName", (e) => {
        // 获取子页面传过来的参数，比如刚传过来的name
        var name = e.detail.name;
          // 拿到name后，你可以做你想做的操作，比如刷新页面数据，删除数据等等
        
      });
  });

```

#### 开启右滑关闭功能
```js
mui.init({
            swipeBack: true //启用右滑关闭功能
        });
```