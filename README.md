
## first time you have to run a `npm install` in each parent folder of the rust modules
- example for the test module 
```bash
cd ./rust/test
npm install
cd ..
```
## Developing

Once you've created a project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building Rust code into .node

To create a .node file from rust code

```bash
npm run buildRustTest
```

## To run app without rebuilding

```bash
node back.js
```