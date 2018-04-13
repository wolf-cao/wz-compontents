# wz-searcher

### 使用说明

```html
  <wz-searcher :searchData="sourceData" :searchKeys="sourceKeys" @search="globalSearch"></wz-searcher>
```

#### <font color="#dd0000">注:</font>

##### 1.type 属性可以切换上面例子的两种样式

##### 2.可以通过修改 search-strong 的样式来改变搜索值得样式

<br />

### 配置参数

| 参数        | 类型     | 值                                                            |
| :---------- | :------- | :------------------------------------------------------------ |
| type        | String   | 默认值: 'single', 其他值'normal'                              |
| placeholder | String   | 默认值: '请输入搜索内容'                                      |
| searchKeys  | Array    | 要搜索的数据关键字                                            |
| searchData  | Array    | 要搜索的原始数据                                              |
| search      | Function | 返回一个对象 { data: [Array]搜索结果, value: [String]搜索值 } |
