# Hacker News Top Stories - May 12, 2026

Top 25 submissions from the last 24 hours on [Hacker News](https://news.ycombinator.com/), ranked by points. Sourced from [hckrnews.com](https://hckrnews.com/).

---

## 1. [If AI Writes Your Code, Why Use Python?](https://medium.com/@NMitchem/if-ai-writes-your-code-why-use-python-bf8c4ba1a055)
**892 points** | [841 comments](https://news.ycombinator.com/item?id=48100433)

**Article:** The article argues that AI's growing ability to write complex code has upended traditional language selection criteria. Since AI handles the difficulty of systems languages like Rust and Go while delivering superior runtime performance, the old justification for Python -- that it is fast to write even if slow to run -- no longer holds. The author points to strong type systems and compiler feedback loops as giving AI a "self-correction" advantage in these languages.

**Discussion:** Commenters are divided between those who argue Python's extreme readability and massive training dataset still make it ideal for AI-generated code, and those who contend that statically-typed languages like Rust and Go provide better guardrails for AI output. A key tension is that Python's flexibility enables quick prototyping but creates maintainability challenges when LLMs generate inconsistent code without human architectural guidance. Several commenters emphasize that strict type systems and compiler feedback loops help LLMs self-correct more effectively than Python's runtime-only verification.

---

## 2. [Googlebook](https://googlebook.google/)
**736 points** | [460 comments](https://news.ycombinator.com/item?id=48111545)

**Article:** Googlebook is a new laptop category built around Gemini AI, launching in fall 2026, with features like "Magic Pointer" (selecting on-screen content to query Gemini) and "Create My Widget" (building custom desktop widgets via voice commands). It integrates seamlessly with Android phones, allowing users to cast mobile apps and access phone files directly on the laptop. Multiple manufacturers including Acer, Asus, Dell, HP, and Lenovo will produce Googlebook models.

**Discussion:** The dominant reaction is skepticism about Google's AI-focused marketing, with commenters arguing that the showcased use cases are disconnected from how real people use computers. A major thread centers on distrust of Google's ability to maintain products long-term, citing the company's extensive graveyard of discontinued services. There is also a side debate about whether Apple genuinely de-emphasizes AI marketing compared to Google.

---

## 3. [Software Engineering May No Longer Be a Lifetime Career](https://www.seangoedecke.com/software-engineering-may-no-longer-be-a-lifetime-career/)
**734 points** | [467 comments](https://news.ycombinator.com/item?id=48095550)

**Article:** The author argues that software engineering may shift from a lifetime profession to a shorter-term career similar to professional athletics. His central thesis is that using AI to perform tasks means engineers learn less about performing those tasks, leading to skill atrophy over time. He contends that engineers will be economically forced to adopt AI anyway, since those willing to trade long-term skill development for immediate productivity gains will outcompete those who resist.

**Discussion:** Senior developers push back, arguing that coding represents only 2-5% of their work and that understanding systems and formulating solutions remains irreplaceable. Skeptics counter that most developers spend significant time on actual coding tasks where AI excels. A broader debate emerges about economic stratification: specialized engineers in complex domains may remain valuable, but junior and mid-career developers face displacement or severe wage pressure.

---

## 4. [GitLab Announces Workforce Reduction and End of Their CREDIT Values](https://about.gitlab.com/blog/gitlab-act-2/)
**643 points** | [666 comments](https://news.ycombinator.com/item?id=48100500)

**Article:** GitLab is announcing a strategic pivot toward the "agentic era" of software development, restructuring the company by reducing its operational footprint by up to 30% of countries, flattening organizational layers, and reorganizing R&D into roughly 60 smaller teams. The company is retiring its longstanding CREDIT values framework and replacing it with three new operating principles. CEO Bill Staples frames this as transformation rather than cost-cutting.

**Discussion:** Commenters are deeply skeptical that the "agentic era" framing is genuine, viewing it as AI buzzwords used to justify layoffs rather than a real productivity strategy. Critics highlight GitLab's structural problems, noting the company has roughly 2,800 employees for a single product that "feels like software made by 50 people." Broader frustration surfaces about a tech industry pattern where companies invoke AI as cover for headcount reductions without demonstrating actual product improvements.

---

## 5. [I'm Going Back to Writing Code by Hand](https://blog.k10s.dev/im-going-back-to-writing-code-by-hand/)
**600 points** | [990 comments](https://news.ycombinator.com/item?id=48090029)

**Article:** The author built a Kubernetes dashboard entirely through AI-assisted "vibe-coding" with Claude over seven months, only to find the codebase had accumulated severe architectural debt -- including a 1,690-line "god object" struct of tangled logic. The core lesson is that "AI builds features, not architecture": while AI excels at generating individual features quickly, it defaults to poor design patterns because those represent the shortest path to working code.

**Discussion:** Critics argue that LLMs hide architectural problems and fail at judgment calls about when design invariants should evolve. Proponents report practical 2-3x productivity gains when using AI for boilerplate and repetitive tasks, provided there is careful code review and testing. A secondary debate centers on whether reviewing AI-generated output requires more scrutiny than reviewing human code.

---

## 6. [Gmail Registration Now Requires Scanning a QR Code and Sending a Text Message](https://discuss.privacyguides.net/t/google-account-registration-now-requires-sending-an-sms-via-phone-instead-of-receiving-an-sms/36082)
**492 points** | [615 comments](https://news.ycombinator.com/item?id=48092028)

**Article:** Google has replaced traditional SMS verification for account registration with a new QR code system. Instead of receiving an SMS code, users must scan a QR code with their phone, which triggers an automatic SMS sent *from* the user's device to Google. Google says this change combats phishing, but critics argue it blocks anonymous account creation, introduces device fingerprinting risks, and excludes users without smartphones.

**Discussion:** The dominant theme is skepticism toward Google framing Gmail as a "free" service that is costly to maintain, arguing Google profits enormously from email data mining. A major secondary thread focuses on Gmail's infrastructure monopoly: small email providers face deliverability barriers created by Gmail's filtering dominance. Most participants view these registration changes as another step in the "enshittification" of a platform that once courted users with generous promises.

---

## 7. [Postmortem: TanStack NPM Supply-Chain Compromise](https://tanstack.com/blog/npm-supply-chain-compromise-postmortem)
**437 points** | [1051 comments](https://news.ycombinator.com/item?id=48100706)

**Article:** Between May 11-26, 2026, an attacker published 84 malicious versions across 42 @tanstack/* npm packages by exploiting three chained vulnerabilities: a "Pwn Request" pattern in a GitHub Actions workflow, GitHub Actions cache poisoning, and OIDC token extraction from runner memory. The malware harvested credentials (AWS, GCP, Kubernetes, GitHub, npm, SSH keys) and exfiltrated them via encrypted Session messenger channels. The compromise was detected within ~20 minutes.

**Discussion:** A major debate concerns whether compromised systems require full reinstallation versus partial recovery. A disturbing discovery: the malware includes a dead-man's switch that runs "rm -rf ~/" if GitHub token revocation is detected. An extensive thread questions whether sudo provides meaningful protection against unprivileged malware. Commenters also critique GitHub Actions' YAML-based configuration for obscuring security implications.

---

## 8. [EU to Crack Down on TikTok, Instagram's 'Addictive Design' Targeting Kids](https://www.cnbc.com/2026/05/12/tiktok-instagram-social-media-addictive-eu-crack-down.html)
**400 points** | [452 comments](https://news.ycombinator.com/item?id=48106534)

**Article:** The EU Commission announced plans to take action against "addictive design" features on TikTok and Instagram, including endless scrolling, autoplay, and push notifications. EU Commission President Ursula von der Leyen revealed the EU has developed its own age verification app with high privacy standards. A legal proposal could be ready by summer 2026, following Australia's lead in banning social media for under-16s.

**Discussion:** The central debate revolves around how to define "algorithm" in regulation -- whether rules should target all algorithms or specifically personalized recommendation systems designed to maximize engagement. Practical proposals include making chronological feeds the default with algorithmic feeds as opt-in. Significant skepticism exists about enforcement, with predictions of "malicious compliance" similar to cookie-banner workarounds.

---

## 9. [Driver Accused of DUI Tracks Missing Laptop to Illinois State Trooper's House](https://abc7chicago.com/post/top-cop-driver-accused-dui-tracks-missing-laptop-illinois-state-police-trooper-kevin-bradleys-house/19060850/)
**376 points** | [445 comments](https://news.ycombinator.com/item?id=48067184)

**Article:** Restaurant executive Sherard Holland was arrested for DUI by Illinois State Police Trooper Kevin Bradley in June 2024. After his vehicle was impounded, Holland discovered his MacBook was missing and used Apple's "Find My" feature to track it to Bradley's home. The trooper initially denied having it, then claimed he took it "as a favor." An internal investigation resulted in only a one-day suspension. Holland was later found not guilty, and records show 174 of Bradley's 319 DUI cases since 2023 were dismissed or resulted in acquittals.

**Discussion:** Commenters are outraged by the one-day suspension, viewing it as emblematic of police accountability failures. A major debate erupts about police unions, with many arguing they exist primarily to shield officers from consequences. Bradley's remarkably high dismissal rate on DUI cases also draws scrutiny, suggesting a pattern of questionable arrests.

---

## 10. [US Inflation Jumps to 3.8% as Energy Costs Surge from Iran War](https://www.bbc.com/news/articles/c202pgxx89lo)
**371 points** | [222 comments](https://news.ycombinator.com/item?id=48108313)

**Article:** *[Error: Article could not be accessed due to egress restrictions.]* Based on the headline and discussion context: US inflation reportedly jumped to 3.8%, driven by surging energy costs linked to the conflict with Iran.

**Discussion:** The dominant perspective frames the Iran conflict as a strategic catastrophe for the United States, with inflation as just one symptom. Commenters cite loss of credibility with Middle East allies, Iranian dominance over the Strait of Hormuz, and depleted military stockpiles. Secondary debates cover whether the inflation is temporary or signals deeper structural damage, and whether the crisis may accelerate renewable energy adoption.

---

## 11. [Bambu Lab Is Abusing the Open Source Social Contract](https://www.jeffgeerling.com/blog/2026/bambu-lab-abusing-open-source-social-contract/)
**328 points** | [964 comments](https://news.ycombinator.com/item?id=48109224)

**Article:** Jeff Geerling argues that Bambu Lab is abusing the open source social contract by threatening legal action against the developer of an OrcaSlicer fork that allowed users to bypass Bambu's cloud infrastructure. Bambu Studio itself is a fork of Prusa Slicer, licensed under AGPLv3, and the targeted fork was using Bambu's own upstream code. Geerling finds it particularly ironic since Bambu's own fork once accidentally sent telemetry to Prusa's servers.

**Discussion:** Comments are sharply divided between those who argue Bambu can legally restrict access to their cloud servers regardless of the software's open source license, and those who see this as a fundamental betrayal of the open source ecosystem. A pragmatic camp notes that competitors like Prusa offer genuine openness but at higher cost. Broader concerns about telemetry, design theft, and locking down after achieving market dominance feature prominently.

---

## 12. [Screenshots of Old Desktop OSes](http://www.typewritten.org/Media/)
**326 points** | [626 comments](https://news.ycombinator.com/item?id=48104428)

**Article:** A curated collection of screenshots from historical desktop operating systems and graphical environments, spanning from 1983 to the late 1990s. It features actual screen captures from real hardware including VisiCorp Visi On, SunTools on SunOS, GEM Desktop, OS/2 Presentation Manager, RISC OS, Amiga applications, SGI IRIS, and many others. Each screenshot is accompanied by detailed descriptions of the hardware and software configuration.

**Discussion:** Commenters are heavily nostalgic, praising older operating systems for their "visible affordances" -- clear buttons, visible scrollbars, and grab-able titlebars -- that made UIs discoverable and intuitive. A major recurring complaint is that modern flat/minimalist design has regressed usability by hiding functionality behind hamburger menus and ambiguous icons. The thread reflects broader frustration that contemporary designers have abandoned research-backed desktop UI principles.

---

## 13. [Mythos Finds a Curl Vulnerability](https://daniel.haxx.se/blog/2026/05/11/mythos-finds-a-curl-vulnerability/)
**280 points** | [678 comments](https://news.ycombinator.com/item?id=48091737)

**Article:** Daniel Stenberg (curl's maintainer) describes how Anthropic's Mythos AI model scanned curl's codebase and reported five potential vulnerabilities, of which one was confirmed as a genuine low-severity security flaw scheduled for publication with curl 8.21.0. Mythos used "hand-driven analysis using LLM subagents for parallel file reads" through Anthropic's Project Glasswing initiative. Stenberg concludes that while finding a real vulnerability is noteworthy, the marketing hype exceeded actual performance.

**Discussion:** The primary debate centers on whether Anthropic's marketing claims about Mythos match reality, with many viewing the exclusive access and safety narrative as hype masking incremental improvements. Defenders argue that curl's exceptionally well-audited codebase makes it a poor benchmark, and finding even one new vulnerability demonstrates real capability. The discussion also touches on Mozilla's parallel findings of 271 Firefox bugs using Mythos.

---

## 14. [I Let AI Build a Tool to Help Me Figure Out What Was Waking Me Up at Night](https://martin.sh/i-let-ai-build-a-tool-to-help-me-figure-out-what-was-waking-me-up-at-night/)
**274 points** | [262 comments](https://news.ycombinator.com/item?id=48100662)

**Article:** The author built a sleep disturbance monitoring system combining microphone recordings, Garmin watch data, and Home Assistant sensors to identify what was disrupting his sleep in a noisy city apartment. The system revealed that neighbor door slams, dishes clattering, and street noise were the primary culprits. AI tooling dramatically reduced the development time to roughly 8 hours, and findings enabled targeted fixes like acoustic panels and door insulation.

**Discussion:** A significant contingent argues the project is over-engineered, suggesting simpler solutions like earplugs or white noise machines. An extensive sub-thread debates earplug types and their long-term health implications. Several commenters flag environmental factors beyond noise -- notably the author's dangerously high CO2 readings (3300+ ppm) -- while others question whether AI genuinely added value to what is essentially a recording-and-listening task.

---

## 15. [Ratty -- A Terminal Emulator with Inline 3D Graphics](https://ratty-term.org/)
**232 points** | [658 comments](https://news.ycombinator.com/item?id=48093100)

**Article:** Ratty is a GPU-rendered terminal emulator created by Orhun Parmaksiz that supports displaying three-dimensional graphics directly inline within the terminal environment. It leverages GPU rendering for enhanced visual performance, distinguishing itself from conventional text-based terminal emulators. The project is open source and available on GitHub.

**Discussion:** Commenters debate whether inline 3D in a terminal is genuinely useful or merely a cool technical demo. Several threads draw comparisons to historical graphical environments -- Xerox workstations, Lisp machines, SGI IRIS, and TempleOS. Other discussions explore practical applications like VR development environments, 3D code visualization, and the broader question of what the "terminal of the future" should look like.

---

## 16. [Amazon Employees Are "Tokenmaxxing" Due to Pressure to Use AI Tools](https://arstechnica.com/ai/2026/05/amazon-employees-are-tokenmaxxing-due-to-pressure-to-use-ai-tools/)
**210 points** | [198 comments](https://news.ycombinator.com/item?id=48110529)

**Article:** *[Error: Ars Technica article could not be accessed due to egress restrictions.]* Based on discussion context: Amazon employees are engaging in "tokenmaxxing" -- deliberately inflating their AI token consumption metrics because management is tracking and evaluating employees based on how much they use AI coding tools. Employees are gaming the system by feeding trivial or repetitive queries to AI assistants simply to boost their usage numbers.

**Discussion:** Commenters overwhelmingly invoked Goodhart's Law (when a measure becomes a target, it ceases to be a good measure), comparing token-count KPIs to the discredited practice of measuring developers by lines of code. Many reported that similar AI-usage mandates and metrics exist across the tech industry. A minority acknowledged genuine AI productivity gains but argued that forced adoption through metrics produces the opposite of meaningful integration.

---

## 17. [Students Boo Commencement Speaker After She Calls AI Next Industrial Revolution](https://www.404media.co/ucf-ai-commencement-speaker-booed/)
**209 points** | [171 comments](https://news.ycombinator.com/item?id=48096674)

**Article:** Gloria Caulfield, vice president of strategic alliances at Tavistock Group, delivered the commencement address at the University of Central Florida's College of Arts and Humanities on May 8, 2026. When she described artificial intelligence as the "next industrial revolution," graduating students erupted in boos, with one attendee shouting "AI SUCKS!" The speaker paused and asked the crowd to let her finish her remarks despite the vocal opposition.

**Discussion:** Top-voted comments warned that AI proponents risk alienating an entire generation of young adults, noting the technology's output is "not enjoyable to consume." A recurring theme was the distinction between AI having legitimate use cases versus overblown hype. One notable tangent explored whether HN itself is driven by gamification psychology.

---

## 18. [eBay Rejects GameStop's $56B Takeover as Not Credible](https://www.bloomberg.com/news/articles/2026-05-12/ebay-rejects-gamestop-s-56-billion-takeover-as-not-credible)
**203 points** | [209 comments](https://news.ycombinator.com/item?id=48110021)

**Article:** *[Error: Bloomberg article is behind a paywall.]* Based on discussion context: GameStop made a $56 billion takeover bid for eBay, which eBay's board rejected as not credible, likely due to questions about GameStop's ability to fund such a massive acquisition.

**Discussion:** Commenters focused on the sheer financial implausibility of the deal, questioning how GameStop could fund a $56 billion acquisition. Many dismissed GameStop as a "meme stock" with no credible business plan capable of managing eBay. Several users expressed relief at the rejection, praising eBay's existing strengths as a marketplace for niche and used goods.

---

## 19. [I Hate Soldering](https://user8.bearblog.dev/rant/)
**202 points** | [228 comments](https://news.ycombinator.com/item?id=48059831)

**Article:** A rant in which the author expresses deep frustration with soldering, complaining about thick grey smoke from solder and flux, sticky residue, exposure to harmful chemicals, and the generally unpleasant sensory experience. Beyond practical annoyances, the author also voices broader philosophical concerns about unchecked technological advancement and its environmental consequences.

**Discussion:** Comments were dominated by soldering enthusiasts who took the opposite position, with the top commenter calling it relaxing with a satisfying skill curve. A major thread debated equipment recommendations -- some advocated investing in stereo microscopes and professional-grade tools, while others argued a cheap $10 iron is sufficient for hobbyist work. Practical tips were extensively shared, including recommendations for the Pinecil V2 and DIY fume extractors.

---

## 20. [The Greatest Shot in Television: James Burke Had One Chance to Nail This Scene (2024)](https://www.openculture.com/2024/10/the-greatest-shot-in-television.html)
**191 points** | [361 comments](https://news.ycombinator.com/item?id=48090521)

**Article:** The article celebrates an iconic 80-second single-take clip from James Burke's 1978 science documentary series *Connections*, in which the science historian explains how rocket fuel works while a real Saturn V rocket launches behind him on cue. Burke executed the scene with impeccable split-second timing, describing how "certain gases ignite" and then pointing behind him as the rocket launched precisely on his mark.

**Discussion:** Comments split between those in awe of Burke's timing and technical skeptics who pointed out a visible cut shortly before the launch. Beyond the technical debate, commenters extensively reminisced about the golden age of 1970s-80s documentaries (*Connections*, *Cosmos*, *Life on Earth*), lamenting that modern documentaries are "dumbed down" with fast cuts rather than allowing deep exploration of ideas.

---

## 21. [Instructure Pays Ransom to Canvas Hackers](https://www.insidehighered.com/news/tech-innovation/administrative-tech/2026/05/11/instructure-pays-ransom-canvas-hackers)
**189 points** | [196 comments](https://news.ycombinator.com/item?id=48103668)

**Article:** Instructure paid an undisclosed ransom to the hacking group ShinyHunters after they breached Canvas, the learning management system used by 41% of North American higher education institutions, compromising data for approximately 275 million users across 8,800+ schools. The cybercriminals demanded payment by May 12 and twice disrupted Canvas service, forcing universities to suspend final exams. Cybersecurity experts warned that paying ransoms reinforces the economic incentive structure behind cyber extortion.

**Discussion:** Commenters framed this as a classic prisoner's dilemma -- paying ransoms helps individual victims immediately but financially incentivizes future attacks. Several cited historical parallels like Italy's successful reduction in kidnappings by making ransom payments illegal. A counterargument emphasized that hacking carries lower risk than physical kidnapping, so criminals may persist regardless, and that the real problem is inadequate security practices.

---

## 22. [A.I. Note Takers Are Making Lawyers Nervous](https://www.nytimes.com/2026/05/09/business/dealbook/ai-notetakers-legal-risk.html)
**186 points** | [254 comments](https://news.ycombinator.com/item?id=48093043)

**Article:** *[Error: NYT article is behind a paywall.]* Based on discussion context: The article explores how AI meeting transcription tools are creating legal risks, as casual workplace conversations become permanent, searchable records that are fully discoverable in litigation.

**Discussion:** Three main concerns emerged: AI note-takers frequently hallucinate when audio is unclear (inventing plausible words rather than marking content as unintelligible), legal liability when casual conversations become permanent discoverable records, and the chilling effect on workplace communication when employees know everything is being transcribed. Multiple commenters highlighted that summarization errors compound transcription mistakes, potentially creating coherent-sounding narratives that misrepresent what actually occurred.

---

## 23. [They Live (1988) Inspired Adblocker](https://github.com/davmlaw/they_live_adblocker)
**177 points** | [530 comments](https://news.ycombinator.com/item?id=48102700)

**Article:** A modified version of uBlock Origin Lite that replaces blocked advertisements with white tiles displaying slogans from John Carpenter's 1988 film "They Live" -- phrases like "OBEY," "CONSUME," and "SUBMIT." Rather than simply hiding ads, the extension patches uBO Lite's cosmetic filtering system to inject CSS overlays with random phrases. Users must switch filtering mode from Basic to Optimal or Complete for it to work.

**Discussion:** Three themes dominated: nostalgia for the film, debate over AI-generated code, and technical discussion of ad-blocking. The creator defended using AI to build the project, saying the extension simply would not have existed otherwise. Critics argued that using AI contradicts the film's anti-dehumanization message. The conversation also touched on the film's enduring relevance and its unfortunate co-option by far-right groups.

---

## 24. [Google Says Criminal Hackers Used AI to Find a Major Software Flaw](https://www.nytimes.com/2026/05/11/us/politics/google-hackers-attack-ai.html)
**171 points** | [236 comments](https://news.ycombinator.com/item?id=48094641)

**Article:** *[Error: NYT article is behind a paywall.]* Based on discussion context: Google reported that criminal hackers used AI tools to discover and exploit a significant software vulnerability.

**Discussion:** Commenters expressed significant skepticism, questioning whether the evidence proves AI was used for vulnerability discovery versus merely writing exploit code. Many suspected the announcement serves marketing purposes, promoting restricted AI models while justifying government regulation. Others argued the news is unsurprising since developers routinely use AI tools, making the distinction between legitimate and malicious use largely meaningless.

---

## 25. [Can Someone Please Explain Whether Cloudflare Blackmailed Canonical?](https://www.flyingpenguin.com/can-someone-please-explain-whether-cloudflare-blackmailed-canonical/)
**166 points** | [278 comments](https://news.ycombinator.com/item?id=48098537)

**Article:** The article alleges that Cloudflare may have profited from a 2026 DDoS attack on Canonical (Ubuntu) by simultaneously hosting the attack service (Beamed) on its own infrastructure while later providing DDoS protection to the victim. During a roughly 20-hour outage, Canonical moved critical endpoints behind Cloudflare within hours, becoming a paid customer for exactly the endpoints the attackers targeted. The author compares this to a protection racket.

**Discussion:** The discussion was sharply divided. One camp pointed out that the article conflates hosting an informational website behind Cloudflare with Cloudflare actually providing attack infrastructure. A major thread debated whether Cloudflare should proactively police its customers' content -- some argued Cloudflare should enforce basic rules, while others warned that giving Cloudflare more power to decide who can host content is dangerous given its enormous position as a global intermediary.

---

*Generated on May 12, 2026. Articles marked with [Error] could not be accessed due to paywalls or network restrictions; summaries for those are reconstructed from HN discussion context.*
