# Hacker News Top Stories -- May 19, 2026

Top submissions from the last 24 hours on [Hacker News](https://news.ycombinator.com/), sourced via [hckrnews.com](https://hckrnews.com/). Sorted by points.

---

## 1. [I've joined Anthropic](https://twitter.com/karpathy/status/2056753169888334312) -- [418 comments](https://news.ycombinator.com/item?id=48194352) (1039 points)

**Article:** Andrej Karpathy announced he is joining Anthropic to lead their pre-training team, specifically focusing on using Claude to accelerate AI research itself -- extending his prior work on "auto-research" concepts. This follows stints at OpenAI, Tesla, and his independent educational/research work.

**Comments:** Commenters widely praised Karpathy as an exceptional educator and ML practitioner, citing his CS 231n course, nanoGPT, and blog posts as hugely influential. However, skeptics questioned whether his relatively short tenures at companies signal a pattern, and some suggested he may serve more as a "marketing asset" for Anthropic. Broader discussion touched on Anthropic's recent momentum with Claude Code and compute deals, alongside debate about whether frontier labs genuinely prioritize safety.

---

## 2. [The last six months in LLMs in five minutes](https://simonwillison.net/2026/May/19/5-minute-llms/) -- [547 comments](https://news.ycombinator.com/item?id=48188183) (720 points)

**Article:** Simon Willison surveys LLM developments from November 2025 to May 2026, noting the "best" LLM changed hands five times in November 2025 alone among Anthropic, OpenAI, and Google. The two biggest trends he identifies are coding agents crossing a critical reliability threshold (going from "often-work" to "mostly-work" through reinforcement learning from verifiable rewards) and open-weight models like Gemma 4, GLM-5.1, and Qwen3.6-35B dramatically exceeding performance expectations despite being runnable on consumer hardware.

**Comments:** The most heated debate was whether actual model capabilities improved or whether better "harnesses" (frameworks and tooling) around existing models created the perception of progress. Users reported wildly divergent experiences with coding agents depending on their domain -- Go and systems programming saw excellent results while CSS/web development remained frustrating. A recurring theme was the "steering vs. quality" problem: agents require significant guidance, raising questions about whether the productivity gains are real or illusory.

---

## 3. [Apple unveils new accessibility features](https://www.apple.com/newsroom/2026/05/apple-unveils-new-accessibility-features-and-updates-with-apple-intelligence/) -- [281 comments](https://news.ycombinator.com/item?id=48192224) (545 points)

**Article:** Apple announced a comprehensive suite of accessibility features powered by Apple Intelligence across iOS, iPadOS, macOS, visionOS, and tvOS. Key additions include Image Explorer and Live Recognition for VoiceOver users, natural-language Voice Control that lets users describe UI elements intuitively, an Accessibility Reader for complex multi-column layouts, auto-generated subtitles for uncaptioned video, and Apple Vision Pro power wheelchair control via eye-tracking.

**Comments:** The top comment argued Apple strategically uses accessibility features to stealth-test emerging technologies, predicting accessibility will be how agentic AI is introduced to the public. Multiple users criticized Apple's speech-to-text/dictation as severely outdated compared to alternatives like Whisper Flow. A fascinating sub-thread explored how blind users operate screen readers at seemingly superhuman speeds.

---

## 4. [I've built a virtual museum with nearly every operating system you can think of](https://virtualosmuseum.org/) -- [105 comments](https://news.ycombinator.com/item?id=48195009) (477 points)

**Article:** The Virtual OS Museum is a 20-year preservation effort comprising over 1,700 pre-configured operating systems running under emulation (QEMU, VirtualBox, or UTM). It spans computing history from 1948 (Manchester Baby) to the present, covering mainframes, minicomputers, home computers, PCs, mobile systems, and research OSes like Plan 9 and Oberon. Everything boots immediately with era-appropriate software pre-installed.

**Comments:** Commenters expressed genuine awe at the "herculean" scale of the effort. Several users debated curation choices, noting that showcasing the last version of an OS isn't always the most historically interesting. Multiple commenters identified missing systems (Novell NetWare, VMS/OpenVMS, TempleOS, Pick OS), and the 120GB download size caused practical problems, prompting requests for torrent distribution. Nostalgic responses dominated, with users sharing memories of VAX/VMS, Solaris, and SunTools.

---

## 5. [Show HN: Gaussian Splat of a Strawberry](https://superspl.at/scene/84df8849) -- [179 comments](https://news.ycombinator.com/item?id=48191602) (446 points)

**Article:** A high-fidelity 3D Gaussian Splat model of a strawberry was created using 7,920 photographs (90 perspectives with 88 focus-stacked images each), captured in approximately 20 minutes with a Nikon Z8 macro lens and a rotating rig against a blue screen. The model is publicly available under CC BY 4.0 and was trained using the slang-splat framework.

**Comments:** The community was impressed by the visual quality and meticulous capture process. Discussion ranged across potential applications (concert recordings, Google Maps integration) and current limitations -- notably the translucent appearance, the missing bottom section from mounting, and quality degradation when zooming past reconstruction boundaries. Future-focused comments explored whether Gaussian splats could eventually support real-time animation and dynamic lighting.

---

## 6. [Gemini 3.5 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/) -- [311 comments](https://news.ycombinator.com/item?id=48196570) (395 points)

**Article:** Google introduced Gemini 3.5 Flash, claiming it delivers frontier-level performance for agents and coding at speeds four times faster than other frontier models. The model is designed for complex, long-horizon agentic tasks, enabling work that previously took weeks to be completed in days. It is available across the Gemini app, Google Search, developer platforms, and enterprise solutions.

**Comments:** The dominant concern is the dramatic 3-6x price increase compared to earlier Gemini models ($1.50/$9.00 per million tokens vs. Gemini 2.5 Flash's $0.30/$2.50), with many questioning whether the capability improvements justify the markup. Users also reported technical quirks including the model's tendency to "enrich" outputs unnecessarily and API reliability issues. The knowledge cutoff of January 2025 drew criticism about outdated training data.

---

## 7. [Click (2016)](https://clickclickclick.click/) -- [93 comments](https://news.ycombinator.com/item?id=48187054) (363 points)

**Article:** Click is a browser-based interactive game/art project by Studio Moniker (2016) that demonstrates online profiling and tracking. The site presents a single button and narrates the user's every action -- clicks, mouse movements, idle time, and more -- to viscerally illustrate how websites monitor behavior. It serves as an educational and unsettling demonstration of the data that browser events can reveal about users.

**Comments:** Commenters were fascinated and entertained, with several sharing the site's reactions to their automated clicks (it detected bots and called them out). A broader discussion emerged about online tracking, privacy, and terms of service. Others drew comparisons to Universal Paperclips, while some noted the site loads 14 MB of JavaScript and uses plain HTTP for some resources.

---

## 8. [OpenBSD 7.9](https://www.openbsd.org/79.html) -- [260 comments](https://news.ycombinator.com/item?id=48192882) (354 points)

**Article:** OpenBSD 7.9, released May 19, 2026, introduces significant kernel improvements including a mechanism to manage CPU cores with different speeds and enhanced SMP capabilities. The release expands hardware support across multiple architectures, notably adding SpacemiT K1 SoC support for riscv64 and USB4 controller support. Major userland updates include LibreSSL 4.3.0 with ML-KEM768 post-quantum support, OpenSSH 10.3, and VLAN-aware bridge functionality.

**Comments:** The discussion centered on OpenBSD's security-first philosophy, with users highlighting its proactive auditing and defense-in-depth approach compared to Linux. Commenters shared real-world usage stories running it on servers, firewalls, and personal machines. A recurring FreeBSD comparison established that OpenBSD prioritizes security while FreeBSD emphasizes features and performance.

---

## 9. [CISA Admin Leaked AWS GovCloud Keys on GitHub](https://krebsonsecurity.com/2026/05/cisa-admin-leaked-aws-govcloud-keys-on-github/) -- [148 comments](https://news.ycombinator.com/item?id=48190454) (350 points)

**Article:** A contractor employed by Nightwing maintained a public GitHub repository called "Private-CISA" that exposed highly sensitive credentials including administrative AWS GovCloud keys and plaintext passwords for internal CISA systems. The repository had been public since November 2025 and was discovered by GitGuardian researcher Guillaume Valadon on May 15, 2026. After notification, the repository was taken down, but the AWS keys remained valid for an additional 48 hours.

**Comments:** Commenters characterized the incident as "gross negligence" rather than mere incompetence, with particular concern that the individual had also disabled GitHub's secret-scanning protection. The discussion split between those blaming individual incompetence and those pointing to systemic failures including CISA's recent mass layoffs that eliminated experienced security staff. Technical commenters emphasized that basic tools like password managers and AWS Secrets Manager would have prevented the exposure.

---

## 10. [Mini Shai-Hulud Strikes Again: 314 npm Packages Compromised](https://safedep.io/mini-shai-hulud-strikes-again-314-npm-packages-compromised/) -- [271 comments](https://news.ycombinator.com/item?id=48189368) (349 points)

**Article:** On May 19, 2026, a compromised npm account ("atool") published 637 malicious versions across 317 packages in a rapid 22-minute automated burst. The attack injected obfuscated Bun scripts that harvested credentials from AWS, GitHub, npm, Kubernetes, and password managers, exfiltrating data through both GitHub's API and an attacker-controlled server. Major affected packages included size-sensor (4.2M downloads/month), echarts-for-react (3.8M), and hundreds of @antv-scoped packages.

**Comments:** The discussion focused on systemic vulnerabilities in npm's ecosystem, with a strong consensus that lifecycle scripts (postinstall hooks) should be disabled by default. Commenters criticized npm's culture of micro-packages and deep dependency trees that create massive attack surface. Defensive suggestions included freezing dependency versions, using containers/VMs, disabling postinstall scripts globally, or switching to pnpm.

---

## 11. [Tesla's lithium refinery discharges 231,000 gallons of polluted wastewater a day](https://www.autonocion.com/us/tesla-lithium-refinery-texas/) -- [158 comments](https://news.ycombinator.com/item?id=48198551) (322 points)

**Article:** Tesla's $1 billion lithium refinery in Robstown, Texas has been discharging 231,000 gallons of treated wastewater daily into a drainage ditch since December 2024. A local drainage district discovered an undisclosed discharge pipe during a routine inspection and commissioned independent testing that revealed concerning contaminants, including hexavalent chromium (a known carcinogen) and elevated lithium levels -- substances not monitored under the state's original permit.

**Comments:** The debate is split between those arguing the detected pollutant levels are minimal (arsenic below drinking water standards) and critics who point to inadequate sampling methodology and missing permit specifications. A significant thread questions whether the failure to notify the relevant drainage authority suggests systemic regulatory failure. A broader undercurrent debates whether domestic lithium production, despite its environmental costs, is still preferable to outsourcing to China's more heavily polluting facilities.

---

## 12. [Peter Neumann has died](https://www.tuhs.org/pipermail/tuhs/2026-May/033748.html) -- [23 comments](https://news.ycombinator.com/item?id=48188787) (300 points)

**Article:** Peter Neumann, a prominent computer scientist known for his decades of work in computer security at SRI International, passed away on May 17, 2026, at a hospital in Santa Clara following complications from a fall and surgery. Beyond his technical contributions, Neumann was an accomplished musician who played piano, French horn, and other instruments.

**Comments:** Commenters primarily reflect on Neumann's profound impact through his 41-year stewardship of the RISKS Digest mailing list, with many describing how reading RISKS from the early internet era shaped their understanding of security, safety, and ethical computing. A key concern emerges about the digest's future sustainability. Personal tributes emphasize Neumann's generosity in mentoring and his ability to elevate technical discourse about systemic vulnerabilities.

---

## 13. [Pope Leo XIV's first encyclical "Magnifica humanitas" to be published May 25](https://www.vaticannews.va/en/pope/news/2026-05/pope-leo-xiv-first-encyclical-magnifica-humanitas.html) -- [212 comments](https://news.ycombinator.com/item?id=48187201) (285 points)

**Article:** Pope Leo XIV's first encyclical, titled "Magnifica humanitas," will focus on safeguarding the human person in the time of artificial intelligence and is scheduled for release on May 25, 2026. The encyclical draws on the Church's social doctrine tradition and addresses the intersection of technology, human dignity, and modern capitalism.

**Comments:** Many self-described atheists expressed appreciation for recent papal commentary as "sound and possibly needed advice." A major theme is the critique of treating "the economy" as an end in itself rather than a tool for human flourishing. Several threads explore philosophical questions about whether AI could possess souls or consciousness, referencing Catholic catechism, Cartesian philosophy, and Heidegger's views on technology.

---

## 14. [Who will buy your services if you fire us all?](https://carette.xyz/posts/who_will_buy_your_services/) -- [302 comments](https://news.ycombinator.com/item?id=48185789) (263 points)

**Article:** The article argues that tech billionaires' support for Universal Basic Income is not philanthropic but a form of self-preservation. As AI automation eliminates jobs, companies face a fundamental problem: an economy without salaried workers is an economy without aggregate demand. The author contends that UBI would create a closed-loop feudal system where displaced workers receive government payments only to immediately spend them on tech company services.

**Comments:** The discussion centers on whether mass AI-driven job automation would actually collapse the economy or merely redistribute wealth. Many commenters express UBI skepticism, arguing that funding it is "extremely hard." A heated historical-precedent debate unfolds: some cite the Industrial Revolution's eventual job creation, while others argue this time is fundamentally different because AI could fully replace human labor.

---

## 15. [I found ultra-pure quantum crystals in an abandoned mine in the Atacama desert](https://medium.com/@breid.at/ultra-pure-quantum-crystals-from-an-abandoned-mine-in-a-mysterious-desert-93cc87d12314) -- [100 comments](https://news.ycombinator.com/item?id=48165797) (257 points)

**Article:** Researcher Aaron Breidenbach discovered natural Herbertsmithite crystals in an abandoned mine in Chile's Atacama Desert -- the only crystal with bulk quantum properties known to grow naturally. The crystals proved exceptionally pure, with a copper-to-zinc ratio closer to the ideal 3:1 formula than even laboratory-synthesized versions. This could provide crucial evidence for the quantum spin liquid state and advance quantum computing.

**Comments:** A Chilean commenter critiques their country's low R&D investment (around 0.4% of GDP versus the 2.7% OECD average). Multiple commenters explore why Chile and Australia export raw ore rather than refining domestically, citing regulatory burdens and economies of scale. A lighter thread humorously speculates about whether the crystals could represent ancient or alien techno-signatures, referencing the "Silurian Hypothesis."

---

## 16. [Google changes its search box](https://blog.google/products-and-platforms/products/search/search-io-2026/) -- [405 comments](https://news.ycombinator.com/item?id=48197370) (238 points)

**Article:** Google is unveiling its most significant search box redesign in over 25 years, reimagining the interface with AI. The new search box dynamically expands to accommodate detailed queries, accepts multiple input types (text, images, files, videos, Chrome tabs), and offers AI-powered suggestions. It is powered by Gemini 3.5 Flash and supports conversational follow-up questions with maintained context.

**Comments:** Commenters are deeply skeptical, with major concerns around AI accuracy (one user claiming responses are "wrong about 65% of the time"), traffic destruction for content creators (one site owner reporting a 65% traffic reduction), and the systemic risk of AI training on increasingly AI-polluted web content. The discussion highlights a "prisoner's dilemma" where publishers cannot opt out of Google's crawling without becoming invisible.

---

## 17. [Show HN: Number Gacha, a gacha game distilled to its essence](https://isabisabel.com/gacha/) -- [116 comments](https://news.ycombinator.com/item?id=48123359) (233 points)

**Article:** Number Gacha is a minimalist browser game that strips the gacha genre down to its core mechanics -- the rolling/collecting loop -- without the elaborate wrapper of a full mobile game. The game speaks for itself through its interactive experience.

**Comments:** The community praised the game as clever and surprisingly addictive, noting it "strikes the delicate balance of 'I could've done this' and 'actually no.'" The most consistent criticism targeted the battle system's mouse-based controls and tight timing at higher levels. Comparisons were drawn to Universal Paperclips, and the dithered visual design received particular praise.

---

## 18. [Disney erased FiveThirtyEight](https://www.natesilver.net/p/disney-erased-fivethirtyeight) -- [119 comments](https://news.ycombinator.com/item?id=48197703) (223 points)

**Article:** Nate Silver writes that Disney, after acquiring FiveThirtyEight in 2014 via ESPN and shutting it down in March 2025, has now effectively erased the entire site archive by redirecting all old article URLs to ABC News's homepage. Silver argues this was not malice but corporate incompetence -- Disney never understood how to manage a niche media brand, rejected a paywall strategy that could have generated roughly $5 million annually, and let approximately 200,000 person-hours of work simply vanish.

**Comments:** Commenters focused on the broader pattern of large corporations destroying acquired properties. Extensive debate revisited FiveThirtyEight's 2016 election prediction (30% chance for Trump), with defenders arguing the probability was statistically sound. Several users emphasized the importance of the Internet Archive for preserving such deleted work.

---

## 19. [Polypad](https://polypad.amplify.com/) -- [23 comments](https://news.ycombinator.com/item?id=48166744) (202 points)

**Article:** Polypad is a free, browser-based virtual manipulatives platform for mathematics education that requires no login or installation. It offers interactive tools including fraction bars, 3D polyhedra, balance scales, function machines, dice, data science tools, and logic gates, supporting 20+ languages.

**Comments:** Commenters praised the tool's educational impact, with one parent noting it was "the edtech product that my son (2nd grade) has liked the most from school." Technical discussion highlighted the unusual architecture -- avoiding standard frontend frameworks in favor of a custom library combining jQuery-style DOM wrappers with Vue-like reactivity. Amplify's CTO participated in the discussion.

---

## 20. [Minnesota becomes first state to ban prediction markets](https://www.npr.org/2026/05/19/nx-s1-5821265/minnesota-ban-prediction-markets) -- [84 comments](https://news.ycombinator.com/item?id=48197980) (200 points)

**Article:** Minnesota Governor Tim Walz signed the nation's first law banning prediction market sites like Kalshi and Polymarket from operating in the state, making it a felony to host or advertise such services. The CFTC has already filed a federal lawsuit to block the law, arguing it has exclusive jurisdiction. Over 85% of Kalshi's trading activity is sports-related, blurring the line with traditional sports gambling.

**Comments:** The dominant debate centers on regulatory inconsistency -- Minnesota bans sports betting yet the distinction between prediction markets and sports gambling is murky. Commenters are divided between those viewing prediction markets as valuable information-aggregation tools and those seeing them as repackaged gambling. Notable concerns were raised about insider trading and manipulation risks.

---

## 21. [Gemini Omni](https://deepmind.google/models/gemini-omni/) -- [88 comments](https://news.ycombinator.com/item?id=48196609) (195 points)

**Article:** Gemini Omni is Google DeepMind's multimodal AI model focused on video creation and editing. It allows users to create and iteratively refine video content through natural conversation, combining multiple input types -- images, text, video, and audio -- into cohesive outputs with real-world physics and knowledge.

**Comments:** Commenters expressed mixed reactions, acknowledging technical impressiveness but highlighting limitations. A physics programmer demonstrated the model struggles with realistic rigid body dynamics. Comparisons to competing tools suggest Gemini may not represent a clear leap forward, and broader skepticism emerged about AI video generation's impact on media authenticity.

---

## 22. [Photo GIMP -- A Patch for GIMP 3 for Photoshop Users](https://github.com/Diolinux/PhotoGIMP) -- [179 comments](https://news.ycombinator.com/item?id=48167890) (188 points)

**Article:** PhotoGIMP is a free, community-driven patch that transforms GIMP's interface to feel familiar to Adobe Photoshop users. It reorganizes the layout, adds custom splash screens, optimizes canvas space, and maps keyboard shortcuts to match Adobe's official documentation.

**Comments:** The discussion was divided between supporters and skeptics who argue cosmetic changes do not address GIMP's fundamental shortcomings. Recurring themes included GIMP's tiny development team (roughly 2 core contributors), missing professional features like non-destructive editing and RAW support, and the long-standing debate over the software's name.

---

## 23. [Google I/O](https://io.google/2026/) -- [240 comments](https://news.ycombinator.com/item?id=48196020) (175 points)

**Article:** Google I/O 2026 served as a hub for keynotes and livestreams, with on-demand sessions and codelabs available after May 21. The event was dominated by AI-related announcements centered around Gemini.

**Comments:** The community was overwhelmingly critical, describing the keynote as "the most boring" and lamenting that Google has "lost track of the meaning of I/O." A central complaint was the relentless integration of AI into every product announcement, with commenters finding sessions indistinguishable. Multiple users expressed nostalgia for earlier I/O events that showcased diverse technologies.

---

## 24. [Regex Chess: A 2-ply minimax chess engine in 84,688 regular expressions](https://nicholas.carlini.com/writing/2025/regex-chess.html) -- [48 comments](https://news.ycombinator.com/item?id=48136909) (168 points)

**Article:** Regex Chess is a chess engine implemented entirely through 84,688 sequential regular expressions. It works by creating a "regex CPU" with a stack-based instruction set where the entire board state is represented as a single string. The system leverages NFA-style parallel processing to evaluate multiple board states simultaneously, enabling a 2-ply minimax search.

**Comments:** Commenters were largely delighted, calling the project "delightfully insane." Several users shared games where they easily beat the engine, noting it cannot detect checkmate-in-1 since its scoring function only considers piece value differences. A notable subthread debated the theoretical relationship between NFAs and DFAs.

---

## 25. [Peter Salus has died](https://www.tuhs.org/pipermail/tuhs/2026-May/033750.html) -- [14 comments](https://news.ycombinator.com/item?id=48188665) (167 points)

**Article:** Peter Salus, a prominent Unix historian, passed away on May 15, 2026. His book "A Quarter Century of Unix" is described as "required reading for any serious student of Unix history." Salus was instrumental in documenting the evolution and history of the Unix operating system.

**Comments:** Tributes credited Salus's Unix history book with making the AT&T to BSD to Linux throughline finally make sense. Commenters also highlighted his role as executive director of the USENIX Association and his editorship of the "Handbook of Programming Languages." One commenter recalled ending up talking more about linguistics than Unix history when meeting Salus at conferences.
