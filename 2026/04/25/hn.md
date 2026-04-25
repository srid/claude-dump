# Hacker News Top Stories - April 25, 2026

Top 20 submissions from the last 24 hours, sorted by points. Sourced from [hckrnews.com](https://hckrnews.com/).

---

## 1. [DeepSeek v4](https://api-docs.deepseek.com/news/news260424) ([1545 comments](https://news.ycombinator.com/item?id=47884971))

**Article:** DeepSeek launched two new open-source models: DeepSeek-V4-Pro (1.6T total / 49B active params) and DeepSeek-V4-Flash (284B total / 13B active params). Both support 1M context length and deliver performance comparable to leading closed-source competitors, with the Flash variant offering faster responses at lower costs. The API is available immediately and compatible with both OpenAI and Anthropic API formats.

**Discussion:** Cautious optimism about V4's capabilities, particularly for math and research. Significant threads debate whether frontier AI labs are profitable on inference costs, with skeptics arguing API pricing masks subsidies. A recurring theme questions why Western companies produce inferior documentation compared to DeepSeek's.

---

## 2. [I cancelled Claude: Token issues, declining quality, and poor support](https://nickyreinert.de/en/2026/2026-04-24-claude-critics/) ([561 comments](https://news.ycombinator.com/item?id=47892019))

**Article:** The author cancelled their Claude subscription due to confusing and poorly explained token limits (including a mysterious monthly cap), declining solution quality where the model proposed "cheap workarounds" rather than proper implementations, and inadequate customer support that provided generic responses without addressing the actual problem.

**Discussion:** A fundamental divide about AI coding effectiveness. Some criticize Claude Sonnet for missing requirements and generating excessive code, while others claim it excels at systems-level work. The broader discussion highlights that results vary dramatically based on workflow approach -- those who micromanage AI task-by-task report better outcomes than those submitting complete specifications upfront.

---

## 3. [Google plans to invest up to $40B in Anthropic](https://www.bloomberg.com/news/articles/2026-04-24/google-plans-to-invest-up-to-40-billion-in-anthropic) ([775 comments](https://news.ycombinator.com/item?id=47892074))

**Article:** Bloomberg reports that Google plans to invest up to $40 billion in Anthropic in cash and compute, further deepening its bet on the AI startup. *(Full article behind Bloomberg paywall.)*

**Discussion:** Top comments frame this as "vendor financing" rather than a pure investment, with Google securing revenue from Anthropic's compute purchases while hedging against Anthropic winning the AI race. Significant skepticism around Anthropic's $380B valuation, particularly given competitors like DeepSeek achieved comparable results with less capital. Broader concern about systemic risk from circular AI funding loops.

---

## 4. [US special forces soldier arrested after allegedly winning $400k on Maduro raid](https://www.cnn.com/2026/04/23/politics/us-special-forces-soldier-arrested-maduro-raid-trade) ([731 comments](https://news.ycombinator.com/item?id=47882645))

**Article:** A U.S. special forces soldier was arrested for using classified information about a planned operation in Venezuela to profit on a prediction market, reportedly winning approximately $400,000 by betting on events he knew would occur.

**Discussion:** The primary debate centers on whether prosecuting this soldier while powerful government officials escape similar accountability represents selective justice. Secondary discussions examine the operational risks of telegraphing classified military plans through betting markets and broader questions about whether prediction markets facilitate insider trading on geopolitical events.

---

## 5. [New 10 GbE USB adapters are cooler, smaller, cheaper](https://www.jeffgeerling.com/blog/2026/new-10-gbe-usb-adapters-cooler-smaller-cheaper/) ([302 comments](https://news.ycombinator.com/item?id=47899053))

**Article:** *(Article returned 403 -- Jeff Geerling reviews new generation USB 10 Gigabit Ethernet adapters that are more power-efficient, compact, and affordable than previous models.)*

**Discussion:** Users extensively debate the confusing USB version nomenclature (3.2 Gen 2x2, etc.). A secondary thread praises the Framework expansion card announcement and discusses cost-effective alternatives like refurbished enterprise 10GbE equipment, with commenters highlighting that fiber-based solutions are more power-efficient than copper for high-speed networking.

---

## 6. [Sabotaging projects by overthinking, scope creep, and structural diffing](https://kevinlynagh.com/newsletter/2026_04_overthinking/) ([129 comments](https://news.ycombinator.com/item?id=47890799))

**Article:** The author explores how overthinking and scope creep sabotage personal projects. He contrasts successful projects executed with clear, minimal criteria (like building a kitchen shelf) against prolonged research efforts on language design and CAD tools that never reach completion, concluding with a commitment to "just do things" with focused scope.

**Discussion:** Many commenters relate personally, sharing experiences with PhD research, side projects, and professional work where initial enthusiasm gets lost in scope expansion. A key insight: setting deadlines and locking scope early prevents projects from expanding indefinitely. "The people who actually finish things lock scope early, ignore better ideas, ship v1."

---

## 7. [Norway set to become latest country to ban social media for under 16s](https://www.bloomberg.com/news/articles/2026-04-24/norway-wants-kids-to-be-kids-with-social-media-ban-for-under-16s) ([468 comments](https://news.ycombinator.com/item?id=47891019))

**Article:** Norway is joining a growing list of countries implementing social media bans for children under 16, citing concerns about mental health and childhood development. *(Full article behind Bloomberg paywall.)*

**Discussion:** Skepticism about whether this global movement is genuinely organic, with one user arguing "there is a zero percent chance this is organic" given the coordinated timing across countries. Defenders counter that shared concerns about social media's harms explain the alignment. Tension between child protection advocates and those worried about privacy implications of age verification systems.

---

## 8. [Firefox Has Integrated Brave's Adblock Engine](https://itsfoss.com/news/firefox-ships-brave-adblock-engine/) ([217 comments](https://news.ycombinator.com/item?id=47897891))

**Article:** Firefox 149 quietly integrated adblock-rust, Brave's open-source Rust-based ad and tracker blocking engine, without mentioning it in release notes. The feature is currently disabled by default but can be enabled through about:config settings with custom filter lists like EasyList.

**Discussion:** An official Firefox representative clarified they're "testing one of their open source Rust components" rather than bundling a complete ad-blocking system. Key debate about whether this signals eventual deprecation of MV2 extensions (which enable uBlock Origin), though Firefox's MV3 implementation retains the `webRequestBlocking` permission that Chrome removed.

---

## 9. [How to be anti-social -- a guide to incoherent and isolating social experiences](https://nate.leaflet.pub/3mk4xkaxobc2p) ([344 comments](https://news.ycombinator.com/item?id=47888372))

**Article:** An essay exploring patterns of social anxiety and avoidance behavior, examining how people inadvertently create incoherent and isolating social experiences through specific behavioral patterns.

**Discussion:** Commenters largely interpreted the "anti-social" behaviors as describing social anxiety rather than true antisocial personality traits. Many shared relatable experiences of freezing during interviews, ruminating over awkward moments, and self-sabotaging. Significant debate about whether therapy helps, with some comparing telling someone to "just be social" to telling a diabetic to produce insulin through willpower.

---

## 10. [Spinel: Ruby AOT Native Compiler](https://github.com/matz/spinel) ([87 comments](https://news.ycombinator.com/item?id=47887334))

**Article:** Spinel is a Ruby AOT (ahead-of-time) compiler by Matz himself that converts Ruby source code into standalone native executables. It uses whole-program type inference to generate optimized C code, achieving approximately 11.6x faster performance than CRuby. Notably, Spinel is self-hosting: the compiler backend is written in Ruby and compiles itself into a native binary.

**Discussion:** Excitement and skepticism about Matz's new project, built in about a month with Claude's help. Users emphasize significant limitations: no eval, metaprogramming, threads, or dynamic features that define Ruby's flexibility. Tension between Ruby's powerful dynamism and the performance gains possible through AOT compilation.

---

## 11. [There Will Be a Scientific Theory of Deep Learning](https://arxiv.org/abs/2604.21691) ([150 comments](https://news.ycombinator.com/item?id=47893779))

**Article:** An academic paper arguing that a rigorous scientific theory of deep learning is achievable, examining why neural networks generalize so effectively despite their massive overparameterization.

**Discussion:** Cautious optimism among researchers. One practitioner notes "the question 'why do neural networks work better than other models?' is getting pretty close to a solid answer," pointing to implicit regularization as compression. Skeptics argue understanding such complex systems may require something orders of magnitude larger than the models themselves. Practical breakthroughs have consistently preceded theoretical understanding.

---

## 12. [Ubuntu 26.04](https://lwn.net/Articles/1069399/) ([257 comments](https://news.ycombinator.com/item?id=47885596))

**Article:** LWN reviews Ubuntu 26.04, the latest LTS release from Canonical, covering its new features, GNOME updates, and system changes.

**Discussion:** Mixed reactions -- praise for stability but criticism of specific design choices. Major complaints center on GNOME's removal of middle-click paste by default, password manager accessibility issues during authentication, and the persistent push toward Snap packages. Many suggest alternatives like Linux Mint, Debian, or KDE Plasma, with frustration that Canonical continues pushing Snap despite user resistance.

---

## 13. [Replace IBM Quantum back end with /dev/urandom](https://github.com/yuvadm/quantumslop/blob/25ad2e76ae58baa96f6219742459407db9dd17f5/URANDOM_DEMO.md) ([44 comments](https://news.ycombinator.com/item?id=47897647))

**Article:** Researcher Yuval Adam demonstrated that replacing IBM's quantum backend with `/dev/urandom` (random number generator) produced statistically identical results for recovering a 17-bit ECC key, questioning the legitimacy of a celebrated quantum computing achievement.

**Discussion:** The core debate is whether Project Eleven's quantum computing submission was genuinely quantum-based or merely classical. Multiple commenters noted the winning submission showed signs of being AI-generated code without quantum expertise, and that a 17-bit key is trivially brute-forceable classically -- making this more of a validation failure than a quantum breakthrough.

---

## 14. [My audio interface has SSH enabled by default](https://hhh.hn/rodecaster-duo-fw/) ([95 comments](https://news.ycombinator.com/item?id=47894747))

**Article:** The author discovered their RODE Caster Duo audio interface had SSH enabled by default with hardcoded public keys, allowing remote access. After analyzing the firmware through network traffic capture, they created custom firmware to enable password authentication and gain root access. They reported the finding to RODE but received no response.

**Discussion:** Debate about balancing device openness with security. One commenter argues signed firmware and open firmware aren't opposites -- manufacturers should let owners enroll their own keys. Others praise Rode for shipping unsigned, unencrypted firmware enabling easy modification. LLMs have apparently democratized firmware analysis for non-specialists.

---

## 15. [Show HN: Tolaria -- Open-source macOS app to manage Markdown knowledge bases](https://github.com/refactoringhq/tolaria) ([137 comments](https://news.ycombinator.com/item?id=47882697))

**Article:** Tolaria is an open-source macOS application for managing Markdown-based knowledge bases with a git-first approach, positioning itself as an alternative to Obsidian that emphasizes structured organization.

**Discussion:** Community praised the clean UI and git-first approach for AI collaboration. Criticism emerged around its Tauri-based web wrapper implementation, with users advocating for native macOS development. Concerns about long-term sustainability of single-developer projects and requests for mobile support and improved markdown editing.

---

## 16. [Why I Write (1946)](https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/why-i-write/) ([81 comments](https://news.ycombinator.com/item?id=47884768))

**Article:** George Orwell's classic 1946 essay reflecting on the creative impulse, exploring his four great motives for writing: sheer egoism, aesthetic enthusiasm, historical impulse, and political purpose.

**Discussion:** Readers appreciated Orwell's eloquent reflection on the creative impulse, particularly his metaphor of writing as driven by "some demon" that compels authors forward. A secondary conversation explored whether *Animal Farm* qualifies as a novel (at ~30,000 words it's classified as a novella), and commenters noted that Orwell's predicted "failure" -- *Nineteen Eighty-Four* -- became one of literature's most enduring works.

