# Hacker News Top Stories — May 30, 2026

> Source: [hckrnews.com](https://hckrnews.com/) / [Hacker News API](https://hacker-news.firebaseio.com/)
> Generated: 2026-05-30

---

## 1. [Pandoc Templates](https://pandoc-templates.org/) — [46 comments](https://news.ycombinator.com/item?id=48334515)

**339 points**

**Article:** Pandoc Templates is a curated directory of community-created Pandoc templates that help users convert Markdown documents into various professional formats like PDF, HTML, DOCX, and EPUB. The site catalogs dozens of templates sorted by document type and output format, enabling writers, academics, and professionals to quickly generate polished documents from plain-text Markdown files without extensive formatting work.

**Discussion:** Commenters celebrate Pandoc as a powerful document conversion tool while debating its practical limitations, particularly around PDF generation and the learning curve for average users. Many suggest complementary tools like Quarto, Typst, and Zettlr, with several sharing successful workflows for academic papers and professional documents. A recurring theme is that Markdown, despite its downsides, covers what 99% of people need.

---

## 2. [OpenRouter raises $113M Series B](https://openrouter.ai/announcements/series-b) — [131 comments](https://news.ycombinator.com/item?id=48338660)

**307 points**

**Article:** OpenRouter has secured $113 million in Series B funding led by CapitalG (Alphabet's growth fund), with participation from NVIDIA Ventures, ServiceNow, MongoDB, Snowflake, and Databricks. The company operates as a routing and gateway layer between AI agents and model providers, handling routing, reliability, cost optimization, and compliance for production AI applications. Their weekly token volume has grown from 5 trillion to 25 trillion tokens over six months, serving millions of developers.

**Discussion:** Commenters debate OpenRouter's long-term viability as an AI API aggregator, with many praising its convenience for trying out multiple models and its billing caps, while skeptics question whether a 5% markup justifies intermediating direct provider relationships at scale. The discussion reveals tension between the immediate practical benefits of a unified interface and fundamental business model concerns about whether the service can maintain competitive advantages against direct provider integration.

---

## 3. [Zig: Build System Reworked](https://ziglang.org/devlog/2026/#2026-05-26) — [198 comments](https://news.ycombinator.com/item?id=48334048)

**305 points**

**Article:** The Zig devlog describes a significant architectural overhaul of the build system that separates the "configurer" process (which compiles user build.zig logic in debug mode) from the "maker" process (which executes the build graph in optimized release mode). This redesign yielded substantial performance gains, with `zig build --help` improving from approximately 150ms to 14.3ms, a 90% reduction.

**Discussion:** Commenters express enthusiasm about Zig's improvements, particularly the new async/await IO mechanism, while debating trade-offs like dynamic dispatch overhead versus cleaner code style. Broader tensions surface around Zig's positioning versus Rust, with some arguing Zig's lack of memory safety makes it obsolete while others value its transparency and control for real-time and embedded systems.

---

## 4. [Openrsync: An implementation of rsync, by the OpenBSD team](https://github.com/kristapsdz/openrsync) — [126 comments](https://news.ycombinator.com/item?id=48334854)

**284 points**

**Article:** Openrsync is a BSD-licensed, clean-room implementation of the rsync file synchronization tool created as part of the rpki-client initiative, maintaining compatibility with modern rsync versions while accepting a subset of command-line arguments. The project emphasizes security through OpenBSD's protective features like pledge(2) and unveil(2), and consists of approximately 10,000 lines of C.

**Discussion:** Commenters debate openrsync's practical utility and the philosophical differences between BSD and GPL licensing, with arguments about whether permissive licenses better preserve software freedom than copyleft approaches. Key concerns include feature parity with the original rsync, such as trailing slash behavior and missing flags like --exclude.

---

## 5. [EY Canada published a cybersecurity report and most citations were hallucinated](https://gptzero.me/investigations/ey) — [100 comments](https://news.ycombinator.com/item?id=48339580)

**232 points**

**Article:** GPTZero investigated Ernst & Young Canada's 2025 cybersecurity report on loyalty program fraud and discovered that over 72% of its 27 citations were hallucinated, featuring broken URLs, nonexistent sources, and fabricated references to major publishers like McKinsey and Forbes. The report also contained contradictory statistics, misattributed claims, and AI-generated text that has since circulated through media outlets and AI search tools, potentially poisoning the information ecosystem.

**Discussion:** Commenters focus on two main critiques: that EY's hallucinated citations exemplify a broader organizational failure where AI output is not being vetted by knowledgeable people, and whether vetting AI output actually saves time at all, with many arguing it takes longer than creating work from scratch. A recurring theme questions whether consulting firms like EY ever provided genuine value or simply offered "CYA" cover for executive decisions.

---

## 6. [Voxel Space (2017)](https://s-macke.github.io/VoxelSpace/) — [48 comments](https://news.ycombinator.com/item?id=48336564)

**230 points**

**Article:** This article explains Voxel Space, a 2.5D terrain rendering technique popularized by the 1992 helicopter game Comanche, which creates convincing 3D landscapes by drawing vertical lines sampled from height and color maps with perspective projection. The algorithm renders front-to-back with occlusion buffers and level-of-detail adjustments, enabling real-time terrain rendering on CPU-limited 1990s hardware without requiring a GPU.

**Discussion:** Commenters debate whether height-map-based rendering truly qualifies as "voxel" rendering, with some arguing these are just extruded prisms rather than true volumetric voxels. The discussion is also filled with nostalgia for games like Comanche and Magic Carpet, with appreciation for the clever optimization tricks required on early 1990s hardware.

---

## 7. [What are locusts and what happened to them?](https://explosion-scratch.github.io/locusts/) — [45 comments](https://news.ycombinator.com/item?id=48281772)

**191 points**

**Article:** The article tells the story of the Rocky Mountain Locust, a grasshopper species that could transform into swarming locusts through a biological process called polyphenism, and whose 1877 Albert's Swarm of 12.5 trillion insects devastated the Great Plains. The species mysteriously went extinct by 1902 because settlers inadvertently destroyed their specialized river-valley breeding grounds through irrigation and plowing.

**Discussion:** Commenters praised the article's interactive web design featuring animated grasshoppers, and discussed the fascinating biology of phase polyphenism where a single genotype produces dramatically different physical forms. Several drew parallels to other endangered species like monarch butterflies, while others shared personal experiences witnessing locust plagues.

---

## 8. [Accenture to acquire Ookla](https://newsroom.accenture.com/news/2026/accenture-to-acquire-ookla-to-strengthen-network-intelligence-and-experience-with-data-and-ai-for-enterprises) — [91 comments](https://news.ycombinator.com/item?id=48337987)

**181 points**

**Article:** Accenture has agreed to acquire Ookla, the Seattle-based network intelligence company behind Speedtest, Downdetector, Ekahau, and RootMetrics, from Ziff Davis to strengthen its AI and data capabilities for enterprise clients. The deal combines Ookla's platform processing over 1,000 data attributes per test from 250+ million monthly consumer tests with Accenture's consulting services.

**Discussion:** Commenters debate whether the reported $1.2 billion valuation is justified, with most agreeing the real value lies in Ookla's massive user base and enterprise data contracts rather than the underlying technology. Discussion also covers Accenture's strategic pivot toward data businesses as AI pressures consulting revenues, how ISPs game speed tests, and alternative tools like fast.com.

---

## 9. [Navier-Stokes fluid simulation explained with Godot game engine](https://myzopotamia.dev/navier-stokes-fluid-simulation-explained-with-godot) — [22 comments](https://news.ycombinator.com/item?id=48286745)

**158 points**

**Article:** This tutorial demonstrates how to build a grid-based fluid simulation using the Godot game engine, prioritizing educational clarity over performance. It covers key techniques including density advection, diffusion, and velocity projection with pressure calculations to enforce incompressibility, using bilinear interpolation and Gauss-Seidel relaxation.

**Discussion:** Commenters enthusiastically praised the tutorial for its accessibility and clarity, while offering technical refinements such as timestep compensation for rocket exhaust and suggesting higher-order interpolation methods. The discussion referenced foundational resources like Jos Stam's papers and Robert Bridson's textbook.

---

## 10. [Leo's first encyclical attacks technological messianism](https://www.economist.com/europe/2026/05/28/leos-first-encyclical-attacks-technological-messianism) — [169 comments](https://news.ycombinator.com/item?id=48334710)

**143 points**

**Article:** Pope Leo XIV released his first encyclical, "Magnifica Humanitas," a 42,300-word document that frames AI as a new industrial revolution and calls on governments, corporations, and individuals to slow technological development and ensure AI remains subject to ethical and political oversight. The encyclical urges the "disarming" of AI by removing it from military applications and subjecting AI companies to stricter international regulation.

**Discussion:** Commenters engage in wide-ranging debate about who should control technology, with tensions between technologists, governments, users, and religious institutions. A major thread examines whether tech disruption like Uber creates unfair burdens on displaced workers, while others discuss Peter Thiel's concerns about totalitarian governance through AI regulation contrasted with the Pope's call for responsible oversight.

---

## 11. [Zig ELF Linker Improvements Devlog](https://ziglang.org/devlog/2026/#2026-05-30) — [21 comments](https://news.ycombinator.com/item?id=48338673)

**141 points**

**Article:** The Zig project's new ELF linker, introduced in version 0.16.0, has significantly matured and now supports building complex projects like the self-hosted Zig compiler with external libraries such as LLVM and LLD. The most notable advancement is enabling "fast incremental compilation" on x86_64 Linux, allowing developers to rebuild projects in milliseconds.

**Discussion:** Commenters are excited about Zig's potential as a C replacement, with discussion centering on how fast incremental compilation could enable development iteration speeds comparable to Python while maintaining C-level performance. There is also debate about whether incremental linking is compatible with release-build optimizations.

---

## 12. [IXI's autofocusing lenses are almost ready to replace multifocal glasses](https://www.engadget.com/wearables/ixis-autofocusing-lenses-multifocal-glasses-ces-2026-212608427.html) — [59 comments](https://news.ycombinator.com/item?id=48298912)

**135 points**

**Article:** IXI has developed smart glasses with liquid crystal lenses that automatically adjust focus using cameraless eye tracking powered by infrared LEDs and photodiodes, eliminating the need for bifocals or progressive lenses. The technology detects where users are looking and switches prescriptions accordingly while consuming only 4 milliwatts of power.

**Discussion:** Commenters are largely enthusiastic but raise practical concerns including FDA approval timelines, driving safety risks from sudden focus shifts, and battery life limitations. Many users share personal frustrations with current multifocal solutions, while others debate whether manual focus adjustment would be preferable to automatic switching.

---

## 13. [Hormuz crisis side effect: a sharp rise in container shipping rates](https://www.lloydslist.com/LL1157327/Hormuz-crisis-side-effect-a-sharp-rise-in-container-shipping-rates) — [86 comments](https://news.ycombinator.com/item?id=48339180)

**133 points**

**Article:** The article reports that disruptions to the Strait of Hormuz are causing a sharp rise in global container shipping rates, as carriers reroute vessels and capacity tightens across major trade lanes. The crisis is creating cascading economic effects beyond direct shipping costs, threatening supply chains and raising prices for a wide range of consumer goods.

**Discussion:** Commenters extensively discuss the cascading second- and third-order economic effects including paint price increases, fertilizer shortages threatening food security, and broader inflation. There is also significant criticism of military actions seen as strategically counterproductive, and warnings from oil executives about coming energy shocks with strategic petroleum reserves near depletion.

---

## 14. [I found a seashell in the middle of the desert](https://github.com/Hawzen/I-found-a-seashell-in-the-middle-of-the-desert) — [31 comments](https://news.ycombinator.com/item?id=48318402)

**118 points**

**Article:** The author documents finding a fossil resembling a seashell in Saudi Arabia's Alghat desert, 500 km from the nearest coast, and develops an innovative identification approach using Principal Component Analysis (PCA) on 7,894 shell species. By mapping shell shapes into a two-dimensional space, the analysis reveals the fossil most closely resembles Sphincterochila candidissima.

**Discussion:** Commenters debate whether the find is genuinely unusual or simply a common fossil from ancient oceans that once covered the region. There is also discussion about the merits of the author's hands-on PCA research approach versus simply using AI identification tools, with some praising the educational value of the investigative journey.

---

## 15. [Show HN: Helios -- what plug-in solar could generate for any address in Britain](https://helios.southlondonscientific.com/) — [36 comments](https://news.ycombinator.com/item?id=48334949)

**103 points**

**Article:** Helios is a web-based calculator that helps UK homeowners assess whether plug-in solar panels would be worthwhile for their specific location, using postcode and building details combined with mapping data and sun position modeling. The tool estimates annual generation and payback period based on shading and electricity tariffs, aimed particularly at renters and flat-dwellers.

**Discussion:** Commenters praised the tool's clever use of LIDAR data to account for building shadows but noted accuracy limitations, particularly in Scotland and Wales where LIDAR coverage is sparse. Key discussion topics included skepticism about the 7-year payback period's financial viability and requests for enhanced features like rooftop solar calculations.

---

## 16. [It Takes Two Neurons to Ride a Bicycle](https://fermatslibrary.com/s/it-takes-two-neurons-to-ride-a-bicycle#email-newsletter) — [37 comments](https://news.ycombinator.com/item?id=48282335)

**84 points**

**Article:** This paper demonstrates that a remarkably simple two-neuron neural network can successfully control a simulated bicycle, maintaining balance and steering toward desired directions without requiring extensive learning or detailed knowledge of the bicycle's mechanics. The key insight is that this minimal controller naturally exhibits the counterintuitive steering behavior humans use -- pushing handlebars left to turn right.

**Discussion:** Commenters argue the title is misleading since the model only addresses steering an already-moving bike, not the critical challenge of starting from zero velocity or managing pedaling dynamics. A secondary theme questions whether the "neurons" are genuinely neural or merely hand-designed control functions repackaged in neural-network terminology.

---

## 17. [Domain expertise has always been the real moat](https://www.brethorsting.com/blog/2026/05/domain-expertise-has-always-been-the-real-moat/) — [34 comments](https://news.ycombinator.com/item?id=48340411)

**69 points**

**Article:** The article argues that agentic AI has shifted software development's bottleneck from "can you build it" to "can you tell whether it's right." The most valuable professionals now combine domain expertise with technical skills, as they can both verify that AI-generated code functions properly and confirm that its outputs are actually correct.

**Discussion:** Most commenters agree that deep knowledge of a specific field matters more than pure coding ability, since writing software has never been the hardest part. However, a contrarian voice argues that LLMs are rapidly closing this gap, suggesting the real threat to professionals comes from AI's expanding capabilities across all domains.

---

## 18. [Microcode inside the Intel 8087 floating-point chip: register exchange](https://www.righto.com/2026/05/microcode-inside-intel-8087-floating.html) — [14 comments](https://news.ycombinator.com/item?id=48338656)

**68 points**

**Article:** Ken Shirriff's analysis reveals that Intel's 8087 floating-point chip implements its FXCH (register exchange) instruction through 14 micro-instructions rather than what might seem like a trivial operation. The article demonstrates how reverse-engineering the chip's microcode ROM -- which contains 1,648 16-bit instructions -- allows researchers to understand the complicated algorithms underlying the chip's mathematical functions.

**Discussion:** Commenters debate why microcode was chosen over hardwired logic for the 8087, with one engineer noting the enormous number of corner cases in floating-point validation. The conversation touches on trade-offs between microcode flexibility and performance, with references to RISC processors and historical alternatives.

---

## 19. [Werner Herzog in conversation with Paul Cronin (2014)](https://fsgworkinprogress.com/2014/09/26/insignificant-bullets-evil-poachers-and-l-a-culture/) — [22 comments](https://news.ycombinator.com/item?id=48337808)

**61 points**

**Article:** This interview features filmmaker Werner Herzog discussing his life in Los Angeles, his philosophy on cinema, and his acclaimed documentary Grizzly Man. Herzog argues that Los Angeles possesses unique creative depth and substance beyond Hollywood's glamour, while his reflections on Grizzly Man exemplify how authentic footage can capture profound truths about the human condition.

**Discussion:** Commenters praise Werner Herzog's artistic philosophy and documentary methods, highlighting how his direct engagement with raw materials creates irreplaceable creative vision that cannot be replicated by delegating to others or to AI. A secondary theme explores Herzog's unconventional views on Los Angeles as a city with genuine substance.

---

## 20. [Show HN: 500 years of Joseon court omens as an observability dashboard](https://ajin.im/is/building/omen.ops/) — [4 comments](https://news.ycombinator.com/item?id=48339753)

**53 points**

**Article:** omen.ops is an interactive historical project that presents records from the Joseon Dynasty (1392-1897) as system monitoring data, visualizing celestial events, natural disasters, and other phenomena that Korean rulers interpreted as indicators of Heaven's approval or disapproval of their reign. By framing these historical observations through a modern operational telemetry interface, the project creatively bridges classical political philosophy with contemporary tech aesthetics.

**Discussion:** Commenters express enthusiasm for the novel intersection of historical documentation and modern DevOps concepts, highlighting how the Joseon dynasty prioritized meticulous record-keeping. One commenter notes the ironic example of a king's fall being documented precisely because he ordered it hidden.
