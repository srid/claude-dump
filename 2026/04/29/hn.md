# Hacker News Top Stories — April 29, 2026

Top submissions from the last 24 hours, sourced from [hckrnews.com](https://hckrnews.com/).

---

## 1. [Ghostty is leaving GitHub](https://mitchellh.com/writing/ghostty-leaving-github)
**[975 comments](https://news.ycombinator.com/item?id=47939579)**

**Article:** Mitchell Hashimoto announces that Ghostty is moving away from GitHub after 18 years on the platform, citing near-daily outages — particularly GitHub Actions disruptions — that block productive work for hours at a time. Despite an emotional attachment to GitHub, he concludes that the platform's reliability failures mean it "doesn't want me to be there" anymore.

**Comments:** Commenters are sharply divided on whether leaving GitHub or staying engaged drives platform improvement, with a GitHub employee arguing involvement helps while critics say users have no meaningful leverage over product decisions. A secondary debate focuses on whether GitHub's decline is attributable to Microsoft's acquisition or to the scaling challenges of integrating AI alongside explosive growth.

---

## 2. [Your phone is about to stop being yours](https://keepandroidopen.org/en/)
**[830 comments](https://news.ycombinator.com/item?id=47935853)**

**Article:** Starting September 2026, Google will require all Android app developers to register centrally, submit government ID, and hand over signing keys, effectively blocking unverified apps on all devices worldwide and transforming Android from an open platform into a gated ecosystem. Critics argue the policy devastates F-Droid, independent developers, and pseudonymous contributors while creating a centralized identity database vulnerable to government demands.

**Comments:** The comments split between two camps: those who want regulatory intervention to protect sideloading on stock Android, and those who argue that bootloader unlocking and alternative OSes like GrapheneOS are the real solution. There is also debate over whether most users can realistically adopt AOSP alternatives or whether the fight must be won at the policy and hardware-access level.

---

## 3. [Zed 1.0](https://zed.dev/blog/zed-1-0)
**[426 comments](https://news.ycombinator.com/item?id=47949027)**

**Article:** Zed has reached version 1.0, a Rust-built, GPU-accelerated code editor now available across Mac, Windows, and Linux with comprehensive language support, AI-native multi-agent capabilities, Git integration, SSH remoting, and debugging features. The team also announced plans for DeltaDB, a synchronization engine designed to enable real-time collaboration between humans and AI agents on shared codebases.

**Comments:** Data privacy and terms-of-service concerns dominate the thread, with users pointing to broad data processing rights, mandatory arbitration clauses, and the ability for Zed to change terms unilaterally with only 30 days' notice. There is also spirited debate over UX trade-offs — search behavior, LSP configuration complexity, and the prominence of AI-first features — though there is broad consensus that Zed represents genuinely impressive engineering.

---

## 4. [How ChatGPT serves ads](https://www.buchodi.com/how-chatgpt-serves-ads-heres-the-full-attribution-loop/)
**[341 comments](https://news.ycombinator.com/item?id=47942437)**

**Article:** OpenAI injects ads directly into ChatGPT conversations via a server-sent event stream, using contextual targeting based on chat topics and a four-token Fernet encryption scheme to track impressions through clicks. A merchant-side SDK called OAIQ reports user interactions back to OpenAI, completing a full attribution loop; a 30-day oppref cookie persists across merchant sites after users click an ad.

**Comments:** Commenters focus heavily on Sam Altman's credibility, contrasting his past statement that ads would be a "last resort" with the reality now unfolding, and drawing parallels to Google's founders making and then abandoning similar promises. A secondary concern is the potential for LLMs to be weaponized for undetectable ideological bias or propaganda through fine-tuning.

---

## 5. [HERMES.md in commit messages causes requests to route to extra usage billing](https://github.com/anthropics/claude-code/issues/53262)
**[335 comments](https://news.ycombinator.com/item?id=47952722)**

**Article:** Claude Code includes recent git commit messages in its system prompt, and server-side logic incorrectly routes requests to extra-usage billing — bypassing the included Max plan quota — whenever the string "HERMES.md" appears in those commits. One affected user on a $200/month Max 20x plan silently accumulated $200.98 in extra charges while their plan quota sat 86% unused.

**Comments:** Commenters broadly condemn Anthropic's initial support response refusing refunds for what is clearly Anthropic's own billing bug, with many calling the position unreasonable or potentially illegal. After the issue gained public traction, an Anthropic engineer stepped in to promise refunds and credits, but critics note this only happened due to negative publicity.

---

## 6. [Copy Fail – CVE-2026-31431](https://copy.fail/)
**[177 comments](https://news.ycombinator.com/item?id=47952181)**

**Article:** CVE-2026-31431 ("Copy Fail") is a critical Linux kernel privilege-escalation vulnerability affecting distributions shipped since 2017, exploiting a logic flaw in the `authencesn` component via the `AF_ALG` crypto API and `splice()` syscall. An unprivileged local user can gain root access using a single 732-byte Python script, posing particular danger in multi-tenant environments like Kubernetes clusters and shared CI/CD systems.

**Comments:** Commenters confirmed the vulnerability is real and exploitable, but criticized the landing page for what appeared to be AI-generated content — notably hallucinating "RHEL 14.3," a version that does not exist. Debate arose over whether releasing a public exploit before all major vendors had patched was appropriate, with Ubuntu and RedHat initially underclassifying severity before community pushback.

---

## 7. [Online age verification is the hill to die on](https://x.com/GlennMeder/status/2049088498163216560)
**[410 comments](https://news.ycombinator.com/item?id=47950091)**

**Article:** Glenn Meder argues that online age verification is "the line" that must be actively opposed — framing it not as a skippable policy fight but as foundational infrastructure that enables broader surveillance and control once established. The thread declares this is "not a fight you can sit out" and describes age verification as enabling "every other piece" of a broader control apparatus.

**Comments:** HN commenters largely agreed that mandatory government-backed age verification is dangerous to privacy and free expression, with the most-upvoted response advocating for RTA HTTP headers as a privacy-preserving alternative that lets device owners enforce parental controls locally. A secondary debate centered on whether the real legislative intent behind age verification laws is child safety or surveillance and deanonymization.

---

## 8. [UAE to leave OPEC](https://www.ft.com/content/8c354f2d-3e66-47f1-aad4-9b4aa30e386d)
**[651 comments](https://news.ycombinator.com/item?id=47933983)**

**Article:** *[Error: Article content could not be fetched — Financial Times is paywalled and blocked automated access.]* The headline indicates the UAE announced it is leaving OPEC.

**Comments:** HN commenters interpreted UAE's OPEC exit as a strategic geopolitical pivot — particularly toward an Israeli-aligned bloc as a counterweight to Saudi and Iranian influence in the region. A secondary thread examined UAE's economic vulnerability, with debate over how ongoing regional conflicts threaten its diversified non-oil economy (tourism, aviation, banking). Commenters also argued extensively about US Middle East policy.

---

## 9. [Who owns the code Claude Code wrote?](https://legallayer.substack.com/p/who-owns-the-claude-code-wrote)
**[493 comments](https://news.ycombinator.com/item?id=47932937)**

**Article:** The article argues that AI-generated code may be uncopyrightable under current law because copyright requires meaningful human creative authorship — and simply accepting Claude's output without substantial modification may leave code in the public domain. Developers can establish authorship through documented creative decisions such as architectural choices and deliberate rejections of generated output. The piece also flags that AI tools may inadvertently reproduce GPL-licensed training data, potentially creating license-contamination liability.

**Comments:** The central debate was over what level of human creative control is sufficient to constitute copyright authorship — with some arguing that directing, iterating on, and editing AI output qualifies, while others cited legal precedent establishing that specifying an objective to an AI model is not sufficient. A secondary dispute arose over the article's focus on GPL licensing risks, which critics said unfairly singles out copyleft while ignoring unlicensed and permissively licensed code in training datasets.

---

## 10. [An update on GitHub availability](https://github.blog/news-insights/company-news/an-update-on-github-availability/)
**[243 comments](https://news.ycombinator.com/item?id=47932422)**

**Article:** GitHub acknowledged recent outages as "not acceptable" and attributed them to explosive growth in agentic AI development workflows since December 2025, which drove scaling demands far beyond projections — requiring a redesign for 30x current capacity rather than the originally planned 10x. The company outlined mitigations including service isolation, database load reduction, multi-cloud infrastructure migration, and optimization for large monorepos.

**Comments:** Commenters were broadly skeptical, arguing that GitHub's framing of "availability first" rang hollow given months of persistent outages while feature work visibly continued. A recurring theme questioned whether Microsoft's consolidation onto Azure was itself the root cause of reliability problems. The transparency pledges were met with cautious or sardonic reception.

---

## 11. [Period tracking app, Flo, found to be selling user data to Meta](https://femtechdesigndesk.substack.com/p/your-period-tracking-app-has-been)
**[257 comments](https://news.ycombinator.com/item?id=47932990)**

**Article:** The period tracking app Flo was found liable for intentionally sharing sensitive reproductive health data with Meta and other third parties, despite promising users privacy. Because wellness apps outside clinical settings are not covered by HIPAA, companies have broad latitude to collect and monetize intimate health data without meaningful user consent, exposing a significant regulatory gap in femtech.

**Comments:** Commenters debate whether stronger encryption mandates or data protection laws are the answer versus simply switching to open-source local-only alternatives like Drip. A significant thread focuses on how period-tracking data could enable government surveillance of abortion access post-Dobbs, with references to real law enforcement cases using Meta data in prosecutions.

---

## 12. [Localsend: An open-source cross-platform alternative to AirDrop](https://github.com/localsend/localsend)
**[274 comments](https://news.ycombinator.com/item?id=47933208)**

**Article:** LocalSend is a free, open-source app that allows secure file and message sharing between nearby devices over a local network, with no internet connection or external servers required. It supports Android, iOS, macOS, Windows, and Linux, and uses a REST API with HTTPS encryption backed by on-device TLS/SSL certificates.

**Comments:** The central debate is that LocalSend requires devices to already share a WiFi network, which undermines the core appeal of AirDrop's automatic ad-hoc connections — commenters argue the first steps of AirDrop's flow are what make it special. Secondary discussion covers alternative tools like PairDrop and FlyingCarpet, and the broader technical challenge of achieving true cross-platform peer-to-peer without infrastructure.

---

## 13. [VibeVoice: Open-source frontier voice AI](https://github.com/microsoft/VibeVoice)
**[180 comments](https://news.ycombinator.com/item?id=47933236)**

**Article:** VibeVoice is an open-source suite of frontier voice AI models from Microsoft covering both text-to-speech and automatic speech recognition. Its key innovation is continuous speech tokenizers operating at ultra-low frame rates, enabling models that handle up to 60-minute transcriptions with speaker diarization and up to 90-minute multi-speaker conversational TTS synthesis.

**Comments:** Commenters report that VibeVoice hallucinates frequently, runs slowly, and struggles with multilingual tasks, though its built-in speaker diarization drew some praise. A prominent thread challenges whether the project deserves the "open source" label since only model weights are released while training code remains proprietary, sparking broader debate about "open weights" versus true open source and corporate "openwashing."

---

## 14. [GitHub Copilot code review will start consuming GitHub Actions minutes](https://github.blog/changelog/2026-04-27-github-copilot-code-review-will-start-consuming-github-actions-minutes-on-june-1-2026/)
**[201 comments](https://news.ycombinator.com/item?id=47932028)**

**Article:** Starting June 1, 2026, GitHub Copilot code reviews will consume GitHub Actions minutes in addition to AI Credits for all paid Copilot plans (Pro, Pro+, Business, and Enterprise) on private repositories. Public repositories are unaffected, and users are advised to review their Actions budgets before the change takes effect.

**Comments:** Commenters are skeptical about AI company profitability claims and debate whether the pricing shift is evidence of inference margins being healthy or of companies subsidizing services until they can raise prices dramatically. Many view this as an inevitable "rug pull" after users become dependent on cheap AI tooling, with substantial discussion about whether local models or competing platforms offer a viable exit.

---

## 15. [He asked AI to count carbs 27,000 times. It couldn't give the same answer twice](https://www.diabettech.com/i-asked-ai-to-count-my-carbs-27000-times-it-couldnt-give-me-the-same-answer-twice/)
**[295 comments](https://news.ycombinator.com/item?id=47947490)**

**Article:** A researcher queried four leading AI models (including Claude Sonnet 4.6, GPT-5.4, and two Gemini models) over 26,000 times using identical food photographs to test carbohydrate counting reliability for diabetes management. Results varied dramatically across queries — enough to cause dangerous insulin dosing errors — and model confidence showed essentially zero correlation with accuracy, leading the author to conclude no current AI model is safe for unsupervised insulin delivery decisions.

**Comments:** Technical skeptics argue the study is obvious and poorly designed for testing bare LLM APIs rather than purpose-built commercial apps, while defenders maintain it performs a genuine public service by quantifying AI unreliability for non-technical users who may trust AI for medical decisions. Most commenters agree the deeper problem is that photos cannot encode information like fat content or oil quantity, and that LLMs should refuse impossible estimation tasks rather than fabricate confident answers.
