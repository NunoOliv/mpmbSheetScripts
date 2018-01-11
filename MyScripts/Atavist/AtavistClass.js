
var iFileName = "AtavistClass.js"; 
RequiredSheetVersion(12.999);


ClassList["atavist"] = { 
	regExpSearch :  /atavist/i,
	name : "Atavist",
	source : ["HB", 0], 
	primaryAbility : "\n \u2022 Atavist: Constitution;", 
	prereqs : "\n \u2022 MyClass: Strength 13, Constitution 13;",
	die : 4,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5], 
	saves : ["Str", "Con"], 
	skills : ["\n\n" + toUni("MyClass") + ": Acrobatics, Animal Handling, Athletics, Arcana, Insight, Intimidation, Investigation, Survival.", "\n\n" + toUni("Atavist") + ": Choose one from Athletics, Intimidation, Perception, and Survival."],
	armor : [ 
		[true, true, false, true],
		[true, true, false, true] 
	],
	weapons : [
		[true, true],
		[true, true] 
	],
	equipment : "MyClass starting equipment:\n \u2022 Scale mail -or- leather armor, a longbow, and 20 arrows -or- any martial weapon;\n \u2022 battleaxe and a shield -or- greataxe;\n \u2022 A priest's pack -or- an explorer's pack.\n\nAlternatively, choose 4d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.", 
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],

	subclasses : ["Atavistic Aspect", ["slayer aspect"]], 
	
	// Spellcasting
	abilitySave : 3,
	spellcastingFactor : 2, 
	spellcastingKnown : {
		spells : "list",
		prepared : true, 
	},
	
	spellcastingList : {
		class : "any",
		level : [0, 7], 
		ritual : true, 
		//spells : ["courageous rebuttal", "cause fear", "detect magic", "detect poison and disease", "echo sunder", "expeditious retreat", "false life", "heroism", "inlict wounds", "jump", "lesser bloodsight", "longstrider", "ray of sickness", "withering necrosis", "alter self", "blindness/deafness", "cruorbat call", "darkvision", "enlarge/reduce", "hold person", "lesser restoration", "locate animals or plants", "needle and thread", "polyphemus's might", "protection from poison", "spider climb", "warding bond", "coalesce humours", "protection from energy", "redwood expansion", "water breathing", "water walk", "aura of decay", "blight", "death ward", "freedom of movement", "locate creature", "stoneskin", "quicken atavism", "contagion", "enervation", "exoscleroma", "exsanguinate", "greater restoration", "reincarnate", "steel wind strike", "bones of the earth", "flesh to stone", "haemorrhaging rupture", "harm", "wind walk", "eternal blood", "greater withering", "marrowmelt", "regenerate"], 
		spells : ["light", "mending"],
	},
	
	features : {
        "rend ichor" : {
            name :"Rend Ichor",
            sorce : ["HB",0],
            minlevel : 1,
            description : "\n   " + "Any time that a feature says that you can rend to a roll, it means that you can rend yourself and add the result of the rend die to the roll. You can rend yourself to damage rolls of melee and thrown weapon attacks. There is no limit on how many times you may rend per turn - for example, if you are two-weapon fighting, you can rend for the damage of each attack.",
            additional : ["1d4", "1d4", "1d4", "1d4", "1d4", "1d4", "2d4", "2d4", "2d4", "2d4", "2d4", "2d4", "2d4", "2d4", "3d4", "3d4", "3d4", "3d4", "3d4", "3d4"]
        },

        "unstopping heart" : {
            name :"Unstoping Heart",
            sorce : ["HB",0],
            minlevel : 1,
            description : "\n   " + "Once per turn, when you would be reduced to 0 hitpoints because of rend damage, you are instead reduced to 1 hitpoint. Additionally, you are proficient in Death saving throws."
        },

        "spellcasting" : {
			name : "Spellcasting",
			source : ["HB",0],
			minlevel : 2,
			description : "\n   " + "I can cast prepared Atavist spells, using Constitution as my spellcasting ability" + "\n   " + "I can use my body as a spellcasting focus" + "\n   " + "I can cast all atavist spells that I have prepared as rituals if they have the ritual tag"
        },
        
        "hardened viscera" : {
            name : "Hardened Viscera",
            source :["HB",0],
            minlevel : 2,
            description : "\n   " + "Any instance of damage you take is reduced by a flat amount" + "\n   " + "I am naturally adapted to hot and cold climates,and immune to Heavy precipitation and high altitude" + "\n   " + "I'm immune to disease, and your hitpoint maximum cannot be reduced.",
            additional : ["Damage reduction: 2", "Damage reduction: 2", "Damage reduction: 2", "Damage reduction: 2", "Damage reduction: 2", "Damage reduction: 2", "Damage reduction: 4", "Damage reduction: 4", "Damage reduction: 4", "Damage reduction: 4", "Damage reduction: 4", "Damage reduction: 4", "Damage reduction: 4", "Damage reduction: 4", "Damage reduction: 4", "Damage reduction: 4", "Damage reduction: 4", "Damage reduction: 4", "Damage reduction: 4", "Damage reduction: 4"],
            savetxt : {
				text : ["immune to Heavy precipitation and high altitude", "immune to disease, and your hitpoint maximum cannot be reduced"],
			}
		},
		
		"subclassfeature3" : { 
			name : "Atavistic Aspect",
			source : ["HB",0],
			minlevel : 3,
			description : "\n   " + "Choose a Atavist aspect you strive to emulate and put it in the \"Class\" field"
		},

        "avenging attack" : {
			name : "Avenging Attack",
			source : ["HB",0],
			minlevel : 5,
            description : "\n   " + "When an attack hits you, you fail a saving throw, or you fail an ability check which requires an action, you can make a weapon attack against any creature within range as a reaction.",
            action : ["reaction", ""]
        },

        "humansbane" : {
			name : "Humansbane",
			source : ["HB",0],
			minlevel : 6,
            description : "\n   " + "If i land an attack on a hummanoid and rend to its damage, the creature is destroid if his CR is below a certain threshold.",
            additional : ["Threshold: 1/2","Threshold: 1/2","Threshold: 1/2","Threshold: 1/2","Threshold: 1/2","Threshold: 1/2","Threshold: 1/2","Threshold: 1/2","Threshold: 1/2","Threshold: 1","Threshold: 1","Threshold: 1","Threshold: 1","Threshold: 2","Threshold:2","Threshold: 2","Threshold: 2","Threshold: 3","Threshold: 3","Threshold: 3"]
        },

        "greater viscera" : {
			name : "Greater Viscera",
			source : ["HB",0],
			minlevel : 7,
            description : "\n   " + "If i land an attack on a hummanoid and rend to its damage, the creature is destroid if his CR is below a certain threshold.",
            choices : ["Plasma Elasticity", "Greedy Render", "Bastion Countenance"], 
			"plasma elasticity" : { 
				name : "Plasma Elasticity", 
				description : "\n   " + "Whenever damage is rolled against you (except from rending), your next rend dice are maximized if used within 1 minute."
            },

            "greedy render" : { 
                name : "Greedy Render",
                description : "\n   " + "Whenever damage is rolled against you (except from rending) by a hostile creature, your next immediate rend doesn't cost you hitpoints if used within 1 minute." 
            },

            "bastion countenance" : { 
                name : "Bastion Countenance", 
                description : "\n   " + "When you are hit by an attack, you can rend yourself as a reaction creating a wall of blood. You gain a bonus to AC against that attack equal to your rend, potentially causing the attack to miss." 
            }
		},
		
        "sanguine sacraments(5)" : {
            name : "Sanguine Sacraments(5)",
            source : ["HB",0],
            minlevel : 14,
            description : "\n   " + "I can choose one spell from the atavist spell list of 5th level" + "\n   " + "I can cast this spell once per long rest without needing to use a spell slot",
            spellcastingBonus : {
                name : "Sanguine Sacraments(5)",
                "class" : "atavist",
                level : [5, 5],
                oncelr : true
            }
        },

        "sanguine sacraments(6)" : {
            name : "Sanguine Sacraments(6)",
            source : ["HB",0],
            minlevel : 17,
            description : "\n   " + "I can choose one spell from the atavist spell list of 6th level" + "\n   " + "I can cast this spell once per long rest without needing to use a spell slot",
            spellcastingBonus : {
                name : "Sanguine Sacraments(6)",
                "class" : "atavist",
                level : [6, 6],
                oncelr : true
            },
        },

        "sanguine sacraments(7)" : {
            name : "Sanguine Sacraments(7)",
            source : ["HB",0],
            minlevel : 20,
            description : "\n   " + "I can choose one spell from the atavist spell list of 7th level" + "\n   " + "I can cast this spell once per long rest without needing to use a spell slot",
            spellcastingBonus : {
                name : "Sanguine Sacraments(7)",
                "class" : "atavist",
                level : [7, 7],
                oncelr : true
            },
        },

        "night immortality" : {
			name : "Night Immortality",
			source : ["HB",0],
			minlevel : 20,
			description : "\n   " + "kill. Your body ceases to age, and if you die and at least one part of your body exists, such as a inger joint or an eye, your body can regrow from that part over the course of one day. At the end of that day, you will return to life with 1 hit point. If you were killed due to the disentegrate spell or a similar effect, or all of your body has been burned or otherwise ruined, this feature has no effect.",
		}
    }
};

