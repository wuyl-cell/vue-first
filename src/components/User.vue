<template>
    <div>这是用户详情页id：{{ $route.params.id }}<br>
<!--        <ul>-->
<!--            <li v-for="(user, index) in users" :key="index" v-if="user.id==$route.params.id">-->
<!--                {{ user.id }}, {{ user.name }}, {{user.age}}-->
<!--            </li>-->
<!--        </ul>-->
        <table border="2">
            <tr>
                <td>id</td>
                <td>name</td>
                <td>age</td>
                <td>bir</td>
            </tr>
            <tr>
                <td>{{ id }}</td>
                <td>{{ name }}</td>
                <td>{{ age }}</td>
                <td>{{ bir }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "User",
    data: function (){
        return{
            name: '',
            age: '',
            bir:'',
            id: this.$route.params.id
        }
    },
    methods: {

    },
    created() {
        let id = this.$route.params.id;
        let users = JSON.parse(localStorage.users)
        for(let i=0; i<users.length; i++){
            if(users[i].id == id){
                this.name = users[i].name;
                this.age = users[i].age;
                this.bir = users[i].bir;
            }
        }

    },

}
</script>

<style scoped>

</style>
