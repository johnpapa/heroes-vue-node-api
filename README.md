# Tour of Heroes

This project was created to help represent a fundamental app written with Vue. The heroes and villains theme is used throughout the app.

by [John Papa](http://twitter.com/john_papa)

## Why

How do you deploy a Vue app with Node.js server and API to the cloud? How does Docker help? Let's find out.

## Live Demos

Hosted in [Azure](https://azure.microsoft.com/free/?WT.mc_id=javascript-0000-jopapa)

- View the live app 👉[Tour of Heroes for VueConf 2019](https://papa-vueconf2019.azurewebsites.net)

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/johnpapa/heroes-vue-node-api.git
   cd heroes-vue-node-api
   ```

1. Install the npm packages

   ```bash
   npm install
   ```

1. Run the app!

   ```bash
   npm run dev-proxy
   ```

1. Browse to <http://localhost:9001>

> TODO: There is a database key required for this app. I will be removing this need shortly so you can run it without that requirement.

## Docker

1. Run _Docker: Compose Up_ from the VS Code menu
1. Browse to <http://localhost:8000>

### Why Docker

You can host the app any way you prefer. I chose Docker because it is familiar to me and makes it easy to run anywhere (local or cloud). You do you though and feel free to run this in your own way.

## Debugging

- [Learn more about how to debug this app here](/DEBUG.md)

## Problems or Suggestions

[Open an issue here](/issues)

## Resources

- [Azure Free Trial](https://azure.microsoft.com/free/?WT.mc_id=javascript-0000-jopapa)

### Docker Resources

- [Azure Container Registry](https://docs.microsoft.com/azure/container-registry/?WT.mc_id=javascript-0000-jopapa)
- [Docker Hub Registry](https://hub.docker.com/)

### VS Code Resources

- [VS Code](https://code.visualstudio.com/?WT.mc_id=javascript-0000-jopapa)
- [VS Code Extension for Node on Azure](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack&WT.mc_id=javascript-0000-jopapa)
- [Debugging Vue in VS Code](https://code.visualstudio.com/docs/nodejs/vuejs-tutorial?WT.mc_id=javascript-0000-jopapa)
- [Create a Registry on Azure with VS Code](https://code.visualstudio.com/tutorials/docker-extension/create-registry?WT.mc_id=javascript-0000-jopapa)
