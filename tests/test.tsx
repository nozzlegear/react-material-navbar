import Navbar from "../";
import * as React from "react";
import { render } from "react-dom";
import HamburgerIcon = require("react-icons/lib/md/menu");

export type NavType = ( "purple" | "left-action" | "right-action" | "all-actions" | "constrained" )

export interface IState {
    type?: NavType;
}

export default class TestHarness extends React.Component<any, IState> {
    constructor(props, context) {
        super(props, context);

        this.state = {
            type: "all-actions"
        };
    }

    public state: IState;

    private buildNav(type: NavType) {

        let rightAction: JSX.Element;

        if (type === "right-action" || type === "all-actions") {
            rightAction = (
                <a href={`#`}>
                    {`Support`}
                </a>
            )
        }

        return (
            <div style={{width: type === "constrained" ? "300px" : undefined}}>
                <Navbar
                    key={type}
                    title={`React Material Navbar`}
                    leftAction={type !== "right-action" ? <HamburgerIcon  size={24} /> : undefined}
                    rightAction={rightAction}
                    background={type === "purple" ? "#311B92" : undefined}
                    color={type === "purple" ? "#ffffff" : undefined} />
            </div>
        );
    }

    public render() {
        const types: NavType[] = [
            "all-actions",
            "left-action",
            "right-action",
            "purple",
            "constrained",
        ]
        const buttons = types.map(type => 
            <button
                key={type}
                type={`button`}
                onClick={e => this.setState({type})}>
                {type}
            </button>
        );

        return (
            <div>
                {this.buildNav(this.state.type)}
                {buttons}
            </div>
        );
    }
}

(function () {
    render(<TestHarness />, document.getElementById("contenthost"));
}());