
export async function get(url, fail) {
    const response = await request('GET', null, `${ServerURL}/iapi/${url}`, fail)
        .catch((reason) => console.error(reason));
    return response;
}

export async function post(data, url, fail) {
    const response = await request('POST', data, `${ServerURL}/iapi/${url}`, fail)
        .catch((reason) => console.error(reason));
    return response;
}

async function request(verb, data, url, fail) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(verb, url, true);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.withCredentials = true;
        xhr.setRequestHeader("Accept", "application/json");

        if (!ServerURL.includes('//cb.ngrok.io')) {
            xhr.setRequestHeader("cgc-iapi", "AshreiHa'amSheHashemElokuv");
        }
        if (data) {
            xhr.setRequestHeader("Content-Type", "application/json");
            data = JSON.stringify(data);
        }

        xhr.send(data);
    });
}

/****************************************************************************************************************
 * The following code is to prevent dev api calls being refused due to cross-site restrictions.
 * The local dev server iapi calls have CORS configured to allow a few typical dev client configurations through.
 * PLEASE!!! REMEBER TO REMOVE THIS ABOMINATION BEFFORE UPLOADING TO PRODUCTION */
const { port, hostname } = window.location,
    /* IF the host is production or localhost
    *     AND
    *     the port is either empty or one of the standard http ports (80 and 443)
    *  THEN request from the current server host (not be a cross-site ajax call).
    *  ELSE request from ngrok address (a cross-site call, will need current client to match CORS configuration).
    */
    ServerURL = ['www.charitygiftcertificates.org', 'localhost'].includes(hostname.toLowerCase()) &&
        ['', 80, 443].includes(port) ? '' : '//cb.ngrok.io';
//****************************************************************************************************************** */