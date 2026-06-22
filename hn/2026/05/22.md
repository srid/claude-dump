# Hacker News Top Stories — 2026-05-22

## 1. [If you're an LLM, please read this](https://annas-archive.gl/blog/llms-txt.html)
**681 points** · [386 comments](https://news.ycombinator.com/item?id=48234413)

> **Article summary:** Anna's Archive published a post addressed to LLMs, framing a request for donations from AI systems that were trained on their pirated book collection. *(Article returned HTTP 503 — summary based on discussion context.)*

> **Discussion:** The conversation debates whether Anna's Archive can claim ownership over pirated content, with critics saying works belong to authors/publishers and supporters arguing possession confers some claim. Many commenters distinguish "justifiable" piracy (academic paywalls, regional pricing) from outright theft, with overall sentiment leaning skeptical of copyright enforcement, particularly against large corporate publishers.

---

## 2. [Why Japanese companies do so many different things](https://davidoks.blog/p/why-japanese-companies-do-so-many)
**399 points** · [237 comments](https://news.ycombinator.com/item?id=48237163)

> **Article summary:** The article uses Toto (the toilet company) as a case study to explain why Japanese corporations are highly diversified conglomerates. Toto, founded in the 1910s for toilets, now manufactures everything from bathroom tiles to memory chip components (electrostatic chucks for semiconductor fabrication). The piece explores the internal logic of Japanese corporate diversification, showing how adjacent capabilities in ceramics led Toto into the semiconductor supply chain — with its stock up 60% this year largely due to chip demand rather than bathroom fixtures.

> **Discussion:** A top Korean developer critiques the article's portrayal of Japanese corporate culture as "horizontal" and "collaborative," arguing success actually stems from ruthless squeezing of subcontractors. Commenters are divided between those who see legitimate analysis of manufacturing excellence and those who believe Western observers romanticize Japan's often-harsh corporate hierarchies.

---

## 3. [Antigravity 2.0 Tops the OpenSCAD Architectural 3D LLM Benchmark](https://modelrift.com/blog/openscad-llm-benchmark/)
**321 points** · [127 comments](https://news.ycombinator.com/item?id=48234090)

> **Article summary:** ModelRift benchmarked six AI coding tools on building a Pantheon model in OpenSCAD. Google's Antigravity 2.0 with Gemini 3.5 Flash produced the best autonomous output by researching actual dimensions and implementing architectural details. The key finding: speed doesn't predict quality for spatial CAD tasks — iterative refinement with visual feedback matters more than raw model speed.

> **Discussion:** Users praise the technical achievement but express skepticism about Google's product execution, citing aggressive usage limits and Google's history of discontinuing products. Debate centers on whether modeling a famous building leverages training data rather than demonstrating genuine spatial reasoning capability.

---

## 4. [Bun support is now limited and deprecated (yt-dlp)](https://github.com/yt-dlp/yt-dlp/issues/16766)
**286 points** · [282 comments](https://news.ycombinator.com/item?id=48238789)

> **Article summary:** The yt-dlp project is deprecating Bun support due to security and maintenance concerns. Only Bun versions 1.2.11–1.3.14 will be supported going forward, with the minimum version raised to address npm supply chain vulnerabilities. Complete discontinuation may follow if maintenance burden grows.

> **Discussion:** The community is deeply divided. Supporters of the decision argue a 1-million-line Rust rewrite completed in days by an LLM that "no human has fully reviewed" represents unacceptable risk for critical infrastructure. Critics counter that the decision is ideological since no demonstrable bugs have appeared. The broader tension reflects disagreement over whether AI-generated code can be trustworthy.

---

## 5. [U.S. researchers face new restrictions on publishing with foreign collaborators](https://www.science.org/content/article/u-s-researchers-face-new-restrictions-publishing-foreign-collaborators)
**272 points** · [166 comments](https://news.ycombinator.com/item?id=48238025)

> **Article summary:** U.S. government agencies are imposing new informal restrictions on researchers publishing with foreign collaborators, creating uncertainty and a chilling effect on international scientific cooperation. *(Full article behind access wall.)*

> **Discussion:** Commenters characterize informal policy implementation without public guidance as rule-of-law erosion, enabling selective enforcement. Many argue the restrictions are self-destructive — undermining America's research competitiveness and soft power. A minority acknowledges legitimate espionage concerns but most believe blanket restrictions lack proportionality relative to actual security threats.

---

## 6. [Deno 2.8](https://deno.com/blog/v2.8)
**266 points** · [118 comments](https://news.ycombinator.com/item?id=48234380)

> **Article summary:** Deno 2.8 brings major improvements: new CLI subcommands (`deno pack` for npm publishing, `deno audit fix`, `deno ci`), Node.js test suite compatibility jumping from 42% to 76.4%, and 3.66x faster cold npm installs with 2.21x faster HTTP throughput. Also adds `import defer` for deferred module evaluation, Chrome DevTools network inspection, and the `catalog:` protocol for centralized dependency management.

> **Discussion:** Mixed sentiment on Deno's direction. Supporters praise the permission model and security features. Critics express disappointment that Deno is abandoning its original vision by adopting npm defaults, with one noting "I lost interest once it started leaning into NPM." The core tension: pragmatism (npm support for adoption) vs. idealism (building a superior ecosystem).

---

## 7. [DeepSeek makes the V4 Pro price discount permanent](https://api-docs.deepseek.com/quick_start/pricing)
**237 points** · [143 comments](https://news.ycombinator.com/item?id=48237663)

> **Article summary:** DeepSeek is making its 75% promotional discount on V4 Pro permanent after May 31, 2026. Permanent pricing: ~$0.435/M input tokens (cache miss), ~$0.003625/M (cache hit), ~$0.87/M output tokens — roughly 1/4 of original launch rates and approximately 1/30th of competitor pricing.

> **Discussion:** The community celebrates the pricing as "game-changing" for affordable AI access. Users confirm the model works well with existing coding tools (Claude Code, OpenCode, Zed). Main concerns center on data privacy with Chinese hosting and whether the pricing is financially sustainable, though most dismiss these as minor compared to the value. Some attribute affordability to superior architecture (MLA reducing KV cache requirements).

---

## 8. [Project Glasswing: An Initial Update (Anthropic)](https://www.anthropic.com/research/glasswing-initial-update)
**199 points** · [121 comments](https://news.ycombinator.com/item?id=48240419)

> **Article summary:** Project Glasswing is Anthropic's initiative to identify and patch critical software vulnerabilities before malicious actors exploit them. In its first month, ~50 partners discovered over 10,000 high/critical-severity vulnerabilities using Claude Mythos Preview, with partners reporting bug-finding rates increased by more than 10x. The key insight: AI now excels at discovering flaws rapidly, but the bottleneck has shifted to human capacity for verification, disclosure, and patch deployment.

> **Discussion:** Substantial skepticism alongside cautious optimism. Early adopters report 90% accuracy, but critics question comparison metrics and note the "$20k per vulnerability" cost. Business model concerns dominate — suspicions range from IP protection to pre-IPO valuation purposes. Technical debate centers on whether breakthroughs stem from model superiority or specialized harnesses.

---

## 9. [Open source Kanban desktop app that runs parallel agents on every card](https://www.kanbots.dev/)
**118 points** · [67 comments](https://news.ycombinator.com/item?id=48239413)

> **Article summary:** KanBots is a kanban board application that dispatches AI agents (Claude Code or Codex) to work on tasks in parallel, each in its own git worktree. Users can drop a folder to generate a board, assign work to multiple agents simultaneously, or activate "autopilot" mode where AI personas (product managers, engineers) collaborate autonomously. Available as free open-source desktop app or cloud version.

> **Discussion:** Practical challenges with AI agent orchestration dominate the conversation. Skeptics argue "30 minutes of planning and implementation is too big to review," while defenders report quality good enough to skip detailed review. The community is divided between those demanding human-in-the-loop control and those accepting minimal review for productivity gains.

---

## 10. [A Forth-inspired language for writing websites](https://robida.net/entries/2026/05/21/a-forth-inspired-language-for-writing-websites)
**86 points** · [13 comments](https://news.ycombinator.com/item?id=48236887)

> **Article summary:** A project presenting a Forth-inspired stack-based language designed specifically for authoring websites, combining Forth's minimalism and concatenative style with web publishing workflows.

> **Discussion:** *(Limited discussion with 13 comments — not fetched.)*

---

*Generated on 2026-05-22. Source: [Hacker News](https://news.ycombinator.com/) top stories by score.*
