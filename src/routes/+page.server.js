import {PUBLIC_baseUrl} from '$env/static/public';
import {PRIVATE_dev,PRIVATE_port} from "$env/static/private"
let baseURL = PRIVATE_dev?`http://127.0.0.1:${PRIVATE_port}`:PUBLIC_baseUrl
/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let rustApiCall =await (await fetch(`${baseURL}/hello`)).text()
    return {rustApiCall};
};