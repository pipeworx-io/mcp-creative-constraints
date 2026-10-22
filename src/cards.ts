/**
 * creative-constraints — the deck.
 *
 * 162 original constraint cards across nine categories. Every card is one
 * imperative sentence ("constraint") an agent or a team can apply to any
 * task — a product launch, an essay, an onboarding flow, a dinner — plus one
 * sentence on why it helps ("why"). All text is written for this pack; there
 * is no public-domain foundation behind this deck (unlike tarot or I Ching),
 * so nothing here is adapted from an existing creativity-technique book or
 * commercial card deck.
 *
 * Do not hand-edit an id after publishing a draw result that cited it —
 * `id` is what `get_constraint` and reproducible `draw_constraint` results
 * key on. Append new ids; never renumber existing ones.
 */

export type ConstraintCategory =
  | 'perspective'
  | 'limitation'
  | 'medium'
  | 'time'
  | 'audience'
  | 'inversion'
  | 'scale'
  | 'process'
  | 'wildcard';

export const CONSTRAINT_CATEGORIES: ConstraintCategory[] = [
  'perspective',
  'limitation',
  'medium',
  'time',
  'audience',
  'inversion',
  'scale',
  'process',
  'wildcard',
];

export interface ConstraintCard {
  id: string;
  category: ConstraintCategory;
  title: string;
  constraint: string;
  why: string;
}

export const DECK_ID = 'creative-constraints';
export const DECK_VERSION = '1';

