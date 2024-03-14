import { Component } from 'react';

export default class VocabularyPanel extends Component {
    constructor(props) {
        // NOTE: this is a mandatory step to initialize the parent Component!
        super(props);
    }
    render() {
        return (
            <div class="panel">
                <div class="panel-body">
                    <div class="popover popover-right">
                        <button class="btn btn-primary">同じ</button>
                        <div class="popover-container">
                            <button class="btn btn-primary">Info</button>
                            <button class="btn btn-primary">Learn!</button>
                            <button class="btn btn-primary">Test Out!</button>
                        </div>
                    </div>
                    <div class="popover popover-right">
                        <button class="btn btn-primary">同時</button>
                        <div class="popover-container">
                            <button class="btn btn-primary">Info</button>
                            <button class="btn btn-primary">Learn!</button>
                            <button class="btn btn-primary">Test Out!</button>
                        </div>
                    </div>
                </div>
                <div class="panel-footer">
                    <button class="btn btn-primary">Learn!</button>
                </div>
            </div>
        );
    }
}