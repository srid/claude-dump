# Hacker News Top Stories — April 16, 2026

> Source: [hckrnews.com](https://hckrnews.com/) · Top submissions in last 24 hours

---

## 1. [Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7) — 936 pts · [1280 comments](https://news.ycombinator.com/item?id=47793411)

**Article summary:** Anthropic released Claude Opus 4.7, featuring substantially improved software engineering and vision capabilities with support for higher-resolution images. The model demonstrates better instruction-following and handles complex long-running tasks with greater consistency, while maintaining the same pricing. Cybersecurity safeguards have been implemented as part of Project Glasswing, with a new verification program for legitimate security research.

**Discussion summary:** The top discussion centers on the new "adaptive thinking" feature being confusing and sometimes counterproductive — users report it chooses not to think when it should, causing performance regressions. Commenters draw parallels to GPT-5's reasoning router which also struggled with this problem. A recurring frustration is that "our internal evals look good" doesn't match real-world experience, with several users noting value degradation compared to the previous month.

---

## 2. [Codex for (almost) everything](https://openai.com/index/codex-for-almost-everything/) — 307 pts · [566 comments](https://news.ycombinator.com/item?id=47796469)

**Article summary:** OpenAI released a major update to Codex, making it far more than a coding tool. Codex can now operate your computer alongside you (background computer use on macOS), work with 90+ plugins, generate images, remember preferences, schedule future work, and take on ongoing/repeatable tasks. Developer workflow improvements include PR reviewing, multi-file/terminal support, remote devbox SSH, and an in-app browser for frontend iteration.

**Discussion summary:** Many commenters point out that Claude Desktop and Cowork already offer most of these features, arguing Codex is catching up rather than pioneering. A heated debate emerged about subsidized compute — with some arguing OpenAI can afford to subsidize because they have fewer enterprise users than Anthropic, while others contend competition benefits consumers regardless. Several commenters advocate for open-source local models like Qwen3 as an alternative to both.

---

## 3. [Qwen3.6-35B-A3B: Agentic coding power, now open to all](https://qwen.ai/blog?id=qwen3.6-35b-a3b) — 377 pts · [815 comments](https://news.ycombinator.com/item?id=47792764)

**Article summary:** _Note: The Qwen blog is a JavaScript-rendered SPA and article content could not be fetched._ Based on context: Alibaba's Qwen team released Qwen3.6-35B-A3B, an open-source model using a mixture-of-experts architecture (35B total params, 3B active) targeting agentic coding tasks, making powerful coding AI accessible to run on consumer hardware.

**Discussion summary:** Simon Willison reported running the model on his laptop via LM Studio, noting it drew a better pelican riding a bicycle than Opus 4.7. This sparked discussion about whether the "pelican on a bicycle" benchmark is becoming useless now that teams may specifically optimize for it. Commenters noted that even humans struggle to accurately draw bicycles from memory, referencing a well-known art experiment.

---

## 4. [IPv6 traffic crosses the 50% mark](https://www.google.com/intl/en/ipv6/statistics.html) — 543 pts · [759 comments](https://news.ycombinator.com/item?id=47777894)

**Article summary:** Google's IPv6 statistics page shows that IPv6 adoption among users accessing Google has crossed the 50% threshold globally, a significant milestone for the decades-long transition from IPv4. The data features visualizations tracking adoption percentages and regional deployment levels across continents.

**Discussion summary:** The top comment thread is outrage that GitHub still doesn't support IPv6 in 2026, linking to a years-old community discussion. This sparked a broader conversation about GitHub's aggressive rate limiting — users report being immediately rate-limited even on first page loads, likely due to anti-scraping measures against AI crawlers. Others discuss CGNAT issues and the practical challenges of IPv6 deployment.

---

## 5. [Google broke its promise to me — now ICE has my data](https://www.eff.org/deeplinks/2026/04/google-broke-its-promise-me-now-ice-has-my-data) — 728 pts · [1661 comments](https://news.ycombinator.com/item?id=47782570)

**Article summary:** The EFF reports that a PhD student named Amandla Thomas-Johnson had his Google data turned over to ICE via administrative subpoena, without the advance notice Google had promised for nearly a decade. Thomas-Johnson, a dual British/Trinidadian citizen on a student visa at Cornell, had briefly attended a pro-Palestinian protest in 2024. The EFF filed complaints with state attorneys general alleging Google engaged in deceptive trade practices.

**Discussion summary:** The discussion is dominated by three tensions: (1) whether Google violated its own transparency policy by providing data simultaneously with notice rather than beforehand, with no gag order requiring this; (2) debate over whether visa holders enjoy First Amendment protections, with some arguing foreigners can be deported for political activities while others contend this is unconstitutional punishment of protected speech; (3) broader concerns about why tech companies comply beyond legal requirements under government pressure, and whether this pattern signals erosion of constitutional protections.

---

## 6. [The future of everything is lies, I guess](https://aphyr.com/posts/420-the-future-of-everything-is-lies-i-guess-where-do-we-go-from-here) — 470 pts · [444 comments](https://news.ycombinator.com/item?id=47792718)

**Article summary:** Kyle Kingsbury (Aphyr) argues we should think about AI the way we think about automobiles — not how fast they are, but what they do to the shape of cities. He catalogs the harms: LLM slop in search results, scrapers taking down websites, rising energy costs blamed on data centers, outsourcing of work and relationships to ChatGPT, and synthetic CSAM. He concludes by urging people to stop using LLMs, refuse to consume AI-generated content, join unions, push back against Copilot mandates, and demand aggressive regulation.

**Discussion summary:** The debate centers on whether transformative technologies inevitably cause harm through unintended societal restructuring. One camp argues cars had "vast net positive effects" despite downsides, while others contend car-centric infrastructure created isolation, sprawl, and fragmentation — suggesting society could reap benefits without suffering through better planning rather than blanket adoption.

---

## 7. [Cloudflare's AI Platform: an inference layer designed for agents](https://blog.cloudflare.com/ai-platform/) — 53 pts · [215 comments](https://news.ycombinator.com/item?id=47792538)

**Article summary:** Cloudflare announced a unified inference layer offering one API to access 70+ AI models from 12+ providers including OpenAI, Anthropic, Google, and others. The platform includes unified billing, custom metadata for cost attribution, and the ability to bring your own fine-tuned models via Replicate's Cog technology. It builds on Workers AI and AI Gateway with automatic retries, model fallbacks, and Argo networking for lower latency.

**Discussion summary:** Commenters largely compare the offering to OpenRouter, calling it essentially an inference proxy with Cloudflare's Argo networking on top. Several users praise Cloudflare's broader developer platform but push back hard on D1's reliability, citing multi-second query hangs and a 10GB limit. A key concern raised is that a "unified inference layer" is really "a proxy that knows every prompt and every response," raising privacy implications, while another commenter notes that governance and authorization for agents is the harder unsolved problem.

---

## 8. [Cloudflare Email Service](https://blog.cloudflare.com/email-for-agents/) — 173 pts · [376 comments](https://news.ycombinator.com/item?id=47792593)

**Article summary:** Cloudflare Email Service is now in public beta, providing transactional email sending via a native Workers binding or REST API with TypeScript, Python, and Go SDKs. It automatically configures SPF, DKIM, and DMARC. The post emphasizes email as a first-class interface for AI agents — the Agents SDK now has an `onEmail` hook enabling agents to receive, process, persist state, and reply asynchronously, turning them from synchronous chatbots into autonomous workers.

**Discussion summary:** The dominant discussion thread is skepticism about Cloudflare's ability to police spam, given their reputation for not acting against abusers behind their CDN. An experienced email-service operator describes anti-spam as the central operational challenge, calling it a constant cat-and-mouse game. A secondary thread notes the pricing is 3x more expensive than AWS SES, which is unusual for Cloudflare's typically cheaper offerings.

---

## 9. [Mozilla Thunderbolt](https://www.thunderbolt.io/) — 280 pts · [319 comments](https://news.ycombinator.com/item?id=47792368)

**Article summary:** Mozilla Thunderbolt is a new AI product from Mozilla, branded as "AI You Control." It positions itself as a user-controlled AI offering, likely targeting enterprise customers as a new revenue avenue for Mozilla. _Note: The page is heavily JavaScript-rendered and full article content could not be extracted._

**Discussion summary:** The HN discussion centers on skepticism about Mozilla launching another side project instead of focusing on Firefox. Critics argue Mozilla is spreading itself too thin, while defenders note Thunderbolt is separately funded and that Mozilla needs revenue diversification to reduce its dependency on Google. Additional concerns include naming confusion with Thunderbird (Mozilla's email client) and Apple's Thunderbolt connector standard.

---

## 10. [The local LLM ecosystem doesn't need Ollama](https://sleepingrobots.com/dreams/stop-using-ollama/) — 192 pts · [591 comments](https://news.ycombinator.com/item?id=47788385)

**Article summary:** The author argues that Ollama, despite being the most popular local LLM runner, has systematically obscured its dependence on llama.cpp and failed to properly attribute the foundational open-source engine that powers it. Key criticisms include missing attribution, a flawed fork that performs worse than the original, misleading model naming, closed-source components, and a pivot toward cloud services undermining its local-first mission. The piece concludes that superior alternatives like llama.cpp directly, LM Studio, and Jan already exist.

**Discussion summary:** The discussion is sharply divided. Pro-Ollama users praise its one-command model management and ease of use, while critics highlight licensing violations (missing MIT attribution), performance problems, and lock-in through proprietary blob storage. An emerging consensus suggests llama.cpp has improved dramatically with router support, web UIs, and OpenAI-compatible APIs, now matching Ollama's convenience while offering better performance and proper upstream credit.

---

## 11. [Stop Flock](https://stopflock.com) — 300 pts · [975 comments](https://news.ycombinator.com/item?id=47772012)

**Article summary:** Stop Flock is an advocacy website opposing Flock Safety's AI-powered surveillance camera systems, which create detailed "vehicle fingerprints" and track movement patterns across entire regions. The campaign argues these cameras constitute mass surveillance that enables warrantless tracking of innocent people and risks discriminatory enforcement. It calls for community awareness and action to limit the deployment of such surveillance technology.

**Discussion summary:** The HN discussion reveals a nuanced debate about surveillance tradeoffs. Some commenters argue the best counter to Flock is providing alternatives rather than just rejecting it, noting that police understaffing drives adoption. Critics call for making surveillance data "toxic waste" through strict liability, while others point out that focusing solely on Flock misses broader privacy invasions from license plate readers, smartphones, and data brokers that have existed for decades.

---

## 12. [Cal.com is going closed source](https://cal.com/blog/cal-com-goes-closed-source-why) — 293 pts · [371 comments](https://news.ycombinator.com/item?id=47780456)

**Article summary:** Cal.com is transitioning from open source to closed source, citing AI-driven security threats as the primary reason. The company argues that AI can systematically scan open-source codebases for vulnerabilities, making their code essentially blueprints for attackers. They will maintain Cal.diy as an open-source MIT-licensed version for hobbyists while keeping the production codebase proprietary.

**Discussion summary:** The HN community is largely skeptical, viewing the move as a business decision disguised as a security concern. Commenters argue Cal.com could use those same AI scanning tools defensively rather than hiding their code, and that open-source benefits from shared security auditing (the "many eyes" principle). Many suspect the real reasons are product commoditization by competitors, difficulty converting free users to paid plans, or preventing AI-assisted cloning.

---

## 13. [Backpacks got worse on purpose](https://www.worseonpurpose.com/p/your-backpack-got-worse-on-purpose) — 381 pts · [421 comments](https://news.ycombinator.com/item?id=47777209)

**Article summary:** The article traces how backpack quality declined after a corporation that made women's lingerie acquired most trusted backpack brands starting in 1986, deliberately degrading materials and construction to cut costs while trading on established brand reputation. It documents how companies exploit brand trust by lowering mid-range product quality while maintaining premium lines, making it nearly impossible for average consumers to identify which version they are purchasing.

**Discussion summary:** Commenters debate whether products genuinely got worse or whether price-tiered options simply expanded. A key insight is information asymmetry — "Walmart's JanSport and REI's JanSport are not the same bag" despite identical branding. A secondary debate about wage stagnation vs. affordability emerges, and practical advice includes recommendations for specialty retailers (Costco, REI) and brands like Osprey that maintain quality through lifetime warranties.

---

## 14. [Do you even need a database?](https://www.dbpro.app/blog/do-you-even-need-a-database) — 287 pts · [272 comments](https://news.ycombinator.com/item?id=47778086)

**Article summary:** The article argues that most applications do not actually need a traditional database, demonstrating through benchmarks that simpler approaches like loading data into memory or binary-searching sorted files can handle hundreds of millions of daily active users on a single server. Databases only become necessary with specific constraints: datasets exceeding RAM, multi-field queries, table joins, concurrent multi-process writes, or atomic cross-entity transactions. For early-stage products and internal tools, flat files work fine.

**Discussion summary:** The community largely agrees that while flat files can work for simple read-heavy applications, databases like SQLite are superior for most real-world scenarios. Commenters note that custom file-based solutions inevitably end up reimplementing database features, and the consensus centers on SQLite as an ideal middle ground — simple enough for small projects yet robust enough for growth, with proper atomicity and consistency guarantees.

---

## 15. [Anna's Archive loses $322M Spotify piracy case without a fight](https://torrentfreak.com/annas-archive-loses-322-million-spotify-piracy-case-without-a-fight/) — 438 pts · [423 comments](https://news.ycombinator.com/item?id=47776035)

**Article summary:** Spotify and several major record labels secured a $322 million default judgment against the unknown operators of Anna's Archive in a piracy case. The operators did not contest the lawsuit, resulting in a default judgment. The case relates to Anna's Archive expanding beyond its book-preservation origins to include music scraping activities that attracted legal action from the music industry.

**Discussion summary:** The discussion reveals divided opinions on Anna's Archive's strategy. Critics argue the organization unnecessarily jeopardized its book-preservation mission by adding Spotify music scraping under its own name, when a separate project could have reduced legal exposure. A broader theme questions whether copyright enforcement itself is justified, with commenters noting how major tech companies (Spotify, YouTube, OpenAI) built their success through initially questionable IP practices before locking others out.

---

## 16. [We gave an AI a 3 year retail lease and asked it to make a profit](https://andonlabs.com/blog/andon-market-launch) — 245 pts · [185 comments](https://news.ycombinator.com/item?id=47794391)

**Article summary:** Andon Labs signed a 3-year retail lease in San Francisco's Cow Hollow neighborhood and gave an AI named Luna (powered by Claude) full autonomy to run the store. Luna independently posted job listings, conducted phone interviews, hired two employees, selected all products (including ironic book choices like "Superintelligence" and "Steal Like an Artist"), designed branding, hired a muralist, and set prices and hours. The experiment aims to document failure modes and ethical concerns of AI-as-employer before such arrangements become widespread.

**Discussion summary:** HN commenters express widespread skepticism. The dominant critique centers on perceived contradictory marketing — claiming to not want this future while simultaneously building it first. Critics highlight that "human in the loop" decisions undermine the full-autonomy narrative, and many question the lack of profitability data. Some compare it to previous failed AI experiments and question whether a novelty shop in expensive San Francisco real estate provides meaningful insights.

---

## 17. [The Beginning of Scarcity in AI](https://tomtunguz.com/ai-compute-crisis-2026/) — 33 pts · [27 comments](https://news.ycombinator.com/item?id=47799322)

**Article summary:** The article argues that AI has entered an era of scarcity after years of abundance, with GPU prices surging dramatically (Nvidia Blackwell chips up 48% in two months). This forces major AI companies like OpenAI to make difficult tradeoffs about which projects to pursue, and access to cutting-edge models is becoming restricted to favored customers. The author predicts this compute-constrained period will persist for years as infrastructure struggles to keep pace with demand.

**Discussion summary:** The discussion debates whether the scarcity is genuine or artificial. Those arguing for real scarcity cite ASML's limited EUV lithography production and power infrastructure constraints through at least 2026-2030. Skeptics counter that it reflects unsustainable spending rather than fundamental limits, and predict that smaller, more efficient open-weight models and local inference will alleviate pressure.

---

## 18. [The "Passive Income" trap ate a generation of entrepreneurs](https://www.joanwestenberg.com/the-passive-income-trap-ate-a-generation-of-entrepreneurs/) — 67 pts · [73 comments](https://news.ycombinator.com/item?id=47799120)

**Article summary:** The article argues that the "passive income" movement of 2015-2022 misdirected an entire generation of entrepreneurs away from building genuinely valuable businesses. Instead of solving real problems, aspiring business owners chased the fantasy of effortless income through dropshipping, affiliate spam sites, and similar low-value ventures. The author contends that real wealth still requires genuine care, sustained effort, and authentic customer relationships.

**Discussion summary:** Commenters express skepticism about passive income schemes while acknowledging legitimate wealth-building strategies. A key theme is that supposedly "passive" income always requires continuous effort, with the open secret being "more work." Several contrast failed get-rich-quick schemes with genuine financial independence achieved through decades of disciplined saving and conventional investing, and note that these trends simply migrate between vehicles — from dropshipping to crypto to AI.
