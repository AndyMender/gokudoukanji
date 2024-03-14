export default class DatabaseConnector {
    constructor(username) {
        this.dbHelper = {
            user: username
        }
    }

    // TODO: Add real implementation
    getKanjiAll() {
        return 2101;
    }

    // TODO: Add real implementation
    getKanjiLearned() {
        return 20;
    }

    // TODO: Add real implementation
    getVocabularyAll() {
        return 8210;
    }

    // TODO: Add real implementation
    getVocabularyLearned() {
        return 120;
    }

    // TODO: Add real implementation
    getCurrentReviews() {
        return 12;
    }
}
