const blockedHostNames = [
    'www.varzesh3.com'
]

function addOverlay(){ 
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
    overlay.innerHTML = '<h1 dir="ltr" style="font-size: 3rem !important;">Focus!</h1><button>تورو خدا فقط همین یه بار!</button>'
    document.body.appendChild(overlay)
    setInterval(function () {
        if (!overlay.parentNode) {
            document.body.appendChild(overlay)
        }
    }, 1000)
}

if (blockedHostNames.some(t => t == window.location.hostname)) {
    addOverlay()
}