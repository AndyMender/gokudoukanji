import { Component } from "react";

import PanelFooter from "../panels/PanelFooter";

export default class KanjiLearning extends Component {
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
                                <span class="h1 label label-primary lang-cjk">夢</span>
                            </div>
                            <div class="panel-subtitle text-center">
                                <h3 class="text-gray">dream</h3>
                                <div class="popover popover-bottom">
                                    <button class="btn btn-secondary">艹</button>
                                    <div class="popover-container">
                                        #TODO: Info about the part
                                    </div>
                                </div>
                                <div class="popover popover-bottom">
                                    <button class="btn btn-secondary">罒</button>
                                    <div class="popover-container">
                                        #TODO: Info about the part
                                    </div>
                                </div>
                                <div class="popover popover-bottom">
                                    <button class="btn btn-secondary">冖</button>
                                    <div class="popover-container">
                                        #TODO: Info about the part
                                    </div>
                                </div>
                                <div class="popover popover-bottom">
                                    <button class="btn btn-secondary">夕</button>
                                    <div class="popover-container">
                                        #TODO: Info about the part
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="columns">
                                <div class="column panel">
                                    <div class="panel-title text-center h4">On'yomi</div>
                                    <div class="panel-body text-center h5 lang-cjk">む</div>
                                </div>
                                <div class="column panel">
                                    <div class="panel-title text-center h4">Kun'yomi</div>
                                    <div class="panel-body text-center h5 lang-cjk">ゆめ</div>
                                </div>
                            </div>
                            <div class="panel">
                                <div class="panel-body text-center bg-primary">
                                    #TODO: Mnemonic story!
                                </div>
                            </div>
                            <div class="panel">
                                <div class="panel-body text-center">
                                    <p class="lang-cjk">この間、面白い夢を見たんだ。<br/>I had an interesting dream the other day.</p>
                                    <p class="lang-cjk">君、いつもマンガに夢中してばかりいるね。<br/>You're always into manga.</p>
                                </div>
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