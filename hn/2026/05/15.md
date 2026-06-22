# Hacker News Top Stories — May 15, 2026

## 1. [Project Gutenberg – keeps getting better](https://www.gutenberg.org/) ([152 comments](https://news.ycombinator.com/item?id=48150431))
**578 points**

> **Article:** Project Gutenberg is the long-running volunteer effort to digitize and archive public domain literary works, offering tens of thousands of free ebooks. *(Note: site returned HTTP 503 at time of fetch.)*
>
> **Discussion:** The HN discussion reflects widespread appreciation for recent site improvements, especially better mobile responsiveness and accessibility. Commenters raised concerns about bot traffic affecting server performance, requested better version history and transparency for text corrections, and praised complementary services like Standard Ebooks. There was also discussion of format improvements (PDFs, illustration quality) and the tension between corporate publishers profiting from public domain works versus supporting the nonprofit's mission.

---

## 2. [We are retiring our bug bounty program](https://turso.tech/blog/the-wonders-of-ai) ([264 comments](https://news.ycombinator.com/item?id=48148391))
**340 points**

> **Article:** Turso has shut down its $1,000 bug bounty program for data corruption issues after being overwhelmed by low-quality, AI-generated submissions. While the program initially attracted skilled contributors who found genuine bugs, it became a magnet for "slop makers" who flooded maintainers with nonsensical PRs. Rather than build expensive gatekeeping systems, Turso concluded that any open financial incentive is incompatible with the current AI-spam environment.
>
> **Discussion:** Commenters broadly agreed that AI-generated spam is now a real operational burden for open-source maintainers, with one observation that "the bottleneck isn't writing code — it's reading and understanding code." Proposed mitigations included nominal submission fees to filter low-effort contributions. A secondary thread debated the broader systemic impact of AI on code quality, code review power dynamics, and the tension between rapid feature development and long-term maintainability.

---

## 3. [Bun Rust rewrite: "codebase fails basic miri checks, allows for UB in safe rust"](https://github.com/oven-sh/bun/issues/30719) ([236 comments](https://news.ycombinator.com/item?id=48150900))
**329 points**

