async function create(afterRenderHook) {
  try {
    const { default: SvelteRenderer } = await import(
      './src/SvelteRenderer.svelte'
    )
    console.log('DEBUG garden_app?', document.getElementById('garden_app'))
    let app = new SvelteRenderer({
      target: document.getElementById('garden_app'),
      props: { afterRenderHook },
    })
    return {
      destroy: () => app?.$destroy?.(),
      updateComponent: (props) => {
        app?.$destroy?.()
        app = new SvelteRenderer({
          target: document.getElementById('garden_app'),
          props: { ...props, afterRenderHook },
        })
      },
    }
  } catch (e) {
    console.log('DEBUG', 'error', e)
  }
}

export default { create }
