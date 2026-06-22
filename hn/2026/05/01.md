# Hacker News Top Stories - May 1, 2026

Top submissions from the last 24 hours, sourced from [hckrnews.com](https://hckrnews.com/).

---

## 1. [Belgium stops decommissioning nuclear power plants](https://dpa-international.com/general-news/urn:newsml:dpa.com:20090101:260430-930-14717/)
**938 points** | [850 comments](https://news.ycombinator.com/item?id=47961319)

**Article:** Belgium's government has halted its nuclear phase-out plan and will negotiate with operator ENGIE to nationalize the country's seven nuclear reactors. Prime Minister Bart De Wever stated the decision prioritizes "safe, affordable, and sustainable energy" with reduced dependence on fossil fuels, marking a major reversal of the country's longstanding plan to exit nuclear power.

**Discussion:** Commenters overwhelmingly support the decision, arguing that opposing nuclear power while claiming concern about climate change is logically inconsistent. Discussion centers on nuclear's superior safety record per unit of energy compared to all alternatives, with many noting that historical anti-nuclear sentiment originated from Cold War fears and was amplified by fossil fuel interests.

---

## 2. [Claude Code refuses requests mentioning "OpenClaw"](https://twitter.com/theo/status/2049645973350363168)
**702 points** | [1305 comments](https://news.ycombinator.com/item?id=47963204)

**Article:** Developer Theo posted that Claude Code appears to have a detection mechanism that penalizes or blocks users who reference "OpenClaw" (an open-source Claude alternative) in their git commits or codebase. When a user's session encountered a commit message containing an OpenClaw-related schema identifier, their session disconnected and their usage quota instantly jumped to 100%, effectively consuming their entire monthly allocation despite minimal actual usage.

**Discussion:** Commenters criticize the detection mechanism as poorly implemented and fundamentally flawed, noting it triggers on the string regardless of context and creates an exploit where anyone could sabotage open-source projects by embedding "OpenClaw" references to disable Claude Code usage for others. The discussion reveals broader frustration with Anthropic's engineering practices and customer treatment.

---

## 3. [Where the goblins came from](https://openai.com/index/where-the-goblins-came-from/)
**644 points** | [1042 comments](https://news.ycombinator.com/item?id=47957688)

**Article:** OpenAI's article explains an unexpected behavior in their language model where it developed a persistent affinity for mentioning "goblins" when using the "Nerdy" personality setting. The issue arose from reward signals during training that inadvertently reinforced goblin references, which then bled into other personality modes. OpenAI's engineering team traced the root cause to their training data and implemented mitigations using a developer prompt.

**Discussion:** Commenters are fascinated by the phenomenon, with many drawing parallels to Warhammer 40K's tech-priests performing arcane rituals on machines they don't understand. The discussion devolves into a broader debate over whether LLMs are genuinely intelligent or merely sophisticated pattern-matching systems whose stochastic nature makes them fundamentally unreliable.

---

## 4. [Linux kernel vulnerabilities lack heads-up to distributions](https://www.openwall.com/lists/oss-security/2026/04/30/10)
**512 points** | [579 comments](https://news.ycombinator.com/item?id=47965108)

**Article:** A critical Linux kernel vulnerability (CVE-2026-31431), dubbed "CopyFail," enables local privilege escalation and has affected kernels since 2017. The key issue is that Linux distributions received no advance warning before public disclosure because the current process lacks a mandatory notification step -- unless the original reporter chooses to contact the linux-distros mailing list, vendors are left in the dark. This left older LTS kernel versions (5.10, 5.15, 6.1, 6.6, 6.12) unpatched for an extended period.

**Discussion:** Commenters debate who bears responsibility, with some arguing the kernel security team should establish formal communication channels with distributions rather than leaving it to individual reporters. A core tension emerges between open-source volunteers who feel no obligation to provide commercial-grade security coordination and those who argue Linux's critical infrastructure role demands a more formalized disclosure process.

---

## 5. [Grok 4.3](https://docs.x.ai/developers/models/grok-4.3)
**485 points** | [367 comments](https://news.ycombinator.com/item?id=47972447)

**Article:** Grok 4.3 is xAI's latest model, positioned as a fast and cost-effective AI system that excels at understanding natural tone and informal language. It features strong voice transcription accuracy and performs well in agentic coding tasks, though benchmarks suggest its reasoning capabilities are comparable to earlier GPT and Gemini releases rather than pushing the frontier. The model is available through xAI's API with support for text, images, video, voice, function calling, and web search.

**Discussion:** Commenters offer mixed opinions, with supporters praising Grok 4.3's natural conversational tone and transcription quality, while critics express concerns that Elon Musk has deliberately tuned the model to reflect his political views. The technical consensus is that it is a capable mid-tier model but not a leaderboard-topping release.

---

## 6. [Zig project's rationale for anti-AI contribution policy](https://simonwillison.net/2026/Apr/30/zig-anti-ai/)
**450 points** | [668 comments](https://news.ycombinator.com/item?id=47957294)

**Article:** The Zig project has banned LLM-assisted contributions because its code review process is designed to invest in growing trusted, long-term contributors rather than simply accepting correct code. VP Loris Cro explains this "contributor poker" philosophy: maintainers spend time reviewing PRs to bet on people who can become prolific contributors over time, a benefit that is entirely lost when the work is AI-generated.

**Discussion:** Commenters broadly support Zig's stance, arguing that LLM-generated contributions create excessive noise through low-quality, non-compiling code. However, some experienced developers push back, arguing the real issue is poor contributor discipline rather than AI tools themselves.

---

## 7. [Meta in row after workers saw smart glasses users](https://www.bbc.com/news/articles/c5y7yvgy0w6o)
**408 points** | [509 comments](https://news.ycombinator.com/item?id=47961838)

**Article:** Meta contracted an outsourcing company called Sama to have workers classify content captured from smart glasses for AI training purposes. Workers at Sama reported serious privacy violations, including exposure to intimate footage of smart glasses users, which led Meta to cancel the contract after the issue became public. The incident reflects a broader pattern of tech companies outsourcing controversial content moderation and data labeling work to low-wage workers in developing countries.

**Discussion:** Commenters criticize Meta and tech companies for outsourcing content moderation to poorly paid workers who encounter traumatic material, noting this is a recurring problem with companies like Sama. Many also debate whether smart glasses with recording capabilities are justified at all, with a significant contingent arguing the privacy and surveillance risks outweigh any legitimate uses.

---

## 8. [Uber torches 2026 AI budget on Claude Code](https://www.briefs.co/news/uber-torches-entire-2026-ai-budget-on-claude-code-in-four-months/)
**404 points** | [356 comments](https://news.ycombinator.com/item?id=47976415)

**Article:** Uber depleted its entire 2026 annual AI budget within just four months after rolling out Claude Code to its engineering team in December 2025, with monthly API costs per employee ranging from $500 to $2,000. Usage doubled by February, with 95% of engineers now using AI tools monthly and 70% of committed code originating from AI sources. The company's CTO indicated they are "back to the drawing board" on AI budgeting given the tool's unexpected value and rapid adoption.

**Discussion:** Commenters attribute the excessive token consumption to inefficient practices like maintaining bloated conversation contexts, spawning redundant agents, and lacking proper prompt engineering rather than legitimate productivity gains. They also highlight a perverse "Goodhart's Law" incentive structure where some organizations reward high token usage as a productivity metric, causing people to optimize for spending rather than results.

---

## 9. [Show HN: WhatCable, a tiny menu bar app for inspecting USB-C cables](https://github.com/darrylmorley/whatcable)
**363 points** | [123 comments](https://news.ycombinator.com/item?id=47972511)

**Article:** WhatCable is a macOS menu bar utility for Apple Silicon Macs (macOS 14+) that identifies connected USB-C cables by reading their e-marker chip data and power delivery information via IOKit. It tells you in plain English what each cable can actually do -- whether it supports Thunderbolt 4, basic charging only, or something in between -- and diagnoses why your Mac might be charging slowly.

**Discussion:** Commenters overwhelmingly praise the app's usefulness and the developer's rapid iteration on feedback, but two recurring concerns stand out: many users prefer a traditional app window over the menu bar design, and several point out the tool can only report what cables claim via their e-marker chips and cannot detect counterfeits or defective cables that misrepresent their specs.

---

## 10. [Can I disable all data collection from my vehicle?](https://rivian.com/support/article/can-i-disable-all-data-collection-from-my-vehicle)
**327 points** | [718 comments](https://news.ycombinator.com/item?id=47967786)

**Article:** Rivian's support page explains that vehicle connectivity is a core feature, and while users can disable all cellular connectivity, doing so will limit or disable critical functionality including navigation, active lane centering, and over-the-air updates that provide safety enhancements and bug fixes. For Canadian vehicles, a toggle exists in the Settings menu; for non-Canadian vehicles, users must schedule a service appointment to have the eSIM card disabled. Disabling connectivity does not cancel existing Rivian subscriptions, which must be cancelled separately.

**Discussion:** Commenters express frustration that Rivian presents a false choice between privacy and essential vehicle functionality, viewing the bundling of telemetry with safety features like OTA updates as a deliberate strategy to prevent meaningful opt-out. The broader discussion reflects concern that modern vehicles increasingly collect invasive personal data without giving owners real control.

---

## 11. [Apple accidentally left Claude.md files in Apple Support app](https://x.com/aaronp613/status/2049986504617820551)
**295 points** | [359 comments](https://news.ycombinator.com/item?id=47973378)

**Article:** A developer discovered that Apple accidentally shipped Claude.md configuration files inside the Apple Support iOS app, revealing that Apple uses Anthropic's Claude AI internally for software development. This finding corroborates earlier reporting by Mark Gurman that "Apple runs on Anthropic at this point," with the company reportedly operating custom versions of Claude on their own internal servers for tools and product development.

**Discussion:** Commenters find it notable that Apple uses Claude internally for development while partnering with Google's Gemini for consumer-facing Siri, and many express frustration that Siri remains mediocre compared to competitors like ChatGPT and Gemini despite Apple clearly having access to superior AI capabilities.

---

## 12. [Maladaptive Frugality](https://herbertlui.net/maladaptive-frugality/)
**257 points** | [207 comments](https://news.ycombinator.com/item?id=47942863)

**Article:** Herbert Lui argues that excessive frugality, often rooted in childhood values and cultural backgrounds, can become counterproductive when it prevents necessary spending and drains mental energy. He illustrates how defaulting to the cheapest option without considering consequences creates "maladaptive frugality," and advocates for mindful spending based on actual values rather than an inherited scarcity mentality. His core thesis: when frugality becomes your master rather than your servant, it traps you and limits your possibilities.

**Discussion:** Commenters share personal anecdotes of how accumulated saving habits prevent people from enjoying earned comfort, such as refusing to upgrade phones despite vision problems or avoiding purchases they can clearly afford. The overall sentiment is that while avoiding debt is wise, denying oneself reasonable purchases after decades of disciplined saving is a psychological pattern worth examining and correcting.

---

## 13. [AI uses less water than the public thinks](https://californiawaterblog.com/2026/04/26/ai-water-use-distractions-and-lessons-for-california/)
**254 points** | [280 comments](https://news.ycombinator.com/item?id=47977383)

**Article:** Jay Lund argues that public concern about AI data center water consumption in California is largely overblown, estimating AI water use at roughly 20,000 to 290,000 acre-feet annually, which represents only 0.05 to 0.7% of California's total human water consumption. He contends that rigorous data analysis, rather than speculation, should inform policy discussions about emerging technologies.

**Discussion:** Commenters overwhelmingly agree that AI's water usage is overstated relative to agriculture, golf courses, and landscape irrigation, with several noting that opposition to data centers stems more from general anti-AI sentiment than genuine environmental concern. The prevailing view is that the water argument is "intellectually dishonest" cover for other objections to AI development.

---

## 14. [Opus 4.7 knows the real Kelsey](https://www.theargumentmag.com/p/i-can-never-talk-to-an-ai-anonymously)
**245 points** | [454 comments](https://news.ycombinator.com/item?id=47951295)

**Article:** Kelsey Piper argues that advanced AI models like Claude Opus 4.7 can identify authors from remarkably small text samples -- as few as 125 words -- by detecting subtle stylistic fingerprints. She contends that online anonymity is eroding because anyone with substantial public writing can no longer communicate privately, as AI will eventually recognize their distinctive prose patterns. This capability represents what she sees as a fundamental change in how people can express themselves safely online.

**Discussion:** Commenters express both amazement and skepticism, with many successfully reproducing the author-identification results on their own writing, while others argue the model may rely on topic and prior knowledge rather than pure stylometry. There is growing concern about privacy implications, as this capability undermines longstanding assumptions about anonymous online posting.

---

## 15. [The whistleblower who uncovered the NSA's Big Brother machine](https://thereader.mitpress.mit.edu/the-whistleblower-who-uncovered-the-nsas-big-brother-machine/)
**240 points** | [677 comments](https://news.ycombinator.com/item?id=47965060)

**Article:** Mark Klein, a retired AT&T technician, visited the Electronic Frontier Foundation in 2006 with documentary evidence that the NSA had secretly installed a "splitter cabinet" in Room 641A of AT&T's San Francisco facility to intercept and copy all internet traffic passing through the network backbone. The operation enabled covert monitoring of millions of Americans' communications -- described by one expert as "not a wiretap" but "a country tap" -- and Klein's revelations became a landmark moment in the public understanding of mass surveillance.

**Discussion:** Commenters reflect on the tension between acknowledging systemic surveillance abuses and the personal cost of whistleblowing, with one noting they stayed silent due to NDAs. The broader sentiment is pessimistic about reform, with users observing that despite Klein's and Snowden's revelations spanning over two decades, surveillance has only expanded and even presidential oversight has proven ineffective.

---

## 16. [Joby kicks off NYC electric air taxi demos](https://www.flyingmag.com/joby-nyc-electric-air-taxi-jfk-airport/)
**238 points** | [89 comments](https://news.ycombinator.com/item?id=47956781)

**Article:** Joby Aviation conducted New York City's first electric air taxi flight from JFK Airport to a Manhattan heliport in approximately 15 minutes as part of the FAA's eVTOL Integration Pilot Program. The demonstration is a milestone toward integrating electric air taxis into urban transportation, with the program set to expand to 26 states with multiple manufacturers conducting similar trials.

**Discussion:** The discussion is split between supporters who highlight the quieter, cleaner electric powertrains and minimal infrastructure needs, and critics who argue the service will only benefit wealthy passengers at $200+ per trip and diverts resources from proven mass transit solutions like improved rail systems.

---

## 17. [U.S. Debt Tops 100% of GDP](https://www.wsj.com/economy/u-s-debt-tops-100-of-gdp-81c013d7)
**230 points** | [165 comments](https://news.ycombinator.com/item?id=47961804)

**Article:** The Wall Street Journal reports that U.S. federal debt has surpassed 100% of GDP, a significant fiscal milestone given that the ratio was under 80% in 2019 and under 40% in 2009, illustrating rapid acceleration. Most federal expenditure goes toward defense, entitlements, and interest on the debt, with Treasury yields roughly doubling from 2010s levels, making borrowing increasingly expensive.

**Discussion:** Commenters are deeply divided along economic-philosophy lines, debating whether high debt is indefinitely manageable through monetary policy or requires politically painful fiscal choices like spending cuts, tax increases, or accepting inflation. A recurring theme is frustration that neither political party demonstrates willingness to implement the fiscal discipline their preferred economic theory demands.

---

## 18. [Mozilla's opposition to Chrome's Prompt API](https://github.com/mozilla/standards-positions/issues/1213#issuecomment-4347988313)
**225 points** | [641 comments](https://news.ycombinator.com/item?id=47959463)

**Article:** Mozilla has formally opposed Chrome's Prompt API, a proposed web standard that would let websites access on-device language models for local text generation. Mozilla engineer Jake Archibald raised three specific objections: system prompts become tightly coupled to specific models and break across implementations, the API creates fingerprinting vulnerabilities that let websites identify which browser and model a user runs, and it raises unresolved terms-of-service issues around vendor lock-in.

**Discussion:** The HN community is divided, with supporters arguing the API offers real privacy benefits by keeping data on-device and that the web platform must evolve with emerging technology, while critics contend it will damage web interoperability, create a "second-class browser" problem for non-Chrome browsers, and force users to download multi-gigabyte models without clear consent.

---

## 19. [Spain's parliament acts against IP blockages by LaLiga](https://www.democrata.es/en/politics/congress-and-senate/congress-will-act-against-massive-ip-blockages-by-laliga/)
**223 points** | [504 comments](https://news.ycombinator.com/item?id=47964034)

**Article:** Spain's LaLiga football league obtained court orders compelling ISPs to block IP addresses associated with illegal match streams, but because many targeted IPs are shared Cloudflare addresses hosting approximately 45 million websites, the blocking caused massive collateral damage to legitimate businesses including healthcare services, ticketing systems, and other critical infrastructure. Spain's Congress is now preparing to act against these mass blockages, though the parliamentary measures are described as explicitly not legally binding. The blocking proved ineffective against piracy itself, as users simply circumvented it with VPNs.

**Discussion:** Commenters overwhelmingly criticize the IP blocking as disproportionate collateral damage that harms innocent businesses while failing to stop piracy, viewing it as a case of a private sports league gaining extraordinary power to disrupt nationwide internet access without proper democratic oversight.

---

## 20. [LinkedIn is scanning browser extensions](https://404privacy.com/blog/linkedin-is-scanning-your-browser-extensions-this-is-how-they-use-the-data/)
**211 points** | [430 comments](https://news.ycombinator.com/item?id=47967262)

**Article:** LinkedIn covertly scans users' browsers to identify installed extensions -- 6,278 total as of April 2026 -- without disclosure or consent, linking this data to verified professional identities. The extension inventory is used to make inferences about job search activity, personal beliefs, disabilities, and organizational tooling, and can be enriched with third-party behavioral datasets to enable cross-platform surveillance profiling.

**Discussion:** Commenters express strong alarm about the privacy implications, noting that extension scanning reveals sensitive personal information even about off-site behavior, and highlight that Firefox's randomized extension IDs provide superior protection compared to Chrome's permissive architecture that enables this kind of probing. Many are skeptical of LinkedIn's stated justification of blocking scrapers, calling it ineffective for that purpose while highly effective as a surveillance tool.
