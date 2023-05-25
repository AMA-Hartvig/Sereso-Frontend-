// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    config: {
    apiUrl: 'http://localhost:6161', // repalce with amas database
    graphurl:"http://localhost:4200/Cases",
    graphurlsignOut:"http://localhost:4200",
    Graphclientid:"9718ad34-0e44-4aa7-83e3-940e58d67549", // Engii-soft azure id
    loginFailedRoute:"http://localhost:4200",}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
