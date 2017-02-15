import * as React from 'react';

export interface IProps {
    title: string;
    color?: string;
    background?: string;
    leftAction?: JSX.Element;
    rightAction?: JSX.Element;
    style?: React.CSSProperties;
    key?: string | number;
    ref?: React.Ref<React.StatelessComponent<IProps>>;
}

const Navbar: React.StatelessComponent<IProps> = function (props) {
    const colorProps: React.CSSProperties = {
        background: props.background,
        color: props.color,
    }

    return (
        <nav className={`react-material-navbar`} style={{...props.style, ...colorProps}}>
            <div className="react-material-navbar-left">
                {props.leftAction}
            </div>
            <div className={`react-material-navbar-title`}>
                <span>{props.title}</span>
            </div>
            <div className="react-material-navbar-right">
                {props.rightAction}
            </div>
        </nav>
    )
}

const propTypes: Record<keyof IProps, React.Validator<any>> = {
    title: React.PropTypes.string.isRequired,
    color: React.PropTypes.string,
    background: React.PropTypes.string,
    leftAction:  React.PropTypes.element,
    rightAction: React.PropTypes.element,
    style: React.PropTypes.object,
    key: React.PropTypes.any,
    ref: React.PropTypes.any,        
}

const defaultProps: Partial<IProps> = {
    color: "#ffffff",
    background: "#0d47a1",
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export { Navbar };
export default Navbar;