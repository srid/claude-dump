# Hacker News Top Stories - May 2, 2026

## 1. [Why does it take so long to release black fan versions?](https://www.noctua.at/en/expertise/blog/how-can-it-take-so-long-to-release-black-fan-versions) — [279 comments](https://news.ycombinator.com/item?id=47983352)
**Score: 671**

**Article:** Noctua explains that releasing black versions of their fans takes years because the different pigments used in black plastic fundamentally change the material properties of the injection-molded components, requiring extensive re-engineering to maintain the tight manufacturing tolerances (down to fractions of a millimeter) that their fans demand. The process involves reformulating materials, adjusting mold tooling, and running extensive testing to ensure the black versions meet the same performance and longevity standards as their signature brown fans.

**Discussion:** Commenters widely praised the blog post as exemplary content marketing that educates readers about injection molding precision while subtly promoting new products. The discussion debated whether Noctua's tolerance claims are exaggerated compared to other industries like LEGO manufacturing, and commenters shared strong opinions about Noctua's signature brown color -- some love it as a brand identifier while others see it as limiting. Many acknowledged Noctua's quality and customer service justify premium pricing, though competitors like BeQuiet were noted as offering comparable performance for less.

---

## 2. [VS Code inserting 'Co-Authored-by Copilot' into commits regardless of usage](https://github.com/microsoft/vscode/pull/310226) — [173 comments](https://news.ycombinator.com/item?id=47989883)
**Score: 356**

**Article:** This VS Code pull request enabled AI co-author attribution by default, automatically adding "Co-authored-by: Copilot" trailers to git commits made through VS Code's Git extension. The change sparked massive community backlash because users -- including those not using Copilot or who had AI features disabled -- found the attribution appearing in their commits without explicit consent, raising concerns about transparency and code authorship integrity.

**Discussion:** Commenters are overwhelmingly critical of Microsoft's decision, viewing it as an attempt to artificially inflate Copilot usage statistics to justify massive AI investments -- essentially "pumping someone's metrics up inside of Microsoft." Critics emphasize that commits serve as legal and technical records and that falsifying authorship violates developer trust, especially since the attribution is added without user visibility or consent. Many link this to a broader pattern of Microsoft degrading previously-respected products in a desperate pursuit of AI adoption at any ethical cost.

---

## 3. [NetHack 5.0.0](https://nethack.org/v500/release.html) — [85 comments](https://news.ycombinator.com/item?id=47988776)
**Score: 310**

**Article:** NetHack 5.0.0, released May 2, 2026, is a major update to the classic dungeon exploration roguelike game with significant architectural improvements including C99 standard compliance, enhanced cross-platform compatibility, and replacement of build-time compilers with Lua-based alternatives. The release contains over 3,100 fixes and improvements, though previous saved games are incompatible with this version.

**Discussion:** Commenters express nostalgic excitement about the first major version release in decades, with many sharing personal memories of playing NetHack since childhood. The discussion highlights significant technical improvements like Lua integration for modding and gameplay balance changes (particularly nerfs to previously overpowered strategies), though some note the save file incompatibility is disappointing. Many players appreciate the quality-of-life additions and express enthusiasm about attempting to ascend characters in this newly challenging version.

---

## 4. [Dav2d](https://code.videolan.org/videolan/dav2d) — [88 comments](https://news.ycombinator.com/item?id=47988504)
**Score: 261**

**Article:** Dav2d is an AV2 (the successor to AV1) video decoder developed by VideoLAN, designed to be the fastest AV2 decoder across all platforms. It follows in the tradition of dav1d (the highly optimized AV1 decoder) and focuses on cross-platform performance with optimized assembly implementations.

**Discussion:** Commenters express enthusiasm about dav2d as a technical achievement from VideoLAN, appreciating its position as the fastest AV2 decoder on all platforms. However, discussions pivoted to concerns about patent trolling by Sisvel threatening AV2 adoption, and debates arose over whether memory-unsafe languages like C should still be used for security-sensitive codec development. Some also noted the irony of the project page being protected by aggressive bot protection (Anubis) due to AI scraping concerns.

---

## 5. [How fast is a macOS VM, and how small could it be?](https://eclecticlight.co/2026/05/02/how-fast-is-a-macos-vm-and-how-small-could-it-be/) — [77 comments](https://news.ycombinator.com/item?id=47984852)
**Score: 213**

**Article:** The article tests macOS virtual machines on Apple Silicon and finds that VMs achieve approximately 98% of host speed in single-core CPU benchmarks, demonstrating remarkably efficient virtualization. Regarding minimum specifications, even a modest setup with just 2 virtual cores and 4GB of RAM can handle everyday tasks effectively, though users should allocate at least 60GB of disk space to accommodate system updates.

**Discussion:** Commenters discuss the relationship between CPU cores and RAM allocation, noting that memory usage scales with core count due to OS overhead and per-thread resource allocation. Practical challenges with macOS virtualization were highlighted, particularly the difficulty of achieving GPU acceleration for machine learning tasks like PyTorch. Others debated whether the OS efficiently adapts to limited available memory for caching and virtual memory management.

---

## 6. [America's Expanding Domestic Surveillance](https://www.wsj.com/articles/americas-expanding-domestic-surveillance-08b73187) — [112 comments](https://news.ycombinator.com/item?id=47987006)
**Score: 186**

**Article:** The WSJ article reports on America's expanding domestic surveillance infrastructure, focusing on technologies like Flock cameras (automated license plate readers from a YC-backed company) being deployed by law enforcement without adequate oversight. The piece examines how private surveillance technology companies are partnering with government agencies to create integrated tracking systems, raising concerns about mission creep, data misuse, and the inability of citizens to opt out of comprehensive monitoring.

**Discussion:** Commenters express deep concern about surveillance expansion, with many warning that "the time to resist was 2-5 years ago" while others argue grassroots organizing and privacy tools like GrapheneOS can still help. The discussion reflects frustration that despite the Snowden revelations over a decade ago, surveillance has only expanded under both political parties, with critics arguing mass surveillance does not effectively reduce crime and that root causes like poverty should be addressed instead.

---

## 7. [Why are there both TMP and TEMP environment variables? (2015)](https://devblogs.microsoft.com/oldnewthing/20150417-00/?p=44213) — [84 comments](https://news.ycombinator.com/item?id=47984522)
**Score: 183**

**Article:** Both TMP and TEMP environment variables exist due to historical competing standards during MS-DOS development -- MS-DOS 2.0 adopted TEMP for its piping feature, while Windows' GetTempFileName function chose to prioritize TMP instead. Since the directory used for temporary files is at the discretion of each program, both variables persist today despite their redundancy.

**Discussion:** Commenters explore how CP/M lacked environment variables entirely, so when DOS programs began using them, different developers independently chose either TMP or TEMP without coordination, and Microsoft never bothered to standardize. The thread draws parallels to modern problems like HTTP_PROXY vs http_proxy inconsistencies and the widely-ignored XDG Base Directory Specification, with one commenter humorously noting "there's nothing more permanent than a TMPorary decision."

---

## 8. [California to begin ticketing driverless cars that violate traffic laws](https://www.bbc.com/news/articles/clypjx3rg2go) — [196 comments](https://news.ycombinator.com/item?id=47988742)
**Score: 182**

**Article:** California has begun issuing traffic citations to autonomous vehicles that violate traffic laws, treating driverless cars similarly to human drivers rather than granting them special exemptions. The policy creates financial incentives for AV companies to improve their software's compliance with traffic regulations, covering violations like blocking traffic lanes during passenger pickup.

