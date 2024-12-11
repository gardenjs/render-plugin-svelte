import { mount, unmount } from 'svelte'

async function create() {
  try {
    const { default: SvelteRenderer } = await import(
      './src/SvelteRenderer.svelte'
    )
    let app = mount(SvelteRenderer, {
      target: document.getElementById('garden_app'),
    })
    return {
      destroy: () => unmount(app),
      updateComponent: (props) => {
        unmount(app)
        app = mount(SvelteRenderer, {
          target: document.getElementById('garden_app'),
          props: { ...props },
        })
      },
    }
  } catch (e) {
    console.log('DEBUG', 'error', e)
  }
}

export default { create }
