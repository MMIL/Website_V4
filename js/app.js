const flightPath = {
    curviness: 2.5,
    autoRotate: true,
    values: [
        { x: -100, y: -20 },
        { x: -300, y: 50 },
        { x: -450, y: 120 },
        { x: -700, y: 200 },
        { x: -300, y: 50 },
        { x: -650, y: 300 },
        { x: -560, y: 480 },
        { x: 0, y: 480 },
        { x: -100, y: 650 },
        { x: -120, y: 640 }
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.plane', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);


const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
        triggerElement: '.planeanimation',
        duration: 2000,
        triggerHook: 0
    })
    .setTween(tween)
    .setPin(".planeanimation")
    .addTo(controller);