const audio = document.querySelector('.music');
const playBtn = document.getElementById('playMusicBtn');

playBtn.addEventListener('click', () => {
    audio.play().catch(error => {
        console.log('Error playing music:', error);
    });
    playBtn.style.display = 'none';
});

window.addEventListener('load', () => {
    Swal.fire({
        title: 'Do you want to play music in the background?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            playBtn.style.display = 'block';
        }
        animationTimeline();
    });
});

const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textboxChars = document.getElementsByClassName('textbox__chat') [0];
    const hbd = document.getElementsByClassName('wish__hbd') [0];

    textboxChars.innerHTML = `<span>${textboxChars.innerHTML
        .split('')
        .join('</span><span>')}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split('')
        .join('</span><span>')}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: '15deg'
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: '-15deg'
    }

    
    const tl = gsap.timeline();

    tl.to('.container', {
        duration: 0.6,
        visibility: 'visible'
    })
    .from('.one', {
        duration: 0.7,
        opacity: 0,
        y: 10
    })
    .from('.two', {
        duration: 0.4,
        opacity: 0,
        y: 10
    })
    .to('.one', {
        duration: 0.7,
        opacity: 0,
        y: 10
    }, '+=3')
    .to('.two', {
        duration: 0.7,
        opacity: 0,
        y: 10
    }, '-=1')
    .set('.one, .two', {
        display: 'none' })
    .set('.three', {
        display: 'block' })
    .from('.three', {
        duration: 0.7,
        opacity: 0,
        y: 10
    }, '-=1')
    .set('.three', {
        display: 'none' })
    .set('.four', {
        display: 'block' })
    .from('.four', {
        duration:  0.7,
        opacity: 0,
        scale: 0.2,
    })
    .from('.fake__button', {
        duration: 0.3,
        opacity: 0,
        scale: 0.2,
    })
    .to('.textbox__chat span', {
        duration: 1,
        visibility: 'visible',
        stagger: 0.05,
    })
    .to('.fake__button', {
        duration: 0.1,
        backgroundColor: 'rgb(127,206,248)'
    }, '+=4')
    .to('.four', {
        duration: 0.5,
        opacity: 0,
        scale: 0.2,
        y: -150
    }, '+=1')

    .from('.idea__1', { duration: 0.7, ...ideaTextTrans })
    .to('.idea__1', { duration: 0.7, ...ideaTextTransLeave}, '+=2.5' )
    .from('.idea__2', { duration: 0.7, ...ideaTextTrans })
    .to('.idea__2', { duration: 0.7, ...ideaTextTransLeave}, '+=2.5' )
    .from('.idea__3', { duration: 0.7, ...ideaTextTrans })
    .to('.idea__3 strong', {
        duration: 0.5,
        scale: 1.2,
        x: 10,
        backgroundColor: 'rgb(21, 161, 237)',
        color: '#fff'
    })
    .to('.idea__3', { duration: 0.7, ...ideaTextTransLeave}, '+=2.5' )
    .from('.idea__4', { duration: 0.7, ...ideaTextTrans })
    .to('.idea__4', { duration: 0.7, ...ideaTextTransLeave}, '+=2.5' )
    .from('.idea__5', { duration: 0.7, ...ideaTextTrans })
    .to('.idea__5', { duration: 0.7, ...ideaTextTransLeave}, '+=2.5' )
    .set('.idea__5', { 
        display: 'none' })
    .set('.idea__6', { 
        display: 'block',
        opacity: 1,
        visibility: 'visible'
    })
    .from('.idea__6 span', {
        duration: 0.8,
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: "expo.out" 
    }, '+=0.5') 
    .to('.idea__6 span', {
        duration: 0.8,
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: "expo.out"
    }, '+=1.5')
    .set('.idea__6', { 
        display: 'none' })
    .set('.baloons img', { 
        opacity: 0,
        y: 600
    })
    .to('.baloons img', {
        duration: 2,
        opacity: 1,
        y: -800,
        stagger: 0.3,
        ease: "power1.out",
    })
    .set('.profile', {
        display: 'block',
        opacity: 1,
        visibility: 'visible'
    })
    .from('.profile', {
        duration: 1.5,
        opacity: 0,
        scale: 0.5,
        x: 25,
        y: -25,
        rotationZ: -45,
        ease: "power2.out"
    }, '-=2')
    .from('.wish__hbd span', {
        duration: 1.0,
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: '30deg',
        ease: "back.out(1.7)"
    }, '+=0.1')
    .to('.wish__hbd span', {
        duration: 0.7,
        scale: 1.4,
        rotateY: 150
    })
    .to('.wish__hbd span', {
        scale: 1,
        rotateY: 0,
        ease: "expo.out"
    }, '+=0.1')
    .from('.wish__text', {
        duration: 0.5,
        opacity: 0,
        y: 10,
        skewX: '-15deg'
    }, '+=0.1')
    .to('.eight svg', {
        duration: 1,
        opacity: 0,
        visibility: 'visible',
        scale: 80,
        stagger: 0.3,
        repeat: 2,
        repeatDelay: 0.6,
    })
    .to('.six', {
        duration: 0.5,
        opacity: 0,
        y: 30,
        zIndex: -1
    })
}