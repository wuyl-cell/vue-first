<template>
    <div>这是用户列表页
        <el-table :data="users" style="width: 100%" router>
            <el-table-column label="id" width="180">
                <template slot-scope="scope">
                    <span style="margin-left: 8px">{{ scope.row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column label="姓名" width="180">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.name }}</p>
                        <div slot="reference" >
                            {{ scope.row.name }}
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" ><router-link :to="`/user/` + scope.row.id">查看用户详情</router-link></el-button>

                    <el-button
                        size="mini"
                        type="danger"
                        @click="del_user(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <br>
<!--        <table border="2">-->
<!--            <tr>-->
<!--                <td>id</td>-->
<!--                <td>名字</td>-->
<!--                <td>操作</td>-->
<!--            </tr>-->
<!--            <tr v-for="(user,index) in  users" :key="index">-->
<!--                <td>{{ user.id }}</td>-->
<!--                <td>{{ user.name }}</td>-->
<!--                <td>-->
<!--                    <a href="javascript:void(0);" @click="del_user(index)">删除</a> |-->
<!--                    <router-link :to="`/user/${user.id}`">查看用户详情</router-link>-->
<!--                </td>-->
<!--            </tr>-->
<!--        </table>-->
        <br>
        <button @click="add_user" v-show="!flag">添加用户</button>
        <table v-show="flag" border="0">
            <tr>
                <td>用户名：</td>
                <td><input type="text" v-model="name"></td>
            </tr>
            <tr>
                <td>年龄：</td>
                <td><input type="text" v-model="age"></td>
            </tr>
            <tr>
                <td>生日：</td>
                <td><input type="date" v-model="bir"></td>
            </tr>
        </table>
        <br>
        <button @click="add_commit" v-show="flag">确认添加</button>

    </div>
</template>

<script>
export default {
    name: "List",
    data: function (){
        return{
            users: localStorage.users?JSON.parse(localStorage.users):[],
            name: '',
            bir: '',
            age: '',
            flag: false,
        }
    },
    methods: {
        add_user(){
            this.flag = true;
        },
        add_commit(){
            let id ='';
            if(localStorage.users){
                for(let i=this.users.length-1;i<this.users.length;i++){
                    id = parseInt(this.users[i].id) + 1
                }
            }
            else{
                id = 1
            }
            if(this.name){
                let name = this.name;
                let age = this.age;
                let bir = this.bir;
                console.log(1213)
                this.users.push({'id': id, 'name': name, 'age': age, 'bir':bir});
                this.age = '';
                this.name = '';
                this.bir = '';
                localStorage.users = JSON.stringify(this.users);
            }

        },
        del_user(index){
            this.users.splice(index, 1);

            if(this.users.length){
                localStorage.users = JSON.stringify(this.users);
            }
            else {
                localStorage.removeItem('users')
            }
        }
    }
}
</script>

<style scoped>

</style>
