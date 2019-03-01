// Internal Dependencies
import apiFetch from './api-fetch';
// import { addQueryArgs } from './url';

window.wp = {
  apiFetch,
  // url: { addQueryArgs },
};

window.save = function(content) {
  console.log(content);
};
