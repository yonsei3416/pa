function authorize () {
  var client_id = this.getQueryParam('app_client_id')

  // Use Exportify application client_id if none given
  if (client_id === '') {
    client_id = '6a26ec0df6da43279a2a81bc6cf89bc4'
  }

  var location = 'https://accounts.spotify.com/authorize' +
    '?client_id=' + client_id +
    '&redirect_uri=' + encodeURIComponent([location.protocol, '//', location.host, location.pathname].join('')) +
    '&scope=playlist-read-private%20playlist-read-collaborative' +
    '&response_type=token'
}
