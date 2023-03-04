export const url = `https://sharp-napkin.pockethost.io/api/collections/`

export function postX(path, data) {
    
    return fetch(`${url}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log("Data posted successfully!");
        } else {
            console.error("Error posting data:", response.statusText);
        }
    })
    .catch(error => {
        console.error("Error posting data:", error);
    });
}

