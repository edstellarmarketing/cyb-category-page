# SOC Analyst Learning Path — v3 Plan

> **Path:** `/learning-paths/soc-analyst-v3`
> **Source:** Forks `/learning-paths/soc-analyst-v2`
> **Owner:** marketing@edstellar.com
> **Drafted:** 2026-05-07

## 1. Why v3

v2 sells a single, fixed 26-week SOC analyst track. Most enterprise buyers don't fit a fixed track — their SOC has a specific stack (Splunk vs. Sentinel vs. Chronicle), a specific maturity (no SOC, new SOC, mature SOC moving to detection-engineering), a specific gap (technical, behavioural, leadership), and a specific budget envelope. Today they have to read the page top-to-bottom and then ask sales to translate it into something that fits.

**v3 adds a second on-page path:** an instant, LLM-generated custom track builder. The user answers ~6–10 short questions, and an LLM composes a ranked learning track on the spot — grounded in Edstellar's catalog of SOC core curriculum *plus* connected skills (soft skills, leadership, adjacent technical domains), shaped by the signals in the survey answers.

The output is not a sales asset waiting in a CRM — it's a fully-formed track displayed in the page itself, with a CTA to refine it with a human or to download the PDF.

## 2. User value proposition

| Today (v2) | v3 |
| --- | --- |
| Read fixed 5-stage track | Answer 6–10 questions, get a track in <60 seconds |
| One curriculum for everyone | Track adapts to stack, role, sector, team maturity, gaps |
| Only core SOC skills shown | Connected skills surfaced when the survey signals them — soft skills, leadership, adjacent technical |
| Path-to-contact: scroll to form | Path-to-contact: the generated track itself, with "Talk to a curriculum architect" attached |

## 3. User journey

```
Hero
  └─ Two CTAs side-by-side
       ├─ "See the standard 5-stage track" → anchors to v2 stages section
       └─ "Build my custom track in 60 seconds" → anchors to survey
Survey (single screen, multi-step, progress bar)
  └─ Submit
Track Preview (rendered in-place, replaces survey card)
  ├─ Modules: ranked list (core + adjacent + soft) with rationale per module
  ├─ Time + delivery estimate
  ├─ Primary CTA: "Request this custom track from Edstellar"
  │     → scrolls to contact form, prefilled with the track + survey answers
  ├─ Secondary: "Tweak my answers" (re-opens survey)
  └─ Note: "Generated for review. To proceed, request it from Edstellar
            and a curriculum architect will confirm scope and cost."
Contact form (existing v2 #contact)
  └─ Submit
       ├─ Sales receives email + CRM entry containing:
       │     • the full generated track (human-readable + JSON)
       │     • the survey answers that produced it
       │     • lead details
       └─ User sees confirmation: "Your custom track is on its way to a
            curriculum architect — expect a reply within one business day."
Rest of v2 sections (stages, skills, trainers, outcomes, plans, FAQ, related)
```

**Gating model:** The track is *visible* on the page so the user can read and validate it; **getting** the track (in any portable form — PDF, email, formal proposal) requires contacting Edstellar via the form. The form submission is the moment of value capture for sales and the moment of value-delivery for the user.

## 4. Survey design

### 4.1 Question set (target: 6–10, branched)

Each question is a single-screen step with a progress indicator (`Question 3 of 7`).

| # | Question | Type | Drives |
| --- | --- | --- | --- |
| 1 | Where is your SOC today? | Single-select (4 options: No SOC / New SOC / Operating SOC / Mature SOC moving to detection-engineering) | Maturity → which stages are skipped or compressed |
| 2 | What role(s) is this track for? | Multi-select (L1 triage / L2 detection / L3 hunter / IR lead / SOC manager / detection engineer / cloud SOC) | Modules + soft-skill mix |
| 3 | What's your primary SIEM / detection stack? | Single-select (Splunk / Sentinel / Chronicle / QRadar / ELK / Other) | Vendor-specific module variants |
| 4 | What sector are you in? | Single-select (BFSI / Healthcare / Manufacturing / SaaS / Government / Energy / Retail / Telecom / Other) | Regulatory overlays (HIPAA, NERC-CIP, PCI-DSS, etc.) |
| 5 | What's the biggest gap on your team right now? | Multi-select (Hands-on tooling / Threat hunting maturity / IR coordination / Reporting to leadership / Cross-team comms / Documentation discipline / Burnout & retention) | Soft skills + leadership injection |
| 6 | How long do you have? | Single-select (4 weeks / 8 weeks / 12 weeks / 16 weeks / 26 weeks / Flexible) | Module count + sequencing |
| 7 | Delivery preference? | Single-select (Virtual ILT / On-site / Blended / Self-paced + cohort labs) | Delivery note in output |
| 8 (conditional) | Team size? | Numeric range (1-5 / 6-15 / 16-50 / 50+) — *only shown if Q2 includes manager roles* | Cohort sizing in output |
| 9 (final) | Email + company name to receive the PDF (optional, skippable) | Form fields | Lead capture (skippable, doesn't gate the result) |

**Branching rule of thumb:** never more than 7 visible questions for any path through the survey. The `(conditional)` question is gated on prior answers.

### 4.2 UX specifics

- **Step transitions** — slide between steps; no full page reload.
- **Back button** — always available (preserves prior answers).
- **Progress** — `1 ▮ 2 ▮ 3 ▯ 4 ▯ 5 ▯ 6 ▯ 7` plus textual `Question 3 of 7`.
- **Validation** — Next button disabled until current question is answered (except optional steps).
- **Mobile** — radio cards become full-width tappable rows; multi-select shows count badges.
- **Time estimate** — small "~60 seconds" label next to the start CTA so the cost is visible.

## 5. Track generation — LLM

The generator is **an LLM call, not a rules engine.** Why an LLM here:

- The "right" track depends on combinations the rules engine can't anticipate (e.g., a healthcare SOC running Sentinel, with IR-coordination as the declared gap, prepping for SC-200 — a rules engine would compose modules that *match*, but an LLM can write the *narrative* of why this team needs them in this order).
- Per-module rationale should read like a curriculum architect wrote it, not a template lookup.
- The module catalog will grow; an LLM stays usable as catalog size scales without a scoring-rules rewrite each time.

### 5.1 Model choice

Default: **Claude Sonnet 4.6** (`claude-sonnet-4-6`).
- Strong instruction-following + structured output, low enough cost for per-visit generation.
- Latency budget: < 4s for a complete track (streamed start in < 1s).

Reserved for review/QA only: **Claude Opus 4.7** for evaluating the prompt against a fixed eval set during P1 prompt iteration. Not used at runtime.

Avoid Haiku at runtime — track quality and rationale prose are the product; cost savings don't justify a worse track.

### 5.2 Inputs

The same `SurveyAnswers` shape used by the survey UI is serialized into the prompt:

```ts
type SurveyAnswers = {
  maturity: "none" | "new" | "operating" | "mature";
  roles: Array<"l1" | "l2" | "l3" | "ir" | "manager" | "detection-eng" | "cloud-soc">;
  stack: "splunk" | "sentinel" | "chronicle" | "qradar" | "elk" | "other";
  sector: "bfsi" | "healthcare" | "mfg" | "saas" | "gov" | "energy" | "retail" | "telecom" | "other";
  gaps: Array<"tooling" | "hunting" | "ir-coord" | "leadership-reporting" | "comms" | "docs" | "burnout">;
  duration: 4 | 8 | 12 | 16 | 26 | null;
  delivery: "vilt" | "on-site" | "blended" | "self-paced";
  teamSize?: "1-5" | "6-15" | "16-50" | "50+";
};
```

### 5.3 Module catalog (grounding context)

The LLM is **grounded in a curated catalog**, not a freeform brainstorm. The catalog is the source of truth for module titles, descriptions, hours, and tags. The LLM may pick from it, sequence it, write rationale, and adjust hours within bounds — it may **not** invent modules outside the catalog.

```ts
type CatalogModule = {
  id: string;                       // stable, used for output validation
  title: string;
  kind: "core" | "adjacent" | "soft";
  description: string;              // 1–2 sentences, written by curriculum
  hoursRange: [min: number, max: number];   // LLM may pick within this range
  signals: {                        // hints the LLM uses to decide relevance
    maturity?: SurveyAnswers["maturity"][];
    roles?: SurveyAnswers["roles"];
    stacks?: SurveyAnswers["stack"][];
    sectors?: SurveyAnswers["sector"][];
    gaps?: SurveyAnswers["gaps"];
  };
};
```

| Kind | Examples | Where they live in v2 |
| --- | --- | --- |
| **Core SOC** | SIEM mastery, MITRE ATT&CK hunting, IR lifecycle, SOAR, forensics | Maps to v2 STAGES + SKILLS |
| **Adjacent technical** | Cloud SOC (AWS / Azure / GCP), Active Directory attack chains, identity threat detection, OT/ICS for industrial sectors, AppSec for in-house developer teams | New |
| **Soft / leadership** | Stakeholder communication, board-level reporting, IR tabletop facilitation, technical writing for runbooks, analyst burnout & shift handoff hygiene, cross-team escalation comms | New |

Catalog target: **≥ 25 modules** across the three kinds before P1 ships.

### 5.4 Prompt design

Three messages on every call:

1. **System prompt** — role, hard constraints, output contract. *Cached* (see §5.7).
2. **Catalog prompt** — the full module catalog as JSON. *Cached.*
3. **User prompt** — the `SurveyAnswers` JSON for this specific request. *Not cached* — uniquely shaped per request.

System prompt skeleton:

```
You are a senior cybersecurity curriculum architect at Edstellar. Your job is to
compose a custom SOC analyst learning track for a corporate training buyer based
on their survey answers, drawing only from the provided module catalog.

Hard rules:
- Use only modules whose `id` appears in the catalog. Do not invent modules.
- Output must conform exactly to the JSON schema described below; no prose
  outside the JSON.
- The selected modules must fit the user's `duration` answer:
    4 weeks → 4 modules; 8 → 6; 12 → 8; 16 → 10; 26 → 12; flexible → 8.
- ≥ 60% of selected modules must have `kind: "core"`.
- If `gaps` includes any of {leadership-reporting, comms, docs, burnout},
  include at least one `kind: "soft"` module.
- If `roles` includes "cloud-soc" OR `sector` is one of
  {bfsi, gov, energy, healthcare}, include at least one `kind: "adjacent"`.
- Sequence selected modules into stages following maturity progression:
  Foundations → Detection → Hunt → Respond → Lead.
- For each selected module, write a one-sentence rationale that names the
  specific answer that drove its selection (the user's stack, sector, gap,
  or role). Rationale must read like an architect wrote it — never
  "selected because of overlap score 8".
- Adjust each module's hours within its `hoursRange` so total hours fit the
  duration: ~24–32 h per week of programme time.

Tone: confident, specific, never marketing fluff.

Output schema: { ... see §5.5 ... }
```

### 5.5 Structured output contract

Forced via Anthropic's structured-output JSON mode. The response must validate against this schema before rendering:

```ts
type GeneratedTrack = {
  headline: string;                  // e.g., "12-week custom SOC track for an Operating SOC running Splunk in BFSI"
  summary: string;                   // 2–3 sentence pitch, written by the model
  totals: {
    weeks: number;                   // matches user's duration choice
    moduleCount: number;
    hours: number;
    deliveryNote: string;            // restates the delivery preference in plain language
  };
  stages: Array<{
    label: string;                   // "Stage 1 · Foundations"
    weeks: number;
    modules: Array<{
      id: string;                    // MUST match a catalog module id
      titleOverride?: string;        // model may slightly retitle for context, original kept for analytics
      hours: number;                 // within hoursRange of the source module
      rationale: string;             // single sentence
    }>;
  }>;
  caveats?: string[];                // optional model notes ("trimmed for 4-week window" etc.)
};
```

Post-LLM validation (server-side, before streaming to client):

1. Parse JSON. If invalid → retry once, then fall back to a static curated track.
2. For every `module.id` in the response, confirm it exists in the catalog. Drop any unknown ids.
3. Check the kind-ratio constraint and module count. If violated, log + return as-is (the model is allowed to make judgement calls within +/- 1 module; below that floor we surface a "best-effort" badge in the UI).
4. Recompute total hours from individual module hours; overwrite `totals.hours` to keep client display honest.

### 5.6 Streaming UX

The API call streams JSON tokens. The result card renders progressively:

1. `headline` and `summary` arrive first → render immediately so the user sees motion within ~1s.
2. `stages[]` arrive in order → render each stage card as it finalizes (streaming JSON parsed with a tolerant streaming parser).
3. CTAs appear once `caveats` is closed (i.e., the JSON document is complete).

Skeleton placeholder shown for unfilled stages so layout doesn't jump.

If streaming fails partway, the partial track is preserved with an inline retry link rather than wiped.

### 5.7 Prompt caching

The system prompt + catalog prompt are stable across requests. Both blocks are tagged with Anthropic's prompt-cache breakpoints so we pay full token cost once and ~10% on subsequent calls within the cache TTL.

Expected per-request cost (with caching warm):

- Cached input (system + catalog ~3–4k tokens): cached read at ~0.1× input price.
- Fresh input (survey answers ~150 tokens): full input price.
- Output (~600–900 tokens for a complete track): full output price.
- **Estimated cost per generation:** $0.005 – $0.015 with Sonnet 4.6 + caching.

At 5,000 generations/month that's ~$25–75/mo — viable.

### 5.8 Edge cases

| Case | Handling |
| --- | --- |
| All gaps unselected | The LLM relies on roles + stack + sector signals; this is well within its capability. |
| `duration: 4 weeks` and 7 roles selected | The prompt asks the model to trim and explain in `caveats[]` (e.g., *"Trimmed to a 4-week window: removed L3 hunting and IR-lead modules; recommend a follow-on cohort for those."*). |
| `maturity: none` (no SOC yet) | System prompt rule: when `maturity === "none"`, force a Foundations stage with the "SOC fundamentals & build-vs-buy" module regardless of other signals. |
| Conflicting answers | The model is instructed to prefer the gap answer over inferred maturity (the user knows their team better than we do). Rationale text reflects the conflict honestly. |
| User answers nothing on optional questions | Optional fields default to `undefined`; the model treats them as "no signal" and proceeds. |
| LLM returns a malformed track (invalid JSON or unknown module id) | Single retry. If it still fails: serve a static **fallback curated track** (the v2 default 26-week 5-stage track) with a banner: *"We couldn't generate a custom track right now. Here's our standard SOC analyst track — a curriculum architect will build the custom version with you."* |
| LLM API is down or rate-limited | Same fallback as above. Surface a `Retry` link that re-fires the generation. |
| User regenerates with same answers | Cached request layer (60-second window, keyed on canonicalized answers JSON) returns the prior track. Saves cost and avoids the user seeing two slightly different tracks for the same input. |

### 5.9 Eval suite (P1 prerequisite)

A fixed set of ~20 hand-crafted `SurveyAnswers` examples with expected behaviour notes:

- **E1:** mature SaaS SOC on Sentinel, gap = leadership-reporting → must include exec-reporting soft-skills module + Sentinel-specific detection-engineering module.
- **E2:** new BFSI SOC on Splunk, gap = hunting → must include Splunk SPL fundamentals + hunting modules + a BFSI-specific threat module.
- **E3:** healthcare team, no SOC, 4-week window → must include SOC fundamentals + HIPAA overlay; `caveats` must mention the trim.
- … (15+ more covering each sector × maturity combo)

Each eval case lists *required signals* (modules that must appear) and *forbidden patterns* (e.g., never propose 26 weeks when user asked for 4). Eval is run with Opus 4.7 against the runtime model's outputs to score correctness; this serves as the prompt-iteration test bench.

If < 17/20 eval cases pass, the prompt isn't ready for P1 ship.

## 6. Track output presentation

After Submit, the survey card swaps for a track-result card *in the same place*. No page reload, no scroll jump.

### 6.1 Result card layout

```
┌─────────────────────────────────────────────────────────────┐
│ Your Custom SOC Analyst Track                              │
│ Built for an Operating SOC running Splunk in BFSI          │
│                                                             │
│ ┌──────────┬──────────┬──────────┬──────────┐              │
│ │  12 wks  │ 8 modules│ 92 hours │ Virtual ILT│            │
│ └──────────┴──────────┴──────────┴──────────┘              │
│                                                             │
│ Stage 1 · Foundations (2 wks)                              │
│   ▢ SOC fundamentals + Splunk SPL refresher (16h)          │
│      Selected because your team runs Splunk.               │
│   ▢ MITRE ATT&CK navigation (8h)                           │
│      Foundational for the L2 detection engineers selected. │
│                                                             │
│ Stage 2 · Detection & Hunting (4 wks)                      │
│   ▢ Detection engineering at scale on Splunk (24h)         │
│   ▢ Hypothesis-driven hunting (16h)                        │
│   ▢ BFSI-specific threat scenarios (8h)                    │
│      Tuned for BFSI fraud and regulatory pressure.         │
│                                                             │
│ Stage 3 · Communication & Leadership (2 wks)               │
│   ▢ Stakeholder reporting for SOC managers (8h)            │
│      You flagged "reporting to leadership" as a gap.       │
│   ▢ Cross-team escalation playbooks (8h)                   │
│                                                             │
│ Stage 4 · Respond & Optimize (4 wks)                       │
│   ▢ NIST 800-61 IR for BFSI environments (16h)             │
│                                                             │
│ ┌──────────────────────────────────────────────────────────┤
│ │ [ Talk to a curriculum architect ]  [ Download PDF ]     │
│ │ [ Save by email ]  [ Share ]  [ Tweak my answers ]       │
│ └──────────────────────────────────────────────────────────┘
└─────────────────────────────────────────────────────────────┘
```

### 6.2 Affordances

- **Request this custom track from Edstellar** *(primary CTA)* — anchor-scrolls to the existing `#contact` form. The full `GeneratedTrack` JSON + `SurveyAnswers` are written into hidden form fields so they ride along on submit.
- **Tweak my answers** — re-opens the survey with prior answers pre-selected. Re-firing generation produces a new track preview.
- **Share preview link** — copies a URL with `SurveyAnswers` serialized into the query string (`?survey=eyJ...`); a colleague who opens it sees the same track regenerated in their browser, with the same gating ("contact us to request it").
- *(Removed)* Download PDF and Save by email — these would let the user walk away with the track without contacting sales, which contradicts the gating model. The PDF lives at `public/track-pdf-template.tsx` and is rendered on the **server side after the contact form is submitted**, then attached to the sales email and the user's confirmation email — so the PDF arrives via the curriculum architect, not via a button click.

### 6.3 Visual treatment of the gate

The gate must be **clear without being adversarial**. The track preview is fully readable (no blur, no "register to see more" pattern). Below the result card sits a calm but unmissable strip:

```
┌─────────────────────────────────────────────────────────────┐
│ ▍ This is a generated preview, reviewed and refined by a   │
│   curriculum architect before scope is confirmed.          │
│                                                             │
│   [ Request this custom track from Edstellar →   ]         │
│                                                             │
│   We'll reply within one business day with the formal      │
│   programme document, costing, and a kickoff date.         │
└─────────────────────────────────────────────────────────────┘
```

The wording explicitly says the track is a starting point so the user understands the contact is the *substance* of the engagement, not a gatekeeper toll.

## 7. v2 → v3 IA changes

| Section | v2 | v3 |
| --- | --- | --- |
| Hero | Single primary CTA → contact | Two CTAs: standard track / build my track |
| (new) | — | **Survey + Result section** sits between hero and stages |
| Stages section | "The Edstellar five-stage SOC analyst learning track" | Same content, but reframed as "The standard track — used as the base for custom tracks" |
| Core skills | Static 6 skill cards | Same, plus a small "Connected skills we may add for you" subsection (4 cards: leadership, comms, cloud SOC, OT/ICS) |
| Trainers | Unchanged | Unchanged |
| Outcomes | Unchanged | Unchanged |
| Plans | Unchanged | Unchanged |
| Contact | `#contact` form | Same form; new hidden field `prefill-track` populated by the result CTA |
| Future-proof CTA | Unchanged | Unchanged |
| FAQ | Unchanged | Add 3 FAQs about how the custom track is built |
| Related paths | Unchanged | Unchanged |

## 8. Components & files

```
src/app/learning-paths/soc-analyst-v3/
  page.tsx                          # mostly copies v2; swaps Hero CTAs and inserts CustomTrackBuilder
src/app/api/generate-track/
  route.ts                          # POST endpoint that calls Anthropic with survey answers, streams response
src/components/custom-track/
  CustomTrackBuilder.tsx            # top-level: state machine for Survey → Result
  SurveyStepper.tsx                 # progress + back/next chrome
  steps/
    StepMaturity.tsx
    StepRoles.tsx
    StepStack.tsx
    StepSector.tsx
    StepGaps.tsx
    StepDuration.tsx
    StepDelivery.tsx
    StepCerts.tsx                   # conditional
    StepTeamSize.tsx                # conditional
    StepLead.tsx                    # email + company, optional
  TrackResultCard.tsx               # render the generated track (streamed)
  TrackResultSkeleton.tsx           # placeholder layout shown while streaming
  ShareUrl.tsx                      # serialize/deserialize answers in querystring
src/lib/track-generator/
  catalog.ts                        # the full module catalog (CatalogModule[])
  prompt.ts                         # system + catalog prompt builders, with cache breakpoints
  client.ts                         # Anthropic SDK wrapper with prompt caching + streaming
  validate.ts                       # post-LLM validation (schema, id presence, kind ratio, hours)
  fallback.ts                       # static curated track served on LLM failure
  types.ts                          # SurveyAnswers, GeneratedTrack, CatalogModule
  evals/
    cases.ts                        # 20+ hand-crafted SurveyAnswers + expected-behaviour notes
    runner.ts                       # batch-runs eval set, scores with Opus 4.7
  __tests__/
    validate.test.ts                # unit tests for schema/post-validation
public/track-pdf-template.tsx       # printable layout for jsPDF render
```

**Why a separate `track-generator/` lib?** The catalog and prompt are the "product" of this feature; they need to be editable by curriculum without touching React or the API plumbing. The lib has no rendering concerns and runs the eval suite headlessly.

**Server-side only.** The API route is the only thing that talks to Anthropic. The Anthropic API key never reaches the browser. The route enforces rate limits (per-IP and per-session) and returns a streamed response over the wire.

## 9. State, persistence, lead capture

- **Form state** — `useReducer` inside `CustomTrackBuilder`. Each step dispatches `{ type: 'answer', key, value }`.
- **Generation state** — three phases: `idle | generating | ready | error`. Streamed tokens are appended to the in-flight track object as they arrive; `ready` flips when the JSON document is closed and post-validation passes.
- **URL hydration** — when the page loads with a `?survey=` query param, decode it into the reducer's initial state and skip straight to the result. Generation is re-fired on hydration (the result is not in the URL — only the inputs are).
- **Generation caching** — server route maintains a 60-second LRU keyed on canonicalised answers JSON. Same answers within the window return the cached track instead of re-calling Anthropic.
- **localStorage** — store the most recent survey answers under `eds.soc.v3.survey`. On revisit, the page offers "Pick up where you left off" instead of restarting. The generated track is **not** stored client-side (it's a derived artifact).
- **Lead capture & sales handoff** — same endpoint as the existing v2 contact form, with the v3 submission carrying the full generated track. New hidden fields injected by `TrackResultCard`:
    - `survey_answers` (JSON blob — the inputs)
    - `generated_track_json` (JSON blob — the full `GeneratedTrack` from §5.5)
    - `generated_track_markdown` (string — server-rendered, human-readable copy of the track for email previews)
    - `track_source` = `"v3-custom-builder"` for funnel analytics
    - `track_id` (uuid — assigned at generation time, lets sales reference a specific generation)
- **What sales sees on submission** (handled server-side in the contact endpoint):
    1. **Email to sales inbox** — subject `[v3 SOC track] {company} — {duration}wk · {sector} · {primary stack}`. Body includes:
        - Lead contact (name, email, company, team size)
        - The 6–10 survey answers in plain English (e.g., *"Maturity: Operating SOC. Stack: Splunk. Sector: BFSI…"*)
        - The full track in markdown (stage by stage, with per-module rationale)
        - A link back to `/learning-paths/soc-analyst-v3?survey=...` so the architect can reproduce the preview the user saw
    2. **CRM entry** — same fields as JSON in the lead record; the architect can attach the formal programme doc directly to that lead.
    3. **PDF attachment** — server renders `track-pdf-template.tsx` at submission time and attaches it to both the sales email and the user's confirmation email.
- **User confirmation email** — sent on submit. Contains:
    - "Thanks — your custom SOC track is with a curriculum architect."
    - The track inline (markdown → HTML).
    - The PDF as an attachment.
    - Architect's expected response time + a calendar link if available.
- **Sales SLA hook** — submissions with `track_source === "v3-custom-builder"` are routed to a fast-response queue; first reply within 1 business day. SLA target visible on the confirmation page.
- **Rate limiting** — API route enforces 10 generations per IP per hour and 3 per session per minute (debounces accidental double-fires). Returns 429 with a friendly message → UI surfaces "Take a breath — try again in a minute."
- **No track without contact** — clients cannot download the PDF, copy the JSON, or otherwise extract a portable artifact from the page. The on-screen preview is fully visible (and shareable as a link), but every portable artifact rides through the contact submission. This is the load-bearing rule of the gating model.

## 10. Analytics events

| Event | Properties |
| --- | --- |
| `v3_hero_view` | (page-level pageview) |
| `v3_survey_start` | hero_cta vs. mid-page CTA |
| `v3_survey_step` | step_index, step_id, time_on_step_ms |
| `v3_survey_back` | from_step, to_step |
| `v3_survey_abandon` | step_index, time_total_ms |
| `v3_survey_submit` | answers (anonymized) |
| `v3_generate_start` | answers_hash |
| `v3_generate_complete` | latency_ms, input_tokens, output_tokens, cache_hit_pct, retry_count |
| `v3_generate_fail` | reason (`invalid_json` / `unknown_module_id` / `api_error` / `rate_limited` / `timeout`), fallback_served (bool) |
| `v3_track_view` | module_count, hours_total, contains_soft_skills, contains_adjacent, served_from_fallback, track_id |
| `v3_track_request_clicked` | track_id, time_on_track_ms (preview → click latency) |
| `v3_track_request_submitted` | track_id, lead_email_domain (anonymised), modules_in_track |
| `v3_track_share_preview` | track_id |
| `v3_track_retake` | step_returned_to |

Funnel goal: % of `v3_hero_view` that reach `v3_track_request_submitted`. Aspiration: 3–5× the v2 hero-to-contact-submit rate. The intermediate `v3_track_request_clicked → v3_track_request_submitted` step is where most drop-off will sit; instrumenting both lets us see whether the gate or the form itself is the friction point.

## 11. Phased delivery

| Phase | Scope | Ship target |
| --- | --- | --- |
| **P0 — Foundation** | New v3 route forked from v2. New Hero with two CTAs. Stub survey card (single placeholder step). Empty result card. API route scaffold returning a hardcoded mock track. No real LLM call yet. | Week 1 |
| **P1 — Survey + Catalog + Prompt** | All 7 base questions + 1 conditional (team-size). Catalog populated (≥ 25 modules covering core, adjacent, soft). System + catalog prompts authored, cache breakpoints set. Server route calls Anthropic with caching + streaming. Post-LLM validation. Static fallback track. | Weeks 2–3 |
| **P1.5 — Eval iteration** | 20-case eval suite authored. Iterate prompt against the suite until ≥ 17/20 pass. This is the longest variable — budget for prompt rework. | Weeks 3–4 |
| **P2 — Output Affordances** | PDF download, share-URL serialization, email-to-self, tweak-my-answers, prefill into contact form. localStorage resume. Streaming UX polish (skeletons, partial-failure recovery). Analytics events incl. cost telemetry. | Week 5 |
| **P3 — Polish & QA** | Mobile pass, accessibility (full keyboard + screen-reader of survey + screen-reader friendly streaming announcements), print stylesheet, copy review, content QA across all 8 sectors × 6 stacks combinations spot-checked end-to-end. | Week 6 |
| **P4 — Soft Launch** | Ship v3 alongside v2. Run for 2 weeks with internal traffic + a single external paid channel. Watch funnel + LLM cost dashboard daily. | Week 7 |
| **P5 — Decision** | Either roll v3 to canonical `/learning-paths/soc-analyst` URL and redirect v2, or iterate on v3 based on funnel + eval results. | Week 8 |

## 12. Open questions

1. **API key + billing** — does Edstellar already have an Anthropic API account, or do we provision a new one? Need this before P1. Set up a separate API key per environment (dev / staging / prod) with usage caps.
2. **Cost ceiling** — what's the monthly LLM-spend ceiling we're committing to? At ~$0.01/generation a 5,000/mo cap is ~$50, but a viral surge could outrun that. Recommendation: hard rate-limit at the route level (already in §9) plus a daily-spend cap that fails closed to the static fallback track.
3. **Streaming on Vercel** — confirm the deployment target supports edge streaming or Node-runtime SSE. If we're behind a CDN that buffers, streaming is moot and we ship non-streamed in P2.
4. **PDF design** — marketing-grade brochure vs. print-friendly text doc? Marketing-grade takes a designer pass; text-friendly ships in P2.
5. **Gating model — confirmed.** Track preview is freely visible on the page; every portable artifact (PDF, email summary, formal scope) is gated behind the contact-form submission. Sales receives the full survey answers + generated track on every submission. *(Open sub-question: do we A/B-test partial preview blur or word-count truncation post-P4 to drive higher submit rates? Decision deferred to post-launch data.)*
6. **Hours slider on result card** — should the user be allowed to drag to expand/contract a stage? Adds scope; defer past P3.
7. **Multi-role output** — one merged track or two parallel tracks when the user picks L1 + manager? Recommendation: one merged track, sectioned by role at the top of the result. Reassess after P4 data.
8. **i18n** — English-only at launch; localize after the funnel is validated. Relevant if we want the LLM to generate non-English rationale, which Sonnet 4.6 can do but inflates the eval suite.
9. **Catalog authoring workflow** — who maintains `catalog.ts`? Likely curriculum + marketing, not engineering. Sketch: keep TypeScript for now, surface a markdown twin (`CATALOG.md`) generated from the source so non-engineers can read and propose edits via PR.
10. **Beyond SOC?** — once v3 ships, the same generator fits the other 6 learning paths (pen tester, cloud security engineer, GRC, security architect, DevSecOps, CISO). Treat the `track-generator/` lib as path-agnostic from day one — the catalog is the swappable piece. The system prompt would be parameterised on path.
11. **Eval cadence** — re-running the 20-case eval on every Anthropic model version bump is necessary; should this run nightly via a cron, or only when we actively change prompts/catalog? Recommendation: weekly cron + on every prompt PR.
12. **PII redaction in logs** — survey answers can include sector + team-size which are corporate fingerprints. Server-side logging strips email/company; only the answers themselves and `answers_hash` go to telemetry.

## 13. Risks

| Risk | Mitigation |
| --- | --- |
| Catalog too thin → tracks look identical for many answer combos | Author at least 25 modules across core/adjacent/soft before P1 ships |
| LLM hallucinates a module that isn't in the catalog | Post-validation drops unknown ids; structured-output JSON mode reduces but doesn't eliminate; eval suite includes cases that probe for invention |
| LLM ignores the kind-ratio constraints (e.g., 0 core modules) | Post-validation flags the violation; UI shows a "best-effort" badge; eval suite catches systemic regressions before ship |
| LLM produces nonsensical sequences (e.g., IR before SIEM basics) | System prompt mandates Foundations → Detection → Hunt → Respond → Lead progression; eval cases assert sequence correctness |
| Latency > 4s makes generation feel broken | Streaming + skeleton placeholders so first paint is < 1s; cache breakpoints keep system+catalog warm |
| Anthropic API outage | Static fallback track served with friendly banner; API health-check upstream |
| LLM cost overruns | Per-IP/per-session rate limits, per-day spend cap, daily cost dashboard; fail-closed to fallback track when cap is hit |
| Model behaviour drift on Anthropic version bump | Pin model version explicitly; weekly eval cron alerts if pass rate drops below 17/20 |
| Generated track contradicts sales' instinct | Every result has a prominent "Request this custom track" CTA; the output is the start of a conversation, not the final word; sales sees the exact track + answers and can reshape it before responding |
| Track output read as a binding quote | Disclaimer line: *"This is a recommended starting point. Final scope and cost are confirmed with a curriculum architect."* |
| User submits the form expecting an instant track delivery | Confirmation email goes out immediately with the on-screen track + PDF attached; SLA copy on the confirmation page sets a 1-business-day expectation for the architect reply |
| Sales gets flooded with low-intent submissions | Rate limit at the contact route plus require minimum field completion (email + company); add a small "Are you evaluating training in the next 90 days?" yes/no on the contact form just for v3 submissions |
| Sales misses the generated-track context buried in the email | Subject-line template `[v3 SOC track] {company} — {duration}wk · {sector} · {primary stack}` keeps the relevant signal in the inbox preview; CRM entry tags the lead `v3-custom-builder` for filtering |
| Internal email rendering doesn't preserve the track formatting | Server-rendered markdown → HTML; PDF attachment is the canonical artifact; markdown is fallback if the email client is hostile |
| Survey too long → high drop-off | Hard cap of 7 visible questions per path; conditional-only beyond that |
| Prompt-injection via answer fields (custom "other" inputs) | All free-text fields are length-capped (≤ 80 chars), sanitized for control characters, and the system prompt explicitly instructs the model to ignore instructions inside the user JSON. Free-text input is also forbidden in P0–P2; "Other" options are radio-only without a write-in. |
| v2 was indexed; v3 splits SEO equity | When v3 promotes to canonical, set up 301 from v2 → v3 |

## 14. Success criteria

- ≥ 35% of users who land on v3 start the survey (`v3_survey_start / v3_hero_view`)
- ≥ 60% of starters complete the survey (`v3_survey_submit / v3_survey_start`)
- ≥ 30% of completers click the "Request this custom track" CTA (`v3_track_request_clicked / v3_track_view`)
- ≥ 60% of CTA clicks become contact-form submissions (`v3_track_request_submitted / v3_track_request_clicked`)
- Hero → contact-form-submit funnel at least **2× v2**
- Sales reports that the survey answers + generated track materially shorten discovery calls; first-reply latency drops below the v2 baseline because the architect already knows what the buyer needs

---

## 15. Webflow deployment

The current implementation lives in a Next.js codebase. The marketing site is on Webflow, so the v3 feature has to deploy there. Webflow's Designer + CMS handle layout and content, but **Webflow itself cannot call the Anthropic API** (no native server runtime that can hold an API key, no general-purpose serverless function tier available on every plan). The architecture has to split.

### 15.1 Recommended architecture

```
┌────────────────────────────────┐         ┌──────────────────────────────────┐
│ WEBFLOW SITE                   │         │ SERVERLESS BACKEND               │
│ (edstellar.com)                │         │ (Vercel / Cloudflare / Lambda)   │
│                                │         │                                  │
│  Page: /learning-paths/        │         │  POST /api/generate-track        │
│        soc-analyst             │  ─────► │   • holds ANTHROPIC_API_KEY      │
│                                │         │   • prompts + cache breakpoints  │
│  • Hero, stages, skills,       │         │   • calls Sonnet 4.6             │
│    trainers, outcomes, plans,  │         │   • validates against catalog    │
│    FAQ — native Webflow        │         │   • returns GeneratedTrack JSON  │
│                                │         │                                  │
│  • "Build a custom track"      │         │  POST /api/submit-track-request  │
│    button (Webflow-styled)     │  ◄───── │   • receives form payload +      │
│                                │         │     track JSON                   │
│  • Custom Embed: small JS      │         │   • emails sales                 │
│    bundle that mounts the      │         │   • writes to Webflow CMS lead   │
│    survey/result modal         │         │     collection (or HubSpot/CRM)  │
│                                │         │                                  │
│  • Webflow Form (existing      │         │                                  │
│    contact form) — action      │         │                                  │
│    URL pointed at backend      │         │                                  │
│                                │         │                                  │
│  • CMS Collection:             │         │                                  │
│    "Track Modules" (catalog,   │  ─────► │   reads catalog via Webflow      │
│    editable by curriculum)     │         │   Data API on warm cache         │
└────────────────────────────────┘         └──────────────────────────────────┘
```

The Webflow page remains the front door — content, SEO, navigation, brand. A small JavaScript bundle (the modal + survey + result UI) is embedded into the page via a Webflow Custom Code block or an Embed element. When the user clicks the "Build a custom track" button, the bundle's modal opens, walks them through the survey, and POSTs to the serverless backend. The backend holds the Anthropic key, calls Claude, validates, and returns a `GeneratedTrack` JSON. The bundle renders the result. When the user clicks "Request this custom track", the bundle POSTs the survey + track to the backend's `submit-track-request` endpoint, which emails sales and writes the lead to Webflow CMS (or HubSpot/Salesforce if that's your CRM of record).

### 15.2 Where each piece lives

| Piece | Webflow | Serverless backend | Notes |
| --- | --- | --- | --- |
| Page layout, hero, stages, skills, trainers, outcomes, plans, FAQ | ✅ native | — | Webflow Designer; reuse what's already there |
| Hero CTAs (Request a Quote, Book a demo) | ✅ native Webflow form anchors | — | Unchanged |
| "Build a custom track" button beside the curriculum-PDF CTA | ✅ Webflow button + lime pulsing dot styled as a custom class | — | Triggers a click handler injected by the embed bundle |
| Survey modal UI + state machine | ✅ Custom Embed | — | A standalone React/Vue/vanilla bundle, ≤ 50KB gzipped |
| Result card + gate strip | ✅ inside the embed bundle | — | Same render as the Next.js version |
| Track generation (LLM call) | — | ✅ `/api/generate-track` | Holds API key + prompt logic |
| Module catalog source of truth | ✅ Webflow CMS Collection | reads via Webflow Data API | Curriculum can edit modules without a deploy |
| Validation + fallback track | — | ✅ inside the API route | Hidden from the client |
| Contact form (visible) | ✅ native Webflow Form | — | Webflow Designer; existing form |
| Form submission handling | — | ✅ `/api/submit-track-request` | Webflow form action overridden to POST here, or use Webflow's Logic / Zapier to forward to the same endpoint |
| Lead storage | ✅ Webflow CMS "Leads" collection | — | Webflow CMS is convenient if marketing reads it; otherwise pipe to HubSpot/Salesforce |
| Sales notification email | — | ✅ from the backend | Use Resend / Postmark / SES; structured email with the full track + survey answers |

### 15.3 Build steps

#### Backend (week 1)

1. Take the existing Next.js codebase. Strip out everything except `src/app/api/generate-track`, `src/lib/track-generator/*`, and a new `src/app/api/submit-track-request`.
2. Deploy as a standalone Next.js app to Vercel. The two routes are the only public surface.
3. Set `ANTHROPIC_API_KEY` in the Vercel project env.
4. Add CORS headers so the Webflow domain can call these endpoints (`Access-Control-Allow-Origin: https://www.edstellar.com`).
5. Swap the stub Anthropic client for the real SDK call (~30 lines per the comment in `client.ts`).
6. Add a Webflow Data API wrapper that reads the "Track Modules" collection on cache-miss, falls back to the in-code `CATALOG` if Webflow is unreachable.

#### Webflow (week 1–2)

1. **CMS Collection — "Track Modules"**: create a collection with fields:
    - `Title` (Plain Text), `Module ID` (Plain Text, unique), `Kind` (Option: core / adjacent / soft), `Description` (Rich Text), `Hours Min` (Number), `Hours Max` (Number)
    - `Signals — Maturity` (Multi-Option), `Signals — Roles` (Multi-Option), `Signals — Stacks` (Multi-Option), `Signals — Sectors` (Multi-Option), `Signals — Gaps` (Multi-Option)
    - Seed it with the 28 modules from `src/lib/track-generator/catalog.ts`. Hand off to the curriculum team for ongoing edits.
2. **Page**: update `/learning-paths/soc-analyst` in Webflow Designer.
    - Add a new "Build a custom track" button next to the existing "Download full curriculum PDF" button at the end of the standard-track section. Style it with the Edstellar navy outline + a small lime pulsing dot (use Webflow Interactions to drive the pulse, or pure CSS animation in a Custom Code block).
    - Add a Custom Code embed (project-level head/before-`</body>`, or page-level) that loads the modal bundle: `<script src="https://app.edstellar.com/track-builder.js" defer></script>` — the bundle is hosted on the same Vercel project as the API.
    - The bundle finds buttons with `data-eds-open-track` attribute and wires click handlers; mounting happens in the body via a portal-style div.
3. **Webflow Form**: in the existing contact form's settings, override the Action URL to `https://api.edstellar.app/api/submit-track-request`. Add hidden fields for `track_id`, `survey_answers`, `generated_track_json`, `track_source` — the bundle populates them when the user clicks "Request this custom track".

#### Bundle (week 2)

1. Take `src/components/custom-track/CustomTrackBuilder.tsx` + `CustomTrackContactForm.tsx` from the Next.js prototype.
2. Strip Next.js-specific bits (no `next/image`, no server components — already client components).
3. Build with Vite or esbuild as a single IIFE bundle that exposes a global mount function. Output `track-builder.js` to the backend's `public/` folder.
4. The bundle finds `[data-eds-open-track]` buttons in the DOM, wires click handlers, mounts the modal portal, and on submit POSTs to `/api/generate-track` (cross-origin to Vercel).

### 15.4 Webflow CMS as the catalog source

Putting the module catalog in Webflow CMS is the highest-leverage win of the Webflow deployment:

- **Curriculum + marketing edit modules in Webflow Designer**, no engineering deploy.
- **Versioning** comes free via Webflow's CMS publishing model — drafts vs published.
- **The backend reads from Webflow Data API** (with an API token in env), and falls back to a hardcoded snapshot if Webflow is down.
- **Localisation** is supported per-locale in Webflow Localization — when v3 internationalises (§12.8), the catalog can carry per-locale fields without code changes.

Trade-off: cold reads to Webflow CMS add ~200ms latency. Solve with a 5-minute in-memory cache in the backend; modules don't change minute-to-minute.

### 15.5 Webflow Cloud (alternative) — single-host option

Webflow Cloud (in beta/early access at the time of writing) hosts a Next.js app inside Webflow infrastructure on a Webflow subpath. If Edstellar has access:

- Skip the separate Vercel deployment.
- Run the existing Next.js codebase as a Webflow Cloud project at `/learning-paths/soc-analyst`.
- Webflow Cloud handles deploys, env vars, server runtime.

This collapses the architecture to a single host but introduces dependency on Webflow Cloud's beta capabilities. **Recommendation:** use the split architecture for production launch (battle-tested), revisit Webflow Cloud once it's GA.

### 15.6 Trade-offs vs the Next.js implementation

| Aspect | Next.js (current) | Webflow + backend |
| --- | --- | --- |
| Page rendering | Server-rendered React | Webflow static HTML + JS bundle |
| Catalog editing | Code change + deploy | Webflow CMS edit (no deploy) |
| API call latency | Same-origin, no CORS | Cross-origin, ~50–100ms additional |
| SEO surface | Native SSR + metadata | Webflow native (still solid) |
| Brand consistency | Manual styling | Inherits Webflow brand system automatically |
| Ops complexity | One repo, one deploy | Two systems (Webflow + Vercel) — keep them in sync |
| Form handling | Custom React form | Native Webflow form — already integrated with sales workflows |
| Bundle size delivered | Next.js page (~150KB) | Webflow page + 30–50KB embed bundle |
| Marketing autonomy | Low (engineers gate edits) | High (Designer + CMS are self-serve) |

The Webflow split is the right pattern for Edstellar specifically: marketing already runs the rest of the site in Webflow Designer + CMS; this feature should not be the one piece engineering has to redeploy for every copy tweak.

### 15.7 Cost estimate (monthly)

- **Webflow**: existing plan, no incremental cost
- **Vercel** (hobby tier): free at < 100k function invocations/month — fits the projected 5,000 generations/mo
- **Anthropic Sonnet 4.6** with prompt caching: ~$25–75/mo (per §5.7)
- **Email send (Resend/Postmark)**: ~$0–10/mo at this volume
- **Total incremental**: roughly **$50–100/mo**

### 15.8 Open Webflow questions

1. **Which Webflow plan does Edstellar have?** CMS API access requires Site Plan: CMS or higher. Confirm before committing to the catalog-in-Webflow approach.
2. **Where do leads land today?** If sales already operates inside HubSpot/Salesforce, route the backend's `submit-track-request` directly to that CRM rather than to Webflow CMS — avoids fragmenting the lead record.
3. **Form action override** — does the existing contact form already point at a custom endpoint, or does it use Webflow's native form handler? If the latter, redirecting it will require copying any existing automations (auto-reply emails, Zapier triggers).
4. **Custom code budget on the page** — Webflow caps custom code at 10,000 characters per page on some plans. The 30–50KB bundle is hosted externally, so the inline custom code is just a `<script src=...>` (well under the limit), but verify on the actual plan.
5. **Webflow Localization** — if the SOC analyst page is localised, the embed has to pick up the active locale and forward it to the backend so the catalog and prompt can return the right language. Out of scope for launch but worth designing in from day one.

---

**Next step:** confirm the survey question set (Section 4.1) and the module catalog scope (Section 5.3 — 25+ modules). Once those are locked, P0 + P1 are buildable in 3 weeks.
