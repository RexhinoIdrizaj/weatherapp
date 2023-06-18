import createUnifiedAPI from '../services';

const BASE_URL =
  'https://us-central1-mobile-assignment-server.cloudfunctions.net'; //TODO: REVISIT THIS TO USE ENV

export const apiWeather = createUnifiedAPI({ baseURL: BASE_URL });
