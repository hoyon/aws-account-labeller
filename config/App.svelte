<script>
 import Form from './Form.svelte';

 async function getAliases() {
   const options = await browser.storage.sync.get('aliases');
   return options.aliases;
 }

 function saveAliases(aliases) {
   return browser.storage.sync.set({
     aliases: aliases
   });
 }

 let saveFinished = false;

 function save(event) {
   saveAliases(event.detail.alias_json).then(() => {
     saveFinished = true;
   });
 }

 let aliasesPromise = getAliases();
</script>

<main>
  {#await aliasesPromise}
    <p>loading aliases...</p>
  {:then aliases}
    <Form alias_json={aliases} on:save={save} />
  {/await}

  {#if saveFinished}
    <p>Saved!</p>
  {/if}
</main>
