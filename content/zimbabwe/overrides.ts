import type { ContentBlock, UnitContent, UnitSummary } from "../../lib/types";

export type ZimbabweBlockOverride =
  | {index:number; kind:"text"; text:string}
  | {index:number; kind:"table"; rows:string[][]}
  | {index:number; kind:"remove"};

export type ZimbabweRangeReplacement = {
  startIncludes: string;
  endIncludes: string;
  replacement: ContentBlock[];
};

export type ZimbabweTableReplacement = {
  cellIncludes: string;
  rows: string[][];
};

export type ZimbabweUnitOverride = {
  title?: string;
  label?: string;
  blocks?: ZimbabweBlockOverride[];
  textReplacements?: Array<{from:string;to:string}>;
  rangeReplacements?: ZimbabweRangeReplacement[];
  tableReplacements?: ZimbabweTableReplacement[];
  tableTextReplacements?: Array<{from:string;to:string;exact?:boolean}>;
  appendBlocks?: ContentBlock[];
};

/**
 * Zimbabwe localisation is deliberately explicit and unit-scoped.
 *
 * Do not use this table for bulk country-name or currency replacement.
 * Every entry should represent an editorially reviewed Zimbabwe adaptation.
 * Source unit IDs remain unchanged so learner evidence and provenance survive.
 */
export const zimbabweContentOverrides: Record<string,ZimbabweUnitOverride> = {
  "g8-t1-l01-001": {
    blocks: [
      {index:10,kind:"text",text:"She rubs her eyes and sees her mother at the kitchen table, counting a small pile of notes and coins. She pushes the money toward Myah."},
      {index:12,kind:"text",text:"Myah puts the coins in her pocket. She feels their weight all the way to the kombi rank. She does not ask where the money came from. She does not ask if there is enough. She does not ask what her mother gives up so she can get to school."},
    ],
  },
  "g8-t1-l02-002": {
    blocks: [
      {index:30,kind:"table",rows:[
        ["Source","Example"],
        ["Family","“We do not waste money in this house.”"],
        ["Community","“Everyone in our neighbourhood saves with a mukando or savings club.”"],
        ["Experience","“Last time I spent all my money, I had nothing left for transport.”"],
        ["What we are told directly","“Save for later.”"],
        ["What we are told indirectly","“Again? You just got money yesterday?”"],
        ["What we observe","Watching someone worry about bills"],
      ]},
    ],
  },
  "g8-t1-l04-004": {
    blocks: [
      {index:45,kind:"text",text:"This is how mukando groups work. This is how families work. This is how successful people work."},
    ],
  },
  "g8-t1-l05-005": {
    blocks: [
      {index:8,kind:"text",text:"Myah is sitting at the kombi rank after school, watching people. She does this often — watching, noticing, writing in her notebook."},
      {index:22,kind:"table",rows:[
        ["Type","Timeframe","Example"],
        ["Short-term","Days or weeks","Save enough for a school trip by next month"],
        ["Long-term","Months or years","Save enough for a Form 4 school-leaving event"],
      ]},
    ],
  },
  "g8-t1-l06-006": {
    blocks: [
      {index:17,kind:"text",text:"She saves a little whenever she can for application and school-related costs."},
      {index:61,kind:"text",text:"Observe one person in your community for a day or two — a family member, a neighbour, a vendor near a kombi rank or market. Are they more like Nosipho (clear direction, steady progress) or more like Sipho (flexible, drifting, open to whatever comes)?"},
    ],
  },
  "g8-t1-l10-010": {
    blocks: [
      {index:10,kind:"text",text:"On the table: a tin. An old biscuit tin, painted once, now silver showing through. One by one, each woman places her agreed contribution in the tin. The amount follows the group’s rules for that cycle. The tin fills. The routine is familiar because they have been doing this for years."},
      {index:3,kind:"text",text:"Explain how mukando and community savings groups work."},
      {index:6,kind:"table",rows:[
        ["Term","Definition"],
        ["Mukando","A Zimbabwean community savings arrangement where members pool agreed contributions"],
        ["Contribution","The amount each member puts into the group according to its rules"],
        ["Rotation","Taking turns to receive pooled funds in a rotating-savings model"],
      ]},
      {index:7,kind:"text",text:"📘 Saturday Afternoon in Highfield"},
      {index:8,kind:"text",text:"It is Saturday afternoon in Highfield, Harare."},
      {index:11,kind:"text",text:"This is a mukando."},
      {index:12,kind:"text",text:"📘 What Is a Mukando?"},
      {index:13,kind:"text",text:"A mukando is a Zimbabwean community savings arrangement. Members agree on rules and contribute money regularly. Some groups rotate the pooled amount so members receive it in turn. Others keep a shared pool and lend or invest according to agreed rules. The exact model can differ, but the discipline is collective: people save together and hold one another accountable."},
      {index:14,kind:"text",text:"It is simple. It is practical. It is built on trust and rules. Mukando groups exist because:"},
      {index:21,kind:"text",text:"The women in this Highfield story call their mukando “The Saturday Club.” They have been meeting for 12 years. In that time:"},
      {index:29,kind:"text",text:"✍️ Activity 14: Mukando Discussion — And Design Your Own"},
      {index:32,kind:"text",text:"1. Does anyone in your family belong to a mukando or another savings group? If yes, what kind?"},
      {index:33,kind:"text",text:"2. Why do you think people can trust a mukando even when the group is informal? What rules or relationships make trust possible?"},
      {index:34,kind:"text",text:"3. What can a mukando teach us about saving that an individual bank account cannot?"},
      {index:36,kind:"text",text:"Part B: Design Your Own Mukando or Savings Group (Hypothetical)"},
      {index:37,kind:"text",text:"If you started a savings group with five people you trust, what would the rules be?"},
      {index:38,kind:"text",text:"Name of our group: _________________________________"},
      {index:43,kind:"text",text:"What makes this group different from just saving alone: _________________________________"},
      {index:51,kind:"text",text:"Saving is not only something wealthy people do. Families and communities have practised forms of saving for generations — putting money aside, pooling resources, building herds, buying assets, preparing for school costs, emergencies or business opportunities. Here is the deeper idea: saving requires believing in a future. It requires believing that tomorrow is worth preparing for. That is not only a financial skill. It is an act of hope. When you save, you are declaring that your future self matters."},
      {index:54,kind:"text",text:"Question 1: Compare a mukando with a bank account. What is one possible advantage of saving with a trusted group? What is one possible advantage of a bank account? Which would work better for YOU right now? Defend your answer with at least one specific reason based on your real situation."},
      {index:55,kind:"text",text:"Question 2: Look at your hypothetical savings-group design. What is the biggest risk? What is the biggest strength? If this were real, would you trust it with your money? Why or why not?"},
      {index:57,kind:"text",text:"Ask someone in your family: “Have you ever been in a mukando or another savings group? What worked? What did not work? Would you do it again?”"},
      {index:62,kind:"text",text:"If you cannot ask anyone: Research one type of mukando or community savings group used in Zimbabwe. Write down how it works, who it serves and one risk members need to manage."},
      {index:64,kind:"text",text:"| Date | | | Lesson | Lesson 10 — Mukando and Community Saving | | Experiment/Observation | I asked someone about their experience with mukando or savings groups, or researched how one works. | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g8-t1-l11-011": {
    blocks: [
      {index:12,kind:"text",text:"She writes: I will save US$12 by the end of this term. US$1 a week. I will keep it somewhere safe where I can track it growing. This is not just about the money. This is about becoming someone who keeps promises to herself."},
      {index:10,kind:"text",text:"Myah sits at the kombi rank, her notebook open. She has been thinking about what she wants. Understanding money. Helping her mother. Noticing what others miss."},
    ],
  },
  "g8-t1-l12-012": {
    blocks: [
      {index:27,kind:"text",text:"US$1 every week is better than US$10 once if your goal is to build a saving habit. This is the compound effect of behaviour: small, regular actions build bigger results."},
      {index:37,kind:"text",text:"Set up your saving method this week. Start with an amount that is realistic for you — even a very small one. After one week, record:"},
      {index:10,kind:"text",text:"3. Method 3: The Mukando Way. Save with a trusted group whose rules and contribution schedule you understand. The group can help keep you accountable."},
      {index:30,kind:"text",text:"Here’s the tension: every system has a weakness. The jar at home is visible and simple — but it can be easy to dip into. A bank or formal savings account can be more secure — but may feel less immediate or require access you do not yet have. A mukando is community-powered — but depends on trust, clear rules and members contributing as agreed. The best system is not the one with the most features. It is the one whose risks you understand and can manage."},
    ],
  },
  "g8-t1-l13-013": {
    blocks: [
      {index:4,kind:"text",text:"Trace where one amount of money in your life came from."},
      {index:49,kind:"text",text:"Key idea: Money is not just a thing. It carries a story. Every note, coin or digital payment you have ever received has travelled through choices, work, exchange and value created by people you may never meet. Your money is a library of stories. Learn to read them."},
      {index:65,kind:"text",text:"| Date | | | Lesson | Lesson 13 — Money Flow Tracing | | Experiment/Observation | I traced one amount received and one amount spent. I asked a seller where something came from. | | Result | | | Learning | | | Next Action | |"},
      {index:27,kind:"text",text:"Grandmother’s mukando → pays out → buys food"},
    ],
  },
  "g8-t1-l16-016": {
    blocks: [
      {index:7,kind:"text",text:"📘 Myah at the Kombi Rank"},
      {index:8,kind:"text",text:"Myah is sitting at the kombi rank, waiting for transport home. It is hot. The sun is high. People are fanning themselves with newspapers. A baby is crying. A woman is wiping sweat from her forehead."},
      {index:13,kind:"text",text:"She files it away. Years later, when she learns about problems and opportunities, she will remember this day. The hot kombi rank. The thirsty people. The baby crying."},
      {index:47,kind:"text",text:"Question 1: What did Myah notice at the kombi rank? Did she solve the problem that day? Why not? What was the first step she took — even without acting?"},
    ],
  },
  "g8-t1-l17-017": {
    blocks: [
      {index:8,kind:"text",text:"Sipho is nine years old. His grandmother gives him US$2. His first pocket money."},
      {index:12,kind:"text",text:"He spends the whole US$2 on sweets."},
      {index:14,kind:"text",text:"The next day, his friend shows him a small toy car. It costs US$1.50. Sipho wants it."},
      {index:16,kind:"text",text:"He asks his grandmother. She says: “You had US$2 yesterday. What happened to it?”"},
      {index:37,kind:"text",text:"Think of ONE choice you regret. Not a life-changing one — a small one, like Sipho spending all his pocket money."},
      {index:45,kind:"text",text:"Key idea: Every choice is a vote. A vote for the person you are becoming. Sipho spending all his pocket money on sweets was not only about US$2. It was a vote for “I am someone who chooses pleasure now over value later.”"},
      {index:50,kind:"text",text:"Question 1: What choice did Sipho make with his US$2? What was the consequence? What did he learn?"},
      {index:51,kind:"text",text:"Question 2: Sipho learned from his pocket-money mistake — but he also made other mistakes, and will make more. What is ONE recurring money mistake you make? What would it take to break the pattern — not just once, but permanently? What is the first step?"},
      {index:10,kind:"text",text:"Sipho takes the money. He walks to the neighbourhood shop."},
    ],
  },
  "g8-t1-l18-018": {
    blocks: [
      {index:44,kind:"text",text:"If you cannot do the full routine, what is the smallest version you can still do? (Ten minutes of homework instead of an hour. Save a smaller amount instead of your full target. Read one page instead of one chapter.)"},
      {index:8,kind:"text",text:"Before Myah and her mother moved to the new town, they lived in a small flat in Harare."},
    ],
  },
  "g8-t2-l22-022": {
    blocks: [
      {index:3,kind:"text",text:"Identify the original source of value behind money that changes hands."},
      {index:9,kind:"text",text:"A woman buys bread for US$1.40. She hands over a US$2 note. Emmanuel gives her US$0.60 change. Myah watches the US$2 go into the till."},
      {index:10,kind:"text",text:"Later, Emmanuel’s mother takes US$20 from the till and gives it to a supplier delivering cool drinks. The supplier puts the money away and leaves."},
      {index:14,kind:"text",text:"“Yes. Money is like water. It flows. It rarely stays still. The same US$2 that bought bread this morning might be in someone else’s till by tonight, and paying a worker or buying school shoes later.”"},
      {index:46,kind:"text",text:"Key idea: You now believe money flows from value. You are partly right. Every amount you receive traces back to someone, somewhere, who created something another person wanted or needed."},
      {index:51,kind:"text",text:"Question 1: Trace the flow of the last US$2 — or another clearly identified amount — that you or your family received. How many hands might it have passed through before it reached you? Where did the original value come from?"},
      {index:7,kind:"text",text:"📘 Myah’s Question at the Tuckshop"},
      {index:8,kind:"text",text:"It is Saturday afternoon. Myah is at Emmanuel’s tuckshop, watching money move."},
      {index:12,kind:"text",text:"Emmanuel shrugs. “The delivery driver takes it to the wholesaler. The wholesaler pays the producer. The producer pays workers and suppliers. Those people spend it somewhere else. Maybe at another tuckshop. Maybe near the kombi rank. Maybe on airtime.”"},
      {index:25,kind:"text",text:"But where do they get it? Follow the trail: Parents work → earn money → share with you. Grandmother’s mukando → pays out → buys food. Family business → sells things → makes income. Public support or a household transfer → supports the family. Money keeps moving because people create, earn, exchange, share and spend."},
    ],
  },
  "g8-t2-l23-023": {
    blocks: [
      {index:10,kind:"text",text:"Mr. Ndlovu is in the front yard, setting up buckets and sponges. His car-wash sign is hand-painted: “Ndlovu Car Wash — US$3 car, US$5 pickup.” He has been doing this every Saturday for six years."},
      {index:40,kind:"text",text:"Key idea: The economy measures paid work in money. But money does not measure care. It does not measure love. It does not measure the grandmother who holds the family together without a salary. You are not your wage. You are your work. And your work is not only what you are paid for."},
      {index:12,kind:"text",text:"Their daughter, Palesa, is helping pack vetkoek into bags. Their son, age 12, is counting change for a tuckshop run. Even the youngest, age 8, is sweeping the yard."},
      {index:20,kind:"table",rows:[
        ["Type","Description","Examples"],
        ["Formal work","Registered employment, regular pay and defined responsibilities","Teacher, nurse, shop assistant, warehouse worker"],
        ["Informal work","Work or trade outside a formal employment arrangement","Street vendor, market trader, car wash, home baking"],
        ["Family work","Unpaid household support","Caring for siblings, cooking, cleaning"],
        ["Community work","Benefits the community, often unpaid","Mukando organising, helping neighbours"],
        ["Self-work","Investing in your own growth","Studying, practising a skill"],
      ]},
    ],
  },
  "g8-t2-l24-024": {
    title: "EMMANUEL’S TUCKSHOP — COSTS AND PROFIT",
    blocks: [
      {index:14,kind:"text",text:"They buy a crate of cool drinks for US$12.00 (cost)."},
      {index:15,kind:"text",text:"They sell each bottle for US$0.80."},
      {index:16,kind:"text",text:"The crate has 24 bottles → US$19.20 income."},
      {index:17,kind:"text",text:"Profit = US$19.20 – US$12.00 = US$7.20."},
      {index:18,kind:"text",text:"“US$7.20 is not just extra money,” Emmanuel says. “It can help buy food, cover school costs, or buy more stock. Sometimes there is very little left.”"},
      {index:27,kind:"text",text:"1. They buy 10 loaves of bread for US$0.80 each. How much is the total cost? US$ _______"},
      {index:28,kind:"text",text:"2. They sell each loaf for US$1.00. If they sell all 10, what is the income? US$ _______"},
      {index:43,kind:"text",text:"Assets (what they own): US$50.00 (stock, cash, fridge)"},
      {index:44,kind:"text",text:"Owner’s Equity (what his mother put in): US$50.00"},
      {index:45,kind:"text",text:"Liabilities (what they owe): US$0.00 (no debt)"},
      {index:46,kind:"text",text:"The equation works: US$50.00 = US$50.00 + US$0.00"},
      {index:56,kind:"text",text:"Question 1: Calculate: If Emmanuel’s shop buys 10 loaves at US$0.80 each and sells them at US$1.00 each, but 2 go stale, what is the profit or loss? Show your working."},
      {index:8,kind:"text",text:"Emmanuel is 15. He lives in Chitungwiza with his mother and two younger sisters. His mother runs a small tuckshop from their front room. It sells everyday items such as bread, milk, cool drinks, snacks and airtime. It is small — but it is theirs."},
      {index:9,kind:"text",text:"After school, Emmanuel helps. Myah visits on a Saturday, curious about how the shop actually works. She has been thinking about money flows, and a tuckshop is a useful place to see them in action."},
      {index:59,kind:"text",text:"Find a small business in your community — a tuckshop, market stall, vendor, car wash or another trader. Observe it for 10 minutes. Write down:"},
    ],
  },
  "g8-t2-l26-026": {
    blocks: [
      {index:12,kind:"text",text:"Myah thinks about her own income — the money from her mother, the occasional small payment from helping a neighbour. All active. All requiring someone’s effort. She writes: Is there a way to earn money that does not require trading time for it? Is that even possible for someone my age?"},
      {index:36,kind:"text",text:"If you could start ONE tiny passive or delayed income stream — even something that earned a small amount each month — what would it be? Think: interest on savings? Renting out something you own with permission? Something else?"},
      {index:42,kind:"text",text:"Your Next Step: What is one small step you could take, even now, to begin building a passive or delayed income stream? Think: saving money that earns interest, planting something that produces fruit to sell later, or creating something once that can be sold more than once. Name your seed."},
      {index:15,kind:"text",text:"Active income: Tuckshop sales (the family works for this). A parent’s part-time cleaning job."},
      {index:16,kind:"text",text:"Passive or delayed income: A mukando payout at an agreed time. Interest on savings. Rent from an asset, where applicable."},
      {index:52,kind:"text",text:"If you cannot ask anyone: Research one type of passive or delayed income that exists in Zimbabwe — for example a mukando payout, rental income or interest from a savings account. Write down what you learn and one risk involved."},
    ],
  },
  "g8-t1-l03-003": {
    blocks: [
      {index:18,kind:"text",text:"They paid. One small amount. Then another. Then another. The exact amount mattered less than the fact that someone was willing to pay for value."},
    ],
  },
  "g8-t1-l07-007": {
    blocks: [
      {index:45,kind:"text",text:"For the next three days, track every amount of money that comes in and every amount that goes out. For each, ask: What value did this money represent? What was I building? What was I breaking?"},
      {index:56,kind:"text",text:"Question 2: Based on your audit, what is ONE specific change you will make in how you use money this week? “Spend less” is not a change. “No airtime purchases before 5pm” is a change. “Save a small amount before spending anything” is a change. Write the exact change."},
    ],
  },
  "g8-t1-l09-009": {
    blocks: [
      {index:33,kind:"text",text:"If you save a small amount every week, you are practising being a saver."},
      {index:34,kind:"text",text:"If you save one large amount once and never repeat the behaviour, you are someone who saved once."},
      {index:39,kind:"text",text:"Key idea: You do not need a lot to be a saver. You need consistency. A river does not cut through rock because it is powerful. It cuts through rock because it is consistent. Drop by drop. Day after day. Year after year. Saving a small amount each week may not feel like much. But the amount is not the only point. Every time you save, you cast a vote for “I am someone who thinks about tomorrow.” After enough votes, the identity begins to lock in."},
      {index:45,kind:"text",text:"Question 2: What is the SMALLEST amount you could save this week without making life harder at home? If the answer is “nothing, I have nothing right now,” then the question changes: What would need to change for saving to become possible? Name that change."},
      {index:49,kind:"text",text:"This week, save SOMETHING if you can. Put it somewhere specific. If you cannot save money, save another resource: time (10 minutes set aside for a goal), effort (one extra chore without being asked), airtime, water or electricity. The experiment is about practising the behaviour of setting something aside for later."},
    ],
  },
  "g8-t1-l15-015": {
    blocks: [
      {index:29,kind:"text",text:"She asked the class who had fixed it. No one answered. But she noticed Sipho — the same Sipho who had spent all his pocket money on sweets and regretted it — looking down at his hands. His fingers had small cuts on them, the kind you get from working with something sharp."},
    ],
  },
  "g8-t1-l19-019": {
    blocks: [
      {index:56,kind:"text",text:"Question 2: Trust takes years to build and seconds to break. What is ONE thing you will do this week to either (a) build trust with someone, or (b) repair trust you have damaged? Be specific. “Be more trustworthy” is not an action. “Pay back the small amount I owe my friend by Friday” is an action."},
    ],
  },
  "g8-t2-l25-025": {
    blocks: [
      {index:20,kind:"table",rows:[
        ["Date","What","Amount"],
        ["1 March","Sold bread","US$4.00"],
        ["1 March","Sold cool drink","US$2.40"],
        ["2 March","Sold bread","US$3.20"],
        ["2 March","Sold milk","US$1.80"],
      ]},
      {index:24,kind:"table",rows:[
        ["Date","What","Amount"],
        ["3 March","Sold sweets","US$1.50"],
        ["3 March","Sold cool drink","US$1.60"],
        ["4 March","Sold bread","US$4.00"],
        ["4 March","Sold milk","US$1.80"],
      ]},
      {index:28,kind:"table",rows:[
        ["Date","Paid to","What for","Amount"],
        ["1 March","Wholesaler","Bread (10 loaves)","US$8.00"],
        ["2 March","Utility account","Electricity","US$5.00"],
        ["3 March","Tuckshop","Milk","US$3.60"],
      ]},
      {index:32,kind:"table",rows:[
        ["Date","Paid to","What for","Amount"],
        ["5 March","Wholesaler","Cool drink","US$12.00"],
        ["5 March","Kombi","Transport","US$2.00"],
        ["6 March","Utility account","Water","US$3.00"],
      ]},
      {index:57,kind:"text",text:"Here’s the tension: records only work if you are honest with them. It is tempting to skip small expenses. “It was only a little. It does not matter.” It is tempting to round numbers in your favour. But the records know. Over time, small dishonesty compounds into large ignorance. The person you cheat when you falsify your records is yourself."},
      {index:61,kind:"text",text:"Question 1: Emmanuel’s shop had total income of US$8.90 and total expenses of US$17.00 in the examples above. What was the profit or loss? What does a negative number mean for a business?"},
      {index:64,kind:"text",text:"Start a simple journal for one week. Write down every time money comes in and every time money goes out. Even the small things. After one week, review your journal."},
      {index:71,kind:"text",text:"| Date | | | Lesson | Lesson 25 — One-Week Money Journal | | Experiment/Observation | I tracked every amount of money in and out for one week (or tracked time). | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g8-t1-l20-020": {
    title: "FOUNDATIONS REVIEW AND PORTFOLIO CHECKPOINT",
    blocks: [
      {index:19,kind:"text",text:"Sipho — who spent all his first pocket money on sweets, and who fixed a chair with his hands"},
      {index:2,kind:"text",text:"Assess your learning from the first Form 1 foundations cycle."},
      {index:6,kind:"text",text:"📘 Looking Back at Your Foundations"},
      {index:20,kind:"text",text:"The mukando women you met in the saving story"},
      {index:47,kind:"text",text:"What experiment do I want to continue as we move into the resources cycle? _________________________________"},
      {index:51,kind:"text",text:"My Foundations Portfolio Entry"},
      {index:56,kind:"text",text:"My Goal for the Next Learning Cycle:"},
      {index:61,kind:"text",text:"Who you are right now (age, Form 1, what matters to you)"},
      {index:64,kind:"text",text:"What you hope to understand in the next learning cycle"},
      {index:70,kind:"text",text:"From me, in Form 1 Date: _____________________"},
      {index:71,kind:"text",text:"📂 Portfolio: Keep this letter somewhere safe. Read it in Form 4."},
      {index:74,kind:"text",text:"Here’s the tension: the person you have become in this foundations cycle will be tested. The next learning cycle will ask different questions. The habits you built will face obstacles you cannot yet imagine. The beliefs you examined will be challenged by new situations. Some of your experiments will fail. Some of your insights will prove incomplete. That is not failure waiting to happen. That is growth waiting to be earned. The goal is not to arrive. The goal is to keep walking."},
      {index:75,kind:"text",text:"Your Next Step: What you take forward is not just what you learned. It is the evidence that you can learn — that you can notice, experiment, fail, adjust, and keep going. What is ONE thing you will carry from this foundations cycle into the next — not a fact, but a capacity, a habit of mind, a way of seeing?"},
      {index:78,kind:"text",text:"In Form 2, you will meet Myah again. She will not be the same person. She will face a system that does not reward rule-followers. She will learn that sometimes, following every rule leads to silence. And she will have to choose: accept the silence, or make herself impossible to ignore. You are not there yet. But you are building the foundation. What you have learned about identity, beliefs, and the habits that shape them is what she will need when her moment comes."},
      {index:85,kind:"text",text:"Question 3: What is one Thinking Equation you will carry into the next learning cycle? Why that one? What situation do you predict it will help you face?"},
      {index:93,kind:"text",text:"You completed the first foundations cycle of Form 1. Term 1 continues with resources, work, value and income."},
    ],
  },
  "g8-t2-l21-021": {
    title: "MY RELATIONSHIP WITH RESOURCES — NEXT CYCLE",
    blocks: [
      {index:11,kind:"text",text:"She rubs her eyes and sees her mother at the kitchen table, counting a small pile of notes and coins. She pushes the money toward Myah."},
      {index:2,kind:"text",text:"Recall key learning from the Form 1 foundations cycle."},
      {index:3,kind:"text",text:"Identify what you are bringing forward into the resources cycle."},
      {index:13,kind:"text",text:"Myah puts the coins in her pocket. Same weight. Same kombi rank. Same mother."},
      {index:18,kind:"text",text:"“Before we continue, I want you to think. What did you learn in the foundations cycle that you are still carrying?”"},
      {index:19,kind:"text",text:"Myah thinks. She remembers Lerato, who taught herself to braid. She remembers Nosipho, who had a goal and followed it. She remembers Sipho, who had no goals — and how Sipho began to change, fixing a chair with his hands. She remembers the mukando women, saving together for years. She remembers her own mother, counting coins every morning."},
      {index:20,kind:"text",text:"Ms. Daniels continues. “In the foundations cycle, you learned that your identity shapes your money choices. You learned that beliefs come from family, community and experience. You learned to set goals and to save. You conducted experiments. You kept a Log. You learned to notice.”"},
      {index:22,kind:"text",text:"“All of that is still inside you. You do not start this resources cycle empty. You start with everything you already are — and everything you have already done.”"},
      {index:28,kind:"text",text:"What did you learn in the foundations cycle that you are still carrying? Write one specific thing — a lesson, an experiment result, a Thinking Equation, a moment of clarity."},
      {index:29,kind:"text",text:"✍️ Activity 21: My Resources-Cycle Intention — With Strategic Audit"},
      {index:31,kind:"text",text:"List THREE assets (skills, habits, mindsets, insights) from the foundations cycle that you will actively use in this resources cycle."},
      {index:36,kind:"text",text:"List ONE liability — a belief, a habit, a pattern — from the foundations cycle that you will deliberately work to set aside."},
      {index:45,kind:"text",text:"Key idea: You are not starting this resources cycle empty. You carry everything from the foundations cycle — every experiment, every insight, every Thinking Equation, every failure that taught you something."},
      {index:47,kind:"text",text:"Your Next Step: What is ONE question about money you want to answer by the end of this resources cycle? Write it down. Later, you will return to this question and see what you have found."},
      {index:48,kind:"text",text:"My question for this resources cycle: _________________________________"},
      {index:50,kind:"text",text:"Look back at your foundations portfolio — your Identity Map, your Tension/Experiment Log, your Self-Assessment."},
      {index:51,kind:"text",text:"Question 1: What is one thing you learned in the foundations cycle that will help you understand where money comes from and where it goes? Why will it help?"},
      {index:52,kind:"text",text:"Question 2: What is one belief about money that shifted for you in the foundations cycle? How might that shift change how you see the lessons ahead?"},
      {index:54,kind:"text",text:"Share your resources-cycle intention with someone at home — or with a friend. Ask them: “What is one intention you have for this season of your life?”"},
      {index:60,kind:"text",text:"| Date | | | Lesson | Lesson 21 — Resources-Cycle Intention | | Experiment/Observation | I set my intention for the resources cycle and shared it (or wrote it down). | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g8-t2-l27-027": {
    blocks: [
      {index:33,kind:"text",text:"US$0.50 here. US$1 there. It may not seem like much at first."},
      {index:34,kind:"text",text:"But: US$1 a day = US$7 a week ≈ US$30 a month ≈ US$365 a year. Small earnings can become meaningful when repeated."},
      {index:9,kind:"table",rows:[
        ["Way to Earn","Example"],
        ["Helping neighbours","Wash a car, carry goods, help with a task"],
        ["Selling things","Snacks, drinks, handmade items"],
        ["Skills","Braiding hair, fixing phones, tutoring"],
        ["Chores at home","Sometimes paid, sometimes not"],
        ["Small jobs","Assist at a tuckshop, market stall or kombi rank"],
      ]},
    ],
  },
  "g8-t2-l28-028": {
    blocks: [
      {index:57,kind:"text",text:"If you cannot share with anyone: Write a short plan for how you would test your solution — the smallest, cheapest, fastest test possible. If you had only a small starting budget, what would you do tomorrow?"},
      {index:11,kind:"text",text:"Myah walks through the kombi rank, her notebook open. She sees: people are hot. People are thirsty. People are bored. People carry heavy things with nowhere to put them. Each problem is a signal. Each signal is a possibility."},
    ],
  },
  "g8-t2-l29-029": {
    blocks: [
      {index:12,kind:"text",text:"“Um... US$0.20 each?”"},
      {index:14,kind:"text",text:"US$0.80. Thandi’s first income."},
      {index:15,kind:"text",text:"That day, Thandi learned: you can start with what you have — the mangoes were free from her grandmother’s tree. Price is a conversation — she picked US$0.20, but could have asked US$0.30. People will buy if you offer something they want. Small amounts add up — by the end of the day, she had US$4.20."},
      {index:21,kind:"table",rows:[["Lesson","What It Means"],["Start with what you have","The mangoes were free"],["Price is a conversation","She picked US$0.20 and learned she could test a higher price"],["People will buy","If you offer value"],["Small adds up","US$4.20 in one afternoon"],["Dignity in earning","She could provide for herself"]]},
      {index:26,kind:"text",text:"1. Thandi sold mangoes for US$0.20 each. She sold 30 mangoes. How much did she earn? US$ _______"},
      {index:27,kind:"text",text:"2. A buyer offered US$0.15 each for 10 mangoes. If she agrees, how much does she earn from that sale? US$ _______"},
      {index:28,kind:"text",text:"3. She sells 10 at US$0.15 and 20 at US$0.20. What is her total? US$ _______"},
      {index:40,kind:"text",text:"Here’s the tension: the power to name a price is the power to value what you offer. Thandi could have asked US$0.10. She could have asked US$0.30. The choice was hers — but the market also responds. Name too high, and customers may walk away. Name too low, and you may undervalue your effort and make the work unsustainable. Pricing is not only math. It is a decision about value, customers and sustainability."},
      {index:44,kind:"text",text:"Question 1: Thandi could have charged US$0.30 for her mangoes instead of US$0.20. Why might she have chosen the lower price? What are the advantages and disadvantages? What would you have charged? Why?"},
      {index:8,kind:"text",text:"Thandi lives near Mutare. Her grandmother has a mango tree in the yard. Every season, the tree is heavy with fruit — more than they can eat."},
      {index:9,kind:"text",text:"One year, Thandi had an idea. She picked the mangoes. She washed them until they shone. She arranged them in a crate. She walked to the side of the road near the kombi rank."},
      {index:53,kind:"text",text:"If you cannot ask anyone: Research what similar things sell for — at a market, near a kombi rank, at a tuckshop, or elsewhere in your community. Write down the prices and the currency used. What do you notice?"},
    ],
  },
  "g8-t2-l35-035": {
    blocks: [
      {index:56,kind:"text",text:"US$2 for a regular wash, US$3 for a full service"},
      {index:60,kind:"text",text:"US$3 for a car, US$5 for a larger vehicle"},
      {index:68,kind:"text",text:"US$3 for plaits, US$5 if you want beads"},
      {index:9,kind:"text",text:"The one where: Auntie sells vetkoek near the kombi rank. Uncle fixes cars in his yard. Neighbours lend each other sugar. Mukando groups meet regularly. Tuckshops sell everyday items in small quantities."},
      {index:11,kind:"text",text:"Myah walks through her neighbourhood, notebook open. She counts: tuckshops, hair salons, car washes, a woman selling vegetables on the corner, a man fixing shoes under a tree. Many of these businesses operate informally. They may not have payslips or formal employment contracts. But they are creating value. They are feeding families. She writes: There is an economy here that textbooks can miss. It runs on cash, mobile payments, trust and relationships. It becomes visible when you learn to look."},
      {index:13,kind:"text",text:"Across Zimbabwe, many people earn livelihoods in the informal economy. Formal paperwork may differ from one business to another, but the economic activity is real: customers exchange money for value, households earn income, relationships create trust, and small enterprises support communities."},
      {index:37,kind:"text",text:"This week, buy something from someone in your community — a tuckshop, market trader, vendor, neighbour or another small seller. Notice how the transaction feels different from buying at a large shop."},
      {index:54,kind:"text",text:"Imagine a busy corner in Mbare, Harare. Within a short walk you might find:"},
      {index:63,kind:"text",text:"The Tuckshop"},
      {index:74,kind:"text",text:"School learners buy at the tuckshop → get their hair done at Precious’s"},
      {index:75,kind:"text",text:"Auntie Grace buys bread from the tuckshop"},
      {index:76,kind:"text",text:"Precious buys a cool drink from the tuckshop"},
      {index:84,kind:"text",text:"Auntie Grace ←→ Tuckshop owner ←→ ? Precious ←→ ?"},
      {index:101,kind:"text",text:"Here’s the tension: this web of interdependence is also fragile. If the tuckshop raises prices, other households feel it. If the kombi rank moves, Auntie Grace may lose customers. If one family moves away, the web changes. Interdependence is strength — but it is also vulnerability. The same connections that sustain a community can also transmit a shock."},
    ],
  },
  "g8-t2-l39-038": {
    blocks: [
      {index:10,kind:"table",rows:[["Date","Item","Amount"],["1 March","Kombi to work","US$3.00"],["1 March","Bread","US$1.40"],["1 March","Milk","US$1.80"],["2 March","Kombi","US$3.00"],["2 March","Airtime","US$1.20"],["2 March","Vegetables","US$4.50"]]},
      {index:12,kind:"text",text:"“Transport costs are huge,” Busisiwe says. “They can become about US$60 in a month. The small daily buys also add up. We did not see the pattern until we wrote it down.”"},
      {index:39,kind:"text",text:"Start your own tracking notebook this week — or continue the one you started. Write down everything you spend. Every amount, with the currency clearly labelled. No judgment. Just noticing. At the end of the week, ask yourself: “What does this record tell me that I did not know before?”"},
      {index:8,kind:"text",text:"Busisiwe is 14. She lives in Bulawayo with her mother and two younger brothers. Her mother manages the household money, but it is hard."},
    ],
  },
  "g8-t3-l43-042": {
    title: "THE MUKANDO HABIT",
    blocks: [
      {index:2,kind:"text",text:"Explain how mukando savings groups can create saving habits through accountability."},
      {index:4,kind:"text",text:"Design your own “Habit Mukando” for accountability."},
      {index:8,kind:"text",text:"Remember the Highfield mukando story from earlier in Form 1? Every meeting, the members contribute as agreed. They repeat the routine over months and years."},
      {index:10,kind:"text",text:"Myah thinks about this. The mukando members do not rely only on willpower. They rely on one another, agreed rules and a repeated routine. The habit is not just saving. The habit is showing up. The habit is being part of something. She writes: What if I had a “Habit Mukando”? A group of people who expected me to show up for my own goals? Would that make it easier?"},
      {index:11,kind:"text",text:"📘 How Mukando Builds Habit"},
      {index:12,kind:"table",rows:[
        ["Habit Element","How Mukando Uses It"],
        ["Cue","The agreed meeting or contribution date arrives"],
        ["Routine","Check in and make the agreed contribution"],
        ["Reward","Progress toward a shared or personal goal"],
        ["Repetition","The same pattern is repeated"],
        ["Accountability","Other members expect you to show up"],
        ["Identity","“I am someone who keeps my commitments”"],
      ]},
      {index:15,kind:"text",text:"Accountability = The Mukando Principle"},
      {index:19,kind:"text",text:"✍️ Activity 43: My Habit Mukando — With Accountability Design"},
      {index:21,kind:"text",text:"In this class, you will work in Habit Mukando groups — fixed groups of 5 learners who hold one another accountable for habit tracking."},
      {index:22,kind:"text",text:"Write the names of your Habit Mukando members:"},
      {index:28,kind:"text",text:"Your Habit Mukando will:"},
      {index:39,kind:"text",text:"Write one sentence you will say to your Habit Mukando this week about the habit you are tracking: “This week, I commit to _________________. If I struggle, I will _________________.”"},
      {index:42,kind:"text",text:"Key idea: A mukando works because the group helps turn an intention into a repeated commitment. Your habits do not need to be solitary. The right group can carry you when your willpower fails."},
      {index:43,kind:"text",text:"Here’s the tension: a group can also pull you down. If your group normalises bad habits — overspending, complaining, giving up — you may absorb those too. The question is not just whether you have a group. The question is what your group is normalising. Choose your Habit Mukando carefully. Their expectations will shape your behaviour. Their normal can become your normal."},
      {index:47,kind:"text",text:"Question 1: Why can it be easier to save with a mukando than alone? What might happen if a member repeatedly misses an agreed contribution or check-in? How could you create “mukando power” for a habit you want to build, such as studying or exercising?"},
      {index:48,kind:"text",text:"Question 2: Think of your Habit Mukando group. What happens if ONE member stops showing up? What happens if TWO stop? What does this tell you about the strength — and fragility — of group accountability? What is YOUR responsibility to your group?"},
      {index:54,kind:"text",text:"If you cannot tell anyone: Write a letter to yourself. Promise yourself you will check in on your own progress in one week. Put the letter where you will see it. The letter becomes your accountability check-in."},
    ],
  },
  "g8-t3-l51-050": {
    title: "THE GARDENERS OF MASHONALAND EAST",
    textReplacements: [
      {
        from:"The Mkhize family lives in a village in Limpopo.",
        to:"The Moyo family lives in a village in Mashonaland East.",
      },
      {
        from:"Then Granny Mkhize had an idea.",
        to:"Then Gogo Moyo had an idea.",
      },
      {
        from:"Granny Mkhize says:",
        to:"Gogo Moyo says:",
      },
      {
        from:"What habits did the Mkhize family need to build the garden?",
        to:"What habits did the Moyo family need to build the garden?",
      },
      {
        from:"What would Granny Mkhize say?",
        to:"What would Gogo Moyo say?",
      },
    ],
  },
  "g8-t3-l52-051": {
    blocks: [
      {index:8,kind:"text",text:"Habits are not just personal. Families have habits too. Some family habits: eating together, saving together through a mukando or savings club, helping with chores, sharing money when someone needs it, planning for the future."},
    ],
  },
  "g8-t3-l55-054": {
    blocks: [
      {index:43,kind:"text",text:"This week, try one small way to earn. It could be helping a neighbour, selling something, offering a service. Even a very small earning counts. Even one customer counts."},
      {index:12,kind:"text",text:"You have met earners throughout this year: Lerato (braiding hair), Emmanuel (helping at the tuckshop), Thandi (selling mangoes), Precious (hair stall), Uncle Solly (car wash), Sipho (fixing things with his hands), Thabo (delivery service and fixing things)."},
    ],
  },
  "g8-t3-l56-055": {
    blocks: [
      {index:10,kind:"text",text:"You have met planners: Nosipho (planned to be a teacher), Busisiwe (tracked to help her family plan), the Molefe family (Sunday planning habit), mukando members (planned for future needs)."},
    ],
  },
  "g8-t3-l57-056": {
    blocks: [
      {index:14,kind:"text",text:"Track every amount I spend"},
      {index:51,kind:"text",text:"My Habit Mukando members will check in with me on (day of week): _________________________________"},
      {index:65,kind:"text",text:"Question 1: What habit will you track? Why did you choose this habit? What is your Habit Mukando’s first check-in day? What will you do if you miss a day?"},
    ],
  },
  "g8-t3-l58-057": {
    blocks: [
      {index:25,kind:"text",text:"Part D: Habit Mukando Check-In"},
      {index:26,kind:"text",text:"Share with your Habit Mukando: What worked? What did not? What will you change? Listen to their experiences. What can you learn from them?"},
      {index:27,kind:"text",text:"One thing I learned from my Habit Mukando: _________________________________"},
      {index:37,kind:"text",text:"Share your Week 1 progress with your Habit Mukando or someone at home. Even if you missed days. Even if it is hard. Saying it out loud — or writing it down — helps."},
    ],
  },
  "g8-t3-l59-058": {
    blocks: [
      {index:22,kind:"text",text:"Part D: Habit Mukando Check-In"},
      {index:34,kind:"text",text:"Tell your Habit Mukando or someone at home about your midpoint progress. Be honest — share the wins AND the struggles. Ask: “Any advice for the final week?”"},
    ],
  },
  "g8-t4-l65-064": {
    title: "INTRODUCTION TO FINAL PROJECT",
    blocks: [
      {index:28,kind:"text",text:"Here’s the tension: a final project is also an ending. It is the last major piece of work you will do in Form 1. After this, you move on. The people you have met — Myah, Thabo, Sipho, Lerato, the mukando members, Emmanuel, Thandi, Karabo — will stay with you. But you will not be in Form 1 anymore. The final project is your bridge out of Form 1. Make it count. But do not let the weight of “lastness” paralyse you. Done is better than perfect. Finished is better than flawless."},
      {index:29,kind:"text",text:"Your Next Step: What do you want to leave behind in Form 1? What do you want to carry forward into Form 2? Your final project is the bridge between the two. What kind of bridge do you want to build?"},
    ],
  },
  "g8-t4-l66-065": {
    blocks: [
      {index:39,kind:"text",text:"Choose a business (tuckshop, market stall, vendor, car wash, hair salon, etc.)"},
    ],
  },
  "g8-t4-l69-068": {
    blocks: [
      {index:8,kind:"text",text:"Possibilities: Tuckshop. Market trader. Street vendor. Car wash. Hair salon. Kombi-rank activity. Mukando member. Small repair shop. Someone selling from their home."},
    ],
  },
  "g8-t4-l73-072": {
    blocks: [
      {index:40,kind:"text",text:"Here’s the tension: completion can also bring a strange emptiness. You have been working toward this. And now it is done. What now? The answer is: you carry it with you. The evidence does not disappear when the project ends. It becomes part of your portfolio — and part of your identity. You are now someone who has completed a final project in Form 1. No one can take that from you. But do not rest on it too long. Completion opens the door to the next thing. Be proud. Then be ready."},
    ],
  },
  "g8-t4-l76-075": {
    title: "FINAL PROJECT PRESENTATIONS — DAY 2 AND CELEBRATION",
    blocks: [
      {index:27,kind:"text",text:"Question 1: What did you learn from someone else’s project that you will carry with you? How do you feel now that your project — and your Form 1 journey — is nearly complete?"},
    ],
  },
  "g8-t4-l77-076": {
    blocks: [
      {index:6,kind:"text",text:"You completed a final project in Form 1. That is something many adults never do."},
      {index:8,kind:"text",text:"Myah sits at the kombi rank — the same bench where she sat at the beginning of the year. The same kombis. The same vendors. The same flow of people. But she sees differently now. She sees the money flowing. She sees the habits at work. She sees identities being built, transaction by transaction. She writes: I am not the same person who sat here at the beginning of the year. That person was just beginning to notice. This person notices, asks, tracks, budgets, saves, plans, earns, and acts. This person completed a final project. This person has evidence. That is growth. That is becoming. That is enough."},
      {index:21,kind:"text",text:"What is ONE thing from this project that you will carry with you into Form 2 and beyond? Not the project itself — the learning, the capacity, the evidence of who you became through doing it."},
      {index:30,kind:"text",text:"Your Habit Mukando"},
      {index:38,kind:"text",text:"Your Next Step: Who is ONE person you have not yet thanked — someone whose support made your final project possible, or made your Form 1 year meaningful? Thank them. This week. In person, in writing, in a message. Do not let the year end without saying it."},
    ],
  },
  "g8-t2-l31-031": {
    blocks: [
      {index:13,kind:"text",text:"Price (US$9.99 can feel cheaper than US$10 even though the difference is tiny)"},
    ],
  },
  "g8-t2-l32-032": {
    blocks: [
      {index:11,kind:"text",text:"Myah looks at her own spending. Airtime. She buys it regularly. Need or want? She uses it to call her mother when she is working late. That feels like a need. She uses it to scroll social media when she is bored. That feels like a want. The same amount of money. Two different purposes. The line is not just blurry — it moves depending on the moment."},
      {index:19,kind:"text",text:"Your family has US$20 left after paying all essential bills. You must choose between TWO of the following. You cannot have all four. Which two do you choose — and why?"},
      {index:20,kind:"text",text:"School shoes for your younger sibling (US$12)"},
      {index:21,kind:"text",text:"Data for homework this month (US$6)"},
      {index:22,kind:"text",text:"A birthday gift for your grandmother (US$8)"},
      {index:23,kind:"text",text:"Airtime for your phone (US$4)"},
      {index:40,kind:"text",text:"If you cannot observe a trade-off: Imagine you had US$10 and had to choose between something for yourself and something for your family. Write what you would choose — and be honest about the struggle."},
    ],
  },
  "g8-t2-l33-033": {
    blocks: [
      {index:8,kind:"text",text:"Karabo saved for months. A little here. A little there. She wanted the takkies everyone had — the ones with the white soles and the logo that said “you belong.”"},
      {index:36,kind:"text",text:"Here’s the tension: not everyone can afford to be generous. Karabo had saved money. She had a choice. What about the person who has nothing to give — whose available money goes to survival? Does that person lack values? No. They lack resources. Generosity is beautiful. But generosity from abundance is different from generosity from sacrifice. Karabo sacrificed. Not everyone can."},
    ],
  },
  "g8-t2-l34-034": {
    blocks: [
      {index:11,kind:"text",text:"School shoes: Price US$15, Value = you can go to school"},
      {index:12,kind:"text",text:"Takkies: Price US$30, Value = status, belonging, maybe happiness"},
      {index:16,kind:"table",rows:[["Item","Cheap Price","What Happens","Real Cost"],["Shoes","US$8","Fall apart quickly","Buy again = US$16"],["Phone","US$50","Breaks quickly","Buy again = US$100"],["Food","US$0.50","Makes you sick","Medicine + suffering"]]},
      {index:26,kind:"table",rows:[["Item","Price","Situation","Good Value? Why?"],["School shoes","US$15","Last all year",""],["Takkies","US$30","Last 3 months",""],["Loaf of bread","US$1.20","Feeds family",""],["Cheaper bread","US$0.80","Goes stale tomorrow",""],["Data bundle","US$2.90","Lasts a week",""],["Data bundle","US$10","Lasts a month",""]]},
    ],
  },
  "g8-t2-l37-036": {
    blocks: [
      {index:14,kind:"text",text:"Myah looks at her notebook. She has been tracking her money for weeks — every coin, note or digital payment, and every expense. She has the data. Now she needs a plan."},
      {index:53,kind:"text",text:"If you cannot share with anyone: Review your budget yourself. Ask: If I had to cut one small expense from this budget, where would it come from? The answer tells you what is truly essential."},
    ],
  },
  "g8-t2-l38-037": {
    blocks: [
      {index:8,kind:"text",text:"Themba gets US$5 pocket money every Friday. By Sunday, it is gone. He does not know where it went. It just... disappears. His grandmother says: “Money burns a hole in your pocket.”"},
      {index:11,kind:"table",rows:[["Day","What","Amount"],["Friday","Cool drink after school","US$0.80"],["Friday","Airtime","US$1.20"],["Saturday","Sweets","US$0.50"],["Saturday","Data","US$1.00"],["Saturday","Chips","US$0.70"],["Sunday","Church offering","US$0.20"],["Sunday","Cool drink","US$0.60"],["Total","","US$5.00"]]},
      {index:12,kind:"text",text:"He looks at the list. He cannot believe it. US$1.40 on cool drinks. US$1.20 on airtime. US$1.00 on data. US$1.20 on sweets and chips. Only the US$0.20 offering is something he does not regret."},
      {index:22,kind:"text",text:"For one week, track everything you spend. Every amount."},
      {index:31,kind:"text",text:"Key idea: Themba thought his money was disappearing. It was not. It was leaking. Small drops, unnoticed, until the bucket was empty. Your money does not disappear. It goes somewhere. Every amount has a story. Tracking tells that story."},
      {index:32,kind:"text",text:"Here’s the tension: tracking requires honesty. It requires looking at your choices without flinching. It requires admitting that the money did not vanish — you spent it. That admission can be uncomfortable. But it is also freeing. Because if you spent it, you can choose to spend it differently. The money you do not track can control you. The money you track gives you information you can use. And if tracking every tiny amount is unrealistic, choose a simpler system you can actually maintain."},
      {index:38,kind:"text",text:"Question 2: Themba spent US$1.40 on cool drinks in one weekend. If he cut that to US$0.70 and saved the other US$0.70, about how much could he save in four weeks? In one year? Do the math. What could that money help him do?"},
      {index:46,kind:"text",text:"| Date | | | Lesson | Lesson 38 — One-Week Spending Tracker | | Experiment/Observation | I tracked every amount I spent for one week (or tracked time). | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g8-t3-l41-040": {
    blocks: [
      {index:14,kind:"text",text:"She stares at the page. She has been tracking her money for weeks — every amount, every expense. She tracked her spending earlier in Form 1. She budgeted. She calculated profit and loss. But she has never tracked her habits. She has never really looked at her own morning. She has never asked herself why she keeps doing something that makes her feel worse."},
    ],
  },
  "g8-t3-l42-041": {
    blocks: [
      {index:44,kind:"text",text:"Choose one tiny new habit to try this week. Make it so small it feels almost too easy. Example: Drink a glass of water before school. Say thank you to one person. Save a very small amount. Do it every day. Notice how it feels — especially on the days when it feels pointless."},
    ],
  },
  "g8-t3-l44-043": {
    blocks: [
      {index:11,kind:"text",text:"She decides: every Friday, when she receives money for school, she will put a small fixed amount into her savings before she does anything else. Before spending. Before thinking. The saving place is somewhere safe where she can track her progress. The routine is simple. The decision is already made."},
    ],
  },
  "g8-t3-l45-044": {
    blocks: [
      {index:8,kind:"text",text:"One small saving can feel like nothing. But repeated action changes the result:"},
      {index:9,kind:"text",text:"US$0.50 a day = US$3.50 a week ≈ US$15 a month ≈ US$182.50 a year"},
      {index:12,kind:"text",text:"Myah calculates this in her notebook. She does not have US$0.50 to save every day. But she could save US$0.20 a week. US$0.20 a week = US$10.40 over 52 weeks. Not nothing. A start. She writes: The amount does not matter as much as the consistency. Every week I save, I vote for “I am a saver.” After enough votes, I will believe it."},
    ],
  },
  "g8-t3-l46-045": {
    blocks: [
      {index:8,kind:"text",text:"Imagine you save US$1 a week."},
      {index:9,kind:"text",text:"After one year: US$52"},
      {index:10,kind:"text",text:"After five years: US$260 — before any interest"},
      {index:11,kind:"text",text:"After ten years: US$520 — before any interest"},
      {index:15,kind:"text",text:"Year 1: US$10.00 earns 2% interest → US$10.20"},
      {index:16,kind:"text",text:"Year 2: US$10.20 earns about US$0.20 interest → about US$10.40"},
      {index:17,kind:"text",text:"Year 3: about US$10.40 earns about US$0.21 interest → about US$10.61"},
      {index:23,kind:"text",text:"If you saved US$0.50 a week for a year, how much would you have? What could you do with that money? Now imagine you did that for five years. What changes?"},
      {index:27,kind:"text",text:"Start with US$10. Add US$1 every week. No interest."},
      {index:28,kind:"text",text:"After 1 year: US$10 + (US$1 × 52) = US$ _______"},
      {index:30,kind:"text",text:"Year 1: US$62 + 5% = US$ _______   Year 2: Add US$52 = US$_______ + 5% = US$ _______   Year 3: Add US$52 = US$_______ + 5% = US$ _______"},
    ],
  },
  "g8-t3-l49-048": {
    blocks: [
      {index:12,kind:"text",text:"Remember Sipho from earlier in Form 1? He had no goals. Then he started saving US$0.50 a week. He did it for six weeks straight. He was proud."},
      {index:13,kind:"text",text:"Then week seven came. His friends wanted to go to the movies. He had US$3 saved. He used it all."},
      {index:20,kind:"text",text:"And something else happened. Remember the chair he fixed earlier in Form 1? Ms. Daniels noticed that Sipho’s hands knew things his mouth could not yet say. Now, Sipho is starting to see it too. He fixed a neighbour’s bicycle last week. He charged US$3. He saved US$2 of it. The boy who spent everything on sweets is becoming someone different — one small choice, one small repair, one restart at a time."},
    ],
  },
  "g8-t3-l50-049": {
    blocks: [
      {index:16,kind:"text",text:"One week, he really wanted something that cost US$5. But he had nothing left. He had spent his available money on sweets and airtime."},
      {index:19,kind:"text",text:"The next week, he saved US$2.50. The week after, he saved US$2.50 again. In two weeks, he had US$5. He bought what he wanted."},
    ],
  },
  "g8-t3-l53-052": {
    blocks: [
      {index:18,kind:"table",rows:[["Action","Evidence","Identity"],["I saved US$0.50 today","“I save money”","I am a saver"],["I helped my sister","“I help others”","I am a helper"],["I gave up on my goal","“I quit”","I am a quitter"]]},
      {index:42,kind:"text",text:"Here’s the tension: you are always voting. Every action is a vote for some identity. The question is not whether you are voting. The question is which identity you are voting for. When you save, you vote for “I am a saver.” When you repeatedly break a promise to yourself, you cast a different vote. There is no day off from becoming. You are becoming someone, every day, through repeated choices. The only question is who."},
    ],
  },
  "g8-t3-l54-053": {
    blocks: [
      {index:10,kind:"text",text:"You can be a saver with a very small weekly amount. You can be a saver with more. The amount matters for the goal, but the habit is what builds the identity."},
      {index:29,kind:"text",text:"Key idea: The word “saver” sounds like someone who holds back. But think of it differently: a saver is sending money forward. You are not simply losing today’s spending power. You are sending resources to your future self. Your future self is not a stranger. Your future self is you. Send them something good."},
      {index:30,kind:"text",text:"Here’s the tension: your present self also wants things. Your present self wants the cool drink, the airtime, the snack. Your present self is loud and urgent. Your future self is quiet and patient. Saving is a negotiation between your present self and your future self. Every time you save, you are telling your present self: “Not now. Later.” That is hard. And sometimes your present self should win because a need is real. The skill is learning to tell the difference."},
    ],
  },
  "g8-t4-l67-066": {
    blocks: [
      {index:6,kind:"table",rows:[["Element","Details"],["Duration","4–6 weeks"],["Goal","Save for something specific"],["Earning","Through your own effort"],["Tracking","Record every amount earned and saved"],["Reflection","What helped? What got in the way? What did you learn about yourself?"],["Presentation","Share your journey — the goal, the process, the struggle, the outcome, the learning"]]},
      {index:44,kind:"text",text:"Here’s the tension: the first earning is the hardest. The first sale, the first savings deposit — they can feel awkward, uncertain and small. You will wonder if it is worth it. It is. The first earning is not only about the money. It is about the proof: proof that you can create value and keep a promise to yourself. The hard part is starting. Start anyway. And remember: some weeks you may earn nothing. That is data, not a reason to quit."},
      {index:45,kind:"text",text:"Your Next Step: What is the FIRST thing you will do to earn your first amount? When exactly will you do it? Name the day. Name the action."},
      {index:50,kind:"text",text:"Take your first step this week. Earn your first amount, however small. Start."},
    ],
  },
  "g8-t4-l71-070": {
    blocks: [
      {index:7,kind:"text",text:"Myah knocks on her first neighbour’s door. Mrs. Dlamini. She asks if she needs help with anything — shopping, cleaning, carrying things. Mrs. Dlamini says yes. She needs someone to fetch her medication from the clinic once a week. She will pay US$1.50. Myah writes it down. Her first earning. Her first customer. She thinks: This is not a big business. It is not even really a business. But it is something. It is a start. And every big thing started small."},
    ],
  },
  "g8-t4-l72-071": {
    blocks: [
      {index:7,kind:"text",text:"Myah is three weeks into her earning and saving. She looks at her tracker. Week 1: US$3 earned, US$2 saved. Week 2: US$4.50 earned, US$3 saved. Week 3: US$2.50 earned, US$1.50 saved — she was sick one day and could not work. Total: US$10 earned, US$6.50 saved. Her goal is US$12. She is more than halfway there. She writes: I am ahead on savings but behind on earnings. I need to find one more customer, ask for a referral, or adjust the plan."},
    ],
  },
  "g8-t2-l40-039": {
    title: "BUILDING YOUR FIRST BUDGET AND PROGRESS REFLECTION",
    blocks: [
      {index:9,kind:"text",text:"Myah looks at her tracking data. Her income is small — money from her mother, occasional small payments from helping neighbours. But even small money can be budgeted. She writes:"},
      {index:10,kind:"text",text:"Needs: Transport US$1, school supplies US$0.50. Total US$1.50. Wants: Airtime US$0.50, snacks US$0.50. Total US$1. Savings: US$0.50 a week into my savings."},
      {index:22,kind:"text",text:"Part B: The Progress Reflection"},
      {index:43,kind:"text",text:"Your Next Step: What is ONE thing you will carry forward from this money-and-resources cycle into the habit work ahead — not a fact, but a capacity? A way of seeing? A habit of tracking? A question you are still asking? Name it. Then name one way you will use it."},
      {index:45,kind:"text",text:"How I will use it in the habit work ahead: _________________________________"},
      {index:47,kind:"text",text:"In the next lessons, you will turn inward again. You will ask: What small things, done regularly, change everything? The answer is habits. And you will track one habit for 21 days — just like you tracked your money. The skill is the same. Only the subject changes. The habits you have already built — noticing, tracking, questioning — are what you will need when you face the challenge of changing yourself."},
      {index:49,kind:"text",text:"Question 1: What is the most important thing you learned about where money comes from and where it goes? How will you use what you learned going forward?"},
      {index:52,kind:"text",text:"Show your money-and-resources portfolio to someone at home — your budget, your tracker, your reflections, your Log. Ask them: “What do you see in my work that I might have missed about my own growth?”"},
      {index:55,kind:"text",text:"If you cannot show anyone: Look through your money-and-resources work yourself. Read your earlier work first, then your later work. Notice the difference. Write: What do I see now that I did not see when I created this?"},
      {index:57,kind:"text",text:"You completed a major money-and-resources checkpoint in Form 1."},
      {index:60,kind:"text",text:"Keep going. Habit formation comes next."},
    ],
  },
  "g8-t3-l60-059": {
    title: "WHAT HABITS TAUGHT ME — PROJECT REFLECTION",
    blocks: [
      {index:31,kind:"text",text:"✍️ Activity 61: My Habit Project Reflection"},
      {index:40,kind:"text",text:"8. The 1–10 Scale: At the start of the habit project, I was a “1” on the habit-mastery scale (1 = my habits control me, 10 = I deliberately design my habits). Where am I now, honestly? What is the exact number? What is the ONE thing I need to do during the rest of Form 1 to move up by a single point?"},
      {index:46,kind:"text",text:"One situation later in Form 1 where I predict this equation will help me: _________________________________"},
      {index:53,kind:"text",text:"What is one thing I learned about myself from these experiments that I did not know at the start of the habit project?"},
      {index:54,kind:"text",text:"What experiment do I want to continue into the integration and final-project work ahead?"},
      {index:56,kind:"text",text:"✍️ Activity 64: Letter to My Future Self — Habit Project"},
      {index:63,kind:"text",text:"What you hope for the rest of Form 1"},
      {index:66,kind:"text",text:"From me, in Form 1 Date: _____________________"},
      {index:67,kind:"text",text:"📂 Portfolio: Keep this letter somewhere safe. Read it near the end of Form 1."},
      {index:70,kind:"text",text:"Here’s the tension: the ability to observe, adjust, and persist is more valuable than any single habit you tracked. You now know how to change. And once you know how to change, you can become anyone you want to become. But the review habit is a muscle. Use it or lose it. It is easy to finish the project and go back to old ways — to stop tracking, stop noticing, stop adjusting. The real test is not whether you tracked for 21 days. It is whether you track again when you need to. The real test is whether you keep using what you learned when nobody is checking."},
      {index:74,kind:"text",text:"During the rest of Form 1 — your final Zimbabwe term — you will bring everything together. You will review who you were and see who you have become. You will complete a final project that demonstrates what you have learned. You will assemble your complete portfolio. And you will write a final letter to your future self — the self who can open it in Form 4. This next phase is not about pretending everything is new. It is about proving to yourself that the ideas have become part of how you act."},
      {index:76,kind:"text",text:"Question 1: What is the most important thing 21 days taught you about yourself? What habit will you keep after this project? Why? How can you use what you learned about habits to help with money decisions during the final Form 1 integration work?"},
      {index:85,kind:"text",text:"| Date | | | Lesson | Lesson 60 — Habit Project Reflection | | Experiment/Observation | I completed my 21-day habit tracker and reflected on what the project taught me. | | Result | Final score: ___ / 21 | | Learning | | | Next Action | The review habit I will carry into the final Form 1 integration: |"},
      {index:88,kind:"text",text:"You completed the 21-day habit project and its reflection."},
      {index:91,kind:"text",text:"Keep going. The Form 1 integration work awaits — the final project, the portfolio, and the letter to your future self. Everything you have learned is about to come together."},
    ],
  },
  "g8-t4-l61-060": {
    title: "REVIEW — MY MONEY IDENTITY",
    blocks: [
      {index:2,kind:"text",text:"Recall key learning from your early Form 1 identity work."},
      {index:11,kind:"text",text:"The Highfield mukando members — proving that community creates accountability"},
      {index:22,kind:"text",text:"Saving stories from your community — mukando, savings clubs, livestock or other ways families prepare for future needs"},
      {index:8,kind:"text",text:"Earlier in Form 1, you asked: Who am I with money?"},
      {index:24,kind:"text",text:"Myah flips through her earliest Form 1 notebook. The Identity Map she drew in Lesson 1. The Family Belief Inventory. The questions she wrote on the very first page: Where does the money come from? What does Mama give up? Why do some people have more coins than others?"},
      {index:30,kind:"text",text:"What is one thing you learned during your identity work that stayed with you? What is one belief about money that has changed for you this year?"},
      {index:31,kind:"text",text:"✍️ Activity 61: Identity Memory — With Growth Comparison"},
      {index:33,kind:"text",text:"Close your eyes. Think back to your earliest Form 1 work. The Identity Map. The Belief Inventory. The first time you wrote “I can...” The community-savings story. The Thinking Equations."},
      {index:34,kind:"text",text:"What is one thing I remember clearly from my early identity work?"},
      {index:53,kind:"text",text:"Look back at your early Form 1 work if you still have it — your Identity Map, your Belief Inventory, your first Tension/Experiment Log entries. Show someone at home how you have changed. Ask them: “What do you see in my earlier work that is different from who I am now?”"},
      {index:57,kind:"text",text:"If you cannot show anyone: Look through your early Form 1 work yourself. Read your earliest entries first, then your later entries. Write: What do I see now that I did not see then?"},
      {index:59,kind:"text",text:"| Date | | | Lesson | Lesson 61 — Money Identity Review | | Experiment/Observation | I reviewed my early Form 1 work and compared my beginning-of-year identity to my current identity. | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g8-t4-l62-061": {
    title: "REVIEW — MY RESOURCES",
    blocks: [
      {index:2,kind:"text",text:"Recall key learning from your money-and-resources work."},
      {index:10,kind:"text",text:"Emmanuel at the tuckshop — learning that every product has a story, and profit helps a small business survive"},
      {index:7,kind:"text",text:"📘 Where We Went with Resources"},
      {index:8,kind:"text",text:"During the money-and-resources cycle, you asked: Where does money come from, and where does it go?"},
      {index:26,kind:"text",text:"Myah reviews her money-and-resources work. The money flow diagrams. The budget she built. The spending tracker. The leakages she found. She writes: I started by thinking money just appeared — from parents, from jobs, from somewhere. I now know it flows. It comes from value. It goes where I spend it. I can track it. I can budget it. I can choose where it goes. That is power."},
      {index:30,kind:"text",text:"This equation from your money-and-resources work — what does it mean to you now that you have traced money through households, supply chains, and communities?"},
      {index:32,kind:"text",text:"What is one story from your money-and-resources work that stuck with you? Why? What is one thing you learned about earning? About spending? About tracking?"},
      {index:33,kind:"text",text:"✍️ Activity 62: Resource Memory — With Resource Audit"},
      {index:35,kind:"text",text:"What is one money-and-resources story that stuck with me? Why?"},
      {index:52,kind:"text",text:"Key idea: You learned that money flows like water. But you also learned something deeper: you are not just standing in the river. You are learning to build the banks. You are learning to dig the channels. You are becoming someone who directs the flow, not just someone who gets wet."},
      {index:54,kind:"text",text:"Your Next Step: What is one money skill you developed that you are still using? What is one skill you developed but have let slip? What would it take to restart it — even in a small way?"},
      {index:56,kind:"text",text:"Question 1: Look at your budget if you still have it. What was one thing your budget taught you about your spending? Did you stick to your budget? Why or why not? What is one money skill you are proud of developing this year?"},
      {index:57,kind:"text",text:"Question 2: If you had to teach ONE money-and-resources lesson to someone who knew nothing about money — a younger sibling, a friend, a neighbour — what would it be? Why that lesson? How would you teach it?"},
      {index:59,kind:"text",text:"Show someone your budget if you still have it — or explain what you learned about tracking and budgeting. Tell them what you have learned about where money comes from and where it goes."},
      {index:63,kind:"text",text:"If you cannot share with anyone: Write a one-page summary of what you learned about resources, earning, spending and budgeting. Imagine a younger learner will read it next year. What do they need to know?"},
      {index:65,kind:"text",text:"| Date | | | Lesson | Lesson 62 — Resource Review | | Experiment/Observation | I reviewed my money-and-resources learning and audited my current money skills. | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g8-t4-l63-062": {
    title: "REVIEW — MY HABITS",
    blocks: [
      {index:18,kind:"text",text:"Small steps compound into bigger results — US$0.50 a day becomes US$182.50 over 365 days"},
      {index:2,kind:"text",text:"Recall key learning from your habit work."},
      {index:10,kind:"text",text:"The mukando members again — showing the power of routine and accountability"},
      {index:7,kind:"text",text:"📘 Where We Went with Habits"},
      {index:8,kind:"text",text:"During the habit cycle, you asked: What small things, done regularly, change everything?"},
      {index:31,kind:"text",text:"✍️ Activity 63: Habit Memory — With Review-Habit Audit"},
      {index:48,kind:"text",text:"Here’s the tension: the review habit is a muscle. Use it or lose it. It is easy to finish the 21-day project and go back to old ways — to stop tracking, stop noticing, stop adjusting. The real test is not whether you tracked for 21 days. It is whether you are still tracking now. It is whether you will track again when you need to. The review habit may be one of the most important things you learned from the habit work. Do you still have it? Or did you leave it behind with the tracker sheet?"},
      {index:51,kind:"text",text:"Question 1: Look at your 21-day habit tracker. What pattern did you notice in your habit performance? What helped you succeed on your best days? What did you learn about yourself from tracking this habit?"},
      {index:49,kind:"text",text:"Your Next Step: What is one way you can keep the review habit alive after Form 1 ends? A monthly review? A weekly check-in? A commitment to track something every term? Design your maintenance plan now, before the year ends."},
      {index:52,kind:"text",text:"Question 2: The review habit — noticing and adjusting your habits — is more valuable than any single habit. Have you kept it alive? If yes, how? If no, what happened? What is ONE way to restart it before Form 1 ends?"},
      {index:54,kind:"text",text:"Show someone your 21-day habit tracker — if you still have it. Tell them what 21 days taught you about yourself. Ask them: “What habit do you see in me that I might not see in myself?”"},
      {index:60,kind:"text",text:"| Date | | | Lesson | Lesson 63 — Habits Review | | Experiment/Observation | I reviewed my habit learning and audited my current review habit. | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g8-t4-l64-063": {
    title: "PUTTING IT ALL TOGETHER",
    blocks: [
      {index:11,kind:"text",text:"Myah looks across her work and sees three threads: Identity. Resources. Habits. She sees how they connect now. Her identity — the observer, the questioner — shaped what resources she noticed. Her resources — her tracking skills, her budgeting habits — shaped what habits she could build. Her habits — saving, tracking, planning — are now shaping who she is becoming. She writes: I am not three separate things. I am one person. The threads are not separate. They are me."},
      {index:25,kind:"text",text:"My identity work taught me that I am _________________________________"},
      {index:26,kind:"text",text:"My resources work taught me that I have _________________________________"},
      {index:27,kind:"text",text:"My habit work taught me that I can build _________________________________"},
      {index:41,kind:"text",text:"Question 2: Look at your three threads. Where is there a contradiction — a place where one thread is pulling in a different direction from the others? What is ONE step you can take during the rest of Form 1 to bring them into closer alignment?"},
    ],
  },
  "g8-t4-l78-077": {
    title: "LOOKING BACK AT FORM 1",
    blocks: [
      {index:2,kind:"text",text:"See your entire Form 1 journey in one view."},
      {index:6,kind:"text",text:"This year, you travelled through three Applied Commerce terms:"},
      {index:7,kind:"table",rows:[
        ["Term","Theme","Big Question"],
        ["1","Identity, Beliefs, Saving & First Income","Who am I with money, and what can I begin to do with what I have?"],
        ["2","Earning, Spending, Budgeting & Habit Formation","How do money choices and repeated actions shape my direction?"],
        ["3","Financial Identity, Agency & First Capstone","Who am I becoming, and what evidence can I carry forward?"],
      ]},
      {index:14,kind:"text",text:"The Highfield mukando members — who proved that community creates accountability"},
      {index:15,kind:"text",text:"Emmanuel — learning business at the tuckshop, tracing supply chains"},
      {index:23,kind:"text",text:"Mama Rose — who proves that business is people (you will meet her properly in Form 2)"},
      {index:38,kind:"text",text:"Look through your portfolio — all three terms. List the pieces of evidence that prove your growth."},
      {index:39,kind:"text",text:"Evidence from Term 1 (identity, beliefs, saving, first income):"},
      {index:40,kind:"text",text:"Evidence from Term 2 (earning, spending, budgeting, habit formation):"},
      {index:41,kind:"text",text:"Evidence from Term 3 (financial identity, agency, habit strength):"},
      {index:42,kind:"text",text:"Final project evidence from Term 3 (project, presentation, reflection):"},
      {index:45,kind:"text",text:"Key idea: You cannot measure everything that matters. You cannot count every moment of growth. Some changes are invisible, like a seed underground. But they are real. Trust the invisible growth. It will show when it is ready. Your portfolio is not the full story of your Form 1 journey. It is the visible portion of a much larger transformation."},
      {index:46,kind:"text",text:"Here’s the tension: faith. You have to believe you are growing even when you cannot see it. You have to trust the process even when the results are not visible. That is hard. We want evidence. We want proof. But the most important changes happen beneath the surface, in the dark, where no one can see. Trust the dark. Trust the roots. The shoots will come — maybe not in Form 1, maybe in Form 2, maybe years from now. But they will come if you keep watering."},
      {index:49,kind:"text",text:"Question 1: What is one thing you will remember from Form 1 forever? What are you most proud of? Who are you now compared with the beginning of the year?"},
      {index:50,kind:"text",text:"Question 2: What is one seed you planted this year that has not yet grown — a skill you began, a habit you started, a question you asked but have not yet answered? How will you keep watering it in Form 2?"},
      {index:58,kind:"text",text:"| Date | | | Lesson | Lesson 78 — Form 1 Year in Review | | Experiment/Observation | I reviewed my entire Form 1 journey and inventoried my evidence of growth. | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g8-t4-l79-078": {
    title: "LOOKING AHEAD TO FORM 2",
    blocks: [
      {index:2,kind:"text",text:"Imagine yourself in Form 2."},
      {index:6,kind:"table",rows:[
        ["Term","Meaning"],
        ["Ahead","In the future"],
        ["Intention","A purpose or plan"],
        ["Carry forward","To take with you"],
      ]},
      {index:7,kind:"text",text:"📘 Form 2 Is Waiting"},
      {index:8,kind:"text",text:"Next year, you will be in Form 2. You will be older. You will have more choices. You will face new challenges."},
      {index:10,kind:"text",text:"Myah thinks about Form 2. She does not know exactly what it will bring. But she knows what she will carry: her notebook. Her questions. Her tracking skills. Her budgeting habits. Her 21-day tracker evidence. Her identity as someone who notices, who asks, who acts. Her final project — proof that she can earn, save, and complete something real. Her Tension/Experiment Log — three terms of data on her own becoming. Her Thinking Equations — compressed truths that have become part of how she sees the world. She writes: Form 2, I am coming. I do not know what you will ask of me. But I know what I will bring. I will bring everything I have learned. I will bring myself — the person I have become this year. That is enough. That is everything."},

      {index:12,kind:"text",text:"From Term 1: Identity, beliefs, saving and first income. You learned to trace where your beliefs come from, set goals, begin saving, recognise value and gather evidence about who you are becoming."},
      {index:13,kind:"text",text:"From Term 2: Earning, spending, budgeting and habit formation. You learned to follow money flows, price value, track spending, build a budget, notice leakages and begin changing repeated behaviour."},
      {index:14,kind:"text",text:"From Term 3: Financial identity, agency and your first capstone. You learned that small steps compound, practised resilience after setbacks, completed a 21-day tracker, integrated identity, resources and habits, and produced evidence through your final project."},
      {index:15,kind:"remove"},
      {index:16,kind:"text",text:"✍️ Activity 78: My Form 2 Intentions — With Bridge Statement"},
      {index:18,kind:"text",text:"What do you want to be true about you in Form 2?"},
      {index:24,kind:"text",text:"What is the ONE most important thing you will carry from Form 1 into Form 2? Write it as a statement of intention."},
      {index:25,kind:"text",text:"“In Form 2, I will carry forward _________________. When I face challenges, I will remember _________________. The person I am becoming is _________________.”"},
      {index:28,kind:"text",text:"Key idea: You are not walking into Form 2 empty-handed. You are walking in with a year of evidence. Evidence that you can change. Evidence that you can persist. Evidence that you can become. Carry that evidence like a lantern. It will light the way. When Form 2 gets hard — and it will — go back to your portfolio. Look at your Identity Map. Look at your budget. Look at your habit tracker. Look at your final project. Remember who you were and what you did. The evidence is not for the teacher. The evidence is for you. It is proof that you have done hard things before. You can do them again."},
      {index:29,kind:"text",text:"Here’s the tension: Form 2 will also demand things you are not yet ready for. It will test beliefs you thought were settled. It will challenge habits you thought were locked in. It will present situations your Form 1 self could not have imagined. And here is the thing: Myah’s story is your story. In Form 2, Myah will face a system that does not reward rule-followers. She will follow every rule and get silence. She will have to choose: accept the silence, or make herself impossible to ignore. You will face your own version of that moment. The question is not whether you will be tested. The question is whether the foundation you built in Form 1 will hold when the test comes."},
      {index:30,kind:"text",text:"Your Next Step: What is one thing you fear about Form 2? What is one thing you are excited about? Name both. Both are true. Both are data."},
      {index:32,kind:"text",text:"Question 1: What is one thing you will carry forward to Form 2? What is one challenge you might face? What tool from this year will help you face it?"},
      {index:33,kind:"text",text:"Question 2: In Form 2, Myah will learn that following all the rules is not always enough — that sometimes you have to make yourself impossible to ignore. Have you ever experienced something like that? If not, how do you think you would respond if you did? What from Form 1 has prepared you for that moment?"},
      {index:35,kind:"text",text:"Tell someone at home what you are excited about for Form 2. Tell them what you are nervous about. Let them hold both with you."},
      {index:39,kind:"text",text:"If you cannot tell anyone: Write a letter to your Form 2 self. Tell them what you are carrying forward. Tell them what you are afraid of. Tell them what you hope for. Keep the letter. Open it in the middle of Form 2 when you need to remember."},
      {index:41,kind:"text",text:"| Date | | | Lesson | Lesson 79 — Form 2 Intentions | | Experiment/Observation | I set my intentions for Form 2 and identified what I will carry forward. | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g8-t4-l80-079": {
    title: "FINAL PORTFOLIO AND FAREWELL TO FORM 1",
    blocks: [
      {index:5,kind:"text",text:"📘 Your Complete Form 1 Portfolio"},
      {index:7,kind:"text",text:"Term 1: ☐ Identity Map and Gap Analysis ☐ Belief Inventory with Cost Audit ☐ “I Can” Statements with External Validation ☐ Goal List with Trade-Off ☐ Savings Goal and Plan ☐ First Income / Value-Creation Evidence ☐ Term 1 Reflection ☐ Letter to Future Self"},
      {index:8,kind:"text",text:"Term 2: ☐ Money Flow or Resource Map ☐ Skill-to-Income Inventory ☐ Spending Trigger Audit ☐ First Budget ☐ Spending Tracker ☐ Habit Loop Analysis ☐ Saving / Budgeting Routine ☐ Term 2 Reflection ☐ Letter to Future Self"},
      {index:9,kind:"text",text:"Term 3: ☐ Compound-Growth or Habit Evidence ☐ Obstacle and Recovery Plan ☐ 21-Day Habit Tracker ☐ Three Threads Integration Statement ☐ Final Project Plan and Timeline ☐ Final Project Evidence ☐ Final Project Reflection and Legacy Statement ☐ Presentation Outline ☐ Year in Review ☐ Form 2 Intentions and Bridge Statement ☐ Final Letter to Future Self"},
      {index:10,kind:"remove"},
      {index:13,kind:"text",text:"Go through the checklist above. Check off everything you have. Find anything that is missing. Your portfolio is the story of your Form 1 journey. Make it complete."},
      {index:24,kind:"text",text:"Write a letter to yourself. Address it to “Future Me.” You will read this in Form 4 — three years from now. Three years is a long time. You will be a different person. But you will also be the same person — the one who wrote this letter, the one who learned these things, the one who became someone new in Form 1."},
      {index:32,kind:"text",text:"What you want to remember about Form 1"},
      {index:37,kind:"text",text:"From me, in Form 1 Date: _____________________"},
      {index:38,kind:"text",text:"📂 Portfolio: Keep this letter somewhere safe. Read it in Form 4 — or whenever you need to remember who you were and how far you have come."},
      {index:44,kind:"text",text:"Here’s the tension: the letter is also a test. When you read it in Form 4, you will see the gap between who you were and who you became. That gap might make you proud. It might make you uncomfortable. It might make you laugh or cry or both. Whatever it does, it will be true. And truth, honestly faced, is the foundation of growth. Some of your Form 1 beliefs will seem naive to your Form 4 self. Some of your Form 1 wisdom will still be true. The letter is a time capsule. What you put in it matters. What you take from it when you open it matters more."},
      {index:45,kind:"text",text:"Your Next Step: What is the most important thing you want your future self to remember about who you were in Form 1? Write it clearly. The future is coming. Your future self is waiting."},
      {index:48,kind:"text",text:"Question 2: What do you HOPE your Form 4 self will think when they read this letter? What do you FEAR they might think? Both are valid. Both are data about what matters to you right now."},
      {index:50,kind:"text",text:"However your family says goodbye — in English, Shona, Ndebele, or any language spoken in your home and community — here is a wish for you:"},
      {index:52,kind:"text",text:"Go well. Carry what you have learned. Keep becoming."},
      {index:54,kind:"text",text:"You finished Form 1."},
      {index:63,kind:"text",text:"Has a portfolio that proves your growth — three terms of evidence"},
      {index:66,kind:"text",text:"Keep going. Form 2 awaits. And Myah is waiting for you there."},
    ],
  },

  "g9-t2-l17-018": {
    textReplacements: [
      {from:"Identify the original value behind a rand in your own life.",to:"Identify the original value behind money in your own life."},
      {from:"📘 The R5 Note in Myah's Pocket",to:"📘 The Note in Myah's Pocket"},
      {from:"Myah has been selling water at the taxi rank for two months now. She knows her customers. She knows her margins. She knows that R5 is the right price — a coin, not a question.",to:"Myah has been selling water at the kombi rank for two months now. She knows her customers. She knows her margins. She knows the price that works in that place and moment."},
      {from:"But today, a customer does something unusual. An elderly woman, Mrs. Dube, hands her a R5 coin and says: \"This coin came from my daughter in Cape Town. She sent it with a neighbour's child who was coming home for a funeral. Before that, my daughter earned it working at a supermarket — ten hours on her feet for R280 a day. Before the supermarket, the money was in the till of a customer who bought bread and milk. Before that, who knows? Maybe a factory. Maybe a farm. Maybe someone's pension.\"",to:"But today, a customer does something unusual. An elderly woman, Mrs. Dube, pays and says: \"This money came from my daughter in another city. She earned it working at a supermarket. Before that, it was in the till of a customer who bought bread and milk. Before that, who knows? Maybe a factory. Maybe a farm. Maybe someone's pension.\""},
      {from:"Myah stares at the R5 coin in her hand. It is just a coin. But it carries a story. It passed through a till in Cape Town, into a daughter's hand, onto a bus or in a pocket, across a thousand kilometres, into her own hand at a taxi rank in Johannesburg. And before all of that, someone, somewhere, created something of value — stacked a shelf, harvested a crop, cared for a child — and got paid.",to:"Myah stares at the money in her hand. It looks ordinary. But it carries a story. It moved through a till, into a worker's hand, through other people and places, and eventually into her own hand at a kombi rank. Before all of that, someone, somewhere, created something of value — stacked a shelf, harvested a crop, cared for a child — and got paid."},
      {from:"Every rand has a story. Most of us never read it.",to:"Every amount of money has a story. Most of us never read it."},
      {from:"Every Rand Is a Story You Have Not Read",to:"Every Amount Is a Story You Have Not Read"},
      {from:"I got R__________________ from _______________________________________________",to:"I received __________________ [currency] from _______________________________________________"},
      {from:"I spent R__________________ at _______________________________________________",to:"I spent __________________ [currency] at _______________________________________________"},
      {from:"Grandmother's stokvel → pays out → buys food.",to:"Grandmother's mukando or savings group → pays out → buys food."},
      {from:"Government grant → paid from taxes → supports the family.",to:"Public support or a household transfer → supports the family."},
      {from:"Every rand you have ever held was created by someone, somewhere, who solved a problem for someone else.",to:"Every amount of money you have ever held came through people, work, exchange, transfers or value created somewhere in the economy."},
      {from:"When you hold a rand, you are holding someone's labour, someone's skill, someone's time — compressed into metal and paper.",to:"When you hold money, you are holding a claim on value that moved through someone's labour, skill, time, exchange or transfer."},
      {from:"This week, when you spend money — even R5 — pause.",to:"This week, when you spend money — even a small amount — pause."},
      {from:"I traced one rand received and one rand spent as far back and forward as I could.",to:"I traced one amount received and one amount spent as far back and forward as I could."},
    ],
  },
  "g9-t2-l18-019": {
    textReplacements: [
      {from:"Crèche salary: R3,200",to:"Early childhood centre salary: US$220"},
      {from:"Saturday baking: R600–R900 (varies)",to:"Saturday baking: US$40–US$60 (varies)"},
      {from:"Child support grant: R510",to:"Family support / other household income: US$35"},
      {from:"Thabo's delivery contribution: R200–R400 (varies)",to:"Thabo's delivery contribution: US$20–US$30 (varies)"},
      {from:"Rent: R1,400",to:"Rent: US$100"},
      {from:"Electricity: R350 (prepaid, runs out fast in winter)",to:"Electricity: US$25 (illustrative household amount)"},
      {from:"Transport: R480 (taxis to work and school)",to:"Transport: US$45 (kombis and other local travel)"},
      {from:"Food: R1,200 (mostly from the spaza shop and the wholesaler)",to:"Food: US$100 (mostly from the tuckshop, market and wholesaler)"},
      {from:"Airtime: R150",to:"Airtime: US$10"},
      {from:"School costs: R200 (fees, supplies, uniform pieces)",to:"School costs: US$15 (supplies and other school needs)"},
      {from:"Stokvel contribution: R200",to:"Mukando contribution: US$15"},
      {from:"\"The crèche pays the rent,\" Grace says. \"The baking pays for everything else. The grant covers food. Thabo's money covers his own costs, mostly. The stokvel is for December — school uniforms for the new year, Christmas food, the one time of year we do not count every rand.\"",to:"\"My salary covers the biggest fixed costs,\" Grace says. \"The baking helps with food and everyday needs. Family support helps when it is available. Thabo contributes to some of his own costs. The mukando helps us prepare for larger expenses instead of facing them all at once.\""},
      {from:"Key idea: Your household's money map is a portrait of its priorities. Where the money goes, there your family's heart is also. School fees mean you value education. Stokvel contributions mean you value community. Airtime means you value connection. The map does not lie.",to:"Key idea: Your household's money map is a portrait of its priorities and constraints. School costs can show a commitment to education. Mukando contributions can show preparation and community accountability. Airtime can represent connection or work. The map does not judge the household; it helps you see patterns clearly."},
    ],
    tableTextReplacements: [
      {from:"Government grants",to:"Public / household support"},
      {from:"Child support, old age pension",to:"Eligible support, pensions or household transfers"},
      {from:"Spaza shop",to:"Tuckshop"},
      {from:"Stokvels",to:"Mukando / savings groups"},
      {from:"Rotating savings payouts",to:"Agreed group savings payouts"},
    ],
  },
  "g9-t2-l19-020": {
    textReplacements: [
      {from:"Emmanuel is seventeen now. He still helps at his family's spaza shop in Katlehong. But he sees it differently than he did a year ago. A year ago, he saw shelves and customers. Now he sees a whole world behind every item.",to:"Emmanuel is seventeen now. He still helps at his family's tuckshop in Chitungwiza. But he sees it differently than he did a year ago. A year ago, he saw shelves and customers. Now he sees a whole world behind every item."},
      {from:"\"And not all of them paid fairly,\" Emmanuel says quietly. \"The farm workers — I read that some of them earn R23 an hour. The truck driver might earn more. The bakery owner earns the most. The farmer depends on the weather and the global wheat price. One bad season and the whole chain feels it.\"",to:"\"And not everyone in the chain has the same bargaining power,\" Emmanuel says quietly. \"A farm worker may earn very little compared with the value that appears later in the chain. A driver carries transport risk. A bakery owner carries business risk. A farmer depends on weather and input prices. One shock can travel through the whole chain.\""},
      {from:"A cool drink: Factory makes drink → Distributor transports to wholesaler → Wholesaler sells to spaza shop → Spaza shop sells to you.",to:"A cool drink: Factory makes drink → Distributor transports to wholesaler → Wholesaler sells to tuckshop → Tuckshop sells to you."},
      {from:"Here’s the tension: gratitude without justice is sentiment. It is easy to feel thankful for the farm worker while doing nothing about the fact that she earns R23 an hour and cannot feed her own children properly. It is easy to appreciate the truck driver while accepting a system where fuel prices rise and his wages do not. The supply chain is not just a series of transactions. It is a series of power relationships. Some people in the chain have choices. Some do not. Your gratitude matters — but it is not a substitute for asking harder questions. Who has power in this chain? Who does not? What would it take to shift that?",to:"Here’s the tension: gratitude without fairness is not enough. It is easy to appreciate the farm worker while ignoring whether workers receive a fair share of the value they help create. It is easy to appreciate the driver while ignoring rising operating costs. A supply chain is not only a series of transactions; it also contains power relationships. Some people have more choices than others. Ask the harder questions: Who carries the risk? Who captures the value? Who has bargaining power? What could make the chain fairer?"},
    ],
    tableTextReplacements: [
      {from:"Spaza shop",to:"Tuckshop"},
    ],
  },
  "g9-t2-l20-021": {
    textReplacements: [
      {from:"Price: R2.",to:"Illustrative price: US$0.20."},
    ],
  },
  "g9-t2-l21-022": {
    textReplacements: [
      {from:"\"One bottle of my peri-peri sauce sells for R18 at the supermarket. Here is where that R18 goes.\"",to:"\"One bottle of my peri-peri sauce sells for an illustrative US$1.80 at the supermarket. Here is how that US$1.80 can be shared across the chain.\""},
      {from:"Farmer (chillies, onions, garlic): R1.80 per bottle's worth of ingredients. The farmer sells in bulk, tiny margins, dependent on weather and market prices.",to:"Farmer (chillies, onions, garlic): about US$0.18 per bottle's worth of ingredients in this example. The farmer sells in bulk, on thin margins, and remains exposed to weather and market prices."},
      {from:"My factory: We buy ingredients, pay workers, pay rent, pay electricity, make the sauce, bottle it, label it. Our cost per bottle is about R7. We sell to the distributor for R10. Our margin is R3 per bottle — and from that R3, I pay myself last.",to:"My factory: We buy ingredients, pay workers, pay rent and utilities, make the sauce, bottle it and label it. In this example our cost is about US$0.70 per bottle. We sell to the distributor for US$1.00. The US$0.30 difference still has to cover risk, reinvestment and the owner's return."},
      {from:"Distributor: They transport, warehouse, and deliver to supermarkets. They buy at R10, sell at R13. Margin: R3.",to:"Distributor: They transport, warehouse and deliver to shops. In this example they buy at US$1.00 and sell at US$1.30. Difference: US$0.30 before their full operating costs."},
      {from:"Supermarket: They buy at R13, sell at R18. Margin: R5 per bottle — the biggest single margin in the chain. For putting it on a shelf.",to:"Retailer: In this example the retailer buys at US$1.30 and sells at US$1.80. The US$0.50 difference is not pure profit: it also helps cover staff, premises, losses and other operating costs. The question remains: who captures how much value, and why?"},
    ],
    tableTextReplacements: [
      {from:"~R0.50",to:"~US$0.05"},
      {from:"~R2.00",to:"~US$0.20"},
      {from:"~R1.00",to:"~US$0.10"},
      {from:"~R3.00",to:"~US$0.30"},
      {from:"Spaza shop",to:"Tuckshop"},
    ],
  },
  "g9-t2-l22-023": {
    textReplacements: [
      {from:"Nosipho — the same Nosipho who has wanted to be a teacher since Grade 3 — volunteers at a crèche in Tembisa three afternoons a week. She helps with the younger children, reads to them, and watches how the crèche operates.",to:"Nosipho — the same Nosipho who has wanted to be a teacher since she was younger — volunteers at an early childhood centre in Harare three afternoons a week. She helps with younger children, reads to them, and watches how the centre operates."},
    ],
    tableTextReplacements: [
      {from:"A taxi driver who owns his taxi",to:"A kombi operator who owns the vehicle"},
      {from:"A taxi driver who drives someone else's taxi",to:"A kombi driver who drives someone else's vehicle"},
    ],
  },
  "g9-t2-l23-024": {
    textReplacements: [
      {from:"Myah leans forward. \"Like tracing a rand through my community?\"",to:"Myah leans forward. \"Like tracing money and value through my community?\""},
      {from:"\"Start where you live. Start with your street. Start with the taxi rank. Start with the shops you know. Every rand has a story. Your job is to follow it.\"",to:"\"Start where you live. Start with your street. Start with the kombi rank, market or shops you know. Every amount has a story. Your job is to follow the value and the money.\""},
    ],
    tableReplacements: [
      {
        cellIncludes:"40% of Term 2 grade",
        rows:[
          ["Element","Description"],
          ["Duration","3 weeks of observation and mapping"],
          ["What you will create","A visual Community Money Map with analysis and reflection"],
          ["Presentation","5–7 minute presentation to the class"],
          ["Assessment","Form 2 Term 1 portfolio evidence"],
        ],
      },
    ],
    tableTextReplacements: [
      {from:"stokvels",to:"mukando / savings groups"},
      {from:"grants",to:"support / transfers"},
    ],
  },
  "g9-t2-l24-025": {
    title: "THE KOMBI-RANK ECONOMY",
    textReplacements: [
      {from:"15 people buy vetkoek from Auntie Grace at R5 each. That is R75 in her pocket.",to:"15 people buy vetkoek from Auntie Grace at an illustrative US$0.50 each. That is US$7.50 in sales."},
      {from:"8 people buy coffee from the woman with the flask. That is R40.",to:"8 people buy coffee at an illustrative US$0.50 each. That is US$4.00 in sales."},
      {from:"3 taxi drivers buy airtime from the vendor. That is R30.",to:"3 kombi drivers buy airtime worth US$1.00 each. That is US$3.00 in sales."},
      {from:"12 people buy cold drinks from the spaza shop across the street. That is R72.",to:"12 people buy cold drinks from the tuckshop across the street at US$0.60 each. That is US$7.20 in sales."},
      {from:"The spaza shop owner sends most of his money to the distributor. Most of it leaves.",to:"The tuckshop owner uses part of the sales to replace stock from suppliers outside the immediate community. That portion flows outward while some value stays through local wages, services and household spending."},
      {from:"Choose ONE place in your community to observe. It could be a taxi rank, a spaza shop, a market, a street corner, or a community hall.",to:"Choose ONE place in your community to observe. It could be a kombi rank, a tuckshop, a market, a street corner, or a community hall."},
      {from:"Taxi Rank",to:"Kombi Rank"},
      {from:"Taxi rank",to:"Kombi rank"},
      {from:"taxi rank",to:"kombi rank"},
      {from:"taxi drivers",to:"kombi drivers"},
      {from:"taxi driver",to:"kombi driver"},
      {from:"taxis",to:"kombis"},
      {from:"taxi",to:"kombi"},
    ],
    tableTextReplacements: [
      {from:"Lesson 24 — Taxi Rank Economy",to:"Lesson 24 — Kombi-Rank Economy"},
    ],
  },
  "g9-t2-l25-026": {
    textReplacements: [
      {from:"Total: about R4,760",to:"Total: about US$330"},
      {from:"Total: about R3,980",to:"Total: about US$310"},
      {from:"Child support grant: R510",to:"Family support / other household income: US$35"},
      {from:"Income (Monthly):",to:"Illustrative Income (Monthly):"},
      {from:"Crèche salary: R3,200",to:"Crèche salary: US$220"},
      {from:"Saturday baking: R600–R900 (average R750)",to:"Saturday baking: US$40–US$60 (average US$50)"},
      {from:"Child support grant: R510",to:"Family support / other household income: US$35"},
      {from:"Thabo's delivery contribution: R200–R400 (average R300)",to:"Thabo's delivery contribution: US$20–US$30 (average US$25)"},
      {from:"Total: Approximately R4,760",to:"Total: Approximately US$330"},
      {from:"Rent: R1,400",to:"Rent: US$100"},
      {from:"Electricity: R350",to:"Electricity: US$25"},
      {from:"Transport: R480",to:"Transport: US$45"},
      {from:"Food: R1,200",to:"Food: US$100"},
      {from:"Airtime: R150",to:"Airtime: US$10"},
      {from:"School costs: R200",to:"School costs: US$15"},
      {from:"Stokvel: R200",to:"Mukando: US$15"},
      {from:"Total: Approximately R3,980",to:"Total: Approximately US$310"},
      {from:"So we have a surplus,\" Thabo says. \"R780 left over.\"",to:"So we have a surplus,\" Thabo says. \"About US$20 left over.\""},
      {from:"But that R780 is for emergencies, repairs, school fees, Christmas. It is not extra. It is protection.",to:"But that US$20 is for emergencies, repairs and school costs. It is not extra. It is protection."},
    ],
    tableTextReplacements: [
      {from:"Taxi Rank Economy",to:"Kombi-Rank Economy"},
      {from:"R3,200",to:"US$220"},
      {from:"R750",to:"US$50"},
      {from:"R510",to:"US$35"},
      {from:"R300",to:"US$25"},
      {from:"R1,400",to:"US$100"},
      {from:"R350",to:"US$25"},
      {from:"R480",to:"US$45"},
      {from:"R1,200",to:"US$100"},
      {from:"R150",to:"US$10"},
      {from:"R200",to:"US$15"},
      {from:"R4,760",to:"US$330"},
      {from:"R3,980",to:"US$310"},
      {from:"Grant",to:"Family support",exact:true},
      {from:"Stokvel",to:"Mukando",exact:true},
      {from:"R",to:"Currency + amount",exact:true},
    ],
  },
  "g9-t2-l27-028": {
    textReplacements: [
      {from:"Myah has been mapping the taxi rank for three weeks. She has tracked money in. She has tracked money out. Now she is mapping the leaks.",to:"Myah has been mapping the kombi rank for three weeks. She has tracked money in. She has tracked money out. Now she is examining which outflows strengthen local value and which leave without much local return."},
      {from:"She draws a large circle on a piece of paper. Inside, she writes everything that happens at the taxi rank. Outside, she writes everything that leaves.",to:"She draws a large circle on a piece of paper. Inside, she writes everything that happens at the kombi rank. Outside, she writes the payments and value flows that leave the immediate community."},
      {from:"Money spent at the spaza shop (some of it)",to:"Money spent at the tuckshop (some of it)"},
      {from:"Airtime purchased from the network provider (who is based in Johannesburg)",to:"Airtime purchased from a national network provider outside the immediate community"},
      {from:"Myah stares at the map. \"Most of the money leaves,\" she says. \"The taxi rank is like a sieve. The money flows in, but most of it flows out. Very little stays.\"",to:"Myah stares at the map. \"A lot of the money moves outward,\" she says. \"The kombi rank connects our community to a much bigger economy. The question is not whether money leaves — it must — but what value stays, what comes back, and what we can strengthen locally.\""},
      {from:"Your Move: What is one leak you could reduce in your own life? Could you buy from a local shop instead of a chain? Could you save in a stokvel instead of a bank? Could you support a local business instead of a distant one?",to:"Your Move: What is one outflow you could examine more carefully in your own life? Could a local supplier meet the need? Could a trusted mukando or formal savings option help you prepare better? Could you support a local business where the value and price make sense? The goal is not to keep all money local; it is to make deliberate choices."},
      {from:"Every rand that leaves without return is a leak.",to:"Every amount that leaves without strengthening value, resilience or a real need deserves a second look."},
      {from:"Every Rand That Leaves Without Return Is a Leak",to:"Every Outflow Should Have a Reason"},
    ],
  },
  "g10-t1-l01-001": {
    textReplacements: [
      {from:"Conduct a strategic audit of your assets and liabilities from Grade 9.",to:"Conduct a strategic audit of the assets, liabilities and evidence you carry forward from Form 2."},
      {from:"Set a strategic intention for Grade 10 that includes what you are willing to sacrifice.",to:"Set a strategic intention for Form 3 that includes what you are willing to give up or change to make it real."},
      {from:"Myah opened her mouth to tell the story — the grant office, the silence, the cooler box, the first R5 water bottle. But then she stopped.",to:"Myah opened her mouth to tell the story — the committee office, the silence, the cooler box, the first small water sale. But then she stopped."},
      {from:"Think about your Grade 9 journey. What is one scar you carry — a moment when something failed, hurt, or cost you? That scar is not just pain. It is evidence. It is data. What did it teach you that success never could?",to:"Think about your Form 2 journey. What is one scar you carry — a moment when something failed, hurt or cost you? That scar is not just pain. It is evidence. What did it teach you that success never could?"},
      {from:"✍️ Activity 1: My Grade 10 Strategic Audit — With Scar Inventory",to:"✍️ Activity 1: My Form 3 Strategic Audit — With Scar Inventory"},
      {from:"List THREE assets from Grade 9 — skills, habits, mindsets, relationships, evidence — that you will actively use in Grade 10. For each, name one specific situation this term where it will give you an advantage.",to:"List THREE assets from Form 2 — skills, habits, mindsets, relationships or evidence — that you will actively use in Form 3. For each, name one specific situation this term where it may help you."},
      {from:"List TWO liabilities — patterns, beliefs, blind spots — from Grade 9 that could sabotage you this term. For each, name the specific situation where it might appear AND your counter-move.",to:"List TWO liabilities — patterns, beliefs or blind spots — from Form 2 that could undermine you this term. For each, name the situation where it might appear and your counter-move."},
      {from:"What is ONE scar you carry from Grade 9 — a failure, a loss, a moment when something broke? What did it teach you that success never could? How will you use that scar in Grade 10?",to:"What is ONE scar you carry from Form 2 — a failure, loss or moment when something broke? What did it teach you that success never could? How will you use that lesson in Form 3?"},
      {from:"Part D: My Grade 10 Intention — With Sacrifice",to:"Part D: My Form 3 Intention — With Sacrifice"},
      {from:"Key idea: You are not starting Grade 10 empty. You carry everything from Grade 9 — the scars, the evidence, the skills, the systems you built. The person who walked into the grant office, who borrowed a cooler box, who tracked a habit for 21 days — she is still here. But she is not the same. She is becoming someone who designs, not just reacts. Someone who builds, not just starts.",to:"Key idea: You are not starting Form 3 empty. You carry everything from Form 2 — scars, evidence, skills and systems you built. The person who walked into the committee office, borrowed a cooler box and tracked a habit for 21 days is still here. But she is becoming someone who designs, not just reacts; someone who builds, not just starts."},
      {from:"Here’s the tension: the skills that made you successful in Grade 9 may not be the skills that make you successful in Grade 10. Acting on instinct, starting before you are ready, pushing through obstacles with sheer persistence — these got you here. But they will not get you where you need to go next. Grade 10 demands something different: not just action, but architecture. Not just starting, but designing. Not just persistence, but prediction. And here is the harder truth: the strategist carries a burden the challenger never knew. When you design a system and it fails, you cannot blame the system. You built it. You own it. You carry the scar.",to:"Here’s the tension: the skills that helped you in Form 2 may not be enough for Form 3. Acting quickly and pushing through obstacles can help you start, but this year asks for more architecture: design, prediction, measurement and revision. When you design a system and it fails, the useful response is not blame. It is to study what broke, own what you controlled and improve the design."},
      {from:"Your Next Step: What is one situation in Grade 9 where you acted fast — and it worked? What is one situation where acting fast was not enough — where you needed a system, a plan, a design, and you did not have one? What did that cost you? Be specific. What will you do differently in Grade 10?",to:"Your Next Step: What is one Form 2 situation where acting fast worked? What is one situation where action was not enough because you needed a system, plan or design? What did that cost you? What will you do differently in Form 3?"},
      {from:"Review your Strategic Audit. Myah said: \"A system without a scar is just a theory.\" You named one scar. Now answer: If you do NOT use that scar in Grade 10 — if you forget what it taught you — what is the most likely way it will reappear and sabotage you? Write the scene. Be specific. Then write: what is the ONE action you will take THIS WEEK to ensure the scar serves you rather than sabotaging you?",to:"Review your Strategic Audit. You named one scar. If you ignore what it taught you in Form 3, how could the same pattern reappear? Write the scene. Then name one action you will take this week to use the lesson rather than repeat the mistake."},
      {from:"| Date | | | Lesson | Lesson 1 — Grade 10 Strategic Audit | | Experiment/Observation | I conducted a strategic audit including scar inventory. | | Result | My most dangerous liability: | | Learning | | | Next Action | My one action this week: |",to:"| Date | | | Lesson | Lesson 1 — Form 3 Strategic Audit | | Experiment/Observation | I conducted a strategic audit including scar inventory. | | Result | My most dangerous liability: | | Learning | | | Next Action | My one action this week: |"},
    ],
  },
  "g10-t1-l02-002": {
    textReplacements: [
      {from:"Thandiwe arrived at 7:45, flustered. She had overslept. Her child had been sick. The stove would not light — Mama Rose always lit it. The recipe for the gravy was in Mama Rose's head, not on paper. By 9am, half the customers had left. By noon, the kitchen had served twenty-three plates instead of the usual sixty. Revenue for the day: R345. On a Tuesday that normally brought in R900.",to:"Thandiwe arrived at 7:45, flustered. She had overslept. Her child had been sick. The stove would not light — Mama Rose always lit it. The recipe for the gravy was in Mama Rose's head, not on paper. By 9am, half the customers had left. By noon, the kitchen had served twenty-three plates instead of the usual sixty. In this illustrative example, revenue for the day was US$34.50 instead of the usual US$90."},
    ],
    tableTextReplacements: [
      {from:"A plate of food for R25",to:"A plate of food for US$2.50 in this illustrative example"},
    ],
  },
  "g10-t1-l03-003": {
    title:"KARABO'S PAYSLIP — UNDERSTANDING THE SYSTEM YOU ENTER",
    textReplacements: [
      {from:"Karabo is in Grade 11 now. She works Saturdays at a clothing shop in the mall. She has been collecting her payslips for six months. She came to find Myah at the taxi rank — not to complain, but because she had discovered something that disturbed her.",to:"Karabo is an older learner who works Saturdays at a clothing shop. She has been collecting her payslips for six months. She comes to find Myah at the kombi rank — not to complain, but because she has started asking what every line on the payslip means."},
      {from:"\"At first I was angry,\" Karabo said. \"I worked those hours. That money was mine. But then I started learning what each deduction was for. PAYE funds schools, roads, clinics. UIF is a safety net. SDL funds training. The union fee gives me collective power I could never have alone. I stopped being angry. I started being... something else.\"",to:"\"At first I was angry,\" Karabo says. \"I worked those hours. Then I started learning what each line meant. PAYE is employee income tax administered by ZIMRA. Other deductions can depend on the law, my employment conditions or choices I have made. I stopped guessing and started checking.\""},
      {from:"She pointed to a line Myah had not noticed. \"This one. R85. 'Admin fee.' I asked my manager what it was for. She said it covers the cost of processing payroll. I asked if I could opt out. She said no. So I am paying R85 a month for someone to calculate how much of my money to take. That is R1,020 a year. For math.\"",to:"She points to a line Myah had not noticed. \"This one. US$5. An optional savings deduction I agreed to months ago. I had forgotten it was there. The lesson for me is simple: if money leaves my pay, I should know why, whether it is required or optional, and what I receive in return.\""},
      {from:"\"Nothing. Not about that line. But I can do other things. I opened a TFSA. Contributions are not taxed. I am learning which deductions are mandatory and which are optional — and I am opting out of everything I can, legally. I am not fighting the system. I am navigating it. There is a difference. Fighting a system you cannot change is exhausting. Navigating it is strategic.\"",to:"\"I cannot simply remove a lawful tax deduction because I dislike it. But I can read my payslip, ask questions, check current ZIMRA guidance and understand which deductions are statutory, contractual or voluntary. I am not fighting the system. I am learning how to navigate it responsibly.\""},
      {from:"4. Karabo's admin fee is R85/month. How much is that per year? R _______",to:"4. Karabo's optional savings deduction is US$5 per month. How much is that over 12 months? US$ _______"},
      {from:"Question 1: If Karabo earns R1,200 gross and mandatory deductions total 18%, what is her net pay? Show your calculation.",to:"Question 1: In a purely illustrative maths example, if gross pay is US$120 and total deductions are 18%, what is net pay? Show your calculation. Do not treat 18% as a current Zimbabwe tax rate."},
      {from:"If you cannot ask anyone: Research one deduction — UIF, SDL, or PAYE. Find out: what percentage goes to administration (not actual benefits)? Write down what you find. Does this change how you feel about the deduction?",to:"If you cannot ask anyone: research PAYE on the official ZIMRA website. Find the latest tax table and write down the date of the table you found. What changed when you checked the source instead of relying on a remembered rate?"},
    ],
    tableReplacements: [
      {
        cellIncludes:"Unemployment Insurance Fund",
        rows:[
          ["Payslip line","What it means","What to check"],
          ["Gross pay","Pay before deductions","Hours/rate or salary agree with the work contract"],
          ["PAYE","Employee income tax administered by ZIMRA","Use the latest applicable ZIMRA table; rates can change"],
          ["Other statutory or employment deductions","Only where current law or an employment arrangement applies","What is required, who receives it, and why"],
          ["Voluntary deductions","Amounts you chose or authorised","Can you change or stop them, and under what rules?"],
          ["Net pay","What remains after deductions","Gross pay minus all valid deductions"],
        ],
      },
      {
        cellIncludes:"Gross pay (16 hours × R55)",
        rows:[
          ["Item","Illustrative Amount"],
          ["Gross pay (16 hours × US$5.50)","US$88.00"],
          ["Illustrative PAYE for the exercise only","-US$8.80"],
          ["Union or association fee, if voluntarily applicable","-US$3.00"],
          ["Optional savings deduction","-US$5.00"],
          ["Net pay in this illustration","US$71.20"],
        ],
      },
    ],
  },
  "g10-t1-l04-004": {
    tableReplacements: [
      {
        cellIncludes:"TFSA growth",
        rows:[
          ["Stream","Type","Illustrative Monthly Amount","Control (1-5)","What could interrupt it?"],
          ["Tutoring","Active","US$200","4","Clients can leave, but new clients may be found"],
          ["Weekend retail","Active","US$120","1","Employer controls shifts"],
          ["Bursary or scholarship stipend","Conditional","US$150","3","Conditions such as academic progress may apply"],
          ["Investment growth","Portfolio","US$15","3","Markets can rise or fall; provider and product rules matter"],
          ["Digital study guides","Business / royalty-like","US$60","4","Demand and platform access can change"],
        ],
      },
    ],
    textReplacements: [
      {from:"\"Five streams. R5,450 total. But look at the control scores. R1,200 of that — more than 20% — could disappear tomorrow if my manager decides to cut my hours. R1,500 more could vanish if I fail one subject. That is nearly half my income dependent on decisions other people make.\"",to:"\"Five streams. In this illustration they total US$545 a month. But look at the control scores. US$120 depends heavily on an employer's shifts and US$150 depends on bursary conditions. The amount matters, but so does who controls whether the stream continues.\""},
      {from:"R1,000 You Control > R3,000 That Can Be Taken Away",to:"Control Matters Alongside Amount"},
      {from:"Key idea: Zinhle earns R5,450 a month as a student. That is impressive. But the more impressive number is her control percentage. She knows exactly which streams depend on someone else's goodwill and which depend only on her. Most people never ask that question. They count the money. They do not count the control. And then one day the manager cuts their hours, the bursary committee says no, the client leaves — and half their income vanishes overnight.",to:"Key idea: in this illustration Zinhle receives US$545 a month from several sources. The useful insight is not that one stream is 'safe' forever. It is that each stream has different dependencies: employer decisions, client demand, bursary conditions, market movement or platform access. Count both the money and the dependency."},
      {from:"Here’s the tension: shifting toward control means earning less now. The retail job pays R1,200. The study guides pay R600. If she quits the retail job to focus on study guides, she takes a 50% pay cut temporarily. That is the trap. The streams with the lowest control often pay the most right now. The streams with the highest control pay the least right now. Choosing control means choosing less money now for more freedom later. Not everyone can afford that choice. If you cannot shift yet, do not blame yourself. But know the direction. And move when you can.",to:"Here’s the tension: a stream you control more may earn less today and still carry real risk. A job may provide steadier cash now; a small business may provide more decision-making control but less certainty. Not everyone can afford to trade current stability for future optionality. The goal is not to worship control. It is to understand the trade-offs."},
      {from:"Your Next Step: If you had to choose TODAY between a R2,000/month job with control score 1 and a R800/month business with control score 5, which would you choose? Why? What does your answer reveal about what you are optimising for?",to:"Your Next Step: if you had to choose between an illustrative US$200/month job with low control and an US$80/month micro-business with higher decision-making control but more risk, what would you choose today? Why? What are you optimising for: stability, learning, control, growth, or something else?"},
    ],
    tableTextReplacements: [
      {from:"Spaza shop",to:"Tuckshop"},
    ],
  },
  "g10-t1-l05-005": {
    textReplacements: [
      {from:"Key idea: Thabo's business looked profitable. It was. But it was less profitable than he thought. And the gap between what he thought and what was true almost broke him. The paradox: the more successful you become, the easier it is to ignore the small leaks. When revenue is growing, R20 here and R30 there feel insignificant. But they add up. And one day, something breaks — a bike, a body, a relationship — and the buffer you thought you had is not there. Because it was never there. You just did not know it.",to:"Key idea: Thabo's business looked profitable, but hidden costs made it less profitable than he thought. Small untracked amounts can look insignificant while revenue is growing, yet they accumulate and weaken the buffer. The strategic response is not fear; it is a simple, repeatable cost-tracking system."},
      {from:"But last week, his bike needed a major repair. R450. And he did not have it.",to:"But last week, his bike needed a major repair. In this illustrative example, the repair cost US$45. He did not have it."},
      {from:"Myah found him at Emmanuel's spaza shop, staring at a piece of paper covered in numbers.",to:"Myah found him at Emmanuel's tuckshop, staring at a piece of paper covered in numbers."},
      {from:"Thabo had been tracking his revenue carefully. Every delivery. Every payment. R2,400 in a good month. But he had not been tracking his costs with the same discipline. He knew the big ones — bike maintenance, airtime, the occasional snack for an elder. But the small ones? The R20 here for a bolt. The R30 there for a new tyre tube. The R10 for parking at the taxi rank when he had to wait. The R50 he gave his younger cousin to help with a delivery when he was sick. He had not counted any of it.",to:"Thabo had been tracking revenue carefully. Every delivery. Every payment. In a good month, about US$240 in this example. But he had not tracked costs with the same discipline. He knew the obvious costs — bike maintenance and airtime. The small ones were missing: US$2 for a bolt, US$3 for a tyre tube, US$1 for a small rank-related cost, US$5 paid to his younger cousin for helping with a delivery. He had not counted any of it."},
      {from:"Myah added them up. R680 in a month. On top of the R400 he had budgeted for known expenses. Total costs: R1,080. Revenue: R2,400. Profit: R1,320.",to:"Myah adds them up: US$68 in hidden costs, on top of US$40 in known expenses. Total costs: US$108. Revenue: US$240. Profit: US$132."},
      {from:"\"That is still profit,\" Thabo said. \"R1,320 a month is good.\"",to:"\"That is still profit,\" Thabo says. \"US$132 a month is still meaningful.\""},
      {from:"\"Yes. But you did not know about R680 of your costs. You thought your profit was R2,000. You were spending money you did not know you were spending. And when the bike broke, you had already spent the buffer you thought you had. The business did not fail because the bike broke. The business failed because you did not know where your money was going.\"",to:"\"Yes. But you did not know about US$68 of your costs. You thought your profit was US$200. The repair exposed a tracking problem that already existed. The lesson is not 'the bike broke the business.' The lesson is that hidden costs made the buffer look larger than it really was.\""},
      {from:"Thabo's hidden costs were R680 — 28% of his revenue. If you had to estimate your hidden costs as a percentage, what would they be?",to:"Thabo's hidden costs were US$68 — about 28% of his US$240 revenue. If you had to estimate hidden costs in a small project, what percentage would you test for first, and how would you verify it?"},
      {from:"Thabo's fix was simple: track every rand. Every bolt. Every parking fee. Every cousin-helping payment. What is ONE system you could put in place to track your hidden costs?",to:"Thabo's fix was simple: track every amount and label the currency. Every bolt. Every fee. Every payment to someone who helps. What is ONE system you could use to track hidden costs?"},
      {from:"Here’s the tension: tracking every rand is exhausting. It takes time. It takes discipline. Most people will not do it. They would rather live with the illusion of profit than face the reality of their spending. The strategist chooses the discomfort of knowing over the comfort of guessing. The question is not whether you can track every rand. The question is whether you can afford not to. Thabo could not afford not to. And he learned — the hard way, with his grandmother's money, with the shame of borrowing again — that the piper always gets paid. The only question is whether you know when the payment is coming.",to:"Here’s the tension: tracking every small cost takes effort. But ignoring small costs creates false confidence. You do not need a complicated accounting system to begin. You need a consistent one. The strategist chooses evidence over guessing and creates a routine simple enough to keep using."},
      {from:"Question 1: Thabo's revenue was R2,400. His tracked costs were R400. His hidden costs were R680. What was his ACTUAL profit? What percentage of his revenue was hidden costs? Show your calculations.",to:"Question 1: Thabo's illustrative revenue was US$240. Known costs were US$40 and hidden costs were US$68. What was actual profit? What percentage of revenue was hidden costs? Show your calculations."},
      {from:"This week, track EVERY rand you spend. Every single one. Even the R2 sweet. Even the R5 airtime. At the end of the week, separate your spending into two columns: \"I Planned For This\" and \"I Did Not Plan For This.\" Total each column.",to:"This week, track every amount you spend and label the currency. Even tiny amounts count. At the end of the week, separate spending into 'I Planned For This' and 'I Did Not Plan For This.' Total each column."},
      {from:"| Date | | | Lesson | Lesson 5 — Hidden Costs Audit | | Experiment/Observation | I audited my hidden costs and tracked every rand for one week. | | Result | | | Learning | | | Next Action | |",to:"| Date | | | Lesson | Lesson 5 — Hidden Costs Audit | | Experiment/Observation | I audited hidden costs and tracked every amount for one week. | | Result | | | Learning | | | Next Action | |"},
    ],
    tableReplacements: [
      {
        cellIncludes:"Thabo's Numbers",
        rows:[
          ["Term","What It Means","Thabo's Illustrative Numbers"],
          ["Revenue","All the money customers pay","US$240"],
          ["Expenses","Everything spent to operate","US$108"],
          ["Profit","Revenue − expenses","US$132"],
          ["Hidden costs","Expenses not originally counted","US$68"],
        ],
      },
    ],
  },
  "g10-t1-l06-006": {
    textReplacements: [
      {from:"Lethabo's clock business has grown. He has helpers. He has orders. He has a system. But he also has a problem: he cannot make enough clocks alone. So three months ago, he took on a partner. His cousin, Sizwe. Sizwe had capital — R3,000 saved from a year of working at a supermarket. Lethabo had the skill, the reputation, the customer relationships. They agreed to split everything 50/50. No written agreement. They were family.",to:"Lethabo's clock business has grown. He has helpers, orders and a system. But he cannot make enough clocks alone. Three months ago he took on a partner, his cousin Sizwe. In this illustrative example, Sizwe contributed US$300 in saved capital. Lethabo contributed skill, reputation and customer relationships. They agreed to split everything 50/50. No written agreement. They were family."},
      {from:"They argued. Sizwe wanted out. He wanted his R3,000 back. Lethabo did not have it — he had reinvested everything in materials and paying his helpers.",to:"They argued. Sizwe wanted out and wanted his US$300 back. Lethabo did not have it available because the money had been reinvested in materials and helper payments."},
      {from:"Myah finds Lethabo at Emmanuel's spaza shop, staring at nothing.",to:"Myah finds Lethabo at Emmanuel's tuckshop, staring at nothing."},
    ],
  },
  "g10-t1-l07-007": {
    textReplacements: [
      {from:"Thandi's cooperative has grown. Eight members now. Mangoes, avocados, bananas, herbs. A joint savings account. A shared stall at the taxi rank. By all visible measures, it is a success story.",to:"Thandi's cooperative has grown. Eight members now. Mangoes, avocados, bananas and herbs. A joint account. A shared stall near the kombi rank. By all visible measures, it is a success story."},
      {from:"Myah finds her at the taxi rank on a Thursday afternoon. The stall is open, but Thandi is the only one there. She is supposed to have two partners on shift with her. Neither showed up.",to:"Myah finds her near the kombi rank on a Thursday afternoon. The stall is open, but Thandi is the only one there. She is supposed to have two partners on shift with her. Neither showed up."},
    ],
  },
  "g10-t1-l08-008": {
    tableReplacements: [
      {
        cellIncludes:"With helpers (untrained)",
        rows:[
          ["Scale","Clocks Made","Illustrative Total Cost","Illustrative Unit Cost"],
          ["Alone","8 per week","US$40","US$5.00 per clock"],
          ["With helpers (untrained)","15 per week","US$65","US$4.33 per clock"],
          ["With trained team + system","35 per week","US$120","US$3.43 per clock"],
        ],
      },
    ],
  },
  "g10-t1-l10-010": {
    textReplacements: [
      {from:"Nosipho has been tutoring for six months. She is good at it. Her students pass. Their parents are grateful. She charges R40 per hour.",to:"Nosipho has been tutoring for six months. She is good at it. Her students improve. Their parents are grateful. In this illustrative example, she charges US$4 per hour."},
      {from:"Last week, a new parent asked her rate. She said R40. The parent paused. Then said: \"Is that all? My friend pays R120 an hour for a tutor who is not half as good as you. You should charge more.\"",to:"Last week, a new parent asked her rate. She said US$4. The parent paused, then said: \"Is that all? I know families paying much more for tutoring. Have you checked the market and the value of your results?\""},
      {from:"Nosipho did not know what to say. She felt exposed — like someone had seen something she was trying to hide. Later, she told Myah about it at the taxi rank.",to:"Nosipho did not know what to say. She felt exposed — like someone had seen something she was trying to hide. Later, she told Myah about it at the kombi rank."},
      {from:"\"I do not know how to charge more. R40 feels like... what I am worth. Maybe less. When I think about charging R80, I feel like I am being arrogant. Like someone is going to laugh at me and say: 'Who do you think you are?'\"",to:"\"I do not know how to charge more. US$4 feels tied to what I think I am worth. When I think about charging US$8, I feel arrogant — even though I know pricing should be about the service, the market and the value created, not my worth as a person.\""},
      {from:"The next week, Nosipho told a new parent: \"R80 per hour.\" The parent said yes without hesitating. Nosipho felt sick. Then she felt something else — something that took her a moment to recognize. It was pride.",to:"The next week, after checking comparable tutoring rates and explaining what her sessions include, Nosipho quotes US$8 per hour to a new parent. The parent says yes. Nosipho feels nervous, then proud that she used evidence rather than shame to set the price."},
      {from:"Here’s the tension: naming a higher price does not just change what you earn. It changes who you are. When Nosipho said \"R80\" and the parent said yes, something shifted in her. She felt sick — because she was violating an old belief. Then she felt proud — because she was installing a new one. Every time you name your price without apologizing, you are not just making money. You are rewriting your identity. You are telling yourself: I am someone who creates value, and I am not ashamed to be paid for it. That is not arrogance. That is accuracy.",to:"Here’s the tension: pricing can trigger identity and confidence, but a higher price is not automatically the right price. Nosipho's job is to separate self-worth from pricing and test the business facts: customer value, alternatives, her costs, her time, demand and sustainability. A price is a market decision, not a verdict on who she is."},
    ],
    tableTextReplacements: [
      {from:"Materials R10 + labour R30 + margin R10 = R50",to:"Materials US$1 + labour US$3 + margin US$1 = US$5"},
      {from:"Tutoring that raises a child's grade = R80/hour",to:"Tutoring with strong evidence of value = US$8/hour in this illustration"},
    ],
  },
  "g10-t1-l11-011": {
    title:"COMPETITION, PESTLE & FIVE FORCES — THE SHOP THAT ADAPTED",
    textReplacements: [
      {from:"📘 The Spaza Shop That Refused to Die",to:"📘 The Tuckshop That Refused to Die"},
      {from:"Emmanuel's family spaza shop has survived for fifteen years. It survived the 2008 recession. It survived COVID. It survived the wholesaler closure that broke their supply chain last year. But the new mall — the one that opened six months ago three streets away — is different. The mall has a supermarket with prices Emmanuel cannot match. It has air conditioning. It has parking. It has bright lights and clean floors and a bakery that fills the air with the smell of fresh bread.",to:"Emmanuel's family tuckshop has survived for fifteen years. It has lived through inflation, supply disruptions and changing customer habits. But a new shopping centre that opened nearby is different. The supermarket has purchasing power Emmanuel cannot match. It has parking, long opening hours, bright displays and a bakery that fills the air with fresh bread."},
      {from:"Emmanuel's mother has been quiet for weeks. The numbers tell the story: revenue down 35% since the mall opened. Regular customers still come, but they buy less. The bulk of their shopping goes to the supermarket. The spaza shop gets the leftovers — the single eggs, the emergency bread, the late-night milk.",to:"Emmanuel's mother has been quiet for weeks. The numbers tell the story: revenue down 35% since the shopping centre opened. Regular customers still come, but they buy less. The supermarket gets more of the planned shopping. The tuckshop gets the single eggs, emergency bread and late-night milk."},
      {from:"Choose a real business you know — a spaza shop, a vendor, a service provider, or your own project.",to:"Choose a real business you know — a tuckshop, market stall, vendor, service provider or your own project."},
      {from:"Key idea: Emmanuel's spaza shop is losing. The mall is bigger, cheaper, shinier. On almost every competitive measure, the mall wins. But competitive analysis is not just about identifying threats. It is about identifying the one place you can win — and betting everything on that. For Emmanuel, that place is cooperation. Every spaza shop in Katlehong faces the same mall. Alone, they are vulnerable. Together, they can buy in bulk, share transport, share marketing, share survival.",to:"Key idea: Emmanuel's tuckshop is under pressure. The shopping centre is bigger and can often buy stock more cheaply. Competitive analysis is not only about listing threats. It is about finding where a smaller business can create a defensible advantage. For Emmanuel, one option is cooperation with other local shops: bulk purchasing, shared transport, joint promotions or other arrangements that reduce cost without pretending trust is automatic."},
      {from:"Here’s the tension: cooperation requires trust. And trust is exactly what competition destroys. The spaza shop owners have been competing against each other for years. They have undercut each other on prices. They have bad-mouthed each other to customers. Now Emmanuel is asking them to cooperate. Why should they trust him? Why should they trust each other? The same structural analysis that reveals cooperation as the solution also reveals why cooperation is so hard. The strategist does not just identify the right move. The strategist identifies why the right move is difficult — and then figures out how to make it possible anyway.",to:"Here’s the tension: cooperation requires rules and trust. Local shop owners may have competed against one another for years. The same analysis that makes cooperation attractive also explains why it is difficult. A strategist must design the conditions that make cooperation testable: small commitments, transparent records, clear exit rules and evidence before deeper dependence."},
      {from:"Question 2: Emmanuel identified cooperation as his strategic response to the mall. But the spaza shop owners have been competitors for years. What is the biggest barrier to them cooperating now? If you were Emmanuel, what would you do to overcome that barrier — specifically, practically, tomorrow?",to:"Question 2: Emmanuel identified cooperation as one possible response to the shopping centre. What is the biggest barrier to local shops cooperating? If you were Emmanuel, what low-risk first step would you test tomorrow?"},
      {from:"Visit a small business in your community — a spaza shop, a vendor, a service provider. Observe for ten minutes. Apply PESTLE in your head. Write down: What is the biggest threat they face? What could they do about it — that they are not currently doing?",to:"Visit or observe a small business in your community — a tuckshop, vendor, market stall or service provider. Apply PESTLE. What is one major external factor affecting them? What response could they test?"},
    ],
    tableTextReplacements: [
      {from:"Katlehong",to:"the local market"},
      {from:"Spaza shop",to:"Tuckshop"},
      {from:"spaza shop",to:"tuckshop"},
      {from:"many spaza shops in Katlehong",to:"many small shops in the same local market"},
      {from:"Very easy — anyone can open a spaza shop",to:"Relatively easy — small retail competitors can enter the market"},
      {from:"Load-shedding affects both, but mall has generator",to:"Power interruptions affect both, but larger competitors may have stronger backup systems"},
    ],
  },
  "g10-t1-l12-012": {
    textReplacements: [
      {from:"Emmanuel has been thinking about what Myah said. Cooperation. But before he can convince other spaza shop owners to join him, he needs to be clear about who HE is. What his shop stands for. What makes it different from the mall — and from every other spaza shop.",to:"Emmanuel has been thinking about what Myah said. Cooperation. But before he can convince other tuckshop owners to join him, he needs to be clear about what his own shop stands for and why customers choose it."},
      {from:"\"Emmanuel's Spaza — Open Late, Always Family. 15 Years in Katlehong.\"",to:"\"Emmanuel's Tuckshop — Open Late, Always Family. 15 Years in Chitungwiza.\""},
      {from:"Key idea: Emmanuel's sign was not clever. It was true. \"Open Late, Always Family. 15 Years in Katlehong.\" Every word is verifiable. Every word has been earned. That is not marketing. That is just telling people who you are. And in a world where most marketing is lies dressed up in design, the truth stands out. It does not need to shout. It just needs to be true.",to:"Key idea: Emmanuel's sign was not clever. It was true: \"Open Late, Always Family. 15 Years in Chitungwiza.\" A strong brand claim should be earned and verifiable. Marketing works best when the promise matches the experience customers actually receive."},
    ],
    tableTextReplacements: [
      {from:"Katlehong residents who value community over price",to:"Local residents who value convenience, trust and community alongside price"},
    ],
  },
  "g10-t1-l13-013": {
    textReplacements: [
      {from:"Ms. Daniels stands at the front of the room. The energy is different than in Grade 9. The learners are older. They have built things. They have watched things break. They know that plans are not magic.",to:"Ms. Daniels stands at the front of the room. The energy is different from Form 2. The learners have built things, watched things break and learned that plans are not magic."},
      {from:"\"Your project is to design something that creates lasting value — for yourself, your community, or both. But this is not the Grade 9 project. In Grade 9, we asked you to start something. In Grade 10, we ask you to design something that could outlast you. Something with systems. Something with structure. Something that does not depend entirely on your presence.\"",to:"\"Your project is to design something that creates lasting value — for yourself, your community or both. This is not the Form 2 project. In Form 2, we asked you to start and execute. In Form 3, we ask you to design something with systems and structure — something that does not depend entirely on your presence.\""},
      {from:"Key idea: This is not a test. This is a demonstration. You are not proving what you know. You are proving what you can build. In Grade 9, the question was: can you start? In Grade 10, the question is: can you design something that lasts? The difference is not effort. The difference is architecture.",to:"Key idea: this project is a demonstration. In Form 2, the question was: can you start and execute? In Form 3, the question becomes: can you design something more durable? The difference is architecture."},
    ],
  },
  "g10-t1-l15-015": {
    textReplacements: [
      {from:"\"In Grade 9, I started a water business. It depended on me. I was there at 6am. I bought the stock. I sold the bottles. If I got sick, the business stopped. This project is different. This project is designed to run without me. That is the difference between a job and a system. That is what Grade 10 taught me.\"",to:"\"In Form 2, I tested a water business. It depended on me. I was there early. I bought the stock. I sold the bottles. If I stopped, the activity stopped. This project is different. I designed roles, steps and checks so the work can continue without every decision depending on me. That is what Form 3 is teaching me about systems.\""},
    ],
  },
  "g10-t1-l16-016": {
    textReplacements: [
      {from:"R680",to:"US$68"},
      {from:"R80",to:"US$8"},
      {from:"Lesson 1: Strategic Audit. Her scar inventory. The cooler box. The grant office silence — still there, still teaching. Lesson 2: The kitchen that broke. Mama Rose on her back. Thandiwe failing in public. Single point of failure. Lesson 3: Karabo's payslip. Understanding versus agreeing. Navigating systems you did not choose. Lesson 4: Income control. Zinhle's napkin. Amount versus control. The streams you own. Lesson 5: Thabo's hidden costs. R680 he did not know he was spending. Lesson 6: Lethabo and Sizwe. Partnership without agreement. Trust without structure. Lesson 7: Thandi's cooperative. Free riders. Enforcement. The rules you do not write. Lesson 8: Bottlenecks. Lethabo checking every clock. Letting go. Lesson 9: Intellectual property. Protecting what you build. Building what cannot be copied. Lesson 10: Pricing. Nosipho naming R80. The body knowing the truth before the mind. Lesson 11: Competitive analysis. Emmanuel's mall. PESTLE. Porter's Five Forces. Cooperation as defense. Lesson 12: Brand truth. The sign that was true. Marketing as honesty. Lesson 13: Her Value-Creation Plan. The financial literacy workshop. Systematized. Lesson 14: Feedback. The flaw she did not see. …",to:"Lesson 1: Strategic Audit and scar inventory. Lesson 2: The kitchen that broke — single points of failure. Lesson 3: Karabo's payslip — understanding PAYE and deductions before reacting. Lesson 4: Income streams and dependency. Lesson 5: Thabo's hidden costs — US$68 he had not counted. Lesson 6: Lethabo and Sizwe — trust without structure. Lesson 7: Thandi's cooperative — rules, participation and enforcement. Lesson 8: Bottlenecks and scale. Lesson 9: Intellectual property and defensible value. Lesson 10: Pricing with evidence. Lesson 11: PESTLE and competitive forces. Lesson 12: Brand truth. Lessons 13–15: the Value-Creation Plan — designed, tested and presented."},
      {from:"From me, in Grade 10 Date: _____________________",to:"From me, in Form 3 Date: _____________________"},
      {from:"You finished Term 1 of Grade 10.",to:"You completed the first Form 3 learning cycle: value creation, business systems and enterprise architecture. Form 3 Term 1 continues with saving, investing and assets."},
    ],
  },
  "g10-t2-l17-017": {
    title:"SAVING VS INVESTING — PROTECTING MONEY FOR DIFFERENT JOBS",
    textReplacements: [
      {from:"List any money you have saved — in a bank, in a jar, with a stokvel, anywhere.",to:"List any money you have saved — in a bank, in a jar, through a mukando or another savings arrangement."},
      {from:"📘 The R800 That Shrank",to:"📘 The US$80 That Lost Purchasing Power"},
      {from:"Myah has R800 in a savings account. She put it there eight months ago, after her water business stabilized. She has not touched it. She checks the balance: R812. R12 interest.",to:"Myah has US$80 in a savings account in this illustrative example. She put it there eight months ago and has not touched it. She checks the balance: US$81.20. The number is slightly higher."},
      {from:"She shows her mother. \"Eight months. R12. That is R1.50 a month.\"",to:"She shows her mother. \"Eight months. US$1.20 earned. The balance grew — but only a little.\""},
      {from:"Myah does not understand. Her mother pulls out an old receipt from a drawer. \"This is what bread cost when you were born. R4.50. Now it is R14. The R800 you saved — it is still R800. But what it can buy is less. Every year, a little less. That is inflation. It does not break down your door. It just quietly takes your money's ability to do things. Saving protects the number. It does not protect the value.\"",to:"Myah does not understand. Her mother explains: \"Prices can rise over time. If the return on your savings is lower than inflation, the balance may grow while its purchasing power falls. Saving and investing therefore do different jobs. Savings prioritise access and stability; investing accepts more risk in pursuit of long-term growth.\""},
      {from:"Myah stares at the receipt. R4.50. She cannot remember bread ever costing R4.50. She looks at her bank balance. R812. The number is growing — R1.50 a month. But what it can buy is shrinking — faster than R1.50 a month.",to:"Myah looks at the balance again. The number rose, but she now understands that the useful question is what the money can buy when she needs it."},
      {from:"If inflation is 6% per year and your savings earn 2% interest, are you gaining or losing purchasing power? By how much per year? If your R800 sits in savings for 5 years at 2% interest while inflation is 6%, what can it buy then that it can buy now?",to:"In a hypothetical example where inflation is 6% per year and savings earn 2%, are you gaining or losing purchasing power? By roughly how much per year? Use US$80 as the starting amount for the calculation. These rates are for maths practice, not current Zimbabwe rates."},
      {from:"Key idea: Myah's R800 is safe. The bank will not lose it. No one will steal it. But safety is not the same as growth. While her money sits in savings earning R1.50 a month, the price of everything she needs — bread, transport, airtime — is rising faster. She is not being robbed by a thief. She is being eroded by time. Saving protects the number. Investing protects the value. They are different tools for different purposes.",to:"Key idea: saving and investing solve different problems. A savings account can prioritise access and lower risk, but returns may not keep pace with inflation. Investing offers higher growth potential but also the possibility of loss. Neither tool is automatically 'better.' The right choice depends on purpose, time horizon, liquidity needs and risk."},
      {from:"Question 2: If you had R1,000 and a goal to use it in 6 months, would you save or invest? Why? If the goal was 10 years away, would your answer change? What does the difference reveal about how time horizon determines strategy?",to:"Question 2: If you had US$100 for a goal six months away, would you save or invest? Why? If the same goal were ten years away, would your answer change? Explain how time horizon affects strategy."},
      {from:"Find out the current interest rate on a savings account at a South African bank. Find out the current inflation rate. Compare them. If someone saved R1,000 for a year, would they gain or lose purchasing power? By how much? Write down what you find.",to:"Research one current Zimbabwe savings product from a regulated provider and find the latest published inflation figure from a credible source. Record the date of both figures. Compare them, but do not assume one product or one month's inflation represents the future."},
    ],
    tableTextReplacements: [
      {from:"stokvel",to:"mukando or savings group"},
      {from:"Stokvel",to:"Mukando or savings group"},
    ],
  },
  "g10-t2-l18-018": {
    textReplacements: [
      {from:"📘 Themba's R2,000 Mistake — Revisited With New Eyes",to:"📘 Themba's US$200 Mistake — Revisited With New Eyes"},
      {from:"\"Last year I told you about losing R2,000 on an online business idea. I said I learned about risk. But I did not tell you the whole story.\"",to:"\"Last year I told you about losing US$200 on an online business idea in this illustrative story. I said I learned about risk. But I did not tell you the whole story.\""},
      {from:"\"I did not just lose R2,000. I borrowed R1,000 of it from my grandmother. She gave it to me because she believed in me. When the business failed, I could not pay her back for six months. Six months of her looking at me with disappointment she was too kind to say out loud. Six months of me avoiding her house because I could not face her.\"",to:"\"I did not just lose US$200. I had borrowed US$100 of it from my grandmother. When the business failed, I could not repay her for six months. The financial loss damaged trust too.\""},
      {from:"\"The R2,000 loss was bad. The shame was worse. And I did not factor the shame into my risk calculation. I only thought about the money. I did not think about what it would feel like to lose money that was not mine. What it would do to the person who gave it to me. What it would do to our relationship.\"",to:"\"The US$200 loss was bad, but the relationship cost was worse. I had calculated financial risk and ignored human risk — especially because part of the money was not mine.\""},
      {from:"\"That risk is not just about numbers. It is about what you can afford to lose — not just financially, but emotionally, relationally, psychologically. I could not afford to lose R2,000. But more than that, I could not afford to lose my grandmother's trust. I lost both because I only calculated the financial risk. I did not calculate the human risk. Now I do. Before I invest in anything, I ask: If this goes to zero — not just the money, but everything attached to it — can I survive that? If the answer is no, I do not invest. No matter how good the return looks.\"",to:"\"Risk is not only the amount on the screen. I now ask: if this goes badly, what else is attached — debt, trust, essential money, time or reputation? If the downside would damage something I cannot afford to lose, the position is too large or the funding source is wrong.\""},
      {from:"If you invested R500 and it dropped to R250, how would you feel? ☐ I would panic and sell immediately ☐ I would be uncomfortable but hold on ☐ I would see it as a buying opportunity ☐ I do not know — I have never been tested",to:"If an illustrative US$50 investment fell to US$25, how would you feel? ☐ I would panic and sell immediately ☐ I would be uncomfortable but review my plan before acting ☐ I might consider adding only if the original case still holds and I can afford the risk ☐ I do not know — I have never been tested"},
    ],
  },
  "g10-t2-l19-019": {
    textReplacements: [
      {from:"\"Not money. Time. Knowledge. I have been teaching the younger women at the stokvel. Not just how to save — they know that. How to invest. How to think about risk. How to read a payslip. How to check a credit score. The things I learned too late. I am giving them what I did not have: the knowledge, early enough to use it.\"",to:"\"Not money. Time. Knowledge. I have been teaching younger women after their mukando meeting. Not just how to save — they know that. We talk about investing, risk, payslips and how to check a credit record. I am giving them knowledge early enough to use it.\""},
      {from:"She pulls out a piece of paper. On it, she has written names. \"Thirteen women. They meet with me every Saturday, after the stokvel meeting. I teach them for an hour. They teach each other. Some of them have opened tax-free savings accounts. Two of them have started small businesses. One of them — my neighbour's daughter, Palesa — she is 19. She has already started a retirement annuity. Nineteen! When I was 19, I did not know what retirement was.\"",to:"She pulls out a piece of paper. On it, she has written names. \"Thirteen women. They meet with me every Saturday after the mukando meeting. I teach for an hour, then they teach one another. Some have opened formal savings or investment accounts with regulated providers. Two have started small businesses. One has already begun a long-term retirement saving habit. The exact product matters less than starting with understanding.\""},
      {from:"Example: If you invest R1,000 at 8%, it will double to R2,000 in about 9 years. In another 9 years, it will double again to R4,000. In 36 years (4 doubles), it becomes about R16,000.",to:"Hypothetical maths example: if US$100 grows at a constant 8% annually, the Rule of 72 suggests a doubling time of about 9 years. Four approximate doublings would turn US$100 into roughly US$1,600. Real returns are not constant or guaranteed."},
      {from:"Example: Save R1,000 at 10% compound interest for 3 years.",to:"Hypothetical example: compound US$100 at 10% per year for 3 years."},
      {from:"With simple interest, you would have R1,300 after 3 years. Compound interest gave you R1,331 — an extra R31. Over longer periods, the difference is enormous.",to:"With simple interest in this example, you would have US$130 after 3 years. Compound growth gives US$133.10 — an extra US$3.10. Over long periods, the gap can become much larger."},
      {from:"If you invest R1,000 at 8%, about how much will it be worth in 36 years (doubles every 9 years = 4 doubles)? R _______",to:"Using the Rule of 72 approximation, if US$100 grows at 8%, about how much would four doublings produce? US$ _______"},
      {from:"Using the start-age table above: If you start saving R500/month at age 20, about how much will you have at retirement? R _______",to:"Using the illustrative start-age table above, what is the lesson about starting earlier even when the monthly contribution is small? Do not treat the displayed growth rate as guaranteed."},
      {from:"Key idea: Gogo Maria learned about compound interest too late to use it for money. But she found another currency: people. Every woman she teaches becomes a teacher. Every teacher reaches more women. That is compounding — not in rands, but in lives changed. The mathematics is the same. The currency is different. You do not need money to start compounding. You need something to invest — knowledge, time, skill — and the patience to let it grow.",to:"Key idea: Gogo Maria learned about compounding late, but she recognised the pattern beyond money. Knowledge can also spread through repeated teaching. Financial compounding is mathematical; social learning is not literally the same formula, but the analogy is useful: small repeated contributions can accumulate into something much larger."},
      {from:"Question 1: Using the Rule of 72, how long does it take money to double at 9%? Show your calculation. If you invest R100 at age 16 at 9%, about how many times will it double by age 70? What will it be worth?",to:"Question 1: Using the Rule of 72, about how long does money take to double at a hypothetical 9% return? If US$10 compounded at that constant rate from age 16 to 70, estimate the number of doublings and final amount. State clearly that the return is hypothetical."},
    ],
    tableReplacements: [
      {
        cellIncludes:"R1,100",
        rows:[
          ["Year","Start","Interest (10%)","End"],
          ["1","US$100.00","US$10.00","US$110.00"],
          ["2","US$110.00","US$11.00","US$121.00"],
          ["3","US$121.00","US$12.10","US$133.10"],
        ],
      },
      {
        cellIncludes:"R270,000",
        rows:[
          ["Start Age","Illustrative Monthly Contribution","Years","Total Contributed","Illustrative Growth at 8%"],
          ["20","US$50","45","US$27,000","Approx. US$230,000"],
          ["30","US$50","35","US$21,000","Approx. US$110,000"],
          ["40","US$50","25","US$15,000","Approx. US$47,500"],
          ["50","US$50","15","US$9,000","Approx. US$17,000"],
        ],
      },
    ],
  },
  "g10-t2-l21-021": {
    textReplacements: [
      {from:"Here’s the tension: starting small feels pointless. One sewing machine. One R100 investment. One skill learned. It feels like nothing. It feels like it will never add up to anything. That feeling — the feeling of pointlessness — is what stops most people. They cannot see the factory in the sewing machine. The strategist sees what others cannot: the compound curve, the long arc, the invisible growth that happens underground before anything breaks the surface.",to:"Here’s the tension: starting small can feel pointless. One sewing machine. One US$10 investment in this illustration. One skill learned. It feels too small to matter. But asset building often begins with a productive tool or capability that can create the next increment of value. The strategist asks what the first small asset makes possible next."},
    ],
  },
  "g10-t2-l22-022": {
    textReplacements: [
      {from:"A local supermarket chain wants to stock their produce. Mangoes. Avocados. Herbs. All of it. They want consistent supply, professional packaging, delivery to their distribution centre. The contract would triple their revenue. But it requires investment — R8,000 for packaging equipment, a delivery vehicle rental, and certification. The cooperative has R4,800 in savings.",to:"A supermarket wants to stock their produce. Mangoes, avocados, herbs. It wants consistent supply, professional packaging and reliable delivery. In this illustrative example, meeting the requirements needs US$800 for packaging equipment, transport setup and compliance costs. The cooperative has US$480 saved."},
      {from:"They have three options. Option one: take a loan. Borrow the R3,200 they need. Option two: bring in two new members who have capital to contribute. New members mean new equity. New equity means dilution — the six current members would own less of a bigger pie. Option three: say no to the supermarket. Stay small. Keep doing what they are doing. Risk that someone else says yes and takes the opportunity forever.",to:"They have three options. One: borrow the US$320 gap, after checking total cost and affordability. Two: admit new members who bring capital, which changes ownership and decision rights. Three: decline or renegotiate the opportunity and remain smaller for now. Each option carries a different risk."},
    ],
  },
  "g10-t2-l23-023": {
    title:"DEBT — PURPOSE, COST & RISK",
    textReplacements: [
      {from:"\"I want to tell you about two loans I took,\" she says. \"One nearly destroyed me. The other built everything I have. They were the same amount. R20,000. The difference was what I did with the money.\"",to:"\"I want to tell you about two loans I took,\" she says. \"They were the same illustrative amount — US$2,000 — but they served very different purposes and created very different risks.\""},
      {from:"She tells the first story. Five years ago. She borrowed R20,000 to buy a car. A beautiful car. Leather seats. She felt successful driving it. The repayments were R2,100 a month for five years. Total cost: R126,000. For a R20,000 loan. The car is now worth about R35,000. It did not generate a single rand of income. It was a liability from day one. She is still paying it off.",to:"She tells the first story. She borrowed US$2,000 for a vehicle mainly for personal use. The repayments and fees stretched her budget, while the vehicle lost value and did not generate income. The lesson was not that every car is 'bad debt'; it was that the borrowing cost and purpose did not fit her cash flow."},
      {from:"Then the second story. Three years ago. She borrowed R20,000 to buy industrial ovens. The repayments were the same. R2,100 a month. But the ovens let her cater for twice as many events. They generated R6,000 a month in new income. They paid for themselves in four months. Everything after that was profit. The ovens are still working. Still earning. That debt bought her an asset. An asset that put money in her pocket every month.",to:"Then the second story. She borrowed the same US$2,000 for industrial ovens. The ovens increased productive capacity and generated additional cash flow. That did not make the debt automatically safe — demand could have failed — but she had a clearer repayment case because the asset could help produce income."},
      {from:"\"Same amount. Same interest rate. Same bank. One debt nearly destroyed me. The other built my business. The difference was not the debt. The difference was what the debt bought. Good debt buys you an asset. Bad debt buys you a feeling. Learn the difference before you borrow a single rand.\"",to:"\"Same borrowed amount, very different use. Debt is not automatically good because it buys an asset or automatically bad because it buys consumption. Ask: what is the total cost, what cash flow will repay it, what happens if the plan fails, and can I still meet essential needs?\""},
      {from:"Key idea: Mrs. Khumalo's two loans were identical on paper. R20,000. Same bank. Same interest rate. The difference was what the money bought. The car bought a feeling. The ovens bought income. The strategist does not ask \"Can I afford the repayments?\" The strategist asks \"Does this debt buy me an asset or a liability?\" If the answer is liability, the repayments are irrelevant. You cannot afford a liability. No one can.",to:"Key idea: loan purpose matters, but purpose is not enough. Productive debt can still fail and consumption debt can sometimes be necessary. A better test asks about total borrowing cost, affordability, repayment source, downside risk, lender legitimacy and what the borrower gives up to make the payments."},
      {from:"Your Next Step: If you had to borrow R5,000 tomorrow, what would you use it for? Would that purchase put money in your pocket — or take it out? Be honest. The bank will not ask this question. You must.",to:"Your Next Step: if you were considering an illustrative US$500 loan, what would it fund? What is the repayment source? What happens if your income falls? What information would you need from the lender before deciding?"},
      {from:"Question 2: Mrs. Khumalo's car loan: R20,000 borrowed, total repayment R126,000 over five years. Was the problem the interest rate, or was the problem what she did with the money? If she had bought the ovens first and the car second, would the car still have been bad debt? Why or why not?",to:"Question 2: compare borrowing for a personal-use vehicle with borrowing for productive equipment. Why is 'what the debt buys' important but insufficient? Include affordability, total cost, risk and repayment source."},
      {from:"If you cannot ask anyone: Research the total cost of a R10,000 loan at 20% interest over 3 years. How much do you actually pay back? Write down the number. Let it sink in.",to:"If you cannot ask anyone: find a current loan illustration from a legitimate Zimbabwe lender. Record the principal, interest rate, fees, repayment period and total amount repayable. Do not apply for the loan; use the disclosure for learning."},
    ],
    tableTextReplacements: [
      {from:"Borrowing R5,000 for a laptop to do freelance work",to:"Borrowing US$500 for a laptop used for paid freelance work"},
      {from:"Borrowing R3,000 for a new phone when your old one works",to:"Borrowing US$300 for a new phone when your current one works"},
      {from:"Borrowing R20,000 for a car to use for Uber",to:"Borrowing US$2,000 toward a vehicle used for paid transport work"},
      {from:"Borrowing R1,000 for a friend's birthday party",to:"Borrowing US$100 for a social event"},
      {from:"Borrowing R10,000 for tools to start a repair business",to:"Borrowing US$1,000 for tools for a tested repair business"},
    ],
  },
  "g10-t2-l24-024": {
    title:"MANAGING DEBT — WHY THE MINIMUM CAN COST MORE",
    textReplacements: [
      {from:"📘 The R85 That Kept Sipho Trapped",to:"📘 The US$8.50 Minimum That Moved Too Slowly"},
      {from:"Sipho has a store account. He bought a phone on credit — R3,000, payable over 24 months. The minimum payment is R85 per month. R85 feels small. Manageable. Almost nothing.",to:"Sipho has a store account in this illustrative example. He bought a phone on credit for US$300. The minimum payment shown on the statement is US$8.50 per month. It feels small and manageable."},
      {from:"He has been paying R85 for eight months. He checked his balance last week. After eight payments totaling R680, he still owes R2,540. He has paid R680 — and only R460 has gone toward the phone. R220 has gone to interest.",to:"After eight US$8.50 payments, he has paid US$68 in total, but the balance has fallen much less because part of each payment went to finance charges. He finally reads the statement instead of judging the debt by the monthly payment alone."},
      {from:"He brought the statement to Myah at Emmanuel's spaza shop. \"I have paid for eight months. I still owe almost the whole thing. How is that possible?\"",to:"He brings the statement to Myah at Emmanuel's tuckshop. \"I have paid for eight months. Why has the balance fallen so slowly?\""},
      {from:"Myah studied the statement. Interest rate: 22% per year. Minimum payment: R85. If Sipho continues paying R85, it will take him 44 months — nearly four years — to pay off a R3,000 phone. Total cost: about R3,740. The phone will be worth maybe R800 by then.",to:"Myah studies the illustration. The rate, fees and minimum-payment rule mean a small payment can stretch the repayment period. The exact result depends on the contract. The lesson is to read the annual rate, fees, payment schedule and total amount repayable — not only the minimum."},
      {from:"\"Pay more. Even R50 more makes a difference. At R135 per month, you pay it off in about 28 months instead of 44. You save over R500 in interest. At R200 per month, you pay it off in 17 months. You save over R900. The more you pay above the minimum, the faster you are free — and the less the freedom costs.\"",to:"\"If your agreement allows extra payments without a penalty, paying more can reduce interest and time. But first check the contract. If you cannot afford more, the answer is not shame. It may be budgeting, contacting the lender early, restructuring where legitimate, increasing income or prioritising the most expensive debt.\""},
      {from:"Sipho increased his payment to R150 starting that month. He will be free of the phone debt in 24 months instead of 44. He will save R470 in interest.",to:"Sipho checks the agreement and chooses a larger payment he can sustain. The important change is that he now knows the trade-off between monthly payment, repayment time and total cost."},
      {from:"R1,000 debt at 2% monthly interest, R50 minimum payment:",to:"Illustrative US$100 debt at 2% monthly interest with a US$5 payment:"},
      {from:"At this rate, it takes 23 months to repay. Total interest: R287. After three payments totaling R150, only R91.81 has gone to principal. The rest is interest.",to:"This simplified illustration shows why early payments can contain both principal and interest. Use the table to calculate how the balance changes; real agreements may also include fees."},
      {from:"You owe R2,000 on a store card. Interest rate: 18% per year (1.5% per month). Minimum payment: R60 per month.",to:"For maths practice, imagine a US$200 balance at a hypothetical 18% annual rate (1.5% per month). This is not a current Zimbabwe product quote."},
      {from:"How much do you save by paying R150 instead of R60? R _______ How much sooner are you free? _______ months",to:"Using the illustrative table, compare the highest and lowest monthly payments. How much interest and time differ?"},
      {from:"Here’s the tension: sometimes the minimum payment is all you can afford. When every rand is spoken for, when survival is the priority, paying more than the minimum is not a choice — it is a luxury. The advice to \"pay more than the minimum\" assumes you have more to pay. Not everyone does. If you cannot pay more, do not blame yourself. But do not pretend the minimum is enough either. The minimum keeps you alive. It does not set you free. The gap between surviving and freedom is what you must work to close — not through shame, but through strategy.",to:"Here’s the tension: sometimes the contractual minimum is all a household can afford. Advice to pay extra assumes there is extra money. If there is not, the strategy shifts to understanding the agreement, preventing new expensive debt, contacting the lender before default, protecting essential needs and looking for legitimate ways to improve cash flow."},
      {from:"Your Next Step: If you were advising Sipho — and he genuinely could not afford more than R85 — what would you tell him to do? What options does someone have when they cannot pay more than the minimum?",to:"Your Next Step: if Sipho genuinely cannot afford more than the contractual minimum, what responsible options should he investigate before missing payments?"},
      {from:"Question 1: Why is paying only the minimum payment dangerous? Use Sipho's numbers to explain: R3,000 at 22%, paying R85/month.",to:"Question 1: why can a small minimum payment make debt expensive over time? Explain using principal, interest, fees and repayment period rather than memorising one product example."},
      {from:"Question 2: If Sipho genuinely cannot afford more than R85 per month, what should he do? List at least two strategies beyond \"pay more.\" Think: income, expenses, negotiation, refinancing, prioritization.",to:"Question 2: if Sipho cannot afford more than the minimum, list at least two responsible strategies beyond 'pay more.' Consider income, expenses, lender communication, legitimate restructuring and debt prioritisation."},
      {from:"If you have no debt: Research the interest rate on a typical store card in South Africa. Calculate the total cost of a R2,000 purchase if you pay only the minimum.",to:"If you have no debt: find a current Zimbabwe credit example from a legitimate provider. Record the rate, fees, minimum-payment rule and total amount repayable. Do not apply for credit for this exercise."},
    ],
    tableReplacements: [
      {
        cellIncludes:"R970",
        rows:[
          ["Month","Balance","Interest Added (2%)","Payment","New Balance"],
          ["1","US$100.00","US$2.00","US$5.00","US$97.00"],
          ["2","US$97.00","US$1.94","US$5.00","US$93.94"],
          ["3","US$93.94","US$1.88","US$5.00","US$90.82"],
        ],
      },
      {
        cellIncludes:"Minimum + R40",
        rows:[
          ["Payment Strategy","Illustrative Monthly Payment","Effect"],
          ["Minimum only","US$6","Longest repayment and highest interest of these examples"],
          ["Minimum + US$4","US$10","Faster repayment and lower interest"],
          ["Minimum + US$9","US$15","Fastest repayment and lowest interest of these examples"],
        ],
      },
    ],
    tableTextReplacements: [
      {from:"Even R10 extra saves interest and time",to:"An affordable extra payment can reduce interest and time if the agreement permits it"},
    ],
  },
  "g10-t2-l25-025": {
    title:"CREDIT RECORDS — THE FILE LENDERS MAY READ",
    textReplacements: [
      {from:"Credit Score Plan",to:"Credit Record Plan"},
      {from:"📘 Credit Score Ranges",to:"📘 Credit Records and Lender Assessment"},
      {from:"📘 What Affects Your Credit Score",to:"📘 What Can Affect Your Credit Record"},
      {from:"If you cannot ask anyone: Research how to check your credit record in South Africa. Write down the steps. One day you will need them.",to:"If you cannot ask anyone: research Zimbabwe's Central Credit Registry through the Reserve Bank of Zimbabwe. Write down what a credit report or record is used for and where consumers can find current official guidance."},
      {from:"| Date | | | Lesson | Lesson 25 — Credit Score Plan | | Experiment/Observation | I learned how credit records work and designed a plan to build one. | | Result | | | Learning | | | Next Action | |",to:"| Date | | | Lesson | Lesson 25 — Credit Record Plan | | Experiment/Observation | I learned how credit records and lender screening work and designed a plan for responsible borrowing behaviour. | | Result | | | Learning | | | Next Action | |"},
      {from:"credit scores",to:"credit records"},
      {from:"Credit scores",to:"Credit records"},
      {from:"credit score",to:"credit record"},
      {from:"Credit score",to:"Credit record"},
      {from:"If you cannot ask anyone: Research how to check your credit record in South Africa. Write down the steps. One day you will need them.",to:"If you cannot ask anyone: research Zimbabwe's Central Credit Registry through the Reserve Bank of Zimbabwe. Write down what a credit report or record is used for and where consumers can find current official guidance."},
      {from:"| Date | | | Lesson | Lesson 25 — Credit Record Plan | | Experiment/Observation | I learned how credit records work and designed a plan to build one. | | Result | | | Learning | | | Next Action | |",to:"| Date | | | Lesson | Lesson 25 — Credit Record Plan | | Experiment/Observation | I learned how credit records and lender screening work and designed a plan for responsible borrowing behaviour. | | Result | | | Learning | | | Next Action | |"},
      {from:"Last month, he applied for a small car loan — R60,000. The bank said no.",to:"Last month, he applied for a small vehicle loan in an illustrative example. The lender said no after reviewing affordability and credit information."},
      {from:"If you cannot ask anyone: Research how to check your credit score in South Africa. Write down the steps. One day you will need them.",to:"If you cannot ask anyone: research Zimbabwe's Central Credit Registry through the Reserve Bank of Zimbabwe. Write down what a credit report/record is used for and where a consumer can find current official guidance."},
    ],
    tableTextReplacements: [
      {from:"credit scores",to:"credit records"},
      {from:"Credit scores",to:"Credit records"},
      {from:"credit score",to:"credit record"},
      {from:"Credit score",to:"Credit record"},
    ],
  },
  "g10-t2-l26-026": {
    title:"INVESTMENT VEHICLES — MATCHING THE TOOL TO THE GOAL",
    textReplacements: [
      {from:"Identify different investment vehicles available in South Africa.",to:"Identify broad saving and investment vehicle categories relevant to Zimbabwe, and explain why current provider availability must be verified."},
      {from:"\"Five vehicles. Each one has a job. The savings account is not trying to grow — it is my buffer. The TFSA is my long-term engine. The retail bonds are for a specific goal — a laptop upgrade in five years. The unit trust is for wealth building. The stokvel is community, not just money. The key is not picking the 'best' vehicle. The key is matching the vehicle to the goal. A savings account is a terrible place for retirement money. An ETF is a terrible place for emergency funds. The vehicle must fit the purpose.\"",to:"\"Different vehicles have different jobs. Emergency savings prioritise access. A fixed deposit trades access for a known term. A collective investment scheme or listed security may offer growth potential but can lose value. A mukando can support saving discipline but depends on the group's rules and trust. The goal is not to pick one 'best' vehicle. It is to match purpose, time horizon, liquidity, fees and risk.\""},
      {from:"📘 Investment Vehicles in South Africa",to:"📘 Saving and Investment Vehicle Categories"},
      {from:"If you had R1,000 to invest today, what would you do with it — and why? What is the PURPOSE of that money? Have you matched the vehicle to the purpose, or are you just chasing returns?",to:"If you had an illustrative US$100 available, what job would the money need to do first? Emergency buffer, short-term goal or long-term growth? Only after defining the job should you compare vehicles."},
      {from:"If you had R5,000 to allocate across different vehicles, how would you divide it? Why?",to:"If you had an illustrative US$500 to allocate across different purposes, how would you divide it? Explain the role of each allocation."},
      {from:"Question 1: Name three investment vehicles available in South Africa. For each, state: risk level, minimum investment, and best use.",to:"Question 1: name three saving or investment vehicle categories relevant to Zimbabwe. For each, state the main purpose, risk, liquidity and what current information must be checked before using a real provider."},
      {from:"Research one investment vehicle you did not know about before this lesson. Find out: minimum investment, expected returns, risk level, and how to access it in South Africa. Write down what you learn.",to:"Research one saving or investment product offered through a regulated Zimbabwe provider or market participant. Record the provider, regulator where applicable, minimum amount, fees, liquidity and stated risk. Record the date because product terms can change."},
    ],
    tableReplacements: [
      {
        cellIncludes:"TFSA (ETF)",
        rows:[
          ["Vehicle","Illustrative Amount","Purpose","Time Horizon","Main Risk / Constraint"],
          ["Savings account","US$300","Emergency buffer","Immediate","Return may lag inflation"],
          ["Fixed deposit","US$100","Defined medium-term goal","Fixed term","Limited access before maturity"],
          ["Collective investment scheme","US$250","Long-term growth","5+ years","Market and fee risk"],
          ["Listed securities","US$150","Long-term growth / ownership","Long term","Prices can fall; diversification matters"],
          ["Mukando / savings group","US$20 per cycle","Saving discipline / agreed group goal","Group-defined","Trust and group-rule risk"],
        ],
      },
      {
        cellIncludes:"Retail bonds",
        rows:[
          ["Vehicle Category","What It Is","Typical Risk Pattern","Best Use"],
          ["Savings account","Deposit with a regulated bank","Lower market risk; inflation and institution terms still matter","Emergency and short-term needs"],
          ["Fixed deposit","Deposit locked for an agreed term","Lower market volatility but lower liquidity","Known medium-term goals"],
          ["Collective investment scheme","Pooled investments managed under a fund structure","Market and fee risk","Diversified long-term investing"],
          ["Listed shares / securities","Ownership or exposure traded on a securities market","Market and company risk","Long-term growth where appropriate"],
          ["Mukando / savings group","Community saving arrangement under agreed rules","Trust, governance and liquidity depend on the group","Saving discipline and shared goals"],
        ],
      },
      {
        cellIncludes:"Emergency fund (R3,000)",
        rows:[
          ["Goal","Time Horizon","Vehicle Features to Prioritise","Why?"],
          ["Emergency fund","Immediate","Liquidity, capital stability, low fees","Money must be accessible"],
          ["Education cost in 3 years","3 years","Known term, controlled risk, appropriate liquidity","Short horizon limits risk capacity"],
          ["Retirement / long-term wealth","Decades","Diversification, fees, regulated access, growth potential","Long horizon can tolerate more variability"],
          ["Large purchase in 8 years","8 years","Balanced growth, diversification and liquidity plan","Goal has time but still a fixed date"],
        ],
      },
    ],
  },
  "g10-t2-l27-027": {
    title:"FUNDS, LISTED SECURITIES & FEES — TUMELO'S COMPARISON",
    textReplacements: [
      {from:"Distinguish between ETFs, unit trusts, and retail bonds.",to:"Distinguish between pooled funds, listed securities and lower-volatility saving options, with attention to fees and regulation."},
      {from:"Tumelo is 25. He started investing at 18 — R200 a month into a unit trust his bank recommended. He was proud of himself. He was building wealth. He was doing what responsible adults do.",to:"Tumelo is 25. In this illustrative story, he started investing US$20 a month at 18 into a managed fund. He was proud that he had started early."},
      {from:"The unit trust had a Total Expense Ratio of 2.5%. That means for every R1,000 he invested, R25 went to fees — every year, regardless of performance. Over seven years, he had paid nearly R3,000 in fees. His returns after fees were barely beating inflation.",to:"The fund had an illustrative annual expense ratio of 2.5%. That means fees reduce returns whether the market rises or falls. Tumelo realises that a small annual percentage can compound into a large difference over many years."},
      {from:"He switched. He moved his money to an ETF tracking the same market index. The TER was 0.3%. His annual fees dropped from R625 to R75 per R25,000 invested. Same exposure. Same market. Drastically different cost.",to:"He compares the managed fund with a lower-fee index-tracking structure where such a regulated product is available. The lesson is not that one structure is always better; it is that similar market exposure can carry very different fees, service and tracking choices."},
      {from:"He tells Myah at Mama Rose's kitchen: \"The bank did not tell me about the fees. They told me about the returns. But fees are guaranteed. Returns are not. A 2.5% fee on a fund that earns 8% means you keep 5.5%. That 2.5% compounds against you — just like interest compounds for you. Over 30 years, the difference between a 0.3% fee and a 2.5% fee on R500 a month is hundreds of thousands of rands. Fees are the silent killer of wealth. No one talks about them because they are boring. But boring things compound too.\"",to:"He tells Myah: \"Returns are uncertain, but disclosed fees are costs you can compare before investing. If two products give similar exposure and one charges much more, that difference compounds too. I need to compare fees, risk, liquidity, regulation and what the product actually holds — not only the return headline.\""},
      {from:"📘 Comparing ETFs, Unit Trusts, and Retail Bonds",to:"📘 Comparing Investment Structures and Fees"},
      {from:"Imagine you invest R500 per month for 30 years. Average return: 8% per year.",to:"For a maths illustration, imagine investing US$50 per month for 30 years at an assumed 8% annual return before fees. The return is hypothetical, not promised."},
      {from:"Question 1: What is the difference between an ETF and a unit trust? Which typically has lower fees — and why? What is a retail bond, and who issues it?",to:"Question 1: what is the difference between an exchange-traded fund structure and a managed collective investment scheme? What fees, liquidity, market exposure and provider regulation should you compare?"},
      {from:"Find one financial product — a savings account, a funeral plan, a stokvel, anything — that you or your family uses. Find out: what are the fees? Are they clearly stated, or hidden? Write down what you discover.",to:"Find one financial product your household knows — a savings account, insurance policy, mukando or investment product. What fees or charges apply? Are they clearly stated? Record the source and date."},
    ],
    tableReplacements: [
      {
        cellIncludes:"Retail Bond",
        rows:[
          ["Feature","ETF Structure","Collective Investment Scheme","Fixed Deposit"],
          ["What it is","Basket of securities traded on an exchange where available","Pooled fund managed under an investment mandate","Bank deposit locked for an agreed term"],
          ["Main costs","Trading/platform costs and fund expenses","Management and other disclosed fund fees","Early-access restrictions and product terms"],
          ["Risk","Market risk","Depends on underlying assets","Lower market volatility; institution and inflation risks remain"],
          ["Liquidity","Usually market-dependent","Depends on fund rules","Limited until maturity"],
          ["Best comparison question","What index/assets, total fees and liquidity?","What mandate, assets, fees and track record?","What rate, term, penalties and access rules?"],
        ],
      },
    ],
    tableTextReplacements: [
      {from:"Retail bond",to:"Fixed deposit"},
      {from:"retail bond",to:"fixed deposit"},
    ],
  },
  "g10-t2-l28-028": {
    textReplacements: [
      {from:"\"Year five. The factory was making profit. Not much. R30,000 a year. I had a choice. I could take that R30,000 home. Live better. Buy a car. Or I could reinvest it. Buy more machines. Hire more workers. Grow.\"",to:"\"Year five. In this illustrative example, the factory was making US$3,000 a year in profit. I had a choice: take it all home, or reinvest part of it in machines, people and capacity.\""},
      {from:"He pauses. \"My wife wanted me to take it. My children needed things. My neighbours thought I was crazy — working so hard and driving an old car. But I reinvested. Every rand. For three years. I lived on almost nothing. My family sacrificed. And at the end of year eight, the factory was making R100,000 a year. The R90,000 I had reinvested over three years was now generating an extra R70,000 a year — every year. The reinvestment paid for itself in less than two years. Everything after that was profit.\"",to:"He pauses. \"In the simplified case, I reinvested US$3,000 a year for three years — US$9,000 total. By the end of the period, annual profit had increased by about US$7,000 compared with the earlier base. That did not happen automatically; demand, execution and timing could have gone badly. Reinvestment worked in this story because productive capacity and sales grew together.\""},
      {from:"Myah does the math in her notebook: R90,000 reinvested over 3 years → R70,000 annual increase in profit. Payback period: 1.3 years. After that, R70,000/year forever. That is a 78% annual return on the reinvested money. No bank. No stock market. No investment vehicle offers 78% returns. The highest-return investment Mr. Patel could make was in himself. In his own business. In his own capacity to produce.",to:"Myah does the simplified arithmetic: US$9,000 reinvested over three years and an illustrative US$7,000 annual profit increase implies about 78% of the reinvested amount. She writes a warning next to it: this is one business example, not a guaranteed annual return. Business reinvestment can also fail or lose capital."},
      {from:"Total reinvested over 3 years: R90,000. Annual profit increase: R70,000. Return on reinvestment: 78%.",to:"Illustrative total reinvested over 3 years: US$9,000. Illustrative annual profit increase: US$7,000. Ratio to reinvested amount: about 78%."},
      {from:"Mr. Patel reinvested R90,000 over 3 years. That reinvestment generated an additional R70,000 per year in profit. What was the annual return on his reinvestment?",to:"In the simplified example, US$9,000 was reinvested and the annual profit increase was US$7,000. What percentage is US$7,000 of US$9,000? Why should you not treat that percentage as a guaranteed future return?"},
      {from:"Question 2: If you had R5,000 and had to choose between investing in a unit trust (8% expected return) and investing in a tool that could start a business (uncertain return, but potentially much higher), which would you choose? Why? What factors influence your decision beyond the numbers?",to:"Question 2: if you had an illustrative US$500, compare putting it into a diversified regulated investment versus buying a productive tool for a tested business idea. What factors matter beyond the headline return — diversification, demand, liquidity, skill, concentration risk and time?"},
      {from:"If you cannot ask anyone: Design your own self-investment. If you had to spend R1,000 on something that would increase your future earning capacity, what would it be? Why?",to:"If you cannot ask anyone: design a self-investment. If you had an illustrative US$100 to increase future earning capacity, what would you spend it on, and what evidence suggests it could help?"},
    ],
    tableReplacements: [
      {
        cellIncludes:"R30,000",
        rows:[
          ["Year","Illustrative Profit","Reinvested","Taken Home","Result"],
          ["1","US$3,000","US$3,000","US$0","Bought more tools"],
          ["2","US$4,500","US$3,000","US$1,500","Hired first employee"],
          ["3","US$7,000","US$3,000","US$4,000","Added production capacity"],
          ["4","US$10,000","US$3,000","US$7,000","Business operating at larger scale"],
        ],
      },
    ],
  },
  "g10-t2-l29-029": {
    title:"FINANCIAL PLANNING — ZINHLE'S ONE-PAGE SYSTEM",
    textReplacements: [
      {from:"Zinhle has been offered a full-time job starting next year. She will earn R8,000 a month. She has exactly six months to prepare. She sits down with Myah at the library and pulls out a single piece of paper.",to:"Zinhle has been offered a full-time job starting next year. In this illustrative example she expects about US$800 a month before deductions. She has six months to prepare. She sits down with Myah at the library and pulls out a single piece of paper."},
      {from:"\"The fun budget. R750 feels like a lot — until it is the end of the month and I am tired and I want to buy something I do not need. The fun budget is the first place I overspend. So I put a rule on it: cash only. When the cash is gone, it is gone. No card. No exceptions. Rules protect me from myself.\"",to:"\"My non-essential budget is US$75 in this illustration. That is the first place I overspend. So I set a rule: once the planned amount is used, I stop. The exact method can change, but I need a boundary I can actually follow.\""},
    ],
    tableReplacements: [
      {
        cellIncludes:"TFSA: max out R36,000/year",
        rows:[
          ["Section","Illustrative Detail"],
          ["Goals","Emergency fund: US$1,000 over 12 months. Build a long-term investment habit through a regulated provider. Review retirement/pension options when employment begins."],
          ["Current net worth","US$720 (savings + investments − debt)"],
          ["Monthly budget","Income: US$545. Essentials: US$220. Long-term investing/saving: US$150. Non-essential: US$75. Buffer: US$100."],
          ["Debt strategy","Avoid borrowing that has no clear repayment plan; compare total cost before signing."],
          ["Protection","Emergency fund first; then investigate appropriate regulated insurance as responsibilities grow."],
          ["Tax","Understand PAYE and check current ZIMRA guidance rather than memorising old brackets."],
          ["Retirement","Learn how NSSA, employment-linked pensions and personal long-term saving may fit together where applicable."],
          ["Review","Every 3 months; adjust as life and rules change."],
        ],
      },
    ],
  },
  "g10-t2-l30-030": {
    textReplacements: [
      {from:"Themba is 20. He has recovered from the R2,000 loss. He has four income streams. He has been investing R300 a month into a unit trust for the past year. But he has been doing something that troubles him.",to:"Themba is 20. He has recovered from the earlier US$200 loss in this illustrative story. He has several income streams and has been investing US$30 a month through a diversified fund for the past year."},
      {from:"\"Dollar-cost averaging. I invest R300 on the same day every month. No matter what. Market up? R300 goes in. Market down? R300 goes in. I do not think about it. I do not try to predict. I just execute. When the market is down, my R300 buys more shares. When it is up, it buys fewer. Over time, I pay the average price. Not the best price. Not the worst. The average. And the average, compounded over thirty years, is enough.\"",to:"\"Regular investing means I contribute US$30 on the same day every month in this example. When prices are lower, the same contribution buys more units; when prices are higher, it buys fewer. It removes some timing emotion, but it does not guarantee a profit and it does not make a poor investment good.\""},
      {from:"R300 invested monthly, regardless of share price:",to:"Illustrative US$30 invested monthly, regardless of share price:"},
      {from:"Average cost per share: R47.67 — lower than the average price of R48.75. The strategy works because it removes emotion from the equation.",to:"Illustrative average cost per unit: about US$4.77 compared with an average quoted price of US$4.88. The lesson is about consistent purchasing, not a promise that regular investing will always outperform."},
      {from:"Your Next Step: If you were investing R200 a month and the market dropped 30% in one month, what would you do? Keep investing? Stop? Invest more? Why? What does your answer reveal about your emotional readiness for real investing?",to:"Your Next Step: if you were regularly investing US$20 a month and the market dropped 30%, what would you review before acting? Consider time horizon, emergency cash, diversification, why the asset fell and whether the original plan still fits."},
    ],
    tableReplacements: [
      {
        cellIncludes:"R1,200",
        rows:[
          ["Month","Amount Invested","Illustrative Unit Price","Units Bought"],
          ["Jan","US$30","US$5.00","6"],
          ["Feb","US$30","US$4.00","7.5"],
          ["Mar","US$30","US$6.00","5"],
          ["Apr","US$30","US$4.50","6.67"],
          ["Total","US$120","Avg US$4.88","25.17"],
        ],
      },
    ],
  },
  "g10-t2-l31-031": {
    tableTextReplacements: [
      {from:"cooperative, stokvel, community project",to:"cooperative, mukando / savings group, community project"},
    ],
  },
  "g10-t2-l32-032": {
    textReplacements: [
      {from:"Myah is researching for her personal investment plan. She needs a vehicle for her medium-term goal: R10,000 for a financial literacy certification course in 4 years. She compares:",to:"Myah is researching for her personal investment plan. In this illustrative example, her medium-term goal is US$1,000 for a course in four years. She compares categories and then checks current products from regulated providers:"},
      {from:"She calculates: to reach R10,000 in 4 years, she needs to save R190 per month at 6.5% (fixed deposit) or R175 per month at 8% (retail bond). The retail bond is the better fit — locked, safe, predictable. She will use a TFSA for her longer-term goal.",to:"She does not choose from a textbook rate. She records the date, provider, fees, access rules and current quoted return for each real option she researches. For the classroom plan, she uses conservative scenarios and labels every assumed return as hypothetical."},
    ],
    tableReplacements: [
      {
        cellIncludes:"Retail bond (3yr)",
        rows:[
          ["Option Category","What to Research","Risk / Constraint","Access"],
          ["Savings account","Current interest, fees, currency and provider regulation","Return may lag inflation","Usually high"],
          ["Fixed deposit","Current quoted rate, term, early-access rules","Funds locked; inflation risk","Low until maturity"],
          ["Collective investment scheme","Mandate, underlying assets, fees, licensed manager","Market risk; returns variable","Depends on fund rules"],
          ["Listed securities / ETF structure where available","Market, diversification, broker/platform fees and liquidity","Market volatility; product availability must be verified","Market-dependent"],
        ],
      },
    ],
  },
  "g10-t2-l33-033": {
    textReplacements: [
      {from:"Goal 1 (Medium-term): R10,000 for financial literacy certification (4 years)",to:"Goal 1 (Medium-term): US$1,000 for a skills or certification course (4 years)"},
      {from:"Vehicle: Retail bond (3-year, 8%)",to:"Vehicle category: fixed deposit or other suitable regulated medium-term option after current comparison"},
      {from:"Monthly savings needed: R175",to:"Illustrative monthly contribution target: US$17.50 before updating for current rates and fees"},
      {from:"Failure signal: If I have not saved R5,000 by end of Year 2, I must increase income or extend timeline.",to:"Failure signal: if I have not reached US$500 by the end of Year 2, I must review contribution, income, costs or timeline."},
      {from:"Vehicle: TFSA (ETF, 0.3% fee)",to:"Vehicle category: diversified long-term investment through a regulated provider; exact product and fees to be verified"},
      {from:"Monthly contribution: R200 (starting now, increasing with income)",to:"Illustrative monthly contribution: US$20, reviewed as income changes"},
      {from:"Goal 3 (Short-term): Emergency fund (R3,000)",to:"Goal 3 (Short-term): Emergency fund (US$300 illustrative target)"},
      {from:"Monthly contribution: R100",to:"Illustrative monthly contribution: US$10"},
      {from:"Failure signal: If I have not reached R3,000 in 18 months, I must redirect funds from Goal 1 temporarily.",to:"Failure signal: if I have not reached US$300 in 18 months, I must review priorities and redirect contributions if appropriate."},
    ],
  },
  "g10-t2-l34-034": {
    textReplacements: [
      {from:"Thabo shares his plan: he wants to invest R300/month into a TFSA for a delivery vehicle upgrade in 5 years. Myah studies it.",to:"Thabo shares his plan: in this illustrative example he wants to invest US$30 per month toward a delivery-vehicle upgrade in five years using a diversified regulated investment vehicle appropriate to his risk and time horizon. Myah studies it."},
      {from:"\"Your plan assumes you will earn R300 extra every month. What happens in a bad month — when the bike breaks, when customers are scarce? Where is the buffer?\"",to:"\"Your plan assumes you will always have US$30 available. What happens in a bad month — when the bike breaks or customers are scarce? Where is the buffer?\""},
      {from:"Thabo pauses. He had not built a buffer. He adds one: in months where income drops below R1,500, the investment drops to R100. The R200 difference goes to emergency savings. The plan survives because it flexes.",to:"Thabo pauses. He had not built a buffer. He adds a rule: when income falls below the minimum level needed for essentials and operating costs, the long-term contribution reduces and the difference supports the emergency buffer. The plan survives because it flexes."},
    ],
  },
  "g10-t2-l35-035": {
    textReplacements: [
      {from:"Atlehang presents her family's investment plan — a collective TFSA for the community kitchen's future building. She shows the fee comparison. She shows the failure signals. She shows the review schedule.",to:"Atlehang presents her family's investment plan for the community kitchen's future building. She compares regulated saving and investment categories, fees, access rules and failure signals. She also shows a review schedule because products and conditions can change."},
    ],
  },
  "g10-t2-l36-036": {
    textReplacements: [
      {from:"Lesson 17: Saving vs investing. Her R800 that shrank. Inflation as slow theft. Lesson 18: Risk and return. Themba's R2,000 and the shame he did not calculate. Lesson 19: Compound interest. The Rule of 72. Gogo Maria planting seeds at 73. Lesson 20: Assets and liabilities. Mr. Patel's factory — and what it cost him besides money. Lesson 21: Building assets. The sewing machine that started everything. Lesson 22: Cooperatives. Thandi's growth decision. Choosing which risk to take. Lesson 23: Debt. Mrs. Khumalo's two loans — same amount, different outcomes. Lesson 24: Managing debt. Sipho's minimum payment trap. The amortization table. Lesson 25: Credit scores. Elder Mkhize, invisible to the banks he never owed. Lesson 26: Investment vehicles. Zinhle's portfolio — each vehicle with a job. Lesson 27: Fees. Tumelo's 2.5% that compounded against him. Lesson 28: Reinvestment. Mr. Patel's 78% return on betting on himself. Lesson 29: Financial planning. Zinhle's one-page plan. Lesson 30: Strategies. Themba's dollar-cost averaging. Removing emotion. Lessons 31-35: Her Investment Plan. Built. Tested. Presented.",to:"Lesson 17: saving versus investing and purchasing power. Lesson 18: financial and human risk. Lesson 19: compounding and the Rule of 72 using hypothetical returns. Lesson 20: assets and liabilities. Lesson 21: building an asset base. Lesson 22: cooperative growth and capital choices. Lesson 23: debt purpose, cost and risk. Lesson 24: minimum payments and total borrowing cost. Lesson 25: credit records and lender screening. Lesson 26: matching vehicles to goals. Lesson 27: fees and investment structures. Lesson 28: reinvestment and business risk. Lesson 29: one-page financial planning. Lesson 30: regular investing and emotional discipline. Lessons 31–35: an investment plan researched, tested and presented."},
      {from:"From me, in Grade 10 Date: _____________________",to:"From me, in Form 3 Date: _____________________"},
      {from:"You finished Term 2 of Grade 10.",to:"You completed Form 3 Term 1 — value creation, saving, investing, assets and financial planning."},
    ],
  },
  "g10-t3-l37-037": {
    title:"INTRODUCTION TO SYSTEMS THINKING — THE KOMBI RANK AS A SYSTEM",
    textReplacements:[
      {from:"📘 The Taxi Rank as a System — Myah's Map, Two Years Later",to:"📘 The Kombi Rank as a System — Myah's Map, Seen Differently"},
      {from:"Myah is waiting for a taxi. She has been waiting at this rank since Grade 8. But today, she sees it differently.",to:"Myah is waiting for a kombi. She has known this rank since Form 1. But today, she sees it differently."},
      {from:"She pulls out her notebook — the same one she has kept since Grade 9 — and starts drawing. Taxis arriving and leaving. Queue marshals directing passengers. Vendors selling food and drinks. Commuters rushing, waiting, negotiating. Money changing hands. Information flowing — who is going where, how much, how long.",to:"She pulls out her notebook — the same one she has kept since Form 2 — and starts drawing. Kombis arriving and leaving. Rank marshals directing passengers. Vendors selling food and drinks. Commuters rushing, waiting and negotiating. Money and information flow through the same place."},
      {from:"She draws arrows connecting everything. The taxi rank is not a collection of people and vehicles. It is a system. Each part depends on the others. If one part changes, everything changes.",to:"She draws arrows connecting everything. The kombi rank is not a collection of people and vehicles. It is a system. Each part affects the others. If one important part changes, other parts may change too."},
      {from:"\"The taxi rank. As a system. Look. If the taxis raise their prices, what happens?\"",to:"\"The kombi rank. As a system. Look. If fares rise, what might happen?\""},
      {from:"\"People might take different taxis. Or fewer people travel. Or vendors sell less. Or marshals have less work.\"",to:"\"People might change routes, travel less, spend less with vendors, or adjust how they organise transport.\""},
      {from:"She shows him her diagram. At the centre: money flowing. Arrows from commuters to taxi drivers to taxi owners. Arrows from vendors to suppliers. Arrows from everyone to the spaza shop, the airtime seller, the queue marshal collecting his R2 per taxi. A web. A system.",to:"She shows him her diagram. At the centre: value and money flowing. Arrows from commuters to drivers and operators. Arrows from vendors to suppliers. Arrows to the tuckshop, airtime seller and rank services. A web. A system."},
      {from:"\"I drew this exact map in Grade 9 for my Community Money Map project,\" she says. \"But I was just tracing the money then. Now I am seeing the system. The difference is: if one part breaks — if the taxi owners raise prices, if the vendors disappear, if the marshals stop working — the whole thing shifts. Not just one part. Everything.\"",to:"\"I drew a version of this in Form 2 for my Community Money Map,\" she says. \"Then I was tracing flows. Now I am asking how the parts depend on one another — and what happens when a key part changes.\""},
      {from:"Key idea: A system is not a list. It is a web. The taxi rank is not taxis plus drivers plus passengers. It is the relationships between them — who pays whom, who waits for whom, who depends on whom. Your money is not income plus expenses plus savings. It is the relationships between them — what flows where, what feeds what, what drains what. Seeing the system is the first step. Most people never take it.",to:"Key idea: A system is not a list. It is a web. The kombi rank is not vehicles plus drivers plus passengers. It is the relationships between them — who depends on whom, what flows, where delays happen and what changes when one part moves. Your money works the same way. Seeing the relationships is the first step."},
      {from:"This week, observe one system in action — your family's morning routine, the tuck shop queue, a taxi rank, a spaza shop. Watch for 10 minutes. Write down: What are the parts? What flows between them? What happens when something changes — a person is late, a price changes, something runs out?",to:"This week, observe one system in action — your family's morning routine, a school queue, a kombi rank, a tuckshop or a market. Watch for 10 minutes. What are the parts? What flows between them? What changes when a person is late, a price moves or something runs out?"},
    ],
    tableTextReplacements:[
      {from:"Taxi rank",to:"Kombi rank"},
      {from:"Taxis, drivers, passengers, marshals, vendors",to:"Kombis, drivers, passengers, marshals, vendors"},
    ],
  },
  "g10-t3-l38-038": {
    textReplacements:[
      {from:"Myah is at Emmanuel's spaza shop. The shelves are full. The customers are steady. Everything looks normal. But six months ago, everything nearly collapsed.",to:"Myah is at Emmanuel's tuckshop. The shelves are full. The customers are steady. Everything looks normal. But six months ago, everything nearly collapsed."},
      {from:"Old System: Wholesaler → Spaza shop → Customers (Simple. Reliable. One point of failure.)",to:"Old System: Wholesaler → Tuckshop → Customers (Simple. Efficient. One major point of failure.)"},
      {from:"New System: Supplier A → Spaza shop → Customers Supplier B → Spaza shop → Customers Supplier C → Spaza shop → Customers (More complex. More expensive. But if one fails, the others still work.)",to:"New System: Supplier A → Tuckshop → Customers Supplier B → Tuckshop → Customers Supplier C → Tuckshop → Customers (More complex and sometimes more expensive, but less dependent on one supplier.)"},
    ],
  },
  "g10-t3-l39-039": {
    textReplacements:[
      {from:"Myah is at Mama Rose's kitchen, her notebook open. She has been thinking about systems since the taxi rank diagram. Now she wants to map her own money.",to:"Myah is at Mama Rose's kitchen, her notebook open. She has been thinking about systems since the kombi-rank diagram. Now she wants to map her own money."},
      {from:"She draws her OLD system — the one she had before Grade 9:",to:"She draws her OLD system — the one she had before Form 2:"},
      {from:"Then she draws her NEW system — the one she built after Grade 9, after the grant office, after the water business, after the habit tracker:",to:"Then she draws her NEW system — the one she built through Form 2 after the committee-office lesson, the water test, the Community Money Map and the habit tracker:"},
      {from:"Income (delivery service, water sales) → AUTOMATED transfer: R200 to savings (FIRST, before anything else) → Remaining: budgeted expenses (tracked) → Snacks: R50/week, cash only, when it is gone it is gone → Emergency fund: building slowly from extra income → Investing: TFSA, started this year, R100/month",to:"Income (delivery service, small enterprise work) → planned transfer: US$20 to savings in this illustration → remaining money assigned to tracked expenses → discretionary spending capped at US$5/week → emergency buffer built from extra income → long-term investing through a regulated product only after checking fees, risk, access and provider status"},
    ],
    tableTextReplacements:[
      {from:"R200 transfers to savings automatically on payday",to:"US$20 moves to savings first in this illustrative system"},
    ],
  },
  "g10-t3-l40-040": {
    textReplacements:[
      {from:"She circles the savings arrow. In the old system, savings happened last — after everything else. Whatever was left. Usually nothing. In the new system, savings happens first. R200 moves automatically before she can spend it. That one change — moving savings from last to first — transformed her entire system.",to:"She circles the savings arrow. In the old system, saving happened last. In the new system, an illustrative US$20 is assigned first. The important leverage point is not the amount; it is the order of operations."},
      {from:"She circles another point. The snack budget. R50 a week. Cash only. When it is gone, it is gone. That one rule — cash only — removed the need for willpower. She does not resist snacks. The cash runs out. The system says no for her.",to:"She circles another point. Discretionary spending is capped at an illustrative US$5 a week. Once the amount is used, the system requires a pause. The rule reduces repeated decisions and makes the boundary visible."},
    ],
  },
  "g10-t3-l41-041": {
    title:"THE ZIMBABWE TAX SYSTEM — LEARNING TO READ THE CURRENT RULES",
    textReplacements:[
      {from:"Understand how the progressive tax system works in South Africa.",to:"Understand the basic logic of Zimbabwe PAYE and why current ZIMRA tax tables must be checked rather than memorised."},
      {from:"He moves another piece. \"In South Africa, we have a progressive tax system. That means the more you earn, the higher percentage you pay. But — and this is what most people get wrong — you do NOT pay the higher rate on ALL your income. You only pay it on the portion ABOVE each threshold.\"",to:"He moves another piece. \"Zimbabwe's employee income tax is administered through PAYE by ZIMRA. The tables can change and ZIMRA may publish separate currency tables. The durable lesson is how marginal brackets work: a higher rate applies to the portion of income inside that bracket, not automatically to every dollar you earn.\""},
      {from:"How Tax Works in South Africa",to:"How to Read a Zimbabwe PAYE Table"},
      {from:"Key idea: Tax is not theft. It is the price of civilisation. Every time you pay tax, you are paying for roads, schools, clinics, police, parks. You are paying for the society you live in. But you should also understand the system well enough to pay only what you owe — not a rand more. That is not evasion. That is literacy.",to:"Key idea: tax is a legal obligation that helps finance public functions. Financial literacy means understanding what applies to you, keeping records, checking current official information and paying what the law requires — neither inventing extra obligations nor hiding income."},
      {from:"Here’s the tension: the tax system rewards those who understand it and punishes those who do not. The wealthy have accountants. They know about deductions, tax-free vehicles, legal structures. The working poor have PAYE deducted before they see their money. They pay what the system takes. They do not plan. They do not optimize. The tax system is progressive on paper. The effective rate — after all deductions and strategies — is often lower for the wealthy than for those who earn just enough to cross the threshold. Understanding this is not an excuse for tax evasion. It is a call to learn the rules. The rules exist. Learn them. Use them legally. Pay what you owe. Not a rand more.",to:"Here’s the tension: tax rules can be difficult to understand and they can change. People with professional advice may navigate them more easily than people without it. That is a reason to build source-checking habits, not a reason to evade tax. Learn what applies, use legitimate provisions only when they actually apply to you, and seek qualified help when the situation becomes complex."},
      {from:"Question 2: If you earn R50,000 per year and the threshold is R95,750, do you pay income tax? Why or why not? What does your answer tell you about who the tax system protects most?",to:"Question 2: Why is it risky to copy an old tax threshold from a textbook into a real-life decision? Which official source should you check for the current Zimbabwe PAYE table, and what date should you record when you use it?"},
    ],
    tableReplacements:[
      {
        cellIncludes:"R0 – R95,750",
        rows:[
          ["Illustrative income band","Illustrative marginal rate"],
          ["First US$100","0%"],
          ["Next US$200","10%"],
          ["Amount above US$300","20%"],
        ],
      },
      {
        cellIncludes:"Primary rebate: R17,235",
        rows:[
          ["Concept","What to check in Zimbabwe"],
          ["PAYE","Employee income tax administered by ZIMRA"],
          ["Tax table","Use the latest applicable ZIMRA table and note the currency and effective date"],
          ["Marginal bracket","A rate applying to the portion of income within a stated band"],
          ["Other rules","Only apply deductions, credits or exemptions that current law actually allows"],
        ],
      },
      {
        cellIncludes:"R80,000",
        rows:[
          ["Illustrative taxable income","Calculation using the lesson's fictional table","Illustrative tax"],
          ["US$80","All inside the 0% band","US$0"],
          ["US$200","First US$100 at 0%; next US$100 at 10%","US$10"],
          ["US$400","First US$100 at 0%; next US$200 at 10%; last US$100 at 20%","US$40"],
        ],
      },
    ],
    rangeReplacements:[
      {
        startIncludes:"\"And then there is the rebate.",
        endIncludes:"Understand the system. Then navigate it.\"",
        replacement:[
          {kind:"text",type:"paragraph",text:"Mr. Khumalo points to the date on the page. \"This is the habit I want you to learn: never treat a tax table as timeless. ZIMRA publishes the current tables. Before you calculate a real obligation, check the official source, the effective date and the currency.\""},
          {kind:"text",type:"paragraph",text:"He uses a fictional table to teach the maths: first US$100 at 0%, the next US$200 at 10%, and anything above US$300 at 20%. If taxable income in the exercise is US$400, the calculation is US$0 + US$20 + US$20 = US$40. These are teaching numbers, not Zimbabwe's current tax rates."},
          {kind:"text",type:"reflection",text:"The durable skill is not memorising a rate. It is knowing how to read the current table, calculate by band and verify your answer."},
        ],
      },
      {
        startIncludes:"If you earn R120,000 per year:",
        endIncludes:"Tax payable = R6,305",
        replacement:[
          {kind:"text",type:"section",text:"Illustrative Progressive-Tax Practice"},
          {kind:"text",type:"paragraph",text:"Using the fictional lesson table only, calculate tax on US$250 and US$500. Then explain which parts of the calculation would change if ZIMRA published a new table tomorrow."},
        ],
      },
    ],
  },
  "g10-t3-l42-042": {
    title:"TAX PLANNING — LEGAL, ETHICAL & CURRENT",
    textReplacements:[
      {from:"Tax-Free Savings Accounts",to:"Tax Planning Is a Current-Rules Exercise"},
      {from:"If you were earning R150,000 per year in your first job, what is ONE legal strategy you could use to reduce your taxable income?",to:"Imagine you start earning taxable employment or business income. What is ONE responsible tax-planning habit you should build before looking for any deduction or incentive?"},
      {from:"Here’s the tension: the line between avoidance and evasion can blur. Some strategies are technically legal but morally questionable. Some exploit loopholes that were never intended for ordinary people. The question is not just \"Is this legal?\" The question is also \"Is this right?\" The tax code cannot answer that question. Only your conscience can. Build your wealth. Minimize your tax legally. But do not become the person who exploits every loophole while the roads crumble and the clinics close. Pay what you owe. Not a rand more. But not a rand less either.",to:"Here’s the tension: legal tax planning still requires judgment. A strategy that applied last year may not apply now. A deduction that applies to one taxpayer may not apply to another. The safe principle is simple: keep accurate records, disclose honestly, use only provisions you can support under current law, and get qualified advice when the facts are complex."},
      {from:"Question 2: A tax-free savings account allows you to invest R36,000 per year with no tax on growth. Who benefits most from this incentive — the rich, the poor, or everyone? Defend your answer. If it mainly benefits the rich, is the incentive fair?",to:"Question 2: Why is it dangerous to teach a named tax incentive as permanent? Explain how you would verify whether a deduction, exemption or incentive is available in Zimbabwe today before using it in a plan."},
      {from:"If you cannot ask: Research how to open a TFSA in South Africa. Write down the steps. One day you will need them.",to:"If you cannot ask anyone: use ZIMRA's current official guidance to find one legitimate deduction, exemption or incentive that applies to a clearly defined taxpayer situation. Record the source date and explain who qualifies. Do not assume it applies to you."},
    ],
    tableReplacements:[
      {
        cellIncludes:"Tax-free savings account",
        rows:[
          ["Planning habit","How it helps"],
          ["Keep accurate records","You can support income, expenses and claims with evidence"],
          ["Separate business and personal records","Makes legitimate business expenses easier to identify and verify"],
          ["Check current ZIMRA guidance","Rates, thresholds, deductions and incentives can change"],
          ["Use only provisions that actually apply","A legal provision is not a personal entitlement unless you meet its conditions"],
          ["Seek qualified help when needed","Complex tax, business or cross-border situations may require a registered professional"],
        ],
      },
      {
        cellIncludes:"Maximum per year",
        rows:[
          ["Question before using any tax strategy","Why it matters"],
          ["What rule am I relying on?","Name the current law, ZIMRA guidance or official table"],
          ["Who qualifies?","Check the conditions instead of copying someone else's strategy"],
          ["What evidence is required?","Keep the records the rule expects"],
          ["What is the effective date?","Tax rules change; stale advice can be wrong"],
          ["Do I need professional advice?","Ask when the facts are complex or the amount is material"],
        ],
      },
    ],
    rangeReplacements:[
      {
        startIncludes:"\"The most powerful one for someone your age is the tax-free savings account.",
        endIncludes:"That is playing the game as it was designed.\"",
        replacement:[
          {kind:"text",type:"paragraph",text:"Mr. Khumalo taps the table. \"Do not build your strategy around a product name from another country or an old textbook. Build it around a process: earn honestly, keep records, separate personal and business money, check current ZIMRA guidance, and use a deduction or incentive only when the current rules say you qualify.\""},
          {kind:"text",type:"paragraph",text:"\"The smartest tax strategy at your age is source discipline. Know where the rule comes from. Know the date. Know the conditions. And never confuse reducing tax legally with hiding income or falsifying records.\""},
        ],
      },
    ],
  },
  "g10-t3-l43-043": {
    title:"RETIREMENT — GOGO MARIA'S TABLE & THE POWER OF TIME",
    textReplacements:[
      {from:"Identify basic retirement vehicles available in South Africa.",to:"Identify the main retirement layers relevant in Zimbabwe and explain why product rules must be checked before choosing one."},
      {from:"She pulls out a piece of paper — the same one she has carried for years. It is laminated now. She takes it to every stokvel meeting. Every church group. Every community gathering. She calls it \"The Table.\"",to:"She pulls out a piece of paper — the same one she has carried for years. It is laminated now. She takes it to mukando meetings, church groups and community gatherings. She calls it \"The Table.\""},
      {from:"\"Look at this,\" she says, pointing at the difference between starting at 20 and starting at 30. \"Same R500 a month. Start at 20, you have over R2 million. Start at 30, you have R1.1 million. The difference is not the money you put in. You put in R60,000 more if you start at 20. The difference is the TIME. Those ten extra years of compounding are worth over R1 million. Time is the ingredient you cannot buy. You either have it or you do not. And you —\" she points at Myah \"— you have it. I did not. I learned this at 65. You are learning it at 16. Do not waste it.\"",to:"\"Look at the difference,\" she says. \"In this illustration, the monthly amount is the same — US$20 — but the start date changes. Starting at 20 gives the money ten more years to compound than starting at 30. The exact result depends on the return actually achieved, which is never guaranteed. The lesson is time, not a promised percentage.\""},
      {from:"Myah stares at the numbers. She has seen them before. But something is different now. She is 16. If she starts at 20, she has 45 years of compounding. Forty-five years. She does the math in her head. R500 a month is not possible right now. But R100? R100 a month from age 20 to 65 at 8% — that is still over R450,000. From R36,000 saved. Time does the heavy lifting.",to:"Myah stares at the numbers. She understands that a learner does not need to start a retirement product today to learn the principle. The action now is to understand compounding, build the saving habit, and later choose a suitable regulated retirement or investment arrangement when income and eligibility make that realistic."},
      {from:"Retirement Vehicles in South Africa",to:"Retirement Layers in Zimbabwe"},
      {from:"If you started saving R200 per month for retirement at age 20, what could it grow to by 65? Does that feel possible right now — or impossible? What would need to change to make it possible?",to:"If an adult invested US$20 per month from age 20 to 65 and achieved an illustrative 8% annual return, what does the example show about time? Why must you avoid treating 8% as a guarantee?"},
      {from:"If you save R200 per month starting at age 20, at 8% growth, about how much will you have at 65? (Use the Rule of 72: 72 ÷ 8 = 9 years to double. In 45 years, about 5 doubles.)",to:"Using the lesson's illustrative US$20/month example and an assumed 8% return, compare starting at age 20 with starting at age 30. Then list three reasons real results could differ: fees, changing returns and interrupted contributions."},
      {from:"Starting amount after 45 years of R200/month: about R _______ After 5 doubles: about R _______",to:"Illustrative result if the assumptions held: about US$105,491 by age 65 when starting at 20. This is a maths illustration, not a forecast or guarantee."},
      {from:"Key idea: Gogo Maria's table does not lie. R500 a month from age 20 becomes R2.3 million. The same R500 from age 30 becomes R1.1 million. The difference is not the money. The difference is the time. Time is the ingredient you cannot buy more of. You either start early or you pay for the delay — in rands, in freedom, in options. The math is indifferent to your feelings. It does not care if you are ready. It only cares if you start.",to:"Key idea: Gogo Maria's table is an illustration, not a promise. The durable lesson is that more time can make compounding more powerful. Real returns move, fees matter and contributions can stop. Start by building the habit and learning how regulated retirement and investment options work before committing real money."},
    ],
    tableReplacements:[
      {
        cellIncludes:"Compound growth",
        rows:[
          ["Term","Definition"],
          ["Retirement","The stage when paid work reduces or stops and income must come from other sources"],
          ["NSSA","Zimbabwe's statutory social-security institution, including retirement benefits for qualifying contributors"],
          ["Occupational/private pension","A retirement arrangement linked to employment or a private pension scheme, subject to current rules and regulation"],
          ["Individual pension policy","A personally arranged retirement product offered through an appropriately regulated provider"],
          ["Compound growth","Growth on earlier contributions and prior growth; actual returns are not guaranteed"],
        ],
      },
      {
        cellIncludes:"R270,000",
        rows:[
          ["Start age","Monthly amount","Years to age 65","Total contributed","Illustrative value at 8%"],
          ["20","US$20","45","US$10,800","~US$105,491"],
          ["25","US$20","40","US$9,600","~US$69,820"],
          ["30","US$20","35","US$8,400","~US$45,878"],
          ["35","US$20","30","US$7,200","~US$29,807"],
          ["40","US$20","25","US$6,000","~US$19,021"],
          ["50","US$20","15","US$3,600","~US$6,921"],
        ],
      },
      {
        cellIncludes:"Tax-free savings (TFSA)",
        rows:[
          ["Retirement layer","How it works in principle","What to verify before relying on it"],
          ["NSSA social-security provision","Provides statutory benefits to qualifying contributors","Coverage, contribution record and current qualification rules"],
          ["Employer occupational pension","May be provided through an employer or occupational scheme","Scheme rules, contributions, vesting, fees and regulator status"],
          ["Individual pension arrangement","Personally arranged through a regulated provider","Provider status, fees, access rules, risk and benefit structure"],
          ["Personal long-term saving/investing","Additional assets built outside a pension arrangement","Risk, diversification, liquidity, fees and suitability"],
        ],
      },
    ],
  },
  "g10-t3-l44-044": {
    title:"RETIREMENT LAYERS — WHO BUILDS THE SYSTEM WHEN WORK STOPS?",
    textReplacements:[
      {from:"Retirement arrangements can have tax consequences, but those rules change. Do not copy a South African retirement deduction or an old Zimbabwe rule into a real decision. Check current ZIMRA guidance and the product or scheme rules. If the tax treatment is important to the decision, get qualified advice.",to:"Retirement arrangements can have tax consequences, but those rules change. Do not copy a foreign retirement deduction or an old Zimbabwe rule into a real decision. Check current ZIMRA guidance and the product or scheme rules. If the tax treatment is important to the decision, get qualified advice."},
      {from:"Here’s the tension: the best retirement vehicle is the one you actually use. An RA with great tax benefits is useless if you never open one. A simple TFSA with no tax deduction but easy access might be better if it means you actually start. The perfect vehicle you never use is worse than the imperfect vehicle you contribute to every month. Do not let the search for the best option prevent you from using the good option you have access to right now.",to:"Here’s the tension: accessibility matters, but so do regulation, fees, liquidity, risk and the rules of the arrangement. The easiest product is not automatically suitable, and a sophisticated product is not useful if you do not understand it. Learn the retirement layers, verify providers and rules, and contribute only through arrangements you understand and can sustain."},
      {from:"He points to another worker. \"Mr. Nkosi. He has been here eight years. He also has a pension fund. But he also has a retirement annuity — an RA. He set it up himself. He contributes R300 a month. It reduces his taxable income. The money grows. At retirement, he will have both — the pension from me, and the RA from himself. Two streams. He will not be rich. But he will be secure.\"",to:"He points to another worker. \"Mr. Nkosi has been here eight years. He contributes to the statutory and employment-linked arrangements that apply to him, and he also chose an additional individual pension arrangement through a regulated provider. He is building more than one retirement layer instead of assuming one source will be enough.\""},
      {from:"\"Correct. I have an RA. I contribute every month. I also have a TFSA — for tax-free growth. And I have the business itself — which I will either sell or pass to my children. The employees have structures I build for them. I must build my own. That is the difference between being an employee and being an employer. Employees get structures. Employers must design them. Both have advantages. Both have risks. The key is knowing which one you are — and planning accordingly.\"",to:"\"Correct. As an owner, I must understand which statutory obligations apply to me and my workers, what private pension arrangements I choose, and how the business itself fits into my long-term plan. Being an employer does not remove the need for retirement planning. It makes the design responsibility more visible.\""},
      {from:"Part B: Your Vehicle",to:"Part B: Your Retirement Layers"},
      {from:"Based on your likely situation, which retirement vehicle(s) would you choose? Why?",to:"Based on your likely future situation, which retirement layers would you investigate first — NSSA coverage where applicable, an employer pension, an individual pension arrangement, and/or personal long-term investments? Explain what you would need to verify before choosing."},
      {from:"My vehicle(s): _________________________________",to:"Layers I would investigate: _________________________________"},
      {from:"Part C: The Tax Benefit",to:"Part C: The Current-Rules Check"},
      {from:"If you contribute R500/month to an RA (R6,000/year) and you are in the 18% tax bracket, how much tax do you save per year? R _______",to:"Find the current ZIMRA and provider guidance for one retirement arrangement. Does the current tax law provide any relevant treatment or deduction? Record the date and source. Do not assume a benefit from an old textbook."},
      {from:"The Affirmation: Mr. Patel's workers have pension funds because he set them up. Mr. Patel has an RA because he set it up himself. The employees have structures. The employer must build his own. Neither path is easier. Both require discipline. The employee who ignores their pension fund is no better off than the entrepreneur who never opens an RA. The vehicle matters less than the habit. The habit matters less than the decision to start. The decision to start matters less than the persistence to continue. Retirement is not a product you buy. It is a practice you sustain over decades.",to:"The Affirmation: retirement is not one product. It is a long-term system. Statutory social security, employer pensions, individual pension arrangements and personal long-term assets can play different roles. The exact products and tax treatment can change. What should remain is the habit of contributing, checking fees and rules, and reviewing whether the system still fits your life."},
      {from:"The Paradoxical Reversal: But here is the tension: the best retirement vehicle is the one you actually use. An RA with great tax benefits is useless if you never open one. A simple TFSA with no tax deduction but easy access might be better if it means you actually start. The perfect vehicle you never use is worse than the imperfect vehicle you contribute to every month. Do not let the search for the best option prevent you from using the good option you have access to right now.",to:"The Paradoxical Reversal: accessibility matters, but so do rules, fees, liquidity and protection. The easiest product is not automatically the best one, and the most sophisticated product is not automatically suitable. Learn the layers, verify the provider and rules, and start only with an arrangement you understand."},
      {from:"The Personal Pivot: What is the SIMPLEST retirement vehicle you could access right now — even if it is not the \"best\" one? What is stopping you from starting it this year?",to:"The Personal Pivot: what is one retirement concept you can understand this year even if you are not yet ready or eligible to open a product? What question will you ask an older working person about their retirement system?"},
      {from:"Question 1: What is the difference between a pension fund and a retirement annuity? Which one can you set up yourself?",to:"Question 1: Explain the difference between statutory social-security provision, an employer occupational pension and an individually arranged pension product. Why might one person use more than one layer?"},
      {from:"Question 2: If you are self-employed and have no employer pension, what is your plan for retirement? If your answer is \"I will figure it out later,\" what does Gogo Maria's table say about the cost of that delay?",to:"Question 2: If you are self-employed and have no employer pension, what questions must you answer about statutory obligations, regulated personal pension options and long-term investing before you can say you have a retirement plan?"},
      {from:"Ask a working family member: \"What retirement savings do you have? Pension? RA? How did you choose?\" Listen. Write down what they say. Most people have whatever their employer gave them — and nothing else.",to:"Ask a working family member: \"What retirement arrangements do you have — NSSA, an employer pension, a private pension or other long-term investments? How did you choose?\" Listen without assuming their arrangement is right for you."},
      {from:"If you cannot ask anyone: Research how to open an RA in South Africa. What is the minimum contribution? What are the fees? Write down what you find.",to:"If you cannot ask anyone: use NSSA and IPEC consumer information to map the retirement layers available in Zimbabwe. Pick one private option only if you can verify the provider is appropriately regulated, then record its fees and access rules."},
    ],
    tableReplacements:[
      {
        cellIncludes:"Preservation fund",
        rows:[
          ["Term","Definition"],
          ["NSSA retirement benefit","Statutory retirement benefit for qualifying contributors under current NSSA rules"],
          ["Occupational pension","Employment-linked retirement arrangement governed by its scheme rules"],
          ["Individual pension policy","Personal retirement arrangement through an appropriately regulated provider"],
          ["Personal long-term investments","Additional assets that may support later-life income but are not automatically a pension"],
        ],
      },
      {
        cellIncludes:"Access before retirement",
        rows:[
          ["Feature","NSSA / statutory layer","Employer pension","Individual pension","Personal investments"],
          ["Set up by","Law / statutory system","Employer or occupational scheme","You with a regulated provider","You through suitable regulated channels"],
          ["Contribution rules","Current statutory rules","Scheme rules","Product and current legal rules","Your plan and product rules"],
          ["Access / benefits","Current NSSA rules","Scheme rules","Product rules","Depends on asset and provider"],
          ["Key check","Contribution record and eligibility","Fees, vesting, portability","Fees, provider status, access, risk","Risk, fees, diversification, liquidity"],
        ],
      },
    ],
    rangeReplacements:[
      {
        startIncludes:"The Power of Tax Deductions",
        endIncludes:"The government gave you R5,000 to save for yourself.",
        replacement:[
          {kind:"text",type:"section",text:"Tax Treatment Must Be Checked, Not Assumed"},
          {kind:"text",type:"paragraph",text:"Retirement arrangements can have tax consequences, but those rules change. Do not copy a South African retirement deduction or an old Zimbabwe rule into a real decision. Check current ZIMRA guidance and the product or scheme rules. If the tax treatment is important to the decision, get qualified advice."},
        ],
      },
    ],
  },
  "g10-t3-l45-045": {
    appendBlocks:[
      {kind:"text",type:"paragraph",text:"Zimbabwe check: insurance and pensions are regulated by IPEC. Before relying on an insurer or policy, verify the provider, understand the policy wording, exclusions, excess/deductible, claim process and what evidence a claim requires. Product names and prices change."},
    ],
  },
  "g10-t3-l46-046": {
    title:"TYPES OF INSURANCE — NALEDI AT THE KOMBI RANK",
    textReplacements:[
      {from:"📘 Naledi at the Taxi Rank — The Actuary Who Explained Risk",to:"📘 Naledi at the Kombi Rank — The Actuary Who Explained Risk"},
      {from:"Myah is waiting for a taxi when a young woman sits down next to her.",to:"Myah is waiting for a kombi when a young woman sits down next to her."},
    ],
    tableReplacements:[
      {
        cellIncludes:"Funeral cover",
        rows:[
          ["Term","Definition"],
          ["Life cover","May provide a benefit when an insured person dies, according to the policy terms"],
          ["Property / motor cover","May protect vehicles, homes, equipment or possessions against specified losses"],
          ["Health / medical cover","May help meet specified healthcare costs, depending on the product and provider"],
          ["Funeral cover","May provide a defined funeral-related benefit, subject to policy terms and exclusions"],
        ],
      },
    ],
    appendBlocks:[
      {kind:"text",type:"paragraph",text:"Zimbabwe check: insurance products, premiums and exclusions vary. IPEC is the sector regulator. Verify the provider and read the actual policy before treating a benefit as guaranteed."},
    ],
  },
  "g10-t3-l47-047": {
    title:"SUCCESSION & LEGACY PLANNING — GOGO MARIA'S WILL",
    textReplacements:[
      {from:"\"I watched them — people I love, people who love each other — become enemies over a dining table and a few thousand rand. I decided that would not happen to my children. I do not have much. A small house. Some savings. A few things my children might want. My daughter gets the house. My son gets the savings. My grandchildren get my jewellery. Simple. But if I did not write it down, there would be fights. I know my children. I love them. And I know that money changes people.\"",to:"\"I watched people I love argue over a dining table and a small amount of money. I decided I did not want silence to create more conflict. I do not have much — a small house, some savings and personal items — but I want my wishes recorded properly and legally.\""},
      {from:"Key idea: Gogo Maria does not have much. But she has enough to fight over. And she has seen what happens when families fight over money after someone dies. The dining table becomes a battlefield. The few thousand rand becomes a wound that never heals. Her will is not about distributing wealth. It is about preventing conflict. It is a final act of love — a way of saying: I thought about you, I planned for you, I protected you from each other.",to:"Key idea: succession planning is not only for wealthy people. Clear records and a valid will can reduce uncertainty, but a will must comply with current Zimbabwe law. The lesson is not to draft a legal instrument from a school worksheet; it is to understand why planning, documentation and qualified advice matter."},
    ],
    appendBlocks:[
      {kind:"text",type:"paragraph",text:"Zimbabwe legal context: wills are governed by the Wills Act [Chapter 6:06], while deceased-estate administration is governed through the Administration of Estates Act [Chapter 6:01] and related law. This lesson is education, not legal advice."},
    ],
  },
  "g10-t3-l48-048": {
    title:"WILLS, BENEFICIARIES & LEGAL FORMALITIES — ZIMBABWE",
    textReplacements:[
      {from:"Identify who can be an heir and who cannot be a witness.",to:"Identify the roles of testator, beneficiary, witness and executor, and explain why current Zimbabwe will formalities must be checked before signing."},
      {from:"Requirements for a Valid Will in South Africa",to:"Zimbabwe Will Formalities — Verify the Current Law"},
      {from:"If you died without a will tomorrow, who would get your belongings under the Intestate Succession Act? Is that who you would choose?",to:"If a person dies without a valid will, succession is governed by applicable Zimbabwe law rather than by a private wish. Why is that a reason to seek qualified advice before relying on a homemade document?"},
      {from:"Part B: The Witness Check",to:"Part B: The Formalities Check"},
      {from:"Look at your beneficiaries. Who CANNOT be a witness to your will? Why?",to:"What witness, signature and conflict-of-interest rules would you need to verify under the current Zimbabwe Wills Act before signing a real will?"},
      {from:"Cannot be witnesses: _________________________________",to:"Rules I would verify with a qualified source: _________________________________"},
      {from:"Question 1: What are the four requirements for a valid will in South Africa? Why can a beneficiary not be a witness?",to:"Question 1: Why is it unsafe to memorise a four-point foreign will checklist and assume it creates a valid Zimbabwe will? Name the Zimbabwe law you would check and one reason to seek qualified legal advice."},
    ],
    tableReplacements:[
      {
        cellIncludes:"cannot be a beneficiary",
        rows:[
          ["Term","Working definition"],
          ["Testator","The person making the will"],
          ["Beneficiary","A person or entity intended to receive a benefit under a will"],
          ["Witness","A person who witnesses the execution of a will subject to current legal rules"],
          ["Executor","The person responsible for administering the estate under the relevant legal process"],
          ["Intestate","Dying without a valid will, so applicable succession law governs the estate"],
        ],
      },
      {
        cellIncludes:"Oral wills generally not valid",
        rows:[
          ["Legal-safety question","What to do"],
          ["Which law applies?","Check the current Zimbabwe Wills Act [Chapter 6:06] and related law"],
          ["What signing and witness formalities apply?","Verify the current requirements before signing"],
          ["Are there conflicts or disqualifications?","Check before choosing witnesses or beneficiaries"],
          ["Who will administer the estate?","Understand the executor / estate-administration process"],
          ["Is the document legally sufficient?","Use qualified legal advice rather than treating this workbook as a will template"],
        ],
      },
    ],
    rangeReplacements:[
      {
        startIncludes:"\"One: it must be in writing.",
        endIncludes:"It just applies the formula.\"",
        replacement:[
          {kind:"text",type:"paragraph",text:"Advocate Dlamini closes the workbook and says: \"Do not turn a school lesson into a legal checklist. Zimbabwe has a Wills Act, and the formalities matter. The law can contain detailed rules, exceptions and consequences that a simplified paragraph will miss.\""},
          {kind:"text",type:"paragraph",text:"\"If you ever make a real will, check the current law, make sure the signing and witness requirements are correctly followed, keep the document safely, and get qualified legal advice where the estate or family situation is important or complex.\""},
          {kind:"text",type:"paragraph",text:"\"If there is no valid will, applicable Zimbabwe succession law governs what happens. That is why the objective here is legal literacy — not DIY legal drafting.\""},
        ],
      },
    ],
  },
  "g10-t3-l49-049": {
    textReplacements:[
      {from:"Feeling losses more intensely than equivalent gains — losing R100 hurts more than finding R100 feels good",to:"Feeling losses more intensely than equivalent gains — losing US$10 can feel more painful than gaining US$10 feels good"},
      {from:"\"When I was 30, I inherited R10,000 from my father. It was more money than I had ever had. He told me to save it. Put it away. Let it grow. But I saw a beautiful coat. Expensive. I bought it.\"",to:"\"When I was 30, I inherited the equivalent of US$1,000 in this story. It was more money than I had ever controlled at once. My father had told me to save it. But I saw a beautiful coat. Expensive. I bought it.\""},
      {from:"She pauses. \"I wore it three times. Then it did not fit. Then it went out of style. Then it was just a coat in the cupboard, and the money was gone. I could have invested that R10,000. It would be worth hundreds of thousands today. Instead, I have a memory of a coat I barely wore.\"",to:"She pauses. \"I wore it three times. Then it did not fit. Then it went out of style. The important lesson is not a fantasy number about what the money 'would definitely be worth' today. It is that I traded a flexible financial asset for a short-lived emotional reward without pausing to compare the alternatives.\""},
    ],
    tableTextReplacements:[
      {from:"losing R100 hurts more than finding R100 feels good",to:"losing US$10 can feel more painful than gaining US$10 feels good"},
      {from:"Losing R100 hurts more than gaining R100 feels good",to:"Losing US$10 may feel more painful than gaining US$10 feels good"},
    ],
  },
  "g10-t3-l50-050": {
    textReplacements:[
      {from:"This term, you have explored the architecture of financial life. Systems. Tax. Retirement. Insurance. Estate planning. The psychology of money. Now it is your turn to design.",to:"In this learning cycle, you have explored the architecture of financial life: systems, tax literacy, retirement, insurance, succession planning and the psychology of money. Now it is your turn to design."},
      {from:"Your project is to design a complete, integrated financial system for yourself. Not one piece. Everything. Income. Saving. Spending. Debt. Investing. Protection. Tax planning. Retirement. Estate planning. Psychology. All of it. Working together as one system.",to:"Your project is to design a complete, integrated financial system for yourself: income, saving, spending, debt, investing, protection, tax habits, retirement layers, succession/legacy planning and psychology — working together as one system."},
      {from:"Here’s the tension: the component you are avoiding is the one that will make or break your system. If you skip retirement planning because it feels too far away, your 65-year-old self pays the price. If you skip estate planning because it feels morbid, your family pays the price. If you skip the psychology component because it feels too personal, your own brain will sabotage every other component. The strategist does not avoid the hard parts. The strategist starts with them.",to:"Here’s the tension: the component you avoid can become the weak link. Retirement feels far away. Succession planning feels uncomfortable. Psychology feels personal. The strategist does not need to solve every adult decision now, but does need to understand the questions, build source-checking habits and create a system that can grow with real life."},
    ],
    tableReplacements:[
      {
        cellIncludes:"TFSA, RA",
        rows:[
          ["Component","What to include"],
          ["Income","Current and future sources, dependencies and reliability"],
          ["Saving","Amount, purpose, currency and routine"],
          ["Spending","Budget, tracking and decision rules"],
          ["Debt","Repayment approach, affordability and red lines"],
          ["Investing","Time horizon, diversification, fees, risk and regulated-provider checks"],
          ["Protection","Emergency fund, insurance priorities and backup systems"],
          ["Tax","Record keeping, current ZIMRA source checks and professional help triggers"],
          ["Retirement","NSSA / employer / individual pension layers as relevant, plus long-term assets"],
          ["Succession & legacy","Records, wishes, future will and legal-advice trigger"],
          ["Psychology","Rules and systems that protect against predictable biases"],
        ],
      },
    ],
  },
  "g10-t3-l51-051": {
    textReplacements:[
      {from:"Myah is at Mama Rose's kitchen, her notes from three terms spread across the table. Term 1: systems, value, business structures. Term 2: saving, investing, compound interest, debt. Term 3: tax, retirement, insurance, estate planning, psychology.",to:"Myah is at Mama Rose's kitchen, her notes from the Form 3 journey spread across the table. Earlier work: value creation, saving, investing, assets and debt. Current cycle: systems, tax literacy, retirement, insurance, succession planning and psychology."},
      {from:"Income flows into savings (automated, first). Savings flows into investing (TFSA, retail bonds). Investing flows toward retirement (RA from age 20). Protection wraps around everything (emergency fund, insurance). Tax planning reduces what leaks out. Estate planning ensures what remains goes where it should. Psychology rules protect the whole system from herself.",to:"Income flows into planned saving. Saving supports an emergency buffer and suitable regulated investments. Long-term assets connect to retirement layers. Protection wraps around the system through emergency reserves and insurance. Tax habits keep records and current rules visible. Succession planning protects records, wishes and future legal decisions. Psychology rules protect the system from predictable impulsive behaviour."},
    ],
  },
  "g10-t3-l52-052": {
    textReplacements:[
      {from:"Myah points at it. \"This is your weakest link. You have R500 a month going to savings. What if R100 of that went to an RA? You would still save R400. And you would start retirement. The tax benefit alone would give you back about R18 per month. That is free money. From the government. For doing something you should be doing anyway.\"",to:"Myah points at it. \"This is your weakest link. In your illustration you have US$50 a month going to general savings but no retirement layer at all. What if you earmarked US$10 for a regulated long-term retirement or investment arrangement once you are eligible and understand the rules? Do not assume a tax benefit. Verify the product, fees, access and current tax treatment first.\""},
      {from:"Thabo stares at the page. Then he adds: \"RA: R100/month starting January. TFSA: R200/month for medium-term goals.\" The weakest link just got stronger.",to:"Thabo stares at the page. Then he adds: \"Retirement layer: investigate NSSA / employer / regulated individual options before I start contributing. Medium-term investment: US$20/month in this illustration only after checking risk, fees and provider status.\" The weakest link just got more specific."},
    ],
  },
  "g10-t3-l54-054": {
    textReplacements:[
      {from:"Emmanuel presents his spaza shop system. Supply chain redundancy. Tax planning. Insurance. Retirement for his mother. \"I learned that a system is what keeps you alive when things go wrong.\"",to:"Emmanuel presents his tuckshop system. Supply-chain redundancy. Tax record keeping. Insurance. Retirement layers for his mother. \"I learned that a system is what keeps you functioning when one part goes wrong.\""},
      {from:"Nosipho presents her tutoring system. Income tracking. Tax filing. Retirement annuity. Psychology rules. \"I learned that a system grows with you. What I need now is different from what I will need at 25.\"",to:"Nosipho presents her tutoring system. Income tracking. Tax source checks. A future regulated retirement layer. Psychology rules. \"I learned that a system grows with you. What I need now is different from what I will need at 25.\""},
      {from:"Sipho presents his repair business system. The same Sipho who had no goals in Grade 8. Who melted his sweets. Who cut up his credit card.",to:"Sipho presents his repair-business system. The same Sipho who had no goals in Form 1, who melted his sweets, learned from the loss and rebuilt."},
    ],
  },
  "g10-t3-l55-055": {
    title:"SYSTEMS & PROTECTION CYCLE REFLECTION",
    textReplacements:[
      {from:"Lesson 37: Systems thinking. The taxi rank as a system — mapped again, seen differently. Lesson 38: Supply chains. Emmanuel's bottleneck. Efficiency vs resilience. Lesson 39-40: Her financial system. Before and after. Automation. Leverage points. Lesson 41-42: Tax. Mr. Khumalo's chess game. The line between avoidance and evasion. Lesson 43-44: Retirement. Gogo Maria's laminated table. Mr. Patel's factory floor. Lesson 45-46: Insurance. Mr. Daniels' burned garage. Naledi at the taxi rank. Lesson 47-48: Estate planning. Gogo Maria's will. Advocate Dlamini's rules. Lesson 49: Psychology. Mrs. Nkosi's coat. The pause where wisdom lives. Lesson 50-54: Her Financial System. Complete. Integrated. Ten components. All connected.",to:"Lessons 37–40: systems thinking, the kombi rank, bottlenecks and personal financial systems. Lessons 41–42: Zimbabwe tax literacy — ZIMRA, current tables, records and the line between legal planning and evasion. Lessons 43–44: retirement layers — NSSA, employer pensions, regulated individual options and the power of time. Lessons 45–46: insurance and regulated-provider checks. Lessons 47–48: succession planning, wills and the need to verify Zimbabwe legal formalities. Lesson 49: money psychology. Lessons 50–54: the integrated Financial System project."},
      {from:"I started this term thinking systems were boring. Now I know they are freedom. A system is not a cage. It is a track. It is what lets you sleep at night. It is what protects you when things go wrong. I have built a system. It is not perfect. But it is mine. And it will grow with me. I am ready for Term 4.",to:"I started this cycle thinking systems were boring. Now I see them as tracks that make good decisions easier to repeat. My system is not perfect and many adult products or legal decisions will only become relevant later. But I know how to ask better questions, verify current rules and improve the design. I am ready for the financial-independence cycle."},
      {from:"✍️ Activity 55: My Term 3 Reflection — With Scale",to:"✍️ Activity 55: My Systems & Protection Cycle Reflection — With Scale"},
      {from:"9. The Scale: At the start of the term, you were a \"1\" on the systems literacy scale. Where are you now — honestly? What is the exact number? What is the ONE thing you need to do in Term 4 to move up by a single point?",to:"9. The Scale: Where were you on the systems-literacy scale at the start of this cycle, and where are you now? What is ONE thing you need to practise during the rest of Form 3 Term 2 to move up by one point?"},
      {from:"What will you carry forward to Term 4?",to:"What will you carry forward into the financial-independence cycle?"},
      {from:"Share your Term 3 reflection with your family. Tell them what you learned and what you are proud of.",to:"Share your systems-and-protection reflection with your family. Tell them what you learned and what you are proud of."},
      {from:"| Date | | | Lesson | Lesson 55 — Term 3 Reflection | | Experiment/Observation | I reflected on my entire Term 3 journey. | | Result | My systems literacy number: ___ / 10 | | Learning | | | Next Action | |",to:"| Date | | | Lesson | Lesson 55 — Systems & Protection Reflection | | Experiment/Observation | I reflected on this Form 3 learning cycle. | | Result | My systems literacy number: ___ / 10 | | Learning | | | Next Action | |"},
    ],
  },
  "g10-t3-l56-056": {
    title:"SYSTEMS & PROTECTION PORTFOLIO CHECKPOINT",
    textReplacements:[
      {from:"Organize your complete Term 3 work.",to:"Organize your complete systems-and-protection cycle work."},
      {from:"📘 Your Term 3 Portfolio",to:"📘 Your Systems & Protection Portfolio Checkpoint"},
      {from:"☐ Tax calculation practice (Lesson 41)",to:"☐ Illustrative tax-bracket practice + current ZIMRA source check (Lesson 41)"},
      {from:"☐ Retirement vehicle choice (Lesson 44)",to:"☐ Zimbabwe retirement-layer comparison (Lesson 44)"},
      {from:"☐ Estate planning reflection (Lesson 47)",to:"☐ Succession and legacy planning reflection (Lesson 47)"},
      {from:"☐ Will first draft thinking (Lesson 48)",to:"☐ Zimbabwe will-formalities research and legal-safety reflection (Lesson 48)"},
      {from:"☐ Term 3 reflection with scale (Lesson 55)",to:"☐ Systems & Protection reflection with scale (Lesson 55)"},
    ],
  },
  "g10-t3-l57-057": {
    title:"LETTER TO MY FUTURE SELF — SYSTEMS CHECKPOINT",
    textReplacements:[
      {from:"I am writing this at the end of Term 3, Grade 10. I am 16. I have designed a complete financial system. Ten components. All connected. It is not perfect. But it is real. And it is mine. I learned that a system is not a cage. It is a track. I learned that tax is the price of civilisation — and that the government rewards things it wants you to do. I learned that retirement starts now. Gogo Maria's table does not lie. I learned that insurance is not waste — it is peace of mind. I learned that a will is an act of love. And I learned that my own brain is my worst financial enemy — but I can out-structure it. Future me — are you following the system? Did it hold when life got hard? What broke? What did you rebuild? I hope you are still building. I hope you are still protecting. I hope you are still becoming. With love, Myah",to:"I am writing this during Form 3 Term 2, after completing the systems-and-protection cycle. I have designed an integrated financial system and learned something more important than memorising products: check the current rule, understand the institution, read the contract, protect against large risks, and design around my own predictable behaviour. Future me — did the system hold? Which rules changed? What did you update when life changed? I hope you are still checking sources, still building and still protecting what matters. With love, Myah"},
      {from:"From me, in Grade 10",to:"From me, in Form 3"},
      {from:"📂 Portfolio: Keep this letter safe. Read it at the end of Term 4.",to:"📂 Portfolio: Keep this letter safe. Read it at the end of Form 3 Term 2."},
    ],
  },
  "g10-t3-l58-058": {
    title:"TRANSITION — FROM FINANCIAL SYSTEMS TO FINANCIAL INDEPENDENCE",
    textReplacements:[
      {from:"What I am most grateful for: _________________________________ What I am most proud of: _________________________________ What I will carry forward to Term 4: _________________________________ One word for this term: _________________________________",to:"What I am most grateful for: _________________________________ What I am most proud of: _________________________________ What I will carry into the Financial Independence cycle: _________________________________ One word for this cycle: _________________________________"},
      {from:"Say a final goodbye to Term 3.",to:"Close the systems-and-protection learning cycle."},
      {from:"Step into Term 4 ready.",to:"Step into the financial-independence learning cycle ready."},
      {from:"There are no more lessons for Term 3. No more activities. No more checkpoints. Just this moment.",to:"The systems-and-protection cycle is complete. Form 3 Term 2 is not over: the next cycle asks what your financial system is ultimately meant to make possible."},
      {from:"\"You started this term not knowing what a system was. Now you have designed one. A complete one. For your whole financial life. You know about tax. You know about retirement. You know about insurance. You know about estate planning. You know about your own mind. You are not the same person who walked through that door in July. Go. Be. Become.\"",to:"\"You started this cycle without seeing how the pieces connect. Now you can map a financial system, check current tax sources, identify retirement layers, evaluate insurance, understand why will formalities need legal care, and design around your own biases. The next question is what all of that structure is for.\""},
      {from:"You finished Term 3 of Grade 10.",to:"You completed the systems-and-protection cycle of Form 3 Term 2."},
      {from:"You explored systems, tax, retirement, insurance, estate planning, and the psychology of money. You designed a complete financial system for yourself. You are not the same person who started Applied Commerce in July. You think in systems. You understand tax and retirement. You protect what matters. You plan for the future. You know how emotions affect money. You have a complete financial system.",to:"You explored systems, Zimbabwe tax literacy, retirement layers, insurance, succession planning and money psychology. You designed an integrated financial system. Now you will use that system to examine financial independence, multiple income streams, ethics, impact and the final Form 3 plan."},
      {from:"Keep going. Term 4 awaits.",to:"Keep going. Form 3 Term 2 continues."},
    ],
  },
  "g10-t4-l59-059": {
    title:"FORM 3 TERM 2 REVIEW — WHAT HAVE I BUILT SO FAR?",
    textReplacements:[
      {from:"Term 2: Saving versus investing. Risk and return. Compound interest. Assets and liabilities. Cooperatives and growth. Debt — good and bad. Credit scores. Investment vehicles. Fees. Reinvestment. Financial planning. Strategy. Her Investment Plan. Gogo Maria's laminated table. Mr. Patel's decision not to sell. Themba's shame he did not calculate.",to:"Form 3 Term 1 — Investing & Assets: saving versus investing, risk and return, compound growth, assets and liabilities, cooperatives, debt, credit records and lender screening, investment vehicles, fees, reinvestment, financial planning and the Investment Plan."},
      {from:"She stares at the third column. That is what Term 4 is for.",to:"She stares at the third column. That is what the Financial Independence cycle is for."},
      {from:"Term 4 = Design the Life the Architecture Serves",to:"Financial Independence Cycle = Design the Life the Architecture Serves"},
      {from:"What is the most important thing you learned this year? Why does it matter to you? What is still unclear — the question you hope Term 4 will answer?",to:"What is the most important thing you have learned in Form 3 so far? Why does it matter? What is still unclear — the question you hope the Financial Independence cycle will help you investigate?"},
      {from:"Question 1: What did you learn in Term 1? Term 2? Term 3? How do these three terms connect to prepare you for Term 4?",to:"Question 1: What did you learn in the Value & Assets, Systems & Protection, and earlier Form 3 cycles? How do those ideas connect to prepare you for a Financial Independence Plan?"},
      {from:"Myah sits at Mama Rose's kitchen, her three notebooks from Grade 10 spread across the table. Term 1. Term 2. Term 3. Hundreds of pages. Evidence of becoming.",to:"Myah sits at Mama Rose's kitchen with her Form 3 work spread across the table. Value creation. Investing. Systems. Protection. Hundreds of pages. Evidence of becoming."},
      {from:"Term 3: Systems thinking. Supply chains. Personal financial systems. Tax. Retirement. Insurance. Estate planning. Psychology. Her Financial System — ten components, all connected. Mr. Khumalo's chess game. Naledi at the taxi rank. Advocate Dlamini's rules. Mrs. Nkosi's coat.",to:"Systems & Protection cycle: systems thinking, supply chains, personal financial systems, Zimbabwe tax literacy, retirement layers, insurance, succession planning and psychology. Her Financial System — ten components, all connected."},
      {from:"Part A: My Assets from Grade 10",to:"Part A: My Assets from Form 3 Term 2 So Far"},
      {from:"List THREE assets — skills, habits, mindsets, relationships — you built this year. For each, name one specific situation in Grade 11 where it will give you an advantage.",to:"List THREE assets — skills, habits, mindsets or relationships — you have built so far in Form 3. For each, name one situation in the next learning cycle where it could help you."},
      {from:"Part B: My Liabilities from Grade 10",to:"Part B: My Liabilities from Form 3 Term 2 So Far"},
      {from:"List TWO liabilities — patterns, beliefs, blind spots — that Grade 10 revealed. For each, name the situation where it might sabotage you in Grade 11 AND your counter-move.",to:"List TWO liabilities — patterns, beliefs or blind spots — that Form 3 has revealed so far. For each, name the situation where it might undermine you in the next cycle and your counter-move."},
      {from:"What is ONE question about money or life that Grade 10 did NOT answer for you? Write it down. You will return to it at the end of Term 4.",to:"What is ONE question about money or life that Form 3 has not answered yet? Write it down. You will return to it at the end of Term 2."},
      {from:"Here’s the tension: And the walking requires not just information, but the willingness to act on it. The gap between what you know and what you do — that is the space where your Grade 11 self will be built or broken. Term 4 is not about learning new concepts. It is about proving — to yourself — that the concepts have become part of you. Can you synthesize everything into a single plan? Can you commit to a vision of your own financial independence? Can you face the question of what your money is actually building — in the world, not just in your account?",to:"Here’s the tension: knowledge only matters when it shapes action. The next Form 3 Term 2 cycle is about synthesis. Can you bring income, investing, protection, systems, ethics and life design into one Financial Independence Plan that is realistic enough to review and revise?"},
      {from:"Question 2: Choose one asset and one liability from your audit. Which will have the bigger impact on your Grade 11 — the asset you leverage or the liability you fail to manage? What is your plan for both?",to:"Question 2: Choose one asset and one liability from your audit. Which will have the bigger impact on the rest of Form 3 Term 2 — the asset you use or the liability you fail to manage? What is your plan for both?"},
      {from:"| Date | | | Lesson | Lesson 59 — Year in Review | | Experiment/Observation | I audited my Grade 10 learning and identified what is still unclear. | | Result | | | Learning | | | Next Action | |",to:"| Date | | | Lesson | Lesson 59 — Form 3 Term 2 Review | | Experiment/Observation | I audited my Form 3 learning so far and identified what is still unclear. | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g10-t4-l60-060": {
    title:"WHAT IS FINANCIAL INDEPENDENCE? — MYAH'S EQUATION",
    textReplacements:[
      {from:"📘 Ms. Daniels' Question at the Taxi Rank",to:"📘 Ms. Daniels' Question at the Kombi Rank"},
      {from:"Ms. Daniels meets Myah at the taxi rank. The same bench where they sat at the start of Grade 9. The same flows of money, taxis, vendors, commuters. Everything looks different when you have learned to see it.",to:"Ms. Daniels meets Myah at the kombi rank. The same place where earlier lessons taught her to trace money and value. The same movement of commuters, vendors and transport — but she now sees systems, choices and trade-offs."},
      {from:"Myah thinks. The taxi rank hums around her. Money flowing. People working. Vendors selling. Drivers driving. Queues waiting.",to:"Myah thinks. The kombi rank hums around her. Money flowing. People working. Vendors selling. Drivers driving. Queues waiting."},
    ],
  },
  "g10-t4-l61-061": {
    textReplacements:[
      {from:"Themba is 20 now. He asked to meet Myah at Mama Rose's kitchen — the same place where he first shared his story about tiny habits, about R5 a day, about the power of small things.",to:"Themba is 20 now. He asks to meet Myah at Mama Rose's kitchen — the same place where he first shared his story about tiny habits and the power of small repeated actions."},
    ],
    tableReplacements:[
      {
        cellIncludes:"Part-time job",
        rows:[
          ["Stream","Type","Illustrative Monthly Amount","Control (1-5)","Status"],
          ["Part-time job","Active","US$150","2","Manager controls hours"],
          ["Online store","Business","US$80–US$200","3","Platform and demand dependent"],
          ["Tutoring","Active / self-directed","US$60","4","Growing — he controls clients, rate and schedule"],
          ["Savings interest","Passive","US$3","5","Small, but not dependent on an employer"],
        ],
      },
    ],
    tableTextReplacements:[
      {from:"Spaza shop",to:"Tuckshop"},
    ],
  },
  "g10-t4-l62-062": {
    textReplacements:[
      {from:"\"I started at 16. Same as you. Part-time job. R200 a month saved. It felt like nothing. But it was not nothing. It was a seed.\"",to:"\"I started at 16. Same as you. Part-time job. In this illustration I saved US$20 a month. It felt small. But it was a seed.\""},
      {from:"She pauses. \"But the seed that changed everything was not the savings. It was a study guide. I created it from my own notes. Grade 10 maths. Three months of evenings and weekends. I finished it. Put it online. And waited.\"",to:"She pauses. \"But the seed that changed everything was not the savings. It was a study guide I created from my own Form 3 maths notes. Three months of evenings and weekends. I finished it, put it online and waited.\""},
      {from:"\"My expenses are R1,200 per month. I am free. I still work — I love my work. But I do not have to. That is the difference. That is financial independence.\"",to:"\"In this illustration my core expenses are US$120 per month and these streams average slightly more than that. I still work because I want to keep growing. The useful idea is not that passive income is effortless. It is that some income can become less tied to today's hours of labour.\""},
    ],
    tableReplacements:[
      {
        cellIncludes:"TFSA growth",
        rows:[
          ["Passive / semi-passive stream","Illustrative Monthly Average"],
          ["Study-guide sales","US$40"],
          ["Regulated investment growth or distributions","US$50"],
          ["Dividend income","US$30"],
          ["Savings interest","US$5"],
          ["Total","US$125"],
        ],
      },
    ],
  },
  "g10-t4-l64-064": {
    textReplacements:[
      {from:"📘 Lethabo's Question at the Spaza Shop",to:"📘 Lethabo's Question at the Tuckshop"},
      {from:"Lethabo is at Emmanuel's spaza shop. He has a question he has been carrying for weeks.",to:"Lethabo is at Emmanuel's tuckshop. He has a question he has been carrying for weeks."},
    ],
  },
  "g10-t4-l65-065": {
    textReplacements:[
      {from:"Imagine a situation where crossing your Red Line would earn you R50,000 — more money than you have ever had. Would you cross it? If your answer is \"it depends,\" your Red Line is not a Red Line. It is a preference. What would it take to make your Red Line absolute?",to:"Imagine a situation where crossing your Red Line would earn you the equivalent of US$5,000 — more money than you have ever controlled. Would you cross it? If your answer is 'it depends,' what does that reveal about whether the line is truly a principle or only a preference?"},
    ],
  },
  "g10-t4-l66-066": {
    textReplacements:[
      {from:"Myah adds: \"Mr. Patel told us in Term 1 that the farmer earns the least and the brand owner earns the most. What if socially responsible investing is one way to shift that? Every rand we invest is a vote. The question is not whether we will vote. The question is what we are voting for.\"",to:"Myah adds: \"Earlier we learned that value and bargaining power are not shared equally across a chain. Investing can also express priorities, but labels are not enough. We still have to investigate what an investment actually owns, how it behaves and what evidence supports its claims.\""},
      {from:"Key idea: Atlehang's question is the question behind everything. Can you build wealth without losing your soul? Every rand you invest is a vote for the kind of world you want. The question is not whether you will vote. You are voting every time you spend, save, or invest. The question is whether you will vote intentionally or by default.",to:"Key idea: money decisions have consequences beyond your own balance. But 'impact' claims should be tested, not romanticised. Ask what the investment actually funds, how impact is measured, what trade-offs exist, and whether the provider is appropriately regulated."},
    ],
  },
  "g10-t4-l67-067": {
    title:"IMPACT INVESTING — THANDIWE'S STORY AT THE KOMBI RANK",
    textReplacements:[
      {from:"📘 Thandiwe's Story — The Bottles at the Taxi Rank",to:"📘 Thandiwe's Story — The Bottles at the Kombi Rank"},
      {from:"Thandiwe is 22. She started a recycling business at 18. Myah meets her at the taxi rank — Thandiwe is there to collect plastic bottles from the vendors. Every Tuesday.",to:"Thandiwe is 22. She started a recycling business at 18. Myah meets her at the kombi rank — Thandiwe is there to collect plastic bottles from vendors. Every Tuesday."},
    ],
  },
  "g10-t4-l68-068": {
    textReplacements:[
      {from:"\"We have spent a year talking about money. Saving. Investing. Insurance. Retirement. Estate planning. Systems.\"",to:"\"We have spent Form 3 so far talking about money: saving, investing, insurance, retirement, succession planning and systems.\""},
    ],
  },
  "g10-t4-l69-069": {
    title:"FORM 3 TERM 2 CAPSTONE — MY FINANCIAL INDEPENDENCE PLAN",
    textReplacements:[
      {from:"Understand the requirements for your Grade 10 final project.",to:"Understand the requirements for your Form 3 Term 2 capstone."},
      {from:"\"This is it. Your Grade 10 final project. You will create a complete, personal, realistic Financial Independence Plan. Use everything from this year. Everything from Grade 9. Everything from Grade 8. This is the synthesis of three years of learning.\"",to:"\"This is your Form 3 Term 2 capstone. You will create a personal, realistic Financial Independence Plan using the strongest evidence from Form 1, Form 2 and Form 3 so far. It is a synthesis project — not the end of Form 3.\""},
    ],
  },
  "g10-t4-l75-071": {
    textReplacements:[
      {from:"Atlehang presents her family's plan. Cooperative kitchen expansion. SRI-aligned investments. \"I learned that my money is a vote. Every rand.\"",to:"Atlehang presents her family's plan. Cooperative-kitchen expansion. Investments screened against both financial and impact criteria. \"I learned that money decisions carry consequences, and that I need evidence before I believe an impact label.\""},
      {from:"Myah presents last. Her complete Financial Independence Plan. Life vision. Current situation. Goals with failure signals. Income strategy with control scores. Investing plan with fee analysis. Protection. Tax. Retirement from age 20 — projected over R3 million by 65. Estate. Systems. Ethics. Her sweet spot — financial education for young people. \"This plan is not just about money. It is about the life I want to build. And now I know how to build it.\"",to:"Myah presents last. Her Financial Independence Plan includes a life vision, current situation, goals with failure signals, income strategy, investing plan with fee analysis, protection, tax source-checking, retirement layers, succession planning, systems and ethics. Any long-term projections are labelled illustrative and assumption-based. \"This plan is not just about money. It is about the life I want to build — and a system I can review when reality changes.\""},
    ],
  },
  "g10-t4-l76-072": {
    textReplacements:[
      {from:"Emmanuel presents. Nosipho presents. Sipho presents — the same Sipho who had no goals in Grade 8. His repair business. His Micro-Exit Plan. His journey from melted sweets to a real income.",to:"Emmanuel presents. Nosipho presents. Sipho presents — the same Sipho who had no goals in Form 1. His repair business. His Micro-Exit Plan. His journey from melted sweets to real evidence of value creation."},
    ],
  },
  "g10-t4-l77-073": {
    title:"FORM 3 TERM 2 REFLECTION",
    textReplacements:[
      {from:"✍️ Activity 77: My Term 4 and Year Reflection",to:"✍️ Activity 77: My Form 3 Term 2 Reflection"},
      {from:"📘 Myah's Final Entry — Grade 10",to:"📘 Myah's Form 3 Term 2 Reflection"},
      {from:"4. What is the ONE thing I need to do in Grade 11 to move up by a single point?",to:"4. What is the ONE thing I need to do in Form 3 Term 3 to move up by a single point?"},
    ],
  },
  "g10-t4-l78-074": {
    title:"FORM 3 TERM 2 PORTFOLIO ASSEMBLY",
    textReplacements:[
      {from:"Complete Grade 10 portfolio checklist — all four terms, all activities, all reflections, all Log entries, all letters to future self.",to:"Complete Form 3 Term 2 portfolio checklist — value creation, investing and assets, systems and protection, financial independence, all activities, reflections, Log entries and checkpoint letters."},
    ],
  },
  "g10-t4-l79-075": {
    title:"LETTER TO MY FUTURE SELF — FORM 3 TERM 2",
    textReplacements:[
      {from:"Myah writes her final letter of Grade 10. She tells her future self about her Financial Independence Plan. About her sweet spot. About her Red Lines. She ends with: \"Future Me, what was I most wrong about in this letter? What did I get right? And did you follow the plan — or build something better?\"",to:"Myah writes her Form 3 Term 2 letter. She tells her future self about the Financial Independence Plan, her sweet spot, her Red Lines and the rules she expects to review as laws, products and life circumstances change. She ends with: \"Future Me, what was I most wrong about? What did I get right? Did you follow the plan — or build something better from new evidence?\""},
    ],
  },
  "g10-t4-l80-076": {
    title:"FAREWELL TO FORM 3 TERM 2 — LEVERAGE & LEADERSHIP AWAIT",
    textReplacements:[
      {from:"\"You started Grade 8 as a quiet girl at the edge of scenes. Watching. Noticing. In Grade 9, you walked into the grant office. You demanded answers. You became the challenger. In Grade 10, you became the strategist. You learned systems. You designed your financial future. You learned to build things that last.\"",to:"\"You started Form 1 learning to notice. In Form 2, you became more active — testing, mapping and building evidence. In Form 3 so far, you became a strategist: designing systems, studying risk, investing, protection and financial independence.\""},
      {from:"\"Next year, Grade 11. You will become the architect. You will design structures that outlast you. The observer who noticed everything, the challenger who demanded answers, the strategist who built systems — she will now build structures so others do not struggle the way she did.\"",to:"\"Next comes Form 3 Term 3: leverage, leadership and responsibility. The strategist now becomes more of an architect — learning how people, systems, knowledge and technology can multiply impact, and how responsibility grows with that power.\""},
      {from:"Myah walks through the door. Into Grade 11. Into whatever comes next.",to:"Myah walks through the door. Into Form 3 Term 3. Into leverage, leadership and whatever the next evidence will teach her."},
      {from:"You finished Grade 10. Not just a book. Not just a course. A year of becoming. You explored systems, investing, protection, and life design. You designed a complete Financial Independence Plan. You know what you value. You know how to build. You know how to protect. You know your Red Lines. You know your sweet spot.",to:"You finished Form 3 Term 2. You explored value creation, investing, systems, protection and life design. You built a Financial Independence Plan. You know more about what you value, how to build, how to protect, where your Red Lines are and which questions still require current sources or qualified advice."},
      {from:"Keep going. Grade 11 awaits. The architect is rising.",to:"Keep going. Form 3 Term 3 awaits — leverage, leadership and responsibility."},
    ],
  },
  "g11-t1-l01-001": {
    title:"WELCOME TO FORM 3 TERM 3 — THE LEVERAGE & LEADERSHIP TERM",
    textReplacements:[
      {from:"Recall key learning from Grade 10.",to:"Recall key learning from Form 3 Terms 1–2."},
      {from:"Set intentions for Grade 11.",to:"Set intentions for Form 3 Term 3."},
      {from:"📘 Myah's Morning — Grade 11",to:"📘 Myah's Morning — Form 3 Term 3"},
      {from:"Myah wakes before her alarm. She has been doing that for two years now — ever since the 21-day tracker in Grade 9. Some habits stick.",to:"Myah wakes before her alarm. She has been doing that for a long time now — ever since the 21-day tracker in Form 2. Some habits stick."},
      {from:"She looks at the notebook on her bedside table — the one she has kept since Grade 9. Three years of learning. Three years of becoming.",to:"She looks at the notebook on her bedside table — the one she has kept since Form 2. Years of learning. Years of becoming."},
      {from:"Grade 9: Values. Mama Rose. The grant office. The cooler box. Learning that the system does not always reward rule-followers. Learning to make herself impossible to ignore.",to:"Form 2: Values. Mama Rose. The committee office. The cooler box. Learning to create value, map money flows and build evidence instead of waiting for permission."},
      {from:"Grade 10: Investing. Systems. Tax. Retirement. Insurance. Her Financial Independence Plan — with failure signals, control scores, and Red Lines. Learning that money is a tool, not a master.",to:"Form 3 Terms 1–2: Investing. Systems. Zimbabwe tax literacy. Retirement layers. Insurance. Her Financial Independence Plan — with failure signals, control scores and Red Lines. Learning that money is a tool, not a master."},
      {from:"She is 17 now. Matric next year. The world after that.",to:"Form 4 comes next — the final O-Level year in this Applied Commerce pathway. Beyond that, the world opens wider."},
      {from:"\"How to do more with less. How to multiply impact. Ms. Daniels says that is what Grade 11 is about.\"",to:"\"How to do more with less. How to multiply impact without multiplying harm. Ms. Daniels says that is what this Form 3 Term 3 cycle is about.\""},
      {from:"📘 The Taxi Rank",to:"📘 The Kombi Rank"},
      {from:"Myah walks to the taxi rank. The morning is cool. She is thinking about leverage, about multiplication, about the year ahead.",to:"Myah walks to the kombi rank. The morning is cool. She is thinking about leverage, multiplication and the term ahead."},
      {from:"She thinks of her friend Atlehang — the one who notices everything, the one whose question changed her life in Grade 9. \"Did you ask them why?\" That question. That moment. The grant office. The cooler box. Everything that followed. Her friend would have something to say about this boy. She always did. But that thought is for another time. Today is about leverage.",to:"She thinks of her friend Atlehang — the one who notices everything, the one whose question changed her direction in Form 2: \"Did you ask them why?\" That question. The committee office. The cooler box. Everything that followed. Today is about leverage."},
      {from:"📘 What We Learned in Grade 10",to:"📘 What We Built in Form 3 Terms 1–2"},
      {from:"What is one thing you learned in Grade 10 that you are proud of? What is one thing you want to leverage — multiply — this year? What is the risk of multiplying it?",to:"What is one thing you learned in Form 3 Terms 1–2 that you are proud of? What is one thing you want to leverage — multiply — this term? What is the risk of multiplying it?"},
      {from:"✍️ Activity 1: My Grade 11 Strategic Audit",to:"✍️ Activity 1: My Form 3 Term 3 Strategic Audit"},
      {from:"Part A: My Assets from Grade 9 and 10",to:"Part A: My Assets from Form 2 and Form 3 Terms 1–2"},
      {from:"List three assets (skills, habits, mindsets, relationships) you built in the last two years that you will leverage in Grade 11. For each, name one specific situation this year where it will give you an advantage.",to:"List three assets — skills, habits, mindsets or relationships — you built in Form 2 and Form 3 so far that you will leverage in Term 3. For each, name one situation where it could help you."},
      {from:"Part C: My Intention for Grade 11 — With Consequence",to:"Part C: My Intention for Form 3 Term 3 — With Consequence"},
      {from:"Key idea: You are not starting Grade 11 empty. You are starting with everything you built in Grade 9 and Grade 10 — the skills, the evidence, the scars, the wins. The paradox: the more you learn, the more you realise you do not know. But the more you know, the more you can leverage. You are not starting from zero. You are starting from experience.",to:"Key idea: You are not starting Form 3 Term 3 empty. You are starting with everything you built in Form 2 and Form 3 so far — skills, evidence, scars and wins. The more you learn, the more clearly you can see both opportunity and risk. You are not starting from zero. You are starting from experience."},
      {from:"Question 1: What is the theme of Grade 11? Explain what leverage means in your own words. Look at your Strategic Audit. Which of your assets will be most valuable this year? Why?",to:"Question 1: What is the theme of Form 3 Term 3? Explain leverage in your own words. Which asset from your Strategic Audit could be most useful this term, and what shadow or downside could come with multiplying it?"},
      {from:"| Date | | | Lesson | Lesson 1 — Grade 11 Strategic Audit | | Experiment/Observation | I conducted a strategic audit of assets and liabilities for Grade 11. | | Design Decision | My intention for this year: | | Prediction | If I succeed: If I fail: | | Result | | | Learning | | | Next Action | My one leverage action this week: |",to:"| Date | | | Lesson | Lesson 1 — Form 3 Term 3 Strategic Audit | | Experiment/Observation | I conducted a strategic audit of assets and liabilities for this term. | | Design Decision | My intention for this term: | | Prediction | If I succeed: If I fail: | | Result | | | Learning | | | Next Action | My one leverage action this week: |"},
    ],
    tableReplacements:[
      {
        cellIncludes:"Term 4",
        rows:[
          ["Cycle","What We Learned"],
          ["Form 3 Term 1 — Value & Assets","Value creation, enterprise systems, saving, investing, assets, debt and investment planning"],
          ["Form 3 Term 2 — Systems & Independence","Systems, Zimbabwe tax literacy, retirement layers, insurance, succession planning, financial independence and life design"],
          ["Form 3 Term 3 — Ahead","Leverage, leadership, responsibility and evidence of how you multiply impact"],
        ],
      },
    ],
  },
  "g11-t1-l02-002": {
    tableReplacements:[
      {
        cellIncludes:"Save R10,000",
        rows:[
          ["Type","Without Leverage","With Leverage","Illustrative Example"],
          ["Financial","Use only your own US$1,000","Use US$1,000 plus US$4,000 borrowed or contributed by others","A larger asset or project is controlled — and both gains and losses are amplified"],
          ["Time","Work 40 hours","Automate or redesign repetitive work","Same result with fewer repeated hours if the system works"],
          ["People","Do all deliveries alone","Train helpers","More work can be completed, but quality and employment responsibilities increase"],
          ["Systems","Make each item differently","Standardise a repeatable process","Consistency can improve without the founder making every decision"],
          ["Technology","Manual records","Use appropriate digital tools","Faster records, but new risks include errors, privacy and platform dependence"],
          ["Knowledge","Learn once and forget","Document, teach and reuse","One learning effort can help more people over time"],
        ],
      },
    ],
  },
  "g11-t1-l03-003": {
    title:"MYAH'S BIG QUESTION — FORM 4 & POST-O-LEVEL VISION",
    textReplacements:[
      {from:"Clarify your post-matric vision.",to:"Clarify your Form 4 and post-O-Level vision."},
      {from:"\"What do I do after matric? Everyone asks. I do not have one answer. I have pieces. Teaching. Financial literacy. Workshops. Writing. But I do not know how they fit together.\"",to:"\"Form 4 comes next. And after O-Level? Everyone asks. I do not have one answer. I have pieces — teaching, financial literacy, workshops, writing — but I do not yet know how they fit together.\""},
      {from:"Mapping Your Post-Matric Vision",to:"Mapping Your Form 4 & Post-O-Level Vision"},
      {from:"What do you want after matric? What levers could help you get there? What is the \"one thing\" that connects your pieces — the core skill Atlehang saw in Myah's vision?",to:"What do you want to strengthen in Form 4, and what possibilities do you want after O-Level? What levers could help? What is the connecting capability behind your different interests?"},
      {from:"✍️ Activity 3: My Post-Matric Vision and Leverage Map",to:"✍️ Activity 3: My Form 4 & Post-O-Level Vision and Leverage Map"},
      {from:"The Architect's Audit: If you were designing a post-matric pathway for someone you love — someone with your exact talents and circumstances — what would you tell them to pursue? Are you pursuing it yourself? If not, why not?",to:"The Architect's Audit: if you were designing a Form 4 and post-O-Level pathway for someone with your exact talents and circumstances, what would you tell them to strengthen now, explore later and keep open? Are you giving yourself the same advice?"},
      {from:"Question 1: Why is it important to have a vision beyond matric? What happens if you only focus on the next step without seeing the bigger picture? How can leverage help you achieve your vision?",to:"Question 1: Why is it useful to see beyond the next school term while still taking Form 4 seriously? How can leverage help you build capability without pretending you already know your final career?"},
      {from:"| Date | | | Lesson | Lesson 3 — Post-Matric Vision | | Experiment/Observation | I identified my core skill and tested it. | | Design Decision | The core skill I hypothesized: | | Prediction | What I thought the test would reveal: | | Result | What actually happened: | | Learning | | | Next Action | |",to:"| Date | | | Lesson | Lesson 3 — Form 4 & Post-O-Level Vision | | Experiment/Observation | I identified a core capability and tested it. | | Design Decision | The capability I hypothesized: | | Prediction | What I thought the test would reveal: | | Result | What actually happened: | | Learning | | | Next Action | |"},
    ],
    tableReplacements:[
      {
        cellIncludes:"Post-matric",
        rows:[
          ["Term","Definition"],
          ["Vision","A clear but revisable picture of the future you want to build"],
          ["Form 4","The final O-Level Applied Commerce year in this Zimbabwe pathway"],
          ["Post-O-Level","The stage after completing O-Level; possible routes may include further study, work, enterprise, training or combinations"],
          ["Pathway","A route toward a goal that can change as new evidence appears"],
        ],
      },
    ],
  },
  "g11-t1-l04-004": {
    textReplacements:[
      {from:"📘 The Six Levers at the Taxi Rank",to:"📘 The Six Levers at the Kombi Rank"},
      {from:"Ms. Daniels does not lecture. She takes the class to the taxi rank.",to:"Ms. Daniels does not lecture. She takes the class to the kombi rank."},
      {from:"Financial leverage: The taxi owners. Most do not own their taxis outright — they borrowed from banks or taxi associations. Other people's money, earning for them. One taxi costs R300,000. With a R50,000 deposit and a loan for the rest, the owner controls an asset worth six times their investment. That is 6:1 leverage.",to:"Financial leverage: use a fictional transport-asset example. Suppose an operator contributes US$1,000 of their own capital and finances another US$5,000 under a valid agreement. They control a US$6,000 asset — 6:1 leverage on their own capital. The maths is illustrative, not a claim about Zimbabwe vehicle prices, deposits or loan terms. The debt still has to be repaid if income falls."},
      {from:"Systems leverage: The loading system itself. Taxis arrive. Marshals direct. Passengers board. Money changes hands. It happens the same way every time. No one invented it from scratch each morning. The system runs.",to:"Systems leverage: the loading system itself. Kombis arrive. Marshals direct. Passengers board. Money changes hands. The process is repeated rather than reinvented from scratch each morning."},
      {from:"Myah writes in her notebook: The taxi rank is not just a place. It is a leverage laboratory. Every type, in action, every day. I have been looking at this my whole life and never saw it. But now I see something else: every lever has a shadow. The taxi owner's financial leverage is also debt — if the taxi does not earn, the debt still demands payment. The marshal's time leverage is also dependence — if the marshal does not show up, chaos. Every lever is a gift and a risk. The architect sees both.",to:"Myah writes in her notebook: the kombi rank is a leverage laboratory. Every lever has a shadow. Financial leverage can multiply returns but also debt losses. Time leverage can create capacity but also dependence on a system or person. The architect looks at both multiplication and downside."},
      {from:"This week, find one example of each type of leverage in your daily environment. Not from a textbook. From your actual life. Your home. Your school. Your taxi rank. For each one, identify BOTH the gift and the shadow — what is being multiplied for good, and what is being multiplied that might cause harm. Write down at least three examples.",to:"This week, find examples of leverage in your actual environment — home, school, kombi rank, market, workplace or community. For each, identify both the useful multiplier and the shadow: what could also be amplified if the design fails?"},
    ],
    tableReplacements:[
      {
        cellIncludes:"Save R10,000",
        rows:[
          ["Type","Without Leverage","With Leverage","Illustrative Example"],
          ["Financial","Use US$1,000 of your own capital","Control a US$5,000 project using US$1,000 of your own capital plus US$4,000 from another source","Returns and losses on your own capital can both be magnified"],
          ["Time","Repeat every task manually","Automate or delegate repeatable work","More capacity, but dependence on the process grows"],
          ["People","Do all work alone","Train and coordinate others","Output can grow; leadership and employment responsibilities also grow"],
          ["Systems","Reinvent every task","Use repeatable standards and checklists","Consistency improves if the system is well designed"],
          ["Technology","Manual records","Use appropriate digital tools","Speed increases, alongside privacy/platform/error risks"],
          ["Knowledge","Keep learning private","Document and teach","One insight can benefit many people"],
        ],
      },
    ],
  },
  "g11-t1-l05-005": {
    textReplacements:[
      {from:"Mr. Dlamini does not come to the classroom. He invites Myah, Thabo, and Lethabo to one of his properties — a small flat in Tembisa that he bought ten years ago.",to:"Mr. Dlamini does not come to the classroom. He invites Myah, Thabo and Lethabo to a small flat in Harare that he uses as a fictional case study for leverage maths."},
      {from:"\"Ten years ago, I had R100,000 saved. I could have bought one small property outright. R100,000 property, rent R1,000 per month. Not bad. But I did something different.\"",to:"\"For the lesson, imagine I had US$10,000 of my own capital. One option is to buy a US$10,000 asset without debt. Another is to use that US$10,000 as part of a larger financed purchase.\""},
      {from:"\"I used leverage. I put R100,000 as a deposit on a R500,000 property. Borrowed R400,000 from the bank. The rent is R5,000 per month. The bond payment is R4,000. I make R1,000 per month — same as the small property.\"",to:"\"In the fictional leveraged example, US$10,000 of my money plus US$40,000 borrowed controls a US$50,000 asset. Suppose net cash flow after the required finance payment and specified costs is US$100 a month. The numbers teach leverage mechanics; they are not current Zimbabwe mortgage terms.\""},
      {from:"\"But here is the magic: the property goes up in value. If it increases by 10%, that is R50,000. On my R100,000 investment, that is a 50% return.\"",to:"\"If the US$50,000 asset rises by 10%, its value rises by US$5,000 — 50% of the original US$10,000 equity before transaction costs, interest and tax. If it falls by 10%, the same leverage magnifies the loss. That is the point.\""},
      {from:"You have R50,000. You can buy a small business for R50,000 cash, or use leverage.",to:"For this fictional calculation, you have US$5,000. Compare an unleveraged purchase with a larger financed purchase."},
      {from:"Option A (No leverage): Buy business for R50,000 cash. Business earns R500/month profit. After one year, you sell for R55,000.",to:"Option A (No leverage): use US$5,000 cash. The business produces US$50/month and is later sold for US$5,500."},
      {from:"Total profit: R500 × 12 = R6,000 + R5,000 = R11,000",to:"Total illustrative profit: US$50 × 12 = US$600 plus US$500 capital gain = US$1,100 before tax/fees."},
      {from:"Option B (With leverage): Use R50,000 as deposit on R200,000 business. Borrow R150,000 at 10% interest. Business earns R2,000/month profit. After one year, you sell for R220,000.",to:"Option B (With leverage): use US$5,000 of your capital in a US$20,000 business and finance US$15,000 at a fictional 10% annual interest rate. The business produces US$200/month before finance cost and is later sold for US$22,000."},
      {from:"Monthly profit: R2,000 — loan interest (R150,000 × 10% ÷ 12 = R1,250) = R_______/month",to:"Monthly illustrative amount after interest only: US$200 − (US$15,000 × 10% ÷ 12 = US$125) = US$_______/month. Real finance agreements can include principal repayments and other costs."},
      {from:"Sale profit: R220,000 — R200,000 = R_______",to:"Illustrative asset-value increase: US$22,000 − US$20,000 = US$_______"},
      {from:"Return on your R50,000: _______%",to:"Return on your US$5,000 equity before all other costs: _______%"},
      {from:"Same Option B, but the business loses value. After one year, you sell for R160,000 (a 20% drop).",to:"Now change the assumption: the US$20,000 business falls 20% and is sold for US$16,000."},
      {from:"Sale loss: R200,000 — R160,000 = R_______",to:"Illustrative value loss: US$20,000 − US$16,000 = US$_______"},
      {from:"The Architect's Question: You calculated the loss scenario in Part C. If that loss happened to you — if your R50,000 became significantly less — could you survive it? What is your survival plan? If you do not have one, you are not ready for leverage.",to:"The Architect's Question: if the loss scenario happened, could you meet the debt obligation without sacrificing essential needs? If the answer is no, the downside is not survivable. Leverage should never be treated as free multiplication."},
    ],
    tableReplacements:[
      {
        cellIncludes:"Property value",
        rows:[
          ["","No leverage","With leverage — fictional maths"],
          ["Your money","US$10,000","US$10,000"],
          ["Asset value","US$10,000","US$50,000"],
          ["Illustrative 10% asset increase","+US$1,000","+US$5,000"],
          ["Increase relative to your starting equity","10%","50% before interest, fees, tax and other costs"],
          ["If the asset falls 10%","-US$1,000","-US$5,000 before other costs"],
        ],
      },
    ],
  },
  "g11-t1-l06-006": {
    title:"PROPERTY LEVERAGE — A FICTIONAL FINANCE CASE",
    textReplacements:[
      {from:"\"After five years, the property was worth R700,000. My equity: R700,000 — remaining bond (about R350,000) = R350,000. I turned R100,000 into R350,000 in five years. That is leverage.\"",to:"\"In a fictional scenario, suppose the US$50,000 asset later becomes worth US$70,000 while US$35,000 of the loan remains. Equity would be US$35,000. The lesson is how equity is calculated — not a promise that property rises at that rate.\""},
      {from:"\"But here is what most people do not tell you. The first R100,000 was the hardest. I did not have it. I borrowed R45,000 from a stokvel and saved the rest over three years. The first deposit is always the hardest. After that, you can use equity from one property to buy the next. The system feeds itself. But you have to get through the first one.\"",to:"\"And this is where leverage can become dangerous. Borrowing the deposit from a mukando, family member or another lender adds another obligation. You must count every debt, fee and repayment. Equity from one asset can sometimes support another transaction, but using it increases exposure if prices, income or interest costs move against you.\""},
      {from:"You want to buy a property for R600,000. You have R120,000 saved for a deposit (20%). Bond interest rate 9%, bond repayment about R4,300 per month. Expected rent R4,800 per month.",to:"Use this fictional simulator only: asset price US$60,000; your capital US$12,000; financed amount US$48,000; assumed repayment US$430/month; assumed rent US$480/month. These are teaching numbers, not Zimbabwe lender terms."},
      {from:"Monthly cash flow: R4,800 — R4,300 = R_______",to:"Illustrative cash flow before repairs, vacancies, tax, insurance and other costs: US$480 − US$430 = US$_______"},
      {from:"The Patience Test: Mr. Dlamini said the first deposit is the hardest. How long would it take you to save R120,000 at R500 per month? _______ months = _______ years.",to:"The Patience Test: how long would it take to save US$12,000 at US$50 per month? _______ months = _______ years. What would inflation, income changes or other priorities do to that plan?"},
      {from:"Key idea: Mr. Dlamini's first property required R100,000. He did not have it. He borrowed from a stokvel. He saved for three years. The paradox: property looks impossible until you break it into steps. First step: save R100. Second step: save R1,000. Third step: save R10,000. You do not need to buy a property tomorrow. You need to start saving for the deposit.",to:"Key idea: property leverage is not a learner recommendation. It is a way to understand debt, equity and amplified risk. A deposit does not remove risk; borrowing the deposit can compound it. Before any real property-finance decision, the current lender terms, affordability, legal documents, transaction costs, taxes, insurance, vacancy risk and maintenance all matter."},
      {from:"Question 3 — The Patience Diagnosis: You calculated how long it would take to save a R120,000 deposit. That is a long time. What is the MOST LIKELY reason you would give up before reaching that goal? What system, accountability, or rule could you put in place NOW to prevent that?",to:"Question 3 — The Patience Diagnosis: the simulator shows that large capital goals can take years. What would make you abandon a long-term goal, and what rule could help you review it without sacrificing essential needs?"},
      {from:"This week, create a \"Property Deposit Simulator.\" Choose a real property listed in your area (or nearby). Find out the price. Calculate the deposit (10% or 20%). Then calculate how long it would take you to save that deposit at R200/month, R500/month, and R1,000/month. Write down the numbers. Which savings rate is realistic for you? What would you have to give up to achieve it?",to:"This week, create a fictional Property Finance Simulator. Choose an imaginary asset price and test several equity contributions, loan amounts and repayment assumptions. Include at least maintenance, vacancy and interest-rate risk. The goal is maths and downside analysis — not shopping for a real loan."},
      {from:"If you cannot find a real property listing, use R500,000 as a sample. Do the same calculations. The purpose is not accuracy — it is to make the timeline real.",to:"Use US$50,000 as a fictional sample if you need a starting value. Label every assumption. The purpose is to understand leverage mechanics, not to predict property returns."},
    ],
    tableReplacements:[
      {
        cellIncludes:"Monthly bond payment",
        rows:[
          ["Item","Fictional Amount"],
          ["Asset price","US$50,000"],
          ["Your equity contribution","US$10,000"],
          ["Financed amount","US$40,000"],
          ["Illustrative monthly rent","US$500"],
          ["Illustrative monthly finance payment","US$400"],
          ["Cash flow before other costs","US$100"],
        ],
      },
      {
        cellIncludes:"usually 10–20%",
        rows:[
          ["Term","What It Means in the Lesson","Real-Life Check"],
          ["Asset price","The assumed purchase price","Actual negotiated price and transaction costs"],
          ["Equity contribution","Your own money in the transaction","Lender and deal-specific requirements"],
          ["Loan / finance","Money borrowed under an agreement","Current interest, fees, security, term and affordability"],
          ["Repayment","Amount due under the finance agreement","Actual contract, not a textbook estimate"],
          ["Rent / income","Money the asset may produce","Vacancy, collection and market risk"],
          ["Cash flow","Income minus all relevant costs","Include finance, maintenance, tax, insurance and vacancies"],
          ["Capital growth","Change in asset value","Never guaranteed"],
        ],
      },
    ],
  },
  "g11-t1-l07-007": {
    title:"CALCULATING LEVERAGE — THE MATH AT THE TUCKSHOP",
    textReplacements:[
      {from:"📘 The Math of Leverage — Mr. Dlamini at the Spaza Shop",to:"📘 The Math of Leverage — Mr. Dlamini at the Tuckshop"},
      {from:"Mr. Dlamini meets Myah and Thabo at Emmanuel's spaza shop. He has a napkin and a pen.",to:"Mr. Dlamini meets Myah and Thabo at Emmanuel's tuckshop. He has a napkin and a pen."},
      {from:"The spaza shop is quiet.",to:"The tuckshop is quiet."},
      {from:"Question 3 — The Memory Test: Emmanuel's mother said: \"Debt has a memory. It outlives the asset.\" What does this mean? If you borrowed R50,000 for an asset that later became worthless, how long would the debt remember you? What would you do?",to:"Question 3 — The Memory Test: Emmanuel's mother said, \"Debt has a memory. It can outlive the asset.\" What does this mean? In a fictional case, if you still owed US$5,000 after an asset became worthless, what obligations and options would you need to investigate?"},
    ],
    tableTextReplacements:[
      {from:"R100,000",to:"US$10,000"},
      {from:"R500,000",to:"US$50,000"},
      {from:"R50,000",to:"US$5,000"},
      {from:"R200,000",to:"US$20,000"},
      {from:"+R10,000",to:"+US$1,000"},
      {from:"+R20,000",to:"+US$2,000"},
      {from:"+R50,000",to:"+US$5,000"},
      {from:"-R10,000",to:"-US$1,000"},
      {from:"-R20,000",to:"-US$2,000"},
      {from:"-R50,000",to:"-US$5,000"},
    ],
  },
  "g11-t1-l08-008": {
    textReplacements:[
      {from:"\"Two years ago, I used leverage to buy shares. R5,000 of my own money, borrowed R5,000 from a family member. 2:1 leverage. The shares went up 20%. I made R2,000 on my R5,000 — a 40% return. I felt like a genius.\"",to:"\"Two years ago, in this cautionary story, I used US$500 of my own money and borrowed another US$500 from a family member to buy shares. That is 2:1 leverage. When the shares rose 20%, the US$1,000 position gained US$200 — a 40% gain on my own US$500 before costs. I felt like a genius.\""},
      {from:"He pauses. \"Then the shares went down. 30% drop. I lost R3,000 on my R5,000 — a 60% loss. I owed my family member money I did not have. I had to work extra shifts for three months to pay it back.\"",to:"He pauses. \"Then the shares fell 30%. The US$1,000 position lost US$300 — 60% of my own US$500. I still owed the family member the borrowed money. Leverage had multiplied the downside too.\""},
      {from:"Myah walks Themba to the taxi rank afterwards. Atlehang Ngwenya is there, waiting for his taxi. He is reading a book — something about business. He looks up as they approach.",to:"Myah walks Themba to the kombi rank afterwards. Atlehang Ngwenya is there, waiting for transport and reading a business book. He looks up as they approach."},
      {from:"\"You are Themba,\" he says. \"The one who lost R2,000 on shares.\"",to:"\"You are Themba,\" he says. \"The one who learned what leveraged losses feel like.\""},
    ],
    appendBlocks:[
      {kind:"text",type:"paragraph",text:"Safety note: borrowing to invest can create losses larger than the investor's own starting capital and still leave debt to repay. This lesson is a leverage-risk simulation, not a recommendation to borrow for shares or other investments."},
    ],
  },
  "g11-t1-l09-009": {
    textReplacements:[
      {from:"He sits at Emmanuel's spaza shop, head in his hands. Myah finds him there.",to:"He sits at Emmanuel's tuckshop, head in his hands. Myah finds him there."},
    ],
  },
  "g11-t1-l10-010": {
    title:"PEOPLE LEVERAGE — THABO BRINGS SOMEONE INTO THE BUSINESS",
    textReplacements:[
      {from:"📘 Thabo's Big Decision at the Spaza Shop",to:"📘 Thabo's Big Decision at the Tuckshop"},
      {from:"He sits with Myah and Emmanuel at the spaza shop, a notebook open.",to:"He sits with Myah and Emmanuel at the tuckshop, a notebook open."},
      {from:"You run a small business. You work 20 hours per week and earn R2,000. You could hire someone for R50/hour to do half your work (10 hours). You would pay R500/week. In your free 10 hours, you could earn an extra R800.",to:"In a fictional business example, you work 20 hours per week and generate US$200. You consider paying someone US$5/hour for 10 hours of work — US$50. If the freed 10 hours could generate another US$80, calculate the apparent financial difference, then list the costs and legal responsibilities the simple arithmetic leaves out."},
    ],
    tableReplacements:[
      {
        cellIncludes:"R1,200/week",
        rows:[
          ["Item","Current casual-help model","Proposed regular-worker model — illustrative"],
          ["Revenue","US$120/week","US$120/week before any growth"],
          ["Payments to helpers","US$60/week variable","US$80/week agreed wage"],
          ["Thabo's direct delivery time","15 hours","15 hours initially"],
          ["Potential free time","Limited","More time may become available for customers, training and supervision"],
          ["Hidden question","Unclear consistency","Can the business afford the worker once all obligations and slow weeks are counted?"],
        ],
      },
      {
        cellIncludes:"UIF",
        rows:[
          ["Responsibility","What It Means"],
          ["Pay fairly","Agree compensation clearly and pay on time"],
          ["Train well","Show the person how to do the work safely and correctly"],
          ["Supervise","Check quality and give useful feedback"],
          ["Respect","Treat workers with dignity"],
          ["Protect","Provide safe working conditions"],
          ["Follow current Zimbabwe law","Check contracts, tax/social-security and labour obligations that actually apply before treating someone as an employee"],
        ],
      },
    ],
  },
  "g11-t1-l12-012": {
    textReplacements:[
      {from:"Myah sees Atlehang Ngwenya at the taxi rank later. He is on his phone. She expects him to be scrolling. He is not. He is building a spreadsheet.",to:"Myah sees Atlehang Ngwenya at the kombi rank later. He is on his phone. She expects him to be scrolling. He is not. He is building a spreadsheet."},
      {from:"\"Inventory tracker. For my uncle's spaza shop. He still counts everything by hand. Takes him three hours every Sunday. I am building him something that will take ten minutes.\"",to:"\"Inventory tracker. For my uncle's tuckshop. He still counts everything by hand. It takes hours every week. I am building him something that should make the count faster — if the data is entered correctly.\""},
    ],
    tableReplacements:[
      {
        cellIncludes:"22seven",
        rows:[
          ["Tool Type","Examples","What It Can Do","Risk / Check"],
          ["Budgeting","Spreadsheet or budgeting app","Track spending and categories","Privacy, data quality, fees"],
          ["Saving","Bank or regulated savings app","Schedule or track transfers","Provider legitimacy and account terms"],
          ["Investing","Appropriately regulated broker or investment platform available in Zimbabwe","Access suitable securities or funds","Verify SEC Zimbabwe / relevant regulator status, fees and risk"],
          ["Learning","Videos, courses, podcasts, official guidance","Expand knowledge","Source quality and outdated information"],
          ["Communication","WhatsApp, email templates","Reach people quickly","Privacy, professionalism and scams"],
          ["Organisation","Calendars, reminders, task tools","Reduce forgetting","Dependence on a device or platform"],
          ["Business","Design, accounting or marketing tools","Systemise repeatable work","Subscription cost, data ownership, accuracy"],
        ],
      },
    ],
  },
  "g11-t1-l13-013": {
    textReplacements:[
      {from:"Myah has been keeping notebooks since Grade 9. Three years of learning. Three years of capturing. Three years of connecting.",to:"Myah has been keeping notebooks since Form 2. Years of learning, capturing and connecting."},
      {from:"Grade 9: Values. Enterprise. The grant office. Mama Rose. Mrs. Nkosi. The cooler box. \"Business is people.\" \"The system does not reward rule-followers. It rewards visibility.\"",to:"Form 2: Values. Enterprise. The committee office. Mama Rose. Mrs. Nkosi. The cooler box. Learning that business is people, evidence and action."},
      {from:"Grade 10: Compound interest. Gogo Maria's worn piece of paper. Systems. Tax. Retirement. Insurance. \"Money is a tool. Life is the project.\"",to:"Form 3 Terms 1–2: Compound growth. Gogo Maria's table. Systems. Zimbabwe tax literacy. Retirement layers. Insurance. \"Money is a tool. Life is the project.\""},
      {from:"Grade 11: Leverage. Mr. Dlamini's properties. Mr. Patel's four rules. Themba's risk lesson. \"Control what you can control.\"",to:"Form 3 Term 3: Leverage. Mr. Dlamini's fictional leverage maths. Mr. Patel's systems. Themba's risk lesson. \"Control what you can control.\""},
      {from:"\"But here is the thing,\" Myah says. \"I do not just write things down. I review them. Every Sunday. I look for patterns. I connect ideas across years. Grade 9's 'visibility' connects to Grade 10's 'marketing' connects to Grade 11's 'leverage.' They are the same idea, deepening over time.\"",to:"\"But here is the thing,\" Myah says. \"I do not just write things down. I review them. I look for patterns across Forms and terms. Enterprise connects to marketing; systems connect to leverage; leadership connects to all of them. The ideas deepen over time.\""},
      {from:"At the taxi rank later, Myah sees Atlehang Ngwenya sitting on the queue marshal's bench. He has a notebook too — smaller than hers, worn at the edges.",to:"At the kombi rank later, Myah sees Atlehang Ngwenya sitting on the rank marshal's bench. He has a notebook too — smaller than hers, worn at the edges."},
      {from:"What is one idea from Grade 9 or 10 that I still use today? _________________________________",to:"What is one idea from Form 2 or earlier in Form 3 that I still use today? _________________________________"},
      {from:"The Architect's Question: You have been learning Applied Commerce for three years. If you had to teach the single most important lesson you have learned to a Grade 8 learner — in five minutes — what would you say?",to:"The Architect's Question: if you had five minutes to teach the most important Applied Commerce lesson you have learned to a Form 1 learner, what would you say?"},
      {from:"Question 2: What is one idea from Grade 9 or 10 that you still use today? What is one idea from this year that connects to something you learned earlier?",to:"Question 2: What is one idea from Form 2 or earlier in Form 3 that you still use? What idea from this term connects to it?"},
      {from:"Question 3 — The Five-Minute Test: You have five minutes to teach the single most important lesson from three years of Applied Commerce to a Grade 8 learner. What do you say? Write it. Then deliver it to someone this week. The act of teaching is the act of compounding.",to:"Question 3 — The Five-Minute Test: you have five minutes to teach one important Applied Commerce lesson to a Form 1 learner. Write it, then deliver it to someone if appropriate. Teaching exposes whether you really understand."},
      {from:"If there is no one to teach, create a one-page resource — a simple explanation of one concept from this course. Write it as if you were teaching a Grade 9 learner. The act of writing is teaching.",to:"If there is no one to teach, create a one-page explanation of one concept for a Form 2 learner. The act of writing is also a test of understanding."},
    ],
  },
  "g11-t1-l14-014": {
    textReplacements:[
      {from:"Question 2: What is one combination of leverage types that could help you with your post-matric goals? Explain how they would work together. What is the shadow of that combination?",to:"Question 2: What combination of leverage types could help with your Form 4 and post-O-Level goals? Explain how they work together and what downside the combination could amplify."},
    ],
  },
  "g11-t1-l15-015": {
    textReplacements:[
      {from:"Ms. Daniels gathers everyone at the community hall. The same hall where they presented their Financial Independence Plans in Grade 10. But everything feels different now. They are older. They know more. They have built more.",to:"Ms. Daniels gathers everyone at the community hall. The same hall where they presented their Financial Independence Plans earlier in Form 3. The learners have more evidence now — and new questions."},
      {from:"\"This term, we have explored leverage — financial, time, people, systems, technology, knowledge. You found leverage at the taxi rank. You calculated ratios with Mr. Dlamini. You learned risk from Themba. You built systems with Mr. Patel. Now it is your turn to create a plan.\"",to:"\"This term, we have explored financial, time, people, systems, technology and knowledge leverage. You found leverage at the kombi rank. You calculated fictional ratios with Mr. Dlamini. You learned downside risk from Themba. Now it is your turn to create a plan.\""},
    ],
  },
  "g11-t1-l19-019": {
    textReplacements:[
      {from:"Emmanuel presents. Systems + Technology leverage for the spaza shop. Inventory tracking. Customer loyalty program via WhatsApp. His Reality Check: If stockouts happen more than twice in a month after the system is live, the system is broken.",to:"Emmanuel presents. Systems + Technology leverage for the tuckshop. Inventory tracking. Customer loyalty via WhatsApp. His Reality Check: if stockouts happen more than twice in a month after the system is live, the system needs revision."},
      {from:"Sipho presents. This is the same Sipho who had no goals in Grade 8. Who failed at selling sweets. Who cut up his credit card. Who built a bicycle repair business from nothing. His plan: People + Systems leverage. Train a second repair person. Create a repair manual. His Reality Check: If my trainee cannot complete a basic puncture repair after two weeks of training, my manual is not clear enough. His shadow: What if I train someone who leaves and becomes my competitor? The answer is not to stop training. The answer is to treat them so well they do not want to leave.",to:"Sipho presents. This is the same Sipho who had no goals in Form 1, who failed at selling sweets and later built a repair business from small tests. His plan: People + Systems leverage. Train a second repair person and create a repair manual. His Reality Check: if the trainee cannot safely complete a basic puncture repair after two weeks of training, the training system needs revision. His shadow: a trained person may leave or become a competitor. The answer is not to avoid training; it is to build a fair relationship and a resilient business."},
      {from:"Themba joins via video call from university. \"The leverage plan I wrote in Grade 11? I still use it. I update it every year. It is not a school project. It is a life tool.\"",to:"Themba joins via video call. \"The leverage plan I wrote as a learner? I still use the logic. I update it as my circumstances change. A useful school project can become a life tool when you keep reviewing it.\""},
      {from:"\"Thabo, you learned that letting go is not losing. Lethabo, you learned that one tutorial, recorded once, can teach for years. Myah, you learned that the architect's work is building structures that outlast you. Sipho — you had no goals in Grade 8. Now you have a leverage plan with Managing the Downside. That is not just progress. That is proof.\"",to:"\"Thabo, you learned that letting go is not losing. Lethabo, you learned that one tutorial can teach more than one person. Myah, you learned that architecture means structures that can work beyond one moment. Sipho — you had no goals in Form 1. Now you have a leverage plan with Managing the Downside. That is evidence of growth.\""},
      {from:"Question 3 — The Sipho Mirror: Sipho had no goals in Grade 8. Now he has a leverage plan. What version of yourself — from an earlier grade — would be most surprised by the plan you presented today? What would that younger you say?",to:"Question 3 — The Sipho Mirror: Sipho had no goals in Form 1. Now he has a leverage plan. What earlier version of yourself would be most surprised by the plan you presented today? What would that younger you say?"},
    ],
  },
  "g11-t1-l20-020": {
    title:"LEVERAGE CYCLE REFLECTION & PORTFOLIO CHECKPOINT",
    textReplacements:[
      {from:"Lesson 3: Her post-matric vision. Atlehang's insight: All the pieces are one thing.",to:"Lesson 3: Her Form 4 and post-O-Level vision. Atlehang's insight: the pieces may share a connecting capability."},
      {from:"Lesson 4: The taxi rank. Finding all six levers — and their shadows — in one place.",to:"Lesson 4: The kombi rank. Finding all six levers — and their shadows — in one place."},
      {from:"From me, in Grade 11 Date: _____________________",to:"From me, in Form 3 Term 3 — after the Leverage Cycle Date: _____________________"},
      {from:"You have completed Term 1 of Grade 11.",to:"You completed the Leverage Cycle of Form 3 Term 3. The term continues with leadership, responsibility and your Leadership Philosophy."},
    ],
    tableReplacements:[
      {
        cellIncludes:"post-matric vision",
        rows:[
          ["Lessons","What We Learned"],
          ["1–4","Leverage mindset, six types, Form 4/post-O-Level vision and shadow assessment"],
          ["5–8","Financial leverage maths, property case simulation, ratios, risk and downside"],
          ["9–10","Time leverage, delegation and people leverage with employment responsibilities"],
          ["11–13","Systems, technology and knowledge leverage"],
          ["14","Integration — the Leverage Matrix"],
          ["15–19","Leverage Plan project: design, feedback, refinement and presentations"],
          ["20","Leverage Cycle reflection and portfolio checkpoint"],
        ],
      },
    ],
  },
  "g11-t2-l23-023": {
    textReplacements:[
      {from:"Myah sits with her notebooks from Grade 9 to now. She traces her leadership journey — not the title, but the reality.",to:"Myah sits with her notebooks from Form 2 to now. She traces her leadership journey — not the title, but the reality."},
      {from:"Grade 9: The grant office. She walked in and demanded answers. That was not just persistence. That was leadership — advocating for herself when the system gave her silence. She started the water project at the taxi rank. She had to organise, ask permission, talk to people. She did not think of it as leadership then. But it was.",to:"Form 2: The committee office. She asked for answers when the system gave her silence. She tested the water project at the kombi rank, organised, asked permission and spoke to people. She did not think of it as leadership then, but it was early evidence."},
      {from:"Grade 10: She partnered with Thabo on the delivery service. Learned to share decisions, trust someone else, resolve disagreements. She created her Financial Independence Plan. She ran her first workshop — just five people, just one hour, recorded on her phone. The smallest test from her Leverage Plan. It worked.",to:"Form 3 Terms 1–2: she partnered with Thabo, learned to share decisions and resolve disagreements, built a Financial Independence Plan and tested a small workshop. Leadership was becoming less about doing everything herself and more about creating conditions for useful work."},
      {from:"Grade 11 Term 1: She created her Leverage Plan. The Knowledge + Technology combination. The architect's vision. She learned that leadership is not just guiding others — it is designing structures that guide others even when you are not there.",to:"Form 3 Term 3 — Leverage Cycle: she created her Leverage Plan using knowledge and technology. She learned that leadership is not only guiding people in the moment; it can also mean designing structures that help good work continue when she is not there."},
    ],
  },
  "g11-t2-l26-026": {
    textReplacements:[
      {from:"Lethabo sat with that. He found Sipho at the spaza shop the next day. He apologized. \"I should have talked to you privately. I should have asked what was going on. Can we start again?\"",to:"Lethabo sat with that. He found Sipho at the tuckshop the next day. He apologised. \"I should have talked to you privately. I should have asked what was going on. Can we start again?\""},
    ],
  },
  "g11-t2-l27-027": {
    title:"DIFFICULT CONVERSATIONS — THABO'S TEST AT THE TUCKSHOP",
    textReplacements:[
      {from:"📘 Thabo's Difficult Conversation at the Spaza Shop",to:"📘 Thabo's Difficult Conversation at the Tuckshop"},
      {from:"He talks to Myah at Emmanuel's spaza shop.",to:"He talks to Myah at Emmanuel's tuckshop."},
      {from:"At the taxi rank the next morning, Myah sees Thabo. He looks different. Lighter.",to:"At the kombi rank the next morning, Myah sees Thabo. He looks different. Lighter."},
    ],
  },
  "g11-t2-l28-028": {
    title:"DECISION-MAKING UNDER PRESSURE — EMMANUEL'S TUCKSHOP EMERGENCY",
    textReplacements:[
      {from:"📘 Emmanuel's Emergency at the Spaza Shop",to:"📘 Emmanuel's Emergency at the Tuckshop"},
      {from:"Emmanuel is alone at the spaza shop. His mother is at a funeral. The delivery of bread did not arrive. Regular customers are waiting. Some are getting angry.",to:"Emmanuel is alone at the tuckshop. His mother is at a funeral. The bread delivery did not arrive. Regular customers are waiting. Some are getting angry."},
    ],
  },
  "g11-t2-l29-029": {
    textReplacements:[
      {from:"📘 Thandi's Challenge at the Taxi Rank",to:"📘 Thandi's Challenge at the Kombi Rank"},
    ],
  },
  "g11-t2-l30-030": {
    title:"LEADING THROUGH CHANGE — THE TUCKSHOP TRANSFORMS",
    textReplacements:[
      {from:"The mall is expanding. A new supermarket is opening even closer to Emmanuel's spaza shop. The family has been in Katlehong for 15 years. His mother built this business from nothing. And now, it feels like everything is threatened.",to:"The shopping centre is expanding. A new supermarket is opening even closer to Emmanuel's tuckshop. The family has served its Chitungwiza community for 15 years. His mother built the business from very little, and now the change feels threatening."},
    ],
  },
  "g11-t2-l32-032": {
    textReplacements:[
      {from:"Story 1 — Leading Myself: \"In first year, I had no structure. No one telling me what to do. I nearly failed my first semester. Not because I was not smart enough. Because I was not leading myself. Then I remembered the 21-day tracker from Grade 9. I started tracking again — not a habit, but my time. I built a schedule. My marks improved. Not because I got smarter. Because I started leading myself.\"",to:"Story 1 — Leading Myself: \"In first year, I had no structure. No one telling me what to do. I nearly failed my first semester. Not because I was not smart enough, but because I was not leading myself. Then I remembered the 21-day tracker from Form 2. I started tracking again — this time, my use of time. I built a schedule. My marks improved because my system improved.\""},
    ],
  },
  "g11-t2-l33-033": {
    textReplacements:[
      {from:"My core values (from Grade 9, updated): _________________________________",to:"My core values (from Form 2, updated with new evidence): _________________________________"},
    ],
  },
  "g11-t2-l34-034": {
    title:"LEGAL & ETHICAL RESPONSIBILITY IN LEADERSHIP",
    textReplacements:[
      {from:"Fiduciary duty: \"If you manage money for others — a cooperative, a business, even a family stokvel — you have a legal duty to act in their best interest. Not yours. Theirs.\"",to:"Advocate Mkhize says: \"When you manage money, property or decisions for other people — in a business, cooperative, mukando or another formal relationship — legal and contractual duties may apply. Do not assume the same duty applies in every arrangement. Understand the agreement, the current Zimbabwe law and whose interests you are required to protect.\""},
      {from:"This week, find one contract or agreement in your home or community — a lease, a cellphone contract, a stokvel agreement. Read it. Write down: What is the agreement? Who is bound by it? What happens if someone breaks it? Is it fair?",to:"This week, find one agreement you are allowed to read — for example a lease extract, service contract or mukando/savings-group agreement. Identify: who is bound, what each side promises, what happens if someone breaches it, and which terms you do not understand. Do not share private account or identity details."},
      {from:"If you cannot find a contract, write a simple contract for a hypothetical agreement — for example, lending R500 to a friend. Include: Who is involved? What are the terms? What happens if someone does not fulfil their part?",to:"If you cannot find an agreement, write a fictional agreement outline for a classroom example — for instance, lending US$50. Include the parties, amount, repayment date, what happens if circumstances change, and questions that would need legal advice. Do not treat the worksheet as a legally sufficient contract."},
    ],
    appendBlocks:[
      {kind:"text",type:"paragraph",text:"Zimbabwe legal-safety note: duties can depend on the legal structure, contract, statute and facts. This lesson teaches the habit of reading obligations and seeking qualified advice; it does not create a legal opinion for a real business, cooperative or savings group."},
    ],
  },
  "g11-t2-l35-035": {
    textReplacements:[
      {from:"\"And here is what makes this different from the Grade 10 project,\" she adds. \"In Grade 10, you wrote about leadership principles. In Grade 11, you must ground every principle in your OWN experience — the specific moments, the specific people, the specific failures and recoveries that shaped how you lead. This philosophy must sound like YOU. Not like a textbook. Not like a motivational poster. Like you.\"",to:"\"And here is what makes this different from the earlier Form 3 projects,\" she adds. \"This time, every leadership principle must be grounded in your own evidence — specific moments, people, failures, recoveries and choices that shaped how you lead. It must sound like you, not like a motivational poster.\""},
    ],
    tableTextReplacements:[
      {from:"from Grade 9, updated",to:"from Form 2, updated with new evidence"},
    ],
  },
  "g11-t2-l36-036": {
    textReplacements:[
      {from:"After the workshop, Myah walks home. At the taxi rank, Atlehang Ngwenya is sitting on the queue marshal's bench, writing in his notebook.",to:"After the workshop, Myah walks home. At the kombi rank, Atlehang Ngwenya is sitting on the rank marshal's bench, writing in his notebook."},
    ],
  },
  "g11-t2-l37-037": {
    textReplacements:[
      {from:"Atlehang presents. Her philosophy: Notice what others miss. The quietest person in the room often has the most important thing to say. My job as a leader is to create the conditions for them to say it. She tells the story of her question in Grade 9 — \"Did you ask them why?\" — and how that single question changed Myah's trajectory.",to:"Atlehang presents. Her philosophy: Notice what others miss. The quietest person in the room may have something important to say. My job as a leader is to create the conditions for them to say it. She tells the story of her Form 2 question — \"Did you ask them why?\" — and how that question changed Myah's next move."},
      {from:"\"This philosophy was not written in a day. It was written over three years. In the grant office. At Mama Rose's kitchen. In the taxi rank. In workshops with five people and a phone camera. It is not finished. It will grow as I grow. But it is mine. And I know who I am becoming.\"",to:"\"This philosophy was not written in a day. It was written across experiences — the committee office, Mama Rose's kitchen, the kombi rank, small workshops and difficult conversations. It is not finished. It will grow as I grow. But it is mine, and I know who I am becoming.\""},
    ],
  },
  "g11-t2-l38-038": {
    textReplacements:[
      {from:"Sipho stands up. This is the same Sipho who had no goals in Grade 8. Who failed at selling sweets. Who cut up his credit card. Who built a bicycle repair business from nothing. His philosophy: I lead by showing up. By failing and not quitting. By proving that the person who starts with nothing can build something — and then help others do the same. He tells his story — the melted sweets, the lost R50, the credit card, the bicycle repair. \"I am not the leader I thought I would be. I am the leader I became by not giving up. That is my philosophy. It is not fancy. But it is real. And it is mine.\"",to:"Sipho stands up. This is the same Sipho who had no goals in Form 1, failed at selling sweets and built a bicycle-repair business through repeated learning. His philosophy: I lead by showing up, learning from failure and helping others build capability too. He tells the story of the melted sweets and the illustrative US$5 loss. \"I am not the leader I imagined. I am the leader I became by learning, restarting and showing up. It is not fancy. But it is mine.\""},
    ],
  },
  "g11-t2-l39-039": {
    textReplacements:[
      {from:"Lesson 30: Leading through change. The spaza shop transforms. Acknowledge the loss before the vision.",to:"Lesson 30: Leading through change. The tuckshop transforms. Acknowledge the loss before the vision."},
    ],
  },
  "g11-t2-l40-040": {
    title:"FORM 3 FINAL PORTFOLIO & LETTER TO FUTURE SELF",
    textReplacements:[
      {from:"From me, in Grade 11 Date: _____________________",to:"From me, at the end of Form 3 Date: _____________________"},
      {from:"You have completed Term 2 of Grade 11.",to:"You have completed Form 3 Term 3 — and the full Form 3 Applied Commerce year."},
    ],
    appendBlocks:[
      {kind:"text",type:"section",text:"Looking Ahead to Form 4 — The O-Level Launch Year"},
      {kind:"text",type:"paragraph",text:"Form 4 is next. Applied Commerce will move into advanced wealth, growth and legacy, then the adult money, work, contracts, risk and life-launch decisions that sit around the end of O-Level. Carry forward your Leverage Plan, Leadership Philosophy and Form 3 evidence. They are inputs to the launch year — not finished answers."},
    ],
  },
  "g11-t3-l41-041": {
    textReplacements:[
      {from:"\"I am 74 now. I have my pension — R2,000 a month. I still help at the stokvel. I still do piece jobs. By the measure of money, I am not wealthy. I never have been.\"",to:"\"I am 74 now. I have a modest pension income. I still help with our mukando. I still do occasional paid work. By the measure of money alone, I am not wealthy. I never have been.\""},
      {from:"\"But let me tell you what I do have. I have children who call me every week. I have grandchildren who sit at this table and ask me questions about life. I have a community of women in my stokvel who have known me for forty years — who brought food when my husband died, who prayed with me, who held me up when I could not stand.\"",to:"\"But let me tell you what I do have. I have children who call me every week. I have grandchildren who sit at this table and ask me questions about life. I have a community of women in my mukando who have known me for forty years — who brought food when my husband died, who prayed with me, who held me up when I could not stand.\""},
      {from:"Key idea: Gogo Maria has no money to leave her children. But she has relational wealth — children who call, grandchildren who ask questions, a community that held her up when she could not stand. The paradox: the things that matter most cannot be measured in rands. But they are the foundation of everything.",to:"Key idea: Gogo Maria may not have a large financial estate, but she has relational wealth — children who call, grandchildren who ask questions, and a community that held her up when she could not stand. The things that matter most cannot all be measured in money, but they shape the life that money is meant to support."},
      {from:"Question 2: Gogo Maria lives on R2,000 a month. Is she wealthy? Defend your answer using the five forms of wealth. What does your answer reveal about your own definition of wealth?",to:"Question 2: Gogo Maria lives on a modest pension income. Is she wealthy? Defend your answer using the five forms of wealth. What does your answer reveal about your own definition of wealth?"},
    ],
  },
  "g11-t3-l42-042": {
    title:"ADVANCED INVESTING — ZINHLE'S RETURN",
    textReplacements:[
      {from:"Zinhle is 23 now. She qualified as an accountant last year. She works at a firm in Johannesburg, but she still comes back to Tembisa on weekends to see her family — and to eat at Mama Rose's kitchen.",to:"Zinhle is 23 now. She qualified as an accountant last year. She works at a firm in Harare, but she still comes back to Chitungwiza on weekends to see her family — and to eat at Mama Rose's kitchen."},
      {from:"\"You know the basics of investing from Grade 10,\" Zinhle says, stirring her tea. \"Savings accounts. Fixed deposits. Retail bonds. Unit trusts. ETFs. But now you need the advanced version. The version that helps you build real wealth over decades.\"",to:"\"You know the basics of investing from Form 3,\" Zinhle says, stirring her tea. \"Savings and fixed-term deposits. Collective investment schemes. ETFs and other regulated securities. Now you need the advanced version: how the pieces work together over decades.\""},
      {from:"\"This is not the portfolio I had at 18. At 18, I had R200 a month going into a TFSA and that was it. This portfolio grew as I grew. Your portfolio should match your life stage, your goals, your risk tolerance.\"",to:"\"This is not the portfolio I had at 18. At 18, I was contributing a small amount to one regulated investment product. The portfolio grew as I grew. Your portfolio should match your life stage, goals, liquidity needs and risk tolerance.\""},
      {from:"Myah studies the numbers. \"What about rebalancing? You said in Grade 10 that portfolios get out of balance.\"",to:"Myah studies the numbers. \"What about rebalancing? You said in Form 3 that portfolios can drift away from their intended allocation.\""},
      {from:"This week, research one asset class you did not fully understand before this lesson — REITs, ETFs, retail bonds, or alternatives. Find out: What is it? How do you invest in it from South Africa? What is the minimum investment? What are the fees? Write down your findings. Then decide: would you include this asset class in your portfolio? Why or why not?",to:"This week, research one regulated asset class or collective investment option you did not fully understand before this lesson — for example an ETF, unit trust, money-market fund, bond fund or listed property exposure. Check whether the provider or market participant is regulated in Zimbabwe, the minimum investment, fees, liquidity and risks. Then decide whether it fits a hypothetical portfolio and explain why."},
    ],
    tableReplacements:[
      {
        cellIncludes:"Top 40 JSE",
        rows:[
          ["Asset Class","Illustrative Percentage","What It Is","Why It Might Be Included"],
          ["Equities / equity funds","55%","Shares or diversified funds holding shares","Long-term growth potential; prices can fall sharply"],
          ["Listed property / property funds","15%","Regulated exposure to property-linked assets","Income/growth potential without directly managing a tenant"],
          ["Fixed income","15%","Government or corporate debt through regulated instruments/funds","Income and lower volatility than equities in many conditions"],
          ["Cash / money market","10%","Highly liquid savings or regulated money-market exposure","Emergency and short-term liquidity"],
          ["Higher-risk alternatives","5%","Only where lawful, understood and suitable","Small allocation because loss risk can be high"],
        ],
      },
      {
        cellIncludes:"Bonds, retail bonds",
        rows:[
          ["Class","What It Is","Typical Risk","Return Potential","Useful For"],
          ["Equities / ETFs","Shares or diversified baskets of shares","Medium–High","Higher over long periods, but volatile","Long-term growth"],
          ["Listed property / property funds","Property-linked securities or funds","Medium","Medium–High","Diversification and property exposure"],
          ["Fixed income","Bonds and regulated fixed-income funds","Low–Medium","Low–Medium","Income, stability and medium-term goals"],
          ["Cash / money market","Savings and regulated money-market products","Low","Low","Emergency fund and short-term goals"],
          ["Higher-risk alternatives","Specialised assets that require strong due diligence","High–Very High","Uncertain","Only a small portion for investors who understand the risks"],
        ],
      },
    ],
  },
  "g11-t3-l43-043": {
    title:"PROPERTY INVESTMENT DEEP DIVE — CASH FLOW, RISK & TAX",
    tableReplacements:[
      {
        cellIncludes:"R450,000",
        rows:[
          ["Item","Illustrative Amount"],
          ["Purchase price","US$45,000"],
          ["Deposit","US$4,500 (partly supported by a family/mukando arrangement)"],
          ["Financing","US$40,500 — illustrative only; actual lending terms must be checked"],
          ["Monthly rent","US$450"],
          ["Monthly finance cost","US$380"],
          ["Rates/levies/other recurring property costs","US$60"],
          ["Maintenance provision","US$30"],
          ["Monthly cash flow","-US$20 in the early period"],
          ["Later illustrative property value","US$75,000"],
          ["Illustrative remaining finance balance","US$31,000"],
          ["Illustrative equity","US$44,000"],
          ["Later rent","US$600"],
          ["Later monthly cash flow","+US$90"],
        ],
      },
      {
        cellIncludes:"R600,000",
        rows:[
          ["Item","Illustrative Amount"],
          ["Purchase price","US$60,000"],
          ["Deposit","US$12,000"],
          ["Later illustrative value","US$85,000"],
          ["Illustrative equity","US$48,000"],
        ],
      },
      {
        cellIncludes:"R750,000",
        rows:[
          ["Item","Illustrative Amount"],
          ["Purchase price","US$75,000"],
          ["Deposit","US$15,000"],
          ["Later illustrative value","US$90,000"],
          ["Illustrative equity","US$37,000"],
        ],
      },
      {
        cellIncludes:"R550,000",
        rows:[
          ["Item","Illustrative Amount"],
          ["Purchase price","US$55,000"],
          ["Deposit (10%)","US$5,500"],
          ["Financing","US$49,500 — use an illustrative repayment supplied by your teacher"],
          ["Monthly finance cost","US$430"],
          ["Monthly rent","US$500"],
          ["Rates/levies/other recurring costs","US$50"],
          ["Maintenance provision","US$30"],
        ],
      },
    ],
    textReplacements:[
      {from:"He points. The entry reads: \"Bond: R3,800. Rent: R3,200 (tenant late). Rates: R600. Maintenance: R850 (geyser). Mom's stokvel payout: R500. My contribution: R2,550. Total shortfall I had to cover: R2,550. Ate pap for two weeks. Borrowed R500 from my uncle. Told no one.\"",to:"He points. The entry reads: \"Loan payment: US$380. Rent received: US$320 (tenant late). Property charges: US$60. Maintenance: US$85. Family mukando payout available this month: US$50. My own cash contribution to cover the gap: US$155. I had underestimated the risk, and the shortfall affected the rest of my budget.\""},
      {from:"\"The first three years, this property cost me money every month. Negative cash flow. I had to pay R200 from my own pocket just to keep it. My friends thought I was crazy. My family told me to sell. But I held on. Why? Because I knew rents would rise. And they did. Year four, cash flow turned positive. Patience. That is the part nobody tells you about property. Patience.\"",to:"\"The first three years, this property cost me money every month. In this illustration I had to add about US$20 from my own pocket just to keep it. Holding it was not automatically wise — it only made sense because I had a buffer, a long-term thesis and a plan for maintenance, vacancy and financing risk. Later the cash flow improved. Property requires patience, but patience without numbers is not a strategy.\""},
      {from:"Total equity across three properties: R1,290,000",to:"Illustrative total equity across the three properties: US$129,000"},
      {from:"\"Started with R45,000 borrowed from a stokvel. Now have nearly R1.3 million in equity. That is the power of leverage plus patience. But it took ten years. And there were months I did not sleep. Property is not a get-rich-quick scheme. It is a get-wealthy-slowly strategy.\"",to:"\"I started with a relatively small deposit, including support from a community-savings arrangement, and built equity over years. That is the potential power of leverage — but also the risk. There were months I struggled. Property is not automatically a path to wealth. The financing, vacancy, maintenance, tax and legal costs all matter.\""},
      {from:"Monthly cash flow: R5,000 — R4,300 — R500 — R300 = R_______",to:"Monthly cash flow in this illustration: US$500 − US$430 − US$50 − US$30 = US$_______"},
      {from:"Rental yield: R60,000 ÷ R550,000 = _______%",to:"Gross annual rental yield in this illustration: US$6,000 ÷ US$55,000 = _______%"},
      {from:"Here’s the tension: not everyone can survive three years of negative cash flow. If you are living month to month, if R200 a month is the difference between eating and not eating, you cannot afford to hold a negative-cash-flow property. The people who need property wealth the most are often the least able to survive the waiting period. That is not a character flaw. That is math.",to:"Here’s the tension: not everyone can survive prolonged negative cash flow. If even US$20 a month would threaten essential needs in this illustration, a negative-cash-flow property is not affordable. Access to deposits, financing and buffers is unequal. That is not a character flaw. It is a resource constraint."},
      {from:"Question 3 — The Survival Diagnostic: You calculated the cash flow for a R550,000 property. Now answer honestly: could YOU survive the negative cash flow? If yes, for how long? What is your buffer? If no, what would need to change in your financial situation before property investing becomes realistic? Be specific.",to:"Question 3 — The Survival Diagnostic: Using the US$55,000 illustrative property, could you survive a period of negative cash flow? What buffer would be needed for vacancy, repairs and financing costs? What would need to change before direct property investing became realistic?"},
      {from:"If you cannot research actual properties, use the R550,000 example from Activity 43. But personalize it: How long would it take YOU to save the R55,000 deposit at your current savings rate? Write down the number of months. Let it sink in.",to:"If you cannot research actual properties, use the US$55,000 illustrative example from Activity 43. How long would it take to build a US$5,500 deposit at different monthly saving rates? Then add a separate buffer for legal, tax, vacancy and maintenance costs. Keep the exercise illustrative rather than treating the example as a market price."},
    ],
    appendBlocks:[
      {kind:"text",type:"paragraph",text:"Zimbabwe check: buying, selling or renting property can involve taxes, legal/transfer costs and other obligations. Capital Gains Tax can apply to specified assets, and rental-related rules can change. Before treating any property calculation as real, verify current ZIMRA guidance and obtain appropriate legal/financial advice."},
    ],
  },
  "g11-t3-l44-044": {
    textReplacements:[
      {from:"Ms. Nkosi invites Myah, Thabo, and Lethabo back to her logistics company. This time, they are in her office — a small room with a large map of Gauteng on the wall, covered in pins and routes.",to:"Ms. Nkosi invites Myah, Thabo and Lethabo back to her logistics company. This time, they are in her office — a small room with a large map of Harare and surrounding routes on the wall, covered in pins."},
      {from:"\"Then I moved to market development — same service, new customers. I expanded to new areas. Soweto. Alexandra. Further into the East Rand. Same trucks, same systems, new geography.\"",to:"\"Then I moved to market development — same service, new customers. I expanded to new areas around Harare and then into nearby towns. Same core systems, new geography.\""},
      {from:"Think of a business you know — Thabo's delivery service, Lethabo's clocks, Emmanuel's spaza shop. Which growth strategy are they using? Which should they use next?",to:"Think of a business you know — Thabo's delivery service, Lethabo's clocks, Emmanuel's tuckshop. Which growth strategy are they using? Which option might they test next, and what evidence would they need first?"},
    ],
  },
  "g11-t3-l45-045": {
    textReplacements:[
      {from:"Stage 3: The Ads Mistake (Age 18–19) \"I tried Facebook ads. Spent R2,000. Made R800 back. I did not understand targeting, copywriting, or analytics. I just boosted posts and hoped. Hope is not a strategy. I lost R1,200 and learned that marketing is a skill.\"",to:"Stage 3: The Ads Mistake (Age 18–19) \"I tried paid social ads. In this illustration I spent US$200 and made US$80 back. I did not understand targeting, copywriting or analytics. I just boosted posts and hoped. Hope is not a strategy. I lost US$120 and learned that marketing is a skill.\""},
      {from:"Stage 6: The System (Now) \"I created templates for every message. I batch-process orders twice a week. I spend five hours a week on the business. It earns R1,500 a month. Not a fortune. But it runs without me. That is the goal. Not to be the engine. To design the engine.\"",to:"Stage 6: The System (Now) \"I created templates for recurring messages. I batch-process orders twice a week. I spend about five hours a week on the business. In this illustration it earns US$150 a month. Not a fortune. But the point is that the system carries more of the routine work. The goal is not to be the engine forever. It is to design the engine.\""},
    ],
  },
  "g11-t3-l46-046": {
    tableReplacements:[
      {
        cellIncludes:"Online store",
        rows:[
          ["Stream","Type","Illustrative Monthly Amount","Scalable?","Notes"],
          ["Online store","Active/systemised","US$150","Yes","Three products, systems in place"],
          ["Tutoring","Active","US$80","Limited by time","Five students in this example"],
          ["Savings / investment income","Portfolio","US$6","Depends on capital","Varies with product and return"],
          ["Digital study guide","Digital product","US$40","Potentially","Created once, still requires platform/marketing"],
          ["Freelance graphic design","Active","US$100","Limited by time","Project-based and irregular"],
        ],
      },
      {
        cellIncludes:"Start with active income",
        rows:[
          ["Step","What to Do","Example"],
          ["1. Start with active income","Build capital and skills","Part-time work or freelancing"],
          ["2. Save and invest","Use suitable regulated products","Savings, collective investments, pension products where appropriate"],
          ["3. Create a reusable product","Make once, sell more than once","Study guide, template or course"],
          ["4. Systemise a business","Document, automate and delegate","Online store with repeatable processes"],
          ["5. Reinvest profits","Build additional capability/assets","More tools, products, investments or people"],
        ],
      },
    ],
    textReplacements:[
      {from:"Total: R3,760 per month",to:"Illustrative total: US$376 per month"},
      {from:"\"The study guide is my best lever. I spent 30 hours creating it two years ago. I have not updated it since. It still sells — maybe five copies a month. That is R400 for zero ongoing work. If I created two more guides, that could be R1,200 a month. If I marketed them properly, more. That is the power of scalable streams. Work once. Earn many times.\"",to:"\"The study guide is my best lever. I spent 30 hours creating it two years ago. It still sells about five copies a month — roughly US$40 in this example. It is not truly 'zero work': platforms, updates, support and marketing still matter. But one piece of work can serve more than one customer. That is the leverage.\""},
      {from:"Key idea: Themba's study guide took 30 hours to create. Two years later, it still sells. R400 a month for zero ongoing work. The paradox: the most scalable streams require the most upfront work. But once they are built, they run without you. Work once. Earn many times.",to:"Key idea: Themba's study guide took 30 hours to create. Two years later, it still sells. In this illustration it produces about US$40 a month while requiring much less time than one-to-one work. Scalable streams often require substantial upfront work and ongoing maintenance, but one unit of effort can serve many customers."},
    ],
  },
  "g11-t3-l47-047": {
    title:"TAX-AWARE WEALTH BUILDING — ZIMBABWE RULES CHANGE",
    tableReplacements:[
      {
        cellIncludes:"Retirement annuity",
        rows:[
          ["Term","Definition"],
          ["Tax efficiency","Arranging finances lawfully while understanding tax consequences"],
          ["Pension / retirement product","A regulated long-term retirement arrangement whose rules depend on the product and current law"],
          ["Capital Gains Tax","Tax that can apply to gains on specified assets under Zimbabwe law"],
          ["Tax evasion","Illegally hiding income, assets or transactions to avoid tax"],
        ],
      },
      {
        cellIncludes:"Annual Limit",
        rows:[
          ["Area","Zimbabwe Learning Rule","What to Verify"],
          ["Employment / business income","Understand what income is taxable and what records are required","Current ZIMRA rules and thresholds"],
          ["Retirement saving","Compare regulated pension or retirement arrangements","IPEC-regulated provider, product rules, fees and current tax treatment"],
          ["Investment income","Different products can have different tax consequences","Current ZIMRA treatment and provider disclosures"],
          ["Property / securities gains","Capital Gains Tax may apply to specified assets","Current ZIMRA CGT rules before a real transaction"],
          ["Deductions / allowances","Only claim what current law actually permits","Current official guidance or a qualified tax practitioner"],
        ],
      },
      {
        cellIncludes:"Invest R36,000/year",
        rows:[
          ["Strategy","Without Planning","With Tax-Aware Planning","Lesson"],
          ["Long-term investing","Choose products only for headline returns","Compare return, fees, liquidity, regulation and tax treatment","After-tax outcomes matter"],
          ["Retirement saving","Ignore employer/pension arrangements until later","Understand the regulated retirement options available to you","Rules and access restrictions matter"],
          ["Property / securities disposal","Assume the sale price is fully yours","Plan for possible CGT and transaction costs","A gain can create a tax obligation"],
        ],
      },
      {
        cellIncludes:"TFSA lifetime limit",
        rows:[
          ["Rule","Zimbabwe Form 4 Approach"],
          ["Tax rates and thresholds","Do not memorise an old number; check the latest ZIMRA source"],
          ["Retirement product rules","Check the regulated product/provider and current withdrawal/tax rules"],
          ["Capital gains","Check whether the asset is a specified asset and what current CGT rules apply"],
          ["Property","Include tax, legal and transaction costs before calling an investment profitable"],
          ["Record keeping","Keep evidence for income, expenses, acquisition cost and other allowable deductions"],
        ],
      },
      {
        cellIncludes:"When I Could Start",
        rows:[
          ["Vehicle / Area","When I Could Use It","Illustrative Contribution","What I Must Verify"],
          ["Emergency / short-term savings","","","Access, fees and currency risk"],
          ["Regulated collective investment","","","SECZ-regulated provider/product, fees and risk"],
          ["Pension / retirement product","","","IPEC-regulated provider, product rules and current tax treatment"],
          ["Direct securities / listed funds","","","Market, broker, fees, liquidity and tax treatment"],
        ],
      },
    ],
    textReplacements:[
      {from:"\"Here is the durable lesson: two investments with the same headline return can produce different after-tax outcomes. Instead of copying a South African product rule, compare the Zimbabwe products actually available to you, their regulation, fees, liquidity and current tax treatment.\"",to:"\"Here is the durable lesson: two investments with the same headline return can produce different after-tax outcomes. Instead of copying another country’s product rules, compare the Zimbabwe products actually available to you, their regulation, fees, liquidity and current tax treatment.\""},
      {from:"\"Retirement products have their own contribution, access and tax rules. Do not assume an arrangement works like a South African RA. Check the regulated Zimbabwe product, the provider, fees, access rules and current tax treatment before relying on any benefit.\"",to:"\"Retirement products have their own contribution, access and tax rules. Do not assume one pension or retirement arrangement works like another. Check the Zimbabwe-regulated product, provider, fees, access rules and current tax treatment before relying on any benefit.\""},
      {from:"\"I made a mistake with tax when I started working,\" she adds. \"I did not open an RA. I thought I was too young. For three years, I paid full tax on my full income. No deductions. Nothing. I lost about R18,000 in tax refunds I could have received. Plus the compound growth on the RA contributions I did not make. Over 30 years, that three-year delay will cost me hundreds of thousands. Not because I did not have the money. Because I did not know the rules.\"",to:"\"I made a mistake when I started working,\" she adds. \"I ignored retirement planning because I thought I was too young. I also assumed I understood the tax treatment without checking the current rules. The cost was not one dramatic mistake. It was years of delayed saving and decisions made without evidence. That is why I now verify the rule first, then choose the product.\""},
      {from:"\"That is why I am telling you now. Not when you are 25 and already working. Now. So you know. The TFSA. The RA. The interest exemption. The capital gains exclusion. These are not details. They are hundreds of thousands of rand — compounded over decades — that you either keep or lose based on whether you know the rules.\"",to:"\"That is why I am telling you now. Learn the categories before you need them: income tax, capital-gains rules, regulated pension products, collective investments, fees, access restrictions and record-keeping. The exact thresholds and tax treatment can change. Knowing where to verify them is part of financial capability.\""},
      {from:"\"Tax is the single biggest cost most people never think about. Not because they evade it. Because they do not plan for it. The difference between someone who plans for tax and someone who does not can be hundreds of thousands of rand over a lifetime — completely legally.\"",to:"\"Tax can materially change a long-term financial result. The point is not to evade tax. It is to understand the rules, keep proper records and make decisions using after-tax numbers instead of pretending tax does not exist.\""},
      {from:"Tax-Efficient Vehicles in South Africa",to:"Tax-Aware Wealth Building in Zimbabwe"},
      {from:"\"Here is how it adds up. Imagine you invest R3,000 a month — R36,000 a year — for 20 years at 8% growth. In a normal taxable account, you would pay tax on the interest, dividends, and capital gains. In a TFSA, you pay nothing. Nothing. Over 20 years, the difference could be hundreds of thousands of rand. That is not evasion. That is using the system exactly as it was designed — to encourage saving and investing.\"",to:"\"Here is the durable lesson: two investments with the same headline return can produce different after-tax outcomes. Instead of copying a South African product rule, compare the Zimbabwe products actually available to you, their regulation, fees, liquidity and current tax treatment.\""},
      {from:"\"The RA is different. You get a tax deduction NOW for contributions. If you earn R200,000 and contribute R20,000 to an RA, you are taxed as if you earned R180,000. The government is effectively paying you to save for retirement. Why? Because they do not want to support you when you are old. Take the deal.\"",to:"\"Retirement products have their own contribution, access and tax rules. Do not assume an arrangement works like a South African RA. Check the regulated Zimbabwe product, the provider, fees, access rules and current tax treatment before relying on any benefit.\""},
      {from:"Myah writes in her notebook: Tax efficiency is not evasion. It is using the system as designed. TFSA = tax-free growth. RA = tax deduction now. Both are gifts from a government that does not want to support you in old age. Take the gifts. But know the rules. Zinhle's three-year delay cost her hundreds of thousands. Do not repeat her mistake.",to:"Myah writes in her notebook: Tax planning is not tax evasion. Good planning begins with the current law, proper records, regulated products and after-tax comparisons. Never build a long-term plan around a tax rule you have not verified."},
      {from:"Tax Efficiency = TFSA + RA + Legal Deductions",to:"Tax-Aware Planning = Current Rules + Records + Regulated Products + Legal Deductions"},
      {from:"The Reality Check: If I am not using a TFSA by age 25, why not? What is the real reason — lack of money, lack of knowledge, or something else?",to:"The Reality Check: By age 25, do I understand the regulated saving/investment and retirement options available to me, or am I avoiding the research? What is the real reason?"},
      {from:"The Architect's Question: If you were designing a tax-efficiency plan for someone you love — someone who earns the same as you will likely earn — what would you tell them to prioritize? TFSA or RA? Why? Are you willing to follow your own advice?",to:"The Architect's Question: If you were designing a tax-aware plan for someone you love, what would you tell them to verify before choosing a saving, investment or retirement product? Are you willing to follow the same discipline?"},
      {from:"Question 1: What is a TFSA? What are its limits? Why would the government create such an account? How does an RA reduce tax? Use an example to explain.",to:"Question 1: What makes tax planning different from tax evasion? Name two Zimbabwe financial or investment decisions where current tax treatment should be checked before acting."},
      {from:"Question 3 — The Tax Efficiency Audit: Imagine you are 25, earning R15,000 per month. You have R2,000 per month to invest. How would you allocate it between TFSA, RA, and other investments to maximize tax efficiency? Show your allocation and explain your reasoning.",to:"Question 3 — The Tax-Aware Audit: Imagine you are 25 and have US$200 per month available to save or invest. Design an illustrative allocation across emergency savings, regulated long-term investments and retirement saving. Explain what current Zimbabwe tax/product rules you would need to verify before making it real."},
      {from:"This week, research the current TFSA and RA limits for the current tax year. Have they changed from the numbers in this lesson? Write down the current limits. Then calculate: If you maxed your TFSA every year from age 20 to age 30 (R36,000 per year at 8% growth), how much would you have, tax-free, at 30? At 50?",to:"This week, use official Zimbabwe sources to research one current tax rule affecting investments, property or retirement saving. Record the source and date. Then explain why a rule verified today should still be checked again before a future real transaction."},
      {from:"If you cannot research online, ask someone who invests: \"Do you use a TFSA or RA? Why or why not? What do you wish you had known about tax when you were my age?\" Write down their answers.",to:"If you cannot research online, ask a financially experienced adult what regulated saving, investment or pension products they use and which tax or access rules they had to understand. Treat their answer as experience, not as legal or financial advice."},
    ],
    appendBlocks:[
      {kind:"text",type:"paragraph",text:"Zimbabwe check: use current ZIMRA guidance for tax and official regulator/provider information for financial products. Rates, thresholds and product rules can change, so the learner skill is verification, not memorising a copied foreign rule."},
    ],
  },
  "g11-t3-l48-048": {
    textReplacements:[
      {from:"Question 3 — The Protection Gap Analysis: Look at your Protection Audit. Which gap is largest? If that risk materialized tomorrow, what would happen — specifically, in rands, in relationships, in lost opportunities? Now write: what is the ONE protection action you will take THIS YEAR, and by what date?",to:"Question 3 — The Protection Gap Analysis: Look at your Protection Audit. Which gap is largest? If that risk materialised tomorrow, what would happen — in money, relationships and lost opportunities? What is the ONE protection action you will take this year, and by what date?"},
    ],
  },
  "g11-t3-l49-049": {
    title:"IMPACT INVESTING — PURPOSE, EVIDENCE & GREENWASHING",
    textReplacements:[
      {from:"Mr. Patel nods. \"I turned down a contract because the company was corrupt. Your money is a vote. Every rand you spend, save, or invest is a vote for the kind of world you want. The question is whether you will vote intentionally — or just let the market decide for you.\"",to:"Mr. Patel nods. \"I turned down a contract because the company was corrupt. Your money carries consequences. Every amount you spend, save or invest supports something. The question is whether you will investigate those consequences — or ignore them.\""},
      {from:"Zinhle adds: \"There are practical ways. ESG funds. Green bonds. Community investment notes. You can start small. R500 a month in an ESG fund. It is not perfect — greenwashing is real, and you have to do your research. But it is better than doing nothing. It is better than pretending your money has no impact.\"",to:"Zinhle adds: \"There are investment products that claim environmental or social objectives. Some are credible and some are mostly marketing. Before investing, check whether the product and provider are regulated, what the mandate actually requires, the fees, holdings, reporting and the evidence behind the impact claim.\""},
      {from:"Myah writes in her notebook: Every rand is a vote. Impact investing = profit + purpose. Not either/or. Both/and. The architect's question: what kind of world am I building with my money?",to:"Myah writes in her notebook: Money has consequences. Impact investing asks whether financial goals and social or environmental goals can be pursued together — without pretending the trade-offs or greenwashing risk disappear."},
      {from:"Every Rand = A Vote",to:"Every Investment Has Consequences"},
      {from:"Impact Investing Options in South Africa",to:"Impact-Investing Research Categories"},
      {from:"Mr. Patel said: \"Every rand is a vote.\" What kind of world am I voting for with my money — right now, with the money I already have? _________________________________",to:"Mr. Patel said money has consequences. What consequences am I already supporting with the money I spend, save or invest? _________________________________"},
      {from:"The Architect's Question: What is one small step you could take toward impact investing — even with R100, even with just research — this year? What would it mean to take that step?",to:"The Architect's Question: What is one small step you could take toward impact-aware investing — even if the step is only research — this year? What evidence would you need before putting money at risk?"},
      {from:"Question 2: What is your Red Line — one thing you will never invest in, no matter what? Why did Mr. Patel say \"every rand is a vote\"? What are you voting for with your money?",to:"Question 2: What is your Red Line — one thing you would not knowingly invest in? Why? How would you verify whether a fund or company crosses that line?"},
      {from:"Question 3 — The Impact Trade-Off: You have R10,000 to invest. Option A: a conventional fund with expected returns of 10% per year, but it includes companies involved in fossil fuels and poor labour practices. Option B: an ESG fund with expected returns of 7% per year, aligned with your values. Which do you choose? Defend your answer. What do you gain? What do you sacrifice?",to:"Question 3 — The Impact Trade-Off: You have an illustrative US$1,000 to invest. Option A has a higher expected return but includes holdings that conflict with your stated values. Option B has a lower expected return and stronger stated impact criteria. What further information would you need before choosing? Then make and defend a decision."},
      {from:"This week, research ONE ESG fund or green bond available in South Africa. Find out: What does it invest in? What does it screen out? What is the minimum investment? What are the fees? What has been its historical return? Write down your findings. Then decide: would you invest in it? Why or why not?",to:"This week, research ONE impact-oriented or sustainability-labelled investment accessible through a regulated Zimbabwe provider or market. Find out what it invests in, the regulator/provider, minimum, fees, liquidity, historical performance and evidence behind the impact claim. Then decide whether you would investigate it further and why."},
    ],
    tableReplacements:[
      {
        cellIncludes:"ESG-focused unit trusts",
        rows:[
          ["Research Category","Questions to Ask"],
          ["ESG / sustainability fund","What is screened in or out? Is the methodology public?"],
          ["Green or thematic bond","Who issued it? What use-of-proceeds rules apply?"],
          ["Community / development investment","How are returns and impact measured? What is the risk?"],
          ["Crowdfunded or private project","Is it lawful and regulated where required? What protections exist?"],
          ["Any impact claim","What evidence exists beyond marketing language?"],
        ],
      },
    ],
  },
  "g11-t3-l50-050": {
    title:"GLOBAL INVESTING — DIVERSIFICATION & CURRENCY RISK",
    textReplacements:[
      {from:"\"I made my first offshore investment in 2010,\" he adds. \"I put R50,000 into a US index fund. The rand was at R7 to the dollar. Within six months, the rand strengthened to R6.50. My investment lost value in rand terms — even though the US fund had grown. I panicked. I nearly sold.\"",to:"\"My first global investment taught me that investment return and currency return are different things,\" he adds. \"The fund rose in its home currency, but when I translated the value back into the currency I was using for my goals, the exchange-rate movement reduced the gain. I panicked. I nearly sold.\""},
      {from:"\"I called my accountant. He said: 'Did you invest for six months or for twenty years?' I said twenty years. He said: 'Then stop checking the exchange rate every day. Currency moves. Over twenty years, it will move both ways. The trend is what matters.' I stopped checking. I held on. That R50,000, invested in 2010, is now worth over R400,000 in rand terms — because the rand weakened over time and the US market grew. But I almost missed it because I was watching the daily noise instead of the long-term trend.\"",to:"\"I called my adviser. He asked: 'Did you invest for six months or for many years?' My answer was many years. He reminded me that exchange rates move in both directions and that a long-term plan should not be rewritten because of one short period of currency movement. I stopped treating every exchange-rate move as a signal to trade.\""},
      {from:"Here’s the tension: offshore investing feels abstract. You cannot visit the companies. You cannot drive past the properties. And Mr. Patel almost sold when the rand moved against him — because he was watching the daily noise instead of the long-term trend. Offshore investing requires a different kind of patience: the patience to ignore currency fluctuations for decades.",to:"Here’s the tension: global investing can feel abstract. You may not see the companies or assets around you, and currency movements can make a good underlying investment look worse—or better—when translated into the currency of your goals. Diversification does not remove currency risk. It means understanding that asset performance and exchange-rate movement are separate forces."},
      {from:"Question 3 — The Currency Scenario: You invest R10,000 in a US ETF. The rand is at R18 to the dollar. A year later, your investment has grown 8% in dollar terms, but the rand has strengthened to R16 to the dollar. What is your investment worth in rands? Have you gained or lost? What does this teach you about currency risk?",to:"Question 3 — The Currency Scenario: An overseas investment grows 8% in its home currency, but the currency you use for your own goals strengthens by 10% against that home currency. Without using a live exchange rate, explain why your return after conversion could be lower than 8%. What does this teach you about currency risk?"},
      {from:"This week, research the rand/dollar exchange rate over the past 10 years. Find a graph or a table. Write down: What was the rate 10 years ago? What is it now? If you had invested R10,000 in a US asset 10 years ago, and it grew 8% per year in dollar terms, what would it be worth in rands today?",to:"This week, use an official or reputable source to examine how one exchange rate relevant to Zimbabwe has moved over time. Record the dates and currencies clearly. Then explain how the same global investment could produce different results depending on the exchange rate when money was invested and when it was converted back."},
      {from:"Identify ways to invest globally from South Africa.",to:"Identify regulated ways a Zimbabwe investor may obtain global exposure, subject to current exchange-control, provider and tax rules."},
      {from:"\"South Africa is a small part of the world economy. Less than 1%. If you only invest here, you are missing 99% of the world's opportunities. And you are taking on unnecessary risk — because if the South African economy struggles, everything you own struggles with it.\"",to:"\"Zimbabwe is one part of a much larger world economy. Global diversification can reduce dependence on one country, one currency and one set of industries. It does not remove risk; it changes the mix of risks you carry.\""},
      {from:"He spins the globe. \"Offshore investing is not about betting against South Africa. It is about not putting all your eggs in one basket.\"",to:"He spins the globe. \"Global investing is not a rejection of Zimbabwe. It is a diversification decision. Do not put every long-term asset in one market or one currency without understanding the concentration risk.\""},
      {from:"1. Access to global companies: \"Apple. Amazon. Toyota. Alphabet. Companies that do not list on the JSE.\"",to:"1. Access to global companies and industries: international markets can provide exposure to businesses and sectors not available on local exchanges."},
      {from:"2. Currency protection: \"If the rand weakens — which it has done, on average, over decades — your offshore investments are worth more in rand terms. It is a hedge. Not a guarantee.\"",to:"2. Currency diversification: assets denominated in different currencies can change your exposure to local-currency movements. This is not a guaranteed hedge; exchange rates can move in either direction."},
      {from:"Ways to Invest Offshore from South Africa",to:"Ways to Research Global Exposure from Zimbabwe"},
      {from:"Research one way to invest offshore from South Africa.",to:"Research one regulated way a Zimbabwe investor might obtain global exposure. Check the provider, regulation, fees, liquidity, currency conversion, tax and any current exchange-control rules."},
      {from:"Mr. Patel said: \"Offshore investing is not betting against South Africa. It is not putting all your eggs in one basket.\" What does this mean to you? _________________________________",to:"Mr. Patel said global investing is about diversification rather than rejecting your home country. What does that mean to you? _________________________________"},
      {from:"Key idea: Mr. Patel invests offshore not because he distrusts South Africa. Because he does not put all his eggs in one basket. The paradox: the people who only invest locally are taking a huge risk without knowing it.",to:"Key idea: global exposure can reduce concentration in one country, currency or market. But international investing introduces its own costs, regulation, tax and currency risks. Diversification is not the same as safety."},
    ],
    tableReplacements:[
      {
        cellIncludes:"Local ETFs with global exposure",
        rows:[
          ["Method","How It Might Work","What to Verify"],
          ["Locally accessible regulated fund with global assets","A Zimbabwe-regulated collective investment or listed product may hold foreign assets","Regulator, mandate, fees, liquidity and currency exposure"],
          ["Authorised platform / broker with foreign-market access","Direct or indirect access to international securities","Licensing, custody, FX rules, fees and tax"],
          ["Foreign-currency account","Holds currency rather than an investment asset by itself","Bank rules, fees, interest and purpose"],
          ["Employer or pension arrangement with foreign exposure","A regulated fund may diversify internationally","Product mandate, regulator, costs and access rules"],
        ],
      },
      {
        cellIncludes:"If Rand Strengthens",
        rows:[
          ["If Your Home Currency Strengthens","If Your Home Currency Weakens"],
          ["Foreign assets may be worth less when translated back, all else equal","Foreign assets may be worth more when translated back, all else equal"],
          ["Imports and foreign travel may become relatively cheaper","Imports and foreign travel may become relatively more expensive"],
        ],
      },
    ],
  },
  "g11-t3-l51-051": {
    textReplacements:[
      {from:"TFSA",to:"regulated long-term investments"},
      {from:"\"Values. The values I defined in Grade 9. They have not changed. They have just been tested.\"",to:"\"Values. The values I defined in Form 2. They have not disappeared. They have been tested and refined.\""},
    ],
  },
  "g11-t3-l52-052": {
    tableTextReplacements:[
      {from:"TFSA, RA, deductions, planning",to:"Current Zimbabwe tax rules, regulated pension/investment products, lawful deductions and planning",exact:true},
      {from:"Rand hedge",to:"Currency hedge",exact:true},
      {from:"Investment that protects against rand weakness",to:"Investment or strategy intended to reduce exposure to adverse currency moves",exact:true},
      {from:"TFSA, RA, other vehicles, annual tax planning",to:"current Zimbabwe tax rules, regulated investment/retirement options, annual review"},
    ],
  },
  "g11-t3-l53-053": {
    tableReplacements:[
      {
        cellIncludes:"EasyEquities",
        rows:[
          ["Area","Research Needed","Findings"],
          ["Regulated collective investments","Providers, fees, minimums, liquidity","Use SECZ/provider information; record current findings"],
          ["Retirement / pension products","Provider, contributions, fees, access rules","Use IPEC/provider information; record current findings"],
          ["Impact-oriented investments","Mandate, evidence, fees, regulation","Verify claims and regulator/provider"],
          ["Listed property / property funds","Market availability, fees, liquidity, risks","Use current regulated market information"],
          ["Digital products","Platforms, payment costs, customer access","Compare terms and economics"],
        ],
      },
      {
        cellIncludes:"TFSA provider",
        rows:[
          ["Area","Options","My Choice","Why?"],
          ["Savings / emergency account","","",""],
          ["Regulated collective investment","","",""],
          ["Retirement / pension product","","",""],
          ["Investment platform / broker","","",""],
          ["Impact-oriented option, if suitable","","",""],
          ["Property exposure, if suitable","","",""],
        ],
      },
    ],
    textReplacements:[
      {from:"She uses these to build realistic projections. \"If I max my TFSA from age 20 to 30 — R36,000 a year at 8% growth — that is about R560,000, tax-free. If I add an RA from 25, even R500 a month, that adds another R100,000 by 30. These are real numbers. Not wishes. Math.\"",to:"She uses the research to build scenarios rather than promises. \"I can model an illustrative monthly contribution and growth rate, but I cannot call the result tax-free or guaranteed unless the current Zimbabwe product rules actually say so. The math matters. So do fees, tax, inflation, liquidity and regulation.\""},
      {from:"At the back of the hall, Atlehang Ngwenya is working alone. He is not researching investments. He is building a spreadsheet — the inventory tracker for his uncle's spaza shop, the one Myah saw at the taxi rank weeks ago. It has grown. More columns. More formulas. More data.",to:"At the back of the hall, Atlehang Ngwenya is working alone. He is not researching investments. He is building a spreadsheet — the inventory tracker for his uncle's tuckshop, the one Myah saw near the kombi rank weeks ago. It has grown. More columns. More formulas. More data."},
    ],
  },
  "g11-t3-l54-054": {
    textReplacements:[
      {from:"Investments: TFSA maxed by 22. RA from 20. ESG funds from 20.",to:"Investments: emergency liquidity first; regulated long-term investments from early adulthood; retirement/pension saving when income and product rules make it suitable; impact-oriented options only after due diligence."},
      {from:"Tax: TFSA, RA. Annual review with a tax practitioner from first job.",to:"Tax: verify current ZIMRA rules annually and use regulated products; obtain qualified advice when the plan becomes real or complex."},
      {from:"Protection: Emergency fund R10,000 by 22. Income protection insurance from first job.",to:"Protection: build an emergency fund target in a clearly labelled currency; review appropriate insurance as income and responsibilities grow."},
      {from:"Myah had assumed 10 people per workshop at R200 each. She revises: 5 people. R100 each. More conservative. More honest.",to:"Myah had assumed 10 people per workshop at US$20 each in an illustrative model. She revises to 5 people at US$10 each. More conservative. More honest."},
      {from:"Lethabo: \"Your property timeline has physical property at 28. Have you checked deposit requirements? R500,000 property needs R50,000–R100,000 deposit. Can you save that by 28?\"",to:"Lethabo: \"Your property timeline has direct property at 28. Have you checked the deposit, financing, legal, tax and maintenance requirements in the market you are actually considering? Can your savings realistically cover both the deposit and a buffer?\""},
      {from:"Myah runs the numbers. At R1,000 a month from age 22, plus investment growth, she could have about R85,000 by 28. Tight. She adds a contingency: if deposit is short, delay property by one year or use REITs as bridge.",to:"Myah runs several illustrative savings scenarios. The deposit looks possible only under some assumptions. She adds a contingency: if the buffer or financing conditions are not strong enough, delay direct property and keep building diversified assets rather than forcing the timeline."},
    ],
  },
  "g11-t3-l55-055": {
    textReplacements:[
      {from:"Zinhle came from Johannesburg.",to:"Zinhle came from Harare."},
      {from:"Thabo presents first. His plan: grow the delivery service into a full logistics company by 25. Hire three employees. Buy two vehicles — one with a loan, one with savings. Invest 15% of profits into a TFSA and RA. Protection: business insurance, life insurance from 25. Impact: free deliveries for pensioners. His Reality Check: \"If the business is not generating R10,000 a month by age 22, I need to either change the business model or get a formal job to supplement. I will not drift.\"",to:"Thabo presents first. His plan: grow the delivery service into a logistics company, hire and train carefully, and invest a portion of profits through suitable regulated products. Protection: business insurance and other cover as responsibilities justify it. His Reality Check: \"If the business has not reached the operating target in my plan by the review date, I need to change the model or add another income source. I will not drift.\""},
      {from:"Lethabo presents. His plan: scale clock-making into a small manufacturing business. Digital products — a \"Make Your Own Reminder Clock\" kit. REITs from 20. RA from 22. Impact: teach free workshops to youth. His Reality Check: \"If I have not launched the digital product by the end of Grade 12, I need to ask myself what I am afraid of.\"",to:"Lethabo presents. His plan: scale clock-making into a small manufacturing business, create a digital kit, build diversified investments and teach free workshops to younger people. His Reality Check: \"If I have not tested the digital product by the end of Form 4, I need to identify whether the barrier is skill, evidence, resources or fear.\""},
      {from:"Nosipho presents. Her plan: teaching career, side tutoring business, investments in TFSA and RA. Property by 30. Impact: free tutoring for disadvantaged students — one afternoon a week. Her Reality Check: \"If my tutoring business is not generating R2,000 a month by age 25, I need to either raise my rates or find a different side stream.\"",to:"Nosipho presents. Her plan: teaching, a side tutoring business, regulated investments and a possible property goal only when the numbers are strong enough. Impact: free tutoring for learners who need support. Her Reality Check: \"If the tutoring business is not reaching the target in my plan by the review date, I need to revisit pricing, demand or the business model.\""},
      {from:"\"My Reality Check for the workshops: If I have not run at least one paid workshop by the end of Grade 12, I am letting fear of failure stop me. Fear is not a strategy.\"",to:"\"My Reality Check for the workshops: if I have not tested at least one paid workshop by the end of Form 4, I need to identify the real blocker. Fear is not a strategy, but neither is acting without evidence.\""},
    ],
  },
  "g11-t3-l56-056": {
    textReplacements:[
      {from:"Emmanuel presents. Spaza shop transformation — delivery service, cooperative buying, loyalty system. Investments from 22. Property by 30. His Reality Check: \"If the shop is not profitable enough to support investments by age 25, I need to either change the business model or start a second income stream. Nostalgia is not a strategy.\"",to:"Emmanuel presents. Tuckshop transformation — delivery service, cooperative buying and a loyalty system. Investments when cash flow supports them; direct property only when the numbers and buffer are strong enough. His Reality Check: \"If the shop is not profitable enough to support reinvestment by the review date, I need to change the model or add another income stream. Nostalgia is not a strategy.\""},
      {from:"Sipho stands up. This is the Sipho — melted sweets, credit card, bicycle repair. His plan: grow the repair business into a small workshop. Hire and train two mechanics by 25. Invest 10% of profits into a TFSA. His Reality Check: \"If I have not hired my first employee by age 22, I am still trying to do everything myself. That is not a business. That is a job with extra steps.\" His shadow: \"I know what it feels like to be invisible. Every person I hire, I will see. Every person I train, I will remember what it felt like when no one saw me.\"",to:"Sipho stands up. This is the Sipho of the melted sweets and bicycle repair. His plan: grow the repair business into a small workshop, hire and train carefully, and invest a portion of profits through suitable regulated products. His Reality Check: \"If I have not built the first repeatable role by the review date, I am still trying to do everything myself.\" His shadow: \"I know what it feels like to be invisible. Every person I hire, I will see.\""},
      {from:"\"You are not drifting. You are designing. Thabo, your plan is about community. Lethabo, yours is about passing on skills. Myah, yours is about education that transforms. Sipho — you had no goals in Grade 8. Now you have a wealth plan with a Reality Check and a shadow that honors where you came from. That is not just progress. That is proof.\"",to:"\"You are not drifting. You are designing. Thabo, your plan is about community. Lethabo, yours is about passing on skills. Myah, yours is about education that transforms. Sipho — you had no clear goals in Form 1. Now you have a wealth plan with a Reality Check and a shadow that honours where you came from. That is proof of growth.\""},
    ],
  },
  "g11-t3-l57-057": {
    textReplacements:[
      {from:"I started this term thinking wealth was about accumulation. I am ending knowing it is about integration. Building. Protecting. Aligning. All of it serving a vision. I have a 10-year plan. Not a wish. A plan — with Reality Checks, with impact priorities, with protection, with Managing the Downside. I am not just building wealth. I am building a life. I am ready for Term 4.",to:"I started this learning cycle thinking wealth was about accumulation. I am ending knowing it is about integration: building, protecting and aligning resources with a vision. I have a 10-year plan with Reality Checks, impact priorities, protection and downside management. I am ready to move into the legacy cycle that completes Form 4 Term 1."},
      {from:"9. The 1-10 Scale: At the start of the term, you were a \"1\" on the wealth literacy scale. Where are you now, honestly? What is the exact number? What is the ONE specific thing you need to do in Term 4 to move up by a single point?",to:"9. The 1-10 Scale: Where were you on the wealth-literacy scale at the start of this cycle, and where are you now? What is ONE specific thing you need to do during the legacy cycle to move up by a single point?"},
      {from:"Question 2: How has your understanding of wealth changed since Lesson 41? Where are you on the 1-10 wealth literacy scale? What is the ONE thing you need to do in Term 4 to move up by a single point?",to:"Question 2: How has your understanding of wealth changed since Lesson 41? Where are you on the 1-10 wealth-literacy scale? What is ONE thing you need to do during the legacy cycle to move up by a single point?"},
      {from:"| Date | | | Lesson | Lesson 57 — Term 3 Reflection | | Experiment/Observation | I reflected on my entire Term 3 journey. | | Design Decision | | | Prediction | | | Result | My wealth literacy number: ___ / 10 | | Learning | | | Next Action | The one thing I will do in Term 4: |",to:"| Date | | | Lesson | Lesson 57 — Advanced Wealth Reflection | | Experiment/Observation | I reflected on my advanced-wealth learning cycle. | | Design Decision | | | Prediction | | | Result | My wealth literacy number: ___ / 10 | | Learning | | | Next Action | The one thing I will do in the legacy cycle: |"},
      {from:"Lesson 47: Tax efficiency. Zinhle's R18,000 mistake. \"Start early.\"",to:"Lesson 47: Tax-aware planning. Zinhle's lesson: verify the rules, keep records and plan using after-tax numbers."},
      {from:"Lesson 49: Impact investing. Thandiwe's recycling business. Every rand is a vote.",to:"Lesson 49: Impact investing. Money has consequences; impact claims need evidence."},
    ],
  },
  "g11-t3-l59-059": {
    title:"LETTER TO MY FUTURE SELF — FORM 4 WEALTH CHECKPOINT",
    textReplacements:[
      {from:"📂 Portfolio: Keep this letter somewhere safe. Read it at the end of Term 4.",to:"📂 Portfolio: Keep this letter somewhere safe. Read it at the end of Form 4 Term 1."},
      {from:"I am writing this at the end of Term 3, Grade 11. I am 17. I have built a 10-Year Wealth Plan. Not a wish. A plan — with Reality Checks, with impact priorities, with protection strategies, with five forms of wealth, with Managing the Downside.",to:"I am writing this during Form 4 Term 1, at the end of the advanced wealth cycle. I have built a 10-Year Wealth Plan — not a promise, but a working design with Reality Checks, impact priorities, protection strategies and five forms of wealth."},
      {from:"I learned that wealth is not just money. Gogo Maria taught me that. She is 74, lives on R2,000 a month, and is one of the wealthiest people I know.",to:"I learned that wealth is not just money. Gogo Maria taught me that. Her financial resources are modest, but her relational and values wealth are enormous."},
      {from:"I learned that every rand is a vote. Mr. Patel taught me that. Thandiwe taught me that.",to:"I learned that money has consequences. Mr. Patel and Thandiwe taught me to investigate what my spending and investing support."},
      {from:"Future me — are you following the plan? Did you max the TFSA? Did you start the RA? Did you hold on when cash flow was negative? Did you remember that wealth is five things, not one? Did you vote with your rands for the world you want?",to:"Future me — are you still reviewing the plan? Did you use regulated products and verify tax rules before acting? Did you protect liquidity before forcing a property timeline? Did you remember that wealth is five things, not one?"},
      {from:"From me, in Grade 11 Date: _____________________",to:"From me, in Form 4 Term 1 Date: _____________________"},
    ],
  },
  "g11-t3-l60-060": {
    title:"ADVANCED WEALTH CHECKPOINT — LEGACY COMES NEXT",
    textReplacements:[
      {from:"Step into Term 4 ready.",to:"Step into the legacy cycle ready."},
      {from:"Myah takes the container. She will not forget. She walks through the door. Into Term 4.",to:"Myah takes the container. She will not forget. She walks through the door into the legacy cycle."},
      {from:"What I will carry forward to Term 4: _________________________________",to:"What I will carry forward into the legacy cycle: _________________________________"},
      {from:"Keep going. Term 4 awaits.",to:"Keep going. The legacy cycle completes Form 4 Term 1."},
      {from:"\"Next term, Term 4 — your final term of Grade 11. You will explore legacy. What you leave behind. The architect's ultimate question: will the structure outlast you? Will it serve others when you are gone?\"",to:"\"The next learning cycle in Form 4 Term 1 is legacy. You have designed how wealth might be built. Now ask what it is for, who it serves and what should remain after you.\""},
      {from:"Mama Rose hands Myah a small container of food. \"For the road, child. Do not forget what you learned. Do not forget that wealth is five things, not one. Do not forget that every rand is a vote. Do not forget that you can build something that matters — something that outlasts you.\"",to:"Mama Rose hands Myah a small container of food. \"For the road, child. Do not forget what you learned. Wealth is five things, not one. Money has consequences. Build something that matters — and build it so the value can outlast you.\""},
      {from:"You finished Term 3 of Grade 11.",to:"You completed the advanced wealth cycle of Form 4 Term 1. The legacy cycle begins next."},
    ],
  },
  "g11-t4-l62-062": {
    textReplacements:[
      {from:"Later, at the taxi rank, Myah sees Atlehang Ngwenya. He is helping an elderly woman — not his grandmother this time, but someone else — navigate the queue. He finds her a seat. He carries her bag. He speaks to her quietly, respectfully.",to:"Later, at the kombi rank, Myah sees Atlehang Ngwenya helping an elderly woman navigate the queue. He finds her a seat, carries her bag and speaks to her quietly and respectfully."},
    ],
  },
  "g11-t4-l63-063": {
    title:"FINANCIAL LEGACY — ESTATE, BENEFICIARIES & SUCCESSION",
    textReplacements:[
      {from:"\"I spent 25 years building this factory. If I die tomorrow without a plan, my family would fight over it. The government would take a chunk in estate taxes. The business might collapse — not because it was weak, but because I did not prepare it to survive me.\"",to:"\"I spent 25 years building this factory. If I die without a clear estate and succession plan, my family and employees may face uncertainty, delay, legal costs and conflict. Estate Duty or other obligations may apply depending on current Zimbabwe law. The business could fail not because the factory is weak, but because I did not prepare it to survive me.\""},
      {from:"\"Financial legacy is not just about having money. It is about having a plan for that money when you are no longer here to manage it. A will. A trust. Beneficiary nominations. A succession plan for the business. These are not documents for the rich. They are documents for the responsible.\"",to:"\"Financial legacy is not just about having money. It is about knowing what should happen to assets, responsibilities and a business when you are no longer here to manage them. A valid will, appropriate beneficiary nominations where a product allows them, proper records, insurance where suitable and a succession plan can all play a role. A trust is a separate legal structure and should only be used when it actually fits the situation.\""},
      {from:"Without a Will → Government decides who gets what → Family may fight → Delays, costs, stress → Your wishes die with you",to:"Without a valid will → Zimbabwe intestate-succession rules and estate-administration processes apply → Your personal wishes may not control every outcome → Delays, costs and family uncertainty can increase"},
      {from:"With a Will → You decide who gets what → Family has clarity → Smooth, efficient, peaceful → Your wishes survive you",to:"With a valid will → Your lawful wishes can guide distribution and administration → An executor and family have clearer instructions → The estate process can still involve legal, tax and administrative steps"},
      {from:"Myah writes in her notebook: A will is not for the dead. It is for the living. It is a final act of love. Everyone who owns anything has an estate. The question is whether it will be distributed by your wishes — or by the government's formula.",to:"Myah writes in her notebook: a will is written for the people and responsibilities you leave behind. Everyone has some form of estate, even if it is small. The question is whether your lawful wishes are documented clearly or whether the applicable intestate-succession rules must determine the distribution."},
      {from:"The Paradoxical Reversal: But making a will forces you to confront your own mortality. That is uncomfortable. Most people avoid it. They tell themselves they will do it later — when they are older, when they have more, when it matters more. But \"later\" has a way of becoming \"never.\" And \"never\" means the government decides who gets your things — not you. The people who love you are left with confusion, conflict, and costs. The will is not for you. It is for them.",to:"The Paradoxical Reversal: making a will forces you to confront mortality. Many people delay it because the subject is uncomfortable. But if a person dies without a valid will, Zimbabwe's intestate-succession and estate-administration rules apply. That may differ from what the person would have chosen. The practical lesson is not fear. It is preparation."},
      {from:"Question 2: What did Mr. Patel mean when he said a will is \"a final act of love\"? What happens if someone dies without a will?",to:"Question 2: What did Mr. Patel mean when he called a will a final act of love? What generally changes when someone dies without a valid will, and why should the exact Zimbabwe rules be checked rather than guessed?"},
      {from:"Question 3 — The Estate Audit: List everything you own — even small things. Now imagine you died without a will. Who would get each item under intestate succession laws? Is that who you would choose? If not, what is one thing you will do THIS YEAR to change that?",to:"Question 3 — The Estate Audit: List what you own, including digital and sentimental assets. Then research the basic idea of intestate succession in Zimbabwe using a reliable legal source. Do not guess who would inherit. What is one estate-planning question you would want qualified help answering?"},
      {from:"If there is no family member to ask, write a draft will for yourself — not legally binding, just a thinking exercise. Who would get what? Why? Who would be your executor? Who would care for minor children? The act of writing is preparation.",to:"If there is no family member to ask, write a non-binding estate-planning worksheet: assets, people or causes you care about, who you might want as executor, and questions about guardianship or beneficiaries. Label it clearly: THIS IS NOT A LEGAL WILL. The exercise is preparation for informed legal planning."},
    ],
    tableReplacements:[
      {
        cellIncludes:"Says who gets what, names executor",
        rows:[
          ["Tool","Purpose","Zimbabwe Caution"],
          ["Valid will","Records lawful wishes and names an executor","Formal validity requirements matter; use current Zimbabwe law"],
          ["Beneficiary nomination","Directs a benefit where a particular regulated product/policy allows it","Rules depend on the product and law; it may not replace estate administration"],
          ["Life insurance","Can provide money to nominated beneficiaries/dependants subject to policy rules","Check policy terms, exclusions and nomination rules"],
          ["Succession plan","Prepares who can operate or own a business after the founder","Needs governance, legal and financial planning"],
          ["Trust","Separate legal arrangement that can hold/administer assets for stated purposes","More complex; not automatically necessary or tax-efficient"],
        ],
      },
      {
        cellIncludes:"Now (teens/20s)",
        rows:[
          ["Stage","Useful Focus"],
          ["Now / early adulthood","Build records, learn beneficiary and will basics, protect important documents"],
          ["As assets/responsibilities grow","Create or review a valid will; update nominations where applicable"],
          ["Business / dependants / complex assets","Add succession planning and obtain qualified legal/financial advice"],
          ["Later life","Review estate, beneficiaries, documents and legacy intentions regularly"],
        ],
      },
    ],
    appendBlocks:[
      {kind:"text",type:"paragraph",text:"Zimbabwe legal check: deceased estates are administered under Zimbabwe law, and Estate Duty may apply depending on the estate. A real will, trust or succession plan should be prepared or reviewed against current Zimbabwe requirements rather than copied from a foreign template."},
    ],
  },
  "g11-t4-l64-064": {
    title:"WILLS, TRUSTS & VALIDITY — THE ZIMBABWE LEGAL CHECK",
    textReplacements:[
      {from:"Wills — The Basics: \"A will is a legal document that says what happens to your belongings after you die. In South Africa, for a will to be valid, it must be: in writing, signed by you, and signed by two witnesses — who cannot be beneficiaries. If you leave something to a witness, that gift is void. The law is precise. Follow the rules.\"",to:"Wills — The Basics: \"A will is a legal document used to record wishes about an estate after death. Zimbabwe has formal rules about validity, signing, witnesses and estate administration. Those rules matter. Do not copy a foreign template and assume it is valid here. When a real will is needed, check current Zimbabwe law and obtain appropriate legal guidance.\""},
      {from:"\"You do not need a lawyer to make a will. But you do need to follow the requirements exactly. A handwritten will on a piece of paper, signed by you and two witnesses who are not beneficiaries, is legally valid. A fancy typed document missing one signature is not.\"",to:"\"The important lesson is not whether a document looks formal. It is whether it complies with current Zimbabwe legal requirements and accurately records the person's intentions. For a real estate plan, validity should be checked rather than assumed.\""},
      {from:"Trusts — The Deeper Layer: \"A trust is like a container. You put assets into it. You set rules for how and when those assets are distributed. A trustee manages the trust according to your instructions. Trusts are useful when: you have minor children, you want to control how money is used, you want to protect assets from creditors, or you want to avoid family disputes.\"",to:"Trusts — The Deeper Layer: \"A trust is a legal arrangement in which trustees hold or administer assets for stated purposes or beneficiaries under the governing instrument and law. Trusts can be useful in some family, charitable, succession or asset-management situations, but they are not a universal solution and should not be treated as an automatic tax or creditor shield.\""},
      {from:"\"A trust can be created during your lifetime — an inter vivos trust — or in your will — a testamentary trust. The testamentary trust only comes into effect when you die. It is a way of saying: 'I trust my children, but I do not trust their 21-year-old judgment. So the money will be released in stages — some at 21, some at 25, some at 30.'\"",to:"\"Trusts can arise in different ways and can have different purposes. The governing rules, trustee duties, tax treatment and estate consequences need to be checked under Zimbabwe law. If the objective is to support a minor or manage assets over time, the legal structure should be designed for that purpose rather than copied from an example.\""},
      {from:"Requirements for a Valid Will in South Africa",to:"Valid-Will Questions to Verify in Zimbabwe"},
      {from:"Question 1: What are the requirements for a valid will in South Africa? Why does each matter? What is a trust? When is a trust more useful than a will?",to:"Question 1: What formal requirements for a valid will should be verified under current Zimbabwe law? What is a trust? Why should a trust be used only when its legal purpose and consequences are understood?"},
      {from:"If there is no family member to ask, research online: \"How to make a valid will in South Africa.\" Write down the steps. What surprised you? What would you need to do to make one?",to:"If there is no family member to ask, research current Zimbabwe guidance on wills and deceased estates from a reliable legal or official source. Write down the validity questions you would need answered before making a real will."},
    ],
    tableReplacements:[
      {
        cellIncludes:"Oral wills are not valid",
        rows:[
          ["Question to Verify","Why It Matters"],
          ["Who may make a valid will?","Legal capacity rules determine whether the document can operate"],
          ["What signing/witness formalities apply?","Formal defects can create disputes or invalidate intentions"],
          ["Can a witness or related person benefit?","Conflict and beneficiary rules may affect validity or benefits"],
          ["How are changes/revocation handled?","An old or improperly changed will can create uncertainty"],
          ["Where should the original be kept and who should know?","A valid document is not useful if it cannot be found or administered"],
        ],
      },
    ],
    appendBlocks:[
      {kind:"text",type:"paragraph",text:"This lesson is legal literacy, not legal advice. A real Zimbabwe will or trust should be checked against current law and, where appropriate, by a qualified legal professional."},
    ],
  },
  "g11-t4-l66-066": {
    textReplacements:[
      {from:"He explains: \"I came from nothing. My parents had nothing. This community gave me chances — small loans from neighbours, customers who trusted me, a stokvel that lent me R5,000 when the bank would not. I built my factory because people believed in me before I had anything to believe in.\"",to:"He explains: \"I came from very little. This community gave me chances — small loans from neighbours, customers who trusted me, and a mukando that once helped me with working capital when formal finance was out of reach. I built the factory because people believed in me before I had much evidence to show.\""},
    ],
  },
  "g11-t4-l67-067": {
    textReplacements:[
      {from:"She points to a young man loading a truck. \"That is Sizwe. He dropped out of school in Grade 10. No one would hire him. I trained him. Now he manages the logistics. He is saving to finish his matric. He tells me he wants to start his own business one day. That is the ripple.\"",to:"She points to a young man loading a truck. \"That is Sizwe. He left secondary school before completing O-Level. No one would hire him for the roles he wanted. I trained him. Now he manages the logistics. He is working toward completing the qualification he missed and wants to start a business one day. That is the ripple.\""},
      {from:"Key idea: Thandiwe's cooperative diverts ten tons of waste a month. But the numbers are not the legacy. The legacy is Gloria, who is no longer invisible. Sizwe, who is finishing matric. The children watching their mother work with dignity. The ripple keeps going. The paradox: the most powerful social legacies are often the ones you cannot measure.",to:"Key idea: Thandiwe's cooperative diverts waste from the environment, but the tonnage is not the whole legacy. The legacy is also Gloria, who is no longer invisible; Sizwe, who is completing the school qualification he missed; and children watching adults work with dignity. Social impact includes numbers and human change."},
    ],
  },
  "g11-t4-l69-069": {
    title:"BALANCING PRESENT AND FUTURE — MYAH'S DILEMMA",
    textReplacements:[
      {from:"Myah has R2,000 saved. She has been saving for months — delivery service, weekend work, the occasional workshop. It is supposed to go toward her TFSA, toward the Wealth Architecture she designed in Term 3.",to:"Myah has US$200 saved in this illustrative example. She has been saving for months — delivery service, weekend work and the occasional workshop. It is part of the long-term Wealth Architecture she designed earlier in Form 4 Term 1."},
      {from:"But her friends are going to Durban for a weekend. The beach. The ocean. She has never seen the ocean. The trip would cost about R1,500.",to:"But her friends are planning a weekend trip to Kariba. She has never been. The trip would cost about US$150 in this illustrative example."},
      {from:"Myah considers. She could go for one night instead of two. She could take a bus instead of paying for a ride. She could bring her own food. She could spend R800 instead of R1,500. Save R1,200. Not perfect. But balanced.",to:"Myah considers. She could shorten the trip, choose cheaper transport and bring some food. She could spend US$80 instead of US$150 and keep US$120 saved. Not perfect. But balanced."},
      {from:"Myah decides: one night in Durban. R800. Save R1,200. See the ocean. Come back and keep building. Both selves honored.",to:"Myah decides: a shorter Kariba trip. US$80 in this illustration. Keep US$120 saved. Enjoy the experience, then come back and keep building. Both selves honoured."},
      {from:"At the taxi rank later, Myah sees Atlehang Ngwenya. He is counting coins — small piles, neatly arranged on the bench beside him.",to:"At the kombi rank later, Myah sees Atlehang Ngwenya counting small piles of money on the bench beside him."},
      {from:"This week, make one decision that honors BOTH your present self and your future self. If you tend to over-save, spend a small amount on something that brings you joy — without guilt. If you tend to over-spend, save a small amount — even R10 — toward a future goal. Write down: What did you do? How did it feel? What did you learn about balance?",to:"This week, make one decision that honours both your present self and future self. If you tend to over-save, allow a planned amount for something meaningful now. If you tend to over-spend, set aside a small amount in a clearly labelled currency for a future goal. Write down what you did and what you learned about balance."},
    ],
  },
  "g11-t4-l70-070": {
    title:"ARCHITECTURE REVIEW — FROM FORM 3 INTO FORM 4",
    textReplacements:[
      {from:"Term 4 — Legacy (in progress): What is legacy? Mama Rose's wisdom. The four dimensions. Financial legacy — Mr. Patel's estate. Wills and trusts — Adv. Mkhize. Values legacy — Gogo Maria's letters. Giving back. Social legacy — Thandiwe's cooperative. Environmental legacy — Lethabo's question. Balancing present and future.",to:"Legacy cycle (in progress): What is legacy? Mama Rose's wisdom. The four dimensions. Financial legacy — Mr. Patel's estate. Wills and trusts — Adv. Mkhize. Values legacy — Gogo Maria's letters. Giving back. Social legacy — Thandiwe's cooperative. Environmental legacy — Lethabo's question. Balancing present and future."},
      {from:"Question 1: What did you learn in Term 1? Term 2? Term 3? Term 4? How do these four terms connect?",to:"Question 1: Looking across Form 3 and Form 4 Term 1 so far, what did you learn about leverage, leadership, advanced wealth and legacy? How do these learning cycles connect?"},
      {from:"See your entire Grade 11 journey in one view.",to:"See the architecture journey that began in Form 3 and continues through Form 4 Term 1."},
      {from:"📘 Myah Looks Back at Grade 11",to:"📘 Myah Looks Back at the Architecture Journey"},
      {from:"Myah sits at Mama Rose's kitchen, her four notebooks from Grade 11 spread across the table. Term 1. Term 2. Term 3. Term 4 in progress. She flips through them, amazed at how much ground they have covered.",to:"Myah sits at Mama Rose's kitchen with the evidence from Form 3 and Form 4 Term 1 spread across the table. Leverage. Leadership. Wealth. Legacy. She flips through it, amazed at how much ground the architecture stage has covered."},
      {from:"Term 1 — Leverage: The ruler. The stone. Archimedes. The six levers at the taxi rank. Financial leverage with Mr. Dlamini. Time leverage — Thabo's delegation. People leverage — hiring. Systems leverage — Mr. Patel's four rules. Technology leverage — Themba's online store. Knowledge leverage — her notebooks. The Leverage Matrix. Her Leverage Plan.",to:"Form 3 — Leverage: the ruler, the stone, Archimedes, and the six levers at the kombi rank. Financial, time, people, systems, technology and knowledge leverage. The Leverage Matrix and her Leverage Plan."},
      {from:"Term 2 — Leadership: What is leadership? Mama Rose — \"I am just a cook.\" Leading herself first. Emotional intelligence — Ms. Nkosi's driver. Teams. Communication — Lethabo's mistake. Difficult conversations — Thabo's courage. Leading peers — Thandi's cooperative. Leading through change — Emmanuel's spaza shop. Mentorship — Lethabo and Thabiso. Ethical leadership — Mr. Patel's choice. Legal leadership — Adv. Mkhize. Her Leadership Philosophy.",to:"Form 3 — Leadership: leading yourself first, emotional intelligence, teams, communication, difficult conversations, peer leadership, Emmanuel's tuckshop change, mentorship, ethics and legal responsibility. Her Leadership Philosophy."},
      {from:"She closes the notebooks. She is not the same person who opened the Term 1 book in January. The observer of Grade 8. The challenger of Grade 9. The strategist of Grade 10. The architect of Grade 11. Soon: the launcher of Grade 12.",to:"She closes the notebooks. The observer became the challenger; the challenger became the strategist; the strategist became the architect. In Form 4, the architecture is becoming a launch plan. The work is no longer organised by old source grades. It is one continuous evidence trail."},
      {from:"At the taxi rank, Myah sees Atlehang. Her friend Atlehang. They sit on the queue marshal's bench together — the one Atlehang Ngwenya fixed months ago.",to:"At the kombi rank, Myah sees Atlehang. They sit on the rank marshal's bench together — the one he fixed months ago."},
      {from:"✍️ Activity 70: My Grade 11 Review",to:"✍️ Activity 70: My Architecture Review"},
      {from:"One word to describe my Grade 11 journey: _________________________________",to:"One word to describe my architecture journey so far: _________________________________"},
      {from:"Key idea: Myah's word for Grade 11: Architect. She had learned to design structures that outlast her — leverage systems, leadership philosophies, wealth architectures, legacy frameworks. The paradox: the more you learn, the more you realise you have not yet built. The structures are designed. But the building is just beginning.",to:"Key idea: Myah's word for this stage is Architect. She has learned to design structures that can outlast a moment — leverage systems, leadership philosophies, wealth architecture and legacy frameworks. The structures are becoming clearer. The real-world building is still beginning."},
      {from:"Question 2: What is the thread that runs through your entire Grade 11 journey? What is one word that captures this year for you?",to:"Question 2: What thread connects your leverage, leadership, wealth and legacy work? What one word captures this architecture stage for you?"},
      {from:"Share your Grade 11 review with your family. Let them see how far you have come. Ask them: \"What have you noticed about how I have changed this year? What do you see in me now that was not there in January?\"",to:"Share your architecture review with your family or someone you trust. Ask: \"What have you noticed about how I think, plan or take responsibility now compared with earlier?\""},
      {from:"If there is no family to share with, read your review out loud to yourself. Let your own voice witness your growth. Then write a letter to your January self — the person who started Grade 11. What would you tell them? What do you know now that they did not know then?",to:"If there is no one to share with, read your review aloud to yourself. Then write to the version of you who started Form 3: what do you know now that you did not know then?"},
      {from:"| Date | | | Lesson | Lesson 70 — Grade 11 Review | | Experiment/Observation | I reviewed my entire Grade 11 journey. | | Design Decision | | | Prediction | | | Result | | | Learning | | | Next Action | |",to:"| Date | | | Lesson | Lesson 70 — Architecture Review | | Experiment/Observation | I reviewed my leverage, leadership, wealth and legacy evidence. | | Design Decision | | | Prediction | | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g11-t4-l71-071": {
    title:"PROJECT LAUNCH — MY LIFE AND LEGACY PLAN",
    textReplacements:[
      {from:"Understand the requirements for your Grade 11 final project.",to:"Understand the requirements for your Form 4 Term 1 Life and Legacy project."},
      {from:"\"This is it. Your Grade 11 final project. The final project of the year.\"",to:"\"This is your Form 4 Term 1 capstone: the Life and Legacy Plan.\""},
      {from:"\"This is not just a project. It is a declaration. A declaration of who you are, what you will build, how you will lead, and what you will leave behind. It is the architect's final blueprint for Grade 11 — and the foundation for Grade 12.\"",to:"\"This is not just a project. It is a declaration of who you are, what you will build, how you will lead and what you hope to leave behind. It is the architect's blueprint before Form 4 moves into adult money, work and O-Level transition decisions.\""},
      {from:"She pauses. \"In Grade 8, you were the observer. In Grade 9, the challenger. In Grade 10, the strategist. In Grade 11, the architect. Next year, Grade 12 — you will become the launcher. This plan is the bridge between the architect and the launcher. Between designing and doing. Between building and becoming.\"",to:"She pauses. \"In Form 1, you learned to observe. In Form 2, you challenged and acted. In Form 3, you became more strategic and architectural. Now, in Form 4, you are moving from architecture toward launch. This plan is one bridge between designing and doing.\""},
      {from:"This is the biggest project of Grade 11. It brings together everything. How do you feel? What part excites you? What part feels hardest?",to:"This project brings together leverage, leadership, wealth and legacy. How do you feel? What part excites you? What part feels hardest?"},
    ],
    tableReplacements:[
      {
        cellIncludes:"updated from Grade 9",
        rows:[
          ["Section","What to Include"],
          ["1. My Life Vision","What kind of life do I want? What matters most?"],
          ["2. My Leverage Strategy","How will I multiply useful impact? — from Form 3"],
          ["3. My Leadership Philosophy","Who am I as a leader? — from Form 3"],
          ["4. My Wealth Architecture","How will I build, protect and align wealth? — Form 4 Term 1"],
          ["5. My Legacy Vision","What do I want to leave behind — financial, values, social and environmental?"],
          ["6. My Values","Values developed and tested since Form 2"],
          ["7. Integration","How the pieces fit into one coherent life"],
          ["8. Timeline & Milestones","Key review points rather than false certainty"],
          ["9. Reality Checks","How will I know if an assumption is failing?"],
          ["10. Managing the Downside","What is the shadow or unintended consequence?"],
          ["11. Letter to My Future Self","A letter to revisit later"],
          ["12. Reflection","What I learned while designing this architecture"],
        ],
      },
    ],
  },
  "g11-t4-l72-072": {
    textReplacements:[
      {from:"Myah spreads her work across the table at Mama Rose's kitchen. Term 1: Leverage Plan. Term 2: Leadership Philosophy. Term 3: 10-Year Wealth Plan. Term 4: Legacy Framework.",to:"Myah spreads her work across the table at Mama Rose's kitchen. From Form 3: her Leverage Plan and Leadership Philosophy. From Form 4 Term 1: her 10-Year Wealth Plan and Legacy Framework."},
      {from:"Myah thinks. \"Values. The values I defined in Grade 9 — updated, deepened, tested. Justice. Integrity. Curiosity. Community. They have not changed. They have just been tested — by the grant office, by the workshops, by the difficult conversations, by the choices about money and impact. Values are the foundation. Everything else is built on them.\"",to:"Myah thinks. \"Values. The values I defined in Form 2 — updated, deepened and tested. Justice. Integrity. Curiosity. Community. They have been tested by rejection, workshops, difficult conversations and choices about money and impact. Values are the foundation. Everything else is built on them.\""},
    ],
  },
  "g11-t4-l73-073": {
    tableReplacements:[
      {
        cellIncludes:"Finish matric",
        rows:[
          ["Stage","Illustrative Milestone"],
          ["Form 4 / O-Level","Complete O-Level strongly. Run a small paid or sponsored financial-capability workshop. Publish one useful digital resource."],
          ["Next 1–2 years","Choose the next pathway using evidence: A-Level where suitable, tertiary/TVET, employment, enterprise, apprenticeship/skills development or a structured combination."],
          ["Early adulthood","Build employable capability, continue enterprise experiments and begin regulated saving/investing when income allows."],
          ["20s","Grow skills and income. Build a liquidity buffer. Increase long-term contributions. Consider property only when financing and buffers are realistic."],
          ["30s","Review career, enterprise, family responsibilities and wealth architecture. Avoid treating one timeline as destiny."],
          ["Later decades","Keep reviewing financial independence, contribution, health, relationships, time and legacy as circumstances change."],
        ],
      },
    ],
  },
  "g11-t4-l75-075": {
    textReplacements:[
      {from:"The community hall is arranged for the final presentations of Grade 11. Mama Rose is in the front row. Mr. Patel is there. Mr. Dlamini. Ms. Nkosi. Gogo Maria. Ms. Daniels sits at the back, watching. The room is full of the people who have shaped these learners over three years.",to:"The community hall is arranged for the Form 4 Term 1 Life and Legacy presentations. Mama Rose is in the front row. Mr. Patel, Mr. Dlamini, Ms. Nkosi and Gogo Maria are there. Ms. Daniels sits at the back, watching."},
      {from:"Thabo presents first. His plan: grow the delivery business into a logistics company. Hire and train from the community. Build wealth through property and investments. Lead by example. Legacy: create jobs. Pass on skills. Prove that a boy from Tembisa with a broken bike can build something that outlasts him. His Reality Check: \"If I am the only one who can run the business, I have not built a business. I have built a job.\"",to:"Thabo presents first. His plan: grow the delivery business into a logistics company, hire and train from the community, build wealth carefully and pass on skills. He wants to prove that a boy from Chitungwiza with a broken bike can build something that outlasts him. His Reality Check: \"If I am the only one who can run the business, I have not built a business. I have built a job.\""},
      {from:"Myah presents last on Day 1. She stands at the front. Her four notebooks are in her hands — Grade 9, 10, 11. Evidence of becoming.",to:"Myah presents last on Day 1. She stands at the front with the evidence she has carried from Form 2, Form 3 and Form 4. Evidence of becoming."},
    ],
  },
  "g11-t4-l76-076": {
    textReplacements:[
      {from:"Emmanuel presents. Transform the spaza shop into a community hub — delivery, cooperative buying, loyalty systems. Legacy: a business that outlasts his family, a community that is stronger because the shop existed. \"If the shop cannot survive a month without a family member present, we have not built a business. We have built a job that requires our bodies.\"",to:"Emmanuel presents. Transform the tuckshop into a community hub — delivery, cooperative buying and loyalty systems. Legacy: a business that can outlast one person's daily presence and strengthen the community."},
      {from:"Sipho stands up. This is the Sipho — melted sweets, credit card, bicycle repair. He is 18 now. He will finish matric this year. He looks different. Older. Calmer. More certain.",to:"Sipho stands up. This is the Sipho of the melted sweets and bicycle repair. He is in Form 4 now, approaching the end of O-Level. He looks different. Older. Calmer. More certain."},
      {from:"\"I had no goals in Grade 8. I did not know what I wanted. I did not know who I was. I failed at selling sweets. I got a credit card and messed up. I cut it up. I started fixing bicycles because it was the only thing I knew how to do.\"",to:"\"I had no goals in Form 1. I did not know what I wanted. I failed at selling sweets. I learned from mistakes with money. I started fixing bicycles because it was the one practical skill I trusted at first.\""},
      {from:"\"You are leaving Grade 11 with something precious: clarity. Clarity about who you are. Clarity about what you are building. Clarity about why it matters. Clarity about what you will leave behind.\"",to:"\"You are closing this architecture cycle with something precious: greater clarity about who you are, what you are building, why it matters and what you hope will remain after you.\""},
      {from:"What this project taught me about Grade 11:",to:"What this project taught me about my architecture and legacy:"},
      {from:"Question 2: How do you feel now that your project — and your Grade 11 journey — is nearly complete?",to:"Question 2: How do you feel now that the Life and Legacy project — and Form 4 Term 1 — is nearing completion?"},
      {from:"If there is no family to tell, write a letter to yourself about what you learned from this project. What surprised you? What are you proud of? What will you carry forward into Grade 12?",to:"If there is no family to tell, write a letter to yourself about what you learned from this project. What surprised you? What are you proud of? What will you carry forward into the adult-money and transition work next?"},
    ],
  },
  "g11-t4-l77-077": {
    title:"FORM 4 TERM 1 REFLECTION — WEALTH & LEGACY",
    textReplacements:[
      {from:"📘 Looking Back at Term 4",to:"📘 Looking Back at the Legacy Cycle"},
      {from:"Myah sits at Mama Rose's kitchen, flipping through her Term 4 notebook one last time.",to:"Myah sits at Mama Rose's kitchen, flipping through her legacy-cycle notebook one last time."},
      {from:"✍️ Activity 77: My Term 4 Reflection",to:"✍️ Activity 77: My Form 4 Term 1 Reflection"},
      {from:"Share your Term 4 reflection with your family. Show them your 1-10 score. Tell them what you need to do to move up by one point. Ask them to help you.",to:"Share your Form 4 Term 1 reflection with your family. Show them your 1-10 score. Tell them what you need to do to move up by one point. Ask them to help you."},
      {from:"Lesson 69: Balancing present and future. Her Durban decision. \"Honor both selves.\"",to:"Lesson 69: Balancing present and future. Her Kariba decision. Honour both selves."},
      {from:"Lesson 70: The Grade 11 journey. Four terms. One arc. Atlehang's story about the badge.",to:"Lesson 70: The architecture journey. Leverage, leadership, wealth and legacy in one arc."},
      {from:"I started Grade 11 thinking about leverage — how to multiply my impact. I am ending thinking about legacy — what will outlast me. In between, I learned to lead. I learned to build wealth. I learned to integrate everything into an architecture that holds.",to:"I entered the architecture stage thinking about leverage — how to multiply useful impact. I am closing Form 4 Term 1 thinking about legacy — what might outlast me. Between those points I learned to lead, build wealth more deliberately and integrate the pieces."},
      {from:"I am ready for Grade 12.",to:"I am ready for Form 4 Term 2: adult money, O-Level transition, work and career launch."},
      {from:"9. The 1-10 Scale: At the start of the term, you were a \"1\" on the legacy literacy scale. Where are you now, honestly? What is the exact number? What is the ONE specific thing you need to do in Grade 12 to move up by a single point?",to:"9. The 1-10 Scale: where are you now on the legacy-literacy scale? What is the exact number? What is ONE specific thing you will do during the rest of Form 4 to move up by a single point?"},
      {from:"Question 2: Where are you on the 1-10 legacy literacy scale? What is the ONE thing you need to do in Grade 12 to move up by a single point?",to:"Question 2: Where are you on the 1-10 legacy-literacy scale? What is ONE thing you need to do during the rest of Form 4 to move up by a single point?"},
      {from:"| Date | | | Lesson | Lesson 77 — Term 4 Reflection | | Experiment/Observation | I reflected on my entire Term 4 journey. | | Design Decision | | | Prediction | | | Result | My legacy literacy number: ___ / 10 | | Learning | | | Next Action | The one thing I will do in Grade 12: |",to:"| Date | | | Lesson | Lesson 77 — Form 4 Term 1 Reflection | | Experiment/Observation | I reflected on the advanced wealth and legacy cycle. | | Design Decision | | | Prediction | | | Result | My legacy literacy number: ___ / 10 | | Learning | | | Next Action | The one thing I will carry into Term 2: |"},
    ],
  },
  "g11-t4-l78-078": {
    title:"FORM 4 TERM 1 PORTFOLIO ASSEMBLY",
    textReplacements:[
      {from:"Full Year: ☐ Leverage Plan (Term 1) ☐ Leadership Philosophy (Term 2) ☐ 10-Year Wealth Plan (Term 3) ☐ Life and Legacy Plan (Term 4) ☐ All four letters to future self (Terms 1–4)",to:"Cumulative architecture: ☐ Form 3 Leverage Plan ☐ Form 3 Leadership Philosophy ☐ Form 4 Term 1 10-Year Wealth Plan ☐ Form 4 Term 1 Life and Legacy Plan ☐ Key letters to future self from the completed cycles"},
      {from:"If there is no one to show, look at your portfolio yourself. Read your Term 1 work. Then read your Term 4 work. What is different? Let yourself see it.",to:"If there is no one to show, look at your portfolio yourself. Compare your earlier leverage and leadership work with your current wealth and legacy work. What is different? Let yourself see it."},
      {from:"Organize your complete Grade 11 portfolio.",to:"Organize the Form 3 architecture evidence and Form 4 Term 1 wealth/legacy evidence you will carry into the launch-year work."},
      {from:"📘 Your Complete Grade 11 Portfolio",to:"📘 Your Architecture, Wealth & Legacy Portfolio"},
      {from:"Term 4: ☐ Legacy Thinking — First Draft (Lesson 61) ☐ Legacy Framework — Four Dimensions (Lesson 62) ☐ Financial Legacy Plan (Lesson 63) ☐ Estate Planning Timeline (Lesson 64) ☐ Values Legacy Letter (Lesson 65) ☐ Giving Vision (Lesson 66) ☐ Social Legacy Plan (Lesson 67) ☐ Environmental Legacy Plan (Lesson 68) ☐ Balance Plan (Lesson 69) ☐ Grade 11 Review (Lesson 70) ☐ final project Outline (Lesson 71) ☐ Integration Map (Lesson 72) ☐ Timeline and Accountability (Lesson 73) ☐ Feedback and Revision Plan (Lesson 74) ☐ Presentation Reflection — Day 1 (Lesson 75) ☐ Presentation Reflection — Day 2 (Lesson 76) ☐ Term 4 Reflection (Lesson 77)",to:"Form 4 Term 1: ☐ Advanced wealth evidence (Lessons 41–60) ☐ Legacy thinking and four-dimension framework (Lessons 61–62) ☐ Financial legacy and Zimbabwe estate-law research (Lessons 63–64) ☐ Values, giving, social and environmental legacy evidence (Lessons 65–68) ☐ Present/future balance plan (Lesson 69) ☐ Architecture review (Lesson 70) ☐ Life and Legacy Plan evidence (Lessons 71–76) ☐ Form 4 Term 1 reflection (Lesson 77)"},
      {from:"What do you notice when you look through your complete Grade 11 portfolio?",to:"What do you notice when you look across the architecture, wealth and legacy evidence you have built so far?"},
    ],
  },
  "g11-t4-l79-079": {
    title:"LETTER TO MY FUTURE SELF — FORM 4 TERM 1",
    textReplacements:[
      {from:"Write your final letter of Grade 11.",to:"Write your Form 4 Term 1 letter to your future self."},
      {from:"📘 Myah's Final Letter of Grade 11",to:"📘 Myah's Form 4 Term 1 Letter"},
      {from:"I am writing this at the end of Grade 11. I am 17. I live in Tembisa with my mother. This year, I learned so much.",to:"I am writing this at the end of Form 4 Term 1. I live in Chitungwiza with my mother. This year is not over, but the architecture, wealth and legacy work has changed what I can see."},
      {from:"I learned about wealth — that it is five things, not one. Gogo Maria taught me that. Zinhle taught me to rebalance. Thandiwe taught me that every rand is a vote.",to:"I learned that wealth is five things, not one. Gogo Maria taught me that. Zinhle taught me to rebalance. Thandiwe taught me that money has consequences."},
      {from:"✍️ Activity 79: Letter to My Future Self — Grade 11 Final",to:"✍️ Activity 79: Letter to My Future Self — Form 4 Term 1"},
      {from:"Write your final letter of Grade 11. Address it to \"Future Me.\"",to:"Write a letter to Future Me at the end of Form 4. What do you hope the next two terms prove?"},
      {from:"From me, in Grade 11 Date: _____________________",to:"From me, in Form 4 Term 1 Date: _____________________"},
      {from:"📂 Portfolio: Keep this letter somewhere safe. Read it at the end of Grade 12.",to:"📂 Portfolio: Keep this letter somewhere safe. Read it at the end of Form 4."},
      {from:"| Date | | | Lesson | Lesson 79 — Final Letter | | Experiment/Observation | I wrote my final letter of Grade 11. | | Design Decision | | | Prediction | | | Result | | | Learning | | | Next Action | |",to:"| Date | | | Lesson | Lesson 79 — Form 4 Term 1 Letter | | Experiment/Observation | I wrote a future-self letter before the transition and career-launch work. | | Design Decision | | | Prediction | | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g11-t4-l80-080": {
    title:"FORM 4 TERM 1 CLOSE — FROM ARCHITECTURE TO LAUNCH",
    textReplacements:[
      {from:"Say goodbye to Grade 11.",to:"Close Form 4 Term 1 with a clear handoff into the O-Level transition and career-launch work."},
      {from:"Step into Grade 12 ready.",to:"Step into Form 4 Term 2 ready."},
      {from:"\"You started Grade 8 as a quiet girl at the edge of scenes. Watching. Noticing. The seed planted but not yet visible. In Grade 9, you walked into the grant office. You demanded answers. You built the mini-business. Your stillness was preparation. Then you moved. In Grade 10, you became the strategist. You learned systems. You designed your financial future. In Grade 11, you became the architect. You designed leverage systems that multiply. Leadership philosophies that guide. Wealth architectures that hold. Legacy frameworks that endure.\"",to:"\"You started Form 1 as an observer. In Form 2, you challenged, acted and built evidence. In Form 3, you became more strategic and learned to design systems and leadership. In Form 4 Term 1, you extended that architecture into wealth and legacy.\""},
      {from:"\"Next year, Grade 12. Your final year. You will become the launcher. You will take everything you have designed and launch it into the world. The observer who noticed everything. The challenger who demanded answers. The strategist who built systems. The architect who designed structures. She will now launch. She will walk into adulthood with a plan, a purpose, and herself.\"",to:"\"You do not wait for another school year to become the launcher. Form 4 is already the launch year. The next two terms will turn the architecture into decisions about O-Level transition, contracts, work, career, risk and adult systems.\""},
      {from:"She walks through the door. Into Grade 12. Into whatever comes next.",to:"She walks through the door into Form 4 Term 2 — still in school, but now preparing deliberately for what may come after O-Level."},
      {from:"✍️ Activity 80: My Closing Words — Grade 11",to:"✍️ Activity 80: My Term 1 Closing Words — Form 4"},
      {from:"What I will carry forward to Grade 12:",to:"What I will carry forward into Form 4 Term 2:"},
      {from:"📂 Portfolio: Save this. This is your final entry of Grade 11.",to:"📂 Portfolio: Save this. This is the final entry of Form 4 Term 1."},
      {from:"You finished Grade 11.",to:"You finished Form 4 Term 1."},
      {from:"Keep going. Grade 12 awaits. The launcher is rising.",to:"Keep going. Form 4 Term 2 awaits: adult money, O-Level pathways, contracts, work and career launch."},
    ],
  },
  "g12-t1-l01-001": {
    title:"FORM 4 TERM 2 — THE LAUNCH PHASE",
    textReplacements:[
      {from:"Recall key learning from Grade 11.",to:"Recall the architecture you built in Form 3 and Form 4 Term 1."},
      {from:"📘 Myah's Morning — Grade 12",to:"📘 Myah's Morning — Form 4 Term 2"},
      {from:"Myah wakes before her alarm. She has been doing that for three years now—ever since the 21-day tracker in Grade 9. Some habits stick.",to:"Myah wakes before her alarm. The habit is old now—ever since the 21-day tracker in Form 2. Some habits stick."},
      {from:"She looks at the notebook on her bedside table—the one she has kept since Grade 9. Four years of learning. Four years of becoming.",to:"She looks at the notebook on her bedside table—the one she has kept since Form 2. Three completed school years of evidence sit behind her. Form 4 is now turning that evidence into launch decisions."},
      {from:"Grade 9: Values. Mama Rose. The grant office. The cooler box. Learning that the system does not always reward rule-followers. Learning to make herself impossible to ignore.",to:"Form 2: Values. Mama Rose. The committee office. The cooler box. Enterprise, community money, habits, execution and the discovery that agency requires action."},
      {from:"Grade 10: Investing. Systems. Tax. Retirement. Insurance. Her Financial Independence Plan—with failure signals, control scores, and Red Lines. Her sweet spot: financial education that actually works.",to:"Form 3: Investing. Systems. Tax. Financial independence. Leverage. Leadership. Her plans became more rigorous—failure signals, control scores, Red Lines and evidence."},
      {from:"Grade 11: Leverage. Leadership. Wealth Building. Legacy. Her Leverage Plan. Her Leadership Philosophy. Her 10-Year Wealth Plan. Her Life and Legacy Plan. The architect's blueprints—complete.",to:"Form 4 Term 1: Advanced wealth and legacy. Her 10-Year Wealth Plan and Life and Legacy Plan now sit beside the leverage and leadership architecture she built earlier. The blueprints exist. The next question is how to live them."},
      {from:"📘 What We Learned in Grade 11",to:"📘 What We Carry into the Launch Phase"},
      {from:"What is one thing from Grade 11 that you are most proud of? What is one thing you want to launch—make real—this year? What are you afraid might happen when your plans meet reality?",to:"What is one piece of evidence from Form 3 or Form 4 Term 1 that you are most proud of? What is one thing you want to make real before Form 4 ends? What are you afraid might happen when your plans meet reality?"},
      {from:"✍️ Activity 1: My Grade 12 Strategic Audit",to:"✍️ Activity 1: My Form 4 Launch Audit"},
      {from:"Part A: My Assets from Grade 9, 10, and 11",to:"Part A: My Assets from Forms 2–4"},
      {from:"Part C: My Intention for Grade 12",to:"Part C: My Intention for the Rest of Form 4"},
      {from:"Key idea: You are not starting Grade 12 empty. You are starting with everything you built in Grade 9, Grade 10, and Grade 11—the skills, the evidence, the scars, the wins. The paradox: the more you learn, the more you realise you do not know. But the more you know, the more you can launch. You are not starting from zero. You are starting from everything you have become.",to:"Key idea: you are not entering the launch phase empty. You carry the skills, evidence, scars, systems and wins built across Forms 1–4. The more you learn, the more you notice what you still need to learn. That is not weakness. It is a better starting point for real decisions."},
      {from:"Question 1: What is the theme of Grade 12? Why is this called the \"launch year\"? Look back at your Grade 11 Life and Legacy Plan. What is one thing from that plan that you want to launch this year?",to:"Question 1: Why is Form 4 the launch year? Look back at your Life and Legacy Plan. What is one part of that architecture you want to make real before O-Level ends?"},
      {from:"Question 3 — The Reality Forecast: You have designed plans for years. In Grade 12, those plans meet reality. Predict: what part of your plan is most likely to break on contact with the real world? What will you do when it breaks—revise, persist, or abandon?",to:"Question 3 — The Reality Forecast: your plans are meeting reality now. What part is most likely to break first? What evidence would tell you to revise, persist or abandon that part?"},
      {from:"Share your intention for Grade 12 with one person who will hold you accountable. Say: \"This is what I intend to do this year. Ask me about it in June. If I have not made progress, you have permission to ask hard questions.\" Write down their name and the date you told them. This is your first Launch Task. Not a simulation. A real commitment made to a real person.",to:"Share your Form 4 launch intention with one person who will hold you accountable. Give them a specific review date. This is a real commitment to a real person, not a simulation."},
      {from:"| Date | | | Lesson | Lesson 1 — Grade 12 Strategic Audit | | Launch Decision | My intention for this year: | | Prediction | What I think will happen when my plans meet reality: | | Result | | | Learning | | | Next Action | My one action this week: |",to:"| Date | | | Lesson | Lesson 1 — Form 4 Launch Audit | | Launch Decision | My intention for the rest of Form 4: | | Prediction | What I think will happen when my plans meet reality: | | Result | | | Learning | | | Next Action | My one action this week: |"}
    ],
  },
  "g12-t1-l03-003": {
    title:"LEGAL ADULTHOOD — CONTRACTS, RIGHTS & WHERE TO GET HELP",
    tableReplacements:[
      {
        cellIncludes:"Legal Aid South Africa",
        rows:[
          ["Resource","What It Offers","Cost / Rule"],
          ["Legal Aid Directorate","Legal advice and representation for qualifying people in civil, criminal and related matters","Eligibility applies; verify current Legal Aid Directorate guidance"],
          ["University legal clinic","Supervised legal assistance where a university clinic offers it","Availability and eligibility vary"],
          ["Small Claims Court","A magistrates court can act as a small claims court for qualifying civil claims","Jurisdiction and monetary limits are set by current Zimbabwe law; verify before filing"],
          ["Private legal practitioner","Professional legal advice and representation","Paid"],
        ],
      },
    ],
  },
  "g12-t1-l04-004": {
    title:"MANAGING YOUR OWN MONEY — MYAH'S FIRST ACCOUNT",
    textReplacements:[
      {from:"Myah turns 18. First thing she does after her birthday: open a bank account in her own name. She has been saving for this. Her delivery service income. Her workshop fees. The money from the digital products she created after Themba's advice in Grade 11—create once, earn many times.",to:"Myah turns 18. One of the first things she does is open an account in her own name. She has been saving for this through delivery income, workshop fees and digital products. She compares account fees, access, transaction limits and what protections apply before choosing."},
      {from:"She goes to the bank with her ID and R500. Not her mother. Not Ms. Daniels. Her. Alone. She is nervous. But she remembers what she learned about the grant office in Grade 9: the system rewards visibility. Show up. Ask questions. Make yourself impossible to ignore.",to:"She goes to the bank with her identification documents and US$50 in this illustrative story. Not her mother. Not Ms. Daniels. Her. She asks what documents are required, what fees apply, how the account handles different currencies, and whether eligible deposits are protected through the Deposit Protection Corporation."},
      {from:"No credit card — not yet. She is not ready. She knows herself. She remembers Sipho's story from Grade 10—the credit card, the minimum payments, the trap.",to:"No borrowing product yet. She is not ready. She remembers the earlier credit lesson: access to credit is not the same as readiness to use it."},
      {from:"Key idea: Myah set up a simple system: savings account for goals, cheque account for spending, debit card only, weekly transfer, weekly review. She felt in control. The paradox: a bank account is just a tool. The system around it is what matters. You can have a million rand in the bank. If you have no system, it will disappear. You can have R500. If you have a system, it will grow.",to:"Key idea: Myah sets up a simple system: one place for goals, one place for day-to-day spending, controlled payment access, regular transfers and a weekly review. The account is only a tool. The system around it—fees, security, habits, records and purpose—is what gives it value."},
      {from:"Here’s the tension: the system only works if you follow it. The best budget in the world is worthless if you ignore it. The most brilliant tracking method is useless if you stop after two weeks. The architect designed her financial architecture in Grade 11. The operator must now live it—every day, every week, every month. The design is complete. The living is the work. And here is the deeper truth: the first month of managing your own money is the hardest. Everything is new. Every decision is conscious. The cognitive load is exhausting. Most people abandon their systems in the first month—not because the system was bad, but because the effort of maintaining it was greater than they expected. The key is to survive the first month. After that, the system becomes habit. After that, it runs in the background. But you have to survive the first month first.",to:"Here’s the tension: a good money system still requires maintenance. Fees change. Fraud risks change. Your income changes. The first months of managing money independently can feel demanding because every decision is new. Simplify the routine enough to keep it: review balances, verify transactions, protect credentials, move money toward goals and adjust when reality changes."},
    ],
  },
  "g12-t1-l05-005": {
    title:"MYAH'S FIRST BIG DECISION — THE POST-O-LEVEL MATRIX",
    tableTextReplacements:[
      {from:"Post-matric",to:"Post-O-Level / post-school",exact:true},
      {from:"After finishing school",to:"After Form 4 / O-Level, or after another school-leaving point",exact:true},
    ],
    textReplacements:[
      {from:"Identify major post-matric options.",to:"Identify major pathways after Form 4 / O-Level."},
      {from:"She has options. More than she expected. The workshops she started in Grade 10 have grown. The digital products—the study guides, the financial literacy resources—sell quietly in the background. The delivery service with Thabo still brings in income. And she has been accepted to university—a Bachelor of Education, the teaching degree she has been working toward since Grade 10 when she found her sweet spot.",to:"She has options. More than she expected. Her workshops and digital products have grown. The delivery service with Thabo still brings in income. She is also exploring further study. For Myah, the question is not whether one path is universally best. It is which combination fits her goals, readiness, finances and entry requirements."},
      {from:"Ms. Daniels puts down her tea. \"Then let us use a tool you have not used since Grade 10. The decision matrix. But this time, it is not a school exercise. This is your life.\"",to:"Ms. Daniels puts down her tea. \"Use the decision matrix again. This time, compare real Form 4 pathways: A-Level where appropriate, university or college routes, polytechnic or technical training, apprenticeship or skills development, employment, entrepreneurship, or a structured hybrid.\""},
      {from:"Myah is quiet. Then: \"Hybrid feels right. I do not want to choose between learning and doing. I want both. I have been doing both since Grade 9—studying and building. Why would I stop now?\"",to:"Myah is quiet. Then: \"Hybrid feels right. I do not want to choose between learning and doing. I want both. I have been combining study and building since Form 2. Why would I stop now?\""},
      {from:"What are your post-matric options? What criteria matter most to you? What does your head say? What does your heart say? Where do they agree—and where do they conflict?",to:"What are your realistic pathways after Form 4? Which options require A-Level first? Which can begin after O-Level? What criteria matter most to you—cost, entry requirements, income, skill development, location, family responsibilities, time or something else?"},
      {from:"✍️ Activity 5: My Post-Matric Decision Matrix",to:"✍️ Activity 5: My Post-O-Level Decision Matrix"},
      {from:"Question 2: What is one option you are considering after matric? What criteria matter most to you in making this decision? Myah chose the hybrid path. Why did it score highest—and why did it feel right to her?",to:"Question 2: What is one option you are considering after Form 4? Does it require A-Level, tertiary admission, an apprenticeship, employment readiness, capital or another prerequisite? What criteria matter most in your decision?"},
      {from:"| Date | | | Lesson | Lesson 5 — Post-Matric Decision Matrix | | Launch Decision | My post-matric path: | | Prediction | | | Result | | | Learning | | | Next Action | |",to:"| Date | | | Lesson | Lesson 5 — Post-O-Level Decision Matrix | | Launch Decision | My next pathway: | | Prediction | | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g12-t1-l06-006": {
    title:"PATHWAYS AFTER FORM 4 — THE PANEL AT THE COMMUNITY HALL",
    textReplacements:[
      {from:"Understand the range of post-matric options.",to:"Understand the range of pathways after Form 4 / O-Level."},
      {from:"A young woman named Thuli (22, TVET graduate): \"I did electrical engineering at a TVET college. Two years. Very practical. I had a job offer before I graduated. I earn R12,000 a month as an apprentice electrician. In five years, I will be qualified and earning double. University is not the only path. Skilled trades are in demand. And you earn while you learn.\"",to:"A young woman named Thuli describes a technical route: \"I chose practical training in electrical engineering. I combined classroom learning with workplace experience and moved into an apprenticeship. University is not the only path. The important questions are whether the programme is recognised, what practical experience it gives you, what it costs, and what work it can realistically lead to.\""},
      {from:"Question 1: Name three post-matric pathways. For each, state one advantage and one disadvantage. What is one advantage of an apprenticeship or learnership over university? What is one advantage of university over an apprenticeship?",to:"Question 1: Name three pathways after Form 4. For each, state one advantage, one risk and one prerequisite. Compare A-Level, tertiary/technical study, apprenticeship or skills training, employment and enterprise without assuming one route is best for everyone."},
    ],
  },
  "g12-t1-l07-007": {
    title:"TERTIARY APPLICATIONS — BUILD YOUR TRACKER",
    tableTextReplacements:[
      {from:"APS score",to:"Entry requirements",exact:true},
      {from:"Admission Point Score — calculated from matric results",to:"Subjects, grades and other criteria required by the institution",exact:true},
    ],
    tableReplacements:[
      {
        cellIncludes:"APS Required",
        rows:[
          ["Institution / Route","Programme","Entry Requirements","Application Window","Application Cost","Where to Verify"],
          ["University of Zimbabwe","Relevant degree","Check current programme and subject requirements","Verify current intake","Verify current fee","Official UZ admissions information"],
          ["National University of Science and Technology","Relevant degree","Check current programme and subject requirements","Verify current intake","Verify current fee","Official NUST admissions information"],
          ["Polytechnic / teachers college / other tertiary institution","Relevant diploma, certificate or teacher-training programme","Check current institutional and Ministry requirements","Verify current intake","Verify current fee","Official institution / Ministry source"],
        ],
      },
    ],
    textReplacements:[
      {from:"\"The biggest mistake students make,\" Mrs. Botha says, \"is waiting. They think they have time. They do not. Most university applications close between June and September—months before matric finals. If you wait until after your results, you have already missed the deadline. Apply early. Even if you are not sure. You can always decline later. You cannot apply after the deadline.\"",to:"\"The biggest mistake students make is assuming every institution uses the same timetable,\" Mrs. Botha says. \"They do not. Intake dates, entry requirements, fees and application windows differ. Build your tracker from official sources and update it whenever an institution publishes a new intake.\""},
      {from:"Here’s the tension: the system rewards the early. The people who apply in March get considered before the people who apply in September. The people who wait until the last minute are competing for fewer spots. The early bird does not just get the worm—it gets the worm because the late bird never had a chance. This is not fair. But it is true. The university application system, like the grant office in Grade 9, rewards those who show up early, who follow up, who make themselves impossible to ignore. Myah learned that lesson in Grade 9. She is applying it now. The grant office taught her that waiting is a trap. She is not waiting.",to:"Here’s the tension: an application can fail for reasons unrelated to your ability—missing documents, an expired deadline, a programme whose requirements you did not check, or an assumption that an old prospectus still applies. Agency here means building a reliable system: official source, deadline, documents, submission proof and follow-up date."},
    ],
  },
  "g12-t1-l08-008": {
    title:"BURSARIES, SCHOLARSHIPS, LOANS & FUNDING",
    tableReplacements:[
      {
        cellIncludes:"National Student Financial Aid Scheme",
        rows:[
          ["Term","Definition"],
          ["Bursary","Funding for study that may be merit-, need-, employer- or programme-based; conditions vary"],
          ["Scholarship","Funding usually tied to stated criteria such as merit, need, field or sponsorship conditions"],
          ["Student loan","Money borrowed for eligible study costs and repaid according to the loan agreement"],
          ["Government student-loan scheme","Public student finance available under current Zimbabwe rules and participating-institution arrangements"],
          ["Repayment","Paying back borrowed funding according to the contract"],
        ],
      },
      {
        cellIncludes:"Household income below",
        rows:[
          ["Option","What It Is","Repay?","What to Verify"],
          ["Government student-loan scheme","Public student finance available under current rules","Usually yes; terms vary","Current Ministry/institution process, eligibility, participating institutions and repayment terms"],
          ["Institutional bursary / scholarship","Funding offered by a university, college or partner","Usually no if conditions are met","Eligibility, coverage, renewal conditions and deadlines"],
          ["Company / foundation sponsorship","External organisation funds eligible study","Depends on agreement","Work obligations, field restrictions and all contract conditions"],
          ["Bank / private student loan","Commercial borrowing for study","Yes, with interest/fees","Total cost, guarantor/security requirements, repayment start and default risk"],
          ["Part-time work / enterprise","Earn while studying where feasible","No loan repayment","Time cost, academic impact, income reliability and legal/work conditions"],
        ],
      },
    ],
    textReplacements:[
      {from:"\"When I finished matric, I had good marks. I got into university. And then I saw the fees. R40,000 a year. My mother earned R6,000 a month. The math did not work.\"",to:"\"When I reached the point of applying for further study, I had the marks for admission but not enough money to ignore the cost. Tuition, accommodation, transport, books and daily living all had to be funded. The maths did not work without a funding plan.\""},
      {from:"\"NSFAS covered my tuition, accommodation, books, and a living allowance. I would not be an accountant without it. But here is what nobody tells you: NSFAS is not a gift. If you graduate and get a job, you repay a percentage of your salary. It is a loan with grace. And the application process is brutal—documents, deadlines, follow-ups. You have to fight for it. But it is worth fighting for.\"",to:"\"I eventually used a combination of student finance and bursary support. The important lesson was not the name of one scheme. It was reading every condition: what costs were covered, whether the funding had to be repaid, what performance requirements applied, what documents were needed and what happened if circumstances changed.\""},
      {from:"Myah checks her household income. Her mother earns below R350,000 a year. She qualifies. She starts the NSFAS application that afternoon.",to:"Myah builds a funding tracker that afternoon. She lists current government student-loan options, institutional bursaries, scholarships, employer or foundation funding and commercial loans. For every option she records eligibility, coverage, deadline, repayment terms and the official source."},
      {from:"NSFAS: Do I qualify? ☐ Yes ☐ No ☐ Not sure",to:"Current government student-loan option: Am I eligible? ☐ Yes ☐ No ☐ Not sure — Official source checked: __________________"},
      {from:"Zinhle said NSFAS is \"a loan with grace.\" What does that mean? Why is it important to understand the repayment terms—even if they seem far away? _________________________________",to:"If a funding option is a loan, what triggers repayment? What interest, fees, guarantor requirements or penalties apply? Why must you know this before accepting the money? _________________________________"},
      {from:"Here’s the tension: the funding system is labyrinthine. Forms. Deadlines. Supporting documents. Proof of income. Certified copies. Online portals that crash. Helplines that do not answer. The people who need funding most are often the people least equipped to navigate the bureaucracy—less access to internet, less experience with forms, less support at home. The system is not designed for them. It is designed for people who already know how to work the system. That is not fair. But it is true. Zinhle got through it because she was stubborn. Because she asked for help. Because she refused to give up. The grant office in Grade 9 taught Myah that waiting is a trap. The funding system teaches the same lesson. Do not wait. Do not give up. Ask for help. Be stubborn. The money is there. But you have to fight for it.",to:"Here’s the tension: funding processes can be document-heavy and difficult to navigate, and available schemes can change. Do not build your future around money that has not been confirmed. Apply broadly where you genuinely qualify, keep proof of every submission, ask institutions for current guidance, and maintain a backup plan if the preferred funding does not arrive."},
      {from:"Question 1: What is the difference between a bursary and a loan? Which would you prefer? Why? What does NSFAS cover? Who qualifies? What are the repayment conditions?",to:"Question 1: What is the difference between a bursary, scholarship and student loan? For one current Zimbabwe funding option, identify what it covers, who qualifies and whether repayment or work obligations apply."},
      {from:"Question 2: Zinhle said NSFAS is \"a loan with grace.\" What does that mean? What is one funding option you could explore? What is your first step to apply?",to:"Question 2: What is one funding option you could genuinely explore? What is the first official source you need to check, and what document do you need to prepare?"},
      {from:"Start one funding application this week. NSFAS. A bursary. Something. Open the form. Read the requirements. Gather one document. Take the first step. This is not a simulation. This is your actual funding for your actual future. Start.",to:"Start one real funding action this week if you are eligible: open an official application or funding-information page, read the requirements, and gather one required document. If no current application applies to you, build a dated funding tracker instead."},
      {from:"If you cannot start an application, talk to your family about funding. Ask: \"Do you have any experience with bursaries or loans? What do you know about NSFAS? Can you help me gather the documents I need?\" Write down what you learn.",to:"If you cannot start an application, talk to your family or school about funding. Ask what they know about bursaries, scholarships, government student loans, sponsorships and the documents you may need. Then verify anything important against an official source."},
    ],
  },
  "g12-t1-l09-009": {
    title:"STRUCTURED GAP YEAR OPTIONS — SIPHO'S STORY",
    textReplacements:[
      {from:"Sipho sits at Mama Rose's kitchen. He is 18 now. He has been through a lot—the melted sweets in Grade 9, the credit card in Grade 10, the bicycle repair business, the slow climb from no goals to something resembling a plan. He now has a workshop. Two employees. Real income. Real responsibility.",to:"Sipho sits at Mama Rose's kitchen. He is 18 now. He has been through a lot—the failed sweets test in Form 2, later money mistakes, the bicycle repair business, and the slow climb from no goals to a real plan. He now has a workshop, two employees and responsibilities that make a gap year a serious decision rather than a holiday."},
      {from:"January–March: Worked at Emmanuel's spaza shop. Saved R3,000. Learned inventory, customer service, the rhythm of a business.",to:"January–March: Worked at Emmanuel's tuckshop. In this illustrative story he saved US$300 and learned inventory, customer service and the rhythm of a small business."},
      {from:"April–June: Took an online course in digital marketing—R500 on Udemy. Learned how to run ads, write copy, build a simple website.",to:"April–June: Took an online digital-marketing course after comparing providers and cost. Learned the basics of ads, copy and a simple website."},
      {from:"The Launcher's Question: If you are not taking a gap year, what could you do in a \"gap summer\"—the three months between matric results and your next step—to gain skills, money, or clarity?",to:"The Launcher's Question: If you are not taking a gap year, how could you use the transition months after O-Level to gain skills, money, experience or clarity without assuming every learner has the same calendar?"},
      {from:"If you are not taking a gap year, write a one-page plan for your \"gap summer\"—the months between matric and your next step. What will you do to prepare? What skills will you build? What money will you save?",to:"If you are not taking a gap year, write a one-page transition-period plan. What will you do before your next formal step begins? What skill, work experience, application task or savings goal will you complete?"},
    ],
  },
  "g12-t1-l10-010": {
    title:"ENTREPRENEURSHIP AFTER FORM 4 — LETHABO'S DECISION",
    textReplacements:[
      {from:"Understand entrepreneurship as a post-matric path.",to:"Understand entrepreneurship as one possible pathway after Form 4."},
      {from:"Lethabo's clock business has grown beyond what anyone expected—including him. What started as a reminder clock for his grandmother in Grade 9 is now a small manufacturing operation. He has three part-time helpers. He sells clocks to clinics, old age homes, and individual customers. He has a digital guide—\"How to Make Your Own Reminder Clock\"—that sells online. He earns about R4,000 a month. He is fielding inquiries from outside Gauteng. People want his clocks in Limpopo, in KwaZulu-Natal. Growth is pulling at him.",to:"Lethabo's clock business has grown beyond what anyone expected—including him. What started as a reminder clock in Form 2 is now a small manufacturing operation with three part-time helpers. He sells to clinics, care facilities and individual customers. He also has a digital guide. In this illustrative story the business produces about US$400 a month, and inquiries are arriving from other parts of Zimbabwe. Growth is pulling at him."},
      {from:"He is 18 now. Matric is ending. And he has a decision.",to:"He is 18 now. Form 4 is ending. And he has a decision."},
      {from:"They talk through the options. Lethabo calls Mr. Patel—the factory owner who has mentored him since Grade 10.",to:"They talk through the options. Lethabo calls Mr. Patel—the factory owner who has mentored him since Form 3."},
      {from:"Could you start a business right after school? What would you need? What do you already have? What is the \"R20 version\" of your business idea—the smallest possible test?",to:"Could you start a business after Form 4? What would you need? What do you already have? What is the smallest safe version of the idea you could test without borrowing money needed for essentials?"},
      {from:"The Launch Commitment: Lethabo started with R20 and a problem. What is the smallest, cheapest version of your business idea—the version you could test THIS MONTH without borrowing money?",to:"The Launch Commitment: Lethabo started with a problem and a tiny test. What is the smallest, cheapest version of your business idea that you could test this month without borrowing money?"},
      {from:"If there is no young entrepreneur to talk to, write a reflection on what business you would start and why. What would be your R20 version—the smallest possible test?",to:"If there is no young entrepreneur to talk to, write a reflection on what business you would test and why. What is the smallest possible version that gives you real evidence?"},
    ],
  },
  "g12-t1-l11-011": {
    title:"FIRST-YEAR TERTIARY EXPERIENCE — THE REAL VERSION",
    textReplacements:[
      {from:"Financially: \"I had a budget. NSFAS covered my basics. But I blew my living allowance in the first two months—takeaways, data, going out. By March, I was eating pap and nothing else. I had to call my mother for money. It was humiliating. After that, I tracked every rand. I still do. The tracking app on my phone is the only reason I am still afloat.\"",to:"Financially: \"I had a budget and some student funding for the basics. But I spent too much of my living money early—takeaways, data, going out. Later I had to ask my family for help. After that, I tracked every amount and labelled the currency. The lesson was not that a budget exists. It was that the budget has to survive actual behaviour.\""},
    ],
  },
  "g12-t1-l12-012": {
    title:"STARTING WORK — YOUR FIRST PAYSLIP",
    tableReplacements:[
      {
        cellIncludes:"Unemployment Insurance Fund",
        rows:[
          ["Term","Definition"],
          ["Probation","A trial or assessment period at the start of some jobs, subject to the employment agreement and law"],
          ["Contract","A legal agreement setting out work terms and responsibilities"],
          ["Payslip","A statement showing gross pay, deductions and net pay"],
          ["PAYE","Employee income tax deducted by the employer and remitted to ZIMRA under current rules"],
          ["NSSA contribution","A statutory social-security contribution where the employment is covered; current rates and ceilings must be verified"],
        ],
      },
      {
        cellIncludes:"Gross salary",
        rows:[
          ["Description","Illustrative Amount"],
          ["Gross salary","US$500"],
          ["Illustrative PAYE for the exercise only","-US$50"],
          ["Illustrative NSSA / statutory contribution","-US$20"],
          ["Other agreed pension, medical or voluntary deductions","-US$30"],
          ["Illustrative net pay","US$400"],
        ],
      },
    ],
    textReplacements:[
      {from:"\"I expected R12,000. I got R8,580. R3,420 disappeared before it reached me. I was angry. I felt robbed. I called my mother. She said: 'Welcome to adulthood.'\"",to:"\"I expected to receive my gross salary. Then I saw the payslip and realised gross pay and net pay are different. Some deductions were statutory; others depended on my employment arrangements. I was frustrated because I had built my budget around the wrong number.\""},
      {from:"\"Then I learned what each deduction was for. PAYE—income tax. That pays for roads, schools, clinics. UIF—unemployment insurance. If I lose my job, that fund helps me survive. Pension—my future self. Medical aid—my health. The money was not stolen. It was allocated. But nobody had explained it to me. I had to figure it out on my own. That is why I am telling you now. So you are not surprised on your first payday.\"",to:"\"Then I learned to read every line. PAYE is employee income tax administered by ZIMRA. NSSA contributions apply to covered employment under current rules. A private pension, medical arrangement, union fee or voluntary deduction only belongs on my plan if it actually applies to me. The adult skill is not memorising one old payslip. It is knowing how to verify what each deduction means.\""},
      {from:"If you start working full-time, what are you most excited about? Most nervous about? What would you do if your first payslip was R3,420 less than you expected?",to:"If you start formal work, what are you most excited about? Most nervous about? What would you do if net pay was materially lower than the gross salary you used in your budget?"},
      {from:"Key idea: Zinhle's first payslip was R3,420 less than she expected. She learned the hard way. The paradox: your gross salary sounds amazing. Your net salary is what you actually get. Understand the difference. Plan for it. Or be surprised—and possibly in trouble—on your first payday.",to:"Key idea: gross pay and net pay are not the same. Your budget must be based on the amount you can actually use after valid deductions. The exact PAYE table, NSSA rate or other deduction can change, so verify current official rules rather than relying on an old example."},
      {from:"Here’s the tension: the deductions are not theft. They are allocations. PAYE pays for the society you live in. UIF is a safety net. The pension is your future self. Medical aid is your health. You can resent them. Or you can understand them. The resentment does not change the numbers. The understanding lets you plan. The adult learns what each deduction is for—and budgets accordingly. The child complains and is perpetually surprised. The choice is yours. And here is the deeper truth: the payslip shock is not just about money. It is about the loss of an illusion—the illusion that the number you agreed to is the number you will receive. That loss is a small grief. Allow yourself to feel it. Then do the math. Then adjust. The grief passes. The math remains.",to:"Here’s the tension: not every deduction has the same purpose or legal basis. Some are statutory, some contractual and some voluntary. Do not treat every deduction as automatically correct, and do not assume every deduction is optional. Read the payslip, compare it with your contract and current official rules, ask questions where something is unclear, and budget from verified net pay."},
      {from:"If there is no family member to ask, research the current minimum wage in South Africa. Write down: What is it? What jobs pay minimum wage? What does a person earning minimum wage take home after deductions?",to:"If there is no family member to ask, use official sources to find the current ZIMRA PAYE table and NSSA contribution guidance. Record the date of each source. What would you need to know before calculating a real person's net pay?"},
    ],
  },
  "g12-t1-l13-013": {
    title:"MOVING OUT? — THE REAL COST OF INDEPENDENCE",
    textReplacements:[
      {from:"Thabo is thinking about moving out after matric. His delivery business has grown. He has five part-time employees now. Revenue is about R12,000 a month. Profit about R7,000 after paying everyone. He wants independence. He wants his own space.",to:"Thabo is thinking about moving out after Form 4. His delivery business has grown. In this illustrative example, revenue is about US$1,200 a month and profit about US$700 after paying business costs and helpers. He wants independence. He wants his own space."},
      {from:"He sits with Myah at Emmanuel's spaza shop. They work through the numbers.",to:"He sits with Myah at Emmanuel's tuckshop. They work through the numbers."},
      {from:"His profit: R7,000.",to:"His illustrative profit: US$700."},
      {from:"Gap: R2,000.",to:"Illustrative gap: US$200."},
    ],
    tableReplacements:[
      {
        cellIncludes:"Rent (shared flat, own room)",
        rows:[
          ["Expense","Illustrative Monthly Cost"],
          ["Rent (shared room / flat arrangement)","US$280"],
          ["Electricity and water","US$50"],
          ["Internet / data","US$40"],
          ["Food","US$180"],
          ["Transport","US$90"],
          ["Phone / airtime","US$35"],
          ["Toiletries and household","US$30"],
          ["Clothing","US$40"],
          ["Emergency saving","US$70"],
          ["Entertainment","US$50"],
          ["Unexpected / replacement","US$35"],
          ["Total","US$900"],
        ],
      },
    ],
  },
  "g12-t1-l14-014": {
    textReplacements:[
      {from:"Myah is planning to share a flat when she moves to Pretoria for her part-time studies and business. She has never shared a living space with anyone except her mother. She is nervous.",to:"Myah is considering a shared flat in Harare if her study-and-business plan requires her to move. She has never shared a living space with anyone except family. She is nervous—and she knows that affordability is only one part of the decision."},
    ],
  },
  "g12-t1-l15-015": {
    title:"PROJECT LAUNCH — MY POST-O-LEVEL TRANSITION PLAN",
    tableTextReplacements:[
      {from:"My Post-Matric Path",to:"My Post-O-Level Path",exact:true},
      {from:"NSFAS? Bursaries? Loans? Work?",to:"Government student loan? Bursary? Scholarship? Sponsorship? Loan? Work?"},
    ],
    textReplacements:[
      {from:"Ms. Daniels gathers everyone at the community hall. The same hall where they have presented their plans since Grade 9. The same chairs. The same sense of occasion. But everything feels different now. This is the last Term 1 project of their school career. The launch is imminent.",to:"Ms. Daniels gathers everyone at the community hall. The same hall where they have presented plans since Form 2. This project closes the transition cycle inside Form 4 Term 2. O-Level completion is getting closer, and the plans now need dates, evidence and contingencies."},
      {from:"\"This term, we have explored transition—what changes at 18, your options after matric, funding, living independently, roommates. Now it is time to create your personal plan.\"",to:"\"In this cycle, we explored legal adulthood, pathways after Form 4, tertiary and skills applications, funding, work, enterprise and the costs of independence. Now it is time to build your transition plan.\""},
      {from:"MY POST-MATRIC TRANSITION PLAN",to:"MY POST-O-LEVEL TRANSITION PLAN"},
      {from:"\"Your task is to create a realistic, actionable plan for the next 1–2 years after matric. This is not a wish list. It is a strategy. It must include your path, your timeline, your funding, your living situation, your budget, and your contingency plans. It must include Reality Checks—because a plan without honesty checks is just a fantasy. It must include Managing the Downside—because every strategy casts a shadow, and the shadow you do not see is the one that will undermine you.\"",to:"\"Your task is to create a realistic plan for the next one to two years after Form 4. It may include A-Level, tertiary or technical study, apprenticeship, work, enterprise, a structured gap period or a hybrid. Include the prerequisites, timeline, funding, living situation, budget, contingencies, Reality Checks and downside management relevant to your actual path.\""},
      {from:"\"This plan is the bridge between the architect you became in Grade 11 and the operator you are becoming in Grade 12. It is the first document of your adult life. Treat it with that weight.\"",to:"\"This plan is the bridge between the architecture you built through Form 3 and Form 4 Term 1 and the operator you are becoming now. Treat it as a living document: serious enough to guide action, flexible enough to change when evidence changes.\""},
      {from:"This is the first final project of Grade 12. What part are you most confident about? What part feels hardest? What section are you most avoiding?",to:"This is the first major launch project of Form 4. What part are you most confident about? What part feels hardest? What section are you most avoiding?"},
      {from:"My post-matric path: _________________________________",to:"My post-O-Level / next pathway: _________________________________"},
      {from:"The Shadow Audit: For your primary post-matric strategy, what is the shadow—the unintended consequence, the risk, the downside? Name it. Then name your management plan.",to:"The Shadow Audit: For your primary transition strategy, what is the main unintended consequence or downside? Name it. Then name your management plan."},
      {from:"| Date | | | Lesson | Lesson 15 — Transition Plan Launch | | Launch Decision | My post-matric path: | | Prediction | | | Result | | | Learning | | | Next Action | |",to:"| Date | | | Lesson | Lesson 15 — Transition Plan Launch | | Launch Decision | My next pathway: | | Prediction | | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g12-t1-l16-016": {
    textReplacements:[
      {from:"Myah shares her plan: Hybrid path. UNISA part-time BEd. Business part-time—workshops, digital products. NSFAS funding. Shared flat in Pretoria. Budget balanced with R500 buffer.",to:"Myah shares her plan: a hybrid path combining part-time further study with workshops and digital products. She has identified two possible institutions and will only confirm one after checking current admission, cost and funding conditions. Her illustrative budget has a US$50 buffer and a shared-living option in Harare."},
      {from:"Thabo studies her numbers. \"Your budget has a R500 buffer. That is tight. What if rent increases? What if a client does not pay? What is your plan B for months when business income dips? And what is the shadow of the hybrid path? What suffers when you are doing both?\"",to:"Thabo studies her numbers. \"Your budget has a US$50 buffer in this illustration. That is tight. What if rent increases? What if a client does not pay? What is your plan B for months when business income dips? And what is the shadow of the hybrid path? What suffers when you are doing both?\""},
      {from:"Good questions. Myah adds a specific contingency: \"If business income drops below R2,000 in any month, I will take on tutoring students to fill the gap.\" And for the shadow: \"The shadow of hybrid is burnout. I am doing two things, each demanding full attention. My management plan: one full day off per week, non-negotiable. If I miss it two weeks in a row, I reconfigure my schedule.\"",to:"Good questions. Myah adds a contingency: \"If business income drops below the minimum level required by my budget for two review periods, I will reduce optional costs and add tutoring or other paid work before using emergency savings.\" For the shadow she writes: \"Hybrid can create burnout. I need protected recovery time and a trigger that tells me when the schedule must change.\""},
      {from:"Another good question. Myah adds a backup: \"If I cannot find a place by January 15, I will stay with my cousin in Pretoria for the first three months while I search.\"",to:"Another good question. Myah adds a backup: \"If I cannot secure suitable accommodation by my decision date, I will stay with family temporarily while I reassess transport, cost and safety.\""},
    ],
  },
  "g12-t1-l17-017": {
    title:"TRANSITION PLAN PRESENTATIONS — DAY 1",
    textReplacements:[
      {from:"Thabo presents first. His plan: grow the delivery business into a full logistics company. Hire two more employees. Save for a vehicle. Study business part-time at a TVET college. Live at home for one more year to save. His Reality Check: \"If the business is not generating R15,000 a month by December next year, I will get a part-time job to supplement. I will not let pride keep me from stability.\" His shadow: \"The shadow of growth is complexity. More employees means more management. My management plan: weekly team check-ins, clear roles, documented processes.\"",to:"Thabo presents first. His plan: grow the delivery business carefully, save toward a vehicle, explore part-time business or technical study, and live at home for one more year if that remains workable. His Reality Check uses a profit target based on his actual business records—not a borrowed number from a textbook. If the target is missed for the agreed review period, he will add paid work rather than let pride destroy stability."},
      {from:"Nosipho presents. Her plan: university, teaching degree, NSFAS, tutoring business on the side. Residence first year. Her Reality Check: \"If I fail more than one module in first year, I am not managing my time. I will either reduce my tutoring hours or get academic support.\"",to:"Nosipho presents. Her plan: follow the academic pathway required for teacher training, apply to suitable institutions, pursue bursaries or student finance where eligible, and continue tutoring only if it does not undermine her studies. Her Reality Check is tied to actual academic performance and workload."},
      {from:"\"I have been designing this since Grade 9. The grant office taught me that waiting is a trap. The cooler box taught me that starting small is better than waiting for perfect. Mrs. Nkosi taught me that the need is not always what you think. Gogo Maria taught me that compound interest is magic—but only if you start early. Mr. Patel taught me that integrity compounds. Ms. Daniels taught me that money is a tool. Life is the project. Mama Rose taught me that business is people.\"",to:"\"I have been building this since Form 2. The committee office taught me not to confuse waiting with strategy. The cooler box taught me to test small. Mrs. Nkosi taught me to investigate the real need. Gogo Maria taught me why time matters in compounding. Mr. Patel taught me that integrity compounds too. Ms. Daniels taught me that money is a tool. Mama Rose taught me that business is people.\""},
    ],
  },
  "g12-t1-l18-018": {
    textReplacements:[
      {from:"Emmanuel presents. His plan: spaza shop transformation—delivery service, cooperative buying with other shops, part-time business diploma. His Reality Check: \"If the shop is not generating enough profit to pay me a sustainable salary by age 22, I will either restructure or get a second income stream. Nostalgia is not a strategy.\" His shadow: \"The shadow of family business is unclear boundaries. I will separate business finances from family finances and have a formal employment contract with my mother.\"",to:"Emmanuel presents. His plan: transform the family tuckshop through delivery, better records, cooperative purchasing tests with other shops and part-time business learning. His Reality Check is whether the business can produce a sustainable return without confusing family money with business money."},
      {from:"\"I had no goals in Grade 8. I failed at selling sweets. I got a credit card and messed up. I cut it up. I started fixing bicycles because it was the only thing I knew how to do. Now I have a plan. I know where I am going. I know what I am building. That is not just progress. That is proof. Proof that change is possible. Proof that the person who starts with nothing can build something. And if I can do it, anyone can.\"",to:"\"I had no goals in Form 1. I failed at a small selling experiment. I made later money mistakes and had to repair them. I started fixing bicycles because it was a skill I could use. Now I have a plan and evidence. That does not mean everyone has the same starting conditions. It means change is possible when learning, support and repeated action come together.\""},
      {from:"\"Thabo. From a broken bike and a handful of customers to a logistics company with employees and a growth plan. Lethabo. From one ugly clock for your grandmother to a manufacturing business and a digital product line. Atlehang. From a single question in Grade 9—'Did you ask them why?'—to a gap year with intention and a vision for community development. Myah. From the grant office. From the cooler box. From silence and rejection. To an integrated transition plan—hybrid path, business and study, Reality Checks for every section, a budget that works, a living plan that protects her health. Sipho. From no goals. From melted sweets. From a cut-up credit card. To a business. To a plan. To a future. To a workshop with employees and a buffer to protect them.\"",to:"\"Thabo: from a broken bike and a handful of customers to a business with systems and a growth plan. Lethabo: from one rough prototype to manufacturing and digital products. Atlehang: from one question in Form 2 to a structured community-development direction. Myah: from the committee office and cooler box to an integrated transition plan. Sipho: from no goals and failed experiments to a workshop, employees and a buffer designed to protect them.\""},
      {from:"Question 3 — The Sipho Mirror: Sipho had no goals in Grade 8. Now he has a Transition Plan with a Reality Check and Managing the Downside. What version of yourself—from an earlier grade—would be most surprised by the plan you presented today? What would that younger you say?",to:"Question 3 — The Sipho Mirror: Sipho had no goals in Form 1. Now he has a Transition Plan with Reality Checks and downside management. What earlier version of yourself would be most surprised by your current plan? What would that younger you say?"},
    ],
  },
  "g12-t1-l19-019": {
    title:"TRANSITION CYCLE REFLECTION",
    textReplacements:[
      {from:"Lesson 1: Welcome to Grade 12. The launch year. Her mother's words: \"Make yourself impossible to ignore in the world.\" Her Launch Commitment.",to:"Lesson 1: Form 4 launch phase. Her Launch Commitment and the decision to turn architecture into action."},
      {from:"Lesson 8: Funding. Zinhle: \"NSFAS is a loan with grace.\"",to:"Lesson 8: Funding. Bursaries, scholarships, current student-loan schemes, sponsorships and the discipline of reading conditions."},
      {from:"Lesson 12: Zinhle's first job. The payslip shock. R3,420 gone before it reached her.",to:"Lesson 12: Zinhle's first job. Gross pay versus net pay. PAYE, NSSA and the need to verify each deduction."},
      {from:"I started this term unsure about everything after matric. Now I have a plan. A real, detailed, possible plan. Hybrid path. UNISA part-time BEd. Business part-time. Budget that works. Roommate agreement template. Reality Checks for every section. Managing the Downside. I know where I am going. I know how I will get there. I know what to do if things change. I am not the same person who started Applied Commerce in January. I am the operator now. The launcher. The one who takes everything designed and makes it real.",to:"I started this cycle unsure about what comes after Form 4. Now I have a transition plan with prerequisites, official-source checks, funding options, a budget, living arrangements, Reality Checks and downside management. I do not know exactly what will happen. But I know how I will update the plan when reality changes."},
      {from:"1. Before this term, what did I think about life after matric?",to:"1. Before this cycle, what did I think about life after Form 4 / O-Level?"},
    ],
  },
  "g12-t1-l20-020": {
    title:"TRANSITION PORTFOLIO & LETTER TO FUTURE SELF",
    textReplacements:[
      {from:"☐ Grade 12 Strategic Audit (Lesson 1) ☐ Adult Readiness Checklist (Lesson 2) ☐ Contract Readiness Plan (Lesson 3) ☐ Banking and Money Management Plan (Lesson 4) ☐ Post-Matric Decision Matrix (Lesson 5) ☐ Pathway Research (Lesson 6) ☐ University Application Plan (Lesson 7) ☐ Funding Plan (Lesson 8) ☐ Gap Year Plan (if applicable) (Lesson 9) ☐ Entrepreneurship Readiness Assessment (if applicable) (Lesson 10) ☐ University/College Readiness Plan (Lesson 11) ☐ First Job Preparation Plan (Lesson 12) ☐ Independent Living Budget (Lesson 13) ☐ Roommate Agreement Template (Lesson 14) ☐ Transition Plan Outline (Lesson 15) ☐ Feedback and Revision Plan (Lesson 16) ☐ Presentation Reflection — Day 1 (Lesson 17) ☐ Presentation Reflection — Day 2 (Lesson 18) ☐ Term 1 Reflection (Lesson 19)",to:"☐ Form 4 Launch Audit (Lesson 1) ☐ Adult Readiness Checklist (Lesson 2) ☐ Contract Readiness Plan (Lesson 3) ☐ Banking and Money Management Plan (Lesson 4) ☐ Post-O-Level Decision Matrix (Lesson 5) ☐ Pathway Research (Lesson 6) ☐ Tertiary / Skills Application Tracker (Lesson 7) ☐ Funding Plan (Lesson 8) ☐ Gap-Year Plan if applicable (Lesson 9) ☐ Entrepreneurship Readiness Assessment if applicable (Lesson 10) ☐ Tertiary Readiness Reflection (Lesson 11) ☐ First Job Preparation Plan (Lesson 12) ☐ Independent Living Budget (Lesson 13) ☐ Roommate Agreement Template (Lesson 14) ☐ Transition Plan (Lesson 15) ☐ Feedback and Revision Plan (Lesson 16) ☐ Presentation Reflections (Lessons 17–18) ☐ Transition Cycle Reflection (Lesson 19)"},
      {from:"From me, in Grade 12 Date: _________________",to:"From me, in Form 4 Date: _________________"},
      {from:"You have completed Term 1 of Grade 12.",to:"You have completed the transition cycle inside Form 4 Term 2."},
      {from:"You have explored transition—what changes at 18, your options after matric, how to plan for the next chapter. You have created a Transition Plan—with Reality Checks, with a budget, with a living plan, with contingency plans, with Managing the Downside.",to:"You have explored transition—legal adulthood, pathways after Form 4, applications, funding, work, enterprise and the costs of independence. You created a Transition Plan with official-source checks, Reality Checks, a budget, contingencies and downside management."},
      {from:"You are someone who understands legal adulthood. Can make big decisions using a matrix. Knows your post-matric options. Has a funding plan. Knows what first year of university or work might be like. Understands the costs of independence. Has a roommate agreement template. Has a complete Transition Plan. Has Reality Checks to keep yourself honest. Has named your shadows. Has a Launch Commitment. Has evidence of your readiness.",to:"You are someone who can investigate legal adulthood, compare pathways, verify admissions and funding information, build a first-job budget, estimate the cost of independence and create a Transition Plan. You have evidence of readiness—but you also know which parts still depend on future results, admission, funding and real-world conditions."},
    ],
  },
  "g12-t2-l21-021": {
    title:"THE WORLD OF WORK — WHAT AWAITS YOU IN ZIMBABWE",
    textReplacements:[
      {from:"Ms. Nkosi invites Myah, Thabo, and Lethabo to her logistics company. They have been here before—in Grade 10, when she taught them about emotional intelligence. In Grade 11, when she taught them about scaling a business. But today, she is not here to teach. She is here to warn.",to:"Ms. Nkosi invites Myah, Thabo and Lethabo to her logistics company. They have been here before—in Form 3, when they learned about leadership and systems, and in Form 4 Term 1, when they looked at growth and scale. Today she wants them to look at the labour market with evidence rather than assumptions."},
      {from:"📘 Growing Industries in South Africa",to:"📘 Investigating Growing and Changing Industries in Zimbabwe"},
      {from:"Is this field growing or shrinking in South Africa? ☐ Growing ☐ Shrinking ☐ Stable ☐ I do not know",to:"What does current Zimbabwe evidence suggest about this field? ☐ Growing ☐ Shrinking ☐ Changing ☐ Stable ☐ I do not know yet"},
      {from:"Question 2: What is one industry that is growing in South Africa? Why is it growing? What opportunities does it create? What is one industry that is shrinking? What should someone in that industry do?",to:"Question 2: Using a dated source, identify one Zimbabwe industry or occupation where demand appears to be growing or changing. What evidence supports that conclusion? What skills or qualifications does it create demand for?"},
      {from:"Research one growing industry in South Africa. Find out: What jobs exist in this industry? What qualifications do you need? What is the starting salary? What skills are in demand? Write down your findings. This is fact-finding for your own career.",to:"Research one Zimbabwe industry or occupational field. Use a current source and record the date. Find out: What roles exist? What qualifications or skills are requested? What do current vacancies or sector reports say about pay and demand? Treat advertised salaries as evidence from a particular employer/date, not a universal wage."},
    ],
  },
  "g12-t2-l23-023": {
    textReplacements:[
      {from:"Myah sits at her laptop in her room. She has been putting off writing her CV for weeks. She does not know where to start. What has she done? Sold water at a taxi rank. Helped Thabo with deliveries. Run a few workshops. Created some digital products. It does not feel like much.",to:"Myah sits at her laptop in her room. She has been putting off writing her CV for weeks. What has she done? Tested water sales at a kombi rank. Helped Thabo with deliveries. Run workshops. Created digital products. The challenge is translating informal and project experience into evidence an employer or client can understand."},
      {from:"Financial Literacy Facilitator (2023–present): Designed and delivered workshops on money management for 150+ learners. Created digital resources used by 200+ people. Generated R12,000+ in revenue from digital products.",to:"Financial Capability Facilitator: Designed and delivered money-management workshops for 150+ learners. Created digital resources used by 200+ people. Tracked participation, feedback and revenue from paid products."},
      {from:"Small Business Owner, Water Sales (2021–2022): Launched a water vending business at the taxi rank. Managed inventory, pricing, and customer relationships. Generated consistent weekly profit.",to:"Small Enterprise Project, Water Sales: Tested a water-selling concept at a kombi rank. Managed inventory, pricing, customer feedback and simple profit tracking."},
      {from:"Education: Grade 12, Tembisa High School (current). BEd (accepted, UNISA, starting February).",to:"Education: Form 4 / O-Level, current. Further-study or training applications: list only confirmed applications, offers or programmes."},
      {from:"Here’s the tension: telling that story requires you to see your own experience as valuable—and many young people do not. You look at what you have done—sold water, helped with deliveries, tutored a cousin—and think: \"That is not a real job.\" But informal experience is still experience. The skills you built selling water at a taxi rank are the same skills a retail manager uses: inventory management, customer service, pricing, cash handling. The skills you built helping with deliveries are the same skills a logistics coordinator uses: scheduling, routing, client communication. The problem is not your experience. The problem is your inability to translate it into the language of the professional world. Translation is a skill. Learn it.",to:"Here’s the tension: informal and project experience can build real skills, but a CV must not exaggerate them. Selling water at a kombi rank can demonstrate stock control, customer service and pricing; helping with deliveries can demonstrate routing and client communication. Translate honestly. Evidence is stronger than inflated titles."},
    ],
  },
  "g12-t2-l25-025": {
    tableTextReplacements:[
      {from:"In Grade 11, I was running a delivery service with three helpers...",to:"In Form 3, I was helping run a delivery service with three helpers...",exact:true},
    ],
  },
  "g12-t2-l28-028": {
    title:"SIDE HUSTLES, FREELANCING & MULTIPLE INCOME STREAMS",
    tableReplacements:[
      {
        cellIncludes:"Part-time job (retail)",
        rows:[
          ["Stream","Type","Illustrative Monthly Amount","Control Score (1–5)","Notes"],
          ["Part-time retail work","Active","US$180","2","Employer controls hours; employment rights depend on the job and law"],
          ["Online store","Active / systemised","US$120","3","Platform access, demand and operations matter"],
          ["Tutoring","Active","US$90","4","Depends on clients and reputation"],
          ["Digital study guide","Digital product","US$35","4","Reusable, but still needs updates/marketing/platform access"],
          ["Savings / investment income","Portfolio","US$8","3","Depends on capital, product, market and fees"],
          ["Illustrative total","","US$433","",""],
        ],
      },
    ],
    textReplacements:[
      {from:"\"When I first talked to you about income streams in Grade 11, I had four. Now I have five. Let me show you the real picture—not the textbook version.\"",to:"\"When I first talked to you about income streams in Form 4 Term 1, I was thinking mostly about scale. Now let me show you the management problem too—not the fantasy version.\""},
      {from:"Key idea: Themba's R80 from investments is not about the money. It is about the principle. The paradox: passive income starts small. Almost laughably small. But small is not nothing. Small is the seed. Start. Even small. Especially small.",to:"Key idea: Themba's illustrative US$8 of portfolio income is not impressive by itself. The useful lesson is that different streams behave differently. Active work depends on time. A product can scale but still needs maintenance. Investment income depends on capital, risk, fees and market performance. Small can be a seed—but only if the underlying system is sound."},
      {from:"Here’s the tension: multiple streams are exhausting. The fantasy is freedom. The reality is management. Five things to track. Five things to maintain. Five things that can break. The people who succeed with multiple streams are not the ones who chase every opportunity. They are the ones who build systems, who automate what they can, who know when to cut a stream that is draining more than it gives. More is not always better. Better is better. And here is the deeper truth: the side hustle economy can be exploitative. It can promise freedom while delivering precarity—no benefits, no security, no protection. The gig economy takes the risks that employers used to carry and transfers them to workers. You are not an employee. You are a contractor. You have no leave, no pension, no UIF. You have flexibility—and you have vulnerability. The wise side hustler understands both. Celebrate the freedom. Protect against the precarity.",to:"Here’s the tension: multiple streams can create resilience or simply create five fragile obligations. Contract and gig work can offer flexibility, but legal status, benefits, social-security coverage, insurance and protections depend on the actual arrangement and current law. Do not assume a side hustle is automatically freedom, or that every contractor has the same protections as an employee. Read the contract, count your own costs and build buffers for risks you carry yourself."},
    ],
  },
  "g12-t2-l29-029": {
    title:"THE GIG ECONOMY — FLEXIBILITY, COSTS & CONTRACT RISK",
    tableReplacements:[
      {
        cellIncludes:"No sick leave, no pension, no UIF",
        rows:[
          ["Promise","Risk to Investigate"],
          ["Work when you want","Income may be unpredictable and peak times may determine earnings"],
          ["Be your own boss","Your contract or platform rules may still control key decisions"],
          ["Earn more by working more","You may carry fuel, maintenance, data, tax and equipment costs yourself"],
          ["No traditional boss","An algorithm or platform policy can still affect access to work and pricing"],
          ["Flexibility","Employee benefits and statutory protections may differ depending on your true legal status"],
          ["Easy to start","Entry can be easy, and competition or platform changes can reduce income"],
        ],
      },
    ],
    textReplacements:[
      {from:"\"The flexibility is real,\" he tells Myah at Emmanuel's spaza shop. \"But so is the precarity. Last week, the app changed its pricing algorithm. My per-delivery rate dropped by 15%. No warning. No consultation. No appeal. The platform decided, and I had to accept it or stop driving.\"",to:"\"The flexibility is real,\" he tells Myah at Emmanuel's tuckshop. \"But so is platform risk. Last week, the app changed its pricing algorithm and my per-delivery rate dropped by 15%. I had to decide whether the work still made sense after my own costs.\""},
      {from:"\"I could. But I need the income while I build my own logistics company. The gig work is a bridge, not a destination. But here is what people do not tell you about bridges: they are not built for you. They are built for the people who own them. The platform takes a commission—sometimes 20%, sometimes 30%. You pay for your own fuel, your own vehicle maintenance, your own phone data. You have no leave, no pension, no UIF, no protection. If you get sick, you do not earn. If the app goes down, you do not earn. If the algorithm decides there are too many drivers in your area, you earn less. You are not an employee. You are an independent contractor. That sounds empowering. It means the platform has no responsibility for you.\"",to:"\"I need the income while I build my own logistics company. But before I call gig work 'freedom', I count platform commission, fuel, maintenance, phone data, tax, downtime and what happens if I cannot work. I also check the contract and legal status instead of assuming I am either an employee or contractor from the app's marketing language alone. The bridge only helps if I understand who carries each risk.\""},
    ],
  },
  "g12-t2-l31-031": {
    textReplacements:[
      {from:"Then she types \"Myah Mokoena Tembisa.\" A few results appear—a mention in a community newsletter, a photo from a workshop she facilitated. But nothing curated. Nothing intentional. Nothing that tells the story she wants to tell.",to:"Then she searches her own name together with Harare. A few results appear—a community-newsletter mention and a workshop photo. Nothing harmful, but nothing intentional either. She realises that a professional digital presence is partly about what you publish and partly about what already exists."},
    ],
  },
  "g12-t2-l33-033": {
    textReplacements:[
      {from:"\"Step one: Start stupidly small. My first 'delivery service' was just me, my bike, and my grandmother. One customer. I did not build a website or print business cards. I just delivered groceries and asked if she would pay me R10. She said yes. That was my MVP—my minimum viable product. The smallest possible version of the idea that I could test with real money.\"",to:"\"Step one: start very small. My first delivery test was just me, my bike and my grandmother. One customer. In this illustrative story, I asked if she would pay US$1 for the service. That was my minimum viable test—the smallest version that could produce real evidence.\""},
      {from:"\"Step two: Validate before you invest. When my grandmother told her neighbour, and the neighbour asked for deliveries too, I did not buy a fleet of bikes. I asked the neighbour: 'Will you pay R15?' She said yes. Now I had two customers. The demand was validated. Only then did I start thinking about expansion.\"",to:"\"Step two: validate before you invest. When a neighbour asked for deliveries too, I tested an illustrative US$1.50 price rather than buying more equipment. One extra customer was evidence—not proof of a giant market, but enough to justify another small test.\""},
    ],
    tableTextReplacements:[
      {from:"Neighbour asked for deliveries, offered to pay R15",to:"Neighbour asked for deliveries and accepted the test price",exact:true},
    ],
  },
  "g12-t2-l34-034": {
    textReplacements:[
      {from:"\"Pricing. When I started, I charged too little. I was afraid of scaring clients away. I quoted R200 for a custom clock that took me eight hours to make. That is R25 an hour—less than minimum wage for skilled work. I was undercutting myself. Then a client said: 'You are charging too little. I would have paid R500.' That was a wake-up call. I had been pricing based on what I thought I was worth, not on what the market would pay.\"",to:"\"Pricing. When I started, I charged too little. In this illustrative example, I quoted US$20 for a custom clock that took eight hours plus materials. The price did not cover the time and costs well enough to be sustainable. A client told me they would have paid more. That was a wake-up call: pricing should not come from fear or ego. It should come from costs, customer value, alternatives, demand and the return needed to keep the work viable.\""},
      {from:"Key idea: Lethabo learned that pricing is not about what you think you are worth. It is about what the market will pay—and what you need to earn to make the work sustainable. Undercharging is not humility. It is self-sabotage. When you charge too little, you devalue not just your own work, but the work of everyone in your field. The client who pays R200 for eight hours of skilled labour is not getting a bargain. They are getting exploitation—and you are the one enabling it.",to:"Key idea: your price is not your personal worth. A sustainable freelance price has to cover relevant costs, time, taxes or fees where applicable, risk and the value delivered—while still making sense to the customer. A low price can be strategic for a test, but repeated underpricing without understanding the economics can make good work impossible to sustain."},
    ],
  },
  "g12-t2-l39-039": {
    textReplacements:[
      {from:"Good question. Myah adds a baseline income target and a contingency: \"If freelance income drops below R2,000 in any month, I will take on additional tutoring students to fill the gap.\"",to:"Good question. Myah adds a baseline income target calculated from her own budget. Her contingency is specific: if earned income stays below that verified minimum for the agreed review period, she will add tutoring, cut optional costs or revise the plan before using emergency savings."},
    ],
  },
  "g12-t2-l40-040": {
    title:"FORM 4 TERM 2 — CAREER LAUNCH REFLECTION & LETTER",
    textReplacements:[
      {from:"From me, in Grade 12 Date: _________________",to:"From me, in Form 4 Date: _________________"},
      {from:"You have completed Term 2 of Grade 12.",to:"You have completed Form 4 Term 2: transition, work, career launch and income strategy."},
    ],
  },
  "g12-t3-l41-041": {
    textReplacements:[
      {from:"Then, three years ago, a fire started in the storage room. An electrical fault. A spark. By the time the fire brigade arrived, half the factory was smoke-damaged and the storage room was gone. R200,000 in damage. Three weeks of lost production. Twelve employees who could not work while repairs were underway.",to:"Then, three years ago, a fire started in the storage room. An electrical fault. A spark. By the time the fire brigade arrived, half the factory was smoke-damaged and the storage room was gone. In this illustrative scenario, the direct damage was US$20,000, plus three weeks of disrupted production and twelve employees affected by the shutdown."},
    ],
  },
  "g12-t3-l42-042": {
    title:"INSURANCE DEEP DIVE — TRANSFERRING THE RISKS YOU CANNOT CARRY",
    textReplacements:[
      {from:"\"When I started this company, I had one truck. I insured it against accidents and theft. That was all I thought I needed. Then a driver got injured on the job. I had no workers' compensation insurance. His family sued me. I had no liability insurance. I had to pay R80,000 out of my own pocket—money I had saved for a second truck. One injury. One gap in my insurance. And it cost me a year of growth.\"",to:"\"When I started this company, I had one truck. I insured the vehicle, but I had not mapped all the other risks around employees, third parties and business interruption. Then an injury exposed the gap. The lesson was not that one named policy solves everything. It was that I needed professional advice and regulated cover matched to the risks my business actually carried.\""},
      {from:"\"Yes. It costs me R12,000 a month. But that R12,000 protects a business that generates R300,000 a month. Insurance is not a cost. It is a transfer of risk. I pay someone else to carry the risks that would destroy me. The premium is the price of peace. And the price of peace is worth paying.\"",to:"\"Insurance is a real cost. I pay the premium because, for selected risks, transferring part of the financial loss is worth that cost. The policy does not remove the risk, and it does not cover everything. I still need prevention, emergency reserves and a clear understanding of exclusions, limits and claim conditions.\""},
      {from:"Key idea: Ms. Nkosi pays R12,000 a month for insurance. That sounds like a lot. But that R12,000 protects R300,000 in monthly revenue. Insurance is not a cost. It is a transfer of risk. You pay someone else to carry the risks that would destroy you. The premium is the price of peace.",to:"Key idea: insurance is one risk-management tool. You pay a premium to transfer defined financial risks under a contract. The decision should compare the potential loss, probability, premium, exclusions, limits, excess/deductible and the insurer's regulation and claims terms. IPEC is the relevant Zimbabwe regulator for insurance and pensions; verify providers and current consumer guidance before buying."},
      {from:"Here’s the tension: insurance is also a product sold by companies that profit from your fear. Not all insurance is necessary. Some is overpriced. Some covers risks so unlikely that the premium is not worth it. The art is discernment—knowing which risks are worth insuring and which are worth accepting. Ms. Nkosi's rule is simple: insure what would break you. Accept what would annoy you. The phone that costs R3,000 to replace? Annoying. The illness that costs R300,000 to treat? Catastrophic. Insure the catastrophic. Accept the annoying. And here is the deeper truth: the people who sell you insurance are not your friends. They are businesses. Their job is to maximize profit. Your job is to minimize risk. These two goals are in tension. Read the policy. Understand the exclusions. Know what you are buying. The fine print is where the protection ends and the profit begins.",to:"Here’s the tension: not every risk should be insured, and not every policy is good value. A small loss may be better carried through savings; a catastrophic loss may be impossible to carry alone. But severity is only one factor. Read the policy wording. Understand exclusions, waiting periods, limits, excesses, disclosure duties and claims procedures. Compare regulated providers. Insurance should fit the risk—not fear, pressure or a sales pitch."},
      {from:"Question 3 — The Insurance Pre-Mortem: You do not have health insurance. You are in an accident. The hospital bill is R150,000. You have no savings. Write the scene. Now write: What will you do THIS YEAR to ensure that scene never happens?",to:"Question 3 — The Protection Pre-Mortem: Imagine a serious health or accident cost that your household could not comfortably absorb. What financial and non-financial protections could reduce the impact—appropriate insurance, emergency savings, workplace cover where applicable, public/private care options, safer behaviour or another measure? Which facts would you need to verify before choosing?"},
    ],
  },
  "g12-t3-l43-043": {
    textReplacements:[
      {from:"\"Thabo, what happens if one of your drivers causes an accident and someone is seriously injured? The medical bills are R500,000. The family sues. Who pays?\"",to:"\"Thabo, what happens if one of your drivers causes an accident and someone is seriously injured? The claim could be far larger than the cash the business has available. Who carries that liability, what does the business structure change, and what insurance or other protection actually applies?\""},
    ],
  },
  "g12-t3-l44-044": {
    title:"ESTATE PLANNING — WILLS, ESTATES & BENEFICIARIES IN ZIMBABWE",
    rangeReplacements:[
      {
        startIncludes:"Requirements for a valid will in South Africa:",
        endIncludes:"The Choice Is Yours. Make It Now.",
        replacement:[
          {kind:"text",type:"section",text:"Zimbabwe Will Formalities — Verify the Current Law"},
          {kind:"text",type:"paragraph",text:"Zimbabwe's Wills Act sets legal formalities for a valid will. A will should be in writing and executed with the required signatures and witnesses. Witness choices can affect benefits under the will, and special situations can change the legal analysis. Because estate law is consequential, use the current Wills Act and qualified legal advice rather than relying on a classroom checklist as legal advice."},
          {kind:"text",type:"paragraph",text:"If someone dies without a valid will, the estate is administered under Zimbabwe's intestate-succession and estate-administration rules. That does not mean 'the government takes everything'. It means the law determines how the estate is administered and who is entitled according to the applicable rules."},
          {kind:"text",type:"equation",text:"Estate Planning = Clear Wishes + Valid Documents + Updated Records + Current Legal Advice"},
        ],
      },
    ],
    tableReplacements:[
      {
        cellIncludes:"Living will",
        rows:[
          ["Document / Tool","Purpose","Zimbabwe Learning Rule"],
          ["Will","Records wishes for distribution of an estate and can nominate an executor or address guardianship issues","Must satisfy current Zimbabwe legal formalities; use legal advice for a real will"],
          ["Beneficiary / nomination form","May direct benefits under a particular policy, pension or product where that product and law allow it","Check the specific product rules; do not assume every account has one"],
          ["Trust","A separate legal arrangement that may hold/manage assets for beneficiaries","Trust law, costs, trustee duties and suitability require professional advice"],
          ["Estate records","List of assets, liabilities, policies, documents and key contacts","Keep accurate, accessible and updated records so the estate can be administered"],
        ],
      },
    ],
    tableTextReplacements:[
      {from:"R",to:"Currency + amount",exact:true},
    ],
    textReplacements:[
      {from:"Here’s the tension: making a will forces you to confront your own mortality. That is uncomfortable. Most people avoid it. They tell themselves they will do it later—when they are older, when they have more, when it matters more. But \"later\" has a way of becoming \"never.\" And \"never\" means the government decides who gets your things. And here is the deeper truth: a will is not just about distributing assets. It is about preventing conflict. Grief does strange things to people. Families that love each other can tear each other apart over a dining table, a few thousand rand, a piece of jewellery. The will is not just a legal document. It is a peace treaty. It says: I have made these decisions so you do not have to fight about them. The will is not about you. It is about protecting the people you love from each other.",to:"Here’s the tension: making a will forces you to confront mortality, and that is uncomfortable. But delay can leave an estate to be handled without clear recorded wishes. A valid will can reduce uncertainty, but it does not eliminate every dispute, tax, debt or administration step. The responsible approach is to keep the document valid, review it after major life changes, keep estate records organised and get professional advice where the estate is complex."},
      {from:"Question 1: What is a will? What are the four requirements for a valid will in South Africa? Why can a beneficiary not be a witness?",to:"Question 1: What is a will? Using the current Zimbabwe Wills Act or qualified guidance, identify the formalities that apply to executing a valid will. Why must witness and beneficiary issues be handled carefully?"},
    ],
  },
  "g12-t3-l45-045": {
    title:"TRUSTS, BENEFICIARY NOMINATIONS & DOCUMENT ALIGNMENT",
    rangeReplacements:[
      {
        startIncludes:"Beneficiary nominations: \"Your life insurance policy.",
        endIncludes:"All Three Must Align. If They Conflict → Chaos.",
        replacement:[
          {kind:"text",type:"paragraph",text:"Beneficiary or nomination forms can apply to some insurance, pension or investment products. The effect depends on the product contract and current Zimbabwe law. Do not assume a bank account, policy and pension all use the same nomination rules, and do not assume a nomination automatically overrides a will in every case. Check the governing document and get advice where the outcome matters."},
          {kind:"text",type:"paragraph",text:"A trust is a separate legal arrangement in which trustees hold or manage assets according to the trust instrument and law for stated beneficiaries or purposes. Trusts can be useful in some family, succession, charitable or asset-management situations, but they carry costs, duties and legal consequences. They are not a universal tax-saving or asset-protection shortcut."},
          {kind:"text",type:"paragraph",text:"Example: where a family wants money managed for a minor beneficiary, a lawyer can help determine whether a testamentary trust or another lawful structure is appropriate. The design must reflect Zimbabwe law, the beneficiary's needs, trustee responsibilities, costs and the actual assets involved."},
          {kind:"text",type:"equation",text:"Alignment = Will + Product Documents + Trust Documents (if any) + Current Law + Updated Records"},
        ],
      },
    ],
    tableReplacements:[
      {
        cellIncludes:"Direct transfer of specific assets",
        rows:[
          ["Tool","What It Does","What to Verify"],
          ["Will","Records estate wishes and nominations within the will","Execution formalities, estate administration and whether later life changes require an update"],
          ["Trust","Creates a legal arrangement for assets to be managed under stated rules","Trust deed/will terms, trustee duties, fees, tax and suitability"],
          ["Beneficiary / nomination form","Directs benefits for a specific product where its rules allow","Product terms, governing law, current nominated person and how it interacts with the estate"],
        ],
      },
    ],
    textReplacements:[
      {from:"What accounts or policies do I have that require beneficiary nominations? (Bank accounts, TFSA, RA, life insurance, etc.)",to:"What policies, pension arrangements or investment products do I have—or expect to have—that use a beneficiary or nomination form? I will verify each product rather than assume: _________________________________"},
      {from:"The Affirmation: A will says who gets what. A trust says how and when. A beneficiary nomination transfers assets directly, outside the will. All three must align. If they conflict—if your will says one thing and your nomination says another—the result is chaos. The beneficiaries fight. The lawyers profit. The estate is consumed. Alignment is not optional. It is the foundation of a peaceful transfer of what you have built.",to:"The Affirmation: wills, trusts and product nominations are different legal tools. Their effects depend on their documents and the law that governs them. Alignment matters because inconsistent documents can create uncertainty, delay or disputes. The first step is not to guess which document 'wins'. The first step is to identify the asset, the governing document and the applicable law."},
      {from:"Check your beneficiary nominations this week—on your bank accounts, your TFSA, your RA, any policies. Are they up to date? Do they reflect your current wishes? If you do not have accounts with nominations yet, make a note to set them up when you do—and to review them annually.",to:"If you already have an insurance, pension or investment product with a beneficiary or nomination feature, check the provider's current record and rules. If you do not, make a future-action note: when I open a product, I will ask whether it has a nomination feature, what legal effect it has, and how often I should review it."},
    ],
  },
  "g12-t3-l46-046": {
    title:"INVESTMENT CONSOLIDATION — SEEING THE WHOLE PORTFOLIO",
    tableReplacements:[
      {
        cellIncludes:"Equities (local)",
        rows:[
          ["Asset Class","Illustrative Amount","Percentage","Target","Status"],
          ["Zimbabwe / local equities","US$4,500","45%","40%","Overweight"],
          ["Global equities","US$2,500","25%","25%","On target"],
          ["Property / listed property exposure","US$1,500","15%","15%","On target"],
          ["Fixed-income / money-market exposure","US$1,000","10%","15%","Underweight"],
          ["Cash","US$500","5%","5%","On target"],
        ],
      },
      {
        cellIncludes:"Type (TFSA, RA, Shares, etc.)",
        rows:[
          ["Provider / Account","Product Type","Balance / Currency","Fees","Regulator / Verification"],
          ["","","","",""],
          ["","","","",""],
          ["","","","",""],
        ],
      },
    ],
    textReplacements:[
      {from:"\"When I started investing at 18, I opened a TFSA with one provider. Then I heard about another provider with lower fees, so I opened another TFSA. Then my employer offered a pension fund. Then I started an RA with yet another provider. Then I bought some shares through an app. Five different places. Five different logins. Five different fee structures. And I had no idea what my overall asset allocation looked like.\"",to:"\"When I started investing, I opened products in different places as I learned about them—an employer pension arrangement, a collective investment, some direct shares and a cash product. Different providers. Different fees. Different currencies and risks. I eventually realised I did not know what my total portfolio looked like.\""},
      {from:"\"I consolidated. I moved everything into two platforms—one for my TFSA and RA, one for my direct shares. I calculated my overall asset allocation for the first time. I discovered I was 85% in equities—way too high for my age and goals. I was taking more risk than I realized because I had never looked at the whole picture. Consolidation is not just about convenience. It is about clarity. You cannot manage what you cannot see.\"",to:"\"I built one consolidated view first. That did not automatically mean moving every account. Some products have transfer costs, tax consequences, access rules or employer restrictions. The first win was visibility: asset class, currency, fees, provider, regulator, liquidity and purpose. Only then could I decide whether actual consolidation made sense.\""},
    ],
  },
  "g12-t3-l47-047": {
    title:"FRAUD PREVENTION — THE PAUSE THAT PROTECTS YOU",
    tableTextReplacements:[
      {from:"Pay R500 to get R50,000",to:"Pay US$50 to unlock US$5,000",exact:false},
    ],
    textReplacements:[
      {from:"But something stops him. He remembers a lesson from Grade 11—Ms. Daniels talking about fraud. \"Banks never ask for your PIN or password via SMS. If you are unsure, call the bank directly—using the number on their website, not the number in the message.\"",to:"But something stops him. He remembers an earlier Applied Commerce fraud lesson: never trust contact details inside an unexpected message. If a message claims to be from a bank or institution, use a separately verified official channel."},
      {from:"\"Pause. Always pause. No legitimate institution will demand immediate action via SMS. No bank will ask for your password. No SARS official will call threatening arrest unless you pay immediately. No investment opportunity will guarantee 20% monthly returns. The pause is your protection. Five seconds of thinking can save you years of recovery.\"",to:"\"Pause. Urgency and fear are common scam tools. Do not disclose passwords, PINs or one-time codes because an unexpected caller or message asks. A caller claiming to be ZIMRA, a bank, police, employer or investment provider can be impersonated. End the contact and verify independently through the institution's official channel. Guaranteed extraordinary returns are a warning sign, not proof of an opportunity.\""},
      {from:"Banks Do Not Ask for Passwords. SARS Does Not Threaten Arrest. If It Sounds Too Good to Be True, It Is.",to:"Pause. Verify Independently. Protect Passwords, PINs and One-Time Codes."},
    ],
  },
  "g12-t3-l48-048": {
    textReplacements:[
      {from:"Myah has been using the same password for everything since Grade 9. Her email. Her banking app. Her social media. Her TFSA. Her digital product platform. One password. Easy to remember. Easy to type. Easy to guess.",to:"Myah realises she has reused the same password since Form 2 across email, banking, social media, an investment platform and her digital-product account. One password. Easy to remember. Easy for one breach to turn into several compromised accounts."},
    ],
  },
  "g12-t3-l49-049": {
    textReplacements:[
      {from:"Question 3 — The Wealth Audit: You have R1 million in the bank. But your health is ruined by overwork. Your relationships are broken by neglect. You have no time for anything you love. You have no memories that bring you joy. Are you wealthy? Write the scene. Now write: What is ONE thing you will do THIS WEEK to protect a form of wealth you have been neglecting?",to:"Question 3 — The Wealth Audit: Imagine you have enough financial assets to feel secure, but your health is damaged by overwork, your relationships are neglected and you have no time for anything meaningful. Are you wealthy? Write the scene. Then name ONE action you will take this week to protect a non-financial form of wealth you have been neglecting."},
    ],
  },
  "g12-t3-l52-052": {
    title:"RISK & PROTECTION CYCLE REFLECTION",
    textReplacements:[
      {from:'9. The 1-10 Scale: At the start of the term, you were a "1" on the protection literacy scale. Where are you now, honestly? What is the exact number? What is the ONE specific thing you need to do in Term 4 to move up by a single point?',to:'9. The 1-10 Scale: Where were you on the protection-literacy scale at the start of this cycle, and where are you now? What is ONE specific thing you need to strengthen before the Life Launch integration work?'},
      {from:'Write a letter to yourself. Address it to "Future Me." Tell your future self who you are now, what you learned this term, what your Risk and Protection Plan includes, what you are proud of, what you hope for Term 4, and what you want to remember.',to:'Write a letter to yourself. Address it to "Future Me." Tell your future self what you learned in the risk-and-protection cycle, what your plan now covers, what is still uncertain, and what you want to carry into the Life Launch integration work.'},
      {from:"From me, in Grade 12 Date: _________________",to:"From me, in Form 4 Date: _________________"},
      {from:"📂 Portfolio: Keep this letter somewhere safe. Read it at the end of Term 4.",to:"📂 Portfolio: Keep this letter somewhere safe. Read it at the end of Form 4."},
      {from:"Question 2: Where are you on the 1-10 protection literacy scale? What is the ONE specific thing you need to do in Term 4 to move up by a single point?",to:"Question 2: Where are you on the 1-10 protection-literacy scale? What is ONE specific protection gap you need to address before the final Life Launch Plan?"},
      {from:"You have completed Term 3 of Grade 12.",to:"You have completed the risk-and-protection cycle inside Form 4 Term 3."},
      {from:"One term to go. The final launch. See you in Term 4.",to:"The final integration and Life Launch work comes next. There is no fourth Zimbabwe school term—the remaining source lessons complete Form 4 Term 3."},
    ],
  },
  "g12-t4-l61-053": {
    title:"FORM 4 JOURNEY REVIEW — READY TO INTEGRATE",
    tableReplacements:[
      {
        cellIncludes:"post-matric options",
        rows:[
          ["Zimbabwe Term","Theme","What We Built"],
          ["Form 4 Term 1","Advanced Wealth & Legacy","10-Year Wealth Plan, protection, giving, estate/legacy thinking and the Life and Legacy Plan"],
          ["Form 4 Term 2","Transition, Work & Career Launch","Post-O-Level Transition Plan, career strategy, CV/interview/networking evidence and income strategy"],
          ["Form 4 Term 3","Risk, Protection & Life Launch","Risk and Protection Plan completed; integration and final Life Launch work now in progress"],
        ],
      },
    ],
    textReplacements:[
      {from:"📘 Myah Looks Back at Grade 12",to:"📘 Myah Looks Back at Form 4"},
      {from:"Myah sits at Mama Rose's kitchen, her three notebooks from Grade 12 spread across the table. Term 1. Term 2. Term 3. She flips through them, amazed at how much ground they have covered—and how close she is to the end.",to:"Myah sits at Mama Rose's kitchen with her Form 4 portfolio spread across the table. Advanced wealth and legacy. Transition and career launch. Risk and protection. She is close to the end—but the pieces still need to become one Life Launch architecture."},
      {from:"Funding. Zinhle: \"NSFAS is a loan with grace.\"",to:"Funding. Zinhle: \"Read the conditions. A bursary, scholarship, sponsorship and student loan are not the same thing.\""},
      {from:"She closes the notebooks. Three terms. One year. And before that, Grade 9, Grade 10, Grade 11. The observer who noticed everything. The challenger who demanded answers. The strategist who built systems. The architect who designed structures. The operator who maintained them. Now: the launcher. The one who takes everything designed and built and maintained—and releases it into the world.",to:"She closes the notebooks. Behind Form 4 sit Form 1, Form 2 and Form 3. The observer learned to notice. The challenger learned to act. The strategist and architect learned to design systems. In Form 4, the operator and launcher must make those systems real."},
      {from:"She writes on a fresh page: I am not the same person who opened the Grade 9 book. I have plans. I have purpose. I have a financial architecture. I have a career vision. I have risk protection. I have evidence—four years of it—that I can act on the world and create change. I am ready for the final final project. I am ready to launch.",to:"She writes on a fresh page: I am not the same person who opened the Form 1 book. I have purpose, plans, evidence, financial architecture, a career direction and a protection strategy. I have four years of evidence that I can notice, act, design, review and change. I am ready to integrate it."},
      {from:"✍️ Activity 61: My Grade 12 Review",to:"✍️ Activity 61: My Form 4 Review"},
      {from:"One word to describe my Grade 12 journey so far: _________________________________",to:"One word to describe my Form 4 journey so far: _________________________________"},
      {from:"The Affirmation: Myah's word for Grade 12 so far: Launch. Everything has been building to this. The paradox: the more you learn, the more you realise how much you do not know. But the more you know, the more you can launch. You are not starting the final term empty. You are starting with everything you have built over four years.",to:"The Affirmation: Myah's word for Form 4 is Launch. Everything has been building toward the point where plans meet evidence. You are not beginning the final integration work empty. You bring four years of learning and the humility to keep updating what you think you know."},
      {from:"Question 2: What is the thread that ties your Grade 12 journey together? What is one word that captures this year for you?",to:"Question 2: What is the thread that ties your Form 4 journey together? What is one word that captures this year for you?"},
      {from:"Share your Grade 12 review with your family. Let them see how far you have come. Ask them: \"What growth have you seen in me this year? What do you see in me now that was not there in January?\"",to:"Share your Form 4 review with someone who has witnessed your growth. Ask: \"What growth have you seen in me? What evidence do you notice that I might overlook?\""},
      {from:"| Date | | | Lesson | Lesson 61 — Grade 12 Review | | Launch Decision | What I still need to do before I launch: | | Prediction | | | Result | | | Learning | | | Next Action | |",to:"| Date | | | Lesson | Lesson 61 — Form 4 Review | | Launch Decision | What I still need to do before O-Level launch: | | Prediction | | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g12-t4-l62-054": {
    textReplacements:[
      {from:"Term 1: Transition Plan — Path: Hybrid. UNISA part-time BEd. Business part-time. Shared flat in Pretoria. Budget balanced.",to:"Form 4 Term 2 Transition Plan — Path: Hybrid. Further study option still subject to confirmed entry requirements and funding. Workshops and digital products continue part-time. Shared-living option in Harare if needed. Budget uses current verified costs."},
      {from:"The Affirmation: Myah saw that her plans were aligned. The Transition Plan got her to UNISA and the business. The Career Plan kept her earning. The Risk Plan kept her protected. The paradox: a life is not a collection of separate plans. It is one plan with many parts. Do not see your plans as separate. See them as one.",to:"The Affirmation: Myah sees that her plans must support one another. The Transition Plan explains the next route and logistics. The Career Plan explains how she will build capability and income. The Risk Plan protects the people, assets and systems she depends on. A life is not a folder of unrelated plans. It is one system with connected parts."},
    ],
  },
  "g12-t4-l63-055": {
    title:"MY TRANSITION PLAN — FINAL FORM 4 UPDATE",
    tableReplacements:[
      {
        cellIncludes:"NSFAS + business income",
        rows:[
          ["Element","Earlier Plan","Current Evidence / Update","What I Learned"],
          ["Path","Hybrid: further study + business","Shortlist confirmed; final route still depends on results, admission, cost and funding","A plan can be clear without pretending uncertain decisions are already final"],
          ["Business","Workshops + digital products","Four workshops delivered; two products tested; revenue is growing but variable","Marketing and repeat demand require as much attention as creating"],
          ["Funding","Bursary / student finance / business income options","Applications and eligibility checked against current official sources; no unconfirmed funding counted as income","Funding is not real until terms and approval are confirmed"],
          ["Living","Shared-living option if relocation is required","Two realistic options costed; roommate expectations discussed","Housing is a financial, safety and relationship decision"],
          ["Budget","Illustrative launch budget","Rebuilt with current prices and clearly labelled currencies; buffer included","Old estimates expire"],
          ["Timeline","Applications, results, decisions, start dates","Each date has an official source or a review trigger","A timeline is only as reliable as its evidence"],
          ["Backup","Family / work / alternative study or skills route","Defined trigger for when the preferred path becomes unworkable","Backup plans protect momentum, not ego"],
        ],
      },
    ],
  },
  "g12-t4-l64-056": {
    title:"MY CAREER LAUNCH & RISK PLANS — FINAL UPDATE",
    tableReplacements:[
      {
        cellIncludes:"R10,000 target",
        rows:[
          ["Element","Earlier Plan","Current Update","Status / Next Check"],
          ["Insurance","Contents, liability, health / medical protection where relevant","Products to be chosen only after comparing regulated cover, exclusions and cost","Verify IPEC / provider and policy wording"],
          ["Estate","Will and estate records","Will formalities and estate documents to be checked under current Zimbabwe law","Legal review when the document becomes real"],
          ["Investments","Consolidated low-cost diversified portfolio","One portfolio view created across providers, currencies, fees and asset classes","Verify provider / regulator and rebalance only for a reason"],
          ["Fraud prevention","Protocols in place","Two-factor authentication, password manager and independent-verification routine active","Review after any breach or device/account change"],
          ["Emergency fund","Target based on essential expenses","Current amount tracked in the actual currencies held; target recalculated when costs change","Monthly review"],
        ],
      },
    ],
  },
  "g12-t4-l65-057": {
    title:"MY LEGACY VISION — FINAL FORM 4 UPDATE",
    textReplacements:[
      {from:"Review and update your Legacy Vision from Grade 11.",to:"Review and update the Legacy Vision you developed earlier in Form 4."},
      {from:"Myah pulls out her Grade 11 Legacy Vision—the four dimensions she defined in Term 4 of last year. She reads it. She still believes it. But it needs updating. She is not the same person who wrote it. She knows more. She has built more. She has more evidence.",to:"Myah pulls out the Legacy Vision she developed earlier in Form 4. She still believes in its direction, but evidence has changed some of the details. A legacy vision should mature as the person and the context change."},
      {from:"Original (Grade 11):",to:"Earlier Form 4 version:"},
      {from:"Updated (Grade 12 Term 4):",to:"Final Form 4 update:"},
      {from:"Financial: The same. But now specific: R50,000 in a scholarship fund by age 35. A paid-off property by 50. A will that directs assets to financial education causes.",to:"Financial: build a dedicated education-support fund over time, own productive assets only when the economics make sense, and keep estate documents aligned with the causes and people I intend to support. The amounts and vehicles will be updated as income, law and opportunities change."},
      {from:"Look at your Legacy Vision from Grade 11. Does it still ring true? How do your launch plans support it? What is one specific, measurable legacy goal you can set?",to:"Look at your earlier Legacy Vision. Does it still ring true? How do your launch plans support it? What is one measurable legacy action you can take within the next year rather than only decades from now?"},
      {from:"Original legacy vision (Grade 11): _________________________________",to:"Earlier legacy vision: _________________________________"},
      {from:"Updated legacy vision (Grade 12):",to:"Updated Form 4 legacy vision:"},
    ],
  },
  "g12-t4-l66-058": {
    textReplacements:[
      {from:"Ms. Daniels stands at the front of the community hall for her final formal lesson. The hall is full—not just her current class, but former students who have come back. Themba is there. Zinhle is there. Sipho is there from Grade 9, now with his workshop and his employees. The room is quiet.",to:"Ms. Daniels stands at the front of the community hall for her final formal lesson. The hall is full—not just her current class, but former learners and mentors who have come back. Themba is there. Zinhle is there. Sipho is there from Form 2, now with his workshop and employees. The room is quiet."},
      {from:"Here’s the tension: the deepest truth she named is also the hardest to believe: you are already enough. Not you will be enough when you have the degree, the job, the house, the portfolio. You are enough now. The person who has been becoming for four years—the observer, the challenger, the strategist, the architect, the operator, the launcher—that person is enough. The plans are impressive. The person is extraordinary. And the launch is not about becoming someone new. It is about releasing into the world the person you already are. The person you have been becoming since Grade 9. All of them are you. All of them have always been you. Now go be them in the world.",to:"Here’s the tension: launch culture can make you believe that your worth begins only after the qualification, job, business or income arrives. It does not. Applied Commerce has asked you to build capability, not to earn the right to matter. Across four years you practised observing, challenging, strategising, architecting, operating and launching. Those are modes you can use—not identities you must perform perfectly."},
    ],
  },
  "g12-t4-l67-059": {
    textReplacements:[
      {from:"\"Looking back, I see it now. Every person I fed. Every child who grew up eating my food. Every neighbour who knew they could come to me when they had nothing. Every taxi driver who started his day with my coffee. Every elder who ended her day with my soup. I did not plan any of it. I just showed up. Every day. For twenty years.\"",to:"\"Looking back, I see it now. Every person I fed. Every child who grew up eating my food. Every neighbour who knew they could come to me when they had nothing. Every kombi driver who started the day with my coffee. Every elder who ended the day with my soup. I did not design a grand legacy. I kept showing up.\""},
      {from:"The Launch Commitment: If I leave Grade 12 without thanking the people who shaped me, I am carrying debt, not gratitude. My gratitude action this week is: _________________________________",to:"The Launch Commitment: If I leave Form 4 without thanking at least one person who shaped me, I am missing part of the handoff. My gratitude action this week is: _________________________________"},
    ],
  },
  "g12-t4-l68-060": {
    title:"FINAL CAPSTONE LAUNCH — MY LIFE LAUNCH PLAN",
    tableReplacements:[
      {
        cellIncludes:"Grade 9 values",
        rows:[
          ["Section","What to Include","Evidence to Draw From"],
          ["1. My Purpose and Values","What matters most? What do I stand for?","Values evidence from Forms 1–4"],
          ["2. My Post-O-Level Transition Plan","Next 1–2 years: pathway, prerequisites, logistics, living and budget","Form 4 Term 2 transition cycle, updated in this final sequence"],
          ["3. My Career Launch Plan","Career direction, income strategy, brand, network and skills","Form 4 Term 2 career cycle"],
          ["4. My Risk and Protection Plan","Insurance, estate records, investments, fraud/digital security and emergency buffer","Form 4 Term 3 risk cycle"],
          ["5. My Life Integration","How work, money, people, health, joy and purpose connect","All four forms"],
          ["6. My Legacy Vision","What I want to contribute and pass on","Form 4 Term 1 + final update"],
          ["7. My Mentorship Plan","Who I learn from and who I help","Evidence across the programme"],
          ["8. My Ethics Framework","Principles, red lines and how I handle conflicts","Leadership and ethics evidence"],
          ["9. My Contingency Plans","What if the preferred route fails or an unexpected opportunity appears?","Transition, career and risk plans"],
          ["10. My Launch Timeline","Near-term actions and later review milestones","Current dates and realistic checkpoints"],
          ["11. My Reality Checks","For each major section: what evidence says it is working or failing?","All forms"],
          ["12. My Downside Management","What could go wrong and how will I reduce, transfer or accept the risk?","Risk and protection work"],
          ["13. My Reflection","What I learned creating the plan and through Applied Commerce","Portfolio evidence"],
        ],
      },
    ],
    textReplacements:[
      {from:"\"This is it. Your final capstone. The project that brings together everything—from Grade 9 to now.\"",to:"\"This is it. Your final capstone. The project that brings together the evidence you have built from Form 1 to Form 4.\""},
    ],
  },
  "g12-t4-l69-061": {
    title:"FINAL CAPSTONE WORKSHOP — DRAFTING YOUR LIFE LAUNCH PLAN",
    textReplacements:[
      {from:"Purpose and Values: To help people understand money—through stories, through tension, through truth. Justice. Integrity. Curiosity. Community. These have not changed since Grade 9. They have only been tested—and confirmed.",to:"Purpose and Values: To help people understand money through stories, questions and practical evidence. Justice. Integrity. Curiosity. Community. These values have been tested since Form 2 and refined through experience."},
      {from:"Transition Plan: Hybrid path. UNISA part-time BEd. Workshops and digital products part-time. Shared flat in Pretoria. Roommate agreement signed. Budget balanced with R700 buffer. Move-in: 15 January. First lecture: February. First workshop of the year: March.",to:"Transition Plan: Hybrid path remains the preferred direction, but the exact study institution, intake and funding remain conditional on confirmed requirements and offers. Workshops and digital products continue part-time. Housing and budget decisions use current costs and a defined cash buffer."},
      {from:"Risk and Protection Plan: Health insurance on family plan until 21. Contents insurance for flat. Liability insurance for business. Income protection planned. Will signed and witnessed. Emergency fund R8,400, target R10,000. Two-factor authentication on all accounts. Password manager active.",to:"Risk and Protection Plan: appropriate health/medical protection to be verified; contents and business liability cover compared with regulated providers if needed; estate documents checked under Zimbabwe law; emergency fund tracked against essential expenses; two-factor authentication and a password manager active."},
      {from:"Life Integration: Purpose: financial education. Work: UNISA + business. Money: budget + emergency fund + investments. People: mother, Atlehang, mentors, mentees. Health: one full day off per week (Atlehang holds me accountable). Joy: reading, nature, cooking.",to:"Life Integration: Purpose: financial education. Work: further study or training + business, subject to final route. Money: budget + emergency fund + diversified investments. People: mother, Atlehang, mentors and mentees. Health: protected recovery time. Joy: reading, nature and cooking."},
      {from:"Legacy Vision: Financial: R50,000 scholarship fund by 35. Values: integrity, curiosity, justice, community—passed on through teaching. Social: 20 trained educators, resources in 50 schools. Environmental: carbon-neutral business operations by 30.",to:"Legacy Vision: build an education-support fund when income allows; pass on integrity, curiosity, justice and community through teaching; train other educators; expand useful learning resources; reduce the environmental footprint of the work as the business grows."},
      {from:"Contingency Plans: If UNISA does not work: full-time business + short courses. If business income drops: tutoring to fill gap. If health suffers: reduce commitments, not purpose. If unexpected opportunity arises: evaluate against purpose and values before accepting.",to:"Contingency Plans: If the preferred study route does not work, reassess A-Level, tertiary, technical, work or structured-skills alternatives against the same purpose and constraints. If business income drops, use the income-contingency plan. If health suffers, reduce commitments. Evaluate unexpected opportunities against purpose, cost, risk and evidence."},
      {from:"January: Move in. Set up workspace. Register for UNISA.",to:"First transition month: confirm the next route, complete required registration or onboarding, and set up the workspace/living system only after dates and costs are verified."},
      {from:"Age 25: TFSA maxed. RA started. Teaching formally.",to:"Later milestone: regulated investing and retirement saving established in products that fit the law, income, goals and risk at that time; teaching or facilitation pathway reviewed against real progress."},
      {from:"Here’s the tension: the plan is evidence. Evidence of growth. Evidence of becoming. Evidence that the observer of Grade 9, the challenger of Grade 9, the strategist of Grade 10, the architect of Grade 11, the operator and launcher of Grade 12—all of them are real. All of them have built something. This plan is the proof. Not proof of future success—that is not guaranteed. Proof of present readiness. Proof that you have done the work. Proof that you are ready to launch.",to:"Here’s the tension: a plan is evidence of thinking, not proof that the future will cooperate. Your four-year portfolio shows that you can observe, test, revise and build. The Life Launch Plan should therefore contain both direction and revision triggers. Readiness is not certainty. It is the ability to respond when certainty disappears."},
    ],
  },
  "g12-t4-l70-062": {
    title:"FINAL CAPSTONE WORKSHOP — FEEDBACK & REFINEMENT",
    textReplacements:[
      {from:"Learners work in their final small groups at Mama Rose's kitchen. Myah is with Thabo, Lethabo, and Atlehang—the same group that has workshopped every plan since Grade 10.",to:"Learners work in their final small groups at Mama Rose's kitchen. Myah is with Thabo, Lethabo and Atlehang—the same group that has workshopped major plans since Form 3."},
      {from:"Thabo studies her numbers. \"Your timeline has you completing your BEd by age 20. That is fast for part-time study. Are you sure UNISA allows that pace? What if it takes longer?\"",to:"Thabo studies her timeline. \"You have written a completion date for a study route that is not final yet. What official source supports that duration? What happens if admission, funding or the pace of study changes?\""},
      {from:"Good question. Myah checks the UNISA requirements. \"You are right. Part-time BEd takes longer—typically 5–6 years. I revise: complete by age 23, not 20. The Reality Check: if I have not completed at least two modules per year, I am not progressing. I will either increase my study hours or reduce business commitments.\"",to:"Good question. Myah removes the invented certainty. Her plan now says: confirm the programme, workload and expected duration from the chosen institution before setting the completion milestone; then review progress against the institution's actual academic rules and her health/work capacity."},
      {from:"Lethabo: \"Your scholarship fund goal is R50,000 by 35. But you have not specified how you will build it. Is it a separate account? A percentage of income? A specific investment vehicle?\"",to:"Lethabo: \"Your education-support fund is a value statement, but where is the mechanism? What contribution rule will you use when income becomes stable? How will you keep the money separate and choose a regulated product that fits the time horizon?\""},
      {from:"Another good question. Myah adds: \"I will open a separate TFSA designated for the scholarship fund. R200/month starting at age 25, increasing to R500/month by 30. At 8% growth, that reaches about R55,000 by 35. The Reality Check: if the fund has less than R20,000 by age 30, I am not prioritizing it. I will either increase contributions or admit it is not a real goal.\"",to:"Another good question. Myah adds a flexible mechanism: once income and emergency reserves are stable, allocate a defined percentage of surplus to a separate education-support fund. Review the product, fees, regulation, tax treatment and target annually. The Reality Check is contribution consistency and progress relative to the current target—not an invented guaranteed return."},
    ],
  },
  "g12-t4-l71-063": {
    title:"LIFE LAUNCH PLAN PRESENTATIONS — DAY 1",
    textReplacements:[
      {from:"Thabo presents first. His Life Launch Plan: grow the delivery business into a logistics company. Part-time business diploma. Hire and train from the community. Build wealth through property and investments. Lead by example. Legacy: create jobs, pass on skills, prove that a boy from Tembisa with a broken bike can build something that outlasts him. His personal board: Mr. Patel (business), Myah (accountability), his grandmother (values).",to:"Thabo presents first. His Life Launch Plan: grow the delivery business carefully, continue business learning through a suitable part-time route, hire and train from the community, and build assets without allowing growth to outrun cash flow. His legacy goal is to create useful work and pass on skills. He remembers the boy from Chitungwiza with the broken bike—not as a slogan, but as evidence of how much can change."},
    ],
  },
  "g12-t4-l72-064": {
    title:"LIFE LAUNCH PLAN PRESENTATIONS — DAY 2",
    textReplacements:[
      {from:"Emmanuel presents. His Life Launch Plan: spaza shop transformation into a community commerce hub. Part-time business diploma. Property by 30. Legacy: a business that serves generations, a community that is stronger because the shop existed. His personal board: Mr. Patel (business), his mother (values), Thabo (accountability).",to:"Emmanuel presents. His Life Launch Plan: transform the family tuckshop into a stronger community-commerce business through better systems, delivery, purchasing discipline and customer service. He will keep learning part-time, and he will only pursue property when the cash flow, financing, legal and tax facts make sense. His legacy is a business that serves generations."},
      {from:"\"I had no goals in Grade 8. I failed at selling sweets. I got a credit card and messed up. I cut it up. My laptop died and I had no emergency fund. I learned every lesson the hard way. But I kept going. I am still going. And now I have a Life Launch Plan. With Reality Checks. With a personal board of directors. With a legacy vision. With a house for my grandmother. That is not just progress. That is proof. Proof that change is possible. Proof that the person who starts with nothing can build something. Proof that failure is not the end—it is tuition. And I have paid my tuition. Now I am ready to graduate.\"",to:"\"I had no goals in Form 1. I failed at a small selling experiment. I made credit and emergency-fund mistakes later. I learned slowly and sometimes painfully. But I kept reviewing the evidence. Now I have a Life Launch Plan with Reality Checks, mentors, contingencies and a legacy vision. That is proof of change—not proof that the future will be easy.\""},
      {from:"\"Thabo. From a broken bike and a handful of customers to a logistics company with a life plan. Lethabo. From one ugly clock for your grandmother to a craftsman's future and a legacy of skill. Atlehang. From a single question in Grade 9—'Did you ask them why?'—to a life plan centred on community and connection. Nosipho. From tutoring younger kids to a teaching career and a vision of financially literate students. Emmanuel. From a spaza shop threatened by a mall to a community commerce hub and a legacy of service.\"",to:"\"Thabo: from a broken bike and a handful of customers to a logistics plan with systems. Lethabo: from one rough clock to a future built around craft and skill. Atlehang: from one difficult question in Form 2 to a life plan centred on community and connection. Nosipho: from tutoring younger learners to a teaching direction. Emmanuel: from a tuckshop under competitive pressure to a community-commerce vision.\""},
      {from:"Question 3 — The Sipho Mirror: Sipho had no goals in Grade 8. Now he has a Life Launch Plan, a workshop, employees, and a house for his grandmother. What version of yourself—from an earlier grade—would be most surprised by the plan you presented? What would that younger you say?",to:"Question 3 — The Sipho Mirror: Sipho had no goals in Form 1. Now he has a Life Launch Plan, a workshop and people who depend on his decisions. What earlier version of yourself would be most surprised by your plan? What would that younger you say?"},
    ],
  },
  "g12-t4-l73-065": {
    title:"REVIEW — THE FORM 4 LAUNCH YEAR",
    tableReplacements:[
      {
        cellIncludes:"post-matric options",
        rows:[
          ["Zimbabwe Term","Theme","What We Learned"],
          ["1","Advanced Wealth & Legacy","Wealth building, diversification, property/business growth, tax awareness, protection, giving and legacy"],
          ["2","Transition, Career & Income","Legal adulthood, post-O-Level pathways, applications/funding, work, CVs, interviews, networking, side hustles and career planning"],
          ["3","Risk, Protection & Life Launch","Insurance, estate planning, investment review, fraud/digital security, integration and the Life Launch Plan"],
        ],
      },
    ],
    textReplacements:[
      {from:"📘 Myah Looks Back at Grade 12",to:"📘 Myah Looks Back at Form 4"},
      {from:"Myah sits at Mama Rose's kitchen, her three notebooks from Grade 12 spread across the table. Term 1. Term 2. Term 3. She flips through them, tracing the arc of her final year.",to:"Myah sits at Mama Rose's kitchen with her Form 4 portfolio open. Term 1: advanced wealth and legacy. Term 2: transition and career launch. Term 3: risk, protection and Life Launch. She traces how the final year turned earlier plans into operating decisions."},
      {from:"Funding. Zinhle: \"NSFAS is a loan with grace.\"",to:"Funding. Zinhle: \"Read the conditions—funding can be a bursary, scholarship, sponsorship or loan, and the obligations are different.\""},
      {from:"Zinhle's first job. The payslip shock. R3,420 gone before it reached her.",to:"Zinhle's first job. The payslip lesson: gross pay is not net pay; verify PAYE, NSSA and any other deductions that actually apply."},
      {from:"She writes on a fresh page: I started Grade 12 thinking about transition—how to get from school to whatever comes next. I am ending thinking about integration—how everything I have learned fits together into one life. Transition. Career. Protection. They are not separate. They are one architecture. And I am the architect. The operator. The launcher. All of them. I am ready for the final final project. I am ready to launch.",to:"She writes on a fresh page: I started Form 4 thinking about wealth and legacy. Then transition and career turned the architecture toward the real world. Risk and protection forced me to ask what could break. Now integration asks whether all of it can live together. I am ready to complete the Life Launch Plan."},
      {from:"Grade 12 = Transition + Career + Protection → Launch",to:"Form 4 = Wealth & Legacy + Transition & Career + Risk & Protection → Life Launch"},
      {from:"✍️ Activity 73: My Grade 12 Review",to:"✍️ Activity 73: My Form 4 Review"},
    ],
  },
  "g12-t4-l74-066": {
    textReplacements:[
      {from:"Term 1: Transition Plan — Path: Hybrid. UNISA part-time BEd. Business part-time. Shared flat in Pretoria. Budget balanced.",to:"Transition Plan — Preferred direction: hybrid further study/training plus business, conditional on confirmed entry, funding and workload. Shared-living option in Harare if relocation is necessary. Budget uses verified current costs."},
      {from:"Key idea: Myah saw that her plans were aligned. The Transition Plan got her to UNISA and the business. The Career Plan gave her income and purpose. The Risk Plan protected both. The paradox: a life is not a collection of separate plans. It is one plan with many parts. Do not see your plans as separate. See them as one.",to:"Key idea: Myah sees that alignment is not about one institution or one job. The Transition Plan must support capability and living arrangements. The Career Plan must generate learning and income. The Risk Plan must protect what both depend on. One life, many connected systems."},
    ],
  },
  "g12-t4-l75-067": {
    title:"MY TRANSITION PLAN — FINAL EVIDENCE UPDATE",
    tableReplacements:[
      {
        cellIncludes:"NSFAS + business income",
        rows:[
          ["Element","Earlier Plan","Final Form 4 Evidence / Update","What I Learned"],
          ["Path","Hybrid: further study/training + business","Preferred route identified; final institution/path depends on confirmed results, offers, funding and entry requirements","Direction can be clear while details remain conditional"],
          ["Business","Workshops + digital products","Real delivery evidence and customer feedback recorded; revenue remains variable","Marketing and repeat demand need systems"],
          ["Funding","Bursary / scholarship / student-finance / income options","Applications and criteria checked; only confirmed funding enters the final budget","Never build a budget on hoped-for funding"],
          ["Living","Shared accommodation if relocation is required","Options costed for Harare / relevant destination; safety and roommate expectations included","Housing is more than rent"],
          ["Budget","Launch budget","Updated with current prices, currencies and a buffer; stale figures removed","A budget expires when reality changes"],
          ["Timeline","Applications, decisions, start dates","Dates linked to official sources or review triggers","A timeline needs provenance"],
          ["Backup","Alternative study/work/skills route","Trigger defined for when the preferred path is no longer viable","A backup protects momentum"],
        ],
      },
      {
        cellIncludes:"Updated (Term 4)",
        rows:[
          ["Element","Earlier Plan","Final Form 4 Update","What I Learned"],
          ["Path","","",""],
          ["Applications","","",""],
          ["Funding","","",""],
          ["Living","","",""],
          ["Budget","","",""],
          ["Timeline","","",""],
          ["Backup","","",""],
        ],
      },
    ],
  },
  "g12-t4-l76-068": {
    title:"MY CAREER LAUNCH & RISK PLANS — FINAL EVIDENCE UPDATE",
    tableReplacements:[
      {
        cellIncludes:"fellow UNISA students",
        rows:[
          ["Element","Earlier Career Plan","Final Form 4 Update","Status / Evidence"],
          ["Career vision","Financial education through workshops, digital products and teaching","Direction retained; exact study/training route remains conditional on confirmed admissions and opportunity","Evidence from workshops/products"],
          ["Income streams","Freelance + digital + tutoring","Real streams tracked separately by revenue, costs, time and reliability","Growing / review quarterly"],
          ["Professional brand","I help young people understand money","Portfolio and public profile show examples of the work rather than claims alone","Building"],
          ["Network","Mentors, clients and peers","Added real clients, peers and potential mentors from actual work/study applications","Expanding"],
          ["Skill development","Public speaking, curriculum design, sales","Priority skills ranked by current evidence gaps","Active"],
        ],
      },
      {
        cellIncludes:"TFSA contributions maintained",
        rows:[
          ["Element","Earlier Risk Plan","Final Form 4 Update","Status / Next Check"],
          ["Insurance","Contents, liability and health/medical protection where relevant","Compare regulated products and activate only where risk/cost justify it","Verify policy and IPEC/provider status"],
          ["Estate","Will / estate records","Real documents to follow current Zimbabwe formalities; records and review triggers defined","Legal check required when executed"],
          ["Investments","Diversified regulated products","Portfolio view includes provider, regulator, currency, fees, asset class and liquidity; no TFSA/RA assumptions","Review annually or after major change"],
          ["Fraud prevention","Protocols in place","2FA, password manager and independent-verification rule active","Ongoing"],
          ["Emergency fund","Target based on essentials","Actual target defined from current essential monthly costs and currencies","Monthly review"],
        ],
      },
    ],
  },
  "g12-t4-l77-069": {
    title:"THE FIVE MODES — MYAH'S FOUR-FORM ARC",
    tableReplacements:[
      {
        cellIncludes:"Watched her mother count coins",
        rows:[
          ["Mode","Where It Emerged","What It Means","Evidence in Myah's Journey","Evidence in Your Journey"],
          ["Observer","Form 1","Noticing, gathering data, asking better questions","Watched money and value move through home and the kombi rank",""],
          ["Challenger","Form 2","Questioning, acting, testing small","Faced silence, tested the cooler-box business and mapped community money",""],
          ["Strategist","Form 3","Thinking in systems, planning and measuring","Built investment, systems and financial-independence architecture",""],
          ["Architect","Form 3 → Form 4 Term 1","Designing structures that can outlast one action or one person","Built leverage, leadership, wealth and legacy frameworks",""],
          ["Operator / Launcher","Form 4","Executing, protecting, integrating and handing plans to reality","Built transition, career, protection and Life Launch plans with evidence and review triggers",""],
        ],
      },
      {
        cellIncludes:"Observer (Grade 8)",
        rows:[
          ["Mode","My Evidence"],
          ["Observer (Form 1)",""],
          ["Challenger (Form 2)",""],
          ["Strategist (Form 3)",""],
          ["Architect (Form 3 → Form 4 Term 1)",""],
          ["Operator / Launcher (Form 4)",""],
        ],
      },
    ],
    textReplacements:[
      {from:"See Myah's complete journey from Grade 8 to Grade 12.",to:"See Myah's complete journey across Forms 1–4."},
      {from:"Ms. Daniels writes five words on the board at the community hall. The same hall where they have presented their plans since Grade 9. The same chairs. The same sense of occasion. But everything feels different now. This is the final review before the final final project.",to:"Ms. Daniels writes five modes on the board at the community hall. The same hall where they have presented major plans since Form 2. Five modes, four school years: some modes emerge within the same Form because growth does not follow a neat one-stage-per-year timetable."},
      {from:"Grade 8 — The Observer: Myah was barely there. A quiet figure at the edge of scenes. Watching. Noticing. The seed planted but not yet visible. She did not speak much. But she saw everything. She noticed that her mother counted coins every morning. She noticed that the taxi rank was a system of money flows. She noticed that some people had more coins than others. The observer gathers data. The observer sees patterns. The observer prepares—without knowing she is preparing.",to:"Form 1 — The Observer: Myah watched. She noticed her mother counting money. She noticed that the kombi rank was a system of money and value flows. The observer gathers data, sees patterns and asks questions before acting."},
      {from:"Grade 9 — The Challenger: The observer acted. She walked into the grant office. She demanded answers. She built the mini-business. Her stillness was preparation. Now she moved. The challenger questions the system. The challenger refuses to accept silence. The challenger starts things—small things, imperfect things, real things. The cooler box. The water sales. The first workshop. The challenger learns that starting small is better than waiting for perfect.",to:"Form 2 — The Challenger: the observer acted. She confronted silence, tested a small cooler-box business, mapped community money and learned that action should produce evidence. The challenger questions systems and tests what can be changed."},
      {from:"Grade 10 — The Strategist: The challenger learned to think in systems. She designed her financial architecture. She learned about compound interest, tax, retirement, insurance. She built her Financial Independence Plan—with failure signals, control scores, and Red Lines. She found her sweet spot: financial education that actually works. The strategist does not just act. She plans. She builds frameworks. She thinks long-term.",to:"Form 3 — The Strategist: the challenger learned to think in systems. She built financial architecture, studied investing, tax, independence, leverage and leadership, and began designing plans with failure signals, control scores and Red Lines."},
      {from:"Grade 11 — The Architect: The strategist learned to design structures that outlast her. She built leverage systems. She articulated her Leadership Philosophy. She created a 10-Year Wealth Plan. She designed a Life and Legacy Plan. The architect does not just build for herself. She builds for others. She builds for the future. She builds what will remain after she is gone.",to:"Form 3 into Form 4 Term 1 — The Architect: the strategist began designing structures that could outlast one moment—leverage systems, a Leadership Philosophy, a 10-Year Wealth Plan and a Life and Legacy Plan."},
      {from:"Grade 12 — The Operator/Launcher: The architect's blueprints became the operator's reality. She built the Transition Plan. The Career Launch Plan. The Risk and Protection Plan. She integrated everything—purpose, money, work, people, health, joy, legacy—into one architecture. She built her professional brand. She built her network. She built her resilience. The operator maintains what the architect designed. The launcher releases it into the world.",to:"Form 4 — The Operator/Launcher: the architecture met reality. Myah built transition, career and protection plans, updated them with evidence, and integrated purpose, money, work, people, health, joy and legacy into the Life Launch Plan. The operator maintains and revises; the launcher acts."},
      {from:"Where are you in your arc? What evidence do you have of each stage? What comes next—after Grade 12?",to:"Where are you in your arc? What evidence do you have of each mode? What comes next after Form 4 / O-Level?"},
    ],
  },
  "g12-t4-l78-070": {
    textReplacements:[
      {from:"Sipho writes: \"Ms. Daniels—for not giving up on me when I had no goals. For seeing something in me I could not see in myself. For teaching me that failure is tuition—if you learn from it. My grandmother—for giving me R20 and letting me learn what happens when you spend it all on sweets. That lesson cost R20. It was worth millions.\"",to:"Sipho writes: \"Ms. Daniels—for not giving up on me when I had no goals. For seeing something in me I could not see. My grandmother—for letting me learn from an early pocket-money mistake instead of rescuing me from every consequence. The amount was small. The lesson lasted.\""},
      {from:"Myah writes: \"Ms. Daniels—for seeing me before I could see myself. For teaching me that noticing is a skill. For creating the conditions for discovery—and then stepping back to let me discover. Mama Rose—for proving that business is people. For giving me an ethical test I will use for the rest of my life. For twenty years of showing up. Mr. Patel—for teaching me that integrity compounds. Gogo Maria—for the worn piece of paper and the five forms of wealth. Zinhle—for explaining payslips and tax and TFSA and RA, always with patience, always with honesty. Themba—for sharing your failures so we could learn from them. Atlehang—for asking the questions that changed everything. For being my accountability partner. For being my friend. My mother—for counting coins every morning. For teaching me that leverage is an old survival skill. For believing in me. Atlehang Ngwenya—for the badge you gave back without complaint. For teaching me that legacy is not about recognition. It is about impact.\"",to:"Myah writes: \"Ms. Daniels—for teaching me that noticing is a skill. Mama Rose—for proving that business is people. Mr. Patel—for teaching me that integrity compounds. Gogo Maria—for the five forms of wealth. Zinhle—for teaching me to read payslips, tax rules, pension and investment products instead of memorising product names. Themba—for sharing failures. Atlehang—for asking the questions that changed everything. My mother—for showing me that resourcefulness and leverage are old survival skills. And everyone who taught me that legacy is not recognition. It is impact.\""},
    ],
  },
  "g12-t4-l79-071": {
    textReplacements:[
      {from:"5. You are enough. \"You do not need to be perfect. You do not need to have it all figured out. You do not need to be the smartest person in the room. You just need to keep showing up. Keep learning. Keep growing. Keep caring. The person who shows up consistently, with integrity, with curiosity, with care—that person will build a life that matters. You are already that person. You have been becoming that person for five years. Do not forget who you are.\"",to:"5. Keep becoming. \"You do not need to be perfect or have everything figured out. Keep showing up, learning, growing and caring. Across four years you have built evidence of who you can be under pressure. Do not confuse a finished school programme with a finished person.\""},
      {from:"\"I have watched you grow for five years. Myah—from the grant office to this moment. Thabo—from a broken bike to a logistics company. Sipho—from no goals to a Life Launch Plan. Atlehang—from a single question to a network that amplifies quiet voices. I have seen you struggle. I have seen you rise. I have seen you become.\"",to:"\"I have watched this Applied Commerce cohort grow across four years. Myah—from the committee office to this moment. Thabo—from a broken bike to a logistics plan. Sipho—from no goals to a Life Launch Plan. Atlehang—from a single question to a network that amplifies quiet voices. I have seen struggle, revision and growth.\""},
      {from:"The Paradoxical Reversal: But here is the deepest truth she named: you are already enough. You have been becoming for five years. The plans are impressive. The person is extraordinary. The launch is not about becoming someone new. It is about releasing into the world the person you already are—the person you have been becoming since Grade 8. The observer. The challenger. The strategist. The architect. The operator. The launcher. All of them are you. All of them have always been you. Now go be them in the world. And her sixth lesson—\"the parcels are the excuse, the visit is the point\"—is the key that unlocks the entire Applied Commerce journey. The curriculum was the excuse. Your becoming was the point. The textbooks, the activities, the checkpoints, the Thinking Equations, the Tension/Experiment Logs—all of them were parcels. You were the visit. You were the point. The entire five-year curriculum was designed not to teach you about money. It was designed to help you become you. And you have. Not perfectly. Not completely. But really. The evidence is in this room. The evidence is in your portfolio. The evidence is in you.",to:"The Paradoxical Reversal: the launch is not about becoming a completely new person overnight. Across four years you practised different modes: observer, challenger, strategist, architect, operator and launcher. The curriculum, activities, Thinking Equations and Tension/Experiment Logs were tools. The deeper purpose was building agency and evidence. The programme is ending. The process of becoming is not."},
      {from:"The Launcher's Question: What is one thing you have become over these five years that you did not know you could become? When did you first realize it? And who witnessed it?",to:"The Launcher's Question: What is one capability you built across these four years that you did not know you could build? When did you first see evidence of it, and who witnessed it?"},
    ],
  },
  "g12-t4-l80-072": {
    title:"THE LIFE LAUNCH PLAN — FINAL CAPSTONE",
    tableReplacements:[
      {
        cellIncludes:"Grade 9 values",
        rows:[
          ["Section","What to Include","Evidence Source"],
          ["1. My Purpose and Values","What matters most? What do I stand for?","Values and identity evidence across Forms 1–4"],
          ["2. My Post-O-Level Transition Plan","Next 1–2 years: route, prerequisites, logistics, living and budget","Form 4 Term 2, final update"],
          ["3. My Career Launch Plan","Career direction, income strategy, brand, network and skills","Form 4 Term 2, final update"],
          ["4. My Risk and Protection Plan","Insurance, estate planning, investments, fraud/digital security and emergency buffer","Form 4 Term 3, final update"],
          ["5. My Wealth Architecture","How I build, protect and align financial resources","Form 3 + Form 4 Term 1"],
          ["6. My Leadership Philosophy","How I lead self and others, including red lines","Form 3"],
          ["7. My Legacy Vision","What I want to contribute and pass on","Form 4 Term 1 + final update"],
          ["8. My Life Integration","How work, money, people, health, joy and purpose connect","All four forms"],
          ["9. My Launch Timeline","Near-term actions plus later review milestones","Current Form 4 evidence"],
          ["10. My Reality Checks","How I will know a plan is working or failing","All four forms"],
          ["11. My Downside Management","Main risks and how I reduce, transfer, accept or redesign them","Form 4 Term 3"],
          ["12. My Reflection","What the evidence says I learned and became","Portfolio across Forms 1–4"],
        ],
      },
    ],
    textReplacements:[
      {from:"\"This is it. Your final capstone. The project that brings together everything—from Grade 8 to now. Five years of learning. Five years of becoming. One final plan.\"",to:"\"This is it. Your final capstone. The project that brings together the evidence from Form 1 to Form 4. Four years of Applied Commerce. One living plan that you will keep revising after school.\""},
      {from:"\"Your task is to create a comprehensive, integrated plan for launching into adulthood. This plan brings together your Transition Plan from Term 1, your Career Launch Plan from Term 2, your Risk and Protection Plan from Term 3—and everything you have learned across five years. Your values. Your purpose. Your identity. Your resources. Your habits. Your leverage. Your leadership. Your wealth architecture. Your legacy vision. Everything.\"",to:"\"Your task is to create a comprehensive, integrated plan for the transition beyond Form 4. It brings together your Post-O-Level Transition Plan, Career Launch Plan, Risk and Protection Plan, wealth architecture, leadership philosophy, values and legacy vision—and the habits, evidence and agency built across four years.\""},
    ],
  },
  "g9-t1-l02-002": {
    textReplacements:[
      {from:"It is a Saturday afternoon. Myah is at Mama Rose's kitchen in Alexandra, helping chop vegetables. She has been coming here since the grant office silence began. Mama Rose does not ask questions. She just hands Myah a knife and a pile of onions and lets the work do its work.",to:"It is a Saturday afternoon. Myah is at Mama Rose's kitchen in Harare, helping chop vegetables. She has been coming here since the committee-office silence began. Mama Rose does not ask questions. She just hands Myah a knife and a pile of onions and lets the work do its work."},
    ],
  },
  "g9-t1-assessment-1": {
    label:"FORM 2 TERM 1 APPLIED ASSESSMENT",
    title:"FORM 2 TERM 1 APPLIED ASSESSMENT",
    blocks:[
      {index:23,kind:"text",text:"a) What problem is Nosipho solving? (2 marks) b) Who are her potential customers? (2 marks) c) Nosipho considers charging US$5 per hour. A parent offers US$50 for a 10-week term. What pricing approach is the parent proposing? Which option would you recommend, and why? (3 marks) d) What hidden skills does Nosipho have inside her tutoring skill? Name TWO. (3 marks)"},
      {index:24,kind:"text",text:"17. Thabo wants to start a delivery service for elders in his street. He has 5 potential customers, charges US$2 per delivery, and his bike maintenance costs US$4 per week. (10 marks)"},
      {index:25,kind:"text",text:"a) Calculate Thabo's weekly income. (2 marks) b) Calculate his weekly profit. (2 marks) c) What is Thabo's profit per customer per week? (2 marks) d) If Thabo wants to save US$20 for bike repairs and saves all of this weekly profit, how many full weeks will it take? (2 marks) e) What is one risk Thabo faces as a sole proprietor? (2 marks)"},
      {index:26,kind:"text",text:"18. Sipho wants to price his artwork. Paper costs US$0.50, charcoal costs US$0.20, and he values his time at US$3 per hour for 2 hours. (10 marks)"},
      {index:27,kind:"text",text:"a) Calculate Sipho's material costs per drawing. (2 marks) b) Calculate Sipho's base price if he includes materials plus the value of his time. (2 marks) c) A customer offers US$6. Should Sipho accept if his goal is to cover that base price? Why or why not? (3 marks) d) If demand for Sipho's drawings rises, what should he consider before changing his price? (3 marks)"},
    ],
  },
  "g9-t3-assessment-2": {
    label:"FORM 2 TERM 2 APPLIED ASSESSMENT",
    title:"FORM 2 TERM 2 APPLIED ASSESSMENT",
    blocks:[
      {index:24,kind:"text",text:"17. Themba put US$200 into a risky online business without first testing the opportunity or protecting essential money. He lost the full amount. (10 marks)"},
    ],
  },
  "g9-t4-assessment-3": {
    label:"FORM 2 TERM 3 APPLIED ASSESSMENT",
    title:"FORM 2 TERM 3 APPLIED ASSESSMENT",
    blocks:[
      {index:11,kind:"text",text:"9. The next stage after Form 2 in the Applied Commerce Zimbabwe pathway is: a) Leaving school immediately b) Continuing to Form 3 c) Only working d) Only starting a business"},
      {index:12,kind:"text",text:"10. A strong Form 3 direction plan should: a) Close off every option immediately b) Identify capabilities and learning areas to strengthen while continuing O-Level c) Ignore practical skills d) Copy another learner's plan"},
      {index:18,kind:"text",text:"14. Give TWO elements of a strong Form 3 direction plan and explain why each matters. (4 marks)"},
      {index:24,kind:"text",text:"17. Thabo's delivery service has 12 regular customers. He charges US$1.50 per delivery. His weekly expenses are US$6. (10 marks)"},
      {index:25,kind:"text",text:"a) Calculate Thabo's weekly income. (2 marks) b) Calculate his weekly profit. (2 marks) c) Thabo wants to save US$30 for a new bike part. If he saves all of this weekly profit, how many full weeks will it take? (2 marks) d) If Thabo reinvests US$2 of his profit into advertising each week, how much profit remains after that reinvestment? (2 marks) e) Why might reinvesting some profit help Thabo's business grow? (2 marks)"},
      {index:27,kind:"text",text:"a) What is the High-Agency Challenge? (2 marks) b) What was Sipho's survival asset? (2 marks) c) Sipho earned US$3 on his first repair. If he protects US$1.50 as seed capital for tools or materials, how much remains available for other needs? (2 marks) d) Why is protecting seed capital important when someone is starting with very little capital? (2 marks) e) What did Sipho prove to himself by completing the High-Agency Challenge? (2 marks)"},
    ],
  },
  "g9-t1-l01-001": {
    textReplacements: [
      {from:"Recall key learning from Grade 8 and assess what you carry forward.",to:"Recall key learning from Form 1 and assess what you carry forward."},
      {from:"Set a strategic intention for Grade 9.",to:"Set a strategic intention for Form 2."},
      {from:"Three months since she submitted her water project proposal to the community grant committee. She was fifteen then — younger, she thinks now, though it was only June. She had typed the pages carefully at the internet café, R2 for fifteen minutes. She had attached a budget spreadsheet, checked three times. She had letters of support from Auntie Grace at the taxi rank and from her mother's employer, who wrote on letterhead that looked official.",to:"Three months since she submitted her water project proposal to the community committee. She was younger then, she thinks now, though it was only a few months ago. She had typed the pages carefully at an internet café, paying a small fee for computer time. She had attached a budget spreadsheet, checked three times. She had letters of support from Auntie Grace at the kombi rank and from her mother's employer, who wrote on official letterhead."},
      {from:"She thinks about this as she walks to school. The same taxi rank. The same vendors — Auntie Grace selling vetkoek, the queue marshals shouting destinations, the woman with the flask of coffee who has been there since 5am. She sees it differently now. Last year, in Grade 8, she learned to notice. She learned to trace money flows. She learned that her identity shapes her choices and her habits shape her identity. She tracked a habit for 21 days. She built a budget. She completed a final project.",to:"She thinks about this as she walks to school. The same kombi rank. The same vendors — Auntie Grace selling vetkoek, the rank marshals calling destinations, the woman with the flask of coffee who has been there since before sunrise. She sees it differently now. In Form 1, she learned to notice. She learned to trace money flows. She learned that identity shapes choices and habits reinforce identity. She tracked a habit, built a budget and completed a final project."},
      {from:"At the school gate, she sees Ms. Daniels — not in the classroom, just there, buying a banana from a vendor. Ms. Daniels taught her in Grade 8. Now she is something else. A mentor. Someone who appears when needed.",to:"At the school gate, she sees Ms. Daniels — not in the classroom, just there, buying a banana from a vendor. Ms. Daniels taught her in Form 1. Now she is something else too: a mentor. Someone who appears when needed."},
      {from:"Ms. Daniels listens without interrupting. When Myah finishes, she says: \"Grade 8 taught you to notice. Grade 9 will teach you what to do when noticing is not enough. The rules you learned — follow instructions, work hard, be patient — they matter. But they are not always sufficient. Sometimes you do everything right and still lose. That moment is not the end. It is the beginning of agency.\"",to:"Ms. Daniels listens without interrupting. When Myah finishes, she says: \"Form 1 taught you to notice. Form 2 will teach you what to do when noticing is not enough. The rules you learned — follow instructions, work hard, be patient — they matter. But they are not always sufficient. Sometimes you do everything right and still lose. That moment is not the end. It is where agency becomes visible.\""},
      {from:"This equation is not new to you. You met it in Grade 8. But it means something different now. In Grade 8, it was a principle. In Grade 9, it is a test. What will you do with what you know?",to:"This equation is not new to you. You met it in Form 1. But it means something different now. In Form 1, it was a principle. In Form 2, it becomes a test: what will you do with what you know?"},
      {from:"Think about your Grade 8 year. What is one thing you learned that you are still carrying? What is one thing you learned but have not yet acted on?",to:"Think about your Form 1 year. What is one thing you learned that you are still carrying? What is one thing you learned but have not yet acted on?"},
      {from:"✍️ Activity 1: My Grade 9 Strategic Audit",to:"✍️ Activity 1: My Form 2 Strategic Audit"},
      {from:"List THREE assets from Grade 8 — skills, habits, mindsets, insights — that you will actively use this year. For each, write one sentence about how it will help you in Grade 9.",to:"List THREE assets from Form 1 — skills, habits, mindsets or insights — that you will actively use this year. For each, write one sentence about how it will help you in Form 2."},
      {from:"Key idea: You are not starting Grade 9 empty. You carry everything from Grade 8 — every experiment, every insight, every Thinking Equation, every failure that taught you something. That foundation is real.",to:"Key idea: You are not starting Form 2 empty. You carry everything from Form 1 — every experiment, insight, Thinking Equation and failure that taught you something. That foundation is real."},
      {from:"Here’s the tension: the person who wrote your Grade 8 letter to yourself is not gone. She is still inside you — with her old fears, her old habits, her old ways of avoiding hard things. She will fight for control of your future this term. Your new intention is a declaration of war against your old self. You are both the sculptor and the stone. The stone resists. The question is whether you will keep sculpting when it gets hard — or let the old shape reassert itself.",to:"Here’s the tension: the person who wrote your Form 1 letter to yourself is not gone. Old fears, habits and avoidance patterns can return. Your new intention is not a war against yourself; it is a decision to practise a better response when those patterns appear. You are both the sculptor and the stone. The question is whether you keep shaping your behaviour when it gets hard."},
      {from:"| Date | | | Lesson | Lesson 1 — Strategic Audit | | Experiment/Observation | I conducted a strategic audit of my assets and liabilities for Grade 9. | | Result | My most dangerous liability: | | Learning | | | Next Action | My one action this week: |",to:"| Date | | | Lesson | Lesson 1 — Strategic Audit | | Experiment/Observation | I conducted a strategic audit of my assets and liabilities for Form 2. | | Result | My most dangerous liability: | | Learning | | | Next Action | My one action this week: |"},
    ],
  },
  "g9-t1-l03-003": {
    textReplacements: [
      {from:"The community hall where the grant committee meets is a low brick building near the taxi rank. Myah has walked past it a hundred times. She has never gone in — until today.",to:"The community hall where the committee meets is a low brick building near the kombi rank. Myah has walked past it a hundred times. She has never gone in — until today."},
    ],
  },
  "g9-t1-l04-004": {
    textReplacements: [
      {from:"Thabo's mother, Grace, works at a crèche on weekdays. Formal work. Payslip. UIF. She earns R3,200 a month. It covers the rent and not much else.",to:"Thabo's mother, Grace, works at an early childhood centre on weekdays. Formal work. Regular pay. In this illustrative story she earns about US$220 a month. It covers major household costs and leaves little room for shocks."},
      {from:"She wakes at 4am. By 6am, the kitchen is full of the smell of bread and vetkoek. By 7am, she is at the taxi rank with a cooler box and a flask of coffee. She sells to commuters, taxi drivers, queue marshals — anyone who is hungry and in a hurry.",to:"She wakes before dawn. By 6am, the kitchen is full of the smell of bread and vetkoek. By 7am, she is at the kombi rank with a cooler box and a flask of coffee. She sells to commuters, kombi drivers, rank marshals — anyone who is hungry and in a hurry."},
      {from:"Myah meets Thabo at the taxi rank one Saturday. She watches his mother work — the speed of her hands, the way she remembers who takes sugar and who does not, the way she asks after people's children.",to:"Myah meets Thabo at the kombi rank one Saturday. She watches his mother work — the speed of her hands, the way she remembers who takes sugar and who does not, the way she asks after people's children."},
      {from:"Key idea: The economy measures work in rands. But rands do not measure care. They do not measure love. They do not measure the grandmother who holds the family together without a salary, the older sibling who gets the younger ones ready for school, the neighbour who checks on the elder next door. You are not your wage. You are your work — all of it, paid and unpaid.",to:"Key idea: Markets put prices on some work, but money does not measure all value. It does not fully measure care, love, unpaid household labour or the neighbour who checks on an elder next door. Your wage is one signal of economic value; it is not the full measure of your contribution."},
    ],
    tableTextReplacements: [
      {from:"Spaza shop owner",to:"Tuckshop owner"},
      {from:"taxi owner",to:"kombi operator"},
      {from:"Stokvel organising",to:"Mukando organising"},
    ],
  },
  "g9-t1-l05-005": {
    textReplacements: [
      {from:"Twenty years ago, she was a domestic worker in Alexandra. She had four children. Her husband had left. She earned R800 a month, and after rent and transport, there was almost nothing for food.",to:"Twenty years ago, she was a domestic worker in Harare. She had four children. Her husband had left. Her income was small and irregular enough that after rent, transport and other essentials, there was often very little left for food."},
      {from:"Her children ate. Then her neighbour's children smelled the food and asked for some. Then the neighbour herself came with a plate and R5. Then a taxi driver stopped by on his way home. Then another. Then another.",to:"Her children ate. Then her neighbour's children smelled the food and asked for some. Then the neighbour herself came with a plate and a small payment. Then a kombi driver stopped by on his way home. Then another. Then another."},
      {from:"Myah watches the customers come and go. A taxi driver in a hurry. An elderly woman who sits slowly. A young mother with a baby. Mama Rose treats each one differently — because each one IS different.",to:"Myah watches the customers come and go. A kombi driver in a hurry. An elderly woman who sits slowly. A young mother with a baby. Mama Rose treats each one differently — because each one is different."},
      {from:"This week, when you buy from a small business — a spaza shop, a vendor, a service provider — do one thing: learn their name if you do not know it, or use their name if you do. Say thank you specifically for something. Notice how they respond. Notice how you feel.",to:"This week, when you buy from a small business — a tuckshop, market stall, vendor or service provider — do one thing: learn the person's name if you do not know it, or use their name if you do. Say thank you specifically for something. Notice how they respond. Notice how you feel."},
    ],
  },
  "g9-t1-l07-007": {
    textReplacements: [
      {from:"Sipho — the same Sipho who in Grade 8 had no goals, spent his R20 on sweets and regretted it, and later fixed a broken classroom chair with nothing but folded cardboard — has been busy.",to:"Sipho — the same Sipho who in Form 1 had no clear goals, spent money impulsively and regretted it, and later fixed a broken classroom chair with folded cardboard — has been busy."},
      {from:"He did not plan to become someone who fixes things. It just happened. His sister's toy car broke. He fixed it. His grandmother's kettle stopped working. He opened it, saw a loose wire, reconnected it. A neighbour noticed and asked if he could look at their radio. He did. It worked. They paid him R30.",to:"He did not plan to become someone who fixes things. It just happened. His sister's toy car broke. He fixed it. His grandmother's kettle stopped working. He opened it, found a simple fault and repaired it safely with an adult nearby. A neighbour noticed and asked if he could look at their radio. He did. It worked. They paid him a small agreed amount."},
      {from:"Now, at fifteen, Sipho has a small reputation in his section of Tembisa. He fixes small appliances. He does not have a shop. He does not have a sign. He has his hands and a growing sense that his hands know things his mouth has never been able to say.",to:"Now, Sipho has a small reputation in his neighbourhood in Chitungwiza. He fixes simple items he knows how to handle safely. He does not have a shop. He does not have a sign. He has practical skill and a growing sense that his hands know things his mouth has never been able to say."},
      {from:"Myah finds him at Emmanuel's spaza shop, buying a replacement switch for a kettle he is repairing. \"You have a business,\" she says.",to:"Myah finds him at Emmanuel's tuckshop, buying a simple replacement part for something he is repairing. \"You have a business,\" she says."},
    ],
  },
  "g9-t1-l08-008": {
    textReplacements: [
      {from:"Lerato, visiting her cousin in Tembisa, finds Myah at the taxi rank. Myah shows her the skill list from yesterday's activity. \"I have too many skills,\" Myah says. \"I do not know which one to focus on.\"",to:"Lerato, visiting her cousin in Chitungwiza, finds Myah at the kombi rank. Myah shows her the skill list from yesterday's activity. \"I have too many skills,\" Myah says. \"I do not know which one to focus on.\""},
    ],
  },
  "g9-t1-l09-009": {
    textReplacements: [
      {from:"📘 What Myah Sees at the Taxi Rank",to:"📘 What Myah Sees at the Kombi Rank"},
      {from:"Myah has been coming to this taxi rank her whole life. But since the grant office, since Atlehang's question, since she started seeing differently, the rank has transformed.",to:"Myah has been coming to this kombi rank for years. But since the committee office, since Atlehang's question, since she started seeing differently, the rank has transformed."},
      {from:"6:45 am. about 40 people waiting. Three queues — Soweto, Tembisa, Johannesburg. The Soweto queue is the longest. People are tired. Some have been here since 5:30.",to:"6:45 am. About 40 people waiting. Several queues — into central Harare, to nearby suburbs and to surrounding areas. One queue is much longer than the others. People are tired. Some have been here since before sunrise."},
      {from:"Problem 2: Thirst. No one sells water or cold drinks in the morning. The spaza shop opens at 7am. The sun is already hot by 6:30.",to:"Problem 2: Thirst. No one sells water or cold drinks early enough. The nearby tuckshop opens later. The morning is already warm."},
      {from:"Think about a place you know well — your school, your street, your taxi rank. What problems do people experience there every day? What signals is the market sending?",to:"Think about a place you know well — your school, your street, your kombi rank or market. What problems do people experience there every day? What signals are people giving about unmet needs?"},
      {from:"Walk through a familiar place in your mind. List TEN problems you notice. For THREE of them, name a specific, real person who experiences it. Not \"commuters\" — \"Mrs. Dlamini, who takes three taxis and carries heavy bags.\"",to:"Walk through a familiar place in your mind. List TEN problems you notice. For THREE of them, name a specific, real person who experiences it. Not \"commuters\" — \"Mrs. Moyo, who changes kombis twice and carries heavy bags.\""},
    ],
  },
  "g9-t1-l10-010": {
    textReplacements: [
      {from:"Myah has chosen her problem: thirst at the taxi rank. People are hot. There is no cold water available before 7am. The spaza shop opens late. The vetkoek woman sells food, not drinks.",to:"Myah has chosen her problem: thirst at the kombi rank. People are hot. There is no cold water available early enough. The nearby tuckshop opens later. The vetkoek vendor sells food, not drinks."},
      {from:"\"I am going to sell water at the taxi rank. No committee. No grant. Just me, a cooler box, and whatever I can buy with my savings.\"",to:"\"I am going to test selling water at the kombi rank. No committee. No grant. Just me, a cooler box, and a small amount from my savings.\""},
      {from:"\"R60.\"",to:"\"US$6.\""},
      {from:"\"That buys you about 15 bottles at wholesale. Sell them at R5 each. Profit is about R3 per bottle. If you sell all 15, you make R45. Then you buy more. Then you sell more. That is not a project. That is a business.\"",to:"\"In this example, US$6 buys 15 bottles at about US$0.40 each. If you sell them at US$0.50 each and sell all 15, sales are US$7.50 and gross profit is US$1.50 before any other costs. Then you use the evidence to decide what to do next. That is how a tiny test becomes enterprise learning.\""},
      {from:"Example: If you think people at the taxi rank are thirsty, do not buy 100 bottles. Buy five. Stand there tomorrow. See if anyone asks to buy one. If they do, your assumption is validated. If they do not, you just learned something important for R20.",to:"Example: If you think people at the kombi rank are thirsty, do not buy 100 bottles. Buy five. Stand there at the relevant time. See whether people actually buy. If they do, you have evidence. If they do not, you just learned something important for a small test cost."},
      {from:"If you can, run your MVP test this week. Even a tiny version. Even with R20. Even with one person. If you cannot run it, simulate it: write down exactly what you WOULD do, what you WOULD buy, where you WOULD stand, what you WOULD say. Then predict what would happen. The simulation is not the test — but it prepares you for the test.",to:"If you can, run your MVP test this week. Keep it tiny and use only an amount you can safely afford to test — for example US$2 or the equivalent in a clearly labelled currency. If you cannot run it, simulate it: write down exactly what you would do, buy, say and measure. The simulation is not the test, but it prepares you for one."},
    ],
  },
  "g9-t1-l11-011": {
    textReplacements: [
      {from:"📘 Myah's First Day at the Taxi Rank",to:"📘 Myah's First Day at the Kombi Rank"},
      {from:"6:00 am. Taxi rank. Cooler box. Fifteen bottles of water. R5 each.",to:"6:00 am. Kombi rank. Cooler box. Fifteen bottles of water. US$0.50 each in this illustrative example."},
      {from:"Myah stands near the Soweto queue, where people wait longest. She does not shout. She does not have a sign. She just stands with her cooler box open, bottles visible, watching.",to:"Myah stands near one of the longest queues. She does not shout. She does not have a sign. She just stands with her cooler box open, bottles visible, watching."},
      {from:"\"R5.\"",to:"\"US$0.50.\""},
      {from:"The woman hesitates. Then she buys one. Then a man in the queue behind her buys one. Then a taxi driver walking past stops, looks, buys two — \"One for now, one for later.\"",to:"The woman hesitates. Then she buys one. Then a man in the queue behind her buys one. Then a kombi driver walking past stops, looks, buys two — \"One for now, one for later.\""},
      {from:"By 7:30 am, she has sold twelve bottles. R60 in her pocket. Cost of goods: R48. Profit: R12. Plus two bottles left to sell.",to:"By 7:30 am, she has sold twelve bottles. Sales: US$6.00. Cost of the twelve bottles sold: US$4.80. Gross profit on those sales: US$1.20, with three bottles still in stock."},
      {from:"What surprised me: The taxi driver bought two. He said he would look for me tomorrow. A regular — on day one.",to:"What surprised me: The kombi driver bought two. He said he would look for me tomorrow. A possible regular customer — on day one."},
    ],
  },
  "g9-t1-l12-012": {
    textReplacements: [
      {from:"📘 What Myah Learned About R5",to:"📘 What Myah Learned About a US$0.50 Price"},
      {from:"She has been selling 15 bottles a day at R5 each. Daily income: R75. Daily cost: R60 (wholesale price). Daily profit: R15.",to:"In this illustrative example, she sells 15 bottles a day at US$0.50 each. Daily sales: US$7.50. Daily stock cost: US$6.00. Gross profit: US$1.50 before any other costs."},
      {from:"\"R15 a day is not much,\" she says.",to:"\"US$1.50 a day does not feel like much,\" she says."},
      {from:"\"It is R75 a week,\" Mama Rose says. \"R300 a month. For standing at a taxi rank for two hours before school. That is more than many people earn in a full day of domestic work.\"",to:"\"If you sold out on five mornings, that would be US$7.50 gross profit for the week,\" Mama Rose says. \"The important question is whether the return is worth your time, effort and risk — and what the test is teaching you.\""},
      {from:"\"But I could charge more. R6. Or R7. People might pay.\"",to:"\"But I could charge more. Maybe US$0.60 or US$0.70. People might pay.\""},
      {from:"\"Because R5 feels fair. It is a coin. People have R5 coins. They do not have to think about it. At R6, they have to find change. At R7, they start to wonder if it is worth it. R5 is easy. R5 is a decision they do not have to make.\"",to:"\"Because US$0.50 is simple in this example. People understand the price quickly and it still leaves a small margin. At US$0.60 or US$0.70, some customers may start comparing alternatives. Price is not only arithmetic; it changes the decision a customer has to make.\""},
      {from:"Example: If your R5 water saves a customer R50 in lost time or discomfort, R5 is not a price. It is a bargain.",to:"Example: If a low-cost bottle of water saves a customer significant time or discomfort, the customer may value it above its stock cost. Price and value are related, but they are not the same thing."},
      {from:"Here’s the tension: the market does not care about the value you think you create. It only cares about its own problem. If your R5 solution saves a customer R500 in time or R5,000 in future damage, charging R5 is not humility. It is a failure of communication and strategy. You are not being \"nice\" by undercharging. You are withholding a solution from someone who desperately needs it — because your low price made it look cheap and unreliable. Underpricing is a form of sabotage. And here is the edge: the fear of charging is not about money. It is about worth. You are afraid to name your price because you are afraid of what it says about you. Too high, and you are arrogant. Too low, and you are worthless. But the price is not about you. It is about the value you create. Separate your identity from your pricing. They are not the same thing.",to:"Here’s the tension: customers judge value from their own problem, alternatives and trust. A low price can help access, but it can also make an offer look unsustainable or unreliable. A high price can signal value, but it can also exclude customers or fail if the benefit is not clear. Pricing is not a judgment of your worth as a person. It is a business decision about value, cost, customer ability to pay, alternatives and sustainability. Keep your identity separate from the price you test."},
    ],
  },
  "g9-t1-l13-013": {
    textReplacements: [
      {from:"\"Myah Dlamini. I submitted a proposal three months ago. The water project at the taxi rank.\"",to:"\"Myah Dlamini. I submitted a proposal three months ago. The water project at the kombi rank.\""},
    ],
  },
  "g9-t1-l14-014": {
    tableReplacements: [
      {
        cellIncludes:"40% of Term 1 grade",
        rows:[
          ["Element","Description"],
          ["Duration","3 weeks of focused work"],
          ["What you will create","A written enterprise project: problem, solution, customer, pricing, plan and reflection"],
          ["Presentation","3–4 minute pitch to the class"],
          ["Assessment","Form 2 Term 1 portfolio evidence"],
        ],
      },
    ],
    textReplacements: [
      {from:"Here’s the tension: starting fast is not the same as starting recklessly. Myah had R60 saved. She had a cooler box. She had observed the taxi rank for months. She knew her customers before she sold them anything. Fast does not mean blind. It means you do not use \"planning\" as an excuse for avoiding action. The Weekend Test is the filter: if you cannot make one sale by Sunday, your idea might be too big, too vague, or too dependent on resources you do not have. Shrink it until it fits within the weekend. Then start.",to:"Here’s the tension: starting fast is not the same as starting recklessly. Myah had US$6 available for a small test, a cooler box and months of observation at the kombi rank. She knew the problem before she sold anything. Fast does not mean blind. It means you do not use planning as an excuse for avoiding evidence. The Weekend Test is a filter: if you cannot test the smallest useful version quickly and safely, your idea may still be too big, vague or resource-heavy. Shrink the test until it is manageable, then learn from what happens."},
    ],
  },
  "g9-t1-l15-015": {
    textReplacements: [
      {from:"Myah goes first. She shares her water business — the cooler box, the 6am start, the R5 price point, the R15 daily profit.",to:"Myah goes first. She shares her water test — the cooler box, the 6am start, the US$0.50 price point and the US$1.50 gross profit when all 15 bottles sell in this illustrative example."},
      {from:"Atlehang asks: \"What if another seller sees you and starts selling water at R4? What is your competitive response that is not just lowering your price?\"",to:"Atlehang asks: \"What if another seller sees you and starts selling water at US$0.45? What is your competitive response that is not just lowering your price?\""},
      {from:"Lethabo asks: \"You are making R15 a day. That is R75 a week. Is that enough to make it worth your time? What would 'worth it' mean to you?\"",to:"Lethabo asks: \"If your gross profit is US$1.50 on a sold-out morning, is that enough to make the test worth your time? What would 'worth it' mean to you — money, evidence, repeat customers, or something else?\""},
    ],
  },
  "g9-t1-l16-016": {
    title: "ENTERPRISE FOUNDATIONS REVIEW AND PORTFOLIO",
    textReplacements: [
      {from:"Here’s the tension: the person who wrote your Grade 8 letter to yourself is not gone. She is still inside you. You have grown around her. You have added new skills, new insights, new evidence. But her old fears — the ones you named in Lesson 1 as liabilities — they are still there too. They did not disappear. They just got quieter. The question is whether you will keep managing them in Term 2, or let them quietly take back control. Growth is not a one-time achievement. It is a daily choice. The liabilities you named in Week 1 — do you remember them? Have you managed them? Or did they manage you?",to:"Here’s the tension: the person who wrote your Form 1 letter to yourself is still part of your story. You have added skills, insights and evidence, but old fears and avoidance patterns can still return. The question is whether you keep noticing and managing them as Form 2 Term 1 continues. Growth is not a one-time achievement; it is repeated practice. Look back at the liabilities you named in Lesson 1. Which ones are quieter because of action, and which still need a better system?"},
      {from:"✍️ Activity 17: Letter to My Future Self — Term 1",to:"✍️ Activity 17: Letter to My Future Self — Enterprise Foundations Checkpoint"},
      {from:"Share your Term 1 reflection with someone who matters to you. Let them witness your growth. Or keep it private. It is yours.",to:"Share your enterprise foundations reflection with someone who matters to you. Let them witness your growth. Or keep it private. It is yours."},
      {from:"Question 2: Look at your Strategic Audit from Lesson 1. You named three liabilities. How many of them did you actively manage this term? How many managed you? What does this tell you about the gap between intention and action — and what will you do about it in Term 2?",to:"Question 2: Look at your Strategic Audit from Lesson 1. You named three liabilities. How many have you actively managed so far? How many have managed you? What does this tell you about the gap between intention and action — and what will you do about it as Form 2 Term 1 continues?"},
      {from:"The term is ending. Myah sits at Mama Rose's kitchen for the last time this term.",to:"The enterprise foundations cycle is closing. Myah sits at Mama Rose's kitchen to review what she has built so far. Form 2 Term 1 is not over yet — the next lessons turn toward how money moves through households and communities."},
      {from:"I started this term thinking I knew the rules.",to:"I started this enterprise cycle thinking I knew the rules."},
      {from:"I end this term knowing that following the rules is not always enough.",to:"I end this cycle knowing that following the rules is not always enough."},
      {from:"📘 What We Learned This Term",to:"📘 What We Learned in the Enterprise Foundations Cycle"},
      {from:"✍️ Activity 16: My Term 1 Reflection",to:"✍️ Activity 16: My Enterprise Foundations Reflection"},
      {from:"What is the ONE thing you need to do in Term 2 to move up by a single point?",to:"What is the ONE thing you need to do during the rest of Form 2 Term 1 to move up by a single point?"},
      {from:"You will read this at the end of Term 2 — or years from now, when you need to remember who you were.",to:"You will read this at the end of Form 2 Term 1 — or years from now, when you need to remember who you were."},
      {from:"What you hope for Term 2",to:"What you hope for the rest of Form 2 Term 1"},
      {from:"From me, in Grade 9",to:"From me, in Form 2"},
      {from:"Read it at the end of Term 2.",to:"Read it at the end of Form 2 Term 1."},
      {from:"The person who wrote your Grade 8 letter to yourself is not gone.",to:"The person who wrote your Form 1 letter to yourself is not gone."},
      {from:"Will you keep managing them in Term 2, or let them quietly take back control?",to:"Will you keep managing them as Form 2 continues, or let them quietly take back control?"},
      {from:"What will you carry forward from this term into Term 2 — and into your life?",to:"What will you carry forward from this enterprise cycle into the rest of Form 2 Term 1 — and into your life?"},
      {from:"Lesson 16 — Term 1 Final Reflection",to:"Lesson 16 — Enterprise Foundations Reflection"},
      {from:"I reflected on my entire Term 1 journey — enterprise, values, liabilities, and growth.",to:"I reflected on my enterprise foundations journey — enterprise, values, liabilities, and growth."},
      {from:"What I will carry into Term 2:",to:"What I will carry forward:"},
      {from:"You finished Term 1 of Grade 9.",to:"You completed the enterprise foundations cycle of Form 2. Term 1 continues with money flows, households and community economics."},
      {from:"Keep going. Term 2 awaits.",to:"Keep going. Form 2 Term 1 continues."},
    ],
    tableTextReplacements: [
      {from:"You bring everything from Grade 8 forward — and set a strategic intention",to:"You bring everything from Form 1 forward — and set a strategic intention"},
    ],
  },
  "g9-t2-l26-027": {
    title: "THE MUKANDO SYSTEM",
    textReplacements: [
      {from:"In South Africa, stokvels handle billions of rands every year. They are not informal. They are essential.",to:"In Zimbabwe, mukando and other community savings arrangements are part of how many families pool resources, create accountability and prepare for larger expenses. Their exact rules differ from group to group."},
      {from:"Twelve women. Each pays R200 a month. Every month, one woman receives R2,400.",to:"Twelve women. Each contributes an agreed amount on the group's schedule. When it is a member's turn, she receives the pooled payout according to the group's rules."},
      {from:"How much does each person contribute each month? R______________________",to:"How much does each person contribute each cycle? ______________________ [currency]"},
      {from:"How much is the payout each month? R_____________________________________",to:"How much is the payout each cycle? _________________________________ [currency]"},
      {from:"Stokvels",to:"Mukando groups"},
      {from:"stokvels",to:"mukando groups"},
      {from:"Stokvel",to:"Mukando"},
      {from:"stokvel",to:"mukando"},
    ],
    tableTextReplacements: [
      {from:"Stokvel",to:"Mukando"},
      {from:"stokvel",to:"mukando"},
    ],
  },
  "g9-t2-l28-029": {
    textReplacements: [
      {from:"She has observed the taxi rank for three weeks",to:"She has observed the kombi rank for three weeks"},
      {from:"She has not looked at the stokvels in her community",to:"She has not looked at the mukando or savings groups in her community"},
      {from:"The taxi rank is a river of money, but most of it flows out",to:"The kombi rank is a river of money, connecting local trade to a wider economy"},
      {from:"The stokvels are a way to keep some money local",to:"Mukando and savings groups can help households pool resources and plan ahead"},
      {from:"She needs to investigate stokvels",to:"She needs to investigate mukando or savings groups"},
    ],
  },
  "g9-t2-l29-030": {
    textReplacements: [
      {from:"Myah looks at her completed map. It covers the taxi rank, the spaza shop, the stokvels, the elders, the leaks. It tells the story of money in her community.",to:"Myah looks at her completed map. It covers the kombi rank, the tuckshop, mukando groups, elders, local businesses and outward flows. It tells the story of money and value in her community."},
      {from:"Money flows through the taxi rank, the spaza shop, and the stokvels",to:"Money flows through the kombi rank, the tuckshop, markets and mukando groups"},
      {from:"Money spent at the spaza shop (some of it)",to:"Money spent at the tuckshop (some of it)"},
      {from:"Money saved in stokvels (all of it)",to:"Money pooled through mukando / savings groups (according to the group's rules)"},
      {from:"\"My community is a river of money. Most of it flows in and then flows out. Very little stays. The stokvels are a way to keep some money local. The spaza shop is a way to keep some money local. But most of the money leaves. If we could keep more money in the community, we could build schools, roads, clinics. We could survive shocks. We could be stronger.\"",to:"\"My community is a river of money and value. Some flows stay nearby and some connect us to suppliers, employers and services elsewhere. Mukando groups, local businesses and local services can strengthen resilience. The goal is not to trap money inside one place. It is to understand the flows well enough to create more useful local value and withstand shocks.\""},
    ],
  },
  "g9-t2-l31-032": {
    textReplacements: [
      {from:"What I learned: My community is a river of money. Most of it leaves. The stokvels are a way to keep some money local. The spaza shop is a way to keep some money local. But most of the money flows out and never returns.",to:"What I learned: My community is a river of money and value. Mukando groups, tuckshops and local services can strengthen local resilience, while other payments connect the community to the wider economy."},
      {from:"My action plan: I will start a community savings group with my friends. We will each save R10 a week. We will use the money to buy things from local businesses. We will keep the money in the community.",to:"My action plan: I will design a small savings-and-local-value experiment with people I trust. We will agree on a realistic contribution in a clearly labelled currency, set transparent rules, and decide what local need or opportunity the pooled resources could support."},
    ],
  },
  "g9-t2-l32-033": {
    title:"FORM 2 TERM 1 LEARNING JOURNEY MAP",
    textReplacements: [
      {from:"Map your learning journey across Term 2.",to:"Map your learning journey across Form 2 Term 1."},
      {from:"Myah sits at Mama Rose's kitchen, flipping through her notebook one final time for Term 2.",to:"Myah sits at Mama Rose's kitchen, flipping through her notebook as Form 2 Term 1 comes to a close."},
      {from:"Lesson 17: Every rand has a story. Money is stored value.",to:"Lesson 17: Every amount has a story. Money carries value through an economy."},
      {from:"Lesson 27: Every rand that leaves without return is a leak.",to:"Lesson 27: Every outflow should have a reason. Trace what value leaves, stays or returns."},
      {from:"Draw a timeline of your learning journey through Term 2. Start at Lesson 17. End at Lesson 31. Mark the key lessons, the key insights, and the key moments.",to:"Draw a timeline of your learning journey through Form 2 Term 1. Include the enterprise foundations from Lessons 1–16 and the money-and-community work from Lessons 17–31. Mark the key lessons, insights and moments."},
      {from:"The Danger: You will forget some of what you learned. That is normal. But you will not forget the insights. You will not forget the feeling of tracing a rand. You will not forget the map.",to:"The Danger: You will forget some details. That is normal. But the important insights can stay: value is created, money moves, communities contain systems, and observation becomes useful when it leads to better action."},
      {from:"Your Move: What is the one thing from Term 2 that you will remember forever? Why that one?",to:"Your Move: What is the one thing from Form 2 Term 1 that you want to remember? Why that one?"},
      {from:"Question 2: How has your understanding of money changed since the beginning of Term 2? What evidence do you have of that change?",to:"Question 2: How has your understanding of work, value and money changed since the beginning of Form 2 Term 1? What evidence do you have of that change?"},
      {from:"☐ I have mapped my learning journey across Term 2.",to:"☐ I have mapped my learning journey across Form 2 Term 1."},
    ],
    tableTextReplacements:[
      {from:"Lesson 32 — Learning Journey Map",to:"Lesson 32 — Form 2 Term 1 Learning Journey Map"},
      {from:"I mapped my learning journey across Term 2.",to:"I mapped my learning journey across Form 2 Term 1."},
    ],
  },
  "g9-t2-l33-034": {
    title:"FORM 2 TERM 1 REFLECTION — WORK, VALUE & MONEY",
    textReplacements: [
      {from:"Compile your complete Term 2 Portfolio.",to:"Compile your complete Form 2 Term 1 portfolio."},
      {from:"Identify what you will carry forward into Term 3.",to:"Identify what you will carry forward into Form 2 Term 2."},
      {from:"📘 Myah's Term 2 Reflection",to:"📘 Myah's Form 2 Term 1 Reflection"},
      {from:"I started Term 2 thinking money was just something you earn and spend. I end Term 2 knowing it is a story. Every rand has a journey. Every rand has a source. Every rand has a destination.",to:"I started Form 2 Term 1 thinking enterprise was mostly about earning and money was mostly about spending. I end the term seeing a system: people create value, money carries that value through households and communities, and every amount has a source, a purpose and a destination."},
      {from:"I am not the same person who started Applied Commerce in Term 1. I am not even the same person who started Applied Commerce at the start of this term. I know more. I see more. I can do more.",to:"I am not the same person who started Form 2 Term 1. I know more. I see more. I can do more."},
      {from:"✍️ Activity 33: My Term 2 Reflection",to:"✍️ Activity 33: My Form 2 Term 1 Reflection"},
      {from:"8. The 1-10 Scale: At the start of the term, you were a \"1\" on the community money awareness scale. Where are you now — honestly? What is the exact number? What is the ONE thing you need to do in Term 3 to move up by a single point?",to:"8. The 1-10 Scale: At the start of Form 2 Term 1, where were you on the work-value-money awareness scale? Where are you now — honestly? What is the exact number? What is the ONE thing you need to do in Form 2 Term 2 to move up by a single point?"},
      {from:"The Truth: You are not the same person who started Applied Commerce at the start of Term 2. You know more about money. You know more about your community. You know more about yourself. That is growth.",to:"The Truth: You are not the same learner who started Form 2 Term 1. You know more about work, value, money and your community. You also have evidence of what you can observe and do. That is growth."},
      {from:"The Danger: The person who started Term 2 is still inside you. The old beliefs, the old habits, the old ways of ignoring money flows — they are still there. They just got quieter.",to:"The Danger: old beliefs and old ways of ignoring money flows do not disappear because you completed a project. They can return when you stop paying attention."},
      {from:"Your Move: Growth is not a one-time achievement. It is a daily choice. What is one thing you will do differently in Term 3 because of what you learned this term?",to:"Your Move: Growth is not a one-time achievement. What is one thing you will do differently in Form 2 Term 2 because of what you learned this term?"},
      {from:"Question 1: What is the biggest difference between who you were at the start of Term 2 and who you are now?",to:"Question 1: What is the biggest difference between who you were at the start of Form 2 Term 1 and who you are now?"},
      {from:"Question 2: What is one thing you will carry forward from Term 2 into Term 3 — and into your life?",to:"Question 2: What is one thing you will carry forward from Form 2 Term 1 into Term 2 — and into your life?"},
      {from:"Share your Term 2 reflection with someone who matters to you. Let them witness your growth. Or keep it private. It is yours.",to:"Share your Form 2 Term 1 reflection with someone who matters to you. Let them witness your growth. Or keep it private. It is yours."},
      {from:"☐ I have compiled my complete Term 2 Portfolio.",to:"☐ I have compiled my complete Form 2 Term 1 portfolio."},
      {from:"☐ I have identified what I will carry forward into Term 3.",to:"☐ I have identified what I will carry forward into Form 2 Term 2."},
    ],
    tableReplacements:[
      {
        cellIncludes:"Every rand has a story",
        rows:[
          ["Lessons","What We Learned"],
          ["1–16","Values, enterprise, skills, customers, pricing and the courage to act"],
          ["17–22","Money origins, households, supply chains, value chains, employers and employees"],
          ["23–31","Community Money Map — observation, outflows, local value and an action plan"],
          ["32–33","Learning journey, evidence and Form 2 Term 1 reflection"],
        ],
      },
    ],
    tableTextReplacements:[
      {from:"Lesson 33 — Term 2 Final Reflection",to:"Lesson 33 — Form 2 Term 1 Final Reflection"},
      {from:"I reflected on my entire Term 2 journey — money flows, community, and growth.",to:"I reflected on my entire Form 2 Term 1 journey — enterprise, money flows, community and growth."},
      {from:"What I will carry into Term 3:",to:"What I will carry into Form 2 Term 2:"},
    ],
  },
  "g9-t2-l34-035": {
    title: "FORM 2 TERM 1 FAREWELL — LETTER TO MY FUTURE SELF",
    textReplacements: [
      {from:"Myah writes a final letter to her future self. She will read it at the end of Term 3 — or years from now, when she needs to remember who she was.",to:"Myah writes a final letter to her future self at the end of Form 2 Term 1. She will read it at the end of Form 2 Term 2 — or years from now, when she needs to remember who she was."},
      {from:"I am 15 years old. I live in Tembisa. I just finished Term 2 of Grade 9. I traced money through my community. I saw the leaks. I saw the strengths. I saw what could be.",to:"I am in Form 2. I just finished Term 1. I traced money through my community. I saw the outflows. I saw the strengths. I saw what could be."},
      {from:"I learned that every rand has a story. I learned that my community is a river of money — and most of it flows out. I learned that observation is not enough. Action is the next step.",to:"I learned that every amount of money has a story. I learned that my community is a river of money — and that understanding where value stays or leaves changes what I notice. I learned that observation is not enough. Action is the next step."},
      {from:"I hope Term 3 brings more confidence.",to:"I hope Term 2 brings more confidence."},
      {from:"✍️ Activity 34: Letter to My Future Self — Term 2",to:"✍️ Activity 34: Letter to My Future Self — Form 2 Term 1"},
      {from:"You will read this at the end of Term 3 — or years from now, when you need to remember who you were.",to:"You will read this at the end of Form 2 Term 2 — or years from now, when you need to remember who you were."},
      {from:"What you learned this term that changed how you see money and community",to:"What you learned in Form 2 Term 1 that changed how you see money and community"},
      {from:"What you hope for Term 3",to:"What you hope for Form 2 Term 2"},
      {from:"From me, in Grade 9",to:"From me, in Form 2"},
      {from:"Read it at the end of Term 3.",to:"Read it at the end of Form 2 Term 2."},
      {from:"What is the most important thing you want your future self to remember about who you were in Term 2?",to:"What is the most important thing you want your future self to remember about who you were in Form 2 Term 1?"},
      {from:"Save your final Log entry of the term.",to:"Save your final Log entry of Form 2 Term 1."},
      {from:"You finished Term 2 of Grade 9.",to:"You finished Form 2 Term 1."},
      {from:"You traced money through your household and your community. You learned that every rand has a story. You mapped the leaks. You identified the strengths. You created a Community Money Map that tells the story of how money moves through your world.",to:"You traced money through your household and your community. You learned that every amount has a story. You mapped outflows and strengths. You created a Community Money Map that tells the story of how value moves through your world."},
      {from:"Keep going. Term 3 awaits.",to:"Keep going. Form 2 Term 2 awaits — habits, agency and execution."},
    ],
  },
  "g9-t3-l35-024": {
    textReplacements: [
      {from:"Recall the habit loop (cue, routine, reward) from Grade 8 and apply it with deeper understanding.",to:"Recall the habit loop (cue, routine, reward) from Form 1 and apply it with deeper understanding."},
      {from:"She stares at the page. She has been tracking her money for months — every rand, every expense. She traced supply chains. She mapped her community's money. She presented her findings at the community hall. But she has never really looked at her own morning. She has never asked herself why she keeps doing something that makes her feel worse.",to:"She stares at the page. She has been tracking money and expenses for months. She traced supply chains. She mapped her community's money. She presented her findings at the community hall. But she has never really looked at her own morning. She has never asked herself why she keeps doing something that makes her feel worse."},
      {from:"Key idea: You learned the habit loop in Grade 8. Cue. Routine. Reward. It was useful then. But you are not in Grade 8 anymore. The loop is not just a mechanism. It is a voting machine. Every time you perform a habit, you cast a vote for an identity. Save R5, vote for \"I am a saver.\" Scroll for twenty minutes, vote for \"I am someone who starts the day distracted.\" The votes accumulate. Over time, the election is called — and the winner is the identity you have been voting for, whether you meant to or not.",to:"Key idea: You learned the habit loop in Form 1. Cue. Routine. Reward. It was useful then. In Form 2, go deeper: each repetition is also evidence for an identity. Save a small amount consistently, vote for \"I am someone who prepares.\" Scroll for twenty minutes before getting up, vote for \"I am someone who starts the day distracted.\" Repetition accumulates. Over time, the pattern becomes part of how you see yourself."},
    ],
  },
  "g9-t3-l36-025": {
    textReplacements: [
      {from:"\"After a month, it was automatic. I did not think about it. So I added another tiny habit: save R5 every day. Just R5. In a jar on my desk.\"",to:"\"After a month, it was automatic. I did not think about it. So I added another tiny habit: save US$0.50 every day in this example. A small amount, in a jar on my desk.\""},
      {from:"\"A year later, I could do fifty push-ups. I had R1,800 saved. I was studying better — not because I tried to study better, but because the discipline from those tiny habits spilled over. I had proved to myself that I was someone who keeps promises. After that, bigger promises felt possible.\"",to:"\"A year later, I could do fifty push-ups. If I had managed US$0.50 every day for 365 days, that would be about US$182.50 before any withdrawals. I was studying better too — not because one habit magically caused everything else, but because I had evidence that I could keep small promises. Bigger promises started to feel possible.\""},
      {from:"Choose one tiny habit to start. Make it so small it feels almost too easy. If it feels hard, make it smaller. Ten push-ups too many? Do one. Save R5 too much? Save R1. The size does not matter. The consistency does.",to:"Choose one tiny habit to start. Make it so small it feels almost too easy. If it feels hard, make it smaller. Ten push-ups too many? Do one. A daily saving target too high? Reduce it or choose a non-money habit. The size is less important than a repeatable action."},
      {from:"Key idea: Themba's R5 a day was not about the money. It was about the identity. Every time he saved R5, he cast a vote for \"I am a saver.\" The R5 itself was almost meaningless. The vote was everything. At first, the votes feel insignificant. R5? That is nothing. Ten push-ups? That will not change my body. But after thirty votes, something shifts. After a hundred votes, the identity starts to lock. After 365 votes, you no longer have to think about it. You just are a saver. You just are someone who exercises. The compound effect works on money. But it works more powerfully on identity. Small actions, repeated, do not just change what you have. They change who you believe you are.",to:"Key idea: Themba's daily saving habit was not only about the amount. It was evidence. Each repetition supported the identity \"I am someone who prepares.\" The same is true of exercise, study or organisation. One repetition feels small. Thirty repetitions are harder to dismiss. Hundreds of repetitions can change what feels normal. Small actions, repeated, do not only change outcomes; they can change what you believe you are capable of."},
      {from:"Here’s the tension: the compound effect is neutral. It amplifies whatever you feed it. Bad habits compound too. One missed savings day makes the next miss easier. One skipped workout makes the next skip feel normal. One lie makes the next lie less uncomfortable. You are always compounding something. The question is what. And here is the uncomfortable edge: the ability to build tiny habits assumes a baseline of stability. Themba could do push-ups because he had a floor and a body that worked. He could save R5 because he had R5 to save. What if he did not? The tiny habits philosophy is powerful — but it is not equally accessible. Acknowledging that does not excuse inaction. But it explains why some people struggle more than others to build the foundation.",to:"Here’s the tension: repetition can strengthen useful or harmful patterns. One missed day does not destroy a habit, but repeated avoidance can become easier to repeat. The other edge is resources. Themba could exercise because his body and environment allowed it. He could save because he had something available to save. Not everyone has the same starting conditions. Good habit design must respect reality rather than pretending every learner has equal time, money, privacy, safety or support."},
      {from:"Your Next Step: If your conditions make consistency hard — if you cannot save R5 because you do not have R5, if you cannot exercise because you are working or caring for siblings — what is the SMALLEST possible version of a positive habit you COULD build? One deep breath before you start your day? One kind word to someone? One sentence of gratitude? The size does not matter. The vote does.",to:"Your Next Step: If your conditions make consistency hard — if saving money is not realistic, or exercise time is limited because you work or care for siblings — what is the smallest useful habit you could build? One minute of planning? One kind word? One line in your tracker? Choose something that fits your actual life."},
    ],
    tableTextReplacements: [
      {from:"Save R5 every day",to:"Save US$0.50 a day in this illustrative example"},
    ],
  },
  "g9-t3-l37-026": {
    textReplacements: [
      {from:"She talks to Atlehang at the taxi rank.",to:"She talks to Atlehang at the kombi rank."},
      {from:"Atlehang thinks. \"Remember SMART from Grade 8?\"",to:"Atlehang thinks. \"Remember SMART from Form 1?\""},
    ],
  },
  "g9-t3-l40-029": {
    textReplacements: [
      {from:"Then Mrs. October, his biggest customer, told him her daughter was moving back from Johannesburg. Her daughter would do the shopping now. She would not need deliveries anymore.",to:"Then Mrs. October, his biggest customer, told him her daughter was moving back from Bulawayo. Her daughter would do the shopping now. She would not need deliveries anymore."},
    ],
  },
  "g9-t3-l41-030": {
    textReplacements: [
      {from:"He made another for a neighbour. Then another. Then a woman from church. Then the clinic down the road ordered ten. Now, nearly two years later, he has made over sixty clocks. He has saved over R2,000. He has taught three younger kids how to make them. He has a small production system — materials sourced, prices set, quality controlled.",to:"He made another for a neighbour. Then another. Then a woman from church. Then the clinic down the road ordered ten. Now, nearly two years later, he has made over sixty clocks. In this story he has saved more than US$200 from the work. He has taught three younger learners how to make them. He has a small production system — materials sourced, prices set, quality controlled."},
      {from:"Myah finds him at Emmanuel's spaza shop, buying more glue. \"How did you keep going when the first clocks were ugly and people said no?\"",to:"Myah finds him at Emmanuel's tuckshop, buying more glue. \"How did you keep going when the first clocks were ugly and people said no?\""},
    ],
  },
  "g9-t3-l42-031": {
    title:"LEARNING FROM FAILURE — SMALL, CALCULATED TESTS",
    textReplacements: [
      {from:"Here’s the tension: the ability to learn from failure is, in part, a luxury. Sipho could learn from his melted sweets and try again because losing R50 did not destroy him. He had a home. He had food. He had support. He could afford to fail. What if R50 was all he had? What if failing meant he could not eat? The ability to fail safely and extract the lesson is not equally distributed. Some failures are fatal — you do not get a second chance. Some failures cost so much there is nothing left to rebuild with. This does not mean you should not take risks. It means you should take CALCULATED risks — small enough that failure teaches without destroying. And it means you should never judge someone else's failure without understanding what it cost them.",to:"Here’s the tension: the ability to learn safely from failure depends partly on resources and support. Sipho could lose US$5 in a small test and try again because the loss did not threaten food, transport or safety. Not everyone has that margin. Some failures are too costly to treat casually. This is why responsible experimentation uses calculated risks: small enough that a bad result teaches without damaging essential needs, safety or trust. Never judge someone else's failure without understanding what it cost them."},
      {from:"📘 Sipho's R50 Tuition",to:"📘 Sipho's US$5 Lesson"},
      {from:"Sipho — the same Sipho who once had no goals, who spent his R20 on sweets in Grade 8 and regretted it, who fixed his sister's toy car, who now repairs small appliances for neighbours — sits at Mama Rose's kitchen, telling a story Myah has not heard before.",to:"Sipho — the same Sipho who once had no clear goals, who spent money impulsively in Form 1 and regretted it, who fixed his sister's toy car, and who now repairs simple items for neighbours — sits at Mama Rose's kitchen, telling a story Myah has not heard before."},
      {from:"He tells them: a year ago, he tried to sell sweets at school. He bought R50 worth of chocolates — the kind that melt. He did not think about the heat. He did not think about where to store them. By lunchtime, they were a sticky mess. He lost everything.",to:"He tells them: a year ago, he tried to sell sweets at school. In this example he bought US$5 worth of chocolates — the kind that melt. He did not think about the heat or where to store them. By lunchtime, they were a sticky mess. He lost the test money."},
      {from:"\"No. I asked people what they actually wanted. Chips, they said. Cold drink. Things that do not melt. I tried again — smaller, smarter. Chips and cold drinks from Emmanuel's shop. Sold them at school. Made back my R50 and then some.\"",to:"\"No. I asked people what they actually wanted. Chips, they said. Cold drinks. Things that do not melt. I tried again — smaller, smarter. I bought a small amount from Emmanuel's shop, tested demand, and eventually made back the US$5 I had lost.\""},
      {from:"\"What did the R50 teach you?\"",to:"\"What did the US$5 test teach you?\""},
      {from:"Key idea: Sipho paid R50 for a lesson. That is cheap tuition. Some people pay thousands for business courses and learn less. Some people pay with years of their lives on the wrong path. Some never learn at all because they are too afraid of failure to try anything worth learning from. Failure is not the opposite of success. It is a component of success. The people who succeed are not the ones who avoid failure. They are the ones who pay attention when it happens. They extract the lesson. They do not waste the tuition.",to:"Key idea: Sipho lost US$5 on a small test and extracted a useful lesson. The point is not that failure is automatically good. It is that a controlled failure can produce information when you review what happened. Successful experimentation means keeping the downside small enough to survive, measuring the result, and changing the next attempt."},
      {from:"Here’s the tension: failure as tuition only works if you can afford the tuition. Sipho lost R50 and tried again. What if R50 was all he had? What if failing meant he could not eat? The ability to fail safely and extract the lesson is not equally distributed. Some failures are fatal — you do not get a second chance. Some failures cost so much there is nothing left to rebuild with. This does not mean you should not take risks. It means you should take CALCULATED risks — small enough that failure teaches without destroying. And it means you should never judge someone else's failure without understanding what it cost them.",to:"Here’s the tension: failure only becomes useful tuition when the loss is survivable. Sipho lost US$5 and tried again. If that money had been needed for food or transport, the same experiment would have been irresponsible. The ability to fail safely is not equally distributed. Take calculated risks: small enough to learn from without damaging essential needs, safety or trust. Never judge someone else's failure without understanding what it cost them."},
    ],
    tableTextReplacements: [
      {from:"lost R50",to:"lost US$5"},
    ],
  },
  "g9-t3-l46-035": {
    textReplacements: [
      {from:"Lethabo has R200 saved. He has been saving for months.",to:"Lethabo has US$20 saved in this illustrative example. He has been saving for months."},
      {from:"Now his friends want to go to an amusement park. Entry is R150. Food is extra.",to:"Now his friends want to go to an amusement park. Entry is US$15 in this example. Food and transport are extra."},
      {from:"1. Go — spend R150, have fun, but savings gone.",to:"1. Go — spend US$15 plus extras, have fun, but use most of the savings."},
    ],
  },
  "g9-t3-l47-036": {
    textReplacements: [
      {from:"She knows how this goes. Last time, she went with no money and ended up borrowing from Thabo to buy a cool drink. Now she owes R15.",to:"She knows how this goes. Last time, she went with no money and ended up borrowing from Thabo to buy a cool drink. In this illustrative example she still owes him US$1.50."},
    ],
  },
  "g9-t3-l48-037": {
    title:"DIGITAL HABITS, SUBSCRIPTIONS & MONEY",
    textReplacements: [
      {from:"📘 The R80 That Disappeared",to:"📘 The US$8 That Disappeared"},
      {from:"Thabo is at Emmanuel's spaza shop, checking his bank balance on his phone. He has been using a banking app since he opened his savings account. It is convenient. But convenient is not always safe.",to:"Thabo is at Emmanuel's tuckshop, checking his account balance on his phone. He has been using a financial app to track his savings. It is convenient. But convenient is not always deliberate."},
      {from:"He stares at the screen. He had R340 last week. Now he has R260. R80 gone. He does not remember spending it.",to:"He stares at the screen. In this illustrative example he had US$34 last week. Now he has US$26. US$8 gone. He does not remember choosing to spend it."},
      {from:"R15 — Game Coins",to:"US$1.50 — Game coins"},
      {from:"R25 — App Subscription (monthly, auto-renewing)",to:"US$2.50 — App subscription (monthly, auto-renewing)"},
      {from:"R20 — Game Coins again",to:"US$2.00 — Game coins again"},
      {from:"R20 — Another subscription he forgot he signed up for",to:"US$2.00 — Another subscription he forgot he signed up for"},
      {from:"R80. Gone. He did not even feel it leaving.",to:"US$8. Gone. He did not feel each small payment leaving."},
      {from:"\"I just lost R80. In-app purchases. Subscriptions I forgot about. I did not even notice until I checked my balance. It just... disappeared.\"",to:"\"I spent US$8 without paying attention. In-app purchases. Subscriptions I forgot about. I did not notice the total until I checked my balance.\""},
      {from:"☐ Cancel unused subscriptions ☐ Disable in-app purchases ☐ Turn off one-click buying ☐ Set a 24-hour rule before any digital purchase over R50 ☐ Check transaction history weekly ☐ Other: _________________________________",to:"☐ Cancel unused subscriptions ☐ Disable in-app purchases ☐ Turn off one-click buying ☐ Set a 24-hour rule before any non-essential digital purchase over US$5 or another threshold that fits your currency ☐ Check transaction history weekly ☐ Other: _________________________________"},
      {from:"Here’s the tension: Thabo discovered his R80 loss because he checked his transaction history. He has a bank app. He has enough literacy to understand what he is looking at. What if he did not? Digital literacy is not equally distributed. The people most vulnerable to digital spending traps are often the people least equipped to detect them. And the deeper tension: the digital economy runs on attention extraction. Even if you protect your money, your attention is still being harvested, packaged, and sold. You are not just a consumer. You are the product. Every free app, every social media platform, every \"free\" service — you pay with your attention, your data, your preferences. The price is just hidden.",to:"Here’s the tension: Thabo noticed the US$8 only because he reviewed his transaction history. Digital literacy is uneven, and recurring payments can be difficult to notice. There is also a second cost: attention and data. Many digital services are designed to keep you engaged because your attention, behaviour and preferences have commercial value. Protecting yourself therefore means checking both what you spend and what you give away in time, attention and information."},
    ],
    tableTextReplacements: [
      {from:"\"Just R10\" — but it adds up",to:"\"Just US$1\" — but repeated purchases add up"},
    ],
  },
  "g9-t3-l49-038": {
    title:"ONLINE SAFETY, PHISHING & SCAMS",
    textReplacements: [
      {from:"Atlehang's phone buzzes while she waits at the taxi rank. A WhatsApp message from an unknown number:",to:"Atlehang's phone buzzes while she waits at the kombi rank. A WhatsApp message from an unknown number:"},
      {from:"\"Congratulations! You have won a R5,000 shopping voucher! Click here to claim your prize: [link]\"",to:"\"Congratulations! You have won a US$500 shopping voucher! Click here to claim your prize: [link]\""},
      {from:"Her finger hovers over the link. R5,000. That is more than her mother makes in a week at the kitchen. That could buy ingredients for a month.",to:"Her finger hovers over the link. US$500. It is a large amount for her household. It could cover many real needs."},
      {from:"She stops. She remembers something Ms. Daniels said during the Community Money Map project: \"If something sounds too good to be true, it almost always is. Nobody gives away R5,000 for free. They want something from you. Your information. Your money. Your identity.\"",to:"She stops. She remembers something Ms. Daniels said during the Community Money Map project: \"If something sounds too good to be true, treat it as a warning. A message promising US$500 for a competition you never entered may be trying to get your information, money or identity.\""},
      {from:"Later, Atlehang hears that a neighbour's son clicked a similar link. Entered his mother's banking details to \"claim the prize.\" R800 disappeared before she could stop it. It took weeks to get the bank to reverse the charges. The money was never fully recovered.",to:"Later, Atlehang hears that a neighbour's son clicked a similar link and entered financial details to \"claim the prize.\" In this illustrative scenario, US$80 was taken before the account could be secured. Recovery was difficult and incomplete."},
    ],
    tableTextReplacements: [
      {from:"Online ad for new phone for R200 (usually R2,000)",to:"Online ad for a new phone for US$20 when the normal price is around US$200"},
      {from:"Message saying you won a competition you never entered — just pay R50 to claim your prize",to:"Message saying you won a competition you never entered — just pay US$5 to claim your prize"},
    ],
  },
  "g9-t3-l51-040": {
    textReplacements: [
      {from:"Myah is ten days into her habit challenge. She meets her Habit Stokvel at Mama Rose's kitchen — Thabo, Atlehang, and Lethabo.",to:"Myah is ten days into her habit challenge. She meets her Habit Accountability Circle at Mama Rose's kitchen — Thabo, Atlehang and Lethabo."},
      {from:"Part D: Habit Stokvel Check-In",to:"Part D: Habit Accountability Circle Check-In"},
      {from:"One insight from my Stokvel: _________________________________",to:"One insight from my Accountability Circle: _________________________________"},
    ],
  },
  "g9-t3-l52-041": {
    textReplacements: [
      {from:"Lethabo is trying to build a habit of saving R10 every day. For two weeks, it worked — every day, R10 into the jar on his desk.",to:"Lethabo is trying to build a habit of saving US$1 every day in this illustrative example. For two weeks, it worked — every day, US$1 into the jar on his desk."},
      {from:"He told Myah at Emmanuel's spaza shop. \"I broke the chain. Fourteen days of ticks, and now nothing. I might as well give up.\"",to:"He told Myah at Emmanuel's tuckshop. \"I broke the chain. Fourteen days of ticks, and now nothing. I might as well give up.\""},
      {from:"He put R10 in the jar that afternoon. The chain continued — not unbroken, but continued. And that was the point.",to:"He restarted with US$1 that afternoon. The chain continued — not unbroken, but continued. And that was the point."},
      {from:"Here’s the tension: designing a resilient system requires resources. An emergency fund requires extra money. A backup plan requires options. Not everyone has those resources. If you cannot build the ideal system, build the best system you CAN with what you have. If you cannot save R10 a day, save R2. If you cannot exercise for 30 minutes, do 5. If you cannot study for an hour, do 10 minutes. The system does not need to be perfect. It needs to survive contact with reality. And the most resilient system is the one that can fail and restart without shame. Shame is what keeps people from restarting. Remove the shame. Keep the restart.",to:"Here’s the tension: resilient systems often require resources, and not everyone has the same options. If you cannot build the ideal system, build the best one that fits your reality. If US$1 a day is not realistic, choose a smaller amount or a non-money habit. If thirty minutes of exercise is not possible, try five. If an hour of study is impossible, try ten minutes. The system does not need to be perfect. It needs to survive contact with real life and make restarting easier after a miss."},
    ],
  },
  "g9-t3-l53-042": {
    textReplacements: [
      {from:"Your Next Step: What is one way you will use the review habit in Term 4 — not as a project, but as a way of being? A weekly check-in with yourself? A monthly review of a habit? A commitment to track something new every term?",to:"Your Next Step: What is one way you will use the review habit in Form 2 Term 3 — not as a project, but as a way of being? A weekly check-in? A monthly review? A commitment to track one important behaviour while you work on your community project?"},
      {from:"Question 2: The review habit — noticing and adjusting — is more valuable than any single habit. What is your specific plan to keep it alive in Term 4? Not a wish. A plan.",to:"Question 2: The review habit — noticing and adjusting — can outlast any single project. What is your specific plan to keep it alive in Form 2 Term 3? Not a wish. A plan."},
    ],
  },
  "g9-t3-l50-039": {
    title: "HABIT TRANSFORMATION PROJECT — LAUNCH",
    tableReplacements: [
      {
        cellIncludes:"40% of Term 3 grade",
        rows:[
          ["Element","Description"],
          ["Duration","21 days of tracking"],
          ["What you will create","Tracker + daily notes + midpoint review + reflection + presentation"],
          ["Assessment","Form 2 Term 2 portfolio evidence"],
        ],
      },
    ],
    textReplacements: [
      {from:"Set up your tracking system and commit to your Habit Stokvel.",to:"Set up your tracking system and commit to your Habit Accountability Circle."},
      {from:"Track every rand I spend",to:"Track every amount I spend and label the currency"},
      {from:"My Habit Stokvel members are: _________________",to:"My Habit Accountability Circle members are: _________________"},
      {from:"This is the third-term capstone.",to:"This is the Form 2 Term 2 applied habit project."},
      {from:"Habit Stokvel",to:"Habit Accountability Circle"},
    ],
  },
  "g9-t3-l54-043": {
    title: "TERM 2 REFLECTION — HABITS, EXECUTION & NEXT MOVE",
    tableReplacements: [
      {
        cellIncludes:"Path Forward",
        rows:[
          ["Term","Definition"],
          ["Reflection","Thinking back on what you have learned"],
          ["Growth","Getting better over time"],
          ["Readiness","Being prepared to apply what you have learned in the next challenge"],
        ],
      },
    ],
    rangeReplacements: [
      {
        startIncludes:"📘 The Fork in the Road: Choosing Your Path Forward",
        endIncludes:"If you cannot share with anyone: Write your Path Forward declaration on a piece of paper. Sign it. Date it. Keep it. This is your contract with yourself.",
        replacement:[
          {kind:"text",type:"section",text:"📘 Looking Ahead to Term 3 — Community Enterprise"},
          {kind:"text",type:"paragraph",text:"Form 2 Term 3 moves outward again. You will use the discipline, observation, planning and problem-solving skills you have built to work on a real community need. The next challenge is not to choose your whole future. It is to choose how you will show up for the next project."},
          {kind:"text",type:"activity",text:"✍️ Activity 54B: My Term 3 Readiness Plan\n\n1. One habit or system I will carry into Term 3: _________________________________\n2. One community problem I am curious about: _________________________________\n3. One person or group I may need to listen to before acting: _________________________________\n4. One skill I want to practise during the community project: _________________________________\n5. One way I will know I am contributing value rather than assuming what people need: _________________________________"},
          {kind:"text",type:"reflection",text:"You do not need to know the final answer before Term 3 begins. You need evidence that you can observe, ask, plan, act, review and adjust. That is what the last two terms have been building."},
        ],
      },
    ],
    textReplacements: [
      {from:"Understand the subject choice implications for Grade 10 — and make a first Path Forward declaration.",to:"Identify how your habits, self-management and execution skills will support your community-enterprise work in Form 2 Term 3."},
      {from:"Compile your complete Term 3 Portfolio.",to:"Compile your complete Form 2 Term 2 portfolio."},
      {from:"Lesson 35: Habits and identity. The phone loop. The vote. Lesson 36: Tiny habits. Themba's story. The R5 that was not about the R5. Lesson 37: SMART+ goals. Emotional connection. Accountability. Lesson 38: Time management. Sipho's four hours on his phone. Lesson 39: Procrastination. The five-minute rule. Action before motivation. Lesson 40: Resilience. The bike that broke again. Internal strength plus external resources. Lesson 41: Grit. Lethabo's sixty clocks. Deciding, over and over, not to quit. Lesson 42: Failure as tuition. Sipho's R50 education. Extract the lesson. Lesson 43-44: Growth mindset. The word \"yet.\" The operating system upgrade. Lesson 45: Self-discipline. The phone in the kitchen. Environment over willpower. Lesson 46: Decision making. Lethabo's fork. Always find the third option. Lesson 47: Peer pressure. Saying no. Paying the cost. Lesson 48: Digital habits. Thabo's R80. Painless spending. Lesson 49: Online safety. Atlehang's near-click. The pause that saves. Lesson 50-53: Her 21-day tracker. The ticks. The crosses. The mirror.",to:"Lesson 35: Habits and identity. The phone loop. The vote. Lesson 36: Tiny habits. Themba's small daily saving example. Lesson 37: SMART+ goals. Emotional connection. Accountability. Lesson 38: Time management. Sipho's four hours on his phone. Lesson 39: Procrastination. The five-minute rule. Action before motivation. Lesson 40: Resilience. The bike that broke again. Internal strength plus external resources. Lesson 41: Grit. Lethabo's sixty clocks. Deciding, over and over, not to quit. Lesson 42: Failure as a small calculated test. Extract the lesson. Lesson 43-44: Growth mindset. The word \"yet.\" The operating system upgrade. Lesson 45: Self-discipline. Environment over willpower. Lesson 46: Decision making. Lethabo's fork. Look for additional options. Lesson 47: Peer pressure. Saying no. Paying the cost. Lesson 48: Digital habits. Thabo's US$8 of unnoticed spending. Lesson 49: Online safety. Atlehang's near-click. The pause that protects. Lesson 50-53: The 21-day tracker. The ticks. The crosses. The mirror."},
      {from:"You finished Term 3 of Grade 9.",to:"You finished Form 2 Term 2."},
      {from:"Keep going. Term 4 awaits — the final term. The final project. The fork in the road. Everything you have built is about to come together.",to:"Keep going. Form 2 Term 3 awaits — the community-enterprise project, final portfolio and the chance to apply everything you have built."},
      {from:"Understand the subject choice implications for Grade 10 — and make a preliminary Path Forward declaration.",to:"Identify how your habits, self-management and execution skills will support your community-enterprise work in Term 3."},
      {from:"📘 What We Learned This Term",to:"📘 What We Learned in Form 2 Term 2"},
      {from:"35-36 Habits, identity, tiny habits",to:"35-36 Habits, identity and tiny habits"},
      {from:"37-38 SMART+ goals, time management",to:"37-38 SMART+ goals and time management"},
      {from:"39-40 Procrastination, resilience",to:"39-40 Procrastination and resilience"},
      {from:"41-42 Grit, learning from failure",to:"41-42 Grit and learning from failure"},
      {from:"43-44 Growth mindset",to:"43-44 Growth mindset"},
      {from:"45-46 Self-discipline, decision making",to:"45-46 Self-discipline and decision making"},
      {from:"47-49 Peer pressure, digital habits, online safety",to:"47-49 Peer pressure, digital habits and online safety"},
      {from:"50-53 Habit Transformation Project",to:"50-53 Habit Transformation Project"},
      {from:"54 Term reflection and Path Forward",to:"54 Term reflection and Term 3 readiness"},
      {from:"📘 Myah's Final Term 3 Entry",to:"📘 Myah's Form 2 Term 2 Review"},
      {from:"I am ready for Term 4.",to:"I am ready for Term 3."},
      {from:"✍️ Activity 54: My Term 3 Reflection — With Scale",to:"✍️ Activity 54: My Form 2 Term 2 Reflection — With Scale"},
      {from:"The ONE thing I need to do in Term 4 to move up by a single point:",to:"The ONE thing I need to do in Term 3 to move up by a single point:"},
      {from:"Lesson 54 — Term 3 Final Reflection",to:"Lesson 54 — Form 2 Term 2 Final Reflection"},
      {from:"I reflected on my entire Term 3 journey and made a preliminary Path Forward declaration.",to:"I reflected on my Form 2 Term 2 journey and prepared for Term 3 community-enterprise work."},
      {from:"I have compiled my complete Term 3 Portfolio.",to:"I have compiled my complete Form 2 Term 2 portfolio."},
      {from:"I have made a preliminary Path Forward declaration.",to:"I have made a Term 3 readiness plan."},
    ],
  },
  "g9-t4-l55-045": {
    title: "LOOKING BACK — WHAT WE HAVE LEARNED SO FAR",
    tableReplacements: [
      {
        cellIncludes:"Work and Value",
        rows:[
          ["Term","Theme","What We Learned"],
          ["Term 1","Enterprise, Money & Community","Values, enterprise, skills, customers, pricing, household economics and the completed Community Money Map"],
          ["Term 2","Habits, Agency & Execution","Habits, goals, time, resilience, decision making, digital habits and the completed Habit Transformation project"],
          ["Term 3","Community Enterprise & Portfolio","Ahead: apply what you know to a real community need and build evidence through action"],
        ],
      },
    ],
    textReplacements: [
      {from:"Key idea: You did not learn these things in isolation. Each term built on the last. Term 1 gave you the lens of values and enterprise — and the hard lesson that the system does not always reward rule-followers. Term 2 gave you the lens of money flows and community — learning to trace where money comes from and where it goes. Term 3 gave you the lens of habits and mindset — learning that you can change, one small action at a time. Now, in Term 4, you will combine all three lenses. You will use your values to choose a project that matters. You will use your understanding of money flows to design something sustainable. You will use your habit skills to execute consistently. This is the compound effect of learning.",to:"Key idea: You did not learn these things in isolation. Form 2 Term 1 built the lenses of enterprise, money and community. Term 2 built the lenses of habits, resilience and execution. Now, in Term 3, you will combine them in a community-enterprise project: choose a real need, design responsibly, manage resources and execute consistently. This is the compound effect of learning."},
      {from:"Here’s the tension: knowing is not the same as doing. You could know everything in these notebooks and still do nothing with it. Knowledge without action is entertainment. Agency requires movement. Term 4 is not about learning new concepts. It is about proving — to yourself — that the concepts have become part of you. Can you take what you know and build something real? Can you face obstacles and adapt? Can you complete something that matters? The notebooks will not answer these questions. Only your actions will.",to:"Here’s the tension: knowing is not the same as doing. You could know everything in these notebooks and still avoid action. Form 2 Term 3 is where you test whether the concepts can survive contact with reality. Can you use what you know to build something useful? Can you face obstacles, adapt and complete what you started? Your actions will create the evidence."},
      {from:"Your Next Step: What is ONE thing you learned this year that you have NOT yet acted on? What would it take to act on it in Term 4? Name the action. Name the obstacle. Name your plan for when the obstacle appears.",to:"Your Next Step: What is ONE thing you learned this year that you have not yet acted on? What would it take to act on it in Form 2 Term 3? Name the action, the likely obstacle and your plan for when the obstacle appears."},
      {from:"Question 2: What is one thing you learned this year that you have NOT yet put into practice? What has stopped you? What will you do about it in Term 4?",to:"Question 2: What is one thing you learned this year that you have not yet put into practice? What has stopped you? What will you do about it in Form 2 Term 3?"},
      {from:"If you cannot share with anyone: Read your Year in Review out loud to yourself. Let your own voice witness your growth. Write one sentence of acknowledgment to the person who started Grade 9 in January.",to:"If you cannot share with anyone: Read your Year in Review out loud to yourself. Let your own voice witness your growth. Write one sentence of acknowledgment to the person who started Form 2."},
      {from:"Recall key learning from Terms 1–3.",to:"Recall key learning from Forms 2 Terms 1–2."},
      {from:"Prepare for your final capstone project.",to:"Prepare for your Form 2 Term 3 community-enterprise project."},
      {from:"Myah is at Mama Rose's kitchen, three notebooks spread before her. Term 1. Term 2. Term 3. Evidence of a year.",to:"Myah is at Mama Rose's kitchen with two term portfolios spread before her. Term 1. Term 2. Evidence of how much Form 2 already contains."},
      {from:"Term 1: Values. Mama Rose. Skills inventory. Her first mini-business — selling water at the taxi rank. The betrayal at the grant office. The choice to start anyway. The cooler box. R84 profit in one week. \"I learned that I do not need permission to create value.\"",to:"Term 1, enterprise foundations: values, skills, customers, pricing and a first small business test. She learned to create value, gather evidence and act without waiting for perfect conditions."},
      {from:"Term 2: Where money comes from. Supply chains. Value chains. Her Community Money Map of the taxi rank. The leaks. Mr. Patel's honesty. \"Every rand has a story. Most of the money leaves my community. I cannot un-see it.\"",to:"Term 1, money and community: household flows, supply chains, value chains and the completed Community Money Map. She learned to see how money and value move through systems around her."},
      {from:"Term 3: Habits. Growth mindset. Grit. Resilience. Procrastination. Self-discipline. Environment design. Her 21-day phone challenge. Fourteen ticks. Seven crosses. The meta-habit. \"I can change. Not because someone told me. Because I have evidence.\"",to:"Term 2: habits, growth mindset, resilience, decision making, digital habits and the completed 21-day Habit Transformation project. She learned that behaviour can be reviewed and redesigned with evidence."},
      {from:"Term 1 (Values and Enterprise):",to:"Term 1 (Work, value and how money moves):"},
      {from:"Term 2 (Money Flows and Community):",to:"Term 2 (Habits, agency and execution):"},
      {from:"Term 3 (Habits and Mindset):",to:"Term 3 readiness — what I want to carry into community enterprise:"},
      {from:"That gap is not failure. It is your starting point for Term 4.",to:"That gap is not failure. It is useful information for Term 3."},
      {from:"How I might address it in Term 4:",to:"How I might address it in Term 3:"},
    ],
  },
  "g9-t4-l56-046": {
    textReplacements: [
      {from:"Ms. Daniels meets Myah at the taxi rank. The same bench. The same flows of money Myah mapped in Term 2. Everything looks different when you have learned to see.",to:"Ms. Daniels meets Myah at the kombi rank. The same bench. The same flows of money Myah mapped in Form 2 Term 1. Everything looks different when you have learned to see."},
      {from:"\"Two: What you are good at. Your talents. The skills you have built — in Grade 8, in Grade 9, in your life.\"",to:"\"Two: What you are good at. Your talents. The skills you have built — in Form 1, in Form 2, and in your life.\""},
      {from:"What she cares about: Her mother. The elders at the taxi rank. Justice. Fairness. People who are invisible to the system. Young people who need to understand money the way she learned to understand it.",to:"What she cares about: Her mother. The elders around the kombi rank and neighbourhood. Justice. Fairness. People who are easy for systems to overlook. Young people who need practical ways to understand money and agency."},
      {from:"What her community needs: The taxi rank is a river of money, but most of it leaks. Elders need help with parcels — and they need company. Young people need to learn what she has learned.",to:"What her community needs: The kombi rank connects many money and value flows. Elders may need help with parcels — and sometimes company. Younger learners may benefit from practical financial capability."},
      {from:"She writes in her notebook: A financial literacy workshop for younger students? Something that teaches them what I wish I had known in Grade 8? A project that combines everything I have learned and everything I can do?",to:"She writes in her notebook: A financial capability workshop for younger learners? Something that teaches what I wish I had practised earlier in Form 1? A project that combines what I have learned with what I can actually do?"},
    ],
  },
  "g9-t4-l57-047": {
    tableTextReplacements: [
      {from:"Spaza shop",to:"Tuckshop"},
      {from:"Stokvel",to:"Mukando / savings group"},
      {from:"stokvel",to:"mukando / savings group"},
    ],
  },
  "g9-t4-l58-048": {
    title:"PROJECT LAUNCH — MY COMMUNITY ENTERPRISE PROJECT",
    textReplacements: [
      {from:"Ms. Daniels gathers everyone at the community hall. The end of the year is close. This is the final project of Grade 9. The room feels different — charged with something between excitement and gravity.",to:"Ms. Daniels gathers everyone at the community hall. The end of Form 2 is getting closer. This is the final applied project of the year. The room feels different — charged with something between excitement and gravity."},
      {from:"\"This is it. Your Grade 9 final project. You will design and complete a project that demonstrates everything you have learned. Identity. Resources. Habits. Enterprise. Community. Resilience. Everything.\"",to:"\"This is it. Your Form 2 final applied project. You will design and complete a project that brings together what you have learned: identity, resources, habits, enterprise, community, resilience and evidence.\""},
      {from:"OPTION B: IMPROVE SOMETHING EXISTING Help an existing community effort grow or improve. Partner with a stokvel, a kitchen, a crèche, a local business. Add value to something already working. Best for learners who prefer collaboration.",to:"OPTION B: IMPROVE SOMETHING EXISTING Help an existing community effort grow or improve. Partner with a mukando or savings group, a kitchen, an early childhood centre, a local business or another community effort. Add value to something already working. Best for learners who prefer collaboration."},
      {from:"\"This is not about leaving school. This is about proving your agency. It is for anyone — whether you are heading to Grade 10 or not — who wants to know: can I create value from nothing but my own skills, attention, and effort?\"",to:"\"This is not about leaving school. Form 3 comes next. This project is about proving your agency now: can you use your skills, attention, relationships and effort to create useful value while continuing your education?\""},
      {from:"(For Option D, the \"Impact\" is measured in rands earned, customers served, and skills proven.)",to:"(For Option D, impact may include money earned in a clearly labelled currency, customers served, skills demonstrated and evidence of repeat demand.)"},
      {from:"My Survival Asset: What is the ONE skill or resource I have right now that could generate R20 by tomorrow? _________________________________",to:"My Survival Asset: What is ONE skill or resource I have right now that could create the equivalent of US$2 in useful value by tomorrow — without risking essential money or safety? _________________________________"},
      {from:"The 50% Rule: If I make R50, I will spend R___ on myself/family and R___ on buying more supplies/tools.",to:"My Seed-Capital Rule: If I earn US$5 in this example, how much must I protect to replace stock or maintain tools before I spend the rest? US$_____ protected; US$_____ available for other needs."},
    ],
    tableReplacements: [
      {
        cellIncludes:"The First Rand",
        rows:[
          ["Step","Question","Action"],
          ["1. The Asset Audit","What do I already own or control?","List your hands, skills, tools, space, relationships and knowledge."],
          ["2. The Immediate Need","What specific problem can I solve today?","Choose a real, observable need — not a giant problem you cannot test."],
          ["3. The Zero-Cost Prototype","How can I test before spending money?","Offer the service to one person for feedback; borrow appropriate tools; use what you already have."],
          ["4. The First Sale","What is the smallest unit of useful value someone may pay for?","One item, one tutoring session, one delivery, one simple service or another small test."],
          ["5. The Survival Loop","How do I protect tomorrow's ability to operate?","Replace stock and protect essential seed capital before treating the rest as spendable."],
        ],
      },
    ],
  },
  "g9-t4-l59-049": {
    textReplacements: [
      {from:"\"I would be your first customer. And I know three other ladies on this street who would be second, third, and fourth. Mrs. Dube cannot walk to the clinic alone. Mrs. Moloi's daughter moved to Cape Town — she has no one for shopping. Mrs. September is nearly blind — she needs someone to read her letters and her bills.\"",to:"\"I would be your first customer. And I know three other ladies on this street who would be second, third and fourth. Mrs. Dube cannot walk to the clinic alone. Mrs. Moloi's daughter moved to Bulawayo — she has no one nearby for shopping. Mrs. September has poor eyesight — she sometimes needs help reading letters and bills.\""},
    ],
  },
  "g9-t4-l60-050": {
    textReplacements: [
      {from:"Thabo is at Emmanuel's spaza shop, a blank page before him. He chose Option B — Improve Something Existing. He will expand his delivery service to include the visit component Myah identified — not just dropping parcels, but staying for ten minutes. Talking. Noticing if something is wrong.",to:"Thabo is at Emmanuel's tuckshop, a blank page before him. He chose Option B — Improve Something Existing. He will expand his delivery service to include the visit component Myah identified — not just dropping parcels, but staying for ten minutes. Talking. Noticing if something seems wrong."},
      {from:"Project: Elder Delivery and Visit Service (Expanded) Need: Elders in my route need parcels delivered AND someone to check on them. Solution: Weekly deliveries plus a 10-minute wellness check. R20 per delivery — R5 more than before, because the visit adds value. Free for those who genuinely cannot pay. Beneficiaries: Mrs. Nkosi, Mrs. Dube, Mrs. Moloi, Mrs. September. Start with four. Grow slowly. Resources needed: My bike (already have). Airtime for communication. A simple checklist for each visit — medication taken? Food in the house? Anything broken? Anyone to contact? Who can help: Myah (partnering on visits). Mr. Daniels (bike repairs). Emmanuel (discounted supplies for elders). Steps:",to:"Project: Elder Delivery and Visit Service (Expanded) Need: Elders on my route need parcels delivered and some would value a brief check-in. Solution: Weekly deliveries plus a 10-minute visit. Illustrative price: US$2 per delivery — US$0.50 more than the earlier delivery-only service because the visit adds time and value. Where someone genuinely cannot pay, the team can decide whether sponsorship or a no-fee visit is sustainable. Beneficiaries: Mrs. Nkosi, Mrs. Dube, Mrs. Moloi, Mrs. September. Start with four. Grow slowly. Resources needed: My bike, airtime for communication and a simple visit checklist. The checklist is not medical diagnosis; it is basic observation: Is there an urgent practical need? Is there someone the elder wants contacted? Who can help: Myah, Mr. Daniels for bike repairs and Emmanuel for local supplies. Steps:"},
    ],
  },
  "g9-t4-l61-051": {
    textReplacements: [
      {from:"\"We do not have R205.\"",to:"\"We do not have US$20.50.\""},
      {from:"They decide to print five copies first. Cost: R68. They will take pre-orders — ask five families to pay R30 each before the books are made. If all five say yes, the project funds itself. If only three say yes, they print three copies. No debt. No risk.",to:"They decide to print five copies first. Illustrative cost: US$6.80. They will take pre-orders — ask five families to pay US$3 each before the books are made. If all five say yes, the first print run is funded. If only three say yes, they print three copies. No borrowing for an untested demand forecast."},
      {from:"Key idea: You do not need a lot of money to start something that matters. You need a plan, a clear ask, and the willingness to start with what you have. Atlehang's cookbook started with R205 — and she did not have it. But she found a way: pre-orders, smaller print run, no debt. The money you do not have is not a reason to stop. It is a problem to solve — and you have been solving problems all year. A budget is not a restriction. It is a map. It shows you where your resources need to go.",to:"Key idea: You do not always need a large budget to start something that matters. You need a plan, a clear ask and evidence. Atlehang's illustrative cookbook budget was US$20.50 — and she did not have it. She reduced the first print run and used pre-orders to test demand before spending. A budget is not only a restriction. It is a map of what the project requires and where the risks are."},
      {from:"Here’s the tension: a budget is also a mirror. It shows you what you truly value — not what you SAY you value, but what you are willing to spend money on. If your budget has R50 for printing but R0 for thanking the people who helped you, what does that say? If your budget assumes someone else will cover the gap, what is your plan if they say no? And here is the hardest truth: some projects should not happen — yet. If the budget requires money you do not have and cannot raise ethically, the most agentic choice might be to wait. To save. To build toward it. Not every idea must be executed NOW. Some ideas need time to become possible. Knowing which is which is wisdom.",to:"Here’s the tension: a budget is also a mirror. It shows priorities and assumptions. If your budget allocates US$5 to printing but nothing to an essential project cost, what does that reveal? If you assume someone else will cover the gap, what happens if they say no? Some projects should not happen yet. If the project requires money you do not have and cannot raise ethically, the responsible choice may be to redesign, save, build partnerships or wait. Not every idea must be executed immediately."},
    ],
    tableReplacements: [
      {
        cellIncludes:"Paper for printing",
        rows:[
          ["Item","Illustrative Cost"],
          ["Paper for printing (15 copies, 20 pages each)","US$9.00"],
          ["Cardboard for covers","US$3.00"],
          ["Binding (staples and glue)","US$2.50"],
          ["Photocopying","US$6.00"],
          ["Total","US$20.50"],
        ],
      },
    ],
    tableTextReplacements: [
      {from:"Taxis to get supplies, visit people",to:"Kombis or other transport to get supplies and visit people"},
    ],
  },
  "g9-t4-l62-052": {
    textReplacements: [
      {from:"He sits at Emmanuel's spaza shop with a list: Who can help?",to:"He sits at Emmanuel's tuckshop with a list: Who can help?"},
    ],
    tableTextReplacements: [
      {from:"Spaza shop owners",to:"Tuckshop owners"},
      {from:"stokvels",to:"mukando / savings groups"},
    ],
  },
  "g9-t4-l63-053": {
    textReplacements: [
      {from:"She hands over the parcel. Stays. They talk. Mrs. Nkosi tells her about her garden, about the clinic appointment next week, about the letter from her daughter in Johannesburg that she has not been able to read because her glasses broke. Myah reads the letter aloud. It is full of love and worry and promises to visit soon. Mrs. Nkosi's eyes fill with tears.",to:"She hands over the parcel. Stays. They talk. Mrs. Nkosi tells her about her garden, about the clinic appointment next week, about a letter from her daughter in Gweru that she has not been able to read because her glasses broke. With permission, Myah reads the letter aloud. It is full of love, worry and promises to visit soon. Mrs. Nkosi's eyes fill with tears."},
    ],
  },
  "g9-t4-l66-056": {
    textReplacements: [
      {from:"Here’s the tension: completion also brings a strange emptiness. You have been working toward this. And now it is done. What now? The answer: you carry it with you. The evidence does not disappear when the project ends. It becomes part of your portfolio — and part of your identity. You are now someone who has completed a final project in Grade 9. No one can take that from you. But do not rest on it too long. Completion opens the door to the next thing. Be proud. Then be ready.",to:"Here’s the tension: completion can bring a strange emptiness. You have been working toward this, and now it is done. The evidence does not disappear when the project ends. It becomes part of your portfolio and part of what you know you can do. You are now someone who has completed a substantial Form 2 community project. Be proud of the evidence, then carry the learning forward into Form 3."},
    ],
  },
  "g9-t4-l69-059": {
    textReplacements: [
      {from:"Sipho presents — his High-Agency Challenge. He chose Option D. \"I fixed appliances. Kettles. Radios. I started with zero capital — just my hands and what I knew. My first customer paid me R30 to fix a radio. I used R15 for food and R15 for a screwdriver set. Now I have tools. I have regular customers. I proved to myself that I can create value from nothing — and that is a kind of freedom no one can take from me.\"",to:"Sipho presents — his High-Agency Challenge. He chose Option D. \"I fixed simple items I knew how to handle safely. My first customer paid me US$3 in this illustrative example. I used part for a household need and put part into a tool fund. Now I have better tools and repeat customers. I proved that practical skill can create value when I use it responsibly.\""},
    ],
  },
  "g9-t4-l70-060": {
    textReplacements: [
      {from:"\"I started Grade 9 waiting for a grant committee to say yes. I followed every rule. I did everything right. And I got silence. So I stopped waiting. I borrowed a cooler box. I sold water. I mapped money flows. I tracked my habits. And this term, I started visiting elders — not just delivering parcels, but staying. Talking. Reading letters. Being present.\"",to:"\"I started Form 2 waiting for a committee to say yes. I followed every rule and got silence. So I stopped treating permission as the only path. I borrowed a cooler box. I tested selling water. I mapped money flows. I tracked my habits. And this term, I worked with elders — not just delivering parcels, but staying, talking and being present.\""},
      {from:"\"I am not the same person who started Grade 8. I am not even the same person who started this term. I know what I value. I know how money moves. I know that I can change — because I have evidence. And I know that I do not need anyone's permission to create value. I just need to see a need and move toward it.\"",to:"\"I am not the same person who started Form 1. I am not even the same person who started this term. I know what I value. I know more about how money moves. I know I can change because I have evidence. And I know that when I see a real need, I can test a responsible way to move toward it.\""},
      {from:"\"Some of you will go on to Grade 10. Some of you will take a different path. Both paths require the same thing: seeing a need and moving toward it. Both paths have dignity. The only shame is standing at the fork and refusing to walk. Do not refuse to walk. Walk. Whatever path you choose, walk it with the same attention, the same persistence, the same agency you have shown this year.\"",to:"\"Form 3 comes next. Your interests may differ — academic, practical, technical, creative, entrepreneurial — and your responsibilities outside school may differ too. What you carry forward is the same discipline: notice carefully, learn, act responsibly, review evidence and keep building capability.\""},
      {from:"Question 1: What did you learn from someone else's project that you will carry with you? How do you feel now that your Grade 9 journey is nearly complete?",to:"Question 1: What did you learn from someone else's project that you will carry with you? How do you feel now that your Form 2 journey is nearly complete?"},
    ],
  },
  "g9-t4-l71-061": {
    textReplacements: [
      {from:"What is ONE thing from this project that you will carry with you into Grade 10 and beyond — not the project itself, but the capacity, the insight, the evidence of who you became through doing it?",to:"What is ONE thing from this project that you will carry with you into Form 3 and beyond — not the project itself, but the capability, insight or evidence you built through doing it?"},
    ],
  },
  "g9-t4-l72-062": {
    textReplacements: [
      {from:"What is ONE thing your community could do together — a cooperative, a stokvel, a shared resource, a regular event — that no individual could do alone?",to:"What is ONE thing your community could do together — a cooperative, a mukando or savings group, a shared resource, a regular event — that no individual could do alone?"},
    ],
  },
  "g9-t4-l73-063": {
    title:"FORM 3 DIRECTION — WHAT WILL I STRENGTHEN NEXT?",
    rangeReplacements: [
      {
        startIncludes:"Understand the subject choice implications for Grade 10 — and the alternatives.",
        endIncludes:"What is my plan for the first month after Grade 9? _________________________________",
        replacement:[
          {kind:"text",type:"paragraph",text:"Use your Form 2 evidence to choose what you want to strengthen next. Form 3 is the next stage of your secondary-school journey. You do not need to decide your entire future now."},
          {kind:"text",type:"paragraph",text:"Different learners will have different interests and responsibilities. Some will lean toward academic subjects, some toward technical or practical skills, some toward enterprise, and many will combine these. The useful question is not 'Which label am I?' It is 'Which capabilities and learning areas do I need to strengthen next, and what evidence will show that I did?'"},
          {kind:"text",type:"activity",text:"✍️ Activity 73: My Form 3 Direction Plan\n\n1. One capability I want to strengthen in Form 3: _________________________________\n2. One school subject or learning area I need to take more seriously: _________________________________\n3. One practical skill or project I want to continue outside ordinary classwork: _________________________________\n4. One person I can ask for guidance or feedback: _________________________________\n5. By the end of Form 3 Term 1, the evidence I want to have is: _________________________________"},
          {kind:"text",type:"reflection",text:"A direction plan should keep doors open while giving you something concrete to practise. It can change when new evidence appears. Changing a plan after learning is not failure; it is informed adjustment."},
        ],
      },
    ],
    textReplacements: [
      {from:"| Date | | | Lesson | Lesson 73 — Path Forward | | Experiment/Observation | I evaluated my options after Grade 9 and made a Path Forward declaration. | | Result | My path: | | Learning | | | Next Action | |",to:"| Date | | | Lesson | Lesson 73 — Form 3 Direction | | Experiment/Observation | I reviewed my Form 2 evidence and built a Form 3 direction plan. | | Result | Capability I will strengthen: | | Learning | | | Next Action | First evidence I will create: | |"},
    ],
  },
  "g9-t4-l74-064": {
    title:"FORM 2 PORTFOLIO & LETTER TO FUTURE SELF",
    rangeReplacements: [
      {
        startIncludes:"Term 1: ☐ Strategic Audit",
        endIncludes:"Term 4: ☐ Year in Review",
        replacement:[
          {kind:"text",type:"section",text:"Form 2 Term 1 — Enterprise, Money & Community"},
          {kind:"text",type:"paragraph",text:"☐ Strategic Audit and Values work (Lessons 1–2)\n☐ Work, enterprise, skills, customers and pricing evidence (Lessons 3–15)\n☐ Enterprise Foundations checkpoint (Lesson 16)\n☐ Money-flow, household, supply-chain and value-chain evidence (Lessons 17–22)\n☐ Community Money Map project, presentation and action plan (Lessons 23–31)\n☐ Term 1 learning journey, reflection and future-self letter (Lessons 32–34)"},
          {kind:"text",type:"section",text:"Form 2 Term 2 — Habits, Agency & Execution"},
          {kind:"text",type:"paragraph",text:"☐ Habit identity, tiny habits, goals and time evidence (Lessons 35–38)\n☐ Procrastination, resilience, grit and learning-from-failure evidence (Lessons 39–42)\n☐ Growth mindset, self-discipline, decisions, peer pressure and digital safety evidence (Lessons 43–49)\n☐ Completed 21-day Habit Transformation project and reflection (Lessons 50–54)"},
          {kind:"text",type:"section",text:"Form 2 Term 3 — Community Enterprise & Portfolio"},
          {kind:"text",type:"paragraph",text:"☐ Year-so-far review and community-project idea (Lessons 55–57)\n☐ Community project launch, needs assessment, design, budget and partnerships (Lessons 58–62)\n☐ Execution, midpoint review, problem solving and completion (Lessons 63–66)\n☐ Storytelling, presentation and audience evidence (Lessons 67–70)\n☐ Project reflection, community synthesis and Form 3 direction plan (Lessons 71–73)\n☐ Final Form 2 portfolio and future-self letter (Lesson 74)"},
        ],
      },
    ],
    textReplacements: [
      {from:"Organize your complete Grade 9 portfolio — four terms of evidence.",to:"Organize your complete Form 2 portfolio — three terms of evidence."},
      {from:"📘 Your Complete Grade 9 Portfolio",to:"📘 Your Complete Form 2 Portfolio"},
      {from:"Go through the checklist above. Check off everything you have. Find anything that is missing. Your portfolio is the story of your Grade 9 journey. Make it as complete as you can.",to:"Go through the checklist above. Check off everything you have and find anything that is missing. Your portfolio is the evidence story of your Form 2 journey. Make it as complete and honest as you can."},
      {from:"Write a letter to yourself. Address it to \"Future Me.\" You will read this at the end of Grade 10 — or whenever you need to remember who you were and how far you have come.",to:"Write a letter to yourself. Address it to \"Future Me.\" Read it at the end of Form 3 — or whenever you need to remember who you were and how far you have come."},
      {from:"From me, in Grade 9 Date: _____________________",to:"From me, in Form 2 Date: _____________________"},
      {from:"📂 Portfolio: Keep this letter somewhere safe. Read it at the end of Grade 10 — or whenever you need to remember.",to:"📂 Portfolio: Keep this letter somewhere safe. Read it at the end of Form 3 — or whenever you need to remember."},
      {from:"Your Next Step: What is the most important thing you want your future self to remember about who you were in Grade 9? Write it clearly. The future is coming. Your future self is waiting.",to:"Your Next Step: What is the most important thing you want your future self to remember about who you were in Form 2? Write it clearly. Form 3 is coming. Your future self is waiting."},
      {from:"| Date | | | Lesson | Lesson 74 — Final Portfolio and Letter | | Experiment/Observation | I compiled my complete Grade 9 portfolio and wrote my final letter to my future self. | | Result | | | Learning | | | Next Action | Carry everything forward. |",to:"| Date | | | Lesson | Lesson 74 — Form 2 Portfolio and Letter | | Experiment/Observation | I compiled my complete Form 2 portfolio and wrote my final letter to my future self. | | Result | | | Learning | | | Next Action | Carry the evidence into Form 3. |"},
    ],
  },
  "g9-t4-l75-065": {
    title: "FAREWELL TO FORM 2",
    textReplacements: [
      {from:"\"You were the main character of this story — but you did not know it at the start. In Grade 8, you were the quiet observer. You noticed things. You asked questions. In Grade 9, you became the protagonist. You walked into the grant office. You borrowed a cooler box. You sold water. You mapped money flows. You tracked your habits. You built a visit service for elders. You chose your path.\"",to:"\"You were the main character of this story — but you did not know it at the start. In Form 1, you were the quiet observer. You noticed things. You asked questions. In Form 2, you became more active. You walked into the committee office. You borrowed a cooler box. You tested a small water business. You mapped money flows. You tracked your habits. You built a community project. You created evidence.\""},
      {from:"You finished Grade 9.",to:"You finished Form 2."},
      {from:"You are not the same person who started Grade 8. You are not even the same person who started this term.",to:"You are not the same person who started Form 1. You are not even the same person who started this term."},
      {from:"Say a final goodbye to Grade 9 — with gratitude, pride, and forward momentum.",to:"Say a final goodbye to Form 2 — with gratitude, pride, and forward momentum."},
      {from:"In Grade 8, you were the quiet observer. You noticed things. You asked questions. In Grade 9, you became the protagonist.",to:"In Form 1, you were the quiet observer. You noticed things. You asked questions. In Form 2, you became the protagonist."},
      {from:"You have evidence — four terms of it — that you can act on the world and create change.",to:"You have evidence — three terms of it — that you can act on the world and create change."},
      {from:"Lesson 75 — Farewell to Grade 9",to:"Lesson 75 — Farewell to Form 2"},
      {from:"I said my final goodbye to Grade 9 — with gratitude, pride, and forward momentum.",to:"I said my final goodbye to Form 2 — with gratitude, pride, and forward momentum."},
      {from:"I have said a final goodbye to Grade 9 — with gratitude, pride, and forward momentum.",to:"I have said a final goodbye to Form 2 — with gratitude, pride, and forward momentum."},
      {from:"However your family says goodbye — in English, isiZulu, isiXhosa, Afrikaans, Sepedi, Setswana, or any of the languages of this land — here is a wish for you:",to:"However your family says goodbye — in English, Shona, Ndebele, or any language spoken in your home and community — here is a wish for you:"},
      {from:"Hamba kahle. Go well. Tsamaya hantle.",to:"Go well. Carry what you learned. Keep becoming."},
    ],
  },
};

type ZimbabweFinalCleanup = {
  text?: Array<{from:string;to:string}>;
  tableText?: Array<{from:string;to:string;exact?:boolean}>;
};

export const zimbabweFinalCleanupOverrides: Record<string,ZimbabweFinalCleanup> = {
  "g8-t1-l09-009":{
    tableText:[
      {from:"School shoes, matric dance",to:"School shoes, a Form 4 school-leaving event"},
    ],
  },
  "g8-t2-l23-023":{
    text:[
      {from:"Myah goes with Thabo to visit his friend Sipho in Tembisa on a Saturday.",to:"Myah goes with Thabo to visit his friend Sipho in Chitungwiza on a Saturday."},
      {from:"Mrs. Ndlovu is in the kitchen. The smell of vetkoek fills the air. She has been baking since 5am. On weekdays, she works at a crèche. Formal work. Payslip. UIF. But the salary is not enough.",to:"Mrs. Ndlovu is in the kitchen. The smell of vetkoek fills the air. She has been baking since before sunrise. On weekdays, she works at an early childhood centre. Formal work. Payslip. Statutory deductions where applicable. But the salary is not enough."},
      {from:"\"Monday to Friday, I am at the warehouse,\" he says. \"Formal work. Payslip. UIF. Tax. But the salary — it covers the bond, not much else.\"",to:"\"Monday to Friday, I am at the warehouse,\" he says. \"Formal work. Payslip. Tax and statutory deductions where applicable. But the salary covers the biggest household costs, not much else.\""},
    ],
  },
  "g8-t2-l24-024":{
    text:[
      {from:"📂 Portfolio: Save this. You will return to it in Grade 10.",to:"📂 Portfolio: Save this. You will return to it in Form 3."},
    ],
  },
  "g8-t4-l63-062":{
    text:[
      {from:"The Mkhize family gardeners of Limpopo — teaching patience and invisible growth",to:"The Moyo family gardeners of Mashonaland East — teaching patience and invisible growth"},
    ],
  },
  "g9-t1-l05-005":{
    text:[
      {from:"Now, twenty years later, she runs a kitchen that feeds sixty people a day. She has three plastic tables, a few chairs, a hand-painted sign, and a reputation that stretches across Alexandra. She knows everyone's name. She knows who needs extra gravy and who is watching their salt. She knows who just lost a job and who just had a baby.",to:"Now, twenty years later, she runs a kitchen that feeds sixty people a day. She has three plastic tables, a few chairs, a hand-painted sign, and a reputation that stretches across her part of Harare. She knows everyone's name. She knows who needs extra gravy and who is watching their salt. She knows who just lost a job and who just had a baby."},
    ],
  },
  "g9-t2-l20-021":{
    text:[
      {from:"Her grandmother laughed. \"Nothing is always here. I planted this tree forty years ago. My mother gave me the seed. She brought it from KwaZulu-Natal when she married and moved here. Her mother grew it in her yard before that. And before any of that, the tree came from the earth, the rain, the sun.\"",to:"Her grandmother laughed. \"Nothing is always here. I planted this tree forty years ago. My mother gave me the seed. She brought it from Manicaland when she married and moved here. Her mother grew it in her yard before that. And before any of that, the tree came from the earth, the rain, the sun.\""},
    ],
  },
  "g11-t3-l47-047":{
    text:[
      {from:"\"Here is the durable lesson: two investments with the same headline return can produce different after-tax outcomes. Instead of copying a South African product rule, compare the Zimbabwe products actually available to you, their regulation, fees, liquidity and current tax treatment.\"",to:"\"Here is the durable lesson: two investments with the same headline return can produce different after-tax outcomes. Compare the Zimbabwe products actually available to you, their regulation, fees, liquidity and current tax treatment.\""},
      {from:"\"Retirement products have their own contribution, access and tax rules. Do not assume an arrangement works like a South African RA. Check the regulated Zimbabwe product, the provider, fees, access rules and current tax treatment before relying on any benefit.\"",to:"\"Retirement products have their own contribution, access and tax rules. Do not assume one pension or retirement arrangement works like another. Check the Zimbabwe-regulated product, provider, fees, access rules and current tax treatment before relying on any benefit.\""},
    ],
  },
  "g11-t3-l50-050":{
    tableText:[
      {from:"Rand hedge",to:"Currency hedge"},
      {from:"Investment that protects against rand weakness",to:"Investment or strategy intended to reduce exposure to adverse currency moves"},
    ],
  },
  "g11-t3-l51-051":{
    tableText:[
      {from:"TFSA, RA, deductions, planning",to:"Current Zimbabwe tax rules, regulated pension/investment products, lawful deductions and planning"},
    ],
  },
  "g12-t1-l01-001":{
    tableText:[
      {from:"Term 4",to:"Legacy cycle"},
    ],
  },
  "g12-t1-l07-007":{
    text:[
      {from:"\"UNISA,\" Mrs. Botha says, \"is distance learning. You study from home. No lectures. No campus. It is harder than it sounds—you need discipline, because no one checks if you are keeping up. But it is flexible. You can work while you study. For your hybrid plan, it might be the best fit.\"",to:"\"Distance and flexible-learning programmes can be useful,\" Mrs. Botha says. \"But compare the actual Zimbabwe or regional institutions available to you. Check accreditation, programme entry requirements, delivery mode, cost and whether the qualification fits your goal before choosing.\""},
      {from:"Myah highlights UNISA. Part-time BEd. Flexible. Affordable. She can build the business while she studies. The hybrid path becomes real.",to:"Myah highlights several possible flexible-study routes, but she does not name a winner yet. The hybrid path is a direction; the institution must still survive her evidence check."},
    ],
  },
  "g12-t1-l15-015":{
    tableText:[
      {from:"My Post-Matric Path",to:"My Post-O-Level Path"},
    ],
  },
  "g12-t1-l17-017":{
    text:[
      {from:"Myah presents last on Day 1. She walks through her plan—the hybrid path, the decision matrix, the UNISA part-time BEd, the business, the budget, the roommate agreement template, the Reality Checks for every section, the Managing the Downside plan.",to:"Myah presents last on Day 1. She walks through her hybrid direction, decision matrix, shortlisted further-study routes, business, budget, roommate agreement template, Reality Checks and downside-management plan. She clearly labels the study route as conditional until admission and funding are confirmed."},
    ],
  },
  "g12-t2-l23-023":{
    text:[
      {from:"Professional Summary: Financial literacy facilitator and digital product creator with four years of experience designing and delivering workshops for young people. Skilled in curriculum development, public speaking, and small business management. Currently pursuing a BEd through UNISA.",to:"Professional Summary: Financial capability facilitator and digital product creator with experience designing and delivering workshops for young people. Skilled in curriculum development, public speaking and small-business management. Further study: list only a confirmed programme or current application accurately."},
    ],
  },
  "g12-t2-l24-024":{
    text:[
      {from:"I am writing to apply for the part-time tutor position at your learning centre. I have been facilitating financial literacy workshops and tutoring students for four years—reaching over 150 learners and helping students improve their grades by an average of 15%. I am currently pursuing a BEd through UNISA, which gives me both practical experience and academic grounding in how people learn.",to:"I am writing to apply for the part-time tutor position at your learning centre. I have experience facilitating financial capability workshops and tutoring learners. I have attached evidence of the work and outcomes I can verify. I am also exploring further study in education; I will name a programme only when the application or enrolment status is accurate."},
    ],
  },
  "g12-t2-l25-025":{
    tableText:[
      {from:"In Grade 11, I was running a delivery service with three helpers...",to:"In Form 3, I was helping run a delivery service with three helpers..."},
    ],
  },
  "g12-t2-l39-039":{
    text:[
      {from:"Myah shares her draft plan. Career vision: financial education through workshops, digital products, and teaching. Income strategy: freelance facilitation, digital product sales, part-time tutoring, UNISA BEd. Professional brand: \"I help young people understand money.\" Network: Zinhle, Ms. Daniels, Themba, workshop clients. Skill development: public speaking certification, advanced curriculum design.",to:"Myah shares her draft plan. Career vision: financial education through workshops, digital products and teaching. Income strategy: freelance facilitation, digital product sales and part-time tutoring. Further study remains a verified-choice item rather than a named institution. Professional brand: \"I help young people understand money.\" Network: Zinhle, Ms. Daniels, Themba and workshop clients. Skill development: public speaking and advanced curriculum design."},
    ],
  },
  "g12-t4-l61-053":{
    text:[
      {from:"Key idea: Myah's word for Grade 12 so far: Launch. Everything has been building to this. The paradox: the more you learn, the more you realise how much you do not know. But the more you know, the more you can launch. You are not starting the final term empty. You are starting with everything you have built over four years.",to:"Key idea: Myah's word for Form 4 is Launch. Everything has been building toward action. The more she learns, the more carefully she distinguishes evidence from assumption. She enters the final integration work with four years of portfolio evidence—not with certainty about the future."},
    ],
  },
  "g12-t4-l62-054":{
    text:[
      {from:"Key idea: Myah saw that her plans were aligned. The Transition Plan got her to UNISA and the business. The Career Plan kept her earning. The Risk Plan kept her protected. The paradox: a life is not a collection of separate plans. It is one plan with many parts. Do not see your plans as separate. See them as one.",to:"Key idea: Myah sees that alignment is not about one institution or one job. The Transition Plan must support capability and living arrangements. The Career Plan must generate learning and income. The Risk Plan must protect what both depend on. One life, many connected systems."},
    ],
  },
  "g12-t4-l63-055":{
    tableText:[
      {from:"Updated (Term 4)",to:"Final Form 4 Update"},
    ],
  },
  "g12-t4-l64-056":{
    tableText:[
      {from:"Updated (Term 4)",to:"Final Form 4 Update"},
    ],
  },
  "g12-t4-l68-060":{
    text:[
      {from:"\"This is it. Your final final project. The project that brings together everything—from Grade 9 to now.\"",to:"\"This is it. Your final capstone. It brings together evidence from Form 1 to Form 4.\""},
    ],
  },
  "g12-t4-l73-065":{
    text:[
      {from:"One word to describe my Grade 12 journey so far: _________________________________",to:"One word to describe my Form 4 journey so far: _________________________________"},
      {from:"Key idea: Myah's word for Grade 12 so far: Integration. She had learned to transition, to build a career, to protect what she builds. The paradox: the more you learn, the more you realise how much you do not know. But the more you know, the more you can integrate—and the more you can launch. You are not the same person who started Applied Commerce in January.",to:"Key idea: Myah's word for Form 4 is Integration. Wealth, legacy, transition, career and protection are not separate subjects anymore. The more she learns, the more she sees what still needs verification. Integration means keeping the parts aligned as evidence changes."},
      {from:"Question 2: How do these three terms connect? What is the thread that ties them together? What is one word that captures your Grade 12 journey so far?",to:"Question 2: How do the three Form 4 terms connect? What is the thread that ties them together? What is one word that captures your Form 4 journey?"},
      {from:"Share your Grade 12 review with your family. Let them see how far you have come. Ask them: \"What growth have you seen in me this year?\"",to:"Share your Form 4 review with someone who witnessed your growth. Ask: \"What growth have you seen in me this year?\""},
      {from:"| Date | | | Lesson | Lesson 73 — Grade 12 Review | | Launch Decision | What I will carry forward to the final final project: | | Prediction | | | Result | | | Learning | | | Next Action | |",to:"| Date | | | Lesson | Lesson 73 — Form 4 Review | | Launch Decision | What I will carry into the final Life Launch Plan: | | Prediction | | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g12-t4-l76-068":{
    tableText:[
      {from:"no TFSA/RA assumptions",to:"no imported product assumptions"},
    ],
  },
  "g12-t4-l79-071":{
    text:[
      {from:"Here’s the tension: you are already enough. You have been becoming for five years. The plans are impressive. The person is extraordinary. The launch is not about becoming someone new. It is about releasing into the world the person you already are—the person you have been becoming since Grade 8. The observer. The challenger. The strategist. The architect. The operator. The launcher. All of them are you. All of them have always been you. Now go be them in the world. And her sixth lesson—\"the parcels are the excuse, the visit is the point\"—is the key that unlocks the entire Applied Commerce journey. The curriculum was the excuse. Your becoming was the point. The textbooks, the activities, the checkpoints, the Thinking Equations, the Tension/Experiment Logs—all of them were parcels. You were the visit. You were the point. The entire five-year curriculum was designed not to teach you about money. It was designed to help you become you. And you have. Not perfectly. Not completely. But really. The evidence is in this room. The evidence is in your portfolio. The evidence is in you.",to:"Here’s the tension: the programme is ending, but becoming is not. Across four years you practised observing, challenging, strategising, architecting, operating and launching. The curriculum, activities, checkpoints, Thinking Equations and Tension/Experiment Logs were tools for building agency and evidence. The portfolio does not prove that your future will be easy. It proves that you know how to learn from what happens next."},
    ],
  },
  "g12-t4-l80-072":{
    text:[
      {from:"\"This is it. Your final final project. The project that brings together everything—from Grade 8 to now. Five years of learning. Five years of becoming. One final plan.\"",to:"\"This is it. Your final capstone. It brings together Form 1 to Form 4: four years of learning, evidence and becoming, organised into one living plan.\""},
    ],
  },
};

export const zimbabweReviewedNeutralUnitIds = [
  "g8-t1-l08-008",
  "g8-t1-l14-014",
  "g8-t2-l30-030",
  "g8-t3-l47-046",
  "g8-t3-l48-047",
  "g8-t4-l68-067",
  "g8-t4-l70-069",
  "g8-t4-l74-073",
  "g8-t4-l75-074",
] as const;

export const zimbabweReviewedNeutralForm2UnitIds = [
  "g9-t1-l06-006",
  "g9-t2-l30-031",
  "g9-t3-l38-027",
  "g9-t3-l39-028",
  "g9-t3-l43-032",
  "g9-t3-l44-033",
  "g9-t3-l45-034",
  "g9-t4-l64-054",
  "g9-t4-l65-055",
  "g9-t4-l67-057",
  "g9-t4-l68-058",
] as const;

export const zimbabweReviewedNeutralForm3UnitIds = [
  "g10-t1-l09-009",
  "g10-t1-l14-014",
  "g10-t2-l20-020",
  "g10-t3-l53-053",
  "g10-t4-l63-063",
  "g10-t4-l70-070",
  "g11-t1-l11-011",
  "g11-t1-l16-016",
  "g11-t1-l17-017",
  "g11-t1-l18-018",
  "g11-t2-l21-021",
  "g11-t2-l22-022",
  "g11-t2-l24-024",
  "g11-t2-l25-025",
  "g11-t2-l31-031",
] as const;

export const zimbabweReviewedNeutralForm4UnitIds = [
  "g11-t3-l58-058",
  "g11-t4-l61-061",
  "g11-t4-l65-065",
  "g11-t4-l68-068",
  "g11-t4-l74-074",
  "g12-t1-l02-002",
  "g12-t2-l22-022",
  "g12-t2-l24-024",
  "g12-t2-l26-026",
  "g12-t2-l27-027",
  "g12-t2-l30-030",
  "g12-t2-l32-032",
  "g12-t2-l35-035",
  "g12-t2-l36-036",
  "g12-t2-l37-037",
  "g12-t2-l38-038",
  "g12-t3-l50-050",
  "g12-t3-l51-051",
] as const;

const SOUTH_AFRICAN_LANGUAGE_HEADER=/^(?:\*\*)?(?:isiZulu|isiXhosa|Afrikaans|Sepedi|Setswana)(?:\*\*)?$/i;

function applyZimbabweStructuralDefaults(block:ContentBlock):ContentBlock{
  if(block.kind!=="table"||block.rows.length===0) return block;
  const header=block.rows[0];
  if(header.length<3) return block;
  const translationHeaders=header.slice(2);
  if(!translationHeaders.every(cell=>SOUTH_AFRICAN_LANGUAGE_HEADER.test(cell.trim()))) return block;
  return {...block,rows:block.rows.map(row=>row.slice(0,2))};
}

function applyReviewedTableTextReplacements(
  blocks:ContentBlock[],
  replacements:Array<{from:string;to:string;exact?:boolean}>=[],
):ContentBlock[]{
  if(!replacements.length) return blocks;
  return blocks.map(block=>{
    if(block.kind!=="table") return block;
    return {
      ...block,
      rows:block.rows.map(row=>row.map(cell=>{
        let value=cell;
        for(const replacement of replacements){
          if(replacement.exact){
            if(value===replacement.from) value=replacement.to;
          }else if(value.includes(replacement.from)){
            value=value.replaceAll(replacement.from,replacement.to);
          }
        }
        return value;
      })),
    };
  });
}

function applyReviewedTableReplacements(
  blocks:ContentBlock[],
  replacements:ZimbabweTableReplacement[]=[],
):ContentBlock[]{
  if(!replacements.length) return blocks;
  const matched=new Set<number>();
  const result=blocks.map(block=>{
    if(block.kind!=="table") return block;
    const flat=block.rows.flat();
    const index=replacements.findIndex(
      (item,replacementIndex)=>
        !matched.has(replacementIndex)&&
        flat.some(cell=>cell.includes(item.cellIncludes))
    );
    if(index<0) return block;
    matched.add(index);
    return {...block,rows:replacements[index].rows};
  });
  replacements.forEach((item,index)=>{
    if(!matched.has(index)) throw new Error(`Zimbabwe table override not found: ${item.cellIncludes}`);
  });
  return result;
}

function applyReviewedRangeReplacements(
  blocks:ContentBlock[],
  ranges:ZimbabweRangeReplacement[]=[],
):ContentBlock[]{
  let result=[...blocks];
  for(const range of ranges){
    const start=result.findIndex(block=>block.kind==="text"&&block.text.includes(range.startIncludes));
    if(start<0) throw new Error(`Zimbabwe range override start not found: ${range.startIncludes}`);
    const relativeEnd=result.slice(start).findIndex(
      block=>block.kind==="text"&&block.text.includes(range.endIncludes)
    );
    if(relativeEnd<0) throw new Error(`Zimbabwe range override end not found: ${range.endIncludes}`);
    const end=start+relativeEnd;
    result=[
      ...result.slice(0,start),
      ...range.replacement,
      ...result.slice(end+1),
    ];
  }
  return result;
}

function applyReviewedTextReplacements(
  blocks:ContentBlock[],
  replacements:Array<{from:string;to:string}>=[],
):ContentBlock[]{
  if(!replacements.length) return blocks;
  return blocks.map(block=>{
    if(block.kind!=="text") return block;
    let text=block.text;
    for(const replacement of replacements){
      if(text.includes(replacement.from)) text=text.replaceAll(replacement.from,replacement.to);
    }
    return {...block,text};
  });
}

function applyBlockOverrides(blocks:ContentBlock[],overrides:ZimbabweBlockOverride[]=[]):ContentBlock[]{
  const prepared=blocks.map(applyZimbabweStructuralDefaults);
  if(!overrides.length) return prepared;
  const byIndex=new Map(overrides.map(item=>[item.index,item]));
  return prepared.flatMap((block,index)=>{
    const override=byIndex.get(index);
    if(!override) return [block];
    if(override.kind==="remove") return [];

    if(override.kind==="text"){
      if(block.kind!=="text") throw new Error(`Zimbabwe override expects text block at index ${index}.`);
      return [{...block,text:override.text}];
    }

    if(block.kind!=="table") throw new Error(`Zimbabwe override expects table block at index ${index}.`);
    return [{...block,rows:override.rows}];
  });
}

export function applyZimbabweUnitOverlay(unit:UnitContent):UnitContent{
  const override=zimbabweContentOverrides[unit.id];
  const cleanup=zimbabweFinalCleanupOverrides[unit.id];
  const transformed=[
    ...applyReviewedTextReplacements(
      applyReviewedRangeReplacements(
        applyReviewedTableReplacements(
          applyReviewedTableTextReplacements(
            applyBlockOverrides(unit.blocks,override?.blocks),
            override?.tableTextReplacements,
          ),
          override?.tableReplacements,
        ),
        override?.rangeReplacements,
      ),
      override?.textReplacements,
    ),
    ...(override?.appendBlocks ?? []),
  ];
  return {
    ...unit,
    title:override?.title ?? unit.title,
    label:override?.label ?? unit.label,
    blocks:applyReviewedTextReplacements(
      applyReviewedTableTextReplacements(transformed,cleanup?.tableText),
      cleanup?.text,
    ),
  };
}

export function applyZimbabweSummaryOverlay<T extends UnitSummary>(unit:T):T{
  const override=zimbabweContentOverrides[unit.id];
  if(!override) return unit;
  return {
    ...unit,
    title:override.title ?? unit.title,
    label:override.label ?? unit.label,
  };
}
