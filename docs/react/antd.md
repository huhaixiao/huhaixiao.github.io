- [antd](https://ant.design/index-cn)
- [antd mobile](https://mobile.ant.design/)

# Form.Item

- 被设置了 `name` 属性的 `Form.Item` 包装的控件
    - 表单控件会自动添加 `value`（或 `valuePropName` 指定的其他属性）
    - `onChange`（或 `trigger` 指定的其他属性）
    - 数据同步将被 Form 接管
1. 你**不再需要也不应该**用 `onChange` 来做数据收集同步
    1. 你可以使用 Form 的 `onValuesChange`
    2. 但还是可以继续监听 `onChange` 事件
2. 你不能用控件的 `value` 或 `defaultValue` 等属性来设置表单域的值
    1. 默认值可以用 Form 里的 `initialValues` 来设置
    2. 注意 `initialValues` 不能被 `setState` 动态更新，你需要用 `setFieldsValue` 来更新
3. 你不应该用 `setState`
    1. 可以使用 `form.setFieldsValue` 来动态改变表单值

组件
基础
Button
Icon

导航
Dropdown

数据录入
Input
Input.Number
Input.Password
Input.Search
Select
Checkbox
Radio
Toggle
Upload
Slider
DatePicker
WheelPicker

数据展示
IndexBar

反馈
Modal
Drawer
toast
message