async function create(afterRenderHook) {
  try {
    const { default: SvelteRenderer } = await import('./SvelteRenderer.svelte')
    let app = new SvelteRenderer({
      target: document.getElementById('app'),
      props: { afterRenderHook },
    })
    return {
      destroy: () => app?.$destroy?.(),
      updateComponent: (props) => {
        app?.$destroy?.()
        app = new SvelteRenderer({
          target: document.getElementById('app'),
          props: { ...props, afterRenderHook },
        })
      },
    }
  } catch (e) {
    console.log('DEBUG', 'error', e)
  }
}

export default { create }
