const Main = () => (
  <div className='text-gray-700 w-full px-1 antialiased'>
    <div className='mx-auto max-w-screen-md'>
      <header className='border-gray-300 border-b'>
        <div className='pb-8 pt-16'>
          <h1 className='text-gray-900 text-3xl font-bold'>Nextjs Boilerplate</h1>
          <h2 className='text-xl'>Starter code for your Nextjs Boilerplate with Tailwind CSS</h2>
        </div>
      </header>

      <main className='content py-5 text-xl'>
        {' '}
        <h2 className='mt-5 text-2xl font-bold'>
          Boilerplate code for your Nextjs project with Tailwind CSS
        </h2>
        <p>
          <span role='img' aria-label='rocket'>
            🚀
          </span>{' '}
          Next.js Boilerplate is a starter code for your Next js project by putting developer
          experience first .{' '}
          <span role='img' aria-label='zap'>
            ⚡️
          </span>{' '}
          Made with Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, VSCode, PostCSS,
          Tailwind CSS, Authentication with NextAuth.
        </p>
        <h3 className='text-lg font-semibold'>Next js Boilerplate Features</h3>
        <p>Developer experience first:</p>
        <ul>
          <li>
            <span role='img' aria-label='fire'>
              ⚡
            </span>{' '}
            <a href='https://nextjs.org' rel='nofollow'>
              Next.js
            </a>{' '}
            with App Router
          </li>
          <li>
            <span role='img' aria-label='fire'>
              🔥
            </span>{' '}
            <a href='https://nextjs.org' rel='nofollow'>
              Next.js
            </a>{' '}
            for Static Site Generator
          </li>
          <li>✅ Strict Mode for TypeScript and React 18</li>
          <li>🐜 Ant Design framework</li>
          <li>
            <span role='img' aria-label='art'>
              🎨
            </span>{' '}
            Integrate with{' '}
            <a href='https://tailwindcss.com' rel='nofollow'>
              Tailwind CSS
            </a>
          </li>
          <li>
            <span role='img' aria-label='nail_care'>
              💅
            </span>{' '}
            PostCSS for processing Tailwind CSS
          </li>
          <li>
            <span role='img' aria-label='tada'>
              🎉
            </span>{' '}
            Type checking Typescript
          </li>
          <li>
            <span role='img' aria-label='pencil2'>
              ✏️
            </span>{' '}
            Linter with{' '}
            <a href='https://eslint.org' rel='nofollow'>
              ESLint
            </a>
          </li>
          <li>
            <span role='img' aria-label='hammer_and_wrench'>
              🛠
            </span>{' '}
            Code Formatter with{' '}
            <a href='https://prettier.io' rel='nofollow'>
              Prettier
            </a>
          </li>
          <li>
            <span role='img' aria-label='fox_face'>
              🦊
            </span>{' '}
            Husky for Git Hooks
          </li>
          <li>
            <span role='img' aria-label='lock'>
              🔒
            </span>{' '}
            Authentication with <a href='https://next-auth.js.org/'>NextAuth</a>
          </li>
          {/* <li>
            <span role='img' aria-label='package'>
              📦
            </span>{' '}
            Type-safe ORM with DrizzleORM, compatible with SQLite, PostgreSQL, and MySQL
          </li> */}
          {/* <li>
            <span role='img' aria-label='computer_disk'>
              💽
            </span>{' '}
            Global Database with <a href='https://turso.tech/?utm_source=nextjsstarterbp'>Turso</a>
          </li> */}
          <li>
            <span role='img' aria-label='no_entry_sign'>
              🚫
            </span>{' '}
            Lint-staged for running linters on Git staged files
          </li>
          <li>🚓 Lint git commit with Commitlint</li>
          <li>📓 Write standard compliant commit messages with Commitizen</li>
          <li>💡 Absolute Imports using `@` prefix</li>
          <li>🎉 Storybook for UI development</li>
          <li>🦺 Unit Testing with Jest and React Testing Library</li>
          <li>🧪 Integration and E2E Testing with Playwright</li>
          <li>
            <span role='img' aria-label='no_entry_sign'>
              🗂
            </span>{' '}
            VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint,
            Prettier, TypeScript
          </li>
          <li>♻️ Type-safe environment variables with T3 Env</li>
          <li>🔴 Validation library with Zod</li>
          {/* <li>
            <span role='img' aria-label='robot'>
              🤖
            </span>{' '}
            SEO metadata, JSON-LD and Open Graph tags with Next SEO
          </li> */}
          <li>
            <span role='img' aria-label='robot'>
              ⚙️
            </span>{' '}
            <a href='https://www.npmjs.com/package/@next/bundle-analyzer' rel='nofollow'>
              Bundler Analyzer
            </a>
          </li>
          {/* <li>
            <span role='img' aria-label='rainbow'>
              🌈
            </span>{' '}
            Include a FREE minimalist theme
          </li> */}
          {/* <li>
            <span role='img' aria-label='hundred'>
              💯
            </span>{' '}
            Maximize lighthouse score
          </li> */}
        </ul>
        <h3 className='text-lg font-semibold'>Built-in feature from Next.js:</h3>
        <ul>
          <li>
            <span role='img' aria-label='coffee'>
              ☕
            </span>{' '}
            Minify HTML &amp; CSS
          </li>
          <li>
            <span role='img' aria-label='dash'>
              💨
            </span>{' '}
            Live reload
          </li>
          <li>
            <span role='img' aria-label='white_check_mark'>
              ✅
            </span>{' '}
            Cache busting
          </li>
        </ul>
        <h3 className='text-lg font-semibold'>Our Stater code Philosophy</h3>
        <ul>
          <li>Minimal code</li>
          <li>SEO-friendly</li>
          <li>
            <span role='img' aria-label='rocket'>
              🚀
            </span>{' '}
            Production-ready
          </li>
        </ul>
        <h3 className='text-lg font-semibold'>Requirements</h3>
        <ul>
          <li>Node.js 16+ and pnpm</li>
        </ul>
        <p>
          Check our GitHub project for more information about{' '}
          <a href='https://github.com/ixartz/Next-js-Boilerplate'>Nextjs Boilerplate</a>.
        </p>
      </main>

      <footer className='border-gray-300 border-t py-8 text-center text-sm'>
        © Copyright {new Date().getFullYear()} Nextjs Starter. Made by{' '}
        <a href='https://creativedesignsguru.com'>antq2</a>.
        {/*
         * PLEASE READ THIS SECTION
         * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
         */}
      </footer>
    </div>
  </div>
);

export { Main };
