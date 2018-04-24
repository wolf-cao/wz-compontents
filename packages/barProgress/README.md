# wz-bar-progress

### 使用说明

```html
  <wz-bar-progressr :percentage='percentageCopy' :bgcolor='bgcolorCopy' :linecolor='linecolorCopy'  :introduce='introducecopy'></wz-bar-progressr>
```

<br />

### 配置参数

| 参数        |类型      | 值                                                             |
| :---------- | :------- | :------------------------------------------------------------  |
| percentage  | Number   | 进度条所占的百分比     默认值: 0,                                |
| bgcolor     | String   | 进度条默认的背景颜色   默认值: '#FFFFCC'                          |
| linecolor   | String   | 进度条的线条颜色       默认值: '#FFFF00'                         |
|  cavWidth   | String   | 画布的宽度(高度，半径以及中心值都是根据宽度计算)默认值：'100'        |
| introduce   | String   | 进度条介绍(进度条颜色是线条颜色的深色系) 默认值 ： '进度值'         |
| fontSize    | Number   | 字体的大小的设置   默认值:25                                      |
| fontFamilys | Srting   | 字体系列的设置   默认值:'Microsoft Yahei'                         |

### 下为截图

![img-alt](https://github.com/wolf-cao/my-images/blob/master/barprocess.PNG?raw=true)