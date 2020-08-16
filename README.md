记账本演示

## 验证方式

git clone https://github.com/jimtang9527/cashbook/

#离线验证

cd cashbook/build

open index.html 

#开发验证

cd ..

npm install

npm start

### 技术方案

1、底层react+react-native-web+dva

对于产品型技术方案，一个原则要贯彻：控制得越细越好，控制得越底层越好。前期适应成本较高，上手不会那么快。但是后期开发应用才不受约束。

react-native比react更细。因此工程使用了react-native-web，它实现了react-native大部分接口，移植到移动端、PC端成本较低。

2、icon切换为svg

svg相比iconfont更加灵活，如在移动端，可彻底实现空中升级。另外对小于8px的icon，iconfont是无法做到，svg是大势所趋。

3、自实现Table/Button/Pagination组件

antd对一个小型产品还是太大，它对web可能还行，不过对于H5/移动端/PC客户端还是大了

4、可不依赖HTTP服务器，浏览器直接加载HTML运行