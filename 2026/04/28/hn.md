# Hacker News Top Stories - April 28, 2026

Top submissions from the last 24 hours, sourced from [hckrnews.com](https://hckrnews.com/).

---

## 1. [Ghostty is leaving GitHub](https://mitchellh.com/writing/ghostty-leaving-github)
**1182 points** | [335 comments](https://news.ycombinator.com/item?id=47939579)

**Article:** Mitchell Hashimoto announced that Ghostty, his terminal emulator project, is leaving GitHub due to persistent reliability issues, noting that almost every day has an outage entry in his journal and that GitHub Actions failures regularly block development work. He has not yet named a replacement platform, stating he is in discussions with multiple providers (both commercial and open source), and plans to leave a read-only mirror on GitHub while migrating incrementally over the coming months.

**Discussion:** The HN discussion broadly validates Hashimoto's frustrations, with multiple commenters documenting GitHub's technical decline and citing an unofficial status page showing roughly 87.25% uptime (about 3 hours of partial outages daily). A major theme is Microsoft's pattern of degrading acquisitions, drawing comparisons to Heroku under Salesforce, though a GitHub employee pushed back arguing that scale challenges rather than intentional neglect explain the issues. Commenters also debated the irony of Git's distributed design being undermined by centralization around a single platform.

---

## 2. [Localsend: An open-source cross-platform alternative to AirDrop](https://github.com/localsend/localsend)
**710 points** | [223 comments](https://news.ycombinator.com/item?id=47933208)

**Article:** LocalSend is a free, open-source application that allows users to securely share files and messages between nearby devices over a local network without requiring an internet connection. Built primarily with Flutter and Rust, it supports Android, iOS, macOS, Windows, and Linux, using a REST API with HTTPS encryption and on-the-fly TLS/SSL certificate generation.

**Discussion:** The dominant criticism is that LocalSend requires devices to already share a local WiFi network, unlike AirDrop which creates ad-hoc peer-to-peer connections via Apple's AWDL protocol -- making LocalSend less useful for spontaneous sharing with strangers. Many users nonetheless praise its reliability and cross-platform support, with some reporting it works more dependably than AirDrop itself. Alternatives discussed include PairDrop (browser-based WebRTC), KDE Connect, Google's QuickShare, and several others.

---

## 3. [Show HN: OSS Agent I built topped the TerminalBench on Gemini-3-flash-preview](https://github.com/dirac-run/dirac)
**364 points** | [141 comments](https://news.ycombinator.com/item?id=47920787)

**Article:** Dirac is an open-source AI coding agent available as both a VS Code extension and CLI tool that topped the TerminalBench 2.0 leaderboard with a 65.2% score using Google's Gemini-3-Flash-Preview model. Its key technical innovations include hash-anchored edits (using stable line hashes instead of fragile line numbers), AST-native precision for structural code manipulations, and multi-file batching that reduces API costs by 64.8% compared to competing agents, averaging $0.18 per task.

**Discussion:** The dominant theme is that the agent's harness and tooling design matters more than the underlying model, with commenters noting "the harness is what's being measured, the model is just the substrate." There was significant debate about benchmark generalizability, with critics requesting tests across multiple model families rather than just Gemini-3-Flash to rule out overfitting. Privacy concerns around telemetry collection were raised by multiple users, though the developer responded by clarifying data practices.

---

## 4. [Period tracking app, Flo, found to be selling user data to Meta](https://femtechdesigndesk.substack.com/p/your-period-tracking-app-has-been)
**320 points** | [211 comments](https://news.ycombinator.com/item?id=47932990)

**Article:** The period tracking app Flo embedded a secret data-sharing tool that transmitted sensitive reproductive health information -- including menstrual cycles, ovulation, pregnancy status, sexual activity, and contraception use -- to Meta, Google, and other third parties, despite its privacy policy suggesting otherwise. A 2025 lawsuit involving 13 million users established legal precedent in the regulatory gap between HIPAA-covered healthcare and unregulated wellness apps.

**Discussion:** Commenters expressed alarm that Flo monetized intimate health data while simultaneously charging premium subscriptions, with many arguing the entire app ecosystem is fundamentally compromised when it comes to sensitive data. A significant thread explored how period tracking data could facilitate prosecution in jurisdictions restricting abortion, particularly through location data and law enforcement data purchases. Users recommended open-source alternatives from F-Droid and built-in phone trackers.

---

## 5. [ASML became the chokepoint for cutting-edge chips](https://worksinprogress.co/issue/the-worlds-most-complex-machine/)
**315 points** | [195 comments](https://news.ycombinator.com/item?id=47901064)

**Article:** The article traces how ASML, a Dutch company spun out of Philips in 1984, rose from unlikely underdog to the world's sole manufacturer of EUV lithography machines essential for cutting-edge semiconductor production. ASML's modular outsourcing approach, strategic partnerships, and deep customer collaborations proved decisive in overtaking Nikon and Canon. Its EUV machines cost over $120 million each, contain more than 100,000 components, and use 13.5-nanometer wavelength light to create transistor patterns with unprecedented precision.

**Discussion:** Commenters emphasized that ASML's dominance stems not from a single breakthrough but from meticulous optimization across numerous integrated systems, combined with exclusive supplier relationships like Zeiss for optics. Significant discussion focused on geopolitical implications, particularly how US control over key EUV components effectively gives Washington veto power over chip exports to China. There was debate about whether China could replicate ASML's capabilities, with estimates ranging from 5 to 20+ years.

---

## 6. [An Update on GitHub Availability](https://github.blog/news-insights/company-news/an-update-on-github-availability/)
**291 points** | [205 comments](https://news.ycombinator.com/item?id=47932422)

**Article:** GitHub experienced two major incidents in late April 2026: a merge queue regression on April 23 that produced incorrect merge commits affecting 658 repositories and 2,092 pull requests, and an Elasticsearch failure on April 27 that disrupted platform-wide search. GitHub announced it is restructuring its infrastructure to handle AI-driven exponential growth, scaling from a 10X capacity plan to 30X, migrating from its Ruby monolith to Go, and prioritizing "availability first, then capacity, then new features."

**Discussion:** Commenters were broadly skeptical of the blog post, criticizing its unlabeled graphs and the contradiction between GitHub's stated "availability first" priority and its continued release of new features during reliability crises. The most pointed criticism noted that GitHub is now pursuing multi-cloud solutions just six months after Microsoft forced an Azure migration, suggesting Azure could not handle the load. Multiple users reported moving to self-hosted Forgejo or GitLab.

---

## 7. [Networking changes coming in macOS 27](https://eclecticlight.co/2026/04/23/networking-changes-coming-in-macos-27/)
**256 points** | [226 comments](https://news.ycombinator.com/item?id=47923010)

**Article:** Apple is preparing two major networking changes for macOS 27 (expected September 2026): the likely removal of AFP (Apple Filing Protocol), which has been secondary to SMB since OS X 10.9 Mavericks over 12 years ago, and stricter TLS 1.2+ requirements for server connections affecting enterprise infrastructure like MDM, app distribution, and software updates.

**Discussion:** The HN discussion focused heavily on AFP deprecation concerns, with users reporting that macOS's SMB implementation remains noticeably slower and buggier than AFP, particularly for many small files and after sleep/wake cycles. A recurring debate pitted Apple's security-driven code reduction rationale against user frustration that a company with massive profits should be able to maintain legacy protocol support. The TLS 1.2 requirement received little pushback, with most viewing it as overdue security hygiene.

---

## 8. [Google and Pentagon reportedly agree on deal for 'any lawful' use of AI](https://www.theverge.com/ai-artificial-intelligence/919494/google-pentagon-classified-ai-deal)
**255 points** | [242 comments](https://news.ycombinator.com/item?id=47936156)

**Article:** Google has signed a classified deal with the US Department of Defense allowing the Pentagon to use its AI models for "any lawful government purpose," placing it alongside OpenAI and xAI which have made similar agreements. The deal came less than a day after Google employees demanded CEO Sundar Pichai block Pentagon AI use, and while it includes language against domestic mass surveillance and autonomous weapons without human oversight, it explicitly does not give Google any right to control or veto government operational decisions. Notably, Anthropic was blacklisted by the Pentagon for refusing to remove weapon and surveillance-related guardrails from its models.

**Discussion:** The HN discussion centered on whether Google researchers are morally compromised by contributing to classified Pentagon AI, with commenters noting that the "any lawful use" language lacks meaningful enforcement mechanisms. A significant debate emerged around Anthropic's refusal versus Google/OpenAI's acceptance, with some praising Anthropic's stance and others arguing unilateral restraint in a national security race is strategically naive. Historical parallels to nuclear weapons scientists featured prominently.

---

## 9. [US Supreme Court reviews police use of cell location data](https://www.nytimes.com/2026/04/27/us/politics/supreme-court-cell-data-geofence.html)
**252 points** | [157 comments](https://news.ycombinator.com/item?id=47922940)

**Article:** *Could not fetch -- NYTimes article blocked by network restrictions.* Based on the HN discussion, the article covers the US Supreme Court's review of geofence warrants, in which law enforcement asks companies like Google to hand over cell location data for all devices near a crime scene. The case raises major Fourth Amendment questions about whether such dragnet searches of potentially millions of people's location records constitute unreasonable mass surveillance.

**Discussion:** Commenters are largely concerned about the privacy implications of geofence warrants, arguing they represent unconstitutional mass surveillance that sweeps up millions of innocent people as potential suspects. There is debate over the third-party doctrine (whether data held by tech companies deserves less protection) and whether courts or legislatures should address the gap between modern technology and constitutional frameworks. Several commenters highlight chilling effects on vulnerable populations and note Google's strategic shift to storing location data on-device rather than centrally.

---

## 10. [The quiet resurgence of RF engineering](https://atempleton.bearblog.dev/quiet-resurgence-of-rf-engineering/)
**242 points** | [141 comments](https://news.ycombinator.com/item?id=47903439)

**Article:** Anthony Templeton argues that RF engineering is experiencing a genuine resurgence driven by multiple converging forces: a roughly tenfold increase in satellite launches (driven by constellations like Starlink), 5G base stations requiring 8-16 times more RF components than 4G, and emerging demand from 6G research, automotive radar, and Wi-Fi 7. The talent supply side is severely constrained, with 73% of electrical engineering employers unable to fill positions within six months.

**Discussion:** Commenters highlight a central paradox: RF engineering is intellectually rewarding and increasingly in demand, but pays roughly half of comparable software roles, creating a persistent passion-versus-compensation tension that pushes talent away. Many noted that affordable tools like the NanoVNA and RTL-SDR kits are democratizing RF experimentation, while RF's physics-based nature may offer more job security against AI automation than software roles. Geographic disparities were a recurring theme, with much of the thriving RF work concentrated in China and Europe rather than the US.

---

## 11. [Claude.ai unavailable and elevated errors on the API](https://status.claude.com/incidents/9l93x2ht4s5w)
**240 points** | [202 comments](https://news.ycombinator.com/item?id=47938097)

**Article:** On April 28, 2026, Claude experienced an outage lasting approximately 1 hour and 18 minutes (17:34-18:52 UTC) that affected claude.ai, the Claude API, Claude Code, Claude Console, Claude Cowork, and Claude for Government. The incident primarily impacted authentication systems, causing the website to become inaccessible and elevated errors across the API. Services were fully restored by 18:59 UTC.

**Discussion:** Commenters expressed significant frustration over Claude's reliability, noting that the status page shows roughly 90% uptime over 90 days -- far below enterprise expectations. A particularly vocal enterprise customer spending $200K/month on the API called the frequency of outages "astounding" and criticized poor support. Many users discussed alternatives including running local open-source models (Qwen, DeepSeek), using AWS Bedrock for Claude access, and switching to competitors.

---

## 12. [Anthropic Joins the Blender Development Fund as Corporate Patron](https://www.blender.org/press/anthropic-joins-the-blender-development-fund-as-corporate-patron/)
**233 points** | [175 comments](https://news.ycombinator.com/item?id=47936370)

**Article:** Anthropic has joined the Blender Development Fund at the Corporate Patron level, with the funding dedicated to Blender core development, particularly maintaining and improving the Blender Python API that enables developers and artists to extend the software. Blender Foundation CEO Francesco Siddi acknowledged the announcement was generating significant community feedback, noting the foundation was "actively evaluating it."

**Discussion:** The discussion was sharply divided, with supporters noting that improved Blender Python APIs benefit all users and pointing out that major tech companies like Google, Meta, and Nvidia have sponsored Blender for years without controversy. Critics expressed concern that Anthropic's sponsorship signals intent to eventually replace human artists rather than augment their work. Debate also emerged around community governance and reports of backlash on Mastodon from artists who see AI companies as fundamentally at odds with Blender's artist-empowerment values.

---

## 13. [GitHub Copilot code review will start consuming GitHub Actions minutes](https://github.blog/changelog/2026-04-27-github-copilot-code-review-will-start-consuming-github-actions-minutes-on-june-1-2026/)
**232 points** | [162 comments](https://news.ycombinator.com/item?id=47932028)

**Article:** Starting June 1, 2026, GitHub Copilot code reviews will begin consuming GitHub Actions minutes in addition to AI credits, since the feature runs on an agentic tool-calling architecture using GitHub-hosted runners. This affects all paid Copilot tiers on private repositories, with overages billed at standard Actions rates, while public repositories remain unaffected.

**Discussion:** Commenters widely interpreted this as the end of AI subsidized pricing, with one noting "we are slowly inching closer to the point where AI products will be billed for what they cost." Many criticized the dual billing approach (both Actions minutes and AI credits) as intentional cost obfuscation. Several developers argued GitHub's timing is poor given that the feature is still weaker than competitors like Cursor and Windsurf, and discussion shifted toward self-hosting alternatives as GitHub's costs continue to escalate.

---

## 14. [Waymo in Portland](https://waymo.com/blog/shorts/waymo-in-portland/)
**217 points** | [291 comments](https://news.ycombinator.com/item?id=47938184)

**Article:** Waymo announced its expansion to Portland, Oregon, beginning with manually driven vehicles mapping the city's infrastructure and weather conditions before eventually offering autonomous passenger service pending regulatory approval. The company highlighted its safety record, claiming a 13x reduction in serious injury crashes in cities where it operates, and received endorsements from Portland's mayor and MADD.

**Discussion:** The HN discussion was dominated by tension between Waymo as a practical transportation solution versus its potential to undermine public transit, especially given TriMet's $300M budget shortfall and ongoing service cuts. Commenters debated per-mile cost comparisons between transit and rideshare, with critics arguing Waymo is just an expensive taxi while proponents suggested subsidizing autonomous rides could be more cost-effective than maintaining low-ridership bus routes. A broader thread of resignation about American car-dependent urban design ran throughout.

---

## 15. [AI's Economics Don't Make Sense](https://www.wheresyoured.at/ais-economics-dont-make-sense/)
**179 points** | [142 comments](https://news.ycombinator.com/item?id=47936867)

**Article:** Ed Zitron argues that the AI industry's economics are fundamentally unsustainable, with companies like OpenAI burning far more per user than subscription revenue covers -- reportedly $8 to $13.50 for every dollar of subscription income. The article highlights that data center buildouts like Stargate Abilene would require over $156 billion in annual revenue to justify costs, demand that simply does not exist.

**Discussion:** The discussion is sharply divided between skeptics who agree AI economics are a bubble built on subsidized pricing, and advocates who argue inference costs are plummeting fast enough to make the business viable at scale. Multiple commenters criticized author Ed Zitron for shifting goalposts and presenting speculation as fact, while others identified mathematical errors in his revenue projections. A recurring theme is the comparison to the dot-com bubble, with debate over whether AI companies' 60-90% gross margins on API services indicate hidden profitability or just selective accounting.

---

## 16. [Supreme Court to hear arguments in landmark Roundup weedkiller case](https://www.nytimes.com/2026/04/26/climate/supreme-court-bayer-monsanto-roundup-glyphosate.html)
**156 points** | [212 comments](https://news.ycombinator.com/item?id=47923121)

**Article:** *Could not fetch -- NYTimes article blocked by network restrictions.* Based on the HN discussion, the article covers the Supreme Court hearing arguments in the Bayer/Monsanto Roundup glyphosate case, focusing on whether federal pesticide regulations preempt state-level liability claims rather than directly ruling on glyphosate's safety.

**Discussion:** The discussion centers on the legal preemption question -- whether federal EPA approval of Roundup should override state tort claims -- rather than glyphosate safety per se. Commenters are split between those arguing glyphosate is relatively benign after 52 years of study and those highlighting concerns about Roundup's additional additives, gut microbiome disruption, and alleged ghostwritten safety research. A significant thread also addresses how Monsanto's seed patents create "subscription farming" that concentrates agricultural power.

---

*Generated on April 28, 2026. Two NYTimes articles could not be directly fetched due to network restrictions; summaries for those were inferred from HN discussion context.*
