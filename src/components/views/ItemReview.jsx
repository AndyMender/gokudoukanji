import { Component } from "react";

import PanelFooter from "../panels/PanelFooter";

export default class ItemReview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="panel">
                <div class="panel-body">
                    <div class="panel">
                        <div class="panel-header">
                            <div class="panel-title text-center">
                                <span class="h1 label label-primary lang-cjk">夢中</span>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="panel">
                                <div class="panel-body">
                                    <div class="form-group">
                                        <label class="form-label h4 text-center" for="input-example-1">Reading</label>
                                        <input class="form-input text-center" type="text" id="item-reading-question" placeholder="Reading"/>
                                    </div>
                                </div>
                            </div>
                            <div class="panel bg-error text-center h4" id="item-reading-answer">
                                <div class="panel-title">Answer</div>
                                <div class="panel-body">むちゅう</div>
                            </div>
                        </div>
                        <div class="panel-footer text-center">
                            <p>#TODO: Point to 'previous' and 'next' learning cards accordingly</p>
                            <button class="btn btn-secondary">Previous</button>
                            <button class="btn btn-primary">Next</button>
                        </div>
                    </div>
                </div>
                <div class="panel-footer">
                    <PanelFooter />
                </div>
            </div>
        );
    }
}