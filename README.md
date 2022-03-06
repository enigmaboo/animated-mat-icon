# Animated Mat Icon

A simple lightweight package for animating angular mat icons

## Installation

#### Using npm

```shell
npm install animated-mat-icon --save
```

#### Using yarn

```shell
yarn add animated-mat-icon
```

## Setup & Usage

To access `<animated-mat-icon>` in the app, you need to import `AnimatedMatIconModule` in the module.

```typescript
...
import { AnimatedMatIconModule } from 'animated-mat-icon';
...

@NgModule({
    declarations: [
        ...
    ],
    imports: [
        ...
        AnimatedMatIconModule,
        ...
    ],
    providers: [
        ...
    ],
})

export class YourModule {}

```

After that, you can use the `animated-mat-icon` in the template.

```html
<animated-mat-icon animation="heart-beat" icon="favorite"></animated-mat-icon>
```

### Inputs
| Name       | Type   | Default   | optional  | Description |
| ---------- | ------ | --------- | --------- | ----------- |
| animation  | string |           | false     | Specify the animation name that you want to set on the icon |
| icon       | string |           | false     | Specify the icon you want (Note: You can use any mat-icon)  |
| onHover    | booelan| false     | true      | If you set this true, then the animation will happen only when you hover on top of the icon       |
| color      | string | black     | true      | Set this to the desired color (Note: Any css color can be applied)            |
| size       | string |           | true      | Set this to the desired size (Note: Any css size like px, %, em can be applied, remember to use the same css format)            |

## Animations

### move-to-right
```html
<animated-mat-icon animation="move-to-right" icon="arrow_right_alt"></animated-mat-icon>
```
![move-to-right](https://raw.githubusercontent.com/enigmaboo/animated-mat-icon/main/animations/move-to-right.gif)

### cross
```html
<animated-mat-icon animation="cross" icon="clear"></animated-mat-icon>
```
![cross](https://raw.githubusercontent.com/enigmaboo/animated-mat-icon/main/animations/cross.gif)

### diagonal-pulse
```html
<animated-mat-icon animation="diagonal-pulse" icon="call_received"></animated-mat-icon>
```
![diagonal-pulse](https://raw.githubusercontent.com/enigmaboo/animated-mat-icon/main/animations/diagonal-pulse.gif)

### refresh
```html
<animated-mat-icon animation="refresh" icon="refresh"></animated-mat-icon>
```
![refresh](https://raw.githubusercontent.com/enigmaboo/animated-mat-icon/main/animations/refresh.gif)

### heart-beat
```html
<animated-mat-icon animation="heart-beat" icon="favorite"></animated-mat-icon>
```
![heart-beat](https://raw.githubusercontent.com/enigmaboo/animated-mat-icon/main/animations/heart-beat.gif)

### roll-back
```html
<animated-mat-icon animation="roll-back" icon="loop"></animated-mat-icon>
```
![roll-back](https://raw.githubusercontent.com/enigmaboo/animated-mat-icon/main/animations/roll-back.gif)

### italic-deform
```html
<animated-mat-icon animation="italic-deform" icon="clear_all"></animated-mat-icon>
```
![italic-deform](https://raw.githubusercontent.com/enigmaboo/animated-mat-icon/main/animations/italic-deform.gif)

### winding
```html
<animated-mat-icon animation="winding" icon="settings"></animated-mat-icon>
```
![winding](https://raw.githubusercontent.com/enigmaboo/animated-mat-icon/main/animations/winding.gif)

### wrench
```html
<animated-mat-icon animation="wrench" icon="build"></animated-mat-icon>
```
![wrench](https://raw.githubusercontent.com/enigmaboo/animated-mat-icon/main/animations/wrench.gif)

### mouse-click
```html
<animated-mat-icon animation="mouse-click" icon="mouse"></animated-mat-icon>
```
![mouse-click](https://raw.githubusercontent.com/enigmaboo/animated-mat-icon/main/animations/mouse-click.gif)

### brush
```html
<animated-mat-icon animation="brush" icon="brush"></animated-mat-icon>
```
![brush](https://raw.githubusercontent.com/enigmaboo/animated-mat-icon/main/animations/brush.gif)

### lock
```html
<animated-mat-icon animation="lock" icon="lock"></animated-mat-icon>
```
![lock](https://raw.githubusercontent.com/enigmaboo/animated-mat-icon/main/animations/lock.gif)

### unlock
```html
<animated-mat-icon animation="unlock" icon="lock_open"></animated-mat-icon>
```
![unlock](https://raw.githubusercontent.com/enigmaboo/animated-mat-icon/main/animations/unlock.gif)

### hourglass
```html
<animated-mat-icon animation="hourglass" icon="hourglass_full"></animated-mat-icon>
```
![hourglass](https://raw.githubusercontent.com/enigmaboo/animated-mat-icon/main/animations/hourglass.gif)

### write
```html
<animated-mat-icon animation="write" icon="create"></animated-mat-icon>
```
![write](https://raw.githubusercontent.com/enigmaboo/animated-mat-icon/main/animations/write.gif)

### rocket
```html
<animated-mat-icon animation="rocket" icon="airplanemode_active"></animated-mat-icon>
```
![rocket](https://raw.githubusercontent.com/enigmaboo/animated-mat-icon/main/animations/rocket.gif)

### left-right
```html
<animated-mat-icon animation="left-right" icon="swap_horiz"></animated-mat-icon>
```
![left-right](https://raw.githubusercontent.com/enigmaboo/animated-mat-icon/main/animations/left-right.gif)
