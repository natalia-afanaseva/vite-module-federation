## Setup

Install dependencies:

```bash
npm install
```

Go to `/vite-remote`:

```bash
cd vite-remote
```

Build the project and run the preview:

```bash
npm run build
npm run vmf
```

The remote app should start at `http://127.0.0.1:3000/`.

Open the Vue host (`vue-app`) in a separate terminal, install the dependencies and start the app:

```bash
cd vue-app
npm install
npm run vmf
```

The host app should load the remote component.
