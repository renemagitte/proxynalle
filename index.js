
function Main() {
    var _proxyContainer;

    function init() {
		_proxyContainer = document.querySelector('.js-proxy');
		getPage();
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

