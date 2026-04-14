# Hacker News — Top Stories (Last 24 Hours)

_Generated 2026-04-14 from [hckrnews.com](https://hckrnews.com/). Top 10 submissions from the last 24 hours, ranked by points._

---

## 1. [Someone bought 30 WordPress plugins and planted a backdoor in all of them](https://anchor.host/someone-bought-30-wordpress-plugins-and-planted-a-backdoor-in-all-of-them/) — [313 comments](https://news.ycombinator.com/item?id=47755629) (1119 pts)

**Article:** A malicious actor purchased 30+ WordPress plugins through Flippa and injected a sophisticated backdoor into all of them. The attacker planted an `unserialize()` RCE backdoor in August 2025, kept it dormant for eight months, then activated it to inject SEO spam invisible to site owners. WordPress.org permanently closed all 31 plugins and forced an emergency update, exposing a critical gap: the platform has no review mechanism for plugin ownership transfers or new committers.

**Comments:** Commenters argue that cryptocurrency enabling profitable ransomware and the JavaScript ecosystem's unsustainable dependency chains are the real infosec crisis. A secondary discussion emphasizes that "we know how to write software with very few bugs (although we often choose not to)" due to cost-benefit pressures, with several developers advocating for languages with comprehensive standard libraries (Go, Python, .NET) to minimize external dependencies and attack surface.

---

## 2. [DaVinci Resolve – Photo](https://www.blackmagicdesign.com/products/davinciresolve/photo) — [247 comments](https://news.ycombinator.com/item?id=47760529) (967 pts)

**Article:** DaVinci Resolve's Photo page brings professional color grading tools to still photography, featuring primary color correction, curves, and AI-powered effects. The software supports RAW formats from major camera brands and enables non-destructive editing with GPU acceleration. It offers collaboration features, camera tethering for live shoots, and hardware panel support for creative control.

**Comments:** Discussion covers (1) market dynamics — why video editing has advanced faster than photo editing; (2) practical concerns — the interface feels like video software with photo editing bolted on, raising usability questions for photographers unfamiliar with DaVinci's workflows; and (3) BlackMagic's business model — the company sustains itself through hardware sales and affordable perpetual licensing rather than subscriptions, though Linux support remains problematic due to codec and audio issues.

---

## 3. [GitHub Stacked PRs](https://github.github.com/gh-stack/) — [480 comments](https://news.ycombinator.com/item?id=47757495) (856 pts)

**Article:** GitHub Stacked PRs is a new tool that breaks large changes into small, reviewable pull requests organized in a stack, where each PR targets the branch of the PR below it, forming an ordered chain that ultimately lands on main. It offers native GitHub integration with a CLI tool (`gh stack`) for managing branches and rebases, plus UI features like stack maps for navigation and one-click merging of entire stacks.

**Comments:** The thread centers on nostalgia for superior version control systems like Mercurial and Phabricator, debates over whether "stacked diffs" genuinely improve workflows or simply recreate past tools, and acknowledgment that Git dominance stems from network effects and GitHub's free hosting rather than technical superiority. Technical side-threads highlight performance concerns with Git at scale and the emergence of alternatives like Jujutsu offering better UX without abandoning Git compatibility.

---

## 4. [All elementary functions from a single binary operator](https://arxiv.org/abs/2603.21852) — [272 comments](https://news.ycombinator.com/item?id=47746610) (829 pts)

**Article:** The paper demonstrates that a single binary operator, `eml(x,y) = exp(x) - ln(y)`, combined with the constant 1, can generate all standard elementary mathematical functions. The operator was found through exhaustive search, produces uniform binary tree structures, and enables both symbolic computation and gradient-based recovery of mathematical formulas from numerical data using neural network optimization techniques.

**Comments:** Commenters debate whether the paper's elegance justifies its computational complexity, noting that simple operations like addition require deep expression trees and expensive exponential/logarithm computations. Others question whether the result is truly novel, referencing prior work on universal binary operators like `1/(x-y)` and older mathematical theorems on functional completeness.

---

## 5. [Backblaze has stopped backing up OneDrive and Dropbox folders and maybe others](https://rareese.com/posts/backblaze/) — [473 comments](https://news.ycombinator.com/item?id=47762864) (768 pts)

**Article:** The author criticizes Backblaze for silently excluding cloud storage folders (OneDrive, Dropbox) and Git directories from backups, despite marketing itself with "no restrictions on file type or size." The company buried this policy change in release notes without notifying users, fundamentally breaking the trust-based promise of comprehensive backup service.

**Comments:** The thread centers on Backblaze's decision to exclude cloud-synced folders without clear notification, angering customers who relied on this feature. Secondary discussions explore the inherent complexity of backing up cloud-storage placeholders, the problematic nature of "unlimited" marketing claims, and recommendations for alternative backup solutions like Arq or open-source tools (rclone, restic).

---

## 6. [A new spam policy for "back button hijacking"](https://developers.google.com/search/blog/2026/04/back-button-hijacking) — [430 comments](https://news.ycombinator.com/item?id=47760764) (733 pts)

**Article:** Google has introduced a new spam policy targeting "back button hijacking," a deceptive practice where websites manipulate browser back button functionality to trap users or redirect them unexpectedly. The policy aims to protect user experience by preventing sites from interfering with standard browser navigation behaviors.

**Comments:** Commenters share frustrations about LinkedIn and Reddit deliberately redirecting users to their feeds instead of previous pages, and ecommerce sites blocking Ctrl+click to open links in new tabs. Users debate whether websites should be allowed to modify browser history at all, discuss workarounds like holding the back button to access full history, and lament that "the web has become increasingly hostile" with dark patterns everywhere — though some defend legitimate uses like SPA navigation.

---

## 7. [Servo is now available on crates.io](https://servo.org/blog/2026/04/13/servo-0.1.0-release/) — [147 comments](https://news.ycombinator.com/item?id=47750872) (465 pts)

**Article:** Servo, a lightweight web technology embedding library, has released version 0.1.0 on crates.io, marking its first official library release. The team also introduced a long-term support version for users preferring scheduled upgrades over frequent breaking changes in monthly releases.

**Comments:** Commenters debate whether Servo can realistically replace Chromium/WebKit for embedding, with concerns about JavaScript support, WebGL compatibility, and missing web standards. A secondary thread discusses Rust versioning semantics and why projects remain at 0.x versions despite wide use. There's also nostalgic reflection on Servo's history — "Mozilla laid off the full Servo team" in 2020 — and speculation about whether it can succeed under Linux Foundation stewardship.

---

## 8. [Nothing Ever Happens: Polymarket bot that always buys No on non-sports markets](https://github.com/sterlingcrispin/nothing-ever-happens) — [260 comments](https://news.ycombinator.com/item?id=47753472) (459 pts)

**Article:** This repository contains an async Python bot for Polymarket that automatically purchases "No" positions on standalone non-sports prediction markets below a configured price threshold. The bot includes a dashboard for monitoring, operates with multiple env-var safety checks before executing real trades, and can be deployed locally or on Heroku with built-in recovery state management.

**Comments:** The debate is whether a simple strategy of always betting "no" on prediction markets can actually be profitable. Commenters analyze whether the observed 73% resolution rate toward "no" reflects genuine market mispricing or simply the natural phrasing of markets where most categorical questions have multiple possible outcomes. Key tensions include market efficiency, the role of insider trading, and whether casual bettors lose money to sophisticated traders.

---

## 9. [US appeals court declares 158-year-old home distilling ban unconstitutional](https://nypost.com/2026/04/11/us-news/us-appeals-court-declares-158-year-old-home-distilling-ban-unconstitutional/) — [322 comments](https://news.ycombinator.com/item?id=47751781) (438 pts)

**Article:** _Article summary unavailable — nypost.com blocked automated fetching._ Per the headline, a US appeals court has struck down a 158-year-old federal ban on home distilling of spirits as unconstitutional. See the original link for full details.

**Comments:** The primary debate centers on whether the federal government's authority to regulate home distilling should rest on the interstate commerce clause, with commenters arguing this precedent (dating back to *Wickard v. Filburn*) has been stretched beyond constitutional intent. A secondary discussion explores the practical implications: legalization would likely shift enforcement to state level, though concerns emerge about home-distilling safety and the challenge of distinguishing personal use from distribution.

---

## 10. [Apple's accidental moat: How the "AI Loser" may end up winning](https://adlrocha.substack.com/p/adlrocha-how-the-ai-loser-may-end) — [375 comments](https://news.ycombinator.com/item?id=47747017) (422 pts)

**Article:** While AI labs race to build frontier models at enormous cost, Apple has positioned itself advantageously by leveraging its existing ecosystem of 2.5 billion devices and purpose-built silicon architecture. The author argues that as intelligence becomes commoditized through open-source models, "context becomes the scarce resource," and Apple's access to personal user data combined with on-device processing capabilities may prove more valuable than raw model superiority.

**Comments:** The conversation centers on whether local AI models will eventually match cloud-based ones, making expensive subscriptions unnecessary. Some argue smaller models like Gemma 4 can achieve "good enough" performance through better integration and tool use, while others contend parametric knowledge and reasoning capacity create insurmountable advantages for larger cloud systems. Apple's patient strategy of waiting to integrate proven AI technology emerges as a potential competitive advantage.

---

## Errors / Notes

- **Story #9 (home distilling):** Article content could not be fetched (nypost.com blocks automated requests). The HN comments summary was obtained normally.
- All other summaries were generated from live article and comments-page fetches.
