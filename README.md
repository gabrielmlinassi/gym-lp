## General details:

- Built with Node `v18.7.0`. Check `/.nvmrc`
- Uses NextJS framework and pages are totally statically rendered `SSG`, even with authentication 🤯

## Setting up the Environment Variables

To run the project locally, create a `.env` or `.env.local` and add the following variables:

```bash
NEXT_PUBLIC_API_URL="https://api-stage.peakstrength.app/graphql"
NEXTAUTH_SECRET="k0FukUpOMpGamiuu5EVQpWt9KtVVs9diI4RWjkDZiGk="
# It may be localhost:3000 also. I've had a problem and that's because I'm using like this.
# Problem: https://github.com/nextauthjs/next-auth/discussions/4870#discussioncomment-3460766
NEXTAUTH_URL="http://127.0.0.1:3000"
```

## Notes about the project structure:

You'll notice all the components have this structure below. That's the structure that has worked best for so far and scales well to add new files like CSS Modules, testing, StoryBook, specific hooks, etc. I just don't recommend to nest it too much. Give preference to Atomic Design instead.

```bash
|--components
|---button
|----Button.tsx
|----index.ts
|...
```

We use a GraphQL backend but I ended up choosing not to install a GraphQL client as the project is quite small.
As the project grows, that's gonna be inevitable to handle cache and keep state in sync. Also, I've put all the queries and mutations into the queries folder but as we know it's a common practice to also add the queries directly into the component as they may need slightly different fields. So this folder's purpose is to contain only reusable queries/mutations.

```bash
|--queries
|---loginMutation.ts
|---viewerQuery.ts
|...
```

## Notes about data fetching & Error handling:

I'm using axios for data fetching. I also use the request interceptors to add the JWT token to the authorization header whenever one is available. Bear in mind if calling the API from `getServerSideProps`, the token on the interceptor will not be available because it depends on the client side to retrieve the token. A workaround in that case would be to manually set the authorization header:

```jsx
const getServerSideProps = async ({ req }) => {
    const token = await getToken({ req })
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    await api.getViewer()
    ...
}
```

Lastly, as the API returns 200 for all requests including errors, I'm only catching 5xx errors on the api intercetor response and redirecting to /500. I would suggest to log the API call errors into Sentry.

## Notes about authentication with NextAuth:

All validations and redirections are made with NextJS [middlewares](https://nextjs.org/docs/advanced-features/middleware) to avoid having to rely on `getServerSideProps` (SSR) or Client-Side redirections. Middlewares fit like a glove here. NextAuth also works well with many OAuth providers so adding social login will be a breeze

## Notes about deployment to Vercel

Not all enveriemnt variables are needed. `NEXTAUTH_URL` is not needed since NextAuth will automatically inject it for you as described [here](https://next-auth.js.org/configuration/options).

```bash
NEXT_PUBLIC_API_URL="https://api-stage.peakstrength.app/graphql"
NEXTAUTH_SECRET="k0FukUpOMpGamiuu5EVQpWt9KtVVs9diI4RWjkDZiGk="
```

## Notes about TailwindCSS

Different from other projects were I ended up adding the Tailwind styles into a CSS Modules with the `@apply` feature, this one I chose to use the object syntax instead. The reason is because for [Tailwind-Merge](https://github.com/dcastil/tailwind-merge) to work properly, it needs to know the the TW classes in use but CSS Modules will hash the names to clashes. More details [here](https://github.com/dcastil/tailwind-merge/discussions/122).

This project also contains a custom Tailwind Regex for IntelliSense on object. The regex can be found on `/.vscode` and it works like a comment before the classes, like `` /*tw:*/`bg-red-500` ``

Lastly, I use RadixUI as the UI library to build complex components and a Tailwind plugin [Tailwind integration](https://www.npmjs.com/package/tailwindcss-radix) to make it easier to style these Radix Primitivies

## Notes about InteliSense for CSS modules

For CSS Module styles intelliSense to work, make sure to use TypeScript version from the WorkSpace ([guide](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript))

## Running the project

```bash
# Spin up development server
npm i
npm run dev

# Build
npm run build
npm run start

# Analyze bundle
npm run analyze
```
