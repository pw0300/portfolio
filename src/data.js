export const philosophy = {
    headline: "Pratik Wankhede",
    sub: "Product Manager & System Thinker.",
    intro: "I build systems that solve specific human problems. No fluff, just mechanics, incentives, and outcomes."
};

export const caseStudies = [
    {
        id: "chefsync",
        title: "ChefSync",
        subtitle: "From Chat Failure to Swipe Success",
        tags: ["Product Pivot", "System Design", "Cost Optimization"],
        image: "/assets/chefsync.png",
        flowChart: "/assets/chefsync_flow.png",
        userJourney: "/assets/chefsync_journey.png",
        hook: "We launched an AI cooking assistant. Users tried it once and never came back. The product was technically impressive, but nobody wanted to use it.",
        points: [
            { title: "The Pivot", desc: "Replaced chat with swipe cards. Retention doubled." },
            { title: "Cost Crisis", desc: "Cut API costs 60% with two-tier generation." },
            { title: "Trust", desc: "Made dietary safety a system guarantee." }
        ],
        action: "Don't wrap a prompt in a UI. Solve the actual workflow friction.",
        longForm: {
            context: `This project started as a weekend experiment. I was tired of the "what should I cook tonight?" question and thought an AI could solve it. I also want to extend my existing Allergy identification to a complete closed loop solution such that any dietary/physical ailment is accounted for in the food you eat and you still get to enjoy your favourite dishes.

The first version was simple: a chat interface where you describe what you have, and the AI suggests recipes. It worked. The AI was smart. The responses were helpful.

But when I shared it with friends and family, I noticed something troubling. They'd try it once, maybe twice, and then forget about it. The product had zero stickiness.`,

            struggle: `**Week 1: Denial**

I assumed it was a marketing problem. Maybe people just didn't know about it. I pushed harder on sharing it, adding more features, making the AI "smarter".

Nothing changed.

**Week 2: The Kitchen Test**

I forced myself to use ChefSync while actually cooking dinner. That's when reality hit me.

Standing in my kitchen with dirty hands, I had to:
1. Pick up my phone
2. Unlock it
3. Open the app
4. Type out "I have chicken, rice, and some vegetables"
5. Wait for the AI to respond
6. Read through paragraphs of text

By step 3, I was already annoyed. By step 6, I just ordered takeout.

**Week 3: User Research**

I talked to 10 people who had tried the app. The feedback was brutal but consistent:

- "I don't want to type when I'm hungry"
- "The AI kept suggesting things I didn't have"
- "I can't trust it with my allergies"

The chat interface was the problem. It required too much cognitive effort at the worst possible moment—when you're tired and hungry.`,

            approach: `**The Swipe Hypothesis**

I studied how people actually make food decisions. At restaurants, they scan a menu. On food apps, they scroll through images. Nobody *writes* about food; they *look* at food.

So I killed the chat and built a Tinder-style swipe deck instead.

Each card showed:
- A beautiful food image (AI-generated)
- The recipe name
- Estimated time and difficulty
- Key health tags (Gluten-Free, Vegan, etc.)

Swipe right to save. Swipe left to skip. No typing required.

**The Pantry Filter**

To solve the "missing ingredient" problem, I added a virtual pantry. Users log their staple ingredients once, and the AI only suggests recipes that match what they have.

This required a complete architecture redesign. Instead of generating recipes on the fly, I now:
1. Pre-generate recipe metadata in batches
2. Filter against the user's pantry
3. Only show compatible options

**The Two-Tier System**

Generating full recipes for every card was bankrupting my API budget. I split the generation into two tiers:

- **Tier 1 (Cheap)**: Just the card data—title, image prompt, tags. Costs nearly nothing.
- **Tier 2 (Expensive)**: Full instructions and ingredient quantities. Only triggered when a user actually saves the recipe.

This cut API costs by 60%.

**Trust Through Structure**

For allergens and dietary restrictions, I moved safety out of the AI prompt and into a hard database schema. If a user marks "No Nuts", the system physically cannot show recipes containing nuts. No hallucination risk.`,

            outcome: `**The Results**

After the pivot:
- Average session time increased from 45 seconds to 4+ minutes
- API costs dropped 60%
- User satisfaction scores improved dramatically

The product finally felt *useful*. People opened it when they were hungry, swiped through a few cards, saved one, and started cooking. The whole interaction took under 30 seconds.

**What I Learned**

The hardest part wasn't the technology—it was killing my original vision. I was emotionally attached to the chat interface because it felt more "AI-like" and impressive.

But users don't care about impressive. They care about solving their problem with minimal effort. The swipe deck was simpler, less impressive, and infinitely more useful.`,

            system: `**Frontend**: React Native + Expo
**Backend**: Firebase (Firestore, Functions)
**AI**: Gemini Flash (Tier 1) + Gemini Pro (Tier 2)

**Key Architecture Decisions**:
- Two-tier generation to optimize cost vs quality
- Pantry stored in Firestore with real-time sync
- Dietary restrictions as structured data, not prompt text`
        }
    },
    {
        id: "speakeasy",
        title: "SpeakEasy",
        subtitle: "The App That Stopped Judging You",
        tags: ["Consumer Psychology", "Audio AI", "Zero-to-One"],
        image: "/assets/speakeasy.png",
        flowChart: "/assets/speakeasy_flow.png",
        userJourney: "/assets/speakeasy_journey.png",
        hook: "Most language apps feel like exams. Users freeze up, afraid of making mistakes. I wanted to build something that felt like a patient friend, not a strict teacher.",
        points: [
            { title: "Vibe > Grammar", desc: "Prioritized conversation flow over correction accuracy." },
            { title: "Sandwich Feedback", desc: "Compliment → Correction → Question pattern." },
            { title: "Visual Presence", desc: "Real-time waveform made the AI feel alive." }
        ],
        action: "In consumer AI, the model's personality is the most important feature.",
        longForm: {
            context: `I've been trying to learn Spanish for years. I've used every app—Duolingo, Babbel, Rosetta Stone. I can conjugate verbs. I can pass quizzes.

But when faced with an actual Spanish speaker, I freeze. My heart races. I stumble over basic words I know perfectly well.

The problem isn't knowledge; it's confidence.`,

            struggle: `**The Anxiety Spiral**

Every language app I tried made my anxiety worse, not better. Here's the typical experience:

1. I say something
2. The app interrupts me mid-sentence
3. Red text appears: "INCORRECT"
4. I lose a "life" or "heart"
5. My brain associates speaking with failure
6. Next time, I'm even more afraid to speak

This is terrible design. It optimizes for correctness at the expense of confidence. But real conversation isn't about being perfect—it's about being understood.

**Talking to Language Teachers**

I interviewed 3 professional language tutors, asking how they handle student mistakes. Every single one said some version of:

"I don't interrupt. I let them finish, then gently suggest an alternative. If they're communicating, small grammar errors don't matter."

One tutor told me: "My job isn't to correct every mistake. My job is to keep them talking. The more they talk, the more they learn. The moment they feel judged, they shut down."

That was my insight. The AI needed to act like a patient human tutor, not a grammar police.`,

            approach: `**Designing the "Vibe"**

I spent weeks on the system prompt. The key instruction was:

"You are a supportive conversation partner, not a tutor. Never interrupt the user. Only correct errors that genuinely impede understanding. Always acknowledge their effort before any correction."

**The Sandwich Rule**

I hard-coded a response pattern:
1. **Affirmation**: "Great attempt!" or "I understood you perfectly!"
2. **Gentle Correction**: "By the way, instead of X, you could say Y"
3. **Forward Motion**: "So, what did you do after that?"

The correction is sandwiched between positive reinforcement. It feels like help, not criticism.

**Visual Listening**

Talking to a silent loading spinner is awkward. You don't know if the AI heard you or crashed.

I added a real-time audio waveform visualization. When you speak, you see waves responding to your voice. When the AI is "thinking," the waves pulse gently.

This visual presence tricks the brain into feeling like there's someone actually listening. It reduced the awkwardness of AI conversation dramatically.

**Latency Optimization**

In real conversation, a 2-second pause feels like an eternity. I optimized the audio pipeline to stream the AI's response while it was still generating. Users hear the first few words almost immediately, even while the rest of the sentence is being synthesized.

**Privacy by Design**

Users are paranoid about voice recording, especially in language learning (they're embarrassed by their mistakes).

I made an architectural choice to process Speech-to-Text on the device itself. The raw audio never leaves the user's phone—only the text transcript goes to the AI.`,

            outcome: `**Early Results**

The product is still in beta, but early signals are promising:
- Average conversation length: 7+ minutes (vs. industry average of 2-3 minutes)
- 65% of users return within 48 hours
- Qualitative feedback consistently mentions feeling "less judged" and "more relaxed"

One user told me: "For the first time, I practiced Spanish without wanting to quit after 30 seconds."

**The Key Insight**

In B2C AI products, the model's *personality* is the most important feature. The technical capability is table stakes—everyone uses the same models. What differentiates is how you design the interaction, the tone, the emotional experience.

I built a language learning app, but really, I built a confidence engine.`,

            system: `**Frontend**: React + Vite
**Audio**: Web Speech API (device-side STT)
**AI**: Gemini Pro (conversation) + Edge TTS (streaming audio response)

**Key Design Choices**:
- Streaming audio to minimize perceived latency
- System prompt focused on tone and personality
- Real-time waveform for visual presence`
        }
    },
    {
        id: "bohothard",
        title: "Bohothard.win",
        subtitle: "Designing Exclusivity to Filter Leads",
        tags: ["Growth Engineering", "Unit Economics", "No-Code"],
        image: "/assets/bohothard.png",
        flowChart: "/assets/bohothard_flow.png",
        userJourney: "/assets/bohothard_journey.png",
        hook: "My inbox was drowning in spam leads. Instead of making it easier to contact me, I did the opposite—I made it intimidating.",
        points: [
            { title: "Friction as Filter", desc: "Dark exclusive design signaled high price point." },
            { title: "Self-Segmentation", desc: "Users identify themselves before submitting." },
            { title: "Zero-Cost Ops", desc: "Entire backend runs on Google Sheets." }
        ],
        action: "Sometimes you need to fire your users. Optimize for value, not volume.",
        longForm: {
            context: `My friend does occasional consulting work. The problem with consulting is that everyone wants to "pick your brain" for free.

The website had a simple contact form. Name, email, message. Professional. Standard.

And completely useless.

Every day he received 20+ inquiries. About 18 of them were:
- Vague "let's collaborate" messages
- People asking for free advice disguised as project inquiries
- Complete spam

He was spending 2 hours daily just triaging my inbox, only to find 1-2 legitimate opportunities.`,

            struggle: `**Failed Solutions**

We tried everything:
- Adding a CAPTCHA (stopped bots, not tire-kickers)
- Making the form longer (slightly fewer submissions, same quality ratio)
- Requiring a budget field (everyone wrote "TBD" or "Let's discuss")

The fundamental problem was that contacting me was too easy. There was no cost to inquiring, so people inquired without serious intent.

**Studying High-End Services**

I looked at how luxury brands and exclusive services handle this. Hotels like Aman don't show prices—you have to call. Certain restaurants don't take reservations—you have to know someone.

They use friction as a filter.

But I'm not a hotel. I can't have someone answer a phone line. I needed a digital solution that created the same psychological effect.`,

            approach: `**The Velvet Rope**

I redesigned my contact page as an "application" rather than a form. The psychology shift was intentional—applications imply selectivity, forms imply availability.

**The Visual Language**

I chose a design that screams "expensive":
- Pure black background
- Gold accents
- Heavy serif typography
- Minimal text
- Dramatic spacing

The goal was to make budget-conscious visitors feel like they were in the wrong place. Before they even read anything, the design signals "this is premium."

**Forced Self-Segmentation**

Instead of a generic form, visitors must first identify themselves:
- "I'm a potential client"
- "I'm an investor"
- "I'm a hater"

Each path leads to different questions and different outcomes:
- Clients get asked about timeline, budget range, and business model
- Investors get redirected to my Calendly
- Haters get redirected to a Twitter thread (turning trolls into engagement)

**Automated Triage**

The backend is entirely Google Sheets + AppScript. When a form is submitted:
1. Data goes to a specific sheet tab based on segment
2. A score is calculated based on responses
3. High-score leads trigger an automatic draft email + Slack notification
4. Low-score leads get an auto-response with resources

I don't touch anything until someone is pre-qualified.`,

            outcome: `**The Results**

After launching the new design:
- High-quality lead ratio went from 10% to 85%
- Time spent on inbox triage dropped from 2 hours/day to 15 minutes/week
- Average project value increased 3x (premium positioning attracted bigger clients)

**The Hater Button Worked**

This was a joke that became a feature. About 15% of visitors click the "I'm a hater" option. 

**Cost: $0**

The entire backend runs on free Google tools. No hosting costs. No database fees. No code to maintain.`,

            system: `**Frontend**: Vite (React) with custom CSS
**Backend**: Google Forms → Google Sheets → AppScript
**Automation**: Sheets formulas for scoring, AppScript for emails/Slack

**Monthly Cost**: $0
**Setup Time**: 2 days`
        }
    },
    {
        id: "zesh",
        title: "Zesh",
        subtitle: "Building Trust in a Sea of Scams",
        tags: ["Trust Signals", "Localization", "Performance"],
        image: "/assets/zesh.png",
        flowChart: "/assets/zesh_flow.png",
        userJourney: "/assets/zesh_journey.png",
        hook: "In the 'trading signals' market, everyone looks like a scam. Flashy websites hurt credibility. We needed to look boring to look legitimate.",
        points: [
            { title: "Verifiable Truth", desc: "Real-time license verification, no manual updates." },
            { title: "Unbundling", desc: "Micro-sites for specific niches beat one general landing page." },
            { title: "Stability = Trust", desc: "Zero layout shift made the site feel reliable." }
        ],
        action: "In low-trust markets, reliability is the ultimate differentiator.",
        longForm: {
            context: `I was entertaining an idea for a platform connecting users to verified financial advisors.

The market for "trading advice" is a cesspool of scams. Every day, someone loses money to a fake guru promising 1000% returns. Users are (rightfully) paranoid.

Our biggest challenge wasn't building the product—it was convincing anyone we were legitimate.`,

            struggle: `**The Credibility Gap**

We launched with a well-designed, modern website. Sleek animations. Gradient backgrounds. Beautiful imagery.


Users told us:
- "This looks too good. Must be a scam."
- "The fancy design makes me suspicious."
- "Real financial companies look boring."

We had designed ourselves into the same visual language as the scammers. The very things we thought made us look professional—modern animations, flashy gradients—were actually trust destroyers.

**Analyzing Trust**

I studied what made financial institutions look trustworthy:
- Banks use conservative colors (blue, white, gray)
- They have tons of whitespace
- Everything is aligned on rigid grids
- Navigation is dead simple
- There are no surprises—the interface is predictable

Basically, they look boring. And that boredom signals "we're stable, we're established, you can trust us."`,

            approach: `**The Swiss Bank Redesign**

We stripped out everything "exciting":
- Removed gradients (replaced with flat colors)
- Killed animations (replaced with subtle transitions)
- Simplified navigation to 4 items
- Added excessive whitespace
- Made typography smaller and more conservative

The site now looked like it could be a bank from 1995. And that was exactly right.

**Verification as Feature**

Every advisor on the platform needed a visible "verified" badge. But badges can be faked.

We built a real-time verification system:
- Every 24 hours, we check each advisor's license against public registries
- If a license expires or is revoked, their badge disappears automatically
- Users can click the badge to see the verification source

No manual updates. No lies. The system maintains its own integrity.

**Core Web Vitals Obsession**

In low-trust environments, every pixel matters. A button that jumps by 10px feels like a dark pattern. A slow page feels like a money grab.

We obsessed over Core Web Vitals:
- Zero Cumulative Layout Shift (CLS)
- Largest Contentful Paint under 1.5s
- All above-the-fold content loads instantly

**The Unbundling Strategy**

We also learned that "one site for everything" doesn't work in this space.

Each site has hyper-specific copy, imagery, and SEO. A user searching for "Muay Thai training Bangkok" sees a site that speaks exactly to that need—not a generic portal asking them to navigate to the right section.`,

            outcome: `**The Results**

After the redesign:
- Trust survey scores increased 60%
- The micro-site strategy improved SEO rankings dramatically

**Key Insight**

In markets with low trust, your goal isn't to impress—it's to reassure.

Every design decision should ask: "Does this make the user feel safer?" Animation might look cool, but does it make someone feel safer? No. Stability, predictability, and transparency make people feel safe.

The boring design won.`,

            system: `**Frontend**: Next.js (Static Site Generation)
**Verification**: Cron job checking public license databases
**Performance**: Optimized for perfect Core Web Vitals scores

**Architecture Notes**:
- SSG for speed and reliability
- Edge caching for global performance
- Structured data for SEO trust signals`
        }
    },
    {
        id: "polaris",
        title: "Polaris ERP",
        subtitle: "Route-to-Revenue Engine",
        tags: ["ERP System", "Logistics", "B2B SaaS", "Full-Stack"],
        image: "/assets/polaris.png",
        flowChart: "/assets/polaris_flow.png",
        userJourney: "/assets/polaris_journey.png",
        hook: "Small distribution businesses run on WhatsApp groups and Excel sheets. They lose money daily—miscounted inventory, missed deliveries, forgotten invoices. I built a unified platform that connects every dot from route planning to revenue collection.",
        points: [
            { title: "Route Symphony", desc: "Unified delivery scheduling with real-time tracking and driver management." },
            { title: "Inventory Intelligence", desc: "Automated stock alerts and reorder points prevent stockouts." },
            { title: "Cash Flow Visibility", desc: "Payment tracking and salary management in one dashboard." }
        ],
        action: "The best ERP doesn't feel like ERP. It feels like common sense, finally organized.",
        longForm: {
            context: `I watched a family friend run a small distribution business. Every morning was chaos.

He had:
- A WhatsApp group for driver routes
- An Excel sheet for inventory
- A notebook for customer credit
- A separate app for payments
- His memory for everything else

One day, he delivered 50 units to a customer who had already maxed out their credit limit. Nobody knew because the "credit data" was in a notebook in the office. That single mistake cost him the entire month's margin.

This problem isn't unique. Every small distributor, retailer, and logistics operator faces the same fragmentation.`,

            struggle: `**The Integration Nightmare**

Building an ERP means touching everything: inventory, orders, routes, customers, payments, salaries, analytics. Each module affects every other module.

Early versions were a mess:
- Update inventory? Recalculate route capacity.
- Add a customer? Check credit limits before orders.
- Complete a delivery? Trigger payment reminders.
- Pay a driver? Check attendance first.

Every feature created three more edge cases.

**Data Model Decisions**

The hardest part wasn't the UI—it was the data architecture. I spent weeks just designing the relationships:
- Products → SKUs → Inventory → Warehouses
- Customers → Orders → Deliveries → Payments
- Routes → Drivers → Attendance → Salaries

One wrong foreign key relationship and the whole system falls apart.

**Real-Time vs. Batch**

Users expected real-time updates. "Why doesn't inventory update the moment I confirm a delivery?" But real-time updates create race conditions, data conflicts, and server load.

I had to find the right balance between instant feedback and data integrity.`,

            approach: `**Module-First Architecture**

Instead of building one giant app, I designed six independent modules that communicate through a central event bus:

1. **Inventory**: Stock levels, SKUs, valuations, low-stock alerts
2. **Orders**: Sales pipeline, order status, delivery scheduling
3. **Routes**: Route planning, driver assignment, completion tracking
4. **Customers**: CRM, credit limits, payment history
5. **Finance**: Payments received, pending amounts, salary tracking
6. **Analytics**: Cross-module dashboards and trend visualization

Each module can function independently but shares the same data layer.

**The Dashboard Philosophy**

Traditional ERPs hide information behind 15 clicks. I put everything on the dashboard:
- Inventory overview with visual low-stock warnings
- Payment summary (received vs pending)
- Salary tracking for the current month
- Route status across all drivers

A manager can open the app and understand the entire business health in 5 seconds.

**Mobile-First for Field Operations**

Drivers and field staff don't use laptops. Every critical operation needed to work on a phone:
- Confirm delivery with GPS verification
- Collect payment and log it instantly
- Report stock discrepancies
- Request route changes`,

            outcome: `**Current State**

The platform is live and being tested with real distribution operations:
- Unified view of inventory, orders, routes, and payments
- Automated low-stock alerts with reorder suggestions
- Payment tracking with pending amount visibility
- Driver salary calculation linked to attendance

**Technical Achievement**

Built end-to-end in 2 weeks using Lovable + Supabase:
- Real-time data sync across all modules
- Role-based access (Admin, Manager, Driver)
- Responsive design for desktop and mobile
- Export functionality for accounting handoff

**What I Learned**

ERP software fails when it tries to be everything. The key is ruthless prioritization—build the 20% of features that solve 80% of the pain.

For small businesses, that means: Know what you have (inventory), know where it's going (routes), know who owes you money (payments). Everything else is a distraction.`,

            system: `**Frontend**: React + Tailwind (Lovable)
**Backend**: Supabase (PostgreSQL + Auth + Real-time)
**Hosting**: Vercel Edge

**Core Modules**:
- Inventory Management with SKU tracking
- Route Planning with driver assignment
- CRM with credit limit enforcement
- Payment & Salary tracking
- Analytics dashboards`
        }
    }
];

