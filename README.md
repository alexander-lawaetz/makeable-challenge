# makeable-challenge

Bruger dummy creditionals behøves ikke, brug jeres præference username & password.

Local repository

```
mkdir temp-folder
git remote add https://github.com/alexander-lawaetz/makeable-challenge.git
npm install
npm run dev
```

Preview [Vercel Deployment](https://makeable-challenge.vercel.app/)

Opgave:

```Web front-end udfordring

Udfordringen lyder som følgende:

Du skal lave en Vue.js single-page-application ved brug af Typescript indeholdende en
simpel quiz baseret på et REST API fra https://opentdb.com.

Brug nogle timer på at løse så mange af nedenstående opgaver som muligt (løsningen
skal være fungerende).

Brug gerne et css-framework med standard GUI-elementer efter eget valg. Der bliver
ikke lagt vægt på et custom design, men på et godt brugerinterface.

Der er følgende krav til opgaven:

● Brugeren skal kunne ‘logge ind’ med en vilkårlig dummy email/password, hvorefter en
session token (https://opentdb.com/api_config.php) tilføjes på alle efterfølgende
API-kald

● En ‘logget ind’ bruger skal via en navigationsbar kunne navigere mellem 3 identiske
sider, der indeholder spørgsmål med hver deres sværhedsgrad

● Hver side skal kunne vise et grid med multiple-choice spørgsmål fra API’en

● Brugeren skal kunne svare på spørgsmålene og få respons på, om de har svaret
korrekt.

● Brugeren skal kunne ‘logge ud’ (glemme session-tokenen og sendes tilbage til log-ind
siden)

Der er følgende bonusopgaver:

● Bonus Level 1: Benyt TailwindCSS og/eller TailwindUI som CSS framework

● Bonus Level 2: Benyt et state-management library som Pinia eller Vuex til
API-kommunikation og caching af spørgsmål

● Bonus Level 3: Gør designet responsivt

● Bonus Level 4: Host løsningen via cloud fx Firebase Hosting
```
