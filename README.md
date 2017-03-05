# Hello, ServiceWorker World

A project to meet the 'lighthouse audit test' of [a URL that responds with a 200 when offline](https://developers.google.com/web/tools/lighthouse/audits/http-200-when-offline) and also gives some kind of visual responsive cue to the user that that would seem as if they are in fact online.

Intended to be a re-usable module basically to add some kind of customizable failing view so that a user never see's the failasaur or equivalent anymore:

![Failasaur](https://qph.ec.quoracdn.net/main-qimg-2726194a5aea31c692cc6ccb06457469)

Thanks to @airbr for the idea! :bulb:


### Offline demo steps

1. clone the repo
2. run `http-server` or similar in the repo folder
3. Visit localhost:8080 or whatever
4. See regular content on page, service worker info in console
5. Go offline with DevTools or kill `http-server`
6. refresh the page
7. See cached offline page instead of browser version


### Future developments:

* style the app and offline page to match
* include manifest, etc. for Lighthouse


### Resources

##### [Simple Service Worker Tutorial](https://github.com/airbr/simple-serviceworker-tutorial)

##### [Progressive Web Apps across all frameworks - Google I/O 2016](https://www.youtube.com/watch?v=srdKq0DckXQ)

##### [Future App Model: Advanced Service Worker (Chrome Dev Summit 2016)](https://www.youtube.com/watch?v=J2dOTKBoTL4&t=305s)

##### [MDN service worker basic example](https://github.com/mdn/sw-test)

##### [Offline Fallback recipe](https://serviceworke.rs/offline-fallback.html)

