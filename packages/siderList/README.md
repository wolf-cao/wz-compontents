# wz-sider-list

### 使用说明

### 配置参数
#### - wz-silder 属性配置 -

| 参数           | 类型    | 值          | 说明                |
| :------------  | :------ | :---------- | :------------------ |
| searchData     | Array   | 数据源      | 搜索列表中的数据源   |
| sourceKeys     | Array   | 要搜索的数据关键字 |          |
| sortType       | Array   | 默认: ''   | 排序的数据源，name（显示名称）,id,type（搜索条件）必填 |
| showSearch     | Boolean | 默认: 'true' | 是否显示搜索按钮|
| showSort       | Boolean | 默认: 'true' | 是否显示排序按钮|
| searchResult   | Function |返回一个对象 { value: [Array]搜索结果 }|
| sortResult     | Function |返回一个对象 { data: [Array]排序结果 }|
| showCheckedAll | Boolean  |是否显示头部的checkbox                |
| sourceData     | Array    |当前列表显示的源数据                   |
#### - wz-silder 方法配置 /事件-


| 名字            | 说明      |    说明                |
| :------------  | :------   |     :------------------ |
| click          | Function  |     返回当前所选择的数据 |

#### - wz-silder  slot
| 参数           | 类型       
| :------------  | :------    | :---------- | :------------------ |
| header-name    |本插槽用于显示在头部所需的一些内容，通常可以是一些span，tabs等|

#### - wz-silder-item 属性配置 -
| 参数            | 类型    | 值          | 说明                |
| :------------  | :------ | :---------- | :------------------ |
| activeStyle    | Boolean |             | 控制当前的选择样式，需将id进行比较|
| showtype       |String   | MultiData/singleData| 多行数据/单行数据样式|
| itemData       |object   |             |遍历的条数据|
| showChecked     |Boolean  |默认false    |是否显示多选框|




