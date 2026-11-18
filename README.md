# Richverse Ecotech website

The React site builds to prerendered HTML. Vercel serves the clean page URLs and runs the two mail handlers under `/api`. Use the Node.js major configured for the hosting project (22 at the time of this release).

```sh
npm ci
npm run verify
npm run preview
```

`verify` checks types, tests contact and newsletter behavior, loads each packaged Vercel function, and validates the production HTML, sitemap, metadata, and local links. The tests do not send mail. The local static preview does not run the email APIs.

For a release, deploy the tested commit to the existing project's **Preview** environment. Check clean URLs and legacy redirects, an unknown path returning HTTP 404, and the production canonical and sitemap URLs. Using a controlled address, verify that an enquiry arrives at the team inbox with the correct reply-to, that the sender receives the acknowledgement, and that the team receives the newsletter signup request. A successful HTTP response alone does not establish inbox delivery. The server-side mail settings are listed in [.env.example](.env.example). Promote only after the preview checks pass.

The four home-page photographs are editorial illustrations from Pexels: [development](https://www.pexels.com/photo/7988087/), [marketing](https://www.pexels.com/photo/6476250/), [networking](https://www.pexels.com/photo/19226353/), and [energy](https://www.pexels.com/photo/4254169/). They do not depict Richverse client engagements.
