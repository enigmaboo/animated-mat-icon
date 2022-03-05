# Animated Mat Icon

A simple light weight package for animating angular mat icons

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