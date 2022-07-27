export const apiCalls = {
    fetchData() {
        const result = Promise.all([apiCalls.getAllData('recipes'), apiCalls.getAllData('ingredients'), apiCalls.getAllData('users')])
            .then(responses => {
                return responses
            });
        // console.log(result);
        return result;
    },

    getAllData(endpoint) {
        const root = 'http://localhost:3001/api/v1/'
        const url = `${root}${endpoint}`
        return fetch(url)
        .then(response => response.json());
            }
        }

    

