# center-a-div

A simple collection of techniques and examples to center a `<div>` using HTML and CSS.

## Table of Contents

- [Introduction](#introduction)
- [Techniques](#techniques)
  - [Flexbox](#flexbox)
  - [Grid](#grid)
  - [Margin Auto](#margin-auto)
  - [Absolute Positioning](#absolute-positioning)
- [Usage](#usage)
- [Examples](#examples)
- [License](#license)

## Introduction

Centering a `<div>` is one of the most common tasks when working with web layouts. There are several ways to achieve this with modern CSS. This repository showcases multiple methods so you can choose the one that best fits your project.

## Techniques

### Flexbox

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}
.child {
  width: 100px;
  height: 100px;
  background: #4CAF50;
}
```

### Grid

```css
.parent {
  display: grid;
  place-items: center;
  height: 300px;
}
.child {
  width: 100px;
  height: 100px;
  background: #2196F3;
}
```

### Margin Auto

```css
.child {
  width: 100px;
  margin: 0 auto;
  background: #FF9800;
}
```

### Absolute Positioning

```css
.parent {
  position: relative;
  height: 300px;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: #E91E63;
}
```

## Usage

1. Clone this repository:
   ```sh
   git clone https://github.com/vuicoding/center-a-div.git
   ```
2. Open the `index.html` file in your browser.
3. Explore different centering techniques in the code and adapt them to your project.

## Examples

Screenshots and live examples are included in the `/examples` directory (if present).

## License

This project is licensed under the MIT License.

Hoa has updated readme
