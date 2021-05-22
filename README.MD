# Vanilla_AI_Variations

An AI mod for Planetary Annihilation, seeking to push the vanilla AI to its limits

Vanilla_AI_Variations provides a set of AI personalities based off of the vanilla Absurd personality.

The individual personalities will change over time in order to become stronger.

This AI mod mostly exists for the purpose of experimentation; it does not seek to compete with the Q-Uber personalities from the Queller AI mod for the purpose of being the "strongest" AI or the most human-like.

Similarly, this AI mod also doesn't seek to provide variety in its AI personalities; Quitch and Wondible have better mods for that. Additionally, this AI mod doesn't seek to provide more granular AI difficulties; see the Normal+ personality in Quitch's AI Bugfixes and Enhancements (henceforth referred to as "QBE") for that.

## Personalities

Currently, there are three personalities which use the Vanilla AI's build rules, meaning that they benefit from mods like QBE.

- V_Arcturus_V
- V_Betelgeuse_V
- V_Canopus_V

These personalities and the strength relationship between them may vary over time. Currently, V_Arcturus_V and V_Betelgeuse_V can consistently beat the Absurd personality from either spawn on Lune 1v1, and I'm not aware of any maps where they lose from both spawns versus the Absurd personality. V_Canopus_V requires more testing in its current iteration.

These personalities can also trade versus Q-Gold from the Queller AI mod on non-Naval maps, although their playstyles are definitely less aesthetic than Q-Gold's and less fun to watch.

When QBE is enabled, V_Arcturus_V and V_Betelgeuse_V can win from both spawns on Lune 1v1 vs Q-Gold.

## Methodology

I ran a Swiss tournament for AI personalities (https://challonge.com/8pfxhr1h) in the past and created these AI personalities as an experiment based off of patterns that I observed while watching these matches.

### Minimizing Air Usage

The AI's neural network (whether vanilla or Queller; this does not change) for controlling air units is rather bad. The result is that the AI tends to make bad metal trades when using air. All of the V_AI_V personalities try to avoid large usage of air in order to achieve additional performance.

### Being Prideful For Increased Aggression

All V_AI_V personalities currently have slightly larger neural network modifiers. Normally, AIs in Planetary Annihilation run information available to them through a neural network in order to decide whether to commit to an engagement or retreat. The neural network modifier is a scalar multiplier on the result of the neural network; higher modifiers result in an "overconfident" AI that is more likely to chose engagements, while lower modifiers result in an "underconfident" AI that is more likely to abstain from engagements.

Early experiments with extremely high (e.g. 1.5) modifiers resulted in deteriorated performance, but the V_AI_V personalities are currently sitting at 1.35 and doing fine.

Additionally, humans playing with AI allies may find a more aggressive AI ally more useful, as they can draw enemy aggression and raid constantly. On the other hand, humans playing against AIs may find more aggressive AI opponents more annoying to deal with, as the AI is likely to stream in small groups of units from many angles simultaneously. (For the same reason, similar strategies are also popular in the earlygame in higher levels of human 1v1 when maps are large and open)

Pride is good.

### Being Greedy for Increased Expansion

Newer human players are sometimes advised that one should always try to float a small amount of energy, while stalling a small amount of metal is better than floating metal.

The V_AI_V personalities are currently more willing to stall metal than the Absurd AI, but are less willing to stall energy. The AIs are more willing to build an excessive amount of fabricators relative to their economy, which then translates to a heavier allocation of fabrication power to new economy structures, resulting in an economy that grows faster. This seems to result in similar performance to the base Absurd personality on most maps, but in certain situations where metal is plentiful (e.g. Wadiya or Lune), this can result in the V_AI_V personalities outscaling the based Absurd personality.

Greed is good.

### Delaying T2

The Vanilla AIs start their first T2 factory when they feel that they can afford it. This condition is affected by a multiplier, where a higher multiplier results in a higher economic threshold before the AI feels ready to build T2.

The current human meta favors delaying T2 for increased momentum while raiding with several T1 forces. Additionally, I have observed that AI personalities that attempt to enter T2 early perform poorly.

For these reasons, I tried experimenting with delayed T2; very high values like 1.75 resulted in diminished performance, but all V_AI_V personalities are currently at 1.5.

### Starting Vehicle First on Land Planets

AIs seem to be a bit stronger with Vehicle First than with Bot First on land planets. This is even more true when QBE is on, because QBE enables vanilla-derivative AI personalities to spam Strykers if they open Vehicle First.

### Heavier Orbital Usage

During the AI tournament, there was an interesting observation that orbital-based personalities seemed to do better than average despite the fact that every map played was single planet. This might've been a fluke due to the tournament only lasting 6 rounds.

However, an alternative hypothesis of mine is that being the first to an Orbital factory is advantageous for AIs for the following reasons:
- A recent patch reduced the cost of the Orbital Factory to 600 metal, so the first Hermes now costs (600 + 200), or the first Avenger now costs (600 + 300).
- In contrast, an Umbrella costs 900 metal.
- Even among human players, responding to a Hermes with an Umbrella is a trap; an Avenger is a better move since it can move and therefore cover more space.
- Vanilla AIs currently attempt to build an Umbrella immediately after detecting enemy Orbital, if they cannot field Orbital themselves

The less generous interpretation of my decision to experiment with early/heavier orbital on many of the V_AI_V personalities is that this allows them to trick an AI opponent into spending more metal spamming Umbrellas in response. The more generous interpretation is that it prevents the V_AI_V personalities from spamming Umbrellas in response to enemy orbital (which a player might otherwise try to use against them as an exploit).

Additionally, I have observed that many matches fought between non-Queller AI personalities ultimately end with one side sniping the other with 1-2 Helios, 1 Helios + 1 Nuke, or 2 Nukes. While 2 Helios is a rare way to end a game versus a human opponent, the tendency towards spamming Orbital among some of the V_AI_V personalities may make them:
1. More likely to pull off a Helios snipe versus another AI opponent
2. More likely to be able to prevent an opponent (whether human or AI) from sniping their commander with some combination of Helios, SXX, or Omega.

Not all of the V_AI_V personalities currently favor Orbital so heavily. This is currently the most suspect method I've used to squeeze out performance from the V_AI_V personalities, as its effect against other AIs might be far larger than its effect against human players. I.e. this might be a case where I've taught the V_AI_V personalities how to exploit other AIs.

