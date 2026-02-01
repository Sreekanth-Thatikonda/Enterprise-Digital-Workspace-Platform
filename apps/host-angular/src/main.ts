import { initFederation } from '@angular-architects/native-federation';

initFederation({
  'remote-react-hr': 'http://localhost:5001/assets/remoteEntry.js',
  'remote-react-finance': 'http://localhost:5002/assets/remoteEntry.js',
  'remote-angular-admin': 'http://localhost:5003/remoteEntry.json',
  'remote-angular-reports': 'http://localhost:5004/remoteEntry.json',
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
