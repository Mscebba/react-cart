export function zoomIn(event, id) {
  var img = document.getElementById(id);
  var posX = event.pageX - img.getBoundingClientRect().left;
  var posY = event.pageY - img.getBoundingClientRect().top;
  img.style.backgroundSize = '200%';
  img.style.border = '1px solid #747474';
  img.style.backgroundPosition = `${posX / 3.8}% ${posY / 5}%`;
}

export function zoomOut(id) {
  var element = document.getElementById(id);
  element.style.backgroundSize = 'contain';
  element.style.border = 'none';
  element.style.backgroundPosition = 'center center';
}
