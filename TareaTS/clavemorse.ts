export class ClaveMorse {
    public translate = function(to_translate: string) {
        if (/[a-zA-Z0-9]+/.test(to_translate)) {
            return this.translateToClaveMorse(to_translate);
        } else {
            return this.translateToAlphanumeric(to_translate);
        }
    };

    public translateToClaveMorse = function(to_translate: string) {
        return to_translate.toLowerCase().split("").map(letter => {
            return this.mapa[letter] || letter;
        }).join(" ").replace(/\s+/g, " ");
    };

    public translateToAlphanumeric = function(to_translate: string) {
        return "Error: No se encuentra";
    };

    public mapa = {
        a: ". _",
        b: "_ . . .",
        c: "_ . _ .",
        d: "_ . .",
        e: ".",
        f: ". . _ .",
        g: "_ _ .",
        h: ". . . .",
        i: ". .",
        j: ". _ _ _",
        k: "_ . _",
        l: ". _ . .",
        m: "_ _",
        n: "_ .",
        o: "_ _ _",
        p: ". _ _ .",
        q: "_ _ . _",
        r: ". _ .",
        s: ". . .",
        t: "_",
        u: ". . _",
        v: ". . . _",
        w: ". _ _",
        x: "_ . . _",
        y: "_ . _ _",
        z: "_ _ . .",
        0: "_ _ _ _ _",
        1: ". _ _ _ _",
        2: ". . _ _ _",
        3: ". . . _ _",
        4: ". . . . _",
        5: ". . . . .",
        6: "_ . . . .",
        7: "_ _ . . .",
        8: "_ _ _ . .",
        9: "_ _ _ _ ."
    }
}
