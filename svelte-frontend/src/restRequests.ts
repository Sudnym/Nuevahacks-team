import axios from "axios"
export class restRequests {
    async getRequest(url) {
        let returner = await axios.get(url).catch(error => {return this.error(error)});
        return returner
    }


    async postRequest(url) {
        axios.post(url)
            .then(
                response => {
                    return response;
                })
            .catch(
                error => {
                    return this.error(error);
                })
    }

    error(error) {
        return "Sorry, we were unable to retrieve data from the server." + error;
    }
}