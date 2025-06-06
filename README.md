# Converso - AI-Powered Learning Platform

A smart, seamless, and powerful platform that delivers personalized learning experiences through AI-powered companions and voice-based interactions.

## ✨ Features

- **AI Learning Companions**: Create personalized AI tutors for different subjects
- **Voice-Based Learning**: Real-time voice conversations with AI companions
- **Smart Authentication**: Secure user management with Clerk
- **Session Tracking**: Track learning progress and session history
- **Bookmarking System**: Save and organize favorite learning companions
- **Subscription Plans**: Multiple tiers with different companion limits
- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Error Monitoring**: Integrated Sentry for production error tracking

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Supabase
- **Authentication**: Clerk
- **Database**: Supabase (PostgreSQL)
- **Voice AI**: Vapi.ai with OpenAI GPT-4
- **Payments**: Clerk Subscriptions
- **Monitoring**: Sentry
- **Styling**: Tailwind CSS, Framer Motion

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd lms-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...

   # Vapi.ai (Voice AI)
   NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_token

   # Sentry (Error Monitoring)
   SENTRY_AUTH_TOKEN=your_sentry_token
   ```

4. **Set up the database**
   Run these SQL commands in your Supabase SQL editor:

   ```sql
   -- Create companions table
   create table companions (
     id uuid default uuid_generate_v4() primary key,
     name text not null,
     subject text not null,
     topic text not null,
     voice text not null,
     style text not null,
     duration integer not null,
     author uuid not null,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null
   );

   -- Create session_history table
   create table session_history (
     id uuid default uuid_generate_v4() primary key,
     user_id uuid not null,
     companion_id uuid not null references companions(id),
     created_at timestamp with time zone default timezone('utc'::text, now()) not null
   );

   -- Create bookmarks table
   create table bookmarks (
     id uuid default uuid_generate_v4() primary key,
     user_id uuid not null,
     companion_id uuid not null references companions(id) on delete cascade,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null,
     unique(user_id, companion_id)
   );
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                      # Next.js 14 app directory
│   ├── api/                  # API routes
│   ├── companions/           # Companion-related pages
│   ├── my-journey/           # User profile and history
│   ├── sign-in/              # Authentication pages
│   ├── subscription/         # Subscription management
│   └── layout.tsx            # Root layout
├── components/               # Reusable UI components
│   ├── ui/                   # Shadcn/ui components
│   ├── landing/              # Landing page components
│   └── ...                   # Feature components
├── lib/                      # Utility functions and configurations
│   ├── actions/              # Server actions
│   └── utils.ts              # Helper functions
├── constants/                # App constants and configurations
├── types/                    # TypeScript type definitions
└── public/                   # Static assets
```

## 🎯 Usage

### Creating a Learning Companion

1. Sign in to your account
2. Navigate to "Companions" → "New Companion"
3. Fill in the companion details:
   - Name and subject
   - Learning topic
   - Voice preference (male/female)
   - Teaching style (formal/casual)
   - Session duration
4. Click "Build Your Companion"

### Starting a Learning Session

1. Browse companions in the library
2. Click "Launch Lesson" on any companion
3. Click "Start Session" to begin voice conversation
4. Use microphone controls during the session
5. End the session when complete

### Managing Your Learning Journey

- View your learning progress in "My Journey"
- Bookmark favorite companions
- Track completed sessions
- Manage your created companions

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 🚀 Deployment

The application is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@converso.ai or join our Discord community.

---

Built with ❤️ using Next.js and AI technology.
