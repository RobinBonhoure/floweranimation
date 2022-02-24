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
    console.log(gate[i])
}


window.addEventListener('scroll', function () {

    let scroll = window.scrollY

    // APPARITION DE BASE
    if (scroll <= gate[1]) {
        // feuilles.setAttribute('d', "M261.57,381.48h0a14.64,14.64,0,0,0-13.83-13.76l-20.17,0c0,13.68,2.12,24.76,15.8,24.76l3.54,0a15.05,15.05,0,0,1,12.85,7.08,14.29,14.29,0,0,1,2,5.81.1.1,0,0,0,.09.1.11.11,0,0,0,.1-.1,14.75,14.75,0,0,1,4.32-8.52,15.1,15.1,0,0,1,10.66-4.37h1.84c13.64,0,15.74-11.1,15.74-24.76v0H275.4A14.62,14.62,0,0,0,261.57,381.48Z")
        petale1.classList.remove('flower-visible')
        // feuilles.classList.remove('flower-visible')
    } else {
        petale1.classList.add('flower-visible')
        // feuilles.classList.add('flower-visible')
    }
    if (scroll <= gate[2]) {
        petale1.setAttribute('d', "M193.66,234.35,210.57,229c-18.34-9.36-45.83-13-68.54-5.79l-16.91,5.34C143.46,237.92,171,241.52,193.66,234.35Z")
        petale2.classList.remove('flower-visible')
    } else {
        petale2.classList.add('flower-visible')
        petale1.setAttribute('d', "M182.23,245.79l28.34-16.63c-30.73-29.15-76.79-40.37-114.84-18L67.39,227.74C98.12,256.89,144.18,268.11,182.23,245.79Z")
    }
    if (scroll <= gate[3]) {
        petale3.classList.remove('flower-visible')
        petale2.setAttribute('d', "M222.87,167.21l13.63,11.34c-2-20.49-13.84-45.57-32.14-60.81L190.73,106.4C192.76,126.89,204.57,152,222.87,167.21Z")
    } else {
        petale3.classList.add('flower-visible')
    }



    if (scroll >= gate[2] && scroll <= gate[3]) {


    }
    if (scroll >= gate[3] && scroll <= gate[4]) {


        petale3.setAttribute('d', "M328.27,106.4l-13.63,11.34c-18.29,15.24-30.11,40.32-32.13,60.81l13.62-11.34C314.43,152,326.24,126.89,328.27,106.4Z")
        petale2.setAttribute('d', "M207.4,163.77l29.29,14.86c7.94-41.6-7.5-86.43-46.84-106.39L160.56,57.37C152.62,99,168.06,143.8,207.4,163.77Z")
        petale3.style.transform = "scale(1)"
        petale3.style.opacity = "1"
        petale4.style.transform = "scale(0)"
        petale4.style.opacity = "0"
        petale1.setAttribute('d', "M168.92,262l41.65-32.76C165.4,171.76,97.69,149.65,41.76,193.64L.11,226.39C45.28,283.83,113,305.94,168.92,262Z")
    }
    if (scroll >= gate[4] && scroll <= gate[5]) {
        feuilles.setAttribute('d', "M260.68,376h-.1a30.43,30.43,0,0,0-28.76-28.61l-58.89.09c0,28.45,12.72,51.51,41.17,51.51l16,0a31.33,31.33,0,0,1,26.72,14.71,29.82,29.82,0,0,1,4.24,12.09.2.2,0,0,0,.2.2.2.2,0,0,0,.21-.2,30.53,30.53,0,0,1,9-17.71,31.28,31.28,0,0,1,22.16-9.09h12.46c28.36-.07,41.05-23.1,41.05-51.51v-.09h-56.7A30.41,30.41,0,0,0,260.68,376Z")


        petale4.style.transform = "scale(1)"
        petale4.style.opacity = "1"
        petale4.setAttribute('d', "M392.46,228.56l-16.9-5.34c-22.71-7.17-50.2-3.57-68.54,5.79l16.91,5.34C346.64,241.52,374.13,237.92,392.46,228.56Z")
        petale3.setAttribute('d', "M358.22,57.37,328.93,72.24c-39.34,20-54.78,64.79-46.84,106.39l29.29-14.86C350.72,143.8,366.16,99,358.22,57.37Z")
        petale2.setAttribute('d', "M185.63,161.29l50.07,17.36c23.93-69,6-138-61.26-161.28L124.39,0C100.44,69.05,118.4,138,185.63,161.29Z")
    }
    if (scroll >= gate[5] && scroll <= gate[6]) {


        petale4.setAttribute('d', "M450.2,227.74l-28.34-16.62c-38.05-22.33-84.11-11.11-114.84,18l28.34,16.63C373.4,268.11,419.47,256.89,450.2,227.74Z")
        petale3.setAttribute('d', "M393.51,0,343.45,17.37c-67.23,23.32-85.19,92.24-61.25,161.28l50.07-17.36C399.49,138,417.45,69.05,393.51,0Z")
    }
    if (scroll >= gate[6] && scroll <= gate[7]) {


        petale4.setAttribute('d', "M517.48,226.39l-41.65-32.75c-55.93-44-123.64-21.88-168.81,35.55L348.67,262C404.6,305.94,472.31,283.83,517.48,226.39Z")
        feuilles.setAttribute('d', "M260.59,364.37h-.16A50.21,50.21,0,0,0,213,317.16l-134.44.15c0,46.95,21,85,67.94,85l63.66-.06a51.64,51.64,0,0,1,44.09,24.28,48.86,48.86,0,0,1,7,19.94.34.34,0,0,0,.34.34.34.34,0,0,0,.34-.34c1.41-11.21,6.92-21.3,14.83-29.22a51.66,51.66,0,0,1,36.58-15h57.81c46.8-.12,67.74-38.12,67.74-85v-.15H308.05A50.2,50.2,0,0,0,260.59,364.37Z")
    }
    if (scroll >= gate[7] && scroll <= gate[8]) {
    }
    if (scroll >= gate[8] && scroll <= gate[9]) {
    }
    if (scroll >= gate[9] && scroll <= gate[10]) {
    }

});