**Discussion:** Commenters debate whether ticketing is sufficient enforcement, with many arguing AV companies should face harsher penalties like license revocation rather than treating fines as a minor cost of doing business. The discussion also raises broader concerns about America's lenient approach to vehicular harm compared to other nations, and whether autonomous vehicles truly represent safety improvements or merely shift existing risks while creating new problems like blocking emergency services.

---

## 9. [Open Design: Use Your Coding Agent as a Design Engine](https://github.com/nexu-io/open-design) — [80 comments](https://news.ycombinator.com/item?id=47985750)
**Score: 153**

**Article:** Open Design is an open-source alternative to Anthropic's Claude Design that enables AI-assisted design generation by integrating 12 coding-agent CLIs (Claude Code, Copilot, Gemini, etc.) as design engines. It pairs these with 31 composable skills and 72 design systems to generate web, mobile, and presentation prototypes, running locally with a daemon backend and web frontend that exports to HTML, PDF, PPTX, and video formats without vendor lock-in.

**Discussion:** Commenters are divided between those who argue AI-generated design will become worthless "background noise" once everyone can produce polished materials instantly, and those who welcome this shift as forcing deeper engagement with actual substance over aesthetics. There is also significant skepticism about the tool itself, with critics noting a suspicious star-history pattern (1,400 stars daily) and describing the demos as featuring poor design choices that undercut the product's credibility.

---

## 10. [Roblox shares plummet 18% as child safety measures weigh on bookings](https://www.cnbc.com/2026/05/01/roblox-rblx-stock-child-safety-earnings.html) — [83 comments](https://news.ycombinator.com/item?id=47988261)
**Score: 151**

**Article:** Roblox shares plummeted 18% after the company reported that new child safety measures -- including restricting chat to age-verified users -- significantly weighed on bookings, causing the company to slash its full-year 2026 guidance by nearly $1 billion. CEO David Baszucki maintained the age-check system is "the real, right long-term way to build this platform," while the company faces over 140 lawsuits accusing it of failing to protect children from sexual exploitation.

**Discussion:** Commenters observe that the revenue decline from safety measures highlights a troubling reality: child exploitation was financially valuable to the company, suggesting the business model itself may be incompatible with genuine child protection. Discussion is split between those arguing Roblox fundamentally operates as "a casino for kids" with gambling mechanics, and those criticizing the age-segregated communication system as poorly executed -- making most games unplayable without meaningfully preventing harm.

---

## 11. [Dotcl: Common Lisp Implementation on .NET](https://github.com/dotcl/dotcl) — [32 comments](https://news.ycombinator.com/item?id=47964957)
**Score: 141**

**Article:** Dotcl is a Common Lisp implementation that compiles to .NET's Common Intermediate Language (CIL), enabling Lisp code to run cross-platform on Windows, macOS, and Linux via the .NET runtime. It provides seamless bidirectional interoperability with C#, F#, and VB.NET, access to NuGet packages and many Quicklisp libraries, and allows Lisp-defined classes to be recognized by .NET frameworks like MAUI and ASP.NET. The compiler is written in Lisp and broadly conforms to the ANSI Common Lisp standard.

**Discussion:** Commenters express enthusiasm about the project and discuss .NET's strong technical foundation for language implementations, with some noting the .NET JIT can achieve performance comparable to Rust. A recurring theme is debate over why Lisp has never achieved mainstream adoption despite its elegant design, with opinions ranging from cultural factors to historical timing. Users also mention related projects like IronScheme, Bike, and Clojure, and discuss potential use cases including WASM targeting and game engine scripting.

---

## 12. [Do_not_track](https://donottrack.sh/) — [53 comments](https://news.ycombinator.com/item?id=47988592)
**Score: 129**

**Article:** DO_NOT_TRACK is a proposed standard environment variable (DO_NOT_TRACK=1) that gives users a single, unified way to opt out of telemetry, analytics, and data collection across all CLI tools and software. The project addresses the problem that different tools each have their own inconsistent opt-out mechanisms (e.g., DOTNET_CLI_TELEMETRY_OPTOUT, HOMEBREW_NO_ANALYTICS), making it difficult for users to comprehensively disable tracking.

