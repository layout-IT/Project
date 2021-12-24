import {createSliderWithTooltip, Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from "react";

function DoubleSlider (){
    const Slider = require('rc-slider');
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    return <>
        <Range min={0} max={1000} defaultValue={[50,500]} />
    </>
}
export default DoubleSlider