export const CARDS: ConstraintCard[] = [
  // ── perspective — shift whose eyes you see it through ──────────────────
  { id: 'perspective_01', category: 'perspective', title: "Outsider's First Look", constraint: 'Describe this as someone encountering it for the very first time, assuming no shared context.', why: 'Removing assumed context exposes the jargon and shortcuts insiders stop noticing.' },
  { id: 'perspective_02', category: 'perspective', title: "The Skeptic's Seat", constraint: 'Argue the strongest case against the approach you are currently taking.', why: 'Naming the best counter-argument early is cheaper than discovering it after commitment.' },
  { id: 'perspective_03', category: 'perspective', title: 'Ten Years Later', constraint: 'Describe how this will look, or be judged, a decade from now.', why: 'Long horizons strip out short-term flattery and reveal what actually compounds.' },
  { id: 'perspective_04', category: 'perspective', title: 'The Person It Fails', constraint: 'Identify the single person this is most likely to fail and describe the experience from their side.', why: 'Edge cases are invisible from the center; naming one person makes the risk concrete.' },
  { id: 'perspective_05', category: 'perspective', title: 'Borrowed Expertise', constraint: 'Approach this the way a specific expert from an unrelated field would, such as a surgeon, a pilot, or a chef.', why: "An outside discipline's habits surface options your own training trained you to skip." },
  { id: 'perspective_06', category: 'perspective', title: "The Competitor's View", constraint: 'Explain why a rival would be glad you built it this way.', why: 'If an adversary would welcome the choice, the choice probably favors them, not you.' },
  { id: 'perspective_07', category: 'perspective', title: "Child's Account", constraint: 'Explain the whole thing in words a ten-year-old would understand, with no exceptions.', why: 'If the explanation collapses, the idea itself may not be settled yet.' },
  { id: 'perspective_08', category: 'perspective', title: "The Historian's Footnote", constraint: 'Write the one sentence a future retrospective would use to summarize this decision.', why: 'Compressing to one sentence forces you to decide what actually mattered.' },
  { id: 'perspective_09', category: 'perspective', title: 'Regret Minimization', constraint: 'Describe the version of this you would be least embarrassed to explain in five years.', why: 'Naming the embarrassing version in advance is how you avoid building it.' },
  { id: 'perspective_10', category: 'perspective', title: 'The User Who Never Asked', constraint: 'Consider someone who will encounter this without ever having wanted it, and describe their experience.', why: 'Most audiences for anything are involuntary audiences; design for them too.' },
  { id: 'perspective_11', category: 'perspective', title: 'Reverse Chronology', constraint: 'Start from the ending and work backward to how it was reached.', why: 'Working backward reveals steps that are assumed rather than earned.' },
  { id: 'perspective_12', category: 'perspective', title: "The Translator's Problem", constraint: 'Describe how this would be explained in a language or culture with no direct equivalent term for it.', why: 'A concept that cannot translate may be relying on an assumption, not a truth.' },
  { id: 'perspective_13', category: 'perspective', title: "The Investor's Ledger", constraint: 'Describe this purely in terms of what it costs and what it returns, with no other language allowed.', why: 'Pure costed language strips away justifications dressed as values.' },
  { id: 'perspective_14', category: 'perspective', title: 'A Second Observer', constraint: 'Imagine a silent observer watching you do this who will later be asked to describe your intent.', why: "Visible intent, not stated intent, is what a jury of observers actually reports." },
  { id: 'perspective_15', category: 'perspective', title: 'The Beneficiary Nobody Named', constraint: 'Identify who benefits from this who was never mentioned in planning.', why: 'Unnamed beneficiaries often reveal the real incentive structure behind a decision.' },
  { id: 'perspective_16', category: 'perspective', title: 'View From the Exit', constraint: 'Describe how this looks to someone who is about to leave the room, project, or relationship entirely.', why: "People about to leave tell the truth other audiences won't." },
  { id: 'perspective_17', category: 'perspective', title: "The Apprentice's Question", constraint: 'Answer the single most basic question a total beginner would ask about this.', why: 'A basic question dodged under expertise is usually the one that matters most.' },
  { id: 'perspective_18', category: 'perspective', title: 'Mirror the Opposite', constraint: "Describe the opposite of what you are doing and say why you didn't choose it.", why: 'Articulating the discarded path tests whether the chosen one was actually better.' },

  // ── limitation — remove a resource ──────────────────────────────────────
  { id: 'limitation_01', category: 'limitation', title: 'No Budget', constraint: 'Solve this assuming you have zero money to spend.', why: 'Removing money forces creativity that budget usually substitutes for.' },
  { id: 'limitation_02', category: 'limitation', title: 'Half the Time', constraint: 'Produce the same outcome in half the time you planned to give it.', why: 'A tighter clock reveals which steps were padding rather than necessity.' },
  { id: 'limitation_03', category: 'limitation', title: 'One Tool Only', constraint: 'Complete this using exactly one tool, material, or method, with no substitutions.', why: 'A single-tool limit exposes real constraints by removing the easy workaround.' },
  { id: 'limitation_04', category: 'limitation', title: 'No Words', constraint: 'Communicate the core of this without using written or spoken language.', why: 'Stripping language forces the idea down to its structure or shape.' },
  { id: 'limitation_05', category: 'limitation', title: 'Missing Expert', constraint: 'Proceed as if the one person everyone defers to on this is unavailable indefinitely.', why: 'Single points of expertise are fragile; plan as if they can vanish.' },
  { id: 'limitation_06', category: 'limitation', title: 'No Second Draft', constraint: 'Produce a version that must work on the first attempt, with no revision pass allowed.', why: 'First-attempt pressure surfaces the parts you were relying on iteration to fix.' },
  { id: 'limitation_07', category: 'limitation', title: 'Smallest Possible Version', constraint: 'Build the smallest version of this that could still be called complete.', why: 'Minimums reveal what the idea actually needs versus what it merely accumulated.' },
  { id: 'limitation_08', category: 'limitation', title: 'No New Resources', constraint: 'Use only what already exists in the room, team, or budget right now.', why: 'Existing resources are usually sufficient; new ones are often a delay disguised as a requirement.' },
  { id: 'limitation_09', category: 'limitation', title: 'Silence the Loudest Voice', constraint: 'Make this decision without input from whoever usually has the most influence over it.', why: 'A loud default voice can crowd out quieter, equally valid ones.' },
  { id: 'limitation_10', category: 'limitation', title: 'One Page', constraint: 'Fit the entire explanation of this on a single page or screen.', why: 'A page limit punishes vagueness because vagueness needs room to hide in.' },
  { id: 'limitation_11', category: 'limitation', title: 'No Permission', constraint: 'Act as though no approval, sign-off, or consensus is required or available.', why: "Removing the approval step shows what you'd actually choose if nobody could say no." },
  { id: 'limitation_12', category: 'limitation', title: 'Offline Only', constraint: 'Complete this with no internet access or connected tools for the duration.', why: 'Offline work exposes dependence on lookup that could have been knowledge instead.' },
  { id: 'limitation_13', category: 'limitation', title: 'Borrowed Materials', constraint: 'Build this using only materials, assets, or components borrowed from something else already made.', why: 'Reuse constraints force you to adapt rather than default to building from scratch.' },
  { id: 'limitation_14', category: 'limitation', title: 'No Specialists', constraint: 'Assume the only people available are generalists with no deep expertise in the subject.', why: 'Generalist constraints test whether the plan depends on rare skill or on clear thinking.' },
  { id: 'limitation_15', category: 'limitation', title: 'Fixed Headcount', constraint: 'Assume exactly one person must do this alone, however large it is.', why: 'Solo constraints reveal what genuinely requires coordination versus what was coordination theater.' },
  { id: 'limitation_16', category: 'limitation', title: 'No Repeats', constraint: 'Disallow using any method, phrase, or approach you have already used on something similar.', why: 'Banning the familiar path forces a search for a less lazy one.' },
  { id: 'limitation_17', category: 'limitation', title: 'Hard Stop', constraint: 'Set a deadline earlier than feels comfortable and treat it as immovable.', why: 'An uncomfortable deadline reveals the true minimum rather than the negotiated one.' },
  { id: 'limitation_18', category: 'limitation', title: 'No Explaining', constraint: 'Deliver this with no accompanying explanation, context, or caveats attached.', why: 'If the thing needs its own defense to work, the thing itself may be the problem.' },

  // ── medium — change the form of expression ──────────────────────────────
  { id: 'medium_01', category: 'medium', title: 'Physical Object', constraint: 'Represent this as a physical object someone could hold.', why: 'Physical form forces decisions a slide or document lets you defer.' },
  { id: 'medium_02', category: 'medium', title: 'Spoken Only', constraint: 'Deliver this purely out loud, with nothing written down.', why: 'Speech exposes which parts only make sense with visual padding around them.' },
  { id: 'medium_03', category: 'medium', title: 'Single Image', constraint: 'Compress the entire idea into one image with no caption.', why: 'An uncaptioned image is an honesty test for what the idea actually communicates.' },
  { id: 'medium_04', category: 'medium', title: 'Song or Rhythm', constraint: 'Express the core structure of this as a song, chant, or rhythmic pattern.', why: 'Rhythm forces compression to the handful of beats that actually matter.' },
  { id: 'medium_05', category: 'medium', title: 'Letter to a Stranger', constraint: 'Write this as a letter to someone who has never met you or your work.', why: 'Letters assume no shared history, which strips out insider shorthand.' },
  { id: 'medium_06', category: 'medium', title: 'Interactive Demo', constraint: 'Build this as something a person can touch, click, or manipulate rather than read about.', why: 'Interaction reveals gaps that passive description lets you paper over.' },
  { id: 'medium_07', category: 'medium', title: 'Comic Strip', constraint: 'Lay this out as a sequence of panels, each with one beat.', why: 'Panel limits force a clear sequence instead of a tangled, simultaneous mess.' },
  { id: 'medium_08', category: 'medium', title: 'Spreadsheet Only', constraint: 'Express the entire plan using only rows, columns, and numbers.', why: 'Numeric form exposes vague reasoning that prose can disguise as decided.' },
  { id: 'medium_09', category: 'medium', title: 'Recipe Card', constraint: 'Write this as a numbered recipe with ingredients and steps.', why: 'Recipe form forces explicit inputs and an explicit order of operations.' },
  { id: 'medium_10', category: 'medium', title: 'Map or Diagram', constraint: 'Show this as a spatial map or diagram rather than a list.', why: 'Spatial layout reveals relationships that linear lists hide or flatten.' },
  { id: 'medium_11', category: 'medium', title: 'Voicemail', constraint: 'Deliver this as a single voicemail message under one minute.', why: 'A hard time limit forces out the one sentence that actually needed saying.' },
  { id: 'medium_12', category: 'medium', title: 'Museum Label', constraint: 'Write this as the small placard beside an object in a museum.', why: 'Museum labels compress context, meaning, and provenance into a few lines.' },
  { id: 'medium_13', category: 'medium', title: 'Game Rules', constraint: 'Turn this into a short set of rules for a game someone else could play.', why: 'Rules force explicit boundaries where intentions were previously implicit.' },
  { id: 'medium_14', category: 'medium', title: 'Weather Report', constraint: 'Describe the current state of this the way a forecaster describes weather.', why: 'Forecast language forces probability and trend instead of flat certainty.' },
  { id: 'medium_15', category: 'medium', title: 'Recipe for Disaster', constraint: 'Write the instructions for how to make this fail completely, then invert them.', why: 'Designing the failure path in detail is often clearer than designing success directly.' },
  { id: 'medium_16', category: 'medium', title: 'Postcard', constraint: 'Fit the whole update into the space of a postcard, front and back.', why: "Postcard space punishes anything that isn't the actual point." },
  { id: 'medium_17', category: 'medium', title: 'Dance or Gesture', constraint: 'Express the shape of this through movement or gesture rather than words.', why: 'Gesture reveals structure — sequence, emphasis, pace — that words can bury.' },
  { id: 'medium_18', category: 'medium', title: 'Legal Contract', constraint: 'Write this as a short contract with clauses and obligations between parties.', why: 'Contract language forces explicit commitments where casual language left them vague.' },

  // ── time — change the time dimension ────────────────────────────────────
  { id: 'time_01', category: 'time', title: 'Right Now', constraint: 'Produce a usable version in the next five minutes, however rough.', why: 'Immediate deadlines separate what is essential from what was just comfortable.' },
  { id: 'time_02', category: 'time', title: 'A Hundred Years', constraint: 'Design this as though it needs to still make sense a century from now.', why: 'Century-scale thinking filters out anything riding on a passing trend.' },
  { id: 'time_03', category: 'time', title: 'One Breath', constraint: 'Explain the core of this in the time it takes to exhale once.', why: 'Breath-length limits force out the single idea that actually carries the rest.' },
  { id: 'time_04', category: 'time', title: "Tomorrow's Deadline", constraint: 'Treat this as due first thing tomorrow morning, with no extensions.', why: 'A near deadline reveals which steps were genuinely required versus merely planned.' },
  { id: 'time_05', category: 'time', title: 'Before It Existed', constraint: 'Describe how this problem was handled before the current tool, process, or technology existed.', why: 'Older solutions often reveal the actual problem underneath the current tooling.' },
  { id: 'time_06', category: 'time', title: 'Slow Motion', constraint: "Walk through this at one-tenth the pace you'd normally use.", why: 'Slowed pace surfaces steps your normal speed lets you skip over unnoticed.' },
  { id: 'time_07', category: 'time', title: 'Already Over', constraint: 'Describe this as though it has already happened and you are reporting the result.', why: 'Writing from the future tense forces a concrete, falsifiable outcome instead of a hope.' },
  { id: 'time_08', category: 'time', title: 'Seasonal Shift', constraint: 'Reconsider this as though it must happen in a different season than planned.', why: 'Seasonal shift exposes assumptions baked in from a specific time of year.' },
  { id: 'time_09', category: 'time', title: 'The Morning After', constraint: 'Describe how this looks the morning after it ships or happens.', why: 'The morning-after view strips the excitement of launch down to the actual residue.' },
  { id: 'time_10', category: 'time', title: 'No Deadline At All', constraint: 'Remove every deadline and ask what you would still choose to do first.', why: 'Priorities under no deadline reveal what you actually value versus what urgency dictated.' },
  { id: 'time_11', category: 'time', title: 'Last Chance', constraint: 'Treat this as the only attempt you will ever get, with no do-overs.', why: 'Last-chance framing surfaces corners that "we\'ll fix it later" was quietly protecting.' },
  { id: 'time_12', category: 'time', title: 'Before Anyone Is Watching', constraint: 'Do the early version of this before telling anyone it is happening.', why: 'Private early drafts are honest in a way that announced ones rarely are.' },
  { id: 'time_13', category: 'time', title: 'Change Every Hour', constraint: 'Design this to be revisited and potentially changed every single hour.', why: 'Hourly revision pressure tests whether the plan survives contact with new information.' },
  { id: 'time_14', category: 'time', title: 'One Season to Live', constraint: 'Assume this only needs to work for a single season, then be retired.', why: 'Short lifespans permit choices a "forever" version would never allow.' },
  { id: 'time_15', category: 'time', title: "Yesterday's Version", constraint: 'Compare this directly against the version of it that existed yesterday.', why: 'Daily comparison catches drift that a quarterly review would miss entirely.' },
  { id: 'time_16', category: 'time', title: 'The Anniversary', constraint: 'Describe what you would want to say about this on its one-year anniversary.', why: 'An anniversary framing turns a task into a story with a measurable middle.' },
  { id: 'time_17', category: 'time', title: 'Borrowed Time', constraint: 'Assume the time you have was borrowed from a more urgent task and must be repaid.', why: 'Borrowed-time framing keeps the real opportunity cost visible instead of free.' },
  { id: 'time_18', category: 'time', title: 'Frozen Clock', constraint: 'Describe this as if time has stopped and nothing further will change around it.', why: 'A frozen clock isolates the decision from the noise of ongoing change.' },

  // ── audience — change who it's for ──────────────────────────────────────
  { id: 'audience_01', category: 'audience', title: 'The Harshest Critic', constraint: 'Address this directly to the person most likely to criticize it.', why: "Writing to the critic in advance answers objections before they're raised publicly." },
  { id: 'audience_02', category: 'audience', title: 'A Five-Year-Old', constraint: 'Address this to a five-year-old, with no adult vocabulary allowed.', why: 'Child-level address exposes whether the core idea is actually simple or just familiar.' },
  { id: 'audience_03', category: 'audience', title: 'Your Replacement', constraint: 'Write this for the person who will take over your role the day you leave.', why: 'Successor framing forces you to make tacit knowledge explicit.' },
  { id: 'audience_04', category: 'audience', title: 'Someone Who Disagrees', constraint: 'Direct this at someone who fundamentally disagrees with the premise.', why: 'Addressing disagreement directly is more honest than only addressing agreement.' },
  { id: 'audience_05', category: 'audience', title: 'A Stranger in Line', constraint: 'Address this to a stranger who has sixty seconds and no prior interest.', why: 'Strangers have no loyalty to reward you for being unclear.' },
  { id: 'audience_06', category: 'audience', title: 'The Whole Room', constraint: 'Address this to every person in the room at once, not the loudest one.', why: "Loud voices get addressed by default; the quiet majority usually isn't." },
  { id: 'audience_07', category: 'audience', title: 'A Future Hire', constraint: 'Write this as an onboarding note for someone who joins a year from now.', why: 'Future hires have no context you can lean on, which forces real explanation.' },
  { id: 'audience_08', category: 'audience', title: 'The Person Paying', constraint: 'Direct this specifically at whoever is paying for it, not whoever is using it.', why: 'Payer and user are often different people with different real questions.' },
  { id: 'audience_09', category: 'audience', title: 'An Expert Panel', constraint: 'Present this to a panel of experts who will grade it on rigor alone.', why: 'Expert scrutiny filters out charm that substitutes for substance.' },
  { id: 'audience_10', category: 'audience', title: 'A Worried Parent', constraint: "Address this the way you'd reassure a worried parent about something unfamiliar.", why: 'Reassurance framing forces you to name the actual risk, not just dismiss the worry.' },
  { id: 'audience_11', category: 'audience', title: 'Nobody At All', constraint: 'Produce this as though no one will ever read or use it.', why: 'Audience-free work reveals what you believe versus what you perform for others.' },
  { id: 'audience_12', category: 'audience', title: 'The Person Who Complained', constraint: 'Respond directly to the specific complaint someone already raised about this.', why: 'A real complaint is a free, specific signal most plans never get.' },
  { id: 'audience_13', category: 'audience', title: 'A Rival Team', constraint: 'Present this to a team that wants your effort to fail.', why: 'Hostile audiences test for weaknesses a friendly one will politely ignore.' },
  { id: 'audience_14', category: 'audience', title: 'Someone in a Hurry', constraint: 'Address someone who has ten seconds and will walk away after that.', why: 'Ten-second audiences force you to lead with the one thing that matters.' },
  { id: 'audience_15', category: 'audience', title: 'The Next Version of You', constraint: 'Write this as a note from your current self to the version of you doing this again next year.', why: "Future-self framing is honest because there's no one left to impress." },
  { id: 'audience_16', category: 'audience', title: 'A Totally New User', constraint: 'Address someone encountering the whole system, product, or idea for the first time ever.', why: 'New users see the friction that long familiarity has made invisible to you.' },
  { id: 'audience_17', category: 'audience', title: 'The Board', constraint: 'Present this the way you would to a board that can cancel the whole effort.', why: 'Cancellation-level stakes force you to lead with the actual case, not the process.' },
  { id: 'audience_18', category: 'audience', title: 'Yourself, Honestly', constraint: 'Write this only for yourself, with permission to be completely honest.', why: 'Private honesty often surfaces the real concern that public drafts soften.' },

  // ── inversion — flip it ─────────────────────────────────────────────────
  { id: 'inversion_01', category: 'inversion', title: 'Do the Opposite', constraint: 'Describe the exact opposite of your current approach and what it would produce.', why: 'Naming the opposite tests whether your direction was chosen or just defaulted into.' },
  { id: 'inversion_02', category: 'inversion', title: 'Make It Worse', constraint: 'Deliberately design the worst version of this you can imagine, then study it.', why: 'Bad examples are often more instructive than good ones because flaws are legible.' },
  { id: 'inversion_03', category: 'inversion', title: 'Remove the Goal', constraint: 'Proceed without the stated goal and see what you would still naturally do.', why: 'What survives without the goal reveals the habits actually driving the work.' },
  { id: 'inversion_04', category: 'inversion', title: "Subtract, Don't Add", constraint: 'Improve this only by removing something, never by adding anything.', why: 'Removal-only constraints break the reflex to solve problems by piling on more.' },
  { id: 'inversion_05', category: 'inversion', title: 'Solve the Reverse Problem', constraint: 'Solve the problem that is the mirror image of the one you were given.', why: 'Mirror problems often share a solution with the original, arrived at faster.' },
  { id: 'inversion_06', category: 'inversion', title: "The Villain's Plan", constraint: 'Design this as though you wanted it to fail on purpose, without anyone noticing.', why: 'Sabotage framing surfaces the fragile points a well-meaning plan glosses over.' },
  { id: 'inversion_07', category: 'inversion', title: 'Start From No', constraint: 'Assume the answer is no and build the strongest case for changing it to yes.', why: 'Starting from refusal makes you earn the yes instead of assuming it.' },
  { id: 'inversion_08', category: 'inversion', title: 'Undo the Last Step', constraint: 'Reverse the most recent decision you made and continue from there.', why: 'Undoing the latest choice tests whether it was load-bearing or just momentum.' },
  { id: 'inversion_09', category: 'inversion', title: 'The Competitor Built It', constraint: 'Imagine your strongest competitor made this exact choice and explain why it would be a mistake for them.', why: 'Explaining someone else\'s version avoids the self-protection that first-person review triggers.' },
  { id: 'inversion_10', category: 'inversion', title: 'Success Looks Like Failure', constraint: 'Describe a version of success that would look, on the surface, like failure.', why: "Surface-level failure that is actually success reveals what you're really optimizing for." },
  { id: 'inversion_11', category: 'inversion', title: 'Delete the Centerpiece', constraint: 'Remove the part of this everyone assumes is essential and continue anyway.', why: 'Sacred-cow removal tests whether the center is truly load-bearing or just assumed to be.' },
  { id: 'inversion_12', category: 'inversion', title: 'Backward Build', constraint: 'Describe the final result first, then work out the steps that would have produced it.', why: 'Backward construction avoids carrying forward unnecessary steps nobody actually needs.' },
  { id: 'inversion_13', category: 'inversion', title: 'Invert the Incentive', constraint: 'Change who benefits from the current setup to whoever currently benefits least.', why: 'Reversed incentives expose whose interests the original design was quietly serving.' },
  { id: 'inversion_14', category: 'inversion', title: 'The Anti-Audience', constraint: 'Design this specifically for the person it is not meant for.', why: 'Anti-audience design surfaces unstated assumptions about who the real audience is.' },
  { id: 'inversion_15', category: 'inversion', title: 'Opposite Day Pricing', constraint: 'If this involves any exchange of value, imagine the price and the value were swapped.', why: 'Swapped value exposes whether the exchange was ever actually fair.' },
  { id: 'inversion_16', category: 'inversion', title: 'Negative Space', constraint: 'Describe this entirely by what it deliberately excludes.', why: 'Definition by exclusion is often sharper than definition by inclusion.' },
  { id: 'inversion_17', category: 'inversion', title: 'Fail on Purpose', constraint: 'Attempt this with the explicit, stated goal of failing informatively.', why: 'An informative failure, chosen on purpose, teaches more than an accidental one.' },
  { id: 'inversion_18', category: 'inversion', title: 'The Null Option', constraint: 'Compare this against doing absolutely nothing and justify the difference.', why: 'Comparing to nothing is the only honest baseline for whether effort is worth it.' },

  // ── scale — change the size ──────────────────────────────────────────────
  { id: 'scale_01', category: 'scale', title: 'One Person', constraint: 'Design this as though it will only ever be used by exactly one person.', why: 'Single-user design strips out coordination overhead built for an audience that may not exist yet.' },
  { id: 'scale_02', category: 'scale', title: 'A Million People', constraint: 'Design this as though a million people will use it simultaneously tomorrow.', why: "Scale-up thinking surfaces bottlenecks invisible at the size you're currently planning for." },
  { id: 'scale_03', category: 'scale', title: 'Shrink It to a Sentence', constraint: 'Compress the entire plan into a single sentence with no subordinate clauses.', why: 'A one-sentence limit forces you to name the actual point, not the surrounding detail.' },
  { id: 'scale_04', category: 'scale', title: 'Blow It Up', constraint: 'Expand this into the largest version you can imagine, with no resource limit.', why: 'Unbounded scale reveals the ceiling your current plan was quietly assuming.' },
  { id: 'scale_05', category: 'scale', title: 'One Square Foot', constraint: 'Confine the entire physical or conceptual footprint of this to one square foot.', why: 'Tight footprints force prioritization that unlimited space lets you avoid.' },
  { id: 'scale_06', category: 'scale', title: 'A Whole City', constraint: 'Imagine this deployed across an entire city rather than one site or team.', why: "City-scale forces you to design for variation your single instance never had to handle." },
  { id: 'scale_07', category: 'scale', title: 'Zoom to the Atom', constraint: 'Describe the smallest indivisible unit this is built from.', why: 'Naming the smallest unit reveals whether the larger structure actually holds together.' },
  { id: 'scale_08', category: 'scale', title: 'Zoom to the Galaxy', constraint: 'Describe where this fits inside the largest system you can reasonably name.', why: 'Context at the largest scale often reveals why the smaller effort matters, or does not.' },
  { id: 'scale_09', category: 'scale', title: 'Double Overnight', constraint: 'Assume demand for this doubles overnight with no warning.', why: 'Sudden doubling tests whether the design has headroom or was built exactly to capacity.' },
  { id: 'scale_10', category: 'scale', title: 'Half the Size', constraint: 'Rebuild this at half its current scale and see what naturally falls away.', why: "What falls away at half scale is often what wasn't needed at full scale either." },
  { id: 'scale_11', category: 'scale', title: 'One Team Does Everything', constraint: 'Assume a single small team must handle every part of this alone.', why: 'Forced consolidation reveals dependencies that a larger organization quietly hides.' },
  { id: 'scale_12', category: 'scale', title: 'Global From Day One', constraint: 'Design this as though it must work in every country simultaneously from the start.', why: 'Global-first design catches local assumptions before they calcify into defaults.' },
  { id: 'scale_13', category: 'scale', title: 'The Tiny Experiment', constraint: 'Shrink this down to the smallest test that could still produce a real answer.', why: 'Small experiments answer real questions faster than large plans answer imagined ones.' },
  { id: 'scale_14', category: 'scale', title: 'Every Household', constraint: 'Imagine this must reach every household in a region, not a chosen segment.', why: 'Universal reach removes the comfort of only designing for the easy segment.' },
  { id: 'scale_15', category: 'scale', title: 'Scale of One Conversation', constraint: 'Reduce this to what could be accomplished in a single conversation.', why: 'Conversation-scale limits force the smallest meaningful unit of progress.' },
  { id: 'scale_16', category: 'scale', title: 'Infinite Budget, Finite Time', constraint: 'Assume unlimited money but a deadline that cannot move.', why: 'Unlimited money with a fixed clock isolates time, not budget, as the real constraint.' },
  { id: 'scale_17', category: 'scale', title: 'The Neighborhood Version', constraint: 'Design this as though it only needs to work for one neighborhood.', why: 'Neighborhood scale reveals what genuinely needs standardizing versus what can stay local.' },
  { id: 'scale_18', category: 'scale', title: 'Scale Down the Stakes', constraint: 'Imagine the consequences of failure are a tenth of what they actually are.', why: 'Lower stakes reveal the version of the plan driven by fear rather than judgment.' },

  // ── process — change how you work ───────────────────────────────────────
  { id: 'process_01', category: 'process', title: 'Reverse the Order', constraint: 'Do the steps of this in the opposite order from how you normally would.', why: 'Reordering exposes which steps actually depend on the ones before them.' },
  { id: 'process_02', category: 'process', title: 'One Step at a Time, Out Loud', constraint: 'Narrate every step as you take it, to an imagined listener.', why: 'Narration catches skipped reasoning that silent work lets slide by.' },
  { id: 'process_03', category: 'process', title: 'Someone Else Starts', constraint: 'Have someone other than the usual owner take the very first step.', why: 'A different starter avoids inherited habits the usual owner brings by default.' },
  { id: 'process_04', category: 'process', title: 'No Planning Phase', constraint: 'Skip the planning stage entirely and begin with the first concrete action.', why: 'Skipping planning tests whether the plan was adding clarity or just delay.' },
  { id: 'process_05', category: 'process', title: 'Document As You Go', constraint: 'Write down every decision the moment you make it, not afterward.', why: 'Real-time documentation catches reasoning that retrospective write-ups quietly clean up.' },
  { id: 'process_06', category: 'process', title: 'Work Backward From the Review', constraint: 'Start from how this will be evaluated and work back to what to do first.', why: 'Starting from evaluation criteria prevents late-stage surprises about what counted.' },
  { id: 'process_07', category: 'process', title: 'Change the Order of Operations', constraint: 'Do the hardest part first instead of last.', why: "Front-loading the hardest part surfaces failure early, when it's still cheap to fix." },
  { id: 'process_08', category: 'process', title: 'Pair Unlikely Roles', constraint: 'Have two people from unrelated roles do this step together.', why: "Unlikely pairings catch blind spots a single discipline wouldn't notice in itself." },
  { id: 'process_09', category: 'process', title: 'The Silent Round', constraint: 'Have everyone contribute their view in writing before any discussion happens.', why: "Silent-first rounds stop the loudest opinion from anchoring everyone else's." },
  { id: 'process_10', category: 'process', title: 'One Decision at a Time', constraint: 'Make exactly one decision, finish it completely, then move to the next.', why: 'Sequential single decisions prevent half-finished choices from quietly piling up.' },
  { id: 'process_11', category: 'process', title: 'The Dress Rehearsal', constraint: 'Run through the entire process once as a rehearsal before doing it for real.', why: 'A rehearsal surfaces friction while the cost of fixing it is still low.' },
  { id: 'process_12', category: 'process', title: 'Remove the Review Step', constraint: 'Skip the usual review or approval step and ship the first draft.', why: 'Removing review tests whether the step catches real problems or just adds delay.' },
  { id: 'process_13', category: 'process', title: 'Work From the Middle', constraint: 'Start from the middle of the process instead of the beginning.', why: 'Starting mid-process tests whether the beginning steps were load-bearing or ceremonial.' },
  { id: 'process_14', category: 'process', title: 'Timebox Every Step', constraint: 'Give every individual step a hard time limit, however small.', why: 'Per-step timeboxing prevents one stage from silently consuming the whole budget.' },
  { id: 'process_15', category: 'process', title: 'Swap Roles Midway', constraint: 'Have two people switch responsibilities halfway through the process.', why: 'Role swaps surface assumptions each person was making without realizing it.' },
  { id: 'process_16', category: 'process', title: 'The Postmortem First', constraint: "Write the retrospective for this before you've actually done it.", why: 'A pre-mortem surfaces the failure modes a real postmortem would find too late.' },
  { id: 'process_17', category: 'process', title: 'No Tools You Usually Use', constraint: 'Complete this without your usual software, templates, or shortcuts.', why: 'Removing default tools exposes which habits were load-bearing versus merely convenient.' },
  { id: 'process_18', category: 'process', title: 'One Long Session', constraint: 'Complete the entire thing in a single uninterrupted session, however long it takes.', why: 'Uninterrupted sessions prevent the drift and rework that comes from stopping and restarting.' },

  // ── wildcard — unpredictable one-off twists ─────────────────────────────
  { id: 'wildcard_01', category: 'wildcard', title: 'The Coin Flip Rule', constraint: "Let a genuine coin flip decide the one decision you're most tempted to agonize over.", why: 'Randomizing the agonized-over choice often reveals it mattered less than the agonizing suggested.' },
  { id: 'wildcard_02', category: 'wildcard', title: 'Borrow a Metaphor', constraint: 'Describe this entirely through a metaphor from an unrelated domain, such as weather, cooking, or sport.', why: 'Borrowed metaphors surface structure that literal description keeps too close to see.' },
  { id: 'wildcard_03', category: 'wildcard', title: 'The Overheard Line', constraint: 'Imagine a single sentence about this overheard in a hallway, and build around what it implies.', why: 'Overheard fragments carry the blunt version of an opinion polite feedback never would.' },
  { id: 'wildcard_04', category: 'wildcard', title: 'Add a Rule From Nowhere', constraint: 'Introduce one arbitrary rule that has nothing to do with the task and follow it anyway.', why: "Arbitrary rules sometimes force creative routes around obstacles that didn't need to exist." },
  { id: 'wildcard_05', category: 'wildcard', title: 'The Uninvited Guest', constraint: "Introduce an element that doesn't belong and figure out how to accommodate it.", why: 'Accommodating the unwanted element tests whether the design is actually flexible or just familiar.' },
  { id: 'wildcard_06', category: 'wildcard', title: 'Trade Places', constraint: 'Swap this task entirely with an unrelated one and see what transfers.', why: 'Cross-task swaps reveal principles general enough to survive a change of subject.' },
  { id: 'wildcard_07', category: 'wildcard', title: 'The Lucky Number', constraint: 'Let a specific number of your choosing, such as 3, 7, or 13, constrain how many of something you use.', why: 'Arbitrary numeric limits force decisions that open-ended counts let you avoid.' },
  { id: 'wildcard_08', category: 'wildcard', title: "Borrow Someone Else's Rule", constraint: 'Apply a rule from a completely different field, such as sports, cooking, or law, literally to this task.', why: "Foreign rules applied literally expose structure your own field's rules take for granted." },
  { id: 'wildcard_09', category: 'wildcard', title: 'The Found Object', constraint: 'Incorporate the first object you see right now into how you approach this.', why: 'Found objects force improvisation instead of reaching for the planned-for default.' },
  { id: 'wildcard_10', category: 'wildcard', title: 'Change the Name', constraint: "Rename this entirely and see if the new name changes what you'd do with it.", why: 'A new name can reveal assumptions baked into the old one that nobody questioned.' },
  { id: 'wildcard_11', category: 'wildcard', title: 'The Unexpected Guest Speaker', constraint: 'Imagine someone famous, unrelated to this field, giving one piece of advice about it.', why: "An unlikely advisor's imagined input breaks you out of the field's usual vocabulary." },
  { id: 'wildcard_12', category: 'wildcard', title: "Today's Weather", constraint: "Let today's actual weather set the tone or mood for how you approach this.", why: 'External, arbitrary mood anchors sometimes unlock associations deliberate planning would not reach.' },
  { id: 'wildcard_13', category: 'wildcard', title: 'The Missing Piece', constraint: 'Assume one essential-seeming piece of this is permanently gone, and continue.', why: 'Treating an assumed-essential piece as gone tests whether it was essential or just present.' },
  { id: 'wildcard_14', category: 'wildcard', title: 'Chain Reaction', constraint: 'Pick one small, unrelated action and let it trigger the next decision in this task.', why: 'Chained unrelated triggers can break a planning loop that has gone stale.' },
  { id: 'wildcard_15', category: 'wildcard', title: 'Borrowed Luck', constraint: 'Treat this as though it is already destined to succeed, and act accordingly.', why: 'Assumed success removes the hedging that assumed failure quietly builds in.' },
  { id: 'wildcard_16', category: 'wildcard', title: 'Wrong Tool on Purpose', constraint: 'Deliberately use a tool meant for something else entirely to do part of this.', why: "Misapplied tools sometimes reveal capabilities the right tool's design had hidden." },
  { id: 'wildcard_17', category: 'wildcard', title: 'The Random Word', constraint: 'Open a book, article, or dictionary to a random point and build the next step around the first word you see.', why: "A genuinely external random seed breaks patterns your own thinking tends to repeat." },
  { id: 'wildcard_18', category: 'wildcard', title: 'Trade With a Stranger', constraint: "Imagine trading this task entirely with a stranger's unrelated problem, and solve theirs instead.", why: "Solving someone else's problem can reveal transferable moves you'd never apply to your own." },
];