> **Article:** A GitHub issue reports that Bun's Rust rewrite codebase contains undefined behavior (UB) vulnerabilities that fail basic Miri (Rust's memory safety checker) checks — including a specific case where unsafe code creates a dangling reference to deallocated memory within what should be safe Rust. The reporter argues the team is relying too heavily on AI-generated code and recommends hiring experienced Rust developers instead.
>
> **Discussion:** The HN thread split into three camps: critics arguing that merging ~1 million lines of AI-generated code into main before thorough review is reckless; defenders saying this is an expected intermediate step in porting unsafe C code (analogous to c2rust's mechanical-translation-first approach); and a broader contingent worried that AI-generated "slop" is replacing human understanding, making future maintenance dependent on feeding the code back to AI for fixes rather than developers actually understanding it.

---

## 4. [Mitchellh – I strongly believe there are entire companies now under AI psychosis](https://twitter.com/mitchellh/status/2055380239711457578) ([105 comments](https://news.ycombinator.com/item?id=48153379))
**300 points**

> **Article:** Mitchell Hashimoto argued that some companies have gone beyond using AI as a tool and are instead blindly outsourcing decision-making and thinking to AI systems entirely — a state he termed "AI psychosis." *(Note: X.com requires authentication to access tweet content; summary reconstructed from discussion.)*
>
> **Discussion:** The HN discussion resonated strongly with Mitchell's core concern about companies delegating thinking to AI rather than using it instrumentally. A second theme was engineering quality vs. speed — critics worried that "it's fine to ship bugs because agents will fix them" ignores fundamental software principles, while defenders argued agents already outperform average developers at bug-fixing. Commenters also noted a game-theory trap: VC funding so heavily favors AI-heavy companies that non-AI startups face structural disadvantages, making mass (and sometimes uncritical) AI adoption nearly inevitable.

---

## 5. [A 0-click exploit chain for the Pixel 10](https://projectzero.google/2026/05/pixel-10-exploit.html) ([128 comments](https://news.ycombinator.com/item?id=48148460))
**297 points**

> **Article:** Project Zero researchers discovered a critical vulnerability in the Pixel 10's VPU (video processing unit) driver that allows attackers to map arbitrary physical memory into userspace via a flawed mmap handler. Chaining this with a previously patched Dolby vulnerability, they demonstrated a complete zero-click exploit chain achieving root access with no user interaction, ultimately leading to faster patching timelines and renewed calls for improved driver security practices.
>
> **Discussion:** Commenters focused on three concerns: AI-powered features (automatic media decoding, message previews) expanding the zero-click attack surface by processing untrusted content before any user interaction; systemic Android weaknesses like slow patching cycles and insufficient kernel hardening; and broader design philosophy questions about whether devices should ever auto-process untrusted content. Frustration was also expressed that responsible disclosure feels ineffective when patches remain undeployed across millions of devices for extended periods.

---

## 6. [Amazon workers under pressure to up their AI usage are making up tasks](https://www.fastcompany.com/91541586/amazon-workers-pressured-to-up-ai-use-extraneous-tasks) ([316 comments](https://news.ycombinator.com/item?id=48148337))
**292 points**

> **Article:** Amazon workers are being pressured to increase their AI tool usage metrics, leading many to fabricate tasks or use AI for trivial work just to meet quotas. *(Note: Fast Company returned HTTP 403; summary based on discussion context.)*
>
> **Discussion:** Commenters are broadly skeptical of corporate AI adoption metrics, arguing that companies are measuring AI success by token consumption rather than actual productivity. Users compare the situation to Soviet-era quota systems and earlier failed metrics like lines-of-code counts, noting that perverse incentives push employees to burn tokens on make-work tasks or generate low-quality code while management celebrates usage as "AI transformation." The consensus is that "all of big tech has simultaneously gone insane" by conflating tool consumption with meaningful output.

---

## 7. [U.S. DOJ demands Apple and Google unmask over 100k users of car-tinkering app](https://macdailynews.com/2026/05/15/u-s-doj-demands-apple-and-google-unmask-over-100000-users-of-popular-car-tinkering-app-in-emissions-crackdown/) ([183 comments](https://news.ycombinator.com/item?id=48151383))
**287 points**

> **Article:** The U.S. DOJ issued subpoenas to Apple, Google, Amazon, and Walmart demanding data on over 100,000 users of the EZ Lynk Auto Agent app, alleging it enables circumvention of vehicle emissions controls in violation of the Clean Air Act. EZ Lynk and privacy advocates contend the request is overly broad and raises Fourth Amendment concerns, as most users may use the app for legitimate vehicle diagnostics.
>
> **Discussion:** The HN discussion splits between two camps: critics who see the subpoena as dangerous privacy overreach that targets all users of a generic OBD diagnostic tool rather than specific violators, and those who argue the government has a legitimate need to establish the app's primary purpose for its legal case. A recurring worry across both sides is whether this sets a precedent that expands mass surveillance authority well beyond environmental enforcement.

---

## 8. [Bitwarden scrubs 'Always free' and 'Inclusion' values from its site](https://www.fastcompany.com/91542655/bitwarden-scrubs-always-free-and-inclusion-values-from-its-website-as-longtime-execs-step-down) ([110 comments](https://news.ycombinator.com/item?id=48147637))
**190 points**

> **Article:** Bitwarden has removed "Always free" and inclusion-related values from its website, coinciding with leadership changes and new executive hires with M&A backgrounds. *(Note: Fast Company returned HTTP 403; summary based on discussion context.)*
>
> **Discussion:** Commenters are deeply concerned that Bitwarden is being positioned for a private equity acquisition, pointing to the new CEO's M&A background, recent price increases, and the removal of "Always free" and DEI language as warning signs. Many users express frustration about the enshittification trajectory and are actively evaluating alternatives such as Vaultwarden (self-hosted), KeePass, and Proton Pass. There is some debate over whether a genuinely free tier was ever financially sustainable given the company's VC funding history.

---

## 9. [Trade Dollars with other startups. Book it as revenue](https://www.revswap.ai/) ([139 comments](https://news.ycombinator.com/item?id=48148084))
**171 points**

> **Article:** RevSwap is a platform enabling startups to trade services with each other and book the exchanges as revenue. *(Note: site returned HTTP 503 at time of fetch.)*
>
> **Discussion:** Commenters largely read RevSwap as a parody site satirizing real practices in tech — particularly circular revenue arrangements among AI startups that inflate reported figures. The thread features extensive debate over the actual legality of barter deals, with disagreements about tax obligations, fair market valuation requirements, and fraud thresholds; one commenter summed up the nuance as: "The part that makes it not fraud is that both parties do actually do the work."

---

## 10. ["Too dangerous to release" or just too expensive?](https://kingy.ai/ai/too-dangerous-to-release-or-just-too-expensive-the-real-reason-anthropic-is-hiding-its-most-powerful-ai/) ([170 comments](https://news.ycombinator.com/item?id=48147945))
**145 points**

> **Article:** The article examines Anthropic's restricted release of Claude Mythos Preview via the gated Glasswing program, weighing two explanations: genuine safety concerns about the model's zero-day vulnerability capabilities versus infrastructure cost constraints. The author finds evidence that compute scarcity also plays a meaningful role, estimating the restriction is roughly 70–85% safety-driven and 15–30% cost-driven.
>
> **Discussion:** Many commenters are skeptical of the "too dangerous" framing and several flag the article itself as likely AI-generated. Substantive debate focuses on whether infrastructure costs or genuine safety concerns are the real driver, with the curl maintainer's reported assessment cited as evidence against the safety narrative. Several commenters draw parallels to OpenAI's GPT-2 "too dangerous" marketing playbook from 2019 and speculate that Anthropic needs to manage capacity carefully ahead of a potential IPO.

---

## 11. [ABC News has taken all FiveThirtyEight articles offline](https://twitter.com/baseballot/status/2055309076209492208) ([71 comments](https://news.ycombinator.com/item?id=48152553))
**143 points**

> **Article:** ABC News has taken all FiveThirtyEight articles offline, effectively wiping the site's editorial archive. *(Note: X.com requires authentication; summary based on discussion context.)*
>
> **Discussion:** Commenters criticize ABC for what they see as petty corporate behavior — specifically, refusing to sell the IP back to founder Nate Silver after he criticized management, even at the cost of shareholder value. There is widespread nostalgia for FiveThirtyEight's quality data journalism and visualizations, and several users urged archiving the remaining GitHub repositories before those disappear as well. The thread views this as emblematic of large corporations mismanaging acquired media assets.

---

## 12. [California bill would require patches or refunds when online games shut down](https://arstechnica.com/gaming/2026/05/bill-to-keep-online-games-playable-clears-key-hurdle-in-california/) ([73 comments](https://news.ycombinator.com/item?id=48152994))
**141 points**

> **Article:** A California bill would require game publishers to either patch online games to remain playable offline or offer refunds when they shut down servers, and it has cleared a key legislative hurdle. *(Note: Ars Technica blocked from WebFetch; summary based on discussion context.)*
>
> **Discussion:** The discussion centers on practical preservation mechanisms — open-sourcing server code, releasing server binaries, or providing offline patches — with commenters framing it as basic consumer protection. Skeptics worry about burdens on small studios or publishers geo-fencing California, though defenders argue companies should plan for compliance upfront. A notable sub-thread addresses the real complexity: many games use third-party middleware whose licenses prevent open-source redistribution.

---

## 13. [The old world of tech is dying and the new cannot be born](https://www.baldurbjarnason.com/2026/the-old-world-of-tech-is-dying/) ([132 comments](https://news.ycombinator.com/item?id=48147793))
**135 points**

> **Article:** The author argues that US global hegemony — which underpinned the modern tech industry's strategy of capturing and controlling entire markets — is rapidly collapsing, particularly following the Iran crisis and disruption of global energy markets. The foundational assumption of unchallenged American power that let tech companies pursue industry-wide control no longer holds, leaving the sector without a viable playbook. The title paraphrases Gramsci.
>
> **Discussion:** The discussion splits between optimists who believe AI demand will sustain American tech dominance and skeptics who argue current revenue is largely VC money recycling rather than real productivity gains. Chinese open-source models are cited as evidence against American exceptionalism, with commenters noting competitive AI parity achieved at far lower capital expenditure. A recurring concern is whether the industry's institutional structures are capable of genuine innovation or are merely perpetuating control.

---

## 14. [ASCII by Jason Scott](https://ascii.textfiles.com/) ([21 comments](https://news.ycombinator.com/item?id=48148726))
**134 points**

> **Article:** Jason Scott's long-running blog documenting ASCII art, vintage computing culture, and digital preservation efforts. *(Note: site returned HTTP 503 at time of fetch.)*
>
> **Discussion:** Commenters express widespread admiration for Jason Scott's decade-long dedication to digitizing and preserving rare materials — over 13,000 manuals, vintage tapes, and obscure media — through the Internet Archive. Several share personal encounters with Scott and praise his prolific output and accessibility. A practical thread highlights how these digitized resources are directly useful to retrocomputing hobbyists and vintage equipment repair communities.

---

## 15. [Power Tools Got Worse on Purpose. Who Owns DeWalt, Craftsman, and Milwaukee?](https://www.worseonpurpose.com/p/your-power-tools-got-worse-on-purpose) ([120 comments](https://news.ycombinator.com/item?id=48147665))
**127 points**

> **Article:** The article contrasts two acquisition strategies in the power tool industry: Techtronic Industries (TTI) acquired Milwaukee and invested heavily, preserving brand independence and resulting in strong 11.6% growth. Stanley Black & Decker (SBD) acquired Craftsman, Porter-Cable, and others then slashed costs, closed facilities, and eliminated thousands of jobs, culminating in a 50% stock decline. The piece argues SBD's extractive approach deliberately degraded product quality while TTI's stewardship demonstrates a viable alternative.
>
> **Discussion:** Many commenters flag the article itself as AI-generated engagement bait, yet substantive debate follows on whether market segmentation into cheap DIY and professional-grade tools represents legitimate competition or enshittification. A strong counter-narrative points to genuine improvements in cordless and battery technology that have democratized tool access. Makita and Festool are cited as independent brands maintaining quality by avoiding private equity acquisition.

---

## 16. [Palantir has hired more than 30 senior UK Government officials](https://www.thenational.scot/news/26055524.palantir-hired-30-senior-uk-government-officials/) ([9 comments](https://news.ycombinator.com/item?id=48153183))
**121 points**

> **Article:** Palantir has hired more than 30 senior UK government officials, raising concerns about revolving-door dynamics in defense procurement. *(Note: The National Scotland blocked the request.)*
>
> **Discussion:** Commenters are deeply skeptical of Palantir's hiring practices, framing them as a textbook "revolving door" between the British civil service and private defense contractors — a pattern critics say has driven decades of wasteful government consultancy spending. Palantir's defense that many hires are military veterans deserving career opportunities was widely dismissed as a rhetorical dodge that doesn't address concerns about conflicts of interest.

---

## 17. [Waymo updates 3,800 robotaxis after they 'drive into standing water'](https://www.cnbc.com/2026/05/12/waymo-recalls-3800-robotaxis-after-able-drive-into-standing-water.html) ([111 comments](https://news.ycombinator.com/item?id=48151767))
**118 points**

> **Article:** Waymo issued a recall/update for 3,800 robotaxis after discovering they could drive into standing water hazards. *(Note: CNBC returned HTTP 403.)*
>
> **Discussion:** The discussion split between two threads: technical approaches to preventing vehicles from entering flooded roads (better sensors, lidar comparisons, cautious defaults) with some noting humans make the same mistake, and a terminology debate where several users argued calling an OTA software fix a "recall" is alarmist and that regulators should distinguish software updates from physical recalls requiring dealer visits.

---

## 18. [Meta to receive $3.3B in tax breaks for its $10B Louisiana data center](https://fortune.com/2026/05/14/meta-data-center-tax-break-hyperion-louisiana/) ([96 comments](https://news.ycombinator.com/item?id=48152825))
**117 points**

> **Article:** Meta's $10 billion "Hyperion" data center in Louisiana will receive $3.3 billion in tax breaks — more than seven years' worth of the state's police budget — including a 20-year exemption from state and local sales taxes on equipment. Critics argue the subsidies represent a race to the bottom among at least 36 states offering billions in incentives to attract data centers, despite the facilities creating few permanent jobs.
>
> **Discussion:** Commenters were broadly critical, characterizing the deal as corporate welfare and a "race to the bottom" driven by interstate tax competition. A key point of contention was whether tax breaks actually attract investment that wouldn't have happened anyway, alongside concerns that data centers impose environmental and infrastructure costs while creating very few permanent local jobs. Several commenters also flagged the deal's lack of transparency as a democratic accountability problem.

---

## 19. [The Zulip Foundation](https://blog.zulip.com/2026/05/15/announcing-zulip-foundation/) ([34 comments](https://news.ycombinator.com/item?id=48152168))
**109 points**

> **Article:** Zulip founder Tim Abbott is departing to join Anthropic, and in conjunction with his exit, Zulip is being restructured as an independent nonprofit — the Zulip Foundation — which will own the commercial entity Kandra Labs. The foundation's mission is to develop the best possible team chat experience with a particular focus on public-interest organizations, and 12 professional maintainers will continue development.
>
> **Discussion:** The announcement generated mixed reactions around Tim Abbott's move to Anthropic. Supporters praised his open-source contributions and noted the project and codebase remain intact, while skeptics questioned his stated altruistic motivations. The thread also touched on broader tensions around developer compensation, the sustainability of open-source projects, and the pattern of AI companies absorbing talented engineering leaders.

---

## 20. [WinCE64 – Windows CE 2.11 for N64](https://github.com/ThroatyMumbo/WinCE64) ([29 comments](https://news.ycombinator.com/item?id=48152729))
**101 points**

> **Article:** WinCE64 runs an unmodified Microsoft Windows CE 2.11 kernel on real Nintendo 64 hardware by implementing a custom hardware abstraction layer. The project includes custom drivers for the display, input (controller and mouse), SD card filesystem, and audio, allowing users to launch third-party CE applications from an EverDrive-64 X7 cartridge.
>
> **Discussion:** Commenters broadly praised the technical achievement while critiquing the lack of screenshots in the project documentation. A notable thread explored whether the project was AI-assisted, with observations that hobby projects are judged differently than production rewrites. The discussion also touched on nostalgia for Windows CE and a perceived resurgence of retro OS-porting projects.

---

## 21. [Image-blaster: Creates 3D environments, SFX, and meshes from a single image](https://github.com/neilsonnn/image-blaster) ([20 comments](https://news.ycombinator.com/item?id=48150069))
**98 points**

> **Article:** Image-Blaster is a Claude-based skillset that converts a single image into complete 3D environments, textured meshes, Gaussian splats, and sound effects in under five minutes. It leverages World Labs' Marble model for environment creation, FAL's Hunyuan 3D for object modeling, and ElevenLabs for audio generation. The resulting assets can be integrated into game engines, design software, or web applications.
>
> **Discussion:** Commenters were enthusiastic about the rapid advancement of image-to-3D technology, drawing comparisons to earlier tools like Microsoft's PhotoSynth. Key concerns included hallucination artifacts in generated environments and the cost of API-based workflows. Several users noted the surprising lack of widespread industry adoption despite the tool's impressive capabilities.

---

## 22. [Show HN: Watch a neural net learn to play Snake](https://ppo.gradexp.xyz/) ([22 comments](https://news.ycombinator.com/item?id=48136981))
**98 points**

> **Article:** This interactive web app allows in-browser training of a reinforcement learning agent using Proximal Policy Optimization (PPO) to play Snake. Users can launch training sessions, monitor real-time metrics, watch the trained agent play, and configure multiple experimental runs — all directly in the browser with no setup required. Made possible by tinygrad's TinyJit to WebGPU kernels.
>
> **Discussion:** Commenters praised the project's novelty and approachability but flagged significant stability issues — several noted the network eventually "collapses" or gets trapped in negative-scoring loops around 3,600–4,000 points. The creator acknowledged the training process is intentionally "optimized for speed over stability," with weights appearing to explode over time.

---

## 23. [The sigmoids won't save you](https://www.astralcodexten.com/p/the-sigmoids-wont-save-you) ([126 comments](https://news.ycombinator.com/item?id=48147021))
**90 points**

> **Article:** Scott Alexander argues that the common rebuttal "all exponentials eventually become sigmoids" does not invalidate concerns about AI reaching dangerous capability levels, because trends routinely remain exponential far longer than forecasters predict. He supports this with historical examples from birthrate and solar deployment forecasts and applies Lindy's Law, suggesting AI progress should be expected to continue for roughly as long as it already has — about seven more years.
>
> **Discussion:** The discussion broadly accepted that growth curves plateau but split sharply on timing and implications. A dominant theme was the "stacked sigmoids" idea — that each plateau is followed by a new breakthrough, producing apparent exponential growth. Critics felt the article offered little practical insight, characterizing its core argument as "you can't prove it won't continue," while supporters appreciated the probabilistic reasoning framework.

---

## 24. [We don't know why Malawi is poor](https://newsletter.deenamousa.com/p/we-dont-know-why-malawi-is-poor) ([106 comments](https://news.ycombinator.com/item?id=48150971))
**89 points**

> **Article:** The article argues that standard development explanations — geography, institutions, colonial history, trade policy — fail to fully account for Malawi's unusual depth of poverty relative to peer nations. The author contends that political settlements organized around smallholder maize farmers as the median voter have entrenched untouchable fertilizer subsidies and self-sufficiency policies, trapping Malawi in a low-growth equilibrium.
>
> **Discussion:** Commenters identified several factors including political capture of agricultural subsidies, inadequate foreign aid relative to Rwanda, infrastructure deficiencies, and population-to-resource imbalances. A Malawian software engineer offered insider perspective on literacy gaps, infrastructure weakness, and untapped local talent. The overall tone reflected frustration with circular explanations that describe poverty rather than explain it.

---

## 25. [Cursing the government does not fix potholes. Spray-painting them does](https://imagenotfound.writeas.com/the-holes-we-painted-and-why-we-did-it-anyway) ([112 comments](https://news.ycombinator.com/item?id=48147988))
**89 points**

> **Article:** The article describes how spray-painting potholes compelled municipal authorities to make repairs that had long been ignored, demonstrating that ordinary people can drive infrastructure change through creative activism. The authors frame this as "ARTivism" — using creative visibility to force systemic action without waiting for permission or resources.
>
> **Discussion:** The comments revealed a deep ideological divide between those blaming systemic underfunding and those pointing to government mismanagement. Commenters shared practical examples of spray-painting potholes successfully prompting action in the UK, Romania, and the US, noting that public shaming through media attention is often the key mechanism. The overall sentiment was mixed pragmatism and resignation.

---

## 26. [Check Your Fucking Sources, People](https://brodzinski.com/2026/05/check-fcking-sources.html) ([64 comments](https://news.ycombinator.com/item?id=48148797))
**76 points**

> **Article:** Pawel Brodzinski critiques the widespread problem of AI-generated misinformation and unchecked sources in online content. He illustrates this with examples like fabricated statistics about code review defect detection rates — hallucinated by LLMs and spread through daisy-chained citations. He argues that writers and readers must verify sources themselves, warning that professional credibility, once lost by spreading false information, cannot be rebuilt.
>
> **Discussion:** *(Error: HN comments page returned HTTP 429 Too Many Requests.)*

---

## 27. [AI is wiping out entry-level jobs](https://fortune.com/2026/05/15/ai-entry-level-jobs-higher-education-experience-gap/) ([39 comments](https://news.ycombinator.com/item?id=48148440))
**76 points**

> **Article:** AI is eliminating traditional entry-level jobs that once served as on-ramps for new workers, while internship opportunities are also declining, creating a widening experience gap. The author argues colleges must embed experiential learning into curricula, forge stronger employer partnerships, and measure success by workforce readiness rather than degree completion.
>
> **Discussion:** Three themes dominate: a debate over whether education should prioritize economic outcomes vs. developing well-rounded citizens; skepticism that management decisions — not AI itself — are driving job losses; and systemic concern that eliminating entry-level roles mirrors the post-2008 damage done to millennials, risking long-term wage suppression and a deepened affordability crisis.

---

## 28. [Judge Bars Kars4Kids from Broadcasting 'Misleading' Ads in California](https://www.nytimes.com/2026/05/15/us/kars4kids-advertising-banned-california.html) ([39 comments](https://news.ycombinator.com/item?id=48152777))
**75 points**

> **Article:** A judge has barred Kars4Kids from broadcasting misleading advertisements in California. *(Note: NYTimes blocked from WebFetch.)*
>
> **Discussion:** The HN discussion centers on two concerns: deceptive marketing and the organization's religious affiliation. Many commenters argue the catchy, child-sung jingle creates false expectations that donations benefit local underprivileged kids, when funds primarily go to programs like Israel trips for Jewish teenagers. Others debate whether highlighting the religious angle is necessary context or inflammatory, but broadly agree that transparency about where donations actually go should be standard practice.

---

## 29. [OpenAI is connecting ChatGPT to bank accounts via Plaid](https://firethering.com/chatgpt-bank-account-plaid-openai/) ([109 comments](https://news.ycombinator.com/item?id=48150723))
**68 points**

> **Article:** OpenAI has introduced a feature for ChatGPT Pro subscribers ($200/month) allowing them to connect bank accounts via Plaid, giving the AI read-only access to balances, transaction history, investments, and debts. Users can disconnect at any time and cannot make account changes through the integration, but the article raises significant concerns about OpenAI's long-term use of sensitive financial data given the company's profitability pressures.
>
> **Discussion:** *(Error: HN comments page returned HTTP 403 Forbidden.)*

---

## 30. [I love Linux, but I can't quit Windows](https://jpain.io/i-love-linux-but-i-cant-quit-windows/) ([83 comments](https://news.ycombinator.com/item?id=48150414))
**48 points**

> **Article:** The author describes a genuine affection for Linux ideologically, but recounts how unpredictable Linux problems — frozen update tools, unexplained slowdowns — consume entire afternoons, while Windows issues tend to be familiar and quickly resolved. Despite Microsoft increasingly bloating Windows with unwanted features, the author concludes that a reliably functioning computer matters more than aspirational tool choices.
>
> **Discussion:** *(Error: HN comments page returned HTTP 403 Forbidden.)*

---

*Generated on May 15, 2026. Some articles and comment pages could not be fetched due to paywalls, rate limiting, or authentication requirements — these are noted inline.*
