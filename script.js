function setCirclePercent(percent){
    const circlePerimeter = 597;
    const dashOffset = (circlePerimeter * (percent / 100));
    circleElement.style.setPropety('--dash-offset', circlePerimeter - dashOffset);
}