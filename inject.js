const blockedHostNames = [
    'www.varzesh3.com'
]

function countdownButton (button, onComplete) {
    let start = 100000000
    button.addEventListener('click', function () {
        start--
        this.innerText = start.toString()
        if (start === 0) {
            onComplete()
        }
    })
}

function createButton (removeOverlay) {
    const button = document.createElement('button')
    button.innerText = 'تو رو خدا فقط همین یه بار!'
    countdownButton(button, removeOverlay)
    return button
}

function addOverlay () { 
    const overlay = document.createElement('div')
    overlay.style.display = 'flex'
    overlay.style.flexDirection = 'column'
    overlay.style.alignItems = 'center'
    overlay.style.justifyContent = 'center'
    overlay.style.position = 'fixed'
    overlay.style.top = 0
    overlay.style.left = 0
    overlay.style.bottom = 0
    overlay.style.right = 0
    overlay.style.backgroundColor = '#ffffff'
    overlay.style.zIndex = '10000000000'
    overlay.innerHTML = '<h1 dir="ltr" style="font-size: 3rem !important;">Focus!</h1>'

    overlay.appendChild(createButton(removeOverlay))

    document.body.appendChild(overlay)
    const interval = setInterval(function () {
        if (overlay && !overlay.parentNode) {
            document.body.appendChild(overlay)
        }
    }, 1000)

    function removeOverlay () {
        clearInterval(interval)
        overlay.remove()
        overlay = undefined
    }
}

if (blockedHostNames.some(t => t == window.location.hostname)) {
    addOverlay()
}