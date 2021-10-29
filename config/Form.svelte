<script>
 import { createEventDispatcher } from 'svelte';
 export let alias_json;
 let alias_list = JSON.parse(alias_json);

 const dispatch = createEventDispatcher();

 function save() {
   dispatch('save', {
     alias_json: JSON.stringify(alias_list)
   });
 }

 function add() {
   alias_list = [...alias_list, {account_id: "", alias: ""}];
 }

 function delete_item(index) {
   alias_list.splice(index, 1);
   alias_list = alias_list;
 }
</script>

<div class="header">
  <span>AWS account id</span>
  <span>Alias</span>
</div>

{#each alias_list as alias, i}
  <div class="entry">
    <input minlength="12" maxlength="12" bind:value={alias.account_id}>
    <input bind:value={alias.alias}>
    <button on:click={() => delete_item(i)}>Delete</button>
  </div>
{/each}

<div class="button-container">
  <button on:click={add}>
    Add
  </button>
</div>

<div class="button-container">
  <button on:click|once={save}>
    Save
  </button>
</div>

<style>
 .header {
   display: flex;
 }

 .header span {
   flex-basis: 33%;
   font-weight: bold;
   margin: 0 4px;
 }

 .entry {
   display: flex;
 }

 .entry input {
   flex-basis: 33%;
 }

 .entry > * {
   margin: 0 4px;
 }

 .entry {
   margin-bottom: 4px;
 }

.button-container {
   margin-top: 16px;
 }
</style>
