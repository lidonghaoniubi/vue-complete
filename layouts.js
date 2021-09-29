const ClassicLayout = {
data() {
return {
menuList: children,
}
},
methods: {},
template: `
<el-container>
<el-header>
<el-menu
class="el-menu-demo"
mode="horizontal"
router
>
<el-menu-item
v-for="(item, index) in menuList"
:index="String(index)"
:route="{path:item.path}"
>
<i v-if="item.menuIcon" :class="item.menuIcon" />
{{item.menuName}}
</el-menu-item>
<el-menu-item>
<a href="https://www.notion.so/grandgiao/Getting-Started-3e53823b635b4f33ae0f4395564da13a" target="_blank">Notion.So</a>
</el-menu-item>
<el-menu-item>
<a href="https://user-from-github.cloudstudio.net/dashboard/workspace" target="_blank">
Cloud Studio
</a>
</el-menu-item>
</el-menu>
</el-header>
<el-main>
<router-view />
</el-main>
<el-footer>
sth coded by dg.
<a href="https://github.com/lidonghaoniubi" target="_blank">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACrElEQVQ4jW2SzWucVRTGf+fe9847SW2n+WioIdZkJkzGWLMsQvBjpRv1H1BcqSB166aUbgQXLkpEEGnF7ty5Edw0orULtS5DjNOZ5qvEKkMzEUuS6bz33tPFvCNj6LM653LO8/A85wpHUJmbW0QKbwMvAU8BCHpXkZshhK+2mmu3BudloC5UagsfI7wvIsOooqoKID2gqvuqfLFeX7kAdPsEBmZdea74beLcKxoj+R4iPf7BXozBZ9n1jdudN+BOZgEtV5/8pJAW3/JZ90ZU/UiF0yAnVbWpUVvAMLASo7+oUYuFQvrqiRFT2NttLctUtXouleIN62whZNm19dur7wLFiZmzpdbmahvQyWr15L2Dg312dg5n5s5+6lzhvPfZQ59lLyapce+IkSGNkSjaASzQaW2udvrh3Gs07ud2LUqmMVhrzLA4+55RNS+IqsYYO91u+AwIvVz+F3C/DkEffh5i3FdFwSwaEaYUBKT950Z9Ox+MgA4QaL+/22xuCWzl708bwGkv6mMj5XLxiPJRCJOTRYXx3pw6A9wRVRUjpZIZej5Xso+xkAB65lhp0YhM5H9k3ajqrxgD8MAm5sp0tVrLczhqwZ+ZfXbeJckSoGJEUH42MYQvUZXgw5Kq3nRu+I/KMwvLM9X5c/3tqXLtuUpt4WuXyC+CzANRo4audq/Yf9r3d0pjp0atTT7M/OGbxpg9VE5nofPNv+32HsDQ+MgTqXVXRSRV5dAmNo3eL2036tekf7JKbeEngbEY/QcKDzYba7/9Z2B6ulhJj2+LkQljLD5k1zfq8XVY8yY/WVivr7wcNf5oE/e9Mcmt0dnZE/398TR1COMi4n3wlzfqq6/BWheIdiCouLfb+u742KllVP/+q+l/gHYAONgdkdHRxIbgL202fr+aiwLwCG7VPT6fvRxuAAAAAElFTkSuQmCC" alt="" />
</a>
</el-footer>
</el-container>
`
}