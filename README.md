# remix-i18n-boilerplate

Full-Stack boilerplate with latest Remix.run 2.16.6 version | remix-i18next v7 | react-router v7 | react: v18

A production-ready template for building full-stack React applications using Remix and React Router v7.

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📚 i18next for i18n
- 📚 shadcn for ui components
- 📚 tw-animate-css for animations
- 📚 react-intersection-observer for intersection observer
- 📚 postcss integrated in vite <https://remix.run/docs/en/main/styling/postcss#postcss>
- 📖 [Remix docs](https://remix.run/)
- 📖 [React Router docs](https://reactrouter.com/)
- 📖 [pnpm docs](https://pnpm.io/)

## Getting Started

We use pnpm as our package manager. Install it if you don't have it yet:

Follow official docs: <https://pnpm.io/installation>

### Installation

Install the dependencies:

```bash
pnpm install
```

Right after:

```bash
pnpm approve-builds
```

### Development

Start the development server with HMR:

```bash
pnpm run dev
```

Your application will be available at `http://localhost:3000`.

## Previewing the Production Build

Preview the production build locally:

```bash
pnpm run preview
```

## Building for Production

Create a production build:

```bash
pnpm run build
```

## Deployment

### Cloudflare Pages Deployment

This project is configured for deployment to Cloudflare Pages using Wrangler. The setup includes:

- `workers/server.js` - Handles the Cloudflare Workers integration with Remix
- `wrangler.toml` - Configuration for Cloudflare Workers deployment

To deploy the application:

1. Make sure you have the Wrangler CLI installed:

```sh
pnpm install -g wrangler
```

1. Log in to your Cloudflare account:

```sh
wrangler login
```

1. Build and deploy the application:

```sh
pnpm run deploy
```

This will build your Remix application and deploy it to Cloudflare Pages. You can also use the following commands for development and testing:

- `pnpm run dev` - Start the development server
- `pnpm run build` - Build the application
- `pnpm run preview` - Preview the built application locally

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using Remix.run
