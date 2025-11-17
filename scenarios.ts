export interface Choice {
  text: string;
  isCorrect: boolean;
  feedback: string;
  explanation?: string;
  resources?: string[];
}

export interface Scenario {
  id: number;
  category: 'harrasment' | 'misinformation' | 'spam' | 'privacy' | 'hate_speech' | 'content';
  title: string;
  description: string;
  choices: Choice[];
}

export const scenarios: Scenario[] = [
  {
    id: 1,
    category: 'harassment',
    title: 'Bullying in the comments',
    description:
      'A user posts a comment directed at another member: "You\'re an idiot. Everything you post is garbage. Why don\'t you just leave this group?" The targeted user has reported this comment.',
    choices: [
      {
        text: 'Remove the comment and message the poster of the reason why',
        isCorrect: true,
        feedback:
          'Excellent decision! This is a clear case of personal attack and harassment. Removing the content and issuing a warning protects the other member while giving the offender a chance to understand and correct their behavior.',
        explanation:
          'Personal attacks violate most community guidelines because they target individuals rather than ideas. They create hostile environments that discourage participation and can cause real emotional harm. First-time offenses typically warrant removal and a warning, with escalation for repeat violations.',
        resources: [
          'Community standards prioritize respect and dignity for all members',
          'Distinguishing between criticism of ideas vs. attacks on people is crucial',
          'Progressive enforcement helps educate while maintaining safety'
        ]
      },
      {
        text: 'Leave it up - it\'s just criticism',
        isCorrect: false,
        feedback:
          'This isn\'t appropriate. While criticism of ideas is acceptable, this crosses into personal attack territory. The language is directed at the person ("You\'re an idiot") rather than their arguments, and tells them to leave the community.',
        explanation:
          'There\'s a crucial difference between disagreeing with someone\'s opinion and attacking them personally. Phrases like "you\'re an idiot" and "why don\'t you leave" are meant to demean and exclude, not to engage in constructive dialogue.'
      },
      {
        text: 'Immediately ban the user without warning',
        isCorrect: false,
        feedback:
          'This is too harsh for a first offense. While the comment violates guidelines, an immediate permanent ban doesn\'t give the person a chance to learn and correct their behavior.',
        explanation:
          'Effective moderation balances safety with education. Unless there\'s a pattern of abuse or the content is extremely severe (threats, hate speech), progressive enforcement (warning → temporary suspension → ban) is more effective and fair.'
      },
      {
        text: 'Ask both users to work it out privately',
        isCorrect: false,
        feedback:
          'This places unfair burden on the victim and abdicates the moderator\'s responsibility to enforce community standards. The harasser has already violated the rules, and it\'s not the victim\'s job to resolve this.',
        explanation:
          'Moderators must take action on clear guideline violations. Asking victims to privately resolve harassment can make them feel unsupported and may expose them to further abuse.'
      }
    ]
  },
  {
    id: 2,
    category: 'misinformation',
    title: 'Health Misinformation',
    description:
      'A user shares an article claiming that a common medication causes serious harm, linking to a non-credible blog. The post is gaining traction with dozens of shares and concerned comments. The medical consensus is that this medication is safe when used as prescribed.',
    choices: [
      {
        text: 'Remove the post and add a fact-check notice explaining why',
        isCorrect: true,
        feedback:
          'Great choice! Health misinformation can cause real-world harm. Removing the post prevents further spread while the fact-check notice educates the community about why it was removed and provides accurate information.',
        explanation:
          'Health misinformation is particularly dangerous because it can lead people to make harmful decisions about their wellbeing. Platforms have a responsibility to prevent the spread of demonstrably false health claims while being transparent about their moderation actions.',
        resources: [
          'Health misinformation policies often prioritize safety over free expression',
          'Transparency about removals helps build trust and educates the community',
          'Providing accurate counter-information is as important as removing false claims'
        ]
      },
      {
        text: 'Add a warning label but leave it up',
        isCorrect: false,
        feedback:
          'While warning labels are useful for borderline cases, clear health misinformation that contradicts medical consensus should be removed. A warning label still allows the false information to spread, potentially causing harm.',
        explanation:
          'Warning labels work well for disputed claims or satire, but demonstrably false health information that could lead to real harm requires removal. The post will continue to spread even with a label.'
      },
      {
        text: 'Leave it up - users can decide what to believe',
        isCorrect: false,
        feedback:
          'This approach can be dangerous with health misinformation. Not all users have the expertise to evaluate medical claims, and false health information can lead people to make decisions that harm their health.',
        explanation:
          'While communities value open discussion, there\'s a difference between debatable opinions and demonstrably false claims that can cause real-world harm. Platforms have an ethical responsibility to prevent the spread of dangerous health misinformation.'
      },
      {
        text: 'Ban the user immediately',
        isCorrect: false,
        feedback:
          'This is likely too harsh unless the user has a pattern of sharing misinformation. Many people share false information unknowingly. Education and removal of the content is usually more appropriate than immediate banning.',
        explanation:
          'Most people who share misinformation aren\'t doing so maliciously. Progressive enforcement allows for education. However, repeated or intentional spreading of harmful misinformation may warrant stronger action.'
      }
    ]
  },
  {
    id: 3,
    category: 'spam',
    title: 'Self-Promotion',
    description:
      'A new member has joined the community and within their first day posted the same link to their business website five times across different discussion threads. The posts don\'t contribute to the conversations and are clearly promotional.',
    choices: [
      {
        text: 'Remove the spam posts and message the user about community guidelines',
        isCorrect: true,
        feedback:
          'Perfect approach! This addresses the immediate problem (spam) while educating the new member about community norms. Most communities allow some self-promotion when it\'s relevant and balanced with genuine participation.',
        explanation:
          'New members often don\'t understand community norms around self-promotion. Removing the spam and providing guidance helps them understand how to participate appropriately. Many successful communities allow promotional content when it\'s relevant, disclosed, and the member is an active contributor.',
        resources: [
          'Clear rules about self-promotion prevent spam while allowing valuable sharing',
          'The "9:1 rule" suggests 9 helpful contributions for every 1 promotional post',
          'New member education prevents future violations and builds better communities'
        ]
      },
      {
        text: 'Ban them immediately for spam',
        isCorrect: false,
        feedback:
          'This is too harsh for a first offense from a new member. While the behavior is clearly spam, they may not understand the community guidelines yet. Education is more effective than immediate banning in this situation.',
        explanation:
          'Unless it\'s obvious bot activity or malicious spam, new users deserve a chance to learn community norms. Immediate bans for first-time spam from real users often indicates overly aggressive moderation.'
      },
      {
        text: 'Leave the posts up - they might be helpful to someone',
        isCorrect: false,
        feedback:
          'Allowing obvious spam sets a bad precedent and degrades the community experience. The posts don\'t contribute to the discussions they were posted in and are clearly just promotional.',
        explanation:
          'Spam - even if the content might be relevant somewhere - disrupts conversations and makes communities less valuable. If you don\'t enforce anti-spam rules consistently, the community will quickly become overrun with promotional content.'
      },
      {
        text: 'Move all posts to a "promotions" channel',
        isCorrect: false,
        feedback:
          'While some communities have promotion channels, this doesn\'t address the spam behavior or educate the user. Simply moving the posts doesn\'t explain why their approach was problematic or how to participate appropriately.',
        explanation:
          'Moving content can work if your community has explicit promotion areas, but it must be combined with member education about when and how self-promotion is acceptable.'
      }
    ]
  },
  {
    id: 4,
    category: 'privacy',
    title: 'Sharing Personal Information',
    description:
      'During a heated argument, User A posts User B\'s full name, city, and workplace, saying "Everyone should know who this person really is." User B is clearly upset and concerned about their safety.',
    choices: [
      {
        text: 'Immediately remove the post and ban User A',
        isCorrect: true,
        feedback:
          'Absolutely correct! This is doxxing - sharing someone\'s personal information without consent, often with malicious intent. This is one of the most serious guideline violations because it can lead to real-world harassment or harm. Immediate removal and banning are appropriate.',
        explanation:
          'Doxxing violates both privacy and safety. It\'s often used as intimidation or to enable harassment. Most platforms treat this as a severe violation worthy of immediate account suspension because it can lead to stalking, harassment, swatting, or other real-world harm.',
        resources: [
          'Doxxing is illegal in many jurisdictions and violates most platform policies',
          'Personal information includes: real names (if not public), addresses, phone numbers, workplace details',
          'Protecting user privacy is fundamental to creating safe online spaces'
        ]
      },
      {
        text: 'Remove the post but only warn User A',
        isCorrect: false,
        feedback:
          'While removing the post is correct, a warning is too lenient for doxxing. This behavior is severe enough to warrant immediate suspension or banning because it endangers another member\'s safety.',
        explanation:
          'Some violations are severe enough to skip progressive enforcement. Doxxing, threats, and hate speech typically fall into this category because they pose immediate safety risks.'
      },
      {
        text: 'Leave it up - the information is publicly available',
        isCorrect: false,
        feedback:
          'This is very inappropriate. Even if information is publicly available somewhere, intentionally collecting and sharing someone\'s personal details to intimidate or harm them (doxxing) violates their privacy and safety. This creates a dangerous environment.',
        explanation:
          'Just because information can be found online doesn\'t mean it\'s appropriate to aggregate and share it, especially with malicious intent. Context matters - posting someone\'s details during an argument is threatening behavior.'
      },
      {
        text: 'Ask User A to remove it themselves',
        isCorrect: false,
        feedback:
          'This is far too passive for such a serious violation. Doxxing requires immediate moderator action. Waiting for the poster to voluntarily remove it leaves the victim exposed and sends a message that such behavior is tolerable.',
        explanation:
          'Moderators must act decisively on serious safety violations. Asking violators to self-moderate rarely works and can make victims feel unsupported and unsafe.'
      }
    ]
  },
  {
    id: 5,
    category: 'hate_speech',
    title: 'Coded Hate Speech',
    description:
      'A user posts a comment that uses coded language and dog whistles associated with hate groups, but doesn\'t include explicit slurs. Several members report feeling uncomfortable, and you recognize the phrases from known hate speech patterns.',
    choices: [
      {
        text: 'Remove the post and ban the user',
        isCorrect: true,
        feedback:
          'Correct decision! Coded hate speech is still hate speech. Hate groups intentionally use coded language to evade moderation while still spreading their ideology and making targeted groups feel unwelcome. Recognizing and removing this content is crucial for community safety.',
        explanation:
          'Modern hate speech often uses coded language, memes, and dog whistles specifically designed to fly under automated moderation. Effective moderators educate themselves about these patterns and enforce policies against both explicit and coded hate speech. This protects vulnerable members and prevents the community from becoming a haven for extremists.',
        resources: [
          'Coded language allows hate speech to spread while maintaining plausible deniability',
          'Context and patterns matter - what seems innocent to some is threatening to targeted groups',
          'Allowing coded hate speech normalizes extremism and drives away marginalized members'
        ]
      },
      {
        text: 'Leave it up since there are no explicit slurs',
        isCorrect: false,
        feedback:
          'This approach lets hate speech thrive in your community. Hate groups specifically use coded language to evade policies that only target explicit slurs. Members of targeted groups recognize these dog whistles and will feel unsafe.',
        explanation:
          'If you only moderate explicit slurs, you\'ll miss most modern hate speech. This makes your community unwelcoming to marginalized groups while creating space for extremists to recruit and spread ideology.'
      },
      {
        text: 'Ask the user to clarify what they meant',
        isCorrect: false,
        feedback:
          'This gives the user an opportunity to claim innocent intent while the harmful content remains visible. It also places burden on you to prove intent rather than enforcing the policy against harmful content regardless of claimed intent.',
        explanation:
          'Intent is less important than impact. Coded hate speech harms targeted community members whether or not the poster admits to hateful intent. Policies should focus on the content and its effects, not on proving the poster\'s state of mind.'
      },
      {
        text: 'Remove the post but only warn the user',
        isCorrect: false,
        feedback:
          'While removing the post is correct, hate speech (even coded) is typically severe enough to warrant immediate suspension or banning rather than just a warning. This protects vulnerable members and signals that such content is not tolerated.',
        explanation:
          'Hate speech - including coded versions - is generally considered a severe enough violation to skip straight to suspension or banning. A warning suggests the behavior might be tolerable with adjustment, which isn\'t appropriate for hate speech.'
      }
    ]
  },
  {
    id: 6,
    category: 'content',
    title: 'Controversial but Legal Content',
    description:
      'A member posts their opinion on a controversial political topic. The post is clearly biased toward one perspective but doesn\'t violate any explicit rules - no hate speech, threats, or misinformation. However, it\'s generating heated debate and multiple reports from members who disagree with the viewpoint.',
    choices: [
      {
        text: 'Leave the post up and monitor the discussion',
        isCorrect: true,
        feedback:
          'Excellent judgment! If content doesn\'t violate community guidelines, it shouldn\'t be removed just because it\'s controversial or generates reports. Healthy communities can handle difficult discussions. Your role is to ensure the conversation remains respectful, not to censor unpopular viewpoints.',
        explanation:
          'Over-moderation of controversial but rule-compliant content creates echo chambers and erodes trust. Communities benefit from diverse perspectives as long as discussions remain civil. Monitor for rule violations in the responses, but don\'t remove content simply because it\'s unpopular or generates reports.',
        resources: [
          'Report brigading (mass reporting of content people disagree with) is a real problem',
          'Moderators enforce rules, not popularity contests',
          'Clear guidelines help distinguish between harmful content and unpopular opinions'
        ]
      },
      {
        text: 'Remove it because it\'s too controversial',
        isCorrect: false,
        feedback:
          'This sets a bad precedent. If you remove content that doesn\'t violate rules simply because it\'s controversial, you\'re censoring based on viewpoint rather than enforcing consistent standards. This erodes community trust and creates echo chambers.',
        explanation:
          'Controversy alone isn\'t a reason for removal. Communities should be able to handle difficult discussions as long as they remain within the guidelines. Removing controversial but rule-compliant content based on disagreement rather than violations is a form of viewpoint discrimination.'
      },
      {
        text: 'Remove it because it generated many reports',
        isCorrect: false,
        feedback:
          'The number of reports shouldn\'t determine whether content violates guidelines. This approach allows organized groups to remove content they dislike through mass reporting, even if it doesn\'t break rules. Each report should be evaluated against actual guideline violations.',
        explanation:
          'Report brigading is a common tactic where groups mass-report content they disagree with. Moderators must evaluate reports based on whether content actually violates rules, not on report volume. Otherwise, you\'re allowing mob censorship.'
      },
      {
        text: 'Lock the post to prevent further debate',
        isCorrect: false,
        feedback:
          'If the discussion is following the rules, locking it prematurely stifles legitimate conversation. Lock posts when discussion becomes unmanageable or repeatedly violates rules, not simply because the topic is heated or controversial.',
        explanation:
          'Locking should be used when discussion consistently violates rules despite moderation, not as a preemptive measure against controversy. If members are following the guidelines, let the conversation continue even if it\'s passionate.'
      }
    ]
  }
];
