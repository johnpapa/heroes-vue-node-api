# Debugging

## Auto - Attach Debugging

The debugger will automatically kick in and attach.

Set the`auto-attach` in the settings, then run node server with the inspector protocol, and run `npm run dev-proxy`

### Setup auto-attach

1. `CMD+,`
2. type `auto attach`
3. set `auto-attach` to`on`

Now just run your scripts and the debugger will attach to the node process

```bash
npm run dev-proxy
```

## Node.js Debugging

Launch your Node.js app directly via the debugger

1. Go to the debugger panel `CMD+SHFT+D`
2. Choose `Launch server.js`
3. Press the green arrow button or `F5`

## Docker Debugging

Attach the debugger to a running docker container

1. Go to the debugger panel `CMD+SHFT+D`
2. Choose `Docker: Attach to Node`
3. Press the green arrow button or `F5`

## Debugging Vue in VS Code

1. Run the Vue app and the Node app:

   `npm run dev-proxy`

2. Go to the debugger panel `CMD+SHFT+D`
3. Choose `Vue: Chrome`
4. Press the green arrow button or `F5`
