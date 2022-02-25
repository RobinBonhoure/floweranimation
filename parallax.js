const petale1 = document.getElementById("petale1")
const petale2 = document.getElementById("petale2")
const petale3 = document.getElementById("petale3")
const petale4 = document.getElementById("petale4")
const feuilles = document.getElementById("feuilles")
const graine = document.getElementById("graine")
const zone1Div = document.getElementById("div1")
const zone2Div = document.getElementById("div2")
let gate = []
let nbGates = 10
const zone1Height = zone1Div.getBoundingClientRect().height
const zone2Height = zone2Div.getBoundingClientRect().height

// CREATE TRIGGER POINT
for (let i = 0; i < nbGates; i++) {
    gate[i] = zone1Height / 2 + zone2Height * i / nbGates
}


window.addEventListener('scroll', function () {

    let scroll = window.scrollY

    // PETALE1
    if (scroll <= gate[1]) {
        petale1.classList.remove('flower-visible')
    } else {
        petale1.classList.add('flower-visible')
    }
    if (scroll <= gate[2]) {
        petale1.setAttribute('d', "M193.66,234.35,210.57,229c-18.34-9.36-45.83-13-68.54-5.79l-16.91,5.34C143.46,237.92,171,241.52,193.66,234.35Z")
    } else if (scroll <= gate[3]) {
        petale1.setAttribute('d', "M182.23,245.79l28.34-16.63c-30.73-29.15-76.79-40.37-114.84-18L67.39,227.74C98.12,256.89,144.18,268.11,182.23,245.79Z")
    } else {
        petale1.setAttribute('d', "M168.92,262l41.65-32.76C165.4,171.76,97.69,149.65,41.76,193.64L.11,226.39C45.28,283.83,113,305.94,168.92,262Z")
    }
    // PETALE2
    if (scroll <= gate[2]) {
        petale2.classList.remove('flower-visible')
    } else {
        petale2.classList.add('flower-visible')
    }
    if (scroll <= gate[3]) {
        petale2.setAttribute('d', "M222.87,167.21l13.63,11.34c-2-20.49-13.84-45.57-32.14-60.81L190.73,106.4C192.76,126.89,204.57,152,222.87,167.21Z")
    } else if (scroll <= gate[4]) {
        petale2.setAttribute('d', "M207.4,163.77l29.29,14.86c7.94-41.6-7.5-86.43-46.84-106.39L160.56,57.37C152.62,99,168.06,143.8,207.4,163.77Z")
    } else {
        petale2.setAttribute('d', "M185.63,161.29l50.07,17.36c23.93-69,6-138-61.26-161.28L124.39,0C100.44,69.05,118.4,138,185.63,161.29Z")
    }
    // PETALE3
    if (scroll <= gate[3]) {
        petale3.classList.remove('flower-visible')
    } else {
        petale3.classList.add('flower-visible')
    }
    if (scroll <= gate[4]) {
        petale3.setAttribute('d', "M328.27,106.4l-13.63,11.34c-18.29,15.24-30.11,40.32-32.13,60.81l13.62-11.34C314.43,152,326.24,126.89,328.27,106.4Z")
    } else if (scroll <= gate[5]) {
        petale3.setAttribute('d', "M358.22,57.37,328.93,72.24c-39.34,20-54.78,64.79-46.84,106.39l29.29-14.86C350.72,143.8,366.16,99,358.22,57.37Z")
    } else {
        petale3.setAttribute('d', "M393.51,0,343.45,17.37c-67.23,23.32-85.19,92.24-61.25,161.28l50.07-17.36C399.49,138,417.45,69.05,393.51,0Z")
    }
    // PETALE4
    if (scroll <= gate[4]) {
        petale4.classList.remove('flower-visible')
    } else {
        petale4.classList.add('flower-visible')
    }
    if (scroll <= gate[5]) {
        petale4.setAttribute('d', "M392.46,228.56l-16.9-5.34c-22.71-7.17-50.2-3.57-68.54,5.79l16.91,5.34C346.64,241.52,374.13,237.92,392.46,228.56Z")
    } else if (scroll <= gate[6]) {
        petale4.setAttribute('d', "M450.2,227.74l-28.34-16.62c-38.05-22.33-84.11-11.11-114.84,18l28.34,16.63C373.4,268.11,419.47,256.89,450.2,227.74Z")
    } else {
        petale4.setAttribute('d', "M517.48,226.39l-41.65-32.75c-55.93-44-123.64-21.88-168.81,35.55L348.67,262C404.6,305.94,472.31,283.83,517.48,226.39Z")
    }
    // FEUILLES
    if (scroll <= gate[1]) {
        feuilles.classList.remove('flower-visible')
    } else {
        feuilles.classList.add('flower-visible')
    }
    if (scroll <= gate[3]) {
        feuilles.setAttribute('d', "M266,365.1c-3.8,0.4-7,5.6-7.2,12.3h0c-0.2-6.6-3.4-11.9-7.2-12.3l-19.9,0c0,12.2,3.1,22.1,10.1,22.1l9.4,0c2.7,0,5.1,2.4,6.5,6.3c0.6,1.6,0.9,3.3,1,5.2c0,0,0,0.1,0,0.1v0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0v0c0,0,0,0,0-0.1c0.1-1.8,0.5-3.6,1-5.2c1.4-4,3.9-6.3,6.5-6.3l9.4,0c7,0,10.1-9.9,10.1-22.1L266,365.1z")
    } else if (scroll <= gate[6]) {
        feuilles.setAttribute('d', "M281.1,342.8c-11.7,0.8-21.5,13.1-22.2,28.6h0c-0.7-15.4-10.5-27.7-22.2-28.6l-61.6,0.1c0,28.4,9.6,51.4,31.1,51.4l29.2,0c8.2-0.1,15.9,5.5,20.2,14.7c1.7,3.7,2.8,7.8,3.2,12.1c0,0.1,0,0.2,0.1,0.2v0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0v0c0.1,0,0.1-0.1,0.1-0.2c0.4-4.3,1.5-8.4,3.2-12.1c4.3-9.2,12-14.8,20.2-14.7l29.2,0c21.5,0,31.1-23,31.1-51.4L281.1,342.8z")
    } else {
        feuilles.setAttribute('d', "M307.4,317.2c-25.5,1.4-47,21.7-48.5,47.2h-0.1c-1.5-25.5-23-45.8-48.5-47.2l-134.4,0.2c0,47,21,85,67.9,85l63.7-0.1c17.9-0.1,34.6,9.1,44.1,24.3c3.8,6.1,6.1,12.9,7,19.9c0,0.2,0.1,0.3,0.2,0.3v0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0v0c0.1,0,0.2-0.2,0.2-0.3c0.9-7.1,3.2-13.9,7-19.9c9.5-15.2,26.2-24.4,44.1-24.3l63.7,0.1c46.9,0,67.9-38,67.9-85L307.4,317.2z")
    }

});