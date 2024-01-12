# 4SH Learning - Formation Angular - Fondamentaux

# Setup
## Prerequisites

### OS
Supported operating systems: macOS, Linux and Windows.

### Node.js
Node.js v22.11+ is required to run the project.

You can check the current Node.js version by running the `node -v` command.

We highly recommend you use a node version manager such as `nvm` to manage your Node.js versions.

### IntelliJ IDEA

Open `Settings` and go to `Languages & Frameworks | JavaScript | Code Quality Tools | ESLint` and check `Automatic ESLint configuration`

## Backend

[Express](https://expressjs.com) is used to provide the REST API while [lowdb](https://github.com/typicode/lowdb) handles the persistence layer.

### First install

```
cd backend
npm run initdb 
```

### Run

```
cd backend 
npm start
```

or you can just start the `Start backend` run configuration under IntelliJ IDEA (Ultimate version only).

👨‍🚒 You may need to allow the 3000 port if you're using a firewall.

## Frontend

App is written with Angular version 17 with the following configuration:
- 🧩 using standalone API
- 🛣️ routing enabled
- ✅ no testing framework
- 🎨 using `.scss` files for style
- ✨ strict type checking
- 💻 no Server Side Rendering or Static Site Generation features
- 🎯 single app only (no `projects` folder )

### Run

```
cd frontend
npm start
```

or you can just start the `Start frontend` run configuration under IntelliJ IDEA

