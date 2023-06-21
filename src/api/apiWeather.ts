import Config from 'react-native-config';

import { createUnifiedAPI } from '../services';

/*
 * Retrieve network api exposed
 */

export const apiWeather = createUnifiedAPI({ baseURL: Config.BASE_URL });
