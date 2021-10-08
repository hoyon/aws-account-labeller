<script>
 import { createEventDispatcher } from 'svelte';
 export let aliases;

 const dispatch = createEventDispatcher();

 function save() {
   dispatch('save', {
     aliases: aliases
   });
 }
</script>

<textarea bind:value={aliases} rows=20></textarea>

<button on:click|once={save}>
  Save
</button>

<style>
 textarea {
   width: 100%;
 }
</style>
