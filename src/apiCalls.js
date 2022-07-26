export const apiCalls = {
    fetchData() {
        const result = Promise.all(apiCalls.getAllData())
            .then(responses => {
                return responses
            });
        return result;
    },

    getAllData(endpoint) {
        const root = 'https://what-s-cookin-starter-kit.herokuapp.com/api/v1/'
        const url = `${root}${endpoint}`
        return fetch(url)
        .then(response => response.json());
            }
        }

    

