# Cloudflare Workers React Boilerplate

[![[cloudflarebutton]]](https://deploy.workers.cloudflare.com)

A production-ready full-stack boilerplate for Cloudflare Workers featuring a modern React frontend with TypeScript, Tailwind CSS, shadcn/ui, and a powerful backend powered by Hono and Durable Objects. Includes real-time entity management (users, chats) with indexed listing, pagination, and CRUD operations.

## 🚀 Key Features

- **Modern React Stack**: React 18, Vite, TypeScript, React Router, Tanstack Query
- **Beautiful UI**: shadcn/ui components, Tailwind CSS with custom design system, dark/light theme support
- **Cloudflare Workers Backend**: Hono routing, CORS, logging, error handling
- **Durable Objects Entities**: Type-safe entity system with indexing, pagination, seeding, batch operations
- **Demo Entities**: Users and ChatBoards (with messages) – fully functional CRUD APIs
- **Development Tools**: Hot reload, error boundaries, client error reporting, theme toggle
- **Responsive Design**: Mobile-first, sidebar layout (optional), animations
- **Production-Ready**: Type-safe APIs, optimistic updates ready, Cloudflare deployment optimized

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, Lucide Icons, Tanstack Query, React Router, Sonner (toasts), Framer Motion |
| **Backend** | Cloudflare Workers, Hono, Durable Objects (Global storage + Entities) |
| **State/UI** | Zustand (ready), Immer, React Hook Form + Zod (ready), Headless UI |
| **Dev Tools** | Bun, ESLint, TypeScript strict mode, Cloudflare Vite plugin |
| **Other** | UUID, Date-fns, Recharts (charts ready) |

## 📦 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) installed
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (`bunx wrangler@latest` or global install)
- Cloudflare account (free tier sufficient)

### Installation

1. Clone the repo
2. Install dependencies:
   ```bash
   bun install
   ```
3. Run in development:
   ```bash
   bun dev
   ```
   - Frontend: http://localhost:3000
   - API: http://localhost:3000/api/health

## 💻 Development

### Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start dev server (frontend + worker proxy) |
| `bun build` | Build for production |
| `bun lint` | Run ESLint |
| `bun preview` | Local production preview |
| `wrangler types` | Generate Cloudflare types (`bunx wrangler types`) |
| `bun run deploy` | Build + deploy to Cloudflare |

### Project Structure

```
├── src/              # React frontend
│   ├── components/   # shadcn/ui + custom components
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utilities, API client
│   └── pages/        # Route pages
├── worker/           # Cloudflare Workers backend
│   ├── entities.ts   # Define your entities (extend IndexedEntity)
│   └── user-routes.ts # Add your API routes here
├── shared/           # Shared types (frontend + backend)
└── vite.config.ts    # Vite + Cloudflare config
```

### Customization

1. **Frontend**: Edit `src/pages/HomePage.tsx` (replace demo)
2. **Backend Routes**: Add to `worker/user-routes.ts`
3. **New Entities**: Extend `IndexedEntity` in `worker/entities.ts`
4. **Sidebar**: Use `AppLayout` or remove
5. **Theme**: Toggle via `ThemeToggle` component

### API Usage Example

```ts
// List users with pagination
const { data: { items, next } } = await api<{ items: User[], next: string | null }>('/api/users?limit=10')

// Create chat
const chat = await api<Chat>('/api/chats', {
  method: 'POST',
  body: JSON.stringify({ title: 'My Chat' })
})

// Send message
const msg = await api<ChatMessage>('/api/chats/${chat.id}/messages', {
  method: 'POST',
  body: JSON.stringify({ userId: 'u1', text: 'Hello!' })
})
```

## ☁️ Deployment

Deploy to Cloudflare Workers in one command:

```bash
bun run deploy
```

Or manually:
1. `bun build`
2. `wrangler deploy`

**[cloudflarebutton]**

### Production Notes

- Assets served via Cloudflare (SPA fallback)
- Durable Objects auto-migrate via `wrangler.jsonc`
- Observability enabled (logs, metrics)
- Global Durable Object for entity storage (SQLite-backed)

## 🤝 Contributing

1. Fork & clone
2. `bun install`
3. `bun dev`
4. Create PR

See [CONTRIBUTING.md](CONTRIBUTING.md) for details (create if needed).

## 📄 License

MIT License – see [LICENSE](LICENSE) (create if needed).

## 🙌 Support

Built with ❤️ for Cloudflare Workers. Questions? [Cloudflare Workers Discord](https://discord.gg/cloudflaredev)

---

⭐ Star on GitHub to support!