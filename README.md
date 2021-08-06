## Task lists

- [x] Redux persist state
- [ ] (Optional) Redux next wrapper - Cho phep truy cap vao store redux ngay khi o server
      getInitProps getServerProps => set data vao redux khi o server
- [ ] Authentication route
  [Next-Auth](https://next-auth.js.org/getting-started/introduction)
- [ ] **Ui** Theme config (_ChakraUi_ / _MaterialUI_)

### Dynamic routes

- Tutor
- Course

#### Render at build time (or SSR if not exist)

Using

1. getStaticPaths (for pre-render at build)
2. getStaticProps (get param of dynamic page and render at build time)

```jsx
// pages/posts/[id].js
import { useRouter } from 'next/router';

function Post({ post }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Render post...
}

// This function gets called at build time
export async function getStaticPaths() {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://.../posts/${params.id}`);
  const post = await res.json();

  // Pass post data to the page via props
  return {
    props: { post },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1
  };
}

export default Post;
```

**_Notes_**: The `fallback` key is required

- If value is false -> the paths not return in getStaticPaths -> 404 page
- If value is **true** -> fallback version -> call the `getStaticProps` to re-render new path

_Docs_: https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation

#### Render at server (always) - getServerSideProps

`getServerSideProps` only runs on **_server-side_** and never ~~runs on the browser~~. If a page uses getServerSideProps, then

```jsx
function Page({ data }) {
  // Render data...
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Page;
```

### Fetching on clientside

Data constantly changes

```jsx
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Profile() {
  const { data, error } = useSWR('/api/user', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
```

> **Note**: You can import modules in top-level scope for use in `getServerSideProps`. Imports used in `getServerSideProps` will not be bundled for the client-side.
>
> This means you can write server-side code directly in `getServerSideProps`. This includes reading from the filesystem or a database.

### Navigate

- `next/link` cover most case

```jsx
<Link href="/">
  <a>Home</a>
</Link>
```

- `useRouter` for client-navigation

![NextJs with Chakra-ui Boilerplate](https://i.imgur.com/WfNLFV8.png)

This is a [Next.js](https://nextjs.org/) boilerplate

## What is inside?

This project uses lot of stuff as:

- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Chakra-ui](https://chakra-ui.com/)
- [PWA](https://web.dev/progressive-web-apps/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Getting Started

To create a project from this boilerplate run:

```bash
yarn create next-app MY_PROJECT_NAME --example https://github.com/Lukazovic/nextjs-with-chakra-ui-boilerplate
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `typecheck`: check typescript types
- `generate`: creates a component scaffold
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
