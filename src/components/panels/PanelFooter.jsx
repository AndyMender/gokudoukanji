import { Component } from "react";

export default class PanelFooter extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div class="columns">
                <div class="column">
                    Version: {0}
                </div>
                <div class="column col-1">
                    <div class="popover popover">
                        <button class="btn btn-primary">Licensing</button>
                        <div class="popover-container">
                            <div class="card">
                                <div class="card-image">
                                    #TODO: Add funny image here?
                                </div>
                                <div class="card-header">
                                    <div class="card-title h5">Licensing</div>
                                </div>
                                <div class="card-body">
                                    #TODO: Licensing text goes here
                                </div>
                                <div class="card-footer">
                                    <button class="btn btn-primary">Subscribe!</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="column col-1">
                    <div class="popover popover">
                        <button class="btn btn-primary">About Us</button>
                        <div class="popover-container">
                            <div class="card">
                                <div class="card-image">
                                    #TODO: Add funny image here?
                                </div>
                                <div class="card-header">
                                    <div class="card-title h5">About Us</div>
                                </div>
                                <div class="card-body">
                                    #TODO: About Us text goes here
                                </div>
                                <div class="card-footer">
                                    <button class="btn btn-primary">Subscribe!</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}
