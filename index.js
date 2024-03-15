async function create(afterRenderHook, decorators) {
  try {
    const { default: SvelteRenderer } = await import(
      './src/SvelteRenderer.svelte'
    )
    let app = new SvelteRenderer({
      target: document.getElementById('garden_app'),
      props: { afterRenderHook, decorators },
    })
    return {
      destroy: () => app?.$destroy?.(),
      updateComponent: (props) => {
        app?.$destroy?.()
        app = new SvelteRenderer({
          target: document.getElementById('garden_app'),
          props: { ...props, afterRenderHook, decorators },
        })
      },
    }
  } catch (e) {
    console.log('DEBUG', 'error', e)
  }
}

export default { create }
