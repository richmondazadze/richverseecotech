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

## Maintaining search visibility

Each public page must work at its canonical HTTPS URL with JavaScript disabled. Add articles in `src/data/blog.ts`, give each section a stable heading ID, write the direct answer in its own context, and link the reader to the relevant service or demonstrated work. Use editorial dates rather than build timestamps. RSS, article sitemap images and the archive lists are built from the same records. Keep examples labeled; publish client outcomes only with evidence and permission.

Vercel runs the checks against prerendered HTML before accepting a build. The checks cover metadata, canonicals, internal destinations and fragments, search index exclusions, article-to-service identities, RSS, image discovery and reachability from Home. Keep a permanent one-hop redirect when moving an address with a known equivalent. Keep genuine missing pages at 404. The optional `scripts/check-search-journeys.cjs` exercises the web quote comparison, prefilled enquiry and access review worksheet in Chromium and WebKit (requires Playwright and its browsers; set `RV_URL` to the preview).

On release, compare the live sitemap with the candidate, inspect the web service, redesign brief, repair guide and studio project in Search Console, and check Google's last sitemap read. Record indexing separately from technical eligibility. Review Web impressions/clicks and Google AI-feature impressions over matched 28-day periods. Keep exports private. Report accepted enquiries separately from leads a person has qualified. Each provider-accepted contact notification writes one `enquiry_accepted` event with a fixed service category to the hosting logs; it contains no contact fields and does not identify a traffic source. Aggregate within the host’s log retention period and exclude controlled tests. Do not attribute enquiries to search from timing alone.
