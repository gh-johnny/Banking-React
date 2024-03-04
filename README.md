# Bankging App 💲💳
#### Written in React.js, Typescript and Styled-components!
[![React.js, Typescript, Styled-Components icons](https://skillicons.dev/icons?i=react,ts,styledcomponents)](https://skillicons.dev)

A website that allows you to keep track of your day-to-day transactions 

Here is the live website (👇deployed at vercel) <br/>
[https://dt-money-2uly4hsbm-gh-johnnys-projects.vercel.app/](https://dt-money-2uly4hsbm-gh-johnnys-projects.vercel.app/)
<div style="display: flex; flex-direction: column; align-items: center;">
    <img width="770" height="500" src="https://raw.githubusercontent.com/gh-johnny/Banking-React/main/docs/assets/banking-app-default.jpeg" alt="App home page printscreen">
    <img width="770" height="500" src="https://raw.githubusercontent.com/gh-johnny/Banking-React/main/docs/assets/banking-app-search.jpeg" alt="App home search page printscreen">
    <img width="550" height="500" src="https://raw.githubusercontent.com/gh-johnny/Banking-React/main/docs/assets/banking-app-form.jpeg" alt="App new transaction form printscreen">
</div>

## Dependencies 📦
- @hookform/resolvers (^3.3.4)
- @radix-ui/react-dialog (^1.0.5)
- @radix-ui/react-radio-group (^1.1.3)
- axios (^1.6.7)
- phosphor-react (^1.4.1)
- react (^18.2.0)
- react-dom (^18.2.0)
- react-hook-form (^7.51.0)
- react-router-dom (^6.22.2)
- styled-components (^6.1.8)
- zod (^3.22.4)

#### Dev dependencies 📦
- @types/react (^18.2.56)
- @types/react-dom (^18.2.19)
- @types/styled-components (^5.1.34)
- @typescript-eslint/eslint-plugin (^7.0.2)
- @typescript-eslint/parser (^7.0.2)
- @vitejs/plugin-react (^4.2.1)
- eslint (^8.56.0)
- eslint-plugin-react-hooks (^4.6.0)
- eslint-plugin-react-refresh (^0.4.5)
- typescript (^5.2.2)
- vite (^5.1.4)

## Project setup ⚡

Install `git` or the `gh` cli package if you don't already have it on your machine

Clone the repo with
```
git clone https://github.com/gh-johnny/Banking-React.git

or

git clone git@github.com:gh-johnny/Banking-React.git

or

gh repo clone gh-johnny/Banking-React
```
---
Install a _package manager_ like `npm` if you don't already have it on your machine

Use package manager/runner of preference (npm, yarn, pnpm, bun...) <br>
Now enter the project install dependencies, start local server and open it on your browser with

```
cd Timer-React/ &&
npm install &&
npm run dev
```

## Project structure 👷 🏗 
### At top level 💯
- ##### docs/ 

```
All that is related to documentation (the very README.md file, images etc)  
```

<details>
<summary style="cursor: pointer">Dir format:</summary>

```
            docs/ 
                -- contributing/ | examples/ | usage/ | assets/...
                    - CONTRIBUTING.md | LICENSE | CHANGE.log | .editorconfig | .gitignore...
                - README.md
```

</details>

- ##### public/ 
```
Files that need or just are available to the browser like icons, logos)
```

<details>
<summary style="cursor: pointer">Dir format:</summary>

```
            public/ 
                -- collection-of-public-assets/
                    - asset(.png, .svg...)
                -- logo/
                    -- logo-johnny.svg
```
</details>

<hr/>

### At src/ level 🛠️
- ##### @types/ 
```
Type declarations (.d.ts files)
* These will not affect the code, but only assist during development time *
```
<details>
<summary style="cursor: pointer">Dir format: </summary>

```
            @types/
                -- name-of-what-you-want-to-type/
                    - index.d.ts
                -- styles
                    - index.d.ts
``` 
</details>

- ##### assets/ 
```
The .svg, .png... files that will be shown in our components
```

<details>
<summary style="cursor: pointer">Dir format:</summary>

```
            assets/
                -- type-of-asset/
                    - name-of-asset(.svg, .png...)
                -- logo/
                    - logo-johnny.svg
```
</details>

- ##### components/ 
```
Reusable react components that we create
```

<details>
<summary style="cursor: pointer">Dir format:</summary>

```
            components/
                -- NameOfComponent/
                    - indext.tsx
                    - styles.ts
                -- Header/
                    - indext.tsx
                    - styles.ts
```
</details>

- ##### contexts/ 
```
Components for the context api are, they allow us to share certain states anywhere 
in the application if the specified component of the context api is 
at the desired parent level 
```

<details>
<summary style="cursor: pointer">Dir format:</summary>

```
            contexts/
                - NameOfContext.tsx
                - TransactionContext.tsx
```
</details>

- ##### layouts/ 
```
Components UI layouts (e.g., so unecessary renders of entire compos are avoided)
```

<details>
<summary style="cursor: pointer">Dir format:</summary>

```
            layouts/
                -- NameOfLayout/
                    - index.tsx
                    - styles.ts
                -- DefaultLayout/
                    - index.tsx
                    - styles.ts
```
</details>

- ##### pages/ 
```
Routes for the application
```

<details>
<summary style="cursor: pointer">Dir format:</summary>

```
            pages/
                -- NameOfRoute/
                    - index.tsx
                    - styles.ts
                -- Transactions/
                    - index.tsx
                    - styles.ts
```
</details>

- ##### styles/ 
```
Non-specific or global styled-components styles
```

<details>
<summary style="cursor: pointer">Dir format:</summary>

```
            styles/
                -- themes/
                    - default.ts
                - global.ts
```
</details>

- ##### utils/ 
```
Helper functions
```
<details>
<summary style="cursor: pointer">Dir format:</summary>

```
            utils/
                -- price/
                    - priceFormatter.ts
                - dateFormatter.ts
```
</details>

- ##### App.tsx 
```
Where router and theme providers are
```

- ##### Router.tsx
```
Where the routes and their respective components are established 
```

## License

MIT
