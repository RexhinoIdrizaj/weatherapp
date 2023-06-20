import Config from 'react-native-config';

import { createUnifiedAPI } from '../services';

export const apiWeather = createUnifiedAPI({ baseURL: Config.BASE_URL });
