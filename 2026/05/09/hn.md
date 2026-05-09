# Hacker News Top Stories - May 9, 2026

Top submissions from the last 24 hours, sourced from [hckrnews.com](https://hckrnews.com/).

---

## 1. [Poland is now among the 20 largest economies](https://apnews.com/article/poland-economy-growth-g20-gdp-26fe06e120398410f8d773ba5661e7aa) ([1018 comments](https://news.ycombinator.com/item?id=48062117)) - 817 pts

**Article:** Poland has risen to become one of the world's 20 largest economies, a milestone reflecting 35 years of consistent economic growth following its peaceful transition from Soviet-era communism. The country's integration into the EU, shock therapy economic reforms, and attraction of significant foreign investment have driven this sustained expansion, making it a development model for Eastern Europe.

**Discussion:** The HN discussion debates whether Poland's economic rise represents genuine national achievement or is primarily driven by foreign corporations exploiting cheap educated labor. A Polish commenter describes the growth as "mind-blowing" yet anxiety-inducing due to inflation and generational divides, while others draw parallels to Singapore's FDI-driven development model and discuss the tension between macro-economic metrics and lived citizen experience.

---

## 2. [Singapore introduces caning for boys who bully others at school](https://www.theguardian.com/world/2026/may/06/singapore-caning-school-bullies) ([366 comments](https://news.ycombinator.com/item?id=48032968)) - 590 pts

**Article:** Singapore has announced the introduction of caning as a disciplinary measure for boys found to be bullying other students at school. The policy represents an expansion of Singapore's existing corporal punishment framework, which already permits caning in schools and the criminal justice system, to specifically target bullying behavior.

**Discussion:** The HN discussion features a nuanced debate about school discipline approaches, with many commenters criticizing "zero tolerance" policies as ineffective and sharing personal experiences of being punished alongside their bullies. Participants disagree on whether strict punishment or comprehensive mental health support better addresses bullying, with some advocating for individualized consequences tied to what students care about (like sports participation) rather than standardized penalties.

---

## 3. [Google broke reCAPTCHA for de-googled Android users](https://reclaimthenet.org/google-broke-recaptcha-for-de-googled-android-users) ([1414 comments](https://news.ycombinator.com/item?id=48067119)) - 510 pts

**Article:** Google has quietly integrated its reCAPTCHA verification system with Google Play Services, requiring version 25.41.30 or higher to pass QR code-based verification challenges on Android devices. This change effectively locks out users of de-Googled phones like GrapheneOS who lack Google's proprietary software, creating an asymmetry with iOS where Apple users can verify without installing Google apps. The dependency was built silently over at least seven months and forces privacy-conscious users to either accept Google's ecosystem or lose access to reCAPTCHA-protected websites.

**Discussion:** Commenters raise serious privacy and antitrust concerns, noting that remote attestation enables Google to link device identities across services through static encryption keys, effectively deanonymizing users. Many argue this creates an anticompetitive monopoly by forcing reliance on Google-authenticated hardware, while others report being locked out of essential services like medical portals and government sites. The consensus is that no practical privacy-preserving CAPTCHA alternative currently exists at scale.

---

## 4. [US Government releases first batch of UAP documents and videos](https://www.war.gov/UFO/) ([325 comments](https://news.ycombinator.com/item?id=48061938)) - 501 pts

**Article:** President Trump has directed the Department of War to declassify and release government files regarding Unidentified Anomalous Phenomena (UAP) through an initiative called PURSUE (Presidential Unsealing and Reporting System for UAP Encounters). The department, working with the Office of the Director of National Intelligence, is reviewing tens of millions of records spanning decades and releasing them in rolling batches every few weeks. Secretary of War Pete Hegseth described the materials as cases where the government cannot make a definitive determination about the observed phenomena.

**Discussion:** The HN discussion splits into three camps: skeptics who argue the videos show mundane objects like balloons, birds, and camera artifacts; those who see the release as a political distraction from issues like the Iran conflict and Epstein files; and a smaller group advocating for genuine scientific scrutiny before dismissing the materials. Many commenters provide detailed technical analysis of the infrared footage while debating the motivations behind the timing of the release.

---

## 5. [A recent experience with ChatGPT 5.5 Pro](https://gowers.wordpress.com/2026/05/08/a-recent-experience-with-chatgpt-5-5-pro/) ([569 comments](https://news.ycombinator.com/item?id=48071262)) - 405 pts

**Article:** Renowned mathematician Timothy Gowers reports that ChatGPT 5.5 Pro produced doctoral-level mathematical research in roughly two hours with minimal human guidance, improving existing bounds on a combinatorics problem by developing novel constructions using dissociated sets. Gowers reflects that this fundamentally changes research training, as LLMs now solve the "gentle problems" traditionally used to introduce PhD students to research. He suggests the mathematics community must establish new frameworks for evaluating AI-generated results and reconsider what constitutes meaningful research contributions.

**Discussion:** The HN discussion centers on whether AI progress is genuinely accelerating or approaching saturation, with many rejecting predictions of imminent slowdowns as unfalsifiable. Commenters express concern that AI's ability to solve intermediate-difficulty problems may undermine graduate student training, since these challenges traditionally serve as the entry point for developing research skills. Debates also emerge around prohibitive token costs limiting practical applications, and philosophical questions about whether mathematician-AI collaborations deserve equal recognition to purely human discoveries.

---

## 6. [Google Cloud Fraud Defence is just WEI repackaged](https://privatecaptcha.com/blog/google-cloud-fraud-defence-wei/) ([688 comments](https://news.ycombinator.com/item?id=48063199)) - 351 pts

**Article:** Google Cloud Fraud Defence is a 2026 commercial product that repackages Web Environment Integrity (WEI), the device attestation mechanism that standards bodies rejected in 2023. The system uses QR code challenges requiring users to scan with devices running Google Play Services, effectively gating internet access based on Google-approved hardware. The article argues Google circumvented public opposition by launching device attestation as a commercial service rather than a web standard, creating governance and privacy concerns while remaining vulnerable to bot bypass.

**Discussion:** The HN discussion centers on alarm about Google's increasing gatekeeping of the web through attestation and captcha systems, with commenters criticizing how captchas exploit free public labor for Google's benefit. A significant thread debates whether open-source and self-hosted alternatives can realistically compete, with some noting that improved Linux/OSS usability is accelerating migration away from managed platforms. Others express frustration that sites like DocuSign already require Chrome, seeing this as the beginning of a locked-down web controlled by a single corporation.

---

## 7. [Ask HN: We just had an actual UUID v4 collision](https://news.ycombinator.com/item?id=48060054) ([411 comments](https://news.ycombinator.com/item?id=48060054)) - 318 pts

**Article:** A developer reports that their system flagged a duplicate UUID v4 in a database of only about 15,000 records, with the original record created in 2025 and the collision occurring a year later. They were using the standard npm `uuid` package and simply calling `uuidv4()` for document IDs, making the collision statistically near-impossible under normal conditions.

**Discussion:** The top-voted comment explains that UUID v4 collisions are "surprisingly common" because their security depends on high-quality entropy sources, which can be silently broken by hardware defects or software bugs -- leading some high-assurance systems to explicitly forbid UUID v4. A large tangential discussion emerges about entropy sources, from Cloudflare's lava lamp wall to thermal noise in resistors. Many commenters suspect a broken or poorly-seeded random number generator rather than a true probabilistic collision in such a small dataset.

---

## 8. [A web page that shows you everything the browser told it without asking](https://sinceyouarrived.world/taken) ([589 comments](https://news.ycombinator.com/item?id=48062178)) - 288 pts

**Article:** "Since You Arrived Vol. IV" is an interactive art project that displays all the information a browser automatically reveals to websites without user consent, including location, device specs, installed fonts, screen dimensions, and a unique fingerprint barcode derived from these attributes. The page also documents which invasive techniques the creators deliberately chose not to use, serving as both a privacy wake-up call and an educational manifesto about web transparency.

**Discussion:** Many commenters note that the site's dramatic presentation is undermined by inaccuracies -- wrong locations, misidentified GPUs -- with several pointing to more reliable existing tools like EFF's Cover Your Tracks. A core debate emerges about whether browser data collection is inherently harmful or necessary for basic web functionality, with privacy advocates arguing browsers should give users more control over fingerprinting. The site's creator actively participates in the thread to address bug reports and accessibility concerns.

---

## 9. [Bun's experimental Rust rewrite hits 99.8% test compatibility on Linux x64 glibc](https://twitter.com/jarredsumner/status/2053047748191232310) ([246 comments](https://news.ycombinator.com/item?id=48073680)) - 261 pts

**Article:** Jarred Sumner announced that the experimental Rust rewrite of Bun (the JavaScript runtime originally written in Zig) now passes 99.8% of Bun's pre-existing test suite on Linux x64 glibc. This milestone demonstrates that the rewrite is approaching feature parity with the original implementation. The rewrite was reportedly accomplished in approximately six days with significant AI assistance.

**Discussion:** Commenters are split between marveling at the speed of the AI-assisted rewrite -- noting that LLMs excel at code translation when comprehensive test suites serve as specifications -- and expressing skepticism about whether 99.8% test pass rate masks maintainability issues, particularly given roughly 14,000 unsafe blocks in the resulting Rust code. A secondary debate concerns employment implications, with some worried that companies with superior AI models will gain unfair advantages while others argue open models will democratize these capabilities.

---

## 10. [Tesla is recalling its cheaper Cybertruck because the wheels might fall off](https://www.theverge.com/transportation/926741/tesla-cybertruck-cheaper-recall) ([212 comments](https://news.ycombinator.com/item?id=48063240)) - 261 pts

**Article:** Tesla is recalling all 173 of its $70,000 RWD Cybertruck Long Range models because faulty brake rotors could cause wheel studs to crack and separate from the hub, potentially causing wheels to fall off. The issue affects the 18-inch steel wheel variants, and Tesla has identified three warranty claims potentially linked to the problem but reports no collisions, injuries, or fatalities. This is the Cybertruck's 11th recall to date.

**Discussion:** The HN discussion reflects deep skepticism about Tesla's engineering quality, with commenters noting that "wheels might fall off" epitomizes a broader pattern of quality control failures across the Cybertruck's 11 recalls. Critics highlight fundamental design issues including poor towing capacity, aluminum frames prone to failure, and adhesive-bonded body panels. The conversation repeatedly compares the Cybertruck unfavorably to offerings from established manufacturers, though some defenders note it serves affluent owners primarily seeking self-driving features and electric range.

---

## 11. [EU calls VPNs "a loophole that needs closing" in age verification push](https://cyberinsider.com/eu-calls-vpns-a-loophole-that-needs-closing-in-age-verification-push/) ([364 comments](https://news.ycombinator.com/item?id=48072190)) - 256 pts

**Article:** The European Parliamentary Research Service has identified VPNs as a loophole that must be closed in the context of age-verification legislation, noting that VPN usage surged after mandatory age-verification laws took effect in the UK and US states. Some policymakers and child-safety advocates are calling for VPN access itself to require age verification, with England's Children's Commissioner proposing restricting VPNs to adults only. Privacy advocates strongly oppose this approach, warning it would undermine anonymity protections.

**Discussion:** Commenters widely view the "child protection" framing as a cover for broader surveillance and censorship objectives, drawing comparisons to internet control measures in China and Russia. Many argue that parents should bear responsibility rather than governments building mass monitoring infrastructure, and note that privacy-preserving alternatives like zero-knowledge proofs exist but are not being proposed. Some defenders acknowledge that easy online access to pornography differs from the pre-internet era, but most agree current proposals lack adequate privacy safeguards.

---

## 12. [Nintendo announces price increases for Nintendo Switch 2](https://www.nintendo.co.jp/corporate/release/en/2026/260508.html) ([231 comments](https://news.ycombinator.com/item?id=48059606)) - 237 pts

**Article:** Nintendo announced price increases effective May 2026, raising the Nintendo Switch 2 price by 10,000 yen in Japan (to 59,980 yen) and by $50 in the US (to $499.99), with comparable increases in Canada and Europe starting September 1st. The company cited "changes in market conditions" and the "global business outlook" as justification. Nintendo Switch Online subscription prices are also increasing.

**Discussion:** Discussion centers on whether the price hike is justified, with commenters citing rising memory chip prices and the weak yen as contributing factors (Japan's 20% increase versus the US's 11%). Many argue the Steam Deck offers better value for non-Nintendo game libraries, though exclusive titles remain Nintendo's key advantage. The prevailing sentiment reflects frustration that expensive hardware combined with expensive games "kills the Switch 2" for price-conscious consumers.

---

## 13. [Using Claude Code: The unreasonable effectiveness of HTML](https://twitter.com/trq212/status/2052809885763747935) ([389 comments](https://news.ycombinator.com/item?id=48071940)) - 231 pts

**Article:** Thariq (@trq212) argues that HTML is an unexpectedly effective format for working with Claude Code -- rather than using Markdown or plain text for specifications and documentation, using rich HTML produces substantially better results from AI coding assistants. The core thesis is that HTML's expressiveness and structure allow AI tools to generate higher-quality, more visually rich output compared to simpler formats.

**Discussion:** The HN discussion splits between those who see HTML as enabling richer formatting, better readability, and superior visual density compared to Markdown, and critics who argue HTML reduces human co-authorship capability, wastes tokens, and produces less readable diffs. A recurring theme is the fundamental tension between optimizing document formats for machine generation versus human editability and version control. Several commenters suggest hybrid approaches like MDX or Markdown with embedded HTML as a middle ground.

---

## 14. [Mojo 1.0 Beta](https://mojolang.org/) ([363 comments](https://news.ycombinator.com/item?id=48057901)) - 228 pts

**Article:** Mojo is a compiled programming language that combines Python's intuitive syntax, Rust's memory safety, and Zig's compile-time metaprogramming, with the 1.0 Beta (v1.0.0b1) released on May 7, 2026. The language is designed to be "AI-native," targeting diverse hardware including CPUs, GPUs, and ASICs without vendor lock-in, and it natively interoperates with Python to allow incremental performance optimization.

**Discussion:** Commenters express excitement about Mojo's technical features -- particularly its ownership model, compile-time metaprogramming, and SIMD support -- but harbor significant skepticism about practical viability. Major concerns include the abandonment of full Python compatibility (a core initial promise), the lack of basic features like string operations and negative indexing, and missing open-source availability limiting adoption. Critics compare Mojo unfavorably to established alternatives like Julia and CUDA.

---

## 15. [The Disappearance of the Public Bench](https://placesjournal.org/article/the-disappearance-of-the-public-bench/) ([157 comments](https://news.ycombinator.com/item?id=48042817)) - 212 pts

**Article:** The Places Journal article examines how public benches have been systematically removed from cities, driven largely by efforts to discourage homeless populations from using public spaces. The piece argues this represents a broader societal choice to eliminate shared infrastructure rather than address root causes like housing affordability and mental health services.

**Discussion:** Commenters debate the tension between providing public amenities and addressing visible homelessness, with some arguing bench removal reflects a societal failure to institutionalize or treat mentally ill and substance-dependent individuals. A significant theme is that affordable housing shortages are the root cause, with one commenter noting that "a $100 increase in median rent correlates to a 9% rise in homelessness." Others counter that meaningful interventions require earlier intervention rather than the removal of public infrastructure.

---

## 16. [Meta Shuts Down End-to-End Encryption for Instagram Messaging](https://www.pcmag.com/news/meta-shuts-down-end-to-end-encryption-for-instagram-dms-messaging) ([312 comments](https://news.ycombinator.com/item?id=48069192)) - 204 pts

**Article:** Meta has decided to shut down end-to-end encryption for Instagram direct messages, reversing a privacy feature that had been available to users. The move means Instagram DMs will no longer be protected from potential surveillance by Meta, governments, or other third parties, raising concerns about user privacy on one of the world's largest messaging platforms.

**Discussion:** The HN discussion centers on whether Meta removed E2E encryption for legitimate technical and UX reasons (few users opted in, complex device syncing, costly to maintain) or for profit-driven surveillance motives. A former Instagram employee confirmed the feature was technically "a mess." Broader concerns were raised about governments pressuring platforms to weaken encryption under child-safety justifications, with many commenters arguing that only open-source tools like Signal offer genuine privacy.

---

## 17. [Just Use Go](https://blainsmith.com/articles/just-fucking-use-go/) ([200 comments](https://news.ycombinator.com/item?id=48062997)) - 191 pts

**Article:** The article argues that Go is the superior choice for backend development because it prioritizes simplicity and practicality over complexity, offering readable code, single-binary deployment, and built-in concurrency through goroutines and channels. The author contends that Go's comprehensive standard library and tooling eliminate the need for frameworks, and advises developers to build monoliths rather than chasing trendy JavaScript frameworks or premature microservice architectures.

**Discussion:** Commenters are substantially divided on Go's merits. Critics point to verbose error handling (repeated `if err != nil`), lack of sum types, and struggles with complex database operations compared to Java/.NET or Rust. Supporters praise Go's "boring" predictability, fast compilation, and particular suitability for DevOps and AI-generated code, though many acknowledge it excels primarily for simple backend services rather than complex application domains.

---

## 18. [Mythical Man Month](https://martinfowler.com/bliki/MythicalManMonth.html) ([325 comments](https://news.ycombinator.com/item?id=48046436)) - 182 pts

**Article:** Martin Fowler reviews Fred Brooks's influential 1975 book *The Mythical Man-Month*, highlighting not just Brooks's famous law about adding staff to late projects but emphasizing the book's most valuable insight: the principle of conceptual integrity. Fowler argues that a well-coordinated system reflecting unified design ideas surpasses one cluttered with disconnected features, a concept that has fundamentally shaped his career philosophy around elegance and coherence in software architecture.

**Discussion:** The discussion reveals a fundamental disagreement about whether AI represents a genuine productivity breakthrough in software development. One camp claims AI delivers "10x output" for prototyping and boilerplate, while the opposing view argues that increased code volume does not equal faster software delivery, since conceptual integrity and delivery complexity remain the real bottlenecks. A middle ground emerges suggesting AI reduces accidental complexity but cannot solve the essential problems Brooks originally discussed.

---

## 19. [The hypocrisy of cyberlibertarianism](https://matduggan.com/the-intolerable-hypocrisy-of-cyberlibertarianism/) ([222 comments](https://news.ycombinator.com/item?id=48074952)) - 170 pts

**Article:** The article argues that the ideological foundation of the modern internet -- "cyberlibertarianism" as embodied by manifestos like Barlow's 1996 "Declaration of the Independence of Cyberspace" -- promised decentralized, free communities through deregulation but instead enabled massive corporate power and social harm. The promised utopia never materialized; instead, the internet became a tool for algorithmic manipulation, misinformation, and corporate control, while governance was offloaded to unpaid volunteer moderators.

**Discussion:** Commenters debate whether early internet idealism has truly failed, with some acknowledging that cyberlibertarianism has been co-opted by corporations that abandoned principles when scaling became inconvenient. Major disagreement centers on outcomes: optimists cite poverty reduction and democratic expansion as technological wins, while skeptics point to declining democracy indices and rising inequality despite internet access. A recurring tension emerges between those viewing technology as inherently beneficial versus those arguing it merely amplifies existing power imbalances.

---

## 20. [People Hate AI Art](https://mccue.dev/pages/5-8-26-ai-art) ([134 comments](https://news.ycombinator.com/item?id=48070548)) - 166 pts

**Article:** The author argues that using AI-generated art in presentations or branding signals poor judgment and damages credibility, because audiences overwhelmingly react negatively to it. The piece recommends alternatives including quick photo edits, hand-drawn doodles, or commissioned professional art, contending that the reputational cost of AI-generated images far outweighs any time savings.

**Discussion:** The community is deeply divided, with some agreeing that AI art signals "low social literacy" and damages credibility, while others contend this view reflects only a vocal minority and predict acceptance will grow as technology improves. Practical consensus emerges around one point: regardless of one's stance on AI art's legitimacy, using recognizably AI-generated images currently damages credibility with audiences who associate it with laziness and disrespect toward professional artists.

---

*Generated on 2026-05-09 from [hckrnews.com](https://hckrnews.com/) top submissions.*
