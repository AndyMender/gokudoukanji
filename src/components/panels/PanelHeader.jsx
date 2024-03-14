import { Component } from "react";
import DatabaseConnector from "../utilities/Database";

export default class PanelHeader extends Component {
    constructor(props) {
        super(props);
        // TODO: DatabaseConnector or at least user defined globally?
        this.dbHelper = new DatabaseConnector("test user");
    }

    // TODO: Could be a standalone function or static methods?
    renderKanjiLearned() {
        return (
            <p>{this.dbHelper.getKanjiLearned()} out of {this.dbHelper.getKanjiAll()} kanji learned!</p>
        );
    }

    renderVocabularyLearned() {
        return (
            <p>{this.dbHelper.getVocabularyLearned()} out of {this.dbHelper.getVocabularyAll()} words learned!</p>
        );
    }

    render() {
        return (
            <div class="columns">
                <div class="column">
                    {this.renderKanjiLearned()}
                    {this.renderVocabularyLearned()}
                </div>
                <div class="column col-1">
                    <a href="#reviews" class="btn badge btn-primary" data-badge={this.dbHelper.getCurrentReviews()}>Reviews!</a>
                </div>
            </div>
        );
    }
}