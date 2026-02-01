const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

const sharedMappings = shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto', includeSecondaries: true });

// Programmatically remove react-dom server-side entries to avoid async_hooks error
Object.keys(sharedMappings).forEach(key => {
  if (key.startsWith('react-dom/') && key !== 'react-dom/client') {
    delete sharedMappings[key];
  }
});

module.exports = withNativeFederation({
  name: 'host-angular',
  remotes: {
    'remote-react-hr': 'http://localhost:5001/assets/remoteEntry.js',
    'remote-react-finance': 'http://localhost:5002/assets/remoteEntry.js',
    'remote-angular-admin': 'http://localhost:5003/remoteEntry.json',
    'remote-angular-reports': 'http://localhost:5004/remoteEntry.json',
  },
  shared: {
    ...sharedMappings,
  },
  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
  ]
});
