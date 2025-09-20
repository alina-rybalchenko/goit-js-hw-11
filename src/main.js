import fetchData from './js/pixabay-api';
import moduleName from './js/render-functions';

import { getImagesByQuery } from './js/pixabay-api.js';

getImagesByQuery('cats').then(data => console.log(data.hits));
