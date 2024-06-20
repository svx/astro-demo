# astro-demo

Astro Demo

## Notes

If created/copied local the *flake.nix* file to/as a new project, first thing to do is `git add flake.nix*`.

### Installation

> This is using `pnpm`!

```shell
pnpm create astro --template starlight
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Installed "create-astro@4.8.0" with binaries:
      - create-astro
[###########################################################################################################] 402/402
 astro   Launch sequence initiated.

   dir   Where should we create your new project?
         ./demo
      ◼  tmpl Using starlight as project template

    ts   Do you plan to write TypeScript?
         Yes

   use   How strict should TypeScript be?
         Strict

  deps   Install dependencies?
         Yes

   git   Initialize a new git repository?
         No
      ◼  Sounds good! You can always run git init manually.

      ✔  Project initialized!
         ■ Template copied
         ■ TypeScript customized
         ■ Dependencies installed

  next   Liftoff confirmed. Explore your project!

         Enter your project directory using cd ./demo
         Run yarn dev to start the dev server. CTRL+C to stop.
         Add frameworks like react or tailwind using astro add.

         Stuck? Join us at https://astro.build/chat

╭─────╮  Houston:
│ ◠ ◡ ◠  Good luck out there, astronaut! 🚀
```

#### Add sharp

```shell
pnpm add sharp
```

### Start the development server

```shell
cd demo
yarn dev
```
