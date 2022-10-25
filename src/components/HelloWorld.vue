<template>
<div class= "container">
    <div class = "input-bu" @click = "open">
        多文件上传 一劳永逸
        <input ref = "inputOpen" type = "file" @change = "getFile"/>
    </div>
    <div>
        <el-tag v-for = "(file,index) in files"
        closable
        :key = "file.name"
        @close = "closeFileTag(index)"
        >{{file.name}}</el-tag>
    </div>
    <el-button v-if= "canUpload" @click = "uploadAll">一次性上传</el-button>
    <el-button v-if= "canUpload" @click = "uploadLine">连续上传</el-button>
    <el-button v-if= "canUpload" @click = "uploadPromiseAll">并发上传</el-button>
</div>
</template>
<script>
import { Upload } from 'element-ui';
import http from "../service/index.js";
export default {
    name: "HelloWorld",
    data: function() {
     return {
        files:[],
     };
 },
 computed:{
    canUpload (){
     return this.files.length !== 0;
    },
 },
   methods:{
    getFile(event){
        this.files.push(event.target.files[0]);
    },
    async uploadAll(){
        const fileData = new FormData();
        this.files.forEach((file) =>{
            fileData.append(file.name,file);
        });
        await http.post("/upload",fileData);
    },
    async uploadLine(){
        for (let file of this.files){
            const fileData = new FormData();
            fileData.append(file.name.file);
            await http.post("/upload",fileData);
        }
    },
    async uploadPromiseAll() {
        const aysncTask = []
        this.files.forEach(file => {
            const fileData = new FormData()
            fileData.append(file.name, file)
            const aTask = http.post("/upload", fileData);
            aysncTask.push(aTask);
        })
        const reses = await Promise.allSettled(aysncTask)
        console.log(reses)
    },
    open(){
        this.$refs.inputOpen.click();
    },
    closeFileTag(index){
        this.files.splice(this.files.indexOf(index),1);
    },
   },
};
</script>
<style lang = "scss" scoped>
.container {
    margin: 100px;
}
.input-bu:hover {
    cursor:pointer;
    background: #66b1ff;
    border-color: #66b1ff;
}
.input-bu {
  position: relative;
  background-color: #409eff;
  color: #fff;
  font-size: 12px;
  border-radius: 5px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  input {
    position: relative;
    width: 0;
    height: 0;
    z-index: -1;
  }
}
</style>