**Discussion:** The discussion is dominated by skepticism about the initiative's effectiveness, with many comparing it to the failed Do Not Track browser standard and doubting companies will voluntarily comply. A significant debate emerges between those who support incremental opt-out standards and those who demand mandatory opt-in models for telemetry. Users suggest practical alternatives including consolidated shell scripts that set all known opt-out variables, DNS blocklists, and network namespaces, while broadly agreeing that default telemetry without explicit consent represents poor practice.

---

## 13. [Barman -- Backup and Recovery Manager for PostgreSQL](https://github.com/EnterpriseDB/barman) — [22 comments](https://news.ycombinator.com/item?id=47948526)
**Score: 128**

**Article:** Barman (Backup and Recovery Manager) is an open-source Python tool maintained by EnterpriseDB for disaster recovery of PostgreSQL servers, enabling remote backups of multiple database instances in business-critical environments. It supports cloud storage backups through its barman-cloud component and is integrated into CloudNativePG as the default backup plugin for Kubernetes deployments.

**Discussion:** Discussion centers on comparing Barman with pgBackRest, particularly in light of pgBackRest's recent archival and the emergence of a community fork called pgxbackup. Commenters generally agree Barman is solid for backup and restore, with some clarifying that it now supports cloud storage backups -- a capability some users were unaware of. Technical concerns include WAL volume management to prevent database unavailability and limitations like inability to set S3 storage classes for large databases.

---

## 14. [Inventions for battery reuse and recycling increase seven-fold in last decade](https://www.epo.org/en/news-events/news/inventions-battery-reuse-and-recycling-increase-more-seven-fold-last-decade) — [6 comments](https://news.ycombinator.com/item?id=47960015)
**Score: 124**

**Article:** According to a joint report by the European Patent Office (EPO) and the International Energy Agency (IEA), patent filings related to battery reuse and recycling have increased more than seven-fold over the last decade. The report highlights that end-of-life batteries from electric vehicles alone are expected to grow from 1.2 million in 2030 to 14 million by 2040, making circularity technologies critical.

**Discussion:** The small discussion explores competing explanations for the surge in battery recycling inventions, with commenters proposing patent expiration freeing up innovation space, growing market demand from increasing battery volumes, and straightforward profit incentives as drivers. Notably, the thread concludes with consensus rather than disagreement, as participants acknowledge that multiple factors likely contribute simultaneously to the observed growth in innovation.

---

## 15. [Uber wants to turn its drivers into a sensor grid for self-driving companies](https://techcrunch.com/2026/05/01/uber-wants-to-turn-its-millions-of-drivers-into-a-sensor-grid-for-self-driving-companies/) — [122 comments](https://news.ycombinator.com/item?id=47987333)
**Score: 109**

**Article:** Uber plans to equip its millions of driver vehicles with sensors to collect real-world driving data for autonomous vehicle companies, positioning itself as the data infrastructure layer for the AV ecosystem through its "AV Labs" initiative launched in January 2026. The company has created an "AV cloud" -- a library of labeled sensor data that partner companies can query for model training, and partners can run trained models in "shadow mode" against actual Uber trips to simulate autonomous performance.

**Discussion:** Commenters are highly skeptical of Uber's premise that data volume is the bottleneck for autonomous vehicles, pointing to Tesla's billions of miles of collected data as evidence that raw quantity does not guarantee progress, and noting Waymo succeeds with targeted high-quality data plus simulation. A significant secondary discussion focuses on labor exploitation concerns, questioning whether drivers will be compensated for becoming rolling data collection platforms. There is broad disagreement over whether massive real-world data collection or simulation combined with limited targeted data represents the correct path forward for autonomous vehicles.

---

*Generated from [Hacker News](https://news.ycombinator.com) top stories on 2026-05-02.*
