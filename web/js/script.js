function shareOnWhatsApp() {
	// Share website on WhatsApp
	var url = encodeURIComponent(window.location.href);
	window.open("https://wa.me/?text=" + url);
}

function shareOnLinkedIn() {
	// Share website on LinkedIn
	var url = encodeURIComponent(window.location.href);
	window.open("https://www.linkedin.com/shareArticle?url=" + url);
}

function shareOnFacebook() {
	// Share website on Facebook
	var url = encodeURIComponent(window.location.href);
	window.open("https://www.facebook.com/sharer.php?u=" + url);
}

function shareOnInstagram() {
	// Share website on Instagram
	var url = encodeURIComponent(window.location.href);
	window.open("https://www.instagram.com/share?url=" + url);
}

function sendLocation() {
  // Verificar se o navegador suporta Geolocation
  if ('geolocation' in navigator) {
    // Obter a posição atual do usuário
    navigator.geolocation.getCurrentPosition(function(position) {
      // Obter o endereço IP do usuário
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          // Enviar dados para a API
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const ipAddress = data.ip;
          const apiUrl = 'https://api.example.com/location';
          const dataToSend = { latitude, longitude, ipAddress };
          fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(dataToSend),
            headers: { 'Content-Type': 'application/json' }
          })
          .then(response => {
            console.log('Dados enviados com sucesso para a API');
          })
          .catch(error => {
            console.error('Erro ao enviar dados para a API:', error);
          });
        })
        .catch(error => {
          console.error('Erro ao obter endereço IP:', error);
        });
    });
  } else {
    console.error('Geolocation não está disponível');
  }
}
