export const GITHUB_PROJECTS = 'https://api.github.com/users/chuckkanoy';

export async function get(url) {
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }

    return await fetch(url, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}