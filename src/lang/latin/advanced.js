import { regex, replace, collapse } from "../../common.js";
import encoder_simple from "./simple.js";

// Phonetic Normalization

const regex_ae = regex("ae"),
    regex_ai = regex("ai"),
    regex_ay = regex("ay"),
    regex_ey = regex("ey"),
    regex_oe = regex("oe"),
    regex_ue = regex("ue"),
    regex_ie = regex("ie"),
    regex_sz = regex("sz"),
    regex_zs = regex("zs"),
    regex_ck = regex("ck"),
    regex_cc = regex("cc"),
    regex_sh = regex("sh"),
    regex_th = regex("th"),
    regex_dt = regex("dt"),
    regex_ph = regex("ph"),
    regex_pf = regex("pf"),
    regex_ou = regex("ou"),
    regex_uo = regex("uo");

const pairs = [
    regex_ae, "a",
    regex_ai, "ei",
    regex_ay, "ei",
    regex_ey, "ei",
    regex_oe, "o",
    regex_ue, "u",
    regex_ie, "i",
    regex_sz, "s",
    regex_zs, "s",
    regex_sh, "s",
    regex_ck, "k",
    regex_cc, "k",
    regex_th, "t",
    regex_dt, "t",
    regex_ph, "f",
    regex_pf, "f",
    regex_ou, "o",
    regex_uo, "u"
];

export default function(string, _skip_post_processing){

    if(!string){

        return string;
    }

    // perform simple encoding
    string = encoder_simple(string);

    // normalize special pairs
    if(string.length > 2){

        string = replace(string, pairs);
    }

    if(!_skip_post_processing){

        // delete all repeating chars
        if(string.length > 1){

            string = collapse(string);
        }
    }

    return string;
}
