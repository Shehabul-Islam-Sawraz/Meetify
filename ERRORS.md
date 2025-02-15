## Problem 1
> [!CAUTION]
> `ClerkProvider` cannot be used as a JSX component.

#### What Happened?
Installing `Clerk` using:
```bash
    npm install @clerk/nextjs
```
cause me a tough time. When I was trying to use `<ClerkProvider>` inside `RootLayout`, I got this error:
```js
    'ClerkProvider' cannot be used as a JSX component.
    Its type '(props: Without<NextClerkProviderProps, "__unstable_invokeMiddlewareOnAuthStateChange">) => Promise<Element>' is not a valid JSX element type.
    Type '(props: Without<NextClerkProviderProps, "__unstable_invokeMiddlewareOnAuthStateChange">) => Promise<Element>' is not assignable to type '(props: any, deprecatedLegacyContext?: any) => ReactNode'.
    Type 'Promise<Element>' is not assignable to type 'ReactNode'.ts(2786)
```

#### Solve
Installing `Clerk` beta version using:
```bash
    npm install @clerk/nextjs@beta
```
solved me the error.


## Problem 2
```
    Something went wrong. Please check the error below for more details.
    If the problem persists, please open an issue on GitHub.

    request to https://ui.shadcn.com/r/index.json failed, reason: connect ETIMEDOUT 76.76.21.241:443 
```

#### Solve
Using VPN solved me this error