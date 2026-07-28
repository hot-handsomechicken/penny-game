/**
 * Cloudflare Worker entry point for the hosted game.
 * Static files are served through the ASSETS binding configured by Vite.
 */
export default {
  fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
