import SoundCloud from 'soundcloud';

const API_HOST = '//api.soundcloud.com';

export function auth() {
  SoundCloud.connect().then((session) => {
    fetchMe(session)
  });
}

function fetchMe(session) {
  fetch(`${API_HOST}/me?oauth_token=${session.oauth_token}`)
    .then((res) => res.json())
    .then((data) => {
      console.log('me', data);
    });
}
