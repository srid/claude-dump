# Hacker News Top Stories - May 25, 2026

> Source: [hckrnews.com](https://hckrnews.com/) | Top submissions from the last 24 hours, ranked by points.

---

## Top Stories

### 1. [Magnifica Humanitas](https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html) — [1212 comments](https://news.ycombinator.com/item?id=48265206) (670 pts)

**Article:** Pope Leo XIV's 2026 encyclical frames humanity's relationship with AI as a choice between a "Tower of Babel" (power-driven, dehumanizing technology) and a "rebuilt Jerusalem" (collaborative, dignity-centered development). Drawing on 135 years of Catholic social teaching, it argues that technology is never neutral and reflects the values of those who create it. The document calls for safeguarding human dignity through shared responsibility, subsidiarity, solidarity, and ensuring innovation serves all people rather than concentrating power in private hands.

**Discussion:** The HN discussion centered on three tensions: whether individual builders or systemic/governmental reform bear primary responsibility for ethical technology; whether societies can meaningfully "tame" technology for the common good or only do so when convenient; and whether democratic institutions can constrain corporate technological power or are perpetually outpaced by it.

---

### 2. [Search engines alternatives now that Google isn't Google anymore](https://techcrunch.com/2026/05/21/six-search-engines-worth-trying-now-that-google-isnt-really-google-anymore/) — [518 comments](https://news.ycombinator.com/item?id=48266051) (480 pts)

**Article:** With Google overhauling Search to be "AI search through and through," the article recommends six alternatives: Kagi (ad-free, $5/month), DuckDuckGo (free, privacy-focused), Startpage (Google proxy without tracking), &udm=14 (AI-free Google results), Brave (customizable "Goggles"), and Ecosia (eco-friendly, plants trees). Each option targets different user priorities from privacy and cost to environmental impact and search customization.

**Discussion:** The most contentious debate was whether Kagi truly builds its own search index or merely aggregates results from competitors. Significant objections were raised about Kagi's use of Russian Yandex index data and the ethical implications of funding Russia. Users also debated whether paid alternatives like Kagi deliver meaningfully better results than free options.

---

### 3. [Memory has grown to nearly two-thirds of AI chip component costs](https://epoch.ai/data-insights/ai-chip-component-cost-shares) — [427 comments](https://news.ycombinator.com/item?id=48258684) (467 pts)

**Article:** High-bandwidth memory (HBM) now accounts for 63% of AI chip costs, up from 52% between Q1 2024 and Q4 2025, with absolute HBM spending surging from roughly $12 billion to $32 billion annually. Logic dies stayed flat near 13%, advanced packaging fell from 19% to 15%, and auxiliary components dropped from 15% to 9%. Memory's cost dominance is expected to intensify as supply remains tight.

**Discussion:** Commenters debated whether memory manufacturers deliberately maintain undersupply to preserve margins versus natural boom-bust cycle dynamics. A significant thread discussed China's potential role as a market disruptor, with state-backed manufacturers like CXMT potentially flooding the market with cheaper memory. The claim that supply normalization could yield a 3x hardware cost reduction without technical innovation generated debate.

---

### 4. [Migrating from Go to Rust](https://corrode.dev/learn/migration-guides/go-to-rust/) — [434 comments](https://news.ycombinator.com/item?id=48259808) (449 pts)

**Article:** This guide argues Go-to-Rust migrations make sense for backend services prioritizing correctness and reliability over development speed. Primary motivations include eliminating nil panics and data races through Rust's type system, achieving composable error handling via `Result<T, E>`, and reducing GC-induced latency variability. The author recommends incremental migration strategies such as extracting hot paths into separate services while maintaining identical API contracts.

**Discussion:** The most contentious issue was Rust's error handling fragmentation (io::Error, thiserror, anyhow) versus Go's straightforward approach. Commenters disagreed sharply on Rust's library ecosystem maturity compared to Go's battle-tested standard library. A notable emerging theme was whether LLM-assisted code generation changes the language selection calculus.

---

### 5. [The Eternal Sloptember](https://geohot.github.io//blog/jekyll/update/2026/05/24/the-eternal-sloptember.html) — [431 comments](https://news.ycombinator.com/item?id=48263238) (346 pts)

**Article:** George Hotz (geohot) argues that AI agents cannot truly program despite their statistical sophistication, producing code that appears functional but contains subtle, hard-to-detect flaws. He contends that AI adoption will harm large organizations most severely, since high-performing individuals catch flawed outputs while lower performers generate massive quantities of defective code. The post predicts a future of abundant low-quality software -- an "Eternal Sloptember" -- rather than genuine advancement.

**Discussion:** Commenters critiqued the polarized "luddite vs. AI-pilled" framing, with most acknowledging LLMs get 80-95% of the way on tasks but disagreeing on whether the remaining gap matters. A central tension emerged around whether AI-generated code creates unsustainable technical debt and prevents engineers from learning proper problem-solving.

---

### 6. [DeepSeek Reasonix, DeepSeek native coding agent with high caching and low cost](https://esengine.github.io/DeepSeek-Reasonix/) — [695 comments](https://news.ycombinator.com/item?id=48256953) (271 pts)

**Article:** DeepSeek Reasonix is a terminal-based AI coding agent built natively for the DeepSeek API. Its main selling point is optimizing prefix caching to achieve high cache hit rates during agentic coding workflows, significantly reducing costs compared to using frontier models like Claude or GPT for the same tasks.

**Discussion:** The HN discussion is skeptical about whether a specialized harness is necessary, with many commenters reporting that existing tools like OpenCode already achieve 95%+ cache hit rates with DeepSeek. Users debate the cost-vs-capability tradeoff -- DeepSeek V4 Pro is roughly 1/10th the cost of Claude Sonnet but falls short on complex tasks. Privacy concerns about sending code to Chinese servers are a recurring theme.

---

### 7. [Leave Me Behind](http://androidessence.com/leave-me-behind/) — [320 comments](https://news.ycombinator.com/item?id=48265876) (268 pts)

**Article:** A software engineer writes a reflective essay mourning AI's impact on the craft of software development. He argues that while AI tools generate working code, they erode the meaningful human experiences -- trial-and-error learning, mentorship, community engagement, and collaborative problem-solving -- that make the profession rewarding. He deliberately chooses to reject an AI-dependent future, prioritizing human connection and growth over pure efficiency.

**Discussion:** The discussion is split between developers who say AI has objectively improved their code quality through better testing and review practices, and those who see AI-generated code as "slop" that harms users. Both sides agree that outcomes depend heavily on how developers supervise and review AI output.

---

### 8. [The four-day workweek in Australia: insights from early adopters of 100:80:100](https://scienceaim.com/australia-just-proved-the-four-day-work-week-works-here-is-what-the-data-actually-says/) — [254 comments](https://news.ycombinator.com/item?id=48259990) (253 pts)

**Article:** Researchers at Deakin University tracked 15 Australian companies implementing the 100:80:100 model (100% pay, 80% hours, 100% output) between 2022-2024. Zero companies reported productivity losses -- six saw actual increases -- and 14 of 15 chose to continue permanently. The key insight is that the model works by restructuring workflows rather than simply compressing five days into four.

**Discussion:** Commenters debate the study's rigor, with critics noting the small sample of 15 self-selected companies and potential Hawthorne Effect. A significant philosophical thread questions why productivity evidence is repeatedly ignored, with some attributing resistance to corporate control. There is broad agreement that current five-day structures contain significant inefficiencies.

---

### 9. [Uber's COO says it's getting harder to justify money spent on tokenmaxxing](https://www.businessinsider.com/uber-coo-andrew-macdonald-ai-token-spending-harder-justify-2026-5) — [181 comments](https://news.ycombinator.com/item?id=48268871) (242 pts)

**Article:** Uber's COO Andrew Macdonald is questioning the ROI of heavy AI token consumption -- a practice dubbed "tokenmaxxing" -- where companies aggressively maximize LLM usage as a proxy for AI adoption and innovation, finding it increasingly difficult to justify the spending.

**Discussion:** Commenters broadly agree this is Goodhart's Law in action: when token consumption becomes a performance metric, it incentivizes waste rather than genuine productivity. Multiple users describe companies creating token leaderboards tied to performance reviews, encouraging employees to run expensive queries just to inflate numbers. The discussion also criticizes tech executive herd mentality.

---

### 10. [Greg Brockman interview [video]](https://fs.blog/knowledge-project-podcast/greg-brockman/) — [208 comments](https://news.ycombinator.com/item?id=48255593) (239 pts)

**Article:** This Knowledge Project Podcast episode features OpenAI co-founder and president Greg Brockman discussing pivotal moments at the company, including the original Napa offsite that produced their technical roadmap, the dramatic 72-hour crisis following Sam Altman's firing, why OpenAI abandoned its nonprofit structure, and his views on AI-generated code and the global AI race.

**Discussion:** The dominant thread debates OpenAI's transformation from nonprofit to for-profit, with many viewing it as a betrayal and others as legitimate business evolution. The 2023 leadership crisis draws extensive discussion, with commenters questioning why the board never publicly explained their reasoning for firing Altman.

---

### 11. [The seed oil panic is hurting my cardiac patients](https://www.statnews.com/2026/05/22/seed-oils-healthy-fats-tallow-fact-check-cardiac-health/) — [159 comments](https://news.ycombinator.com/item?id=48257532) (235 pts)

**Article:** A clinical dietitian argues that the anti-seed oil movement, fueled by influencers and recent government dietary guideline changes, is actively harming cardiac patients. The article cites a major meta-analysis showing that replacing saturated fat with polyunsaturated fat (found in seed oils) reduces cardiovascular events by 21%, and contends that the real dietary villain is ultra-processed food, not the oils themselves. It warns that beef tallow, now promoted as a healthy alternative, contains naturally occurring trans fats at levels cardiologists consider unsafe.

**Discussion:** The HN discussion largely echoes the article's skepticism, with many pointing to analyses emphasizing that better health requires overall diet quality improvements, not just swapping one fat for another. There is debate about the role of industry interests in driving the panic and concern about nutritional science becoming politicized.

---

### 12. [Why is Vivado 2026.1 dropping Linux support for free tier?](https://adaptivesupport.amd.com/s/question/0D5Pd00001YQLdMKAX/why-is-vivado-20261-dropping-linux-support-for-free-tier-?language=en_US) — [345 comments](https://news.ycombinator.com/item?id=48254309) (209 pts)

**Article:** AMD's decision with Vivado 2026.1 removes Linux support from the free/standard edition of their FPGA development tool while retaining Windows support. This effectively forces Linux users who previously had free access to either switch to Windows or purchase a paid license.

**Discussion:** The HN discussion is highly critical, with commenters arguing it alienates students, hobbyists, and developers who form the pipeline for future professional FPGA users. Many draw parallels to NVIDIA's CUDA ecosystem strategy, noting that AMD risks losing long-term market share. Several commenters suggest this will drive users toward competitors like Lattice or Intel/Altera.

---

### 13. [California moves to exempt Linux from its age-verification law after backlash](https://www.tomshardware.com/software/linux/california-moves-to-exempt-linux-from-its-upcoming-age-verification-law-after-backlash-over-forcing-operating-systems-to-collect-users-ages-amendment-proposed-by-the-same-lawmaker-who-wrote-the-original-law) — [415 comments](https://news.ycombinator.com/item?id=48269961) (201 pts)

**Article:** California is proposing an amendment (AB 1856) to exempt open-source operating systems like Linux from its Digital Age Assurance Act, which would have required all operating systems to collect user ages during setup. The backlash came from Linux developers and privacy advocates who argued the requirement was impractical for decentralized, volunteer-run projects.

**Discussion:** Comments split between pragmatists seeking technically feasible alternatives to age verification and those who fundamentally oppose any government mandate as surveillance overreach. Many commenters view the Linux exemption as evidence that the law is more about surveillance infrastructure than genuine child safety.

---

### 14. [Claude is not your architect. Stop letting it pretend](https://www.hollandtech.net/claude-is-not-your-architect/) — [265 comments](https://news.ycombinator.com/item?id=48259784) (189 pts)

**Article:** The article argues that organizations are dangerously delegating architectural decisions to AI agents like Claude, when these decisions require the kind of contextual judgment, constraint awareness, and ability to say "no" that only experienced human engineers possess. It warns that AI-generated architectures tend to be generic "best practice" solutions disconnected from actual team capabilities and production realities.

**Discussion:** The discussion centers on the idea that AI is only as effective as the person using it -- skilled engineers with strong architectural foundations can leverage LLMs productively, while inexperienced developers create flawed systems. The emerging consensus is that LLMs work best within established frameworks with proper human oversight, not as autonomous architects.

---

### 15. [Microsoft open-sources "the earliest DOS source code discovered to date"](https://arstechnica.com/gadgets/2026/04/microsoft-open-sources-the-earliest-dos-source-code-discovered-to-date/) — [504 comments](https://news.ycombinator.com/item?id=48253386) (188 pts)

**Article:** Microsoft has open-sourced what is believed to be the earliest surviving DOS source code, predating previously released versions. The source code was recovered from decades-old paper printouts that required OCR processing and manual verification.

**Discussion:** The discussion focuses on the historical significance of the release, the fascinating digital preservation challenges of recovering source code from dot-matrix paper printouts using OCR, and broader reflections on how early computing required "whole stack" comprehension that modern developers rarely develop. Several commenters also discuss how Gates' privileged social connections facilitated Microsoft's initial contract.

---

### 16. [Constraint Decay: The Fragility of LLM Agents in Back End Code Generation](https://arxiv.org/abs/2605.06445) — [277 comments](https://news.ycombinator.com/item?id=48256912) (183 pts)

**Article:** This research paper introduces the concept of "constraint decay" -- the phenomenon where LLM agent performance significantly degrades as structural requirements (coding conventions, framework patterns, architectural constraints) accumulate during backend code generation. Capable agent configurations lose approximately 30 percentage points in test pass rates as constraints pile up, with convention-heavy frameworks like FastAPI and Django suffering far more than minimal frameworks like Flask.

**Discussion:** The dominant theme is the concern that developers are "moving complexity from the formal, deterministic world of programming languages to the informal, non-deterministic world of natural language." Commenters debate whether linter rules and formal verification should replace natural language instructions, and whether long-term maintainability of LLM-generated codebases remains an unproven gamble.

---

### 17. [Scammers are abusing an internal Microsoft account to send spam links](https://techcrunch.com/2026/05/21/scammers-are-abusing-an-internal-microsoft-account-to-send-spam/) — [301 comments](https://news.ycombinator.com/item?id=48253186) (177 pts)

**Article:** Scammers have found a way to exploit Microsoft's legitimate account notification system, sending fraudulent emails from the real `msonlineservicesteam@microsoftonline.com` address -- the same one used for two-factor authentication codes and account alerts. By creating new Microsoft accounts and manipulating the automated notification system's customizable fields, attackers distribute phishing emails with deceptive subject lines.

**Discussion:** Commenters focus on Microsoft's chaotic domain management, noting the company maintains hundreds of domains making it nearly impossible for users to verify whether an email is legitimate. The discussion draws parallels to similar abuse at other major companies, framing this as a systemic industry-wide failure in email security design.

---

### 18. [Defeating Git Rigour Fatigue with Jujutsu](https://ikesau.co/blog/defeating-git-rigour-fatigue-with-jujutsu/) — [166 comments](https://news.ycombinator.com/item?id=48259861) (166 pts)

**Article:** The blog post describes "git rigour fatigue" as the difficulty of maintaining clean, well-organized commits during active feature development. The author proposes using Jujutsu (jj) to defer commit organization until the end of a work session: create an ideal commit structure first, squash all work into a single commit, then selectively redistribute changes into their intended commits.

**Discussion:** Comments reveal a clear divide between Jujutsu advocates who praise its superior ergonomics -- automatic rebasing, conflict handling, `jj undo` -- and skeptics who argue `git rebase -i` already accomplishes similar tasks. A recurring theme is that most Git users avoid rebasing entirely due to its complexity, while Jujutsu users employ equivalent operations constantly.

---

### 19. [Omarchy Is Not A Distro](https://abyss.fish/your_dotfiles_are_not_a_distro) — [178 comments](https://news.ycombinator.com/item?id=48257612) (164 pts)

**Article:** The author argues that Omarchy, marketed as a Linux distribution by DHH, is fundamentally just Arch Linux paired with one person's heavily customized dotfiles rather than a genuine distribution. The article criticizes Omarchy for bundling preconfigured keybindings that open proprietary services (Grok, Hey.com, X/Twitter), including commercial software, and defaulting to display settings fewer than 2% of monitors support.

**Discussion:** Defenders argue Omarchy fills a genuine niche by making tiling window managers accessible to newcomers. Critics counter that it is essentially an influencer product -- "the Linux version of Mr. Beast lunchables" -- with a conference, sponsors, and merchandise for what amounts to 500 lines of bash scripting.

---

### 20. [Launch HN: Chert (YC P26) -- Twilio for iMessage](https://www.trychert.com) — [42 comments](https://news.ycombinator.com/item?id=48267829) (162 pts)

**Article:** Chert is a Y Combinator-backed startup providing an API that enables businesses to send and receive messages through Apple's iMessage protocol, delivering "real iMessage" with blue bubbles, read receipts, and native features. The service automatically falls back to SMS for non-iMessage users and targets go-to-market teams for customer support and outbound sales.

**Discussion:** The dominant concern is whether Apple will shut Chert down, with commenters citing Apple's Terms of Service and referencing Apple's aggressive takedown of Beeper Mini as precedent. A secondary debate centers on whether the service creates genuine value or simply enables spam through deceptive "blue bubble" messaging.

---

### 21. ['AI washing': firms are scrambling to rebrand themselves as tech-focused](https://www.theguardian.com/technology/2026/may/24/ai-washing-pr-firms-scrambling-rebrand) — [177 comments](https://news.ycombinator.com/item?id=48257980) (160 pts)

**Article:** The article covers the growing trend of companies rebranding themselves as AI-focused to attract investors and customers, even when their core products have little to do with artificial intelligence -- a phenomenon dubbed "AI washing."

**Discussion:** Commenters draw strong parallels to past tech hype cycles (blockchain, crypto, the dot-com era). A notable thread highlights that younger consumers are actively repelled by AI branding, creating an ironic tension where marketing AI to shareholders may alienate the very customers companies want to attract.

---

### 22. [I love my Bluetooth keyboard](https://liquidbrain.net/blog/i-love-my-bluetooth-keyboard/) — [148 comments](https://news.ycombinator.com/item?id=48240025) (150 pts)

**Article:** The author enthusiastically describes using a Bluetooth keyboard paired with their phone, highlighting three main benefits: faster and more comfortable texting, a distraction-free typewriter-like writing experience on a small screen, and the ability to navigate the entire phone via keyboard shortcuts using the "Full Keyboard Access" accessibility setting.

**Discussion:** Commenters dive into extensive recommendations for specific Bluetooth keyboard models. A significant thread explores whether phones with external peripherals can truly replace laptops, with Android users noting better support for keyboards and mice compared to iOS.

---

### 23. [Didgeridoo playing as alternative treatment for obstructive sleep apnoea (2006)](https://pmc.ncbi.nlm.nih.gov/articles/PMC1360393/) — [296 comments](https://news.ycombinator.com/item?id=48243666) (147 pts)

**Article:** This 2006 randomized controlled trial found that regular didgeridoo playing over four months showed significant improvements for moderate obstructive sleep apnea: reduced daytime sleepiness (3.0 units on the Epworth scale), lower apnea-hypopnea index scores, and substantially less disturbance reported by sleep partners.

**Discussion:** Commenters debate whether the therapeutic benefit comes specifically from circular breathing or from general strengthening of upper airway muscles. Study quality concerns are raised -- the small sample size (n=25), lack of a true placebo group, and reliance on self-reporting. Plenty of humor targets the practical absurdity.

---

### 24. [Jira Is Turing-Complete](https://seriot.ch/computation/jira.html) — [288 comments](https://news.ycombinator.com/item?id=48263253) (140 pts)

**Article:** The article demonstrates that Atlassian's Jira is computationally Turing-complete by implementing a Minsky register machine using Jira's built-in automation features. The author proves the concept with a practical addition program (2+3=5) and a more complex Fibonacci sequence generator.

**Discussion:** The comments are dominated by humorous and exasperated takes on Jira itself, with top comments like "Jira is completely awful and thus has the potential to take on any other form of awfulness." A more substantive thread debates whether Jira's complexity is inherent or the result of organizations piling on customizations.

---

### 25. [Building Pi with Pi](https://lucumr.pocoo.org/2026/5/24/pi-oss/) — [170 comments](https://news.ycombinator.com/item?id=48259192) (140 pts)

**Article:** Armin Ronacher (creator of Flask) reflects on the challenges of AI agents contributing to Pi, an open-source project. He highlights three major problems: AI-generated issue reports with confident but inaccurate diagnoses, over-engineered code submissions that add unnecessary complexity, and an overwhelming volume of low-quality spam submissions (only 8% of auto-closed PRs ultimately merged).

**Discussion:** Discussion centers on the practical friction AI agents cause for maintainers by producing localized fixes rather than maintaining system-wide consistency. Philosophical questions emerge about machine agency and whether anthropomorphizing AI systems is helpful or harmful.

---

### 26. [Microsoft pulls plug on plans for 244-acre data center in Caledonia (2025)](https://www.tmj4.com/news/racine-county/microsoft-pulls-plug-on-plans-for-244-acre-data-center-in-caledonia-after-community-pushback) — [155 comments](https://news.ycombinator.com/item?id=48266422) (140 pts)

**Article:** Microsoft withdrew its proposal for a 244-acre data center in Caledonia, Wisconsin, after significant community pushback. More than 2,000 residents signed a petition opposing the rezoning required for the project. Microsoft stated it remains interested in finding an alternative location in Southeast Wisconsin.

**Discussion:** The discussion centered on how discretionary land-use permitting processes disproportionately favor large corporations; the tension between NIMBYism and broader public good, with data centers offering tax revenue but few permanent jobs; and whether 244 acres was excessive given the minimal employment such facilities provide.

---

### 27. [Rising seas will swallow New Orleans. People need to start relocating now](https://www.cnn.com/2026/05/25/climate/new-orleans-sea-level-rise-relocation) — [123 comments](https://news.ycombinator.com/item?id=48265049) (139 pts)

**Article:** According to a paper published in Nature Sustainability, coastal Louisiana faces 10 to 23 feet of sea level rise, which could see New Orleans surrounded by the Gulf of Mexico before the end of this century. Roughly 75% of remaining wetlands are set to be lost and the shoreline may retreat 62 miles inland.

**Discussion:** Commenters emphasized that land subsidence (New Orleans sinks approximately 8mm/year) is actually a bigger factor than global sea level rise (~3.2mm/year). Discussion also focused on the class dimensions of relocation -- that anyone who could afford to leave has already done so, and massive federal investment would be needed for remaining low-income residents.

---

### 28. [Air France and Airbus found guilty of manslaughter over 2009 plane crash](https://www.bbc.com/news/articles/czd2qmdvmq6o) — [134 comments](https://news.ycombinator.com/item?id=48250980) (128 pts)

**Article:** After years of legal proceedings, a French court found both Air France and Airbus guilty of involuntary manslaughter for Flight 447 which crashed into the Atlantic on June 1, 2009, killing all 228 people on board. The crash was caused by iced-over pitot tubes providing erroneous airspeed readings and inadequate pilot response to the resulting high-altitude stall, reversing an earlier acquittal.

**Discussion:** The discussion revolved around shared responsibility, with commenters noting there had been other near-accidents due to the exact same problem. A major thread examined how Airbus's fly-by-wire design and Air France's inadequate training created dangerous conditions. Commenters debated whether corporate convictions with modest fines constitute meaningful accountability for 228 deaths.

---

### 29. [CBP Directive 3340-049B: Border Search of Electronic Devices](https://www.cbp.gov/document/directives/cbp-directive-no-3340-049b-border-search-electronic-devices) — [169 comments](https://news.ycombinator.com/item?id=48260140) (123 pts)

**Article:** This CBP directive establishes standard operating procedures for searching, reviewing, retaining, and sharing information contained in electronic devices (computers, phones, tablets, cameras, etc.) during border crossings. The directive allows officers to request passcodes and search device contents, while nominally including certain procedural safeguards and limitations.

**Discussion:** The key debate was whether citizens can legally refuse to unlock devices -- commenters noted that while CBP cannot deny a US citizen entry, they can confiscate devices. Non-citizens face far worse consequences, as refusal can result in visa denial and entry refusal. Several commenters shared practical strategies like powering down devices before crossing borders.

---

### 30. [Artificial egg hatched 26 healthy chickens](https://www.nationalgeographic.com/science/article/artificial-egg-colossal-chickens-moa-dodo) — [89 comments](https://news.ycombinator.com/item?id=48219158) (119 pts)

**Article:** Colossal Biosciences successfully hatched 26 healthy chickens using a synthetic eggshell system that features a silicone-based membrane inside a hexagonal cup. The technology allows oxygen to pass through while retaining moisture, mimicking the function of a natural eggshell. This represents a step toward the company's larger goal of resurrecting extinct bird species such as the giant moa and the dodo.

**Discussion:** Commenters pointed out that shell-less chick incubation is not entirely new, referencing a Japanese high school science project that achieved similar results. A literary thread emerged around parallels to "Brave New World." Others discussed whether hatching chickens translates to successfully reviving extinct species.

---

## More Stories

| # | Title | Comments | Pts |
|---|-------|----------|-----|
| 31 | [A fundamental principle of aeronautical engineering has been overturned](https://www.wired.com/story/a-fundamental-principle-of-aeronautical-engineering-has-been-overturned/) | [225](https://news.ycombinator.com/item?id=48260117) | 117 |
| 32 | [C constructs that still don't work in C++](https://lospino.so/blog/c-constructs-that-still-dont-work-in-cpp/) | [115](https://news.ycombinator.com/item?id=48228608) | 111 |
| 33 | [Show HN: Audiomass -- a free, open-source multitrack audio editor for the web](https://audiomass.co/?multitrack=1) | [497](https://news.ycombinator.com/item?id=48258015) | 110 |
| 34 | [I spent 50 hours drawing a line graph](https://www.dougmacdowell.com/50-hours-to-draw-some-lines.html) | [649](https://news.ycombinator.com/item?id=48223997) | 99 |
| 35 | ['Fuck you, Bambu': How one private message could change the face of 3D printing](https://www.theverge.com/tech/931532/bambu-agpl-pawel-jarczak-open-source-threat-dmca-github) | [113](https://news.ycombinator.com/item?id=48254345) | 95 |
| 36 | [2026 HIPAA Security Rule Update](https://medcurity.com/hipaa-security-rule-2026-update/) | [90](https://news.ycombinator.com/item?id=48266895) | 88 |
| 37 | [Amazon Web Services -- Four Years and Out](https://www.adventuresinoss.com/aws-four-years/) | [319](https://news.ycombinator.com/item?id=48254475) | 135 |
| 38 | [I manage teams without a single call](https://orchidfiles.com/build-without-calls/) | [61](https://news.ycombinator.com/item?id=48265869) | 84 |
| 39 | [I keep bouncing off the Scheme language](https://www.sicpers.info/2026/05/i-keep-bouncing-off-the-scheme-language/) | [152](https://news.ycombinator.com/item?id=48233398) | 84 |
| 40 | [Anthropic Cofounder Chris Olah's Remarks on Pope Leo XIV's "Magnifica Humanitas"](https://www.anthropic.com/news/chris-olah-pope-leo-encyclical) | [62](https://news.ycombinator.com/item?id=48270497) | 81 |
| 41 | [FreeBSD Foundation executive director tries daily driving FreeBSD on laptop](https://www.phoronix.com/news/FreeBSD-On-Laptop-Driver) | [93](https://news.ycombinator.com/item?id=48258736) | 73 |
| 42 | [Build Adafruit projects right from Firefox](https://www.firefox.com/en-US/landing/adafruit/) | [180](https://news.ycombinator.com/item?id=48231547) | 72 |
| 43 | [Why Do We Sleep Under Blankets, Even on the Hottest Nights? (2017)](https://www.atlasobscura.com/articles/blankets-summer-hot) | [65](https://news.ycombinator.com/item?id=48263711) | 71 |
| 44 | [When (if ever) it's appropriate to make jokes before the US Supreme Court](https://www.scotusblog.com/2026/05/when-if-ever-its-appropriate-to-make-jokes-take-selfies-or-curse-before-the-court/) | [65](https://news.ycombinator.com/item?id=48258236) | 71 |
| 45 | [GPT Guesses Between 1 and 100](https://github.com/exmergo/research-chatgpt-guesses-between-1-and-100) | [82](https://news.ycombinator.com/item?id=48265745) | 66 |
| 46 | [Ferrari Luce -- Designed with Jony Ive](https://www.ferrari.com/en-EN/auto/ferrari-luce) | [32](https://news.ycombinator.com/item?id=48271629) | 66 |
| 47 | [Pope Leo: opaque AI run by few firms risks "New Forms of Dehumanization"](https://variety.com/2026/biz/global/pope-leo-ai-encyclical-algorithms-threaten-dehumanisation-1236758186/) | [162](https://news.ycombinator.com/item?id=48266435) | 2 |
| 48 | [Pope Leo XIV says AI must serve humanity, not the powerful few](https://religionnews.com/2026/05/25/in-his-first-encyclical-pope-leo-xiv-says-ai-must-serve-humanity-not-the-powerful-few/) | [331](https://news.ycombinator.com/item?id=48266485) | 66 |
| 49 | [Netherlands Seizes 800 Servers, Arrests 2 for Aiding Cyberattacks](https://krebsonsecurity.com/2026/05/netherlands-seizes-800-servers-arrests-2-for-aiding-cyberattacks/) | [241](https://news.ycombinator.com/item?id=48266906) | 66 |
| 50 | [Gnutella: A Protocol Outliving the World That Created It](https://rickcarlino.com/notes/p2p/gnutella-explanation.html) | [177](https://news.ycombinator.com/item?id=48231247) | 62 |
| 51 | [Converting an Integer to a Decimal String in Under Two Nanoseconds](https://onlinelibrary.wiley.com/doi/10.1002/spe.70079) | [118](https://news.ycombinator.com/item?id=48194857) | 62 |
| 52 | [Usborne 1980s Computer Books](https://usborne.com/us/books/computer-and-coding-books) | [182](https://news.ycombinator.com/item?id=48258194) | 61 |
| 53 | [Selling SaaS in Germany](https://embedworkflow.com/blog/selling-saas-in-germany-austria-and-switzerland-dach/) | [71](https://news.ycombinator.com/item?id=48236940) | 27 |
| 54 | [The bootstrapper's EU stack for under EUR10 per month](https://eualternative.eu/guides/bootstrapper-free-tier-eu-stack/) | [157](https://news.ycombinator.com/item?id=48270111) | 56 |
| 55 | [Ruby for Good](https://ti.to/codeforgood/rubyforgood) | [145](https://news.ycombinator.com/item?id=48258254) | 54 |
| 56 | [Bug 1950764: Work Around Crash on Intel Raptor Lake CPU](https://phabricator.services.mozilla.com/D301917) | [165](https://news.ycombinator.com/item?id=48242546) | 53 |
| 57 | [ICE Awards $25M Iris-Scanning Contract to Bi2 Technologies](https://www.projectsaltbox.com/p/ice-awards-25-million-iris-scanning) | [171](https://news.ycombinator.com/item?id=48252720) | 53 |
| 58 | [The Coming Layoffs and the Revenge of the Measurers](https://www.hackyexperiments.com/blog/the-revenge-of-the-measurers) | [42](https://news.ycombinator.com/item?id=48269457) | 53 |
| 59 | [Bytecode VMs in surprising places (2024)](https://dubroy.com/blog/bytecode-vms-in-surprising-places/) | [133](https://news.ycombinator.com/item?id=48236122) | 52 |
| 60 | [IBM Spins Off the First Pure-Play Quantum Chip Foundry](https://futurumgroup.com/insights/2-billion-chips-act-investment-in-quantum-bets-on-ibms-300mm-superconducting-silicon/) | [128](https://news.ycombinator.com/item?id=48265056) | 50 |
| 61 | [The Cost of Safetyism](https://stevemagness.substack.com/p/the-cost-of-safetyism) | [57](https://news.ycombinator.com/item?id=48267290) | 49 |
| 62 | [Alaska's oil revival sparks a new energy rush Into the Arctic](https://fortune.com/2026/05/24/alaska-oil-revival-energy-investment-arctic-drilling-national-petroleum-reserve-npra/) | [44](https://news.ycombinator.com/item?id=48269971) | 49 |
| 63 | [Norway's 2 petabytes of Huawei flash storage and LLM training](https://www.blocksandfiles.com/flash/2026/05/22/norways-2-petabytes-of-huawei-flash-storage-and-llm-training/5244910) | [77](https://news.ycombinator.com/item?id=48270770) | 48 |
| 64 | [C extensions, portability, and alternative compilers](https://lemon.rip/w/6-c-extensions-compilers/) | [120](https://news.ycombinator.com/item?id=48267126) | 44 |
| 65 | [White Rabbit -- sub-nanosecond synchronization for large distributed systems](https://ohwr.org/projects/white-rabbit/) | [182](https://news.ycombinator.com/item?id=48245916) | 44 |
| 66 | [Japan's New Hypersonic Engine Could Make 2-Hour Flights to the US a Reality](https://www.bgr.com/2178211/japan-hypersonic-engine-ramjet-2-hour-flights-to-us/) | [56](https://news.ycombinator.com/item?id=48270812) | 42 |
| 67 | [API proposed by Chrome: Declarative partial updates](https://developer.chrome.com/blog/declarative-partial-updates) | [53](https://news.ycombinator.com/item?id=48252957) | 41 |
| 68 | [Perceptual Image Codec: What Matters in Practical Learned Image Compression](https://apple.github.io/ml-pico/) | [125](https://news.ycombinator.com/item?id=48256565) | 41 |
| 69 | [Schlitz Is Gone, but First It's Getting One Last Hurrah](https://www.milwaukeemag.com/schlitz-is-gone/) | [53](https://news.ycombinator.com/item?id=48227864) | 39 |
| 70 | [Mastering Dyalog APL](https://mastering.dyalog.com/README.html) | [155](https://news.ycombinator.com/item?id=48256475) | 38 |
| 71 | [Noroboto: Lying Fonts and Mitigation in Rust](https://tritium.legal/blog/noroboto) | [84](https://news.ycombinator.com/item?id=48236791) | 36 |
| 72 | [No Juniors Today, No Seniors in 2031](https://www.fbritoferreira.com/blog/no-juniors-today-no-seniors-in-2031/) | [21](https://news.ycombinator.com/item?id=48258187) | 34 |
| 73 | [Wake up! 16b](https://hellmood.111mb.de/wake_up_16b_writeup.html) | [428](https://news.ycombinator.com/item?id=48253060) | 34 |
| 74 | [Alexander Grothendieck Revolutionized 20th-Century Mathematics](https://www.quantamagazine.org/how-alexander-grothendieck-revolutionized-20th-century-mathematics-20260520/) | [147](https://news.ycombinator.com/item?id=48254020) | 32 |
| 75 | [Exit IP VPN servers mitigation rollout](https://mullvad.net/en/help/exit-ip-vpn-servers-mitigation-rollout) | [202](https://news.ycombinator.com/item?id=48269580) | 32 |
| 76 | [Getting an old Computer online with Android Ethernet tethering](https://82mhz.net/posts/2026/05/getting-an-old-computer-online-with-android-ethernet-tethering/) | [66](https://news.ycombinator.com/item?id=48226697) | 31 |
| 77 | [Microsoft's 6502 BASIC is now Open Source (2025)](https://opensource.microsoft.com/blog/2025/09/03/microsoft-open-source-historic-6502-basic/) | [90](https://news.ycombinator.com/item?id=48257058) | 29 |
| 78 | [The C64 Dead Test Font](https://www.masswerk.at/nowgobang/2026/c64-dead-test-font) | [145](https://news.ycombinator.com/item?id=48254236) | 29 |
| 79 | [Toshifumi Suzuki, founder of Seven-Eleven Japan, has died](https://www.referenceforbusiness.com/biography/S-Z/Suzuki-Toshifumi-1932.html) | [59](https://news.ycombinator.com/item?id=48268609) | 28 |
| 80 | [The political polarization of health outcomes in the USA](https://www.nature.com/articles/s41562-026-02474-9) | [50](https://news.ycombinator.com/item?id=48260331) | 28 |
| 81 | [Key, in sight -- A guide, of sorts, to keyboard customization](https://aresluna.org/key-in-sight/) | [43](https://news.ycombinator.com/item?id=48202129) | 28 |
| 82 | [He Lost It at the Movies](https://www.theideasletter.org/essay/he-lost-it-at-the-movies/) | [30](https://news.ycombinator.com/item?id=48218210) | 26 |
| 83 | [Neoclassical C++: segmented iterators revisited](https://boostedcpp.net/2026/05/18/neoclassical-c-segmented-iterators-revisited-1/) | [44](https://news.ycombinator.com/item?id=48236057) | 24 |
| 84 | [Curly braces: An evolution of Unix and C](https://thalia.dev/blog/unix-braces/) | [66](https://news.ycombinator.com/item?id=48211418) | 23 |
| 85 | [Show HN: Twixt -- transform one word into another in four moves](https://twixt.games/) | [20](https://news.ycombinator.com/item?id=48221568) | 23 |
| 86 | [you_can::turn_off_the_borrow_checker](https://docs.rs/you-can/latest/you_can/attr.turn_off_the_borrow_checker.html) | [51](https://news.ycombinator.com/item?id=48241239) | 22 |
| 87 | [The C++ Standard Library Has Been Walking Itself Back for Fifteen Years](https://hftuniversity.com/post/the-c-standard-library-has-been-walking-itself-back-for-fifteen-years-and-the-receipts-are-public) | [28](https://news.ycombinator.com/item?id=48254401) | 20 |
| 88 | [Silk: Open-source cooperative fiber scheduler](https://github.com/ClickHouse/silk) | [118](https://news.ycombinator.com/item?id=48210937) | 20 |
| 89 | [AI errno(2) values](https://www.netmeister.org/blog/ai-errno.html) | [112](https://news.ycombinator.com/item?id=48236816) | 18 |
| 90 | [Companies Are Just a Graph of Algorithms](https://danielmiessler.com/blog/companies-graph-of-algorithms) | [29](https://news.ycombinator.com/item?id=48263284) | 18 |
| 91 | [The physicists who convinced Fermilab to send Brazil's emails](https://buttondown.com/blog/brazil-fermilab-email) | [46](https://news.ycombinator.com/item?id=48219373) | 17 |
| 92 | [Justice Department scrubs its website of news releases about Jan. 6 defendants](https://apnews.com/article/justice-department-capitol-riot-news-releases-purged-29c580044a9ed27b643c99feac9e2964) | [126](https://news.ycombinator.com/item?id=48253182) | 17 |
| 93 | [Why Physical Reality Is a Collective Construction](https://mimetra.com/blog/consciousness-fusion/) | [10](https://news.ycombinator.com/item?id=48260302) | 16 |
| 94 | [Show HN: Geomatic -- A command-driven geometry studio enabled with autodiff](https://www.tinyvolt.com/geomatic) | [62](https://news.ycombinator.com/item?id=48264635) | 14 |
| 95 | [LAN-LOK: The Antarctic DOS Sabotage Game Lost for 34 Years](https://alphapixeldev.com/lan-lok-the-antarctic-dos-sabotage-game-lost-for-34-years-part-1/) | [67](https://news.ycombinator.com/item?id=48216146) | 14 |
| 96 | [Using HTTP/2 Cleartext for a server in Go 1.24](https://www.clarityboss.com/blog/go-http2-cleartext-h2c-cloud-run) | [104](https://news.ycombinator.com/item?id=48195698) | 13 |
| 97 | [Book Review: On the Calculation of Volume](https://www.stephendiehl.com/posts/calculation_of_volume/) | [52](https://news.ycombinator.com/item?id=48223154) | 13 |
| 98 | [Childhood Computing](https://susam.net/childhood-computing.html) | [239](https://news.ycombinator.com/item?id=48256597) | 118 |
| 99 | [If you let AI do your writing, I will come to your house and kill you](https://samkriss.substack.com/p/if-you-let-ai-do-your-writing-i-will) | [33](https://news.ycombinator.com/item?id=48264290) | 12 |
| 100 | [Show HN: Git-based front-end interface for Hugo](https://github.com/arashthr/hugo-flow) | [32](https://news.ycombinator.com/item?id=48214766) | 12 |
| 101 | [Buildcraft Is a Compiler Problem](https://mitander.xyz/posts/buildcraft-is-a-compiler-problem/) | [25](https://news.ycombinator.com/item?id=48233829) | 12 |
| 102 | [Ask HN: Why didn't the C64 come with Simons' BASIC in the box from 1983 onward?](https://news.ycombinator.com/item?id=48260307) | [14](https://news.ycombinator.com/item?id=48260307) | 11 |
| 103 | [1k-year-old dingo bones show that it was injured, cared for, and ritually buried](https://www.popsci.com/environment/dingo-bones-ritual-burial-australia/) | [48](https://news.ycombinator.com/item?id=48200071) | 10 |
| 104 | [Yoti age checks share facial photos and device fingerprints with third parties](https://techxplore.com/news/2026-05-online-age-pointless-privacy.html) | [41](https://news.ycombinator.com/item?id=48271327) | 9 |
| 105 | [Google facing court for retaliation against Gaza whistleblower](https://www.foxglove.org.uk/2026/05/20/google-court-retaliation-gaza-whistleblower/) | [28](https://news.ycombinator.com/item?id=48269437) | 9 |
| 106 | [San Francisco immigration court shuts down after purge of judges](https://apnews.com/article/san-francisco-immigration-court-closed-asylum-8a0946a7cd4bcc9bd925d075cabef44a) | [40](https://news.ycombinator.com/item?id=48261543) | 9 |
| 107 | [Revised^7 Report on Scheme, Large: Procedural Fascicle Draft is now public](https://r7rs.org/large/fascicles/proc/) | [33](https://news.ycombinator.com/item?id=48213554) | 7 |
| 108 | [The Worlds Left to Conquer](https://ludic.mataroa.blog/blog/the-worlds-left-to-conquer/) | [29](https://news.ycombinator.com/item?id=48256192) | 6 |
| 109 | [Show HN: Write your BPF programs in Go, not C](https://github.com/boratanrikulu/gobee) | [15](https://news.ycombinator.com/item?id=48225338) | 6 |
| 110 | [CPPL: A Circuit Prompt Programming Language](https://arxiv.org/abs/2605.17892) | [22](https://news.ycombinator.com/item?id=48221122) | 6 |
| 111 | [Gorilla: A fast, scalable, in-memory time series database (2016)](https://blog.acolyer.org/2016/05/03/gorilla-a-fast-scalable-in-memory-time-series-database/) | [24](https://news.ycombinator.com/item?id=48213750) | 6 |
| 112 | [Don't know where your data is from? Bayesian modeling for unknown coordinates](https://christopherkrapu.com/blog/2026/dont-know-where-your-data-is-from/) | [50](https://news.ycombinator.com/item?id=48259158) | 2 |
| 113 | [Notes about reading messages with the Python email packages](https://utcc.utoronto.ca/~cks/space/blog/python/EmailPackagesNotes) | [50](https://news.ycombinator.com/item?id=48204632) | 5 |
| 114 | [When does learning from data work (math starting from basic probability)](https://prateekchandrajha.github.io/vc-rademacher.html) | [16](https://news.ycombinator.com/item?id=48252859) | 5 |
| 115 | [2009 Aftonbladet Israel Controversy](https://en.wikipedia.org/wiki/2009_Aftonbladet_Israel_controversy) | [22](https://news.ycombinator.com/item?id=48259848) | 5 |
| 116 | [Limerick](https://www.worldwidewords.org/surprise.html) | [12](https://news.ycombinator.com/item?id=48254684) | 5 |
| 117 | [$100 CPU Shootout: Comparing the Ryzen 5 5500, Core i3-14100F, & Core i3-12100F](https://www.tomshardware.com/pc-components/cpus/100-budget-cpu-shootout-ddr4) | [12](https://news.ycombinator.com/item?id=48259608) | 4 |
| 118 | [Your Old Devices Depend on Dying Sensors. The Silicon Labs Incident Proves It](https://www.cambridge.org/engage/coe/article-details/6a054b304770e67d92e8c7a2) | [15](https://news.ycombinator.com/item?id=48247831) | 4 |
| 119 | [Predicting the 2026 Bristol Bay and Kodiak Salmon Runs](https://www.salmonfinder.com/2026/05/13/bristol-bay-kodiak-predictions-2026) | [13](https://news.ycombinator.com/item?id=48234793) | 4 |
| 120 | [Everyone Against Us (2023)](https://www.chicagomag.com/chicago-magazine/april-2023/everyone-against-us/) | [37](https://news.ycombinator.com/item?id=48212461) | 3 |
| 121 | [Jensen-Shannon Divergence](https://en.wikipedia.org/wiki/Jensen%E2%80%93Shannon_divergence) | [35](https://news.ycombinator.com/item?id=48240356) | 3 |
| 122 | [The day my ping took countermeasures](https://blog.cloudflare.com/the-day-my-ping-took-countermeasures/) | [30](https://news.ycombinator.com/item?id=48253602) | 3 |
| 123 | [DeepSeek to Make Permanent 75% Discount on Flagship AI Model](https://www.bloomberg.com/news/articles/2026-05-23/deepseek-to-make-permanent-75-discount-on-flagship-ai-model) | [209](https://news.ycombinator.com/item?id=48257410) | 2 |
| 124 | [Jen Can Never Leave](https://www.darthealth.com/blog/jen-can-never-leave) | [7](https://news.ycombinator.com/item?id=48228800) | 2 |
| 125 | [Ferrari Luce, Maranello's first ever electric car](https://www.topgear.com/car-news/electric/its-finally-here-meet-ferrari-luce-maranellos-first-ever-fully-electric-car) | [6](https://news.ycombinator.com/item?id=48271933) | 2 |
| 126 | [NeuralNote](https://github.com/DamRsn/NeuralNote) | [40](https://news.ycombinator.com/item?id=48250198) | 2 |
| 127 | [Swap tables, flash-friendly swap, swap_ops, and more](https://lwn.net/SubscriberLink/1072657/394b87abd7cc215e/) | [88](https://news.ycombinator.com/item?id=48208233) | 2 |
| 128 | [All Lean Books and Where to Find Them](https://lakesare.brick.do/all-lean-books-and-where-to-find-them-x2nYwjM3AwBQ) | [31](https://news.ycombinator.com/item?id=48255501) | 2 |
| 129 | [CBP updated its electronic device search directive in Jan 2026](https://www.mayerbrown.com/en/insights/publications/2026/04/traveling-abroad-your-phone-may-be-the-first-checkpoint) | [14](https://news.ycombinator.com/item?id=48259485) | 2 |
| 130 | [Understanding WebAuthn credential protection policy](https://pilcrowonpaper.com/blog/16) | [7](https://news.ycombinator.com/item?id=48259849) | 1 |
| 131 | [The Security of Ephemeral Pages](https://schalkneethling.com/posts/the-security-of-ephemeral-pages/) | [9](https://news.ycombinator.com/item?id=48209803) | 1 |
| 132 | [The analog computer museum's online library](https://www.analogmuseum.org/english/library.html) | [20](https://news.ycombinator.com/item?id=48244547) | 0 |
| 133 | [A Photographer in Canada Found a Toad with Eyes in Its Mouth](https://www.thetravel.com/photo-of-toad-with-eyes-in-mouth-found-in-canada/) | [5](https://news.ycombinator.com/item?id=48266944) | 0 |
| 134 | [Score by Collisions, Patch by Panic](https://blog.himanshuanand.com/2026/05/score-by-collisions-patch-by-panic/) | [5](https://news.ycombinator.com/item?id=48206587) | 0 |
| 135 | [Meshtastic em Portugal: a rede construida pelas pessoas](https://tech.neural-rage.com/artigos/meshtastic-em-portugal-a-rede-construida-pelas-pessoas/) | [5](https://news.ycombinator.com/item?id=48253089) | 0 |
| 136 | [Childhood Computing](https://susam.net/childhood-computing.html) | [239](https://news.ycombinator.com/item?id=48256597) | 118 |
| 137 | [Microsoft open-sources "the earliest DOS source code discovered to date"](https://arstechnica.com/gadgets/2026/04/microsoft-open-sources-the-earliest-dos-source-code-discovered-to-date/) | [504](https://news.ycombinator.com/item?id=48253386) | 188 |
