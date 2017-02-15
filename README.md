# react-material-navbar
A simple React navbar inspired by Material UI, complete with full TypeScript definitions.

![Screeshot of React Material Navbar](https://i.imgur.com/6u8xuWx.gif)

## Installation

With [Yarn](https://github.com/yarnpkg/yarn):

```shell
yarn install react-material-navbar
```

Or from [NPM](https://npmjs.com/package/react-material-navbar):

```shell
npm install react-material-navbar --save
```

## Importing

Import via ES6 default import:

```js
import Navbar from "react-material-navbar";
```

Or via Node's require:

```js
const Navbar = require("react-material-navbar").default;
```

## CSS

**Be sure to include the CSS file on your page!** You can find it at `node_modules/react-material-navbar/dist/all.css`.

## Example

Note that React Material Navbar is **just a navbar**; it doesn't include an app drawer or split view. For action icons, I recommend using [react-icons](https://npmjs.com/package/react-icons) with a size of `24`, but you can use whatever element you want.

```js
import Navbar from "react-material-navbar";
import HamburgerIcon = require("react-icons/lib/md/menu");
import VerticalIcon = require("react-icons/lib/md/more-vert");

render() {
    return (
        <Navbar
            title={`React Material Navbar`}
            leftAction={<HamburgerIcon size={24} />}
            rightAction={<VerticalIcon size={24} />} />
    )
}
```

## Props

Note: React-Material-Navbar has full TypeScript definitions! You should automatically receive intellisense for all of the props documented below:

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `title` | string | true | The Navbar's title. |
| `color` | string | false | A CSS color string which will style the navbar's text. Defaults to `#ffffff` (white). |
| `background` | string | false | A CSS background string which will style the navbar's background. Defaults to `#0d47a1` (dark blue). |
| `style` | object | false | A CSS style object that will be applied to the navbar. **`color` and `background` will be ignored**. |
| `leftAction` | element | false | The navbar's left action element. Typically this is a hamburger menu button. Defaults to empty. |
| `rightAction` | function | false | The navbar's right action element. Defaults to empty. |

## Styling

If you'd like to add additonal styles to the navbar, just use the following CSS rules:

```css
nav.react-material-navbar {
    /* This styles the navbar itself. */
}

nav.react-material-navbar .react-material-navbar-left {
    /* This styles the left action's container div. */
}

nav.react-material-navbar .react-material-navbar-right {
    /* This styles the right action's container div. */
}

nav.react-material-navbar .react-material-navbar-title {
    /* This styles the navbar title's container div. */
}
```
