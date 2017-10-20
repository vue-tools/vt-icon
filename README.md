# vt-icon

基于 vue 2.x 封装的 icon 组件，同时支持桌面端和移动端。

## Install

```javascript
npm i vt-icon -S

import Icon from 'vt-icon'

// global install
Vue.component('Icon', Icon)

// scope install
export default {
    components: {
        Icon
    }
}
```

## Warning

Icon 组件默认没有图标数据，使用时需使用 `Icon.add` 方法导入图标数据，所有的图标都是 svg 格式，导入时需使用 svg 的 `width`, `height`, `d` 属性。

## Usage

```example
<style>
    .icon {
        display: inline-block;
        width: 28px;
        height: 28px;
    }
</style>
<template>
    <div class="icon">
        <Icon name="phone"></Icon>
    </div>
    <div class="icon">
        <Icon name="lock"></Icon>
    </div>
</template>

<script>
    import Icon from 'vt-icon'

    Icon.add({
        phone: {
            width: 15,
            height: 20,
            d: [
                'M14 15V2.995C14 1.893 13.103 1 11.997 1H3.003C1.893 1 1 1.893 1 2.995V15h13zm0 1v1.005C14 18.107 13.106 19 11.997 19H3.003C1.897 19 1 18.107 1 17.005V16h13zM0 2.994C0 1.34 1.344 0 3 0h9c1.657 0 3 1.343 3 2.994v14.012C15 18.66 13.656 20 12 20H3c-1.657 0-3-1.343-3-2.994V2.994zM5.5 2.5c0-.276.215-.5.49-.5h3.02c.27 0 .49.232.49.5 0 .276-.215.5-.49.5H5.99c-.27 0-.49-.232-.49-.5zm2 16c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z'
            ]
        },
        lock: {
            width: 15,
            height: 20,
            d: [
                'M7.75 14.468c.43-.11.75-.502.75-.968 0-.552-.448-1-1-1s-1 .448-1 1c0 .466.32.857.75.968v1.783c0 .143.112.25.25.25.134 0 .25-.11.25-.25V14.47zm1 .593c.457-.365.75-.928.75-1.56 0-1.105-.895-2-2-2s-2 .895-2 2c0 .632.293 1.195.75 1.56v1.185c0 .705.56 1.255 1.25 1.255.695 0 1.25-.562 1.25-1.255V15.06zM3 9H1.992C.892 9 0 9.892 0 10.992V15c0 2.76 2.236 5 4.995 5h5.01C12.755 20 15 17.76 15 15V10.99C15 9.9 14.108 9 13.008 9H12V4.503C12 2.023 9.985 0 7.5 0 5.02 0 3 2.016 3 4.503V9zm-2 1.998c0-.55.447-.998 1-.998h11c.553 0 1 .446 1 .998V14.5c0 2.485-2.017 4.5-4.492 4.5H5.492C3.012 19 1 16.98 1 14.5v-3.502zm3-6.49C4 2.572 5.57 1 7.5 1 9.433 1 11 2.56 11 4.51V9H4V4.51z'
            ]
        }
    })

    export default {        
        components: {
             Icon
        }
    }
</script>
```

## Interface

```interface
props:
  name:
    type: String
    default: ''
    description: 图标名称
  flip:
    type: String
    default: ''
    description: 旋转图标，取值 `horizontal` 或 `vertical`
```