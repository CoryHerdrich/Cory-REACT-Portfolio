import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to Cory's Portfolio",
            data: [
                {title: "Wawasee" },
                {title: "Ripple" }, 
                {title: "Venice" },
                {title: "Bragg" }
            ]
        };
    }

PortfolioItems() {
    return this.state.data.map(item => {
        return <PortfolioItem title={item.title} url={"google.com"} />;
    })
}


    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.PortfolioItems()}
            </div>
        )
    }
}