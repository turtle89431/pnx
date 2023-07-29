/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let rustApiCall =await (await fetch("http://127.0.0.1:3000/hello")).text()
    return {rustApiCall};
};