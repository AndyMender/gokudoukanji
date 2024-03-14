import { Component } from "react";
import Clock from "./widgets/Clock";

const userName = 'Ben';

export default class Navibar extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <header class="navbar">
                <section class="navbar-section">
                    <a href="/" class="navbar-brand mr-2">極道 | Gokudou Kanji</a>
                </section>
                <section class="navbar-center">
                    <Clock />
                </section>
                <section class="navbar-section">
                    <div class="input-group input-inline">
                        <button class="btn btn-primary input-group-btn">
                            <i class="icon icon-search"></i> 
                        </button>
                        <input class="form-input" type="text" placeholder="Search..."/>
                    </div>
                    <div class="popover popover-bottom">
                        <button class="btn btn-primary">Menu</button>
                        <div class="popover-container">
                            <ul class="menu">
                                <li class="menu-item">
                                    <a href="#settings">Settings</a>
                                </li>
                                <li class="menu-item">
                                    <a href="#resources">Additional Resources</a>
                                </li>
                                <li class="menu-item">
                                    <a href="#logout">Logout - {userName}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </header>
        );
    }
}