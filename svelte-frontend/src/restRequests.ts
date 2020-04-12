import axios from "axios"
export class restRequests {
    async getRequest(url) {
        let returner = await axios.get(url).catch(error => {return this.error(error)});
        return returner
    }


    async postRequest(url) {
        let returner = axios.post(url).catch(error => {return this.error(error)});
        return returner
    }

    error(error) {
        console.log("Sorry, we were unable to retrieve data from the server." + error);
    }
}