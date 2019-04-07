
function Main() {
	var _proxyContainer;
	var _body;
	var _teddy;

    function init() {
		_proxyContainer = document.querySelector('.js-proxy');
		_body = document.querySelector('body');
		// getPage();

		createTeddy();

		
	}

	function createTeddy() {
		_teddy = document.createElement('img');
		_teddy.src = 'teddy.gif';
		_teddy.classList.add('teddy');
		_body.appendChild(_teddy); 
	}
	


	
    function getPage() {
		fetch('/get-proxy')
		.then((response) => response.json())
		.then((data) => { 
			console.log(data);
		})
		.catch(error => {
			console.log(error);
		});
	}
	



    init();
}

window.onload = Main();

