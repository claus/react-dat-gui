# React dat.GUI

Currently very much under construction.

## Installation

```
npm install react-dat-gui --save
```

## Usage

```
<Dat data={this.state.data} onUpdate={this.handleUpdate}>
    <DatString path="string" label="String" />
    <DatNumber path="number" label="Number" min={0} max={100} step={1} />
    <DatBoolean path="boolean" label="Boolean" />
    <DatButton label="Button" onClick={this.handleClick} />
</Dat>
```

## CSS

 * SCSS: `./src/Dat.scss`
 * CSS: `./lib/Dat.css`
 * CSS minified: `./build/react-dat-gui.min.css`
