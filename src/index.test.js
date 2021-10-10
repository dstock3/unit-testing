import { capitalize, reverseString, calculator, analyze, caesar } from './index'

// Capitalize 

test('capitalize the first letter of a string', () => {
    expect(capitalize("david")).toBe("David");
});

test('works with spaces', () => {
    expect(capitalize('the first letter of this sentence should be capitalized.')).toBe('The first letter of this sentence should be capitalized.')
});

// ReverseString

test('takes a string and returns it reversed', () => {
    expect(reverseString("mittens")).toBe("snettim");
});

test('works with long strings', () => {
    expect(reverseString("there is hope, but not for us")).toBe("su rof ton tub ,epoh si ereht");
});

test('reverse a string and make sure it works on palindromes', () => {
    expect(reverseString("level")).toBe("level");
});

// Calculator

test('addition', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('subtract', () => {
    expect(calculator.subtract(4, 1)).toBe(3);
});

test('multiply', () => {
    expect(calculator.multiply(5, 6)).toBe(30);
});

test('divide', () => {
    expect(calculator.divide(30, 5)).toBe(6);
});

// Analyze

test('analysis', () => {
    expect(analyze([0, 1, 2, 3, 4, 5])).toStrictEqual({average: 2.5, min: 0, max: 5, length: 6});
});

test('new analysis', () => {
    expect(analyze([7, 22, 13, 23, 4])).toStrictEqual({average: 13.8, min: 4, max: 23, length: 5});
});

test('odin analysis', () => {
    expect(analyze([1,8,3,4,2,6])).toStrictEqual({average: 4, min: 1, max: 8, length: 6});
});

// Caesar

test('shift 1', () => {
    expect(caesar("mittens", 1)).toBe("njuufot")
});

test('shift 2', () => {
    expect(caesar("mittens", 2)).toBe("okvvgpu")
});

test('shift 7', () => {
    expect(caesar("mittens", 7)).toBe("tpaaluz")
});

test('shift 9', () => {
    expect(caesar("mittens", 9)).toBe("vrccnwb")
});

test('works with an extremely high shift', () => {
    expect(caesar("mittens", 100)).toBe("ieppajo")
});

test('works with punctuation and capitalized letters', () => {
    expect(caesar("Jerry, hello.", 3)).toBe("Mhuub, khoor.");
});

test('works with sentence length strings', () => {
    expect(caesar("The cost of the course was too high, I thought.", 5)).toBe("Ymj htxy tk ymj htzwxj bfx ytt mnlm, N ymtzlmy.");
});

test('works with a paragraph', () => {
    expect(caesar("He didn’t say any more, but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I’m inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores. The abnormal mind is quick to detect and attach itself to this quality when it appears in a normal person, and so it came about that in college I was unjustly accused of being a politician, because I was privy to the secret griefs of wild, unknown men. Most of the confidences were unsought — frequently I have feigned sleep, preoccupation, or a hostile levity when I realized by some unmistakable sign that an intimate revelation was quivering on the horizon; for the intimate revelations of young men, or at least the terms in which they express them, are usually plagiaristic and marred by obvious suppressions. Reserving judgments is a matter of infinite hope. I am still a little afraid of missing something if I forget that, as my father snobbishly suggested, and I snobbishly repeat, a sense of the fundamental decencies is parcelled out unequally at birth.", 7)).toBe("Ol kpku’a zhf huf tvyl, iba dl’cl hsdhfz illu bubzbhssf jvttbupjhapcl pu h ylzlyclk dhf, huk P buklyzavvk aoha ol tlhua h nylha klhs tvyl aohu aoha. Pu jvuzlxblujl, P’t pujspulk av ylzlycl hss qbkntluaz, h ohipa aoha ohz vwlulk bw thuf jbypvbz uhabylz av tl huk hszv thkl tl aol cpjapt vm uva h mld clalyhu ivylz. Aol hiuvyths tpuk pz xbpjr av klalja huk haahjo pazlsm av aopz xbhspaf dolu pa hwwlhyz pu h uvyths wlyzvu, huk zv pa jhtl hivba aoha pu jvsslnl P dhz buqbzasf hjjbzlk vm ilpun h wvspapjphu, iljhbzl P dhz wypcf av aol zljyla nyplmz vm dpsk, buruvdu tlu. Tvza vm aol jvumpklujlz dlyl buzvbnoa — mylxbluasf P ohcl mlpnulk zsllw, wylvjjbwhapvu, vy h ovzapsl slcpaf dolu P ylhspglk if zvtl butpzahrhisl zpnu aoha hu puapthal ylclshapvu dhz xbpclypun vu aol ovypgvu; mvy aol puapthal ylclshapvuz vm fvbun tlu, vy ha slhza aol alytz pu dopjo aolf lewylzz aolt, hyl bzbhssf wshnphypzapj huk thyylk if vicpvbz zbwwylzzpvuz. Ylzlycpun qbkntluaz pz h thaaly vm pumpupal ovwl. P ht zapss h spaasl hmyhpk vm tpzzpun zvtlaopun pm P mvynla aoha, hz tf mhaoly zuviipzosf zbnnlzalk, huk P zuviipzosf ylwlha, h zluzl vm aol mbukhtluahs kljlujplz pz whyjlsslk vba bulxbhssf ha ipyao.");
});
