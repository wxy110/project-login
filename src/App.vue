<template>
  <div >
    <router-view/>
  </div>
</template>
<script>
import EventBus, {EventType} from "./bus/index.js";
export default{
  name:"App",
  provide:{
    money:"1000000000",

  },
  mounted(){
    setTimeout(()=> {
      EventBus.$emit(EventType.GiveMoney,{count: 1});
      this.$i18n.locale = 'zh'
    },3000);
  },
};


</script>
<style>
* {
  margin: 0;
  padding: 0;
}
html, body, .app {
  height: 100%
}
