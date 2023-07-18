<script>
	//import Page from "src/routes/+page.svelte";
  export let right = false;
  export let title = "About us";
</script>
<div class="{right ? "wrapperRight" : "wrapperLeft"}">
  <div class="container">
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam hic corrupti nulla. Cupiditate, quos? Expedita eligendi distinctio totam ipsam libero delectus cum, sit iste quasi voluptates natus illum porro ipsum.</p>
    <div class="headerContainer">
      <h>{title}</h>
    </div>
  </div>
</div>

<style>
.container {
    background-color: rgb(158, 23, 23, 0.5);
    color: white;
    
    border-radius: 20px;
    
}
p {
    max-width: 320px;
    padding: 12px;
    font-size: large;
}
h {
  font-size: 2em;
  font-weight: 600;
 
  
  /*background-color: rgb(0, 0, 0, 0.5);*/
}
.headerContainer {
  background-color: rgb(0, 0, 0, 0.5);
   padding: 12px;
}

.wrapperLeft {
  max-width: fit-content;
    width: 90%;
}

.wrapperRight{
  /* display: flex; */
  max-width: fit-content;
    width: 90%;
  align-self: flex-end;
}
</style>