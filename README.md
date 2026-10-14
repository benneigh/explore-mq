# MerryQuery: An AI Powered Platform for Learning Support

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/benneigh/explore-mq)

[![GitHub issues](https://img.shields.io/github/issues/benneigh/explore-mq)](https://github.com/benneigh/explore-mq/issues)
[![GitHub forks](https://img.shields.io/github/forks/benneigh/explore-mq)](https://github.com/benneigh/explore-mq/network)
[![GitHub stars](https://img.shields.io/github/stars/benneigh/explore-mq)](https://github.com/benneigh/explore-mq/stargazers)
[![GitHub license](https://img.shields.io/github/license/benneigh/explore-mq)](https://github.com/benneigh/explore-mq/blob/main/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/benneigh/explore-mq)](https://github.com/benneigh/explore-mq/commits/main)
[![GitHub contributors](https://img.shields.io/github/contributors/benneigh/explore-mq)](https://github.com/benneigh/explore-mq/graphs/contributors)
[![Code Coverage](https://img.shields.io/codecov/c/gh/benneigh/explore-mq)](https://codecov.io/gh/benneigh/explore-mq)
[![Build Status](https://img.shields.io/github/workflow/status/benneigh/explore-mq/CI)](https://github.com/benneigh/explore-mq/actions)
[![Dependabot Status](https://img.shields.io/badge/dependabot-active-brightgreen)](https://github.com/benneigh/explore-mq/pulls?q=is%3Apr+is%3Aopen+label%3A%22dependencies%22)

## Why Use MerryQuery

MerryQuery uses AI technology to transform the learning experience in modern classrooms. Our platform offers:

- **AI-Powered Responses:** Provides contextually relevant and course-specific answers to student queries.
- **Enhanced Engagement:** Encourages interactive learning through guided dialogues.
- **Instructor Insights:** Allows educators to monitor student interactions and tailor support.
- **Reliable Source Citations:** Ensures information accuracy and fosters trust.
- **Adaptive Support:** Customizes response granularity to meet diverse educational needs.


## Code Documentation
Next.js (App Router) with Tailwind CSS. Content lives in `data/`; components only render it.

### Pages

- **`app/page.tsx`:** Homepage: hero, platform features, course toolkit, ExLAIM teaser, news, recognition, team, and contact.
- **`app/exlaim/page.tsx`:** The ExLAIM 2026 co-design program and the five tools it produced.
- **`app/papers/page.tsx`:** Publications and related work.
- **`app/talks/page.tsx`:** Talks, interviews, and press.
- **`app/team/page.tsx`:** Project leads, every contributor by term, and faculty collaborators.
- **`app/gallery/page.tsx`:** Photo gallery with category filters and a lightbox.
- **`app/faculty-collaborators/`:** Faculty collaborators and one page per collaborator.
- **SEO:** `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx` (share card), and `lib/seo.ts` (per-page canonical and social metadata).

### Data

- **`newsItems.ts`:** News cards (newest first) and the hero announcement.
- **`featuresData.ts`:** Platform features and the five GenAI assistance levels.
- **`toolkitData.ts`:** The teacher tools shown in "Your course toolkit".
- **`exlaimData.ts`:** ExLAIM phases, practices, and tool write-ups.
- **`contributorsData.ts`:** Student contributors, one stint per term they worked on MerryQuery, with public LinkedIn/GitHub/website links, plus the ExLAIM teachers. The Team page lists people under every term they contributed.
- **`teamData.ts` / `facultyData.ts`:** Project leads and faculty collaborators.
- **`papersData.ts`:** Papers, related work, and talks.
- **`galleryData.ts`:** Gallery photos. Add images to `public/images/gallery/` and an entry here.
- **`navLinks.ts`:** Navigation links, the platform URL, and the contact address.

## Check Out the Video!

Watch this [video]() to see MerryQuery in action and learn how it can enhance your educational experience.

## Contributors

- **Dr. Tiffany Barnes**
  - *Principle Investigator*
  - [tmbarnes@ncsu.edu](mailto:tmbarnes@ncsu.edu)

- **Dr. Dongkuan (DK) Xu**
  - *Principle Investigator*
  - [dxu27@ncsu.edu](mailto:dxu27@ncsu.edu)

- **Dr. Joey Huang**
  - *Faculty Collaborator*
  - [joeyhuang@ncsu.edu](mailto:joeyhuang@ncsu.edu)

- **Benyamin Tabarsi**
  - [GitHub](https://github.com/benneigh)
  - *PhD Researcher*
  - [btaghiz@ncsu.edu](mailto:btaghiz@ncsu.edu)

### Collaborating Developers

- [Aditya Basarkar](https://github.com/adityabasarkar)
- [Xukun Liu](https://github.com/liuxukun2000)
- [Teddy Chen](https://github.com/tddschn)
- [Aishwarya Radhakrishnan](https://github.com/aishrad2)
- [Homak Patel](https://github.com/Homak-Patel)
- [Berwin Chen](https://github.com/BerwinChen)

## Acknowledgments

- **OpenAI:** For providing the foundational AI technologies that power MerryQuery.
- **All Contributors:** Special thanks to every team member and contributor who has dedicated their time and expertise to make MerryQuery possible.
