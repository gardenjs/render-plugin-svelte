<script>
  import { onMount } from 'svelte'
  export let component
  export let selectedExample
  export let das
  export let afterRenderHook = async () => {}
  export let decorators = []

  let redirectData = {}
  $: {
    if (selectedExample) {
      redirectData = {}
    }
  }

  onMount(async () => {
    if (decorators.length === 0) {
      await afterRenderHook()
    }
  })

  function handleComponentOut(evt) {
    if (das.out) {
      das.out.forEach((out) => {
        if (evt.detail[out.name]) {
          if (selectedExample.redirect && selectedExample.redirect[out.name]) {
            const input = selectedExample.redirect[out.name]
            redirectData[input] = evt.detail[out.name]
          }
        }
      })
    }
  }
</script>

{#if decorators.length > 0}
  <svelte:component this={decorators[0]}>
    <svelte:self
      {component}
      {selectedExample}
      {das}
      {afterRenderHook}
      decorators={decorators.slice(1)}
    />
  </svelte:component>
{:else}
  <svelte:component
    this={component}
    {...selectedExample?.input}
    {...redirectData}
    on:out={handleComponentOut}
  />
{/if}
