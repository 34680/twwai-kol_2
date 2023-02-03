import paramDAO from '../DAO/paramDAO';

function create() {
    async function query() {
        //funkcja pobierająca wszystkie wpisy
        let result = paramDAO.query();
        if (result) {
            return result;
        }

    }

        //add

    return {
        query: query,
    };
}

export default {
    create: create
};
