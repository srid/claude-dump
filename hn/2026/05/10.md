# Hacker News Top Stories - May 10, 2026

Top submissions from the last 24 hours, sourced from [hckrnews.com](https://hckrnews.com/).

---

## 1. [Bun's experimental Rust rewrite hits 99.8% test compatibility on Linux x64 glibc](https://twitter.com/jarredsumner/status/2053047748191232310) ([682 comments](https://news.ycombinator.com/item?id=48073680))

**Article:** Jarred Sumner (Bun creator) announced that an experimental rewrite of Bun from Zig to Rust has achieved 99.8% test compatibility on Linux x64 glibc after approximately six days of work, reportedly leveraging LLM assistance heavily in the process. The announcement sparked discussion about whether this demonstrates genuine AI-assisted engineering capabilities or is primarily a marketing exercise. *(Article URL is on X/Twitter and could not be directly fetched; summary derived from HN discussion.)*

**Discussion:** Discussion is sharply divided between those impressed by the technical achievement and skeptics questioning the "no intention to rewrite" framing. Major threads debate Rust vs. Zig trade-offs (memory safety, compilation speed, team expertise), the real capabilities and limitations of LLMs for large-scale code rewrites, and whether passing tests guarantees production quality given that subtle bugs and architecture decisions are not captured by test suites.

---

## 2. [A recent experience with ChatGPT 5.5 Pro](https://gowers.wordpress.com/2026/05/08/a-recent-experience-with-chatgpt-5-5-pro/) ([679 comments](https://news.ycombinator.com/item?id=48071262))

**Article:** Fields Medalist Timothy Gowers tested ChatGPT 5.5 Pro on open problems from additive number theory and found it produced PhD-level original mathematical research within hours, including novel constructions and improved bounds that went from exponential to polynomial -- with no serious mathematical input from him. Gowers raised profound concerns about the future of mathematical research, arguing that beginning researchers can no longer be trained on "gentle" problems since LLMs can now solve them.

**Discussion:** Commenters are wrestling with the implications of AI reaching PhD-level mathematical capability, with many noting this feels qualitatively different because a Fields Medalist is making the claim. Discussion threads explore whether each new model genuinely surpasses its predecessor or just shifts the failure boundary, and the philosophical question of what mathematical research and education look like when AI can independently produce publishable results.

---

## 3. [Internet Archive Switzerland](https://blog.archive.org/2026/05/06/internet-archive-switzerland-expanding-a-global-mission-to-preserve-knowledge/) ([677 comments](https://news.ycombinator.com/item?id=48074265))

**Article:** The Internet Archive announced the establishment of Internet Archive Switzerland, joining Internet Archive Canada and Internet Archive Europe as independent but mission-aligned organizations building a distributed, resilient digital library. The expansion to Switzerland is a strategic move to create jurisdictional redundancy and protect digital preservation efforts from political and legal threats concentrated in any single country.

**Discussion:** The HN discussion centers on strategies for making the Internet Archive more resilient, with the top comment proposing a Usenet-like model of distributed, peering organizations that cannot propagate takedown requests. Commenters extensively debate BitTorrent's legal risks across jurisdictions, the feasibility of distributing 175+ petabytes across many hosts, and whether the Swiss entity is sufficiently independent from the US parent to provide real legal protection.

---

## 4. [EU Parliamentary Research Service calls VPNs "a loophole that needs closing"](https://cyberinsider.com/eu-calls-vpns-a-loophole-that-needs-closing-in-age-verification-push/) ([622 comments](https://news.ycombinator.com/item?id=48072190))

**Article:** The European Parliamentary Research Service has identified VPNs as obstacles to online age-verification systems, framing them as "a loophole in the legislation that needs closing," with some policymakers proposing that VPN access itself should require identity verification. VPN usage surged after age-verification laws took effect in the UK and certain US states, and privacy advocates including Mozilla and Mullvad have objected that such measures would undermine legitimate privacy protections.

**Discussion:** The HN discussion is overwhelmingly critical, drawing extensive parallels to Russia's gradual escalation from "piracy protection" justifications to comprehensive internet control between 2015-2025. Commenters widely view "protecting children" as a pretext for removing online anonymity, with the consensus being that such regulations inevitably expand into broader surveillance and consolidate power among large corporations.

---

## 5. [Hardware Attestation as Monopoly Enabler](https://grapheneos.social/@GrapheneOS/116550899908879585) ([603 comments](https://news.ycombinator.com/item?id=48086190))

**Article:** GrapheneOS posted a thread arguing that Apple and Google are gradually expanding their use of hardware-based attestation (via Play Integrity API and App Attest API) to lock out hardware and software competition. The post warns that Google's reCAPTCHA is planning to require Apple or Google hardware attestation, and that these systems are wrongly presented as security features when their real purpose is disallowing unapproved hardware and software.

**Discussion:** Discussion is pessimistic and critical, with commenters alarmed that the EU's digital identity wallet depends on Google/Apple attestation, effectively tying European digital sovereignty to American companies. Key technical concerns include the lack of zero-knowledge proofs enabling device tracking and deanonymization, while broader debates center on whether this represents intentional anti-competitive gatekeeping or political incompetence.

---

## 6. [I returned to AWS and was reminded why I left](http://fourlightyears.blogspot.com/2026/05/i-returned-to-aws-and-was-reminded-hard.html) ([586 comments](https://news.ycombinator.com/item?id=48073201))

**Article:** An early AWS advocate describes returning to the platform after years away to run performance tests on an EC2 instance, only to have his account immediately suspended for a suspected security breach, which disabled his business email and left him without support for days. His experience reinforces longstanding criticisms of AWS's excessive complexity, predatory practices toward open-source projects, high costs, and poor customer service.

**Discussion:** Comments are mixed, with substantial criticism of AWS balanced by defenses of its complexity serving real infrastructure needs. Key debates center on whether AWS is unnecessarily complicated or reflects genuine requirements, whether its use of open-source projects (Elasticsearch, Redis) was exploitative, and whether alternatives like Cloudflare, Hetzner, or self-hosting are truly cheaper. Most agree that data egress pricing is problematic and IAM is genuinely confusing.

---

## 7. [I've banned query strings](https://chrismorgan.info/no-query-strings) ([539 comments](https://news.ycombinator.com/item?id=48076173))

**Article:** Chris Morgan has implemented a ban on all query strings for his personal website, returning a 414 error for any URL containing them, primarily to combat unwanted tracking parameters like UTM codes and referrer tags. He argues that website owners should have full control over their URLs and that adding tracking data to someone else's URLs is an abuse of users.

**Discussion:** Comments show mixed sentiment, with appreciation for the unconventional anti-tracking stance balanced against skepticism about practicality. Critics argue that rejecting all query strings punishes innocent users whose browsers or email clients inadvertently append parameters, and that query strings have many legitimate uses including form submissions, filtering, and routing.

---

## 8. [Using Claude Code: The unreasonable effectiveness of HTML](https://twitter.com/trq212/status/2052809885763747935) ([501 comments](https://news.ycombinator.com/item?id=48071940))

**Article:** The tweet by Thariq links to an article arguing that having LLMs like Claude Code output documents and specs as single-file HTML rather than Markdown is surprisingly effective, since HTML enables richer visuals and interactivity while remaining human-readable and dependency-free. *(Article URL is on X/Twitter and could not be directly fetched; summary derived from HN discussion.)*

**Discussion:** Comments reveal a fundamental split between those who view HTML as naturally suited for agent-generated documents (easy sharing, no dependencies, richer output) and those who see it as token-inefficient and problematic for human-LLM co-creation. Several suggest hybrid approaches like Markdown with embedded HTML. Some commenters also question the incentive structure of an Anthropic staff member promoting a more token-heavy format.

---

## 9. [OpenAI's WebRTC problem](https://moq.dev/blog/webrtc-is-the-problem/) ([499 comments](https://news.ycombinator.com/item?id=48051951))

**Article:** The author argues that OpenAI's choice of WebRTC for their voice AI service is fundamentally mismatched because WebRTC aggressively drops audio packets to maintain low latency in conversational settings, whereas voice AI users would prefer accurate prompt delivery over speed. The article recommends QUIC-based protocols like WebTransport instead, which offer superior connection stability, faster handshakes, and simpler load balancing.

**Discussion:** Comments show mixed sentiment, with many defending WebRTC's real-time reliability while acknowledging the author's legitimate criticisms about its fit for AI voice applications. The central debate concerns latency versus accuracy: proponents claim users demand instant responses even at quality cost, while skeptics doubt users prefer instant wrong results over correct responses with slight delay.

---

## 10. [LLMs corrupt your documents when you delegate](https://arxiv.org/abs/2604.15597) ([460 comments](https://news.ycombinator.com/item?id=48073246))

**Article:** This research paper introduces DELEGATE-52, a benchmark testing how reliably LLMs handle extended document editing tasks across 52 professional domains using invertible round-trip operations. The study reveals that even frontier models corrupt an average of 25% of document content by the end of long workflows, with performance worsening as documents grow larger or interactions lengthen.

**Discussion:** Commenters largely validate the findings through personal experience, with many comparing LLM document degradation to repeated JPEG compression. Key debates center on whether the methodology reflects real-world usage (some argue agentic AI uses targeted edits, not full-document reproduction), and whether LLMs should be used as thin translation layers rather than full document processors.

---

## 11. [Meta's embrace of AI is making its employees miserable](https://www.nytimes.com/2026/05/08/technology/meta-ai-employees-miserable.html) ([426 comments](https://news.ycombinator.com/item?id=48077126))

**Article:** Meta's aggressive push to integrate AI into workflows is creating significant friction among employees, with AI-generated outputs burdening coworkers who must parse low-quality content and a lack of social norms around acceptable AI use in the workplace. *(NYT article behind paywall; summary derived from HN discussion.)*

**Discussion:** Commenters widely criticize the information asymmetry problem where AI makes it cheap to produce content but shifts the parsing burden onto recipients. Discussion also touches on Meta's broader cultural issues including fear-based management, execution failures on Metaverse and AI research, and the irony of employees rebelling against internal tracking systems given Meta's own privacy record.

---

## 12. [The hypocrisy of cyberlibertarianism](https://matduggan.com/the-intolerable-hypocrisy-of-cyberlibertarianism/) ([400 comments](https://news.ycombinator.com/item?id=48074952))

**Article:** The article argues that early internet ideology, exemplified by John Perry Barlow's 1996 Declaration of Independence of Cyberspace, promised individual freedom and decentralized community but actually enabled corporate monopolies. Cyberlibertarians used deregulation rhetoric as cover for massive wealth concentration, leaving actual community work to unpaid volunteers while corporations captured profits and evaded accountability.

**Discussion:** The discussion debates whether Barlow's vision has fundamentally failed, with critics arguing that anonymous communication was weaponized by propagandists more effectively than dissidents. Defenders contend the goal of enabling communication without physical persecution remains valid, and that failures stem from corporate sabotage and government surveillance rather than the ideology itself.

---

## 13. [Louis Rossmann offers to pay legal fees for a threatened OrcaSlicer developer](https://www.tomshardware.com/3d-printing/louis-rossmann-tells-3d-printer-maker-bambu-lab-to-go-bleep-yourself-over-its-lawsuit-against-enthusiast-right-to-repair-advocate-offers-to-pay-the-legal-fees-for-a-threatened-orcaslicer-developer) ([396 comments](https://news.ycombinator.com/item?id=48084432))

**Article:** Right-to-repair advocate Louis Rossmann publicly defended an OrcaSlicer developer facing legal threats from 3D printer manufacturer Bambu Lab, offering to cover their legal expenses. The dispute stems from tensions between Bambu Lab and the open-source 3D printing community over intellectual property and right-to-repair concerns.

**Discussion:** The HN discussion is split between supporters of open-source rights who condemn Bambu Lab for restricting offline functionality, forcing cloud dependency, and violating AGPL licenses, and pragmatic users who appreciate the hardware's price-to-performance ratio. Many express regret about their purchases while acknowledging Bambu's superior engineering, with Prusa emerging as the preferred ethical alternative.

---

## 14. [Mythical Man Month](https://martinfowler.com/bliki/MythicalManMonth.html) ([387 comments](https://news.ycombinator.com/item?id=48046436))

**Article:** Martin Fowler's article revisits Fred Brooks's influential 1975 book on software project management, highlighting two key lessons: Brooks's Law (adding people to a late project makes it later due to communication overhead) and the principle of conceptual integrity -- the idea that a system should reflect unified design rather than accumulating disconnected features.

**Discussion:** The discussion centers on whether AI has become the "silver bullet" that Brooks famously said didn't exist, with commenters debating claims of 10x productivity gains. Skeptics argue that increased code output does not equal improved development speed or quality, while proponents share concrete examples of completing projects much faster with AI assistance.

---

## 15. [Distributing Mac software is increasing my cortisol levels](https://blog.kronis.dev/blog/apple-is-increasing-my-cortisol-levels) ([381 comments](https://news.ycombinator.com/item?id=48075366))

**Article:** The author describes deep frustrations with Apple's macOS software distribution requirements, including the $99/year Apple Developer Program fee for code signing, a broken ID verification process, and inconsistent app status updates. The author concludes that the entire code-signing ecosystem across platforms is "stupidly expensive for what it is," comparing it to TLS certificate costs before Let's Encrypt.

**Discussion:** The predominantly frustrated discussion centers on Apple's Gatekeeper, code signing requirements, and the $99/year developer fee creating barriers for indie developers distributing free or low-revenue software. Defenders note Gatekeeper can be disabled and that the fee is cheaper than Windows code signing ($300-700+/year), while critics argue the yearly fee discourages open-source projects.

---

## 16. [Show HN: Building a web server in assembly to give my life (a lack of) meaning](https://github.com/imtomt/ymawky) ([374 comments](https://news.ycombinator.com/item?id=48080587))

**Article:** ymawky is a static file web server implemented entirely in ARM64 assembly for macOS with zero external library dependencies. It is a syscall-only, no-libc, fork-per-connection server that supports GET, PUT, DELETE, OPTIONS, and HEAD methods, along with built-in security features like path traversal prevention, symlink rejection, and slowloris mitigation.

**Discussion:** Commenters celebrate the technical achievement while engaging in a significant meta-debate about whether hand-coded assembly projects retain value in an era of AI code generation, with many mourning a potential "death of a human artform." Discussion also covers assembly as a valuable learning tool for understanding CPU fundamentals.

---

## 17. [GrapheneOS fixes Android VPN leak Google refused to patch](https://cyberinsider.com/grapheneos-fixes-android-vpn-leak-google-refused-to-patch/) ([338 comments](https://news.ycombinator.com/item?id=48075144))

**Article:** A newly discovered Android 16 vulnerability in the QUIC connection teardown feature allowed apps to transmit arbitrary UDP payloads through the device's physical network interface, bypassing VPN protections and exposing users' real IP addresses even with "Always-On VPN" enabled. GrapheneOS released a fix within a week by disabling the optimization, while Google's Android security team classified it as "Won't Fix (Infeasible)."

**Discussion:** Commenters express frustration and disbelief that Google classified a VPN bypass as "not a security issue," with many drawing parallels to Manifest V3 and suggesting Google has business incentives to allow snooping. The tone is critical of Google and supportive of GrapheneOS, with discussion covering practical aspects of obtaining GrapheneOS devices.

---

## 18. [Debian must ship reproducible packages](https://lists.debian.org/debian-devel-announce/2026/05/msg00001.html) ([336 comments](https://news.ycombinator.com/item?id=48081245))

**Article:** The Debian Release Team announced that Debian must now ship reproducible packages, with their migration software immediately blocking any new packages that lack reproducibility or existing packages showing regression. This represents a major commitment to software supply chain security and quality assurance.

**Discussion:** The discussion is divided, with proponents highlighting how reproducibility prevents binary tampering and enables independent verification, while skeptics argue it constitutes "security theatre" that raises contribution barriers without addressing real threats like compromised source code (e.g., the XZ Utils backdoor).

---

## 19. [Remind HN: Today is Mother's Day, call your moms](https://news.ycombinator.com/item?id=48085384) ([329 comments](https://news.ycombinator.com/item?id=48085384))

**Article:** A community "Remind HN" post reminding users that it is Mother's Day and encouraging them to call their mothers. Not a traditional article but rather a self-post that doubles as both content and discussion thread.

**Discussion:** The thread is predominantly emotional and reflective, with commenters sharing personal experiences of loss and grief, discussing how Mother's Day dates vary by country, and acknowledging complex family dynamics including abusive or estranged relationships. The tone is mature and respectful, balancing gratitude with recognition that "not all mothers are good people."

---

## 20. [The One Dollar Counterfeiter](https://www.amusingplanet.com/2026/05/emerich-juettner-one-dollar.html) ([315 comments](https://news.ycombinator.com/item?id=48048684))

**Article:** Emerich Juettner was an elderly Austrian-born immigrant who counterfeited one-dollar bills using crude, homemade methods from 1938 to 1948, succeeding for nearly a decade because people rarely scrutinized single-dollar notes. When authorities finally arrested the impoverished 72-year-old, public sympathy was so strong that he received only a year and a day in prison, and his story later became the subject of the 1950 Hollywood film "Mister 880."

**Discussion:** Commenters express sympathy for Juettner's situation while debating why the Secret Service pursued such a minimal counterfeiting case so zealously, exploring broader topics like counterfeiting penalties, currency security, and the economics of counterfeiting. The tone is generally lighthearted and appreciative, with many referencing the 1950 film adaptation.

---

## 21. [Casio S100X Japanese Lacquer Edition](https://www.casio.com/jp/basic-calculators/premium/en-s100x-jc1-u/) ([297 comments](https://news.ycombinator.com/item?id=48048407))

**Article:** The S100X-JC1-U is a premium calculator combining Casio's flagship S100X model with traditional Japanese lacquerware craftsmanship by master artisans from Yamakyu Japanware, who apply multiple layers of natural lacquer to create a deep, lustrous finish. Manufactured exclusively at Yamagata Casio in Japan, it features precision-machined aluminum construction and an advanced low-reflection LCD display, positioning it as a luxury collector's item.

**Discussion:** Commenters are entranced by the product's beauty, with many joking about falling down rabbit holes of premium calculators, mechanical keyboards, and RPN devices. A lively philosophical debate emerges about whether appreciating premium craftsmanship versus being satisfied with functional low-end products reflects meaningful aesthetic sensitivity or mere consumerism.

---

## 22. [Space Cadet Pinball on Linux](https://brennan.io/2026/05/09/pinball-and-escrow/) ([292 comments](https://news.ycombinator.com/item?id=48082968))

**Article:** The article explains how Linux users can play the nostalgic Windows XP Space Cadet Pinball game through a reverse-engineered open-source project available as a Flatpak. It provides installation instructions and details on upgrading to higher resolution graphics, while discussing the philosophical balance between software preservation and creator compensation.

**Discussion:** The discussion is overwhelmingly positive and nostalgic, with commenters celebrating the technical achievement and sharing fond memories. One of the original developers confirmed they find it "absolutely wonderful" that people love the game enough to keep it alive, and the conversation branches into topics like Visual Pinball emulation and source code escrow concepts.

---

## 23. [Incident Report: CVE-2024-YIKES](https://nesbitt.io/2026/02/03/incident-report-cve-2024-yikes.html) ([288 comments](https://news.ycombinator.com/item?id=48086082))

**Article:** This satirical incident report describes a catastrophic fictional supply chain attack in which a stolen hardware security key led to a compromised JavaScript package, which infected a Rust library that was vendored into a Python build tool, ultimately reaching approximately 4.2 million developers. The incident was absurdly resolved when an unrelated cryptocurrency mining worm inadvertently patched the malicious code.

**Discussion:** Commenters found the satirical fiction both hilarious and disturbingly plausible, praising its sharp writing while expressing genuine concern that such cascading supply chain scenarios could realistically occur. The discussion centered on real vulnerabilities in dependency management ecosystems (npm, Rust crates), with debates about expanding standard libraries and funding core maintainers.

---

## 24. [Local AI needs to be the norm](https://unix.foo/posts/local-ai-needs-to-be-norm/) ([269 comments](https://news.ycombinator.com/item?id=48085821))

**Article:** The author argues that developers have become too reliant on cloud-based AI services, creating fragile, privacy-invasive applications when local processing would suffice, since modern devices contain powerful neural processors that sit largely unused. The piece concludes that trust is built through architectural decisions that avoid needing privacy policies rather than through lengthy legal documents.

**Discussion:** The discussion reflects a tension between principled support for local AI (for privacy and independence) and pragmatic acknowledgment of barriers -- commenters note that running capable models locally requires expensive hardware (128GB+ RAM, high-end GPUs) and that open-source models still fall short of cloud models for complex tasks.

---

## 25. [Zed Editor Theme-Builder](https://zed.dev/theme-builder) ([268 comments](https://news.ycombinator.com/item?id=48076651))

**Article:** The Zed Theme Builder is a desktop-only visual editor tool that allows users to customize the appearance of the Zed code editor. It enables developers to create and personalize themes by adjusting colors, syntax highlighting, and UI elements, with options to import, export, and share custom themes.

**Discussion:** Commenters are cautiously optimistic about the theme builder, praising its inspector functionality and ease of use, but the broader discussion reveals persistent friction points including syntax highlighting gaps (particularly for Svelte), low-contrast default themes, and font rendering issues on macOS. Some worry about Zed's increasing emphasis on user accounts and AI features.

---

## 26. [France moves to break encrypted messaging](https://reclaimthenet.org/france-moves-to-break-encrypted-messaging) ([268 comments](https://news.ycombinator.com/item?id=48078811))

**Article:** France's parliamentary intelligence delegation has formally endorsed breaking encryption on messaging apps like WhatsApp, Signal, and Telegram. They propose adding a "ghost participant" -- an invisible state agent -- to encrypted conversations, claiming this targeted access is technically feasible. Cryptographers have long rejected such backdoor approaches, arguing that there is no such thing as a backdoor only the good guys can use.

**Discussion:** The discussion reveals deep skepticism about France's encryption proposal, with commenters noting the legislative situation is more nuanced than headlines suggest. Key debates center on technical feasibility of the "ghost user" approach, concerns about mission creep, and widespread agreement that backdoors weaken security for everyone while criminals will simply adopt other tools.

---

## 27. [Idempotency is easy until the second request is different](https://blog.dochia.dev/blog/idempotency/) ([254 comments](https://news.ycombinator.com/item?id=48047930))

**Article:** The article goes beyond the simple "store a key, replay a response" model of idempotency to explore hard edge cases: what happens when a second request arrives with the same key but a different payload, concurrent retries, partial success scenarios, downstream uncertainty, response replay contracts, and expiry policies.

**Discussion:** The discussion reveals deep disagreement about idempotency implementation, with a dominant faction arguing for simplicity (returning 409 Conflict on duplicate keys) while others counter that Stripe's model of replaying responses makes life easier for clients at the expense of server complexity. Key debates include whether idempotency keys should validate request payload hashes.

---

## 28. [Show HN: I made a Clojure-like language in Go, boots in 7ms](https://github.com/nooga/let-go) ([243 comments](https://news.ycombinator.com/item?id=48076815))

**Article:** let-go is a Clojure dialect implemented in Go that compiles to bytecode and runs on a stack VM, delivering a single ~10MB binary with ~7ms cold start and no JVM dependency. It offers approximately 95% Clojure compatibility, WebAssembly output for browser execution, nREPL support for editor integration, and two-way Go interoperability for embedding as a scripting layer.

**Discussion:** The community largely celebrates let-go as an impressive practical achievement that solves real problems with Clojure's startup time and JVM overhead, with discussions focusing on comparisons with similar projects like Glojure, Janet, and Joker. The main debates center on Go interoperability depth versus other Clojure implementations. Overall sentiment is positive.

---

## 29. [Getting arrested in Japan](https://sundaicity.com/blogs/getting-arrested-in-japan) ([241 comments](https://news.ycombinator.com/item?id=48078647))

**Article:** A first-hand account of the Japanese detention system from someone who spent 35 days in custody, describing harsh conditions including solitary confinement, restrictive rules, inadequate food, sleep deprivation, and interrogation designed to mentally and physically exhaust detainees. The piece contrasts Japan's investigation-focused approach with the U.S. system's faster court involvement.

**Discussion:** Commenters are sharply divided, with many noting the author never discloses the actual charge and speculating it may have been drug-related. A major debate centers on whether the nature of the crime matters when evaluating treatment, with one camp arguing that even suspected criminals deserve humane treatment and another defending Japan's strict system as the reason for its orderly society.

---

## 30. [What causes lightning? The answer keeps getting more interesting](https://www.quantamagazine.org/what-causes-lightning-the-answer-keeps-getting-more-interesting-20260506/) ([223 comments](https://news.ycombinator.com/item?id=48037517))

**Article:** For centuries, scientists believed lightning was simply a large-scale spark, but recent research reveals the phenomenon is far more complex. Modern instruments have detected gamma rays and high-energy particles in thunderclouds, supporting theories that extreme subatomic processes -- including runaway relativistic electron avalanches and possibly cosmic-ray showers -- trigger lightning even when electric fields are too weak for conventional breakdown.

**Discussion:** Commenters express fascination with the cosmic ray theory, with one noting the irony that ancient Greek stories of Zeus sending bolts from the cosmos may have been closer to the truth than modern explanations. Discussion threads share related resources including Feynman's lectures on atmospheric electricity, while others note gaps in covering related phenomena like red sprites and ball lightning.