---

## 17. [SDL Now Supports DOS](https://github.com/libsdl-org/SDL/pull/15377) ([110 comments](https://news.ycombinator.com/item?id=47892291))

**Article:** The SDL (Simple DirectMedia Layer) library has added official support for DOS as a target platform, enabling developers to build SDL-based applications and games that run on DOS systems.

**Discussion:** The community largely celebrated this as a fun technical achievement, with many joking about creating nested environments (DOSBox running in DOS). Practical notes emerged around joystick calibration and DJGPP's 32-bit memory extender requirements. Supporters noted existing DOS usage in industrial control systems and FreeDOS's prevalence due to Turkish computer sales regulations.

---

## 18. [Habitual coffee intake shapes the microbiome, modifies physiology and cognition](https://www.nature.com/articles/s41467-026-71264-8) ([256 comments](https://news.ycombinator.com/item?id=47885377))

**Article:** A Nature study examining how regular coffee consumption shapes gut microbiome composition and influences both physiological processes and cognitive function.

**Discussion:** Discussion centers on personal experiences with caffeine withdrawal rather than the study's microbiome findings. Multiple commenters report experiencing prolonged anhedonia (3-6 months) after quitting daily coffee. Others counter that individual responses vary dramatically based on genetics and metabolism, with some experiencing no withdrawal while others find caffeine aggravates anxiety and sleep.

---

## 19. [OpenAI releases GPT-5.5 and GPT-5.5 Pro in the API](https://developers.openai.com/api/docs/changelog) ([151 comments](https://news.ycombinator.com/item?id=47894000))

**Article:** OpenAI released GPT-5.5 and GPT-5.5 Pro as API-accessible models, expanding developer access to their latest frontier model capabilities.

**Discussion:** Mixed reactions. Some users praise superior coding capabilities -- "achieved 90% perfect on first try in about a fourth of the time" compared to competitors -- while others criticize laziness and significantly higher pricing (approximately 7x more expensive than competing models). Key concerns include token efficiency, safety filter restrictions affecting legitimate use cases, and whether incremental improvements justify the cost.

---

## 20. [The Classic American Diner](https://blogs.loc.gov/picturethis/2026/04/the-classic-american-diner/) ([151 comments](https://news.ycombinator.com/item?id=47894435))

**Article:** A Library of Congress photo essay exploring the history, architecture, and cultural significance of the classic American diner, featuring historical photographs from its archives.

**Discussion:** Three main themes: praise for service excellence and business fundamentals at well-run diners, discussion of pricing paradoxes (a 1959 burger at 45 cents should cost $5.14 today, yet actual diner burgers remain cheap), and nostalgia for disappearing authentic diners. "It's usually just doing the basics better than everyone else that makes all the difference."

---

*Generated on 2026-04-25 from Hacker News top stories. Note: hckrnews.com returned HTTP 503; data sourced directly from news.ycombinator.com. Jeff Geerling's article (#5) returned HTTP 403 when fetching content.*
