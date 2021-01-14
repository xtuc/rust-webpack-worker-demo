addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  try {
    const {get} = await import("./crate/pkg");
    return new Response(get())
  } catch (e) {
    return new Response(e.stack)
  }
}