ClassSubList["slayer aspect"]= {
	regExpSearch : /slayer/i,
	subname : "Slayer Aspect",
	source : ["HB", 0], 
	fullname : "Slayer Atavist",
	
	"subclassfeature3" : { 
		name : "Fighting Style", 
		source : ["HB",0],
		minlevel : 3,
		description : "\n   " + "Choose a Fighting Style using the \"Choose Feature\" button above",
		choices : ["Archery", "Dueling", "Two-Weapon Fighting", "Throwing"],
		"archery" : FightingStyles.archery,
		"dueling" : FightingStyles.dueling,
		"two_weapon fighting" : FightingStyles.two_weapon,
		"throwing" : { 
			name : "Throwing Fighting Style",
			description : "\n   " + "You gain a +2 bonus to to ranged attack rolls you make with a thrown weapon. Whenever you make a ranged attack with a thrown weapon, you can immediately draw another weapon as part of the attack.",
		
			calcChanges : {
					
				atkAdd : ["if (fields.Description.match(/^(?=.*thrown).*$/i)) {fields.Description += ', +2 on Ranged Attacks';}; ", ""],
			}
		},
	},    

	"subclassfeature3.1" : { 
		name : "Lethal Strike",
		source : ["HB",0],
		minlevel : 3,
		description : "\n   " + "Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack cannot be made with a reach or heavy weapon. You don't need advantage on the attack roll if there is no other hostile creature within 5 feet of the target, or if one of your allies is within 5 feet of it.",
		additional : ["", "", "1d6", "1d6", "1d6", "2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6"],
	},
	"subclassfeatur6" : {
		name : "Skirmisher",
		source : ["HB",0],
		minlevel : 6,
		description : "\n   " + "You gain proiciency in the Survival and Stealth skills, and for one of those skills of your choice, you double your proiciency bonus for any ability checks made withthat skill. Additionally, you can take the Hide action as a bonus action.",
		skillstxt : "\n\n" + toUni("Slayer Atavist (Skirmisher)") + ": Gain proficiency with Survival and Stealth skills, gain expertise in one of them.",
		skills : ["Survival", "Stealth"],
		action : ["bonus action", "Hide"]
	},
	"subclassfeature10" : {
		name : "Cruorbent Accuracy",
		source : ["HB",0],
		minlevel : 10,
		description : "\n   " + "At 10th level, you can rend yourself to attack roll." + "\n   " + "Additionally, when you rend to an attack roll, you're able to use your Lethal Strike feature even if you don't meet the prerequisites.",
		usages : "Constitution modifier per ",
		usagescalc : "event.value = tDoc.getField('Con Mod').value;",
		recovery : "long rest",
	},
	"subclassfeature18" : {
		name : "Coup de Grâce",
		source : ["HB",0],
		minlevel : 18,
		description : "\n   " + "as an action, you can attempt to kill a creature with an attack. If you hit them and that creature has 150 hitpoints left after you damage them or fewer, they die.",
		recovery : "long rest",
		usages : 1,
		action : ["action", ""]
	},
	
};

SpellsList["courageous rebuttal"] = {
	name : "Courageous Rebutal",
	classes : ["atavist"],
	source : ["HB",0],
	ritual : false,
	level : 1,
	school : "Abjur",
	time : "1 Reaction",
	range : "10 feet",
	components : "V,S,M",
	duration  : "Instantaneous",
	description : "As reaction make a melee weapon attack against creature that attacked you after they hit or miss. On hit gain half the damage dealt in temp HP until end of your next turn"
};

SpellsList["echo sunder"] = {
	name : "Echo Sunder",
	classes : ["atavist"],
	source : ["HB",0],
	ritual : false,
	level : 1,
	school : "Necro",
	time : "1 Action",
	range : "10 feet",
	components : "V,S,M",
	duration  : "Instantaneous",
	description : "Make a melee attack with weapon. Add 1d6 to attack roll. On hit next instance of weapon damage is maximized"
};
