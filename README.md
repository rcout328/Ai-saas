# AI SaaS

AI SaaS is an authenticated Next.js dashboard that exposes conversation, code, image, music, and video generation workflows through OpenAI- and Replicate-backed API routes.

## Core features

- Clerk-protected dashboard with sign-in and sign-up routes.
- Conversational and code-generation interfaces using chat messages.
- Prompt-based image generation with selectable amount and resolution.
- Prompt-based music and video generation through Replicate.
- Responsive landing page, dashboard navigation, loading states, and Markdown rendering.

## Technology stack

- Next.js 14, React 18, and TypeScript
- Clerk authentication middleware
- OpenAI Node SDK 3.x and Replicate
- Tailwind CSS, Radix UI primitives, and Lucide icons
- React Hook Form, Zod, Axios, and React Markdown

## Prerequisites

- Node.js and npm
- Clerk application configuration
- OpenAI and Replicate credentials for the corresponding generators

## Local setup

```bash
git clone https://github.com/varunisrani/Ai-saas.git
cd Ai-saas
npm ci
npm run dev
```

Next.js serves the development application at `http://localhost:3000` by default.

Production commands:

```bash
npm run build
npm run start
```

The repository also defines `npm run lint`.

## Configuration

The source directly references these environment variables:

| Name | Required | Purpose |
| --- | --- | --- |
| `OPENAI_API_KEY` | For conversation/code/image | Authenticates the server-side OpenAI routes. |
| `REPLICATE_API_TOKEN` | For music/video | Authenticates Replicate requests. |

Clerk configuration is required by `middleware.ts`, but this repository does not include an environment template or specify its variable names.

## Project structure

- `app/(landing)/` — public landing page.
- `app/(auth)/` — Clerk sign-in and sign-up pages.
- `app/(dashboard)/(routes)/` — conversation, code, image, music, video, and dashboard pages.
- `app/api/` — OpenAI and Replicate request handlers.
- `components/` — navigation, forms, feedback, and UI primitives.
- `lib/` and `constents.ts` — shared utilities and tool navigation metadata.

## Status and limitations

This is a prototype and no automated test script is defined. Keep `OPENAI_API_KEY` and `REPLICATE_API_TOKEN` in server-only environment configuration and never expose their values to client code. Authentication cannot run until valid Clerk configuration is supplied. The project uses older OpenAI SDK APIs and model identifiers, so compatibility with current provider APIs is not guaranteed.