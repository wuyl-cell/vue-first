<template>
    <div id="app">
        <router-link to="/index">留言板</router-link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="/list">用户列表</router-link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    components:{},
}
</script>

<style>

</style>
