const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "remote-react-hr": "remote_react_hr@http://localhost:5001/assets/remoteEntry.js",
    "remote-react-finance": "remote_react_finance@http://localhost:5002/assets/remoteEntry.js",
    "remote-angular-admin": "remote_angular_admin@http://localhost:5003/remoteEntry.js",
    "remote-angular-reports": "remote_angular_reports@http://localhost:5004/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
