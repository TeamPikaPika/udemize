export const getGoogleUrl = (from: string) => {
  const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;

  const options = {
    // redirect_uri: process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT as string,
    redirect_uri: 'http://localhost:3000/api/sessions/oauth/google',
    // client_id: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID as string,
    client_id: '852415567909-kgtai2r2tirk756oq2gp7qn875122pk3.apps.googleusercontent.com',
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' '),
    state: from,
  };
  const qs = new URLSearchParams(options);
  return `${rootUrl}?${qs.toString()}`;
};
