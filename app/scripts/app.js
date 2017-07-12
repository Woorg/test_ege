import svg4everybody from 'svg4everybody';
import $ from 'jquery';

(function ($) {
	svg4everybody();

	$(function () {
		let $checkbox = $('.subjects__checkboxes .wpcf7-list-item input');
		let $checkClass = 'subjects__checked';


		$checkbox.on('click' , function (e) {
			if( this.checked ) {
				console.log('true');
				$(this).parent().parent().addClass($checkClass);
				$(this).hover().css();
			} else {
				$(this).parent().parent().removeClass($checkClass);
			}
		});


		// map



		ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
					center: [59.940875, 30.356795],
					zoom: 17,
					controls: ['']
				}, {
				});

				myPlacemark = new ymaps.Placemark([59.940875, 30.356795] , {
					// hintContent: 'Собственный значок метки',
					// balloonContent: 'Это красивая метка'
				}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: '../images/general/marker.png',
					// Размеры метки.
					iconImageSize: [40, 69],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-5, -38]
				}),


			myMap.geoObjects
				.add(myPlacemark)
		});



	});


})(jQuery);

