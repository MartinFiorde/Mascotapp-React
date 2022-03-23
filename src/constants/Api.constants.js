export const API_RM = {
    URL : "https://rickandmortyapi.com/api",
    CHARACTERS : function() {
        return `${this.URL}/character`
    },
    CHARACTER_BY_ID : function(id) {
        console.log(`${this.URL}/api/character/${id}`);
        return `${this.URL}/character/${id}`
    },
    LOCATIONS : function() {
        return `${this.URL}/location`
    },
}