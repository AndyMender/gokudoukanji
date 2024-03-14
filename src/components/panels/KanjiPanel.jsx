import { Component } from 'react';

const kanjiStageColorMap = new Map([
    [0, 'gray'],
    [1, 'primary'],
    [2, 'error'],
    [3, 'success']
]);

const kanjiMockup = [
    {
        "slug": "一",
        "kunyomi": ["ひと"],
        "onyomi": ["いち", "いつ"],
        "meanings": ["one", "first", "single", "ground"],
        "parts": [],
        "jlpt_level": "N5",
        "level": 1,
        "learning_stage": 3
    },
    {
        "slug": "時",
        "kunyomi": ["とき"],
        "onyomi": ["じ"],
        "meanings": ["time", "hour"],
        "parts": ["日", "土", "寸"],
        "jlpt_level": "N5",
        "level": 1,
        "learning_stage": 1
    }
];

export default class KanjiPanel extends Component {
    constructor(props) {
        // NOTE: this is a mandatory step to initialize the parent Component!
        super(props);
    }
    getKanjiStagetoButtonColor(kanjiStage) {
        const color = kanjiStageColorMap.get(kanjiStage);
        return `btn btn-${color} lang-ja`;
    }   

    renderKanjiTile(kanjiJSON) {
        // TODO: Add extra elements to the popovers
        return (
            <div class="popover popover-right">
                <button class={this.getKanjiStagetoButtonColor(kanjiJSON.learning_stage)}>{kanjiJSON.slug}</button>
                <div class="popover-container">
                    <button class="btn btn-primary">Info</button>
                    <button class="btn btn-primary">Learn!</button>
                    <button class="btn btn-primary">Test Out!</button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div class="panel">
                <div class="panel-body">
                    {kanjiMockup.map((kanjiJSON) => this.renderKanjiTile(kanjiJSON))}
               </div>
                <div class="panel-footer">
                    <button class="btn btn-primary">Learn!</button>
                </div>
            </div>
        );
    }
}