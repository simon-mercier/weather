import SCSS from 'csstype';
import { random, randomMinMax } from '../../utils/code-utils';


const MAX_ANIMATION_TIME = 1000;

export const randomStartPosition: SCSS.Properties = {
    animationDelay : `-${random(MAX_ANIMATION_TIME)}s`,
}

export const randomHeight = (min: number, max: number): SCSS.Properties => {
    return {
        top: `${randomMinMax(min, max)}%`
    } as SCSS.Properties
}

export const opacity = (opacity: number): SCSS.Properties => {
    return {
        opacity: `${opacity}%`
    } as SCSS.Properties
}

export enum TranslationDirection {
    LEFT,
    RIGHT,
}

export const translate = (direction: TranslationDirection, width: number, duration: number): SCSS.Properties => {
    return {  
        position: 'absolute',
        width: `${width}%`,
        left: direction === TranslationDirection.LEFT ? '-100%' : '100%',
        animationDuration: `${duration}s`,
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        animationFillMode: 'forwards',
    } as SCSS.Properties
}
