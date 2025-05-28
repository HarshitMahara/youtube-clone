# 🎬 YouTube Clone

A full-featured, modern **YouTube Clone** built with the latest web technologies including **Next.js 15 (App Router)**, **React 19**, **tRPC**, **Drizzle ORM**, and more. This project demonstrates a production-grade video platform that includes video upload, streaming, authentication, and AI-powered features.

## 🚀 Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Frontend:** [React 19](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **Backend:** [tRPC](https://trpc.io/), [Next.js API Routes], [Edge & Server Actions]
- **Database:** [PostgreSQL](https://www.postgresql.org/) + [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication:** [Clerk](https://clerk.dev/)
- **Storage:** [UploadThing](https://uploadthing.com/)
- **Video Processing:** [Mux](https://www.mux.com/)
- **AI Integration:** OpenAI APIs (optional)
- **Queue Jobs:** Background workers using Server Actions
- **Type Safety:** Full end-to-end type safety with TypeScript & tRPC

## 📸 Features

- ✅ Full authentication flow (Sign up, Sign in, Protected routes)
- ✅ Video upload with thumbnail and processing via Mux
- ✅ Responsive video player with playback controls
- ✅ Search and filtering of videos
- ✅ Commenting system
- ✅ Channel pages
- ✅ Like/Dislike system
- ✅ AI-generated video descriptions (optional)
- ✅ Server and Client Components separation
- ✅ Suspense and prefetching for performance
- ✅ Mobile responsive design
- ✅ Clean and modern UI with shadcn/ui
- ✅ Database migrations with Drizzle

## 🧱 Project Structure

```
app/
├─ api/              # Route handlers using tRPC & Next.js API routes
├─ components/       # Reusable UI components
├─ db/               # Drizzle schemas and database configuration
├─ hooks/            # Custom React hooks
├─ lib/              # Utility functions
├─ middleware.ts     # Middleware for auth/session
├─ styles/           # Global styles
└─ uploadthing/      # Upload endpoints
```

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/youtube-clone.git
   cd youtube-clone
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root and add the following:

   ```env
   DATABASE_URL=your_postgres_connection_url
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret
   UPLOADTHING_SECRET=your_uploadthing_secret
   UPLOADTHING_APP_ID=your_uploadthing_app_id
   MUX_TOKEN_ID=your_mux_token_id
   MUX_TOKEN_SECRET=your_mux_token_secret
   OPENAI_API_KEY=optional_if_using_ai_features
   ```

4. **Run database migrations**
   ```bash
   pnpm drizzle-kit push
   ```

5. **Run the development server**
   ```bash
   pnpm dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## ✅ To-Do (Optional Enhancements)

- [ ] Add video categories/tags
- [ ] Implement subscriptions
- [ ] Add notifications
- [ ] Video analytics
- [ ] Dark mode toggle
- [ ] Progressive Web App (PWA) support

## 📄 License

This project is for educational purposes and inspired by the [Code with Antonio](https://www.codewithantonio.com/) YouTube Clone course.  
All rights to original course material belong to him.