
function Main() {
    var _proxyContainer;

    function init() {
		_proxyContainer = document.querySelector('.js-proxy');
		// getProxy();
		// getGoogle();
    }

    // function getProxy() {

	// 	console.log("hej från getProxy!")
	// 	fetch('/get-proxy')
	// 	.then((response) => response.json())
	// 	.then((data) => { 
		
	// 		console.log(data);

	// 	})
	// 	.catch(error => {
	// 		console.log(error);
	// 	});
	// }
	
    function getGoogle() {

		console.log("hej från getGoogle!")
		fetch('/get-google')
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

