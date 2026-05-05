# Hacker News Top Stories — May 5, 2026

*Top submissions from the last 24 hours on [Hacker News](https://news.ycombinator.com), sourced via [hckrnews.com](https://hckrnews.com/).*

---

## 1. [Google Chrome silently installs a 4 GB AI model on your device without consent](https://www.thatprivacyguy.com/blog/chrome-silent-nano-install/) — [1110 comments](https://news.ycombinator.com/item?id=48019219)

**Article:** Google Chrome silently installs Gemini Nano, a 4 GB AI model, on user devices without consent. The author documents this through forensic evidence, argues it violates EU privacy laws, and frames it as treating "the user's machine as a deployment surface to be optimised for the vendor's product roadmap, not a personal device."

**Discussion:** Deeply divided. Defenders call it standard software practice comparable to bundled spell-checkers, while critics say "4GB of disk space without even asking is indeed a shit move." Sysadmins worry about storage multiplication, rural users face data overage charges, and many question whether this serves browser functionality or Google's surveillance infrastructure.

---

## 2. [Zig → Rust porting guide](https://github.com/oven-sh/bun/commit/46d3bc29f270fa881dd5730ef1549e88407701a5) — [695 comments](https://news.ycombinator.com/item?id=48016880)

**Article:** A commit by Jarred Sumner adding a PORTING.md and port-batch.ts script to Bun, providing guidance for porting code from Zig to Rust (622 lines of additions).

**Discussion:** Jarred clarified this is experimental with "a very high chance all this code gets thrown out completely." Sentiment is divided between supporting experimental work and concern about large-scale rewrites post-Anthropic acquisition. A significant thread debates whether the Zig community's "no AI code" policy was a reaction to Bun or a longstanding principle.

---

## 3. [How OpenAI delivers low-latency voice AI at scale](https://openai.com/index/delivering-low-latency-voice-ai-at-scale/) — [493 comments](https://news.ycombinator.com/item?id=48013919)

**Article:** *(403 — could not fetch article)* OpenAI describes their technical architecture for delivering real-time voice AI.

**Discussion:** Mixed reactions. Some praised the WebRTC optimization engineering, but many criticized the voice AI as "dumber" than text models, struggling with premature response triggers. A notable critique: OpenAI optimized what they control (networking) rather than what matters most — model quality and voice activity detection.

---

## 4. [AI didn't delete your database, you did](https://idiallo.com/blog/ai-didnt-delete-your-database-you-did) — [477 comments](https://news.ycombinator.com/item?id=48022742)

**Article:** Argues that when an AI agent deletes a production database, blame lies with poor security practices — specifically having a public API endpoint capable of destroying the entire database. AI "is bound to make mistakes" and companies should implement proper safeguards rather than blaming tools.

**Discussion:** Tension between accountability camps. Some cite Gerald Sussman's vision of AI that can explain its reasoning; the dominant counterargument insists users bear responsibility for granting AI access to sensitive systems. Consensus: professionals should maintain oversight and implement safeguards (separate credentials, deletion protection, permission restrictions).

---

## 5. [Async Rust never left the MVP state](https://tweedegolf.nl/en/blog/237/async-rust-never-left-the-mvp-state) — [411 comments](https://news.ycombinator.com/item?id=48019163)

**Article:** Argues that async Rust generates unnecessarily bloated code, identifying specific inefficiencies like panic states after future completion, unnecessary state machines, and missed inlining. The author submitted a Project Goal and seeks €30k in funding to implement compiler optimizations.

**Discussion:** Many criticize the overstated title while acknowledging valid optimization gaps. A central debate emerges around ecosystem dependency on Tokio — some want standard library traits for executor-agnostic code, others argue fundamental executor differences make universal abstraction impractical.

---

## 6. [Train Your Own LLM from Scratch](https://github.com/angelos-p/llm-from-scratch) — [411 comments](https://news.ycombinator.com/item?id=48017948)

**Article:** A hands-on workshop teaching developers to build a working GPT language model from scratch — tokenization, transformer architecture, training loops, and text generation. Trains a ~10M parameter model on Shakespeare data within an hour on a laptop, inspired by Karpathy's nanoGPT.

**Discussion:** Enthusiastic but nuanced. Commenters recommend complementary resources (Stanford CS336, Raschka's book). Debate about whether using PyTorch qualifies as "from scratch" and whether "Large" applies to a 10M-parameter model trainable on consumer hardware.

---

## 7. [Y Combinator's Stake in OpenAI (0.6%?)](https://daringfireball.net/2026/05/y_combinators_stake_in_openai) — [368 comments](https://news.ycombinator.com/item?id=48016534)

**Article:** John Gruber argues that YC's ~$5B stake in OpenAI should have been disclosed when Paul Graham was quoted vouching for Sam Altman's trustworthiness in a New Yorker investigation, raising questions about potential bias in his public commentary.

**Discussion:** Skeptics call out the undisclosed conflict of interest; defenders note the stake was diluted through 13 funding rounds. Broader cynicism about whether "AGI" definitions have become marketing tools rather than technical milestones.

---

## 8. [.de TLD offline due to DNSSEC?](https://dnssec-analyzer.verisignlabs.com/nic.de) — [369 comments](https://news.ycombinator.com/item?id=48027897)

**Article:** DNSSEC validation analysis shows the .de domain suffered a critical failure — an RRSIG signature on an NSEC3 record failed to validate, causing validating resolvers to return SERVFAIL for all .de domains.

**Discussion:** Identified as a botched ZSK rotation during a scheduled rollover. Darkly humorous — jokes about German bureaucracy ("somebody has to fill a form to approve night work first") alongside serious concern that DNSSEC, designed to enhance security, created a single point of failure affecting millions of businesses.

---

## 9. [Accelerating Gemma 4: faster inference with multi-token prediction drafters](https://blog.google/innovation-and-ai/technology/developers-tools/multi-token-prediction-gemma-4/) — [369 comments](https://news.ycombinator.com/item?id=48024540)

**Article:** Google released Multi-Token Prediction (MTP) drafters for Gemma 4 that use speculative decoding to accelerate inference up to 3x. A lightweight drafter model predicts multiple tokens simultaneously, then verifies in parallel, addressing memory-bandwidth bottlenecks. Available open-source for HuggingFace, vLLM, and MLX.

**Discussion:** Enthusiastic, with users reporting significant speed improvements ("Gemma spends 1/10th the time"). Skeptics highlight integration challenges with tools like LM Studio, inconsistent quantization results, and whether speedup justifies added complexity.

---

## 10. [Agent Skills](https://addyosmani.com/blog/agent-skills/) — [361 comments](https://news.ycombinator.com/item?id=48015397)

**Article:** Addy Osmani introduces "Agent Skills" — reusable workflow templates that enforce senior engineering practices in AI coding agents. AI agents naturally skip essential work like specs, tests, and reviews, so these practices must be encoded as mandatory processes rather than optional guidelines.

**Discussion:** Skeptics call it "snake oil" since LLMs don't reliably follow rules; proponents report real-world productivity gains from infrastructure automation. Agreement that domain expertise and proper oversight remain essential regardless.

---

## 11. [iOS 27 is adding a 'Create a Pass' button to Apple Wallet](https://walletwallet.alen.ro/blog/ios-27-wallet-create-pass/) — [360 comments](https://news.ycombinator.com/item?id=48021561)

**Article:** Apple is introducing a "Create a Pass" feature in iOS 27 letting users build their own Wallet passes without developer accounts — scan QR codes from physical cards or build from scratch using color-coded templates. Addresses a 14-year gap where small businesses never adopted PassKit.

**Discussion:** Top complaint: difficulty distinguishing identical-looking cards from the same bank. Many note Google Wallet offered this years ago. Appreciative of the new capability but frustrated obvious improvements took over a decade.

---

## 12. [Three Inverse Laws of AI](https://susam.net/inverse-laws-of-robotics.html) — [312 comments](https://news.ycombinator.com/item?id=48023861)

**Article:** Susam Pal proposes three rules for human-AI interaction: avoid attributing human qualities to AI, verify output independently, and maintain personal accountability for AI-assisted decisions. Core argument: treat AI as a tool requiring human judgment, not an authority deserving blind trust.

**Discussion:** Top comment argues humans inevitably anthropomorphize AI, making such guidelines ineffective. Counterarguments compare it to aviation safety — recognizing human limitations is precisely why we establish frameworks. Debate over whether responsibility lies with users or AI designers.

---

## 13. [Empty Screenings – Finds AMC movie screenings with few or no tickets sold](https://walzr.com/empty-screenings) — [305 comments](https://news.ycombinator.com/item?id=48018066)

**Article:** *(403 — could not fetch article)* A tool that finds AMC movie screenings with few or no tickets sold, for those who prefer empty theaters.

**Discussion:** Overwhelmingly positive. Users share anecdotes about solo screenings and debate whether sparse or packed audiences are better by genre. Broader concerns about theater industry decline, streaming competition, and changing pricing strategies.

---

## 14. [The fun has been optimized out of the Internet](https://muddy.jprs.me/posts/2026-05-03-the-best-is-over/) — [292 comments](https://news.ycombinator.com/item?id=48022992)

**Article:** The early Internet (2000s–2010s) was creative and spontaneous because people made things for fun, not algorithms. Today's hyper-commercialized, algorithmically driven Internet has had "the fun already optimized out of it" — AI merely inherited this decline.

**Discussion:** Widespread nostalgia. Commenters attribute the decline to commercialization, surveillance capitalism, and platform monopolies rather than aging. Some argue fun activities remain possible but the Internet's role as a meeting place for niche communities has been lost.

---

## 15. [When everyone has AI and the company still learns nothing](https://www.robert-glaser.de/when-everyone-has-ai-and-the-company-still-learns-nothing/) — [279 comments](https://news.ycombinator.com/item?id=48020063)

**Article:** *(ECONNREFUSED — could not fetch article)* Enterprise AI adoption hasn't solved the real bottleneck in software delivery.

**Discussion:** "Development speed was never the bottleneck; it's all the other processes: infra provisioning, testing, sign-offs, change management, deployment scheduling." Skeptical about AI's transformative potential. Concern about knowledge hoarding — developers treat productivity gains as personal assets rather than sharing them, reflecting diminished job security.

---

## 16. [IBM didn't want Microsoft to use the Tab key to move between dialog fields](https://devblogs.microsoft.com/oldnewthing/20260505-00/?p=112298) — [254 comments](https://news.ycombinator.com/item?id=48025687)

**Article:** Raymond Chen recounts an OS/2 culture clash: IBM escalated a dispute about Tab key dialog navigation up to VP level, while Microsoft's decentralized culture resolved it with the quip "Bill Gates's mother is not interested in the TAB key."

**Discussion:** Commenters note IBM's own 3270 terminals actually used Tab for field navigation — contradicting the story's premise. Skepticism about the vague sourcing and frustration that the article never clarifies what IBM wanted instead.

---

## 17. [Kids can bypass some age checks with a drawn-on mustache](https://www.theregister.com/2026/05/04/uk_online_safety_act_age_checks_subvert/) — [236 comments](https://news.ycombinator.com/item?id=48018080)

**Article:** UK research shows 46% of children can easily bypass age verification — sometimes with drawn-on fake mustaches. Nearly half encountered harmful content online, and some parents actively help circumvent age checks.

**Discussion:** Widespread skepticism about age verification systems. Concern that weak systems are deliberately designed to justify escalating surveillance like mandatory digital IDs. Multiple commenters argue the real issue is corporate data collection disguised as child protection.

---

## 18. [Computer Use is 45x more expensive than structured APIs](https://reflex.dev/blog/computer-use-is-45x-more-expensive-than-structured-apis/) — [232 comments](https://news.ycombinator.com/item?id=48024859)

**Article:** Benchmarking AI agents on an admin panel: vision-based agents (navigating screenshots) cost ~45x more than structured API agents — 550k tokens across 53 steps vs. 12k tokens across 8 calls. "The step count is set by the interface."

**Discussion:** Broad agreement on inefficiency, with many recognizing computer use as a necessary fallback for legacy systems lacking APIs. Tension between pragmatism (worse but convenient approaches win culturally) and idealism (redesigning systems for AI compatibility).

---

## 19. [Lessons for Agentic Coding: What should we do when code is cheap?](https://www.dbreunig.com/2026/05/04/10-lessons-for-agentic-coding.html) — [220 comments](https://news.ycombinator.com/item?id=48019025)

**Article:** Ten guidelines for working with AI coding agents. Core insight: "when code is cheap," focus on learning through implementation, test behavioral contracts rather than implementation details, and direct AI toward genuinely difficult problems. The real challenges — maintenance, security, support — remain expensive.

**Discussion:** Optimists highlight productivity gains; skeptics argue coding was never the bottleneck and warn "cheap code" creates maintenance burdens. Recurring tension over whether widespread AI-generated software accumulates as innovation or technical debt.

---

## 20. [What I'm Hearing About Cognitive Debt (So Far)](https://margaretstorey.com/blog/2026/02/18/cognitive-debt-revisited/) — [214 comments](https://news.ycombinator.com/item?id=48017298)

**Article:** Cognitive debt — the gap between a system's evolving structure and a team's understanding of it — is a growing problem amplified by AI. Unlike technical debt in code, cognitive debt resides in people's minds. As AI accelerates development velocity, teams must intentionally manage shared knowledge through living documentation.

**Discussion:** *(not fetched)*

---

## 21. [Hand Drawn QR Codes (2025)](https://sethmlarson.dev/hand-drawn-qr-codes) — [198 comments](https://news.ycombinator.com/item?id=48017907)

**Article:** Seth Larson hand-drew a version 1 QR code (21x21 pixels) on grid paper encoding "HTTPS://SETHMLARSON.DEV". It remained scannable despite minor errors, demonstrating QR codes can be successfully created by hand.

**Discussion:** Mixed enthusiasm. Practical concerns about reliability and contrast dominate. Interesting discovery: uppercase URLs are more compact in QR codes because "capital letters actually contain symbols for URLs like : and /."

---

## 22. [Formatting a 25M-line codebase overnight](https://stripe.dev/blog/formatting-an-entire-25-million-line-codebase-overnight-the-rubyfmt-story) — [194 comments](https://news.ycombinator.com/item?id=48014325)

**Article:** Stripe's Developer Productivity team deployed rubyfmt, a Rust-based ultra-fast autoformatter, across their 25 million line Ruby codebase in a single night without disrupting development workflows.

**Discussion:** Appreciation for the engineering approach. Debate about incremental vs. all-at-once formatting strategies. Technical contributions about validation — e.g., comparing unformatted and formatted code character-by-character to ensure only whitespace changes.

---

## 23. [California farmers to destroy 420k peach trees following Del Monte bankruptcy](https://www.sfgate.com/centralcoast/article/usda-aid-california-farmers-22240694.php) — [189 comments](https://news.ycombinator.com/item?id=48026349)

**Article/Discussion:** *(not fetched)*

---

## 24. [EEVblog: The 555 Timer is 55 years old](https://www.youtube.com/watch?v=6JhK8iCQuqI) — [183 comments](https://news.ycombinator.com/item?id=48024129)

**Article/Discussion:** *(YouTube video — not fetched)*

---

## 25. [CVE-2026-31431: Copy Fail vs. rootless containers](https://www.dragonsreach.it/2026/05/04/cve-2026-31431-copy-fail-rootless-containers/) — [179 comments](https://news.ycombinator.com/item?id=48017813)

**Article:** Demonstrates how rootless containers prevent the CVE-2026-31431 "Copy Fail" kernel vulnerability from escaping to the host. Although the exploit achieves root inside the container through page cache corruption and shellcode execution, user namespace UID mappings ensure root is just an unprivileged `podman` user on the host.

**Discussion:** *(not fetched)*

---

## 26. [Coinbase to reduce size by ~14%](https://twitter.com/brian_armstrong/status/2051616759145185723) — [178 comments](https://news.ycombinator.com/item?id=48021368)

**Article/Discussion:** *(not fetched)*

---

## 27. [Anthropic: Agents for financial services and insurance](https://www.anthropic.com/news/finance-agents) — [172 comments](https://news.ycombinator.com/item?id=48023533)

**Article/Discussion:** *(not fetched)*

---

## 28. ['Point of no return': New Orleans relocation must start now due to sea level](https://www.theguardian.com/us-news/2026/may/04/new-orleans-sea-levels-relocation-climate-crisis) — [166 comments](https://news.ycombinator.com/item?id=48015218)

**Article/Discussion:** *(not fetched)*

---

## 29. [Two millionth electric car registered as UK market rebounds](https://www.smmt.co.uk/two-millionth-electric-car-registered-as-market-rebounds-strongly-from-tax-changes/) — [155 comments](https://news.ycombinator.com/item?id=48024364)

**Article/Discussion:** *(not fetched)*

---

## 30. [Clarification on the Notepad++ Trademark Issue](https://notepad-plus-plus.org/news/clarify-npp-trademark-infringement/) — [146 comments](https://news.ycombinator.com/item?id=48026206)

**Article/Discussion:** *(not fetched)*

---

## 31. [It's official: Utah is the U.S. state closest to banning VPNs](https://tech.yahoo.com/vpn/article/its-official-utah-is-the-us-state-closest-to-banning-vpns-153556814.html) — [146 comments](https://news.ycombinator.com/item?id=48023473)

**Article/Discussion:** *(not fetched)*

---

## 32. [GitHub Actions Incident – Resolved](https://www.githubstatus.com/incidents/1j40g94rn22j) — [141 comments](https://news.ycombinator.com/item?id=48022900)

**Article/Discussion:** *(not fetched)*

---

## 33. [Zuckerberg 'Personally Authorized and Encouraged' Meta's Copyright Infringement](https://variety.com/2026/digital/news/meta-ai-mark-zuckerberg-copyright-infringement-lawsuit-publishers-scott-turow-1236738383/) — [137 comments](https://news.ycombinator.com/item?id=48026207)

**Article/Discussion:** *(not fetched)*

---

## 34. [DHS demanded Google surrender data on a Canadian man over anti-ICE posts](https://www.wired.com/story/dhs-demanded-google-surrender-data-on-canadians-activity-location-over-anti-ice-posts/) — [125 comments](https://news.ycombinator.com/item?id=48013423)

**Article/Discussion:** *(not fetched)*

---

## 35. [Docker 29 has changed its default image store for new installs](https://docs.docker.com/engine/storage/containerd) — [115 comments](https://news.ycombinator.com/item?id=47986331)

**Article/Discussion:** *(not fetched)*

---

## 36. [The Car That Watches You Back: The Advertising Infrastructure of Modern Cars](https://nobodyaskedforthis.lol/posts/connected-car/) — [113 comments](https://news.ycombinator.com/item?id=48017251)

**Article:** Modern vehicles have transformed into advertising platforms and data collection devices. Manufacturers deploy pop-up ads on dashboards, collect detailed driving telemetry, and sell personal data to third parties — creating an infrastructure where drivers cannot opt out, unlike websites and smartphones.

**Discussion:** *(not fetched)*

---

## 37. [I'm scared about biological computing](https://kuber.studio/blog/Reflections/I%27m-Scared-About-Biological-Computing) — [111 comments](https://news.ycombinator.com/item?id=48024358)

**Article/Discussion:** *(not fetched)*

---

## 38. [Biscuit (code editor)](https://github.com/yattsu/biscuit) — [108 comments](https://news.ycombinator.com/item?id=48017641)

**Article/Discussion:** *(not fetched)*

---

## 39. [Comparing the Z80 and 6502 to Their Relatives](https://bumbershootsoft.wordpress.com/2026/05/02/comparing-the-z80-and-6502-to-their-relatives/) — [99 comments](https://news.ycombinator.com/item?id=47993240)

**Article/Discussion:** *(not fetched)*

---

## 40. [White House Considers Vetting A.I. Models Before They Are Released](https://www.nytimes.com/2026/05/04/technology/trump-ai-models.html) — [96 comments](https://news.ycombinator.com/item?id=48013608)

**Article/Discussion:** *(not fetched)*

---

*Generated on 2026-05-05. Stories ranked by comment count. Summaries were fetched for the top ~25 most-discussed stories; others are listed with links only. Entries marked "not fetched" indicate the article or comments could not be retrieved (403/connection errors).*
