export default {
    loadData({ activeISINId }) {
        const url = `/data/${activeISINId}.json`

        return fetch(url)
            .then(response => response.json())
            .catch(error => console.log(error))
    }
}
