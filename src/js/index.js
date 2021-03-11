// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

document.addEventListener('DOMContentLoaded', () => {

ymaps.ready(init);

function init () {

  const myMap = new ymaps.Map("map", {
      center:[48.500645, 44.579830],
      zoom: 5,
      controls: []
  });

  let myGeoObjects = [];

  const options = {
    iconLayout: 'default#image',
    iconImageHref: 'assets/img/pin.svg',
    iconImageSize: [36, 40],
    iconImageOffset: [-35, -35]
  }

  const address = [
    {
      cords: [55.724510, 37.655580],
      city: 'Москва'
    },
    {
      cords: [48.500645, 44.579830],
      city: 'Волгоград'
    },
    {
      cords: [45.040922, 38.982958],
      city: 'Краснодар'
    },
    {
      cords: [51.586537, 45.966398],
      city: 'Саратов'
    },
    {
      cords: [51.671439, 39.203243],
      city: 'Воронеж'
    },
    {
      cords: [40.219916, 44.570380],
      city: 'Ереван'
    },
    {
      cords: [55.023083, 82.975604],
      city: 'Новосибирск'
    },
  ]

  address.forEach(point => {
    myGeoObjects.push(new ymaps.Placemark(point.cords,
    {
      balloonContentBody: point.city
    },
    options))
  })

  const clusterer = new ymaps.Clusterer({
      clusterDisableClickZoom: false,
      clusterOpenBalloonOnClick: false,
  });

  clusterer.add(myGeoObjects);
  myMap.geoObjects.add(clusterer);

}

const toggleBtns = document.querySelectorAll('[data-js="toggle-menu"]');
const mobileNav = document.querySelector('[data-js="menu-mobile"]');

toggleBtns.forEach( btn => {
  btn.addEventListener('click', toggleMenu)
})

function toggleMenu () {
  const activeClass = 'header__menu_show';
  mobileNav.classList.toggle(activeClass);
  document.body.classList.toggle('modal-open');

}

})
