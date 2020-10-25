<template>
    <div>
        <input type="text" v-model="content">&nbsp;&nbsp;&nbsp;<button @click="add_content">发表留言</button>
        <br>
        <ul>
            <li v-for="(con, index) in contents" :key="index">
                {{con}}&nbsp;&nbsp;<button @click="del_content(index)">删除</button>
                <br>
            </li>
        </ul>
        &nbsp;&nbsp;&nbsp;<span>留言总条数：{{contents.length}}</span><br>
        <br>
        &nbsp;&nbsp;&nbsp;<button @click="del_all" v-if="contents.length">删除所有</button>
    </div>
</template>

<script>
export default {
    name: "Index",
    data: function (){
        return{
            contents: localStorage.contents?JSON.parse(localStorage.contents):[],
            content:'',
            num:1,
        }
    },
    methods: {
        add_content(){
            if(this.content == ''){

            }
            else{
                this.contents.push(this.content);
                this.content = ''
                localStorage.contents = JSON.stringify(this.contents)
            }
        },
        del_content(index){
            this.contents.splice(index, 1)
            localStorage.contents = JSON.stringify(this.contents)
        },
        del_all(){
            this.contents = []
            localStorage.contents = JSON.stringify(this.contents)
        }
    },

}

</script>

<style scoped>

</style>
