## Problem
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
