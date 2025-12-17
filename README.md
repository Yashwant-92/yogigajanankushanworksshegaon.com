This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Fix: Supabase Auth error "Unable to redirect to <domain>, because that domain is not added to the project"

If you see this error when using a custom domain (for example: `www.YogiGajana.com`):

It means Supabase Auth blocked a redirect to your domain because it isn't whitelisted in your project's Auth settings.

Follow these steps in the Supabase Dashboard to resolve:

1) Go to: Supabase Dashboard → Authentication → URL Configuration
2) Set "Site URL" to your production URL (use lowercase and https):
   - https://www.yogigajana.com
3) In "Additional Redirect URLs", add each of the exact URLs your app might redirect to during auth:
   - https://www.yogigajana.com
   - https://yogigajana.com
   - If you use specific paths for auth callbacks or magic links, add them explicitly, for example:
     - https://www.yogigajana.com/auth/callback
     - https://yogigajana.com/auth/callback
   Note: Wildcards aren't supported; list each exact URL you will use.
4) In the same page, under "Additional client origins (CORS)", add:
   - https://www.yogigajana.com
   - https://yogigajana.com
   - Keep localhost origins for development (e.g., http://localhost:3000).
5) If you use any OAuth providers (Google, GitHub, etc.), also open Authentication → Providers → [Your Provider] and add the exact production callback URL(s) there (e.g., https://www.yogigajana.com/auth/callback) as required by the provider.
6) Redeploy (or re-run) your frontend with the correct environment variables:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY

Tips:
- Use lowercase for domains in Supabase settings: yogigajana.com, www.yogigajana.com.
- If you plan to canonicalize to either the apex (yogigajana.com) or www, add both in the Supabase settings so either host works during the transition.
