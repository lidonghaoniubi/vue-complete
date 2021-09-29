const Bookmarks = { 
data() {
return { 
list: DATA,
current: 1,
}
},
methods: {
handlecurrentchange(cur) {
this.current = cur;
}
},
template: `
<div>
<el-descriptions
class="margin-top"
:column="1"
border
>
<el-descriptions-item
v-for="(item, index) in list.slice((current - 1) * 10, current * 10)"
:key="index"
>
<template #label>
<img :src="item.ICON" alt="" />
</template>
<a :href="item.HREF" target="_blank">{{ item.NAME }}</a>
</el-descriptions-item>
</el-descriptions>
<el-pagination
background
layout="prev, pager, next"
:current-page="current"
:default-page-size="10"
@current-change="handlecurrentchange"
:total="list.length"
/>
</div>
`
};
const Home = {
data() {
return {
}
},
template: `
<div>
<el-image src="/assets/doge.jpg" />
</div>
`};

const children = 
[
{
path: '/home',
component: Home,
menuIcon: "el-icon-s-home",
},
{
path: '/bookmarks',
component: Bookmarks,
menuName: 'Bookmarks',
},
];

