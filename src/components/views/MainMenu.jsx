import { Component } from "react";

import ForecastPanel from "../panels/ForecastPanel";
import KanjiPanel from "../panels/KanjiPanel";
import PanelFooter from "../panels/PanelFooter";
import StatsPanel from "../panels/StatsPanel";
import VocabularyPanel from "../panels/VocabularyPanel";
import PanelHeader from "../panels/PanelHeader";

export default class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ui_mode: 'kanji'
        }
    }

    switchUIPanel(new_mode) {
        // Check old panel
        const oldPanelId = `${this.state.ui_mode}-panel`;
        const oldPanel = document.getElementById(oldPanelId);

        if (oldPanel == null) {
            console.error(`Can't find previous UI panel with ID ${oldPanelId}. Canceling UI mode switch!`);
            return;
        }
 
        // Check new panel     
        const newPanelId = `${new_mode.toLowerCase()}-panel`;
        const newPanel = document.getElementById(newPanelId);
        if (newPanel == null) {
            console.error(`Can't find UI panel with ID ${newPanelId}. Not switching UI modes!`);
            return;
        }
 
        // Switch panels
        oldPanel.className = oldPanel.className.replace('active', '').trim();
        newPanel.className += ' active';

        // Switch UI mode to new mode
        this.setState((state, props) => (
            { ui_mode: new_mode }
        ));
    }

    renderUIPanel() {
        let panel = <div>Nothing loaded!</div>;

        switch(this.state.ui_mode) {
            case "kanji":
                panel = <KanjiPanel />;
                break;
            case "vocabulary":
                panel = <VocabularyPanel />
                break;
            case "forecast":
                panel = <ForecastPanel />;
                break;
            case "stats":
                panel = <StatsPanel />;
                break;
        }

        return panel;
    }
 
    render() {
        return (
            <div class="panel">
                <div class="panel-header">
                    <div class="panel-title">
                        <PanelHeader />
                    </div>
                </div>
                <div class="panel-nav">
                    <ul class="tab tab-block">
                        <li class="tab-item active" id="kanji-panel">
                            <a href="#kanji" onClick={() => this.switchUIPanel('kanji')}>Kanji</a>
                        </li>
                        <li class="tab-item" id="vocabulary-panel">
                            <a href="#vocabulary" onClick={() => this.switchUIPanel('vocabulary')}>Vocabulary</a>
                        </li>
                        <li class="tab-item" id="stats-panel">
                            <a href="#stats" onClick={() => this.switchUIPanel('stats')}>Stats</a>
                        </li>
                        <li class="tab-item" id="forecast-panel">
                            <a href="#forecast" onClick={() => this.switchUIPanel('forecast')}>Review Forecast</a>
                        </li>
                    </ul>
                </div>
                <div class="panel-body">
                    <div class="container">
                        {this.renderUIPanel()}
                    </div>
                </div>
                <div class="panel-footer">
                    <PanelFooter />
                </div>
            </div>
        );
    }
}