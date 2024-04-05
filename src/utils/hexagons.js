export const moveElement = (x,y) => {
  const hexagon = document.querySelector(".hexagon-main")
  const width = 106
  const heightMid = 58
  const heightPeak = 30
  const height = heightMid*2 + heightPeak*2
  const yValue = Math.floor(y/height)
  let positionY = height * yValue

  const xValue = Math.floor(x/width)
  let positionX = width * xValue

  const xResto = x % width
  const yResto = y % height

  let leftAditional = 0
  let topAditional = 0

  if(xResto <= (width/2) && yResto <= heightPeak){ // Bloque 1
    const m = -heightPeak / (width/2)
    const yEnLinea = m * xResto + heightPeak
    if(yResto <= yEnLinea){
      leftAditional = -(width/2)
      topAditional = -88
    }
  }
  else if(xResto <= width && yResto <= heightPeak){ // Bloque 2
    const m = heightPeak / (width/2)
    const yEnLinea = m * xResto - heightPeak
    if(yResto <= yEnLinea){
      leftAditional = (width/2)
      topAditional = -(heightMid+heightPeak)
    }
  }
  else if(xResto <= (width/2) && yResto <= (heightMid+heightPeak)){ // Bloque 3
    const m = heightPeak / (width/2)
    const yEnLinea = m * xResto + (heightMid+heightPeak)
    if(yResto >= yEnLinea){
      leftAditional = -(width/2)
      topAditional = (heightMid+heightPeak)
    }
  }
  else if(xResto <= width && yResto <= (heightMid+heightPeak)){ // Bloque 4
    const m = -heightPeak / (width/2)
    const yEnLinea = m * xResto + 148
    if(yResto >= yEnLinea){
      leftAditional = (width/2)
      topAditional = (heightMid+heightPeak)
    }
  }
  else if(xResto <= (width/2)){
    leftAditional = -(width/2)
    topAditional = (heightMid+heightPeak)
  }
  else {
    leftAditional = (width/2)
    topAditional = (heightMid+heightPeak)
  }

  positionX += leftAditional
  positionY += topAditional

  hexagon.style.left = positionX + 'px'
  hexagon.style.top = positionY + 'px'

  const hexagonLeft = document.querySelector(".hexagon-left")
  hexagonLeft.style.left = positionX - width + 'px'
  hexagonLeft.style.top = positionY + 'px'

  const hexagonLeftTop = document.querySelector(".hexagon-left-top")
  hexagonLeftTop.style.left = positionX - (width/2) + 'px'
  hexagonLeftTop.style.top = positionY + (heightMid+heightPeak) + 'px'

  const hexagonLeftBottom = document.querySelector(".hexagon-left-bottom")
  hexagonLeftBottom.style.left = positionX - (width/2) + 'px'
  hexagonLeftBottom.style.top = positionY - (heightMid+heightPeak) + 'px'

  const hexagonRight = document.querySelector(".hexagon-right")
  hexagonRight.style.left = positionX + width + 'px'
  hexagonRight.style.top = positionY + 'px'

  const hexagonRightTop = document.querySelector(".hexagon-right-top")
  hexagonRightTop.style.left = positionX + (width/2) + 'px'
  hexagonRightTop.style.top = positionY + (heightMid+heightPeak) + 'px'

  const hexagonRightBottom = document.querySelector(".hexagon-right-bottom")
  hexagonRightBottom.style.left = positionX + (width/2) + 'px'
  hexagonRightBottom.style.top = positionY - (heightMid+heightPeak) + 'px'

  const hexagonTop = document.querySelector(".hexagon-top")
  hexagonTop.style.left = positionX + 'px'
  hexagonTop.style.top = positionY - height + 'px'

  const hexagonBottom = document.querySelector(".hexagon-bottom")
  hexagonBottom.style.left = positionX + 'px'
  hexagonBottom.style.top = positionY + height + 'px'

  const hexagonLeftTopMax = document.querySelector(".hexagon-left-top-max")
  hexagonLeftTopMax.style.left = positionX - width - (width/2) + 'px'
  hexagonLeftTopMax.style.top = positionY - (heightMid+heightPeak) + 'px'

  const hexagonLeftBottomMax = document.querySelector(".hexagon-left-bottom-max")
  hexagonLeftBottomMax.style.left = positionX - width - (width/2) + 'px'
  hexagonLeftBottomMax.style.top = positionY + (heightMid+heightPeak) + 'px'

  const hexagonRightTopMax = document.querySelector(".hexagon-right-top-max")
  hexagonRightTopMax.style.left = positionX + width + (width/2) + 'px'
  hexagonRightTopMax.style.top = positionY - (heightMid+heightPeak) + 'px'

  const hexagonRightBottomMax = document.querySelector(".hexagon-right-bottom-max")
  hexagonRightBottomMax.style.left = positionX + width + (width/2) + 'px'
  hexagonRightBottomMax.style.top = positionY + (heightMid+heightPeak) + 'px'

  

  const cursor = document.querySelector('.cursor-background')
  cursor.style.left = x - 100 + 'px'
  cursor.style.top = y - 100 + 'px'
}