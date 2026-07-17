# LEGAL-TODO — Bras de Fer, restaurant, bar & cave

> **Ne pas mettre en ligne avant d'avoir traité la section 1.**
> État au 17 juillet 2026. Aucune donnée n'a été inventée : tout ce qui n'a pas pu être
> vérifié à une source est marqué `[à fournir]` ou `[à confirmer]` et apparaît **en
> surbrillance rose sur le site lui-même**, exprès — pour qu'un trou se voie au lieu de se
> combler avec une supposition.

---

## 1. Bloquant avant la mise en ligne

### 1.1 ⛔ L'éditeur désigné n'est peut-être pas le bon — à trancher en premier

**C'est le point le plus grave de ce document.** Les mentions légales désignent aujourd'hui la
société **BRAS DE FER (SAS, SIREN 935 074 716)** comme éditrice du site. Ce rattachement
**n'est pas établi** : il est **déduit de la seule adresse**.

Ce qui cloche :

| Constat | Détail |
|---|---|
| **APE incohérent** | Le registre déclare **68.10Z — marchands de biens immobiliers**. Un restaurant-bar-cave relève normalement de **56.10A** ou **56.30Z**. Ce n'est pas le code d'un débit de boissons. |
| **Aucune enseigne déclarée** | Aucun établissement, aucune enseigne « Bras de Fer » n'est enregistré. Le tableau `etablissements` du registre est **vide**. |
| **Une autre entité à la même adresse** | Une **SCI (GRANITE)**, dirigée par les mêmes personnes (David Boudeau, Benjamin Ferchaud), est domiciliée au 20 boulevard de la Prairie au Duc. |
| **Le seul lien est l'adresse** | La société porte le nom du lieu et son siège est à l'adresse du bar. C'est tout. |

**Deux lectures possibles, et il faut savoir laquelle est la bonne :**

1. **La SAS BRAS DE FER exploite bien le bar**, et son code APE est simplement **mal déclaré**
   (erreur fréquente à l'immatriculation, quand l'objet social a évolué). → il faut faire
   **corriger le code APE auprès de l'INSEE**, et les mentions légales sont justes.
2. **Le bar est exploité par une AUTRE société** — filiale d'exploitation, société
   d'exploitation distincte du porteur immobilier — et la SAS BRAS DE FER n'est qu'une
   structure de portage. → **les mentions légales désignent alors le mauvais éditeur**, ce qui
   est précisément la faute à éviter : l'article 6 III LCEN impose d'identifier le véritable
   éditeur.

Le montage SCI (immobilier) + SAS à APE immobilier suggère une structuration patrimoniale, ce
qui **rend l'hypothèse n° 2 plausible**. Mais ce n'est qu'une hypothèse : **rien n'a été
tranché ici, et rien ne doit l'être sans le client.**

**Question à poser au client, telle quelle :**
> « Quelle société exploite le bar et encaisse les recettes ? Est-ce bien la SAS BRAS DE FER
> (SIREN 935 074 716), ou une autre structure ? Sur quel SIREN est établie la licence
> d'exploitation du débit de boissons ? »

La réponse à la question sur la **licence IV** tranche le débat : la licence est délivrée à
l'exploitant réel. C'est le moyen le plus rapide de lever le doute.

> Le doute est signalé **sur les deux pages** du site (encadré rouge `.legal-source--alerte`
> dans `mentions-legales.html` et `confidentialite.html`), pas seulement ici. Il concerne aussi
> le **responsable de traitement RGPD** : si l'exploitant est une autre société, c'est elle la
> responsable.

### 1.2 Identité de l'éditeur (`mentions-legales.html`)

À compléter **une fois la question 1.1 tranchée** — inutile de collecter ces données pour la
mauvaise société.

| Donnée | État |
|---|---|
| Capital social | **manquant** — obligatoire pour une SAS, ne figure dans aucun registre public |
| RCS | **à confirmer** — « RCS Nantes 935 074 716 » est la forme attendue, non vérifiée à une source |
| Directeur de la publication | **manquant** — la société déclare **un président** (David Boudeau) et **deux directeurs généraux** (Benjamin Ferchaud, Nicolas Ferchaud). Par défaut c'est le président ; à confirmer nommément. |
| E-mail | **manquant** — apparaît dans les mentions légales, la confidentialité et le bloc accessibilité |
| Type de licence débit de boissons | **manquant** — voir § 1.1, la réponse tranche aussi la question de l'éditeur |
| Dépôt de marque « Bras de Fer » | **non vérifié** — aucune recherche INPI n'a été faite |

Le téléphone (**02 72 01 66 30**) est repris du site : il est déjà renseigné partout.

### 1.3 Hébergeur (article 6 III-1 LCEN — obligatoire)

Nom, adresse, téléphone et site de l'hébergeur. **Aucun hébergeur définitif n'est arrêté**,
donc les quatre champs sont vides dans `mentions-legales.html`, et la durée de conservation des
journaux de connexion est vide dans `confidentialite.html`.

Le site tourne actuellement sur **Vercel** (`brasdefer-site.vercel.app`, projet
`brasdefer-site`), mais c'est une **URL de préproduction**, pas une décision d'hébergement
arrêtée ni un domaine final. Une fois l'hébergeur retenu, vérifier s'il implique un
**transfert hors UE** (section correspondante de `confidentialite.html`).

### 1.4 Photographies — aucun crédit n'est connu

**Aucun auteur de photographie n'a pu être identifié**, et aucun crédit n'existe sur le site.
Les champs sont donc vides dans `mentions-legales.html` :

- `[auteur des photographies à fournir]`
- `[étendue de la cession de droits à fournir]`

À obtenir : qui a pris les photos, et ce qui a été cédé (support, durée, territoire). Les
personnes reconnaissables — **notamment sur les photos de soirées** — doivent avoir donné leur
autorisation au titre du droit à l'image.

> **Rappel projet, à ne pas perdre de vue** : les **photos HD de ce site manquent toujours**.
> Plusieurs images (`facade-hd.jpg`, `terrasse-hd.jpg`, `soiree-hd.jpg`, `cave-hd.jpg`) portent
> le suffixe `-hd` mais restent à remplacer par les vrais fichiers haute définition du client.
> Ce point est **antérieur** aux pages légales et n'est pas résolu par ce lot de travail — mais
> quand les vraies photos arriveront, elles arriveront **avec un auteur**, et c'est le bon
> moment pour régler le crédit et la cession de droits d'un seul coup.

### 1.5 Les affiches de soirées sont des exemples, pas la programmation

La section « Soirées » de `index.html` affiche cinq affiches avec des dates précises
(« Samedi 18 mai », « Jeudi 23 mai », « Vendredi 31 mai », « Samedi 1er juin »…) et des
mentions « Prix libre ». **Ces dates n'ont été vérifiées nulle part** et ressemblent à du
contenu de maquette.

Annoncer un événement qui n'a pas lieu, ou un « prix libre » qui n'en est pas un, engage
l'établissement. Ces affiches doivent être **remplacées par la vraie programmation** ou
clairement présentées comme des exemples avant la mise en ligne. Le point est signalé dans la
section « Responsabilité » des mentions légales.

### 1.6 Vérifier avant publication

```bash
grep -rn "à fournir\|à confirmer" *.html    # ne doit plus rien renvoyer
```

---

## 2. Ce qui a été vérifié (et n'est donc pas à redemander)

Relevé le **17 juillet 2026** au registre national des entreprises via l'API publique
`recherche-entreprises.api.gouv.fr` :

- Dénomination : **BRAS DE FER**
- Forme : **SAS** — société par actions simplifiée (code INSEE 5710)
- Siège : **20 boulevard de la Prairie au Duc, 44200 Nantes**
- SIREN : **935 074 716** · SIRET siège : **935 074 716 00017**
- TVA : **FR68935074716**
- APE : **68.10Z — marchands de biens immobiliers** ⚠️ **incohérent, voir § 1.1**
- Immatriculation : **25 octobre 2024**
- Président : **David Boudeau** · Directeurs généraux : **Benjamin Ferchaud**, **Nicolas Ferchaud**
- Coordonnées GPS du siège : **47.2050929324282, -1.55734753452229**
- État administratif : **actif**
- Enseigne déclarée : **aucune** · Établissements déclarés : **aucun**

> ⚠️ **Ces données sont exactes, mais elles ne prouvent pas que cette société édite le site.**
> Voir § 1.1. C'est la seule entité identifiée à l'adresse, ce n'est pas la même chose qu'une
> preuve.

**Licences des polices** — vérifiées le 17 juillet 2026 dans le dépôt `google/fonts` :

| Police | Licence |
|---|---|
| Chelsea Market | SIL OFL 1.1 |
| Pangolin | SIL OFL 1.1 |
| Protest Strike | SIL OFL 1.1 |
| Caveat | SIL OFL 1.1 |
| Courier Prime | SIL OFL 1.1 |
| **Permanent Marker** | **Apache License 2.0** — *pas* OFL, contrairement aux cinq autres |

---

## 3. Pages légales : ce qui a été créé, et ce qui ne l'a pas été

### Créées

| Page | Pourquoi |
|---|---|
| `mentions-legales.html` | Obligatoire (art. 6 III LCEN) pour tout site édité par une société. Contient la section **Vente d'alcool** (art. L3342-1 code de la santé publique). |
| `confidentialite.html` | Transparence RGPD sur les journaux de l'hébergeur et les liens sortants, même sans collecte. Contient la section cookies (ancre `#cookies`). |
| `sitemap.xml` | **N'existait pas.** Créé avec les cinq pages du site. ⚠️ Il utilise le domaine Vercel de préproduction — **à corriger dès qu'un domaine définitif est arrêté**. |

> **Le site n'avait aucune mention légale** : le pied de page pointait vers trois liens morts
> (`href="#"`) — « Mentions légales », « CGV », « Politique de confidentialité ». C'était un
> manquement à l'article 6 LCEN, que ce lot comble.

### Volontairement non créées

| Page | Pourquoi pas |
|---|---|
| **CGV** | Ce site ne vend rien : aucun paiement, aucun module de réservation, le bouton « Réserver » est un lien `tel:`. Une CGV serait un document sans objet. **Le lien « CGV » mort du pied de page a donc été retiré** plutôt que pointé vers une page vide. Si la maison vend en ligne un jour (billetterie de soirées, bons cadeaux, vente de bouteilles à distance), il faudra en rédiger. |
| **CGU** | Aucun compte, aucun contenu déposé par l'utilisateur, aucun service interactif. Sans objet. |
| **Droit de rétractation** | Pas de vente à distance depuis ce site. |
| **Bannière de consentement cookies** | Voir § 4. |
| **`robots.txt`** | N'existait pas et n'a pas été créé : sans domaine définitif, il pointerait un sitemap provisoire. À créer avec le domaine final. |

---

## 4. Cookies, traceurs, données

### Ce que le site fait réellement — vérifié le 17 juillet 2026

| | |
|---|---|
| Cookies déposés | **aucun** |
| Stockage local | **aucun** — aucun `localStorage`, aucun `sessionStorage` dans le code |
| Mesure d'audience | **aucune** — aucun `gtag`, aucun `analytics`, aucun `fbq` |
| Formulaires | **aucun** — aucune balise `<form>` |
| Iframes | **aucune** — aucune balise `<iframe>` |
| Comptes utilisateurs | **aucun** |
| Newsletter | **aucune** |
| Paiement | **aucun** |
| Requêtes vers des tiers | **aucune**, depuis le rapatriement des polices — voir ci-dessous |

Méthode : `grep -rn -iE 'cookie|localStorage|sessionStorage|gtag|analytics|fbq|<iframe|<form'`
sur tous les `.html` et `.js` → **zéro résultat**. Extraction de toutes les URL absolues des
pages → seuls subsistent des **liens sortants** (Instagram, Facebook, Google Maps), qui ne
chargent rien tant qu'on ne clique pas.

### Pourquoi il n'y a pas de bannière

L'article 82 de la loi Informatique et Libertés impose le consentement **avant tout dépôt de
cookie non strictement nécessaire**. Aucun cookie n'étant déposé, il n'y a rien à consentir.
Une bannière serait une gêne sans objet. C'est un choix argumenté, pas un oubli.

**Ce qui déclencherait l'obligation d'en poser une :**

- ajouter Google Analytics, Matomo (en mode non exempté), un pixel Meta ou tout traceur ;
- **intégrer une carte Google Maps en `<iframe>`** (aujourd'hui l'itinéraire est un simple lien
  sortant, exprès) ;
- **intégrer un module de réservation** dans les pages (aujourd'hui « Réserver » est un lien
  `tel:`, exprès) ;
- intégrer une vidéo, un widget Instagram ou Facebook, une billetterie de soirées ;
- **recharger les polices depuis Google Fonts** — voir ci-dessous.

Dans ces cas : dispositif Refuser / Accepter / Personnaliser, refus aussi simple que
l'acceptation, aucun dépôt avant consentement, lien permanent de modification du choix dans le
pied de page.

### Polices — ce qui a changé le 17 juillet 2026

Le site chargeait **Protest Strike, Permanent Marker, Caveat et Courier Prime depuis
`fonts.googleapis.com` et `fonts.gstatic.com`** (Chelsea Market et Pangolin étaient déjà
locales, en `.ttf`). Chaque visite transmettait donc l'adresse IP du visiteur à Google, sans
consentement — le point précis sur lequel la CNIL et plusieurs autorités européennes ont
sanctionné des éditeurs.

Les quatre familles sont désormais **auto-hébergées** dans `assets/fonts/` : sous-ensembles
**latin + latin-ext** uniquement, **11 fichiers woff2, ~228 Ko** au total. Caveat est une
police **variable** (axe `wght` 400→700), servie en un seul fichier par sous-ensemble au lieu
de deux. Les `<link>` et `<preconnect>` vers Google ont été retirés de **toutes** les pages,
les `@font-face` ajoutés en tête de `styles.css`, et deux `<link rel="preload">` posés sur les
polices de première vue.

**Test de non-régression :**

```bash
grep -rn 'googleapis\|gstatic' . --include='*.html' --include='*.css'   # doit être vide
```

Puis : ouvrir l'onglet Réseau, filtrer sur « third-party ». Le compte doit rester à zéro.

---

## 5. À vérifier après la mise en ligne

- [ ] **§ 1.1 tranché** : la société éditrice est confirmée, et l'APE corrigé le cas échéant
- [ ] `grep -rn "à fournir\|à confirmer" *.html` ne renvoie plus rien
- [ ] Les crédits photo sont renseignés, et les photos HD ont remplacé les fichiers actuels
- [ ] La programmation des soirées est réelle (ou présentée comme illustrative)
- [ ] `sitemap.xml` pointe le **domaine définitif**, pas l'URL Vercel
- [ ] Un `robots.txt` est créé avec le domaine définitif
- [ ] Les `<link rel="canonical">` des deux pages légales pointent le domaine définitif
- [ ] Le site est déclaré dans Google Search Console
- [ ] La fiche Google Business est cohérente avec les horaires du site
- [ ] Aucune requête tierce dans l'onglet Réseau
- [ ] `document.cookie` est vide

---

## 6. Divers — relevé au passage

- **`assets/fonts/SregsSerif-Heavy.otf` n'est utilisé nulle part** (aucune référence dans
  `styles.css` ni dans les `.html`). 16 Ko de fichier mort — et une police dont la licence n'a
  pas été vérifiée, ce qui est une bonne raison de plus de la supprimer si elle ne sert pas.
- Le site n'avait ni `canonical`, ni `sitemap.xml`, ni `robots.txt`, ni domaine propre. Les
  `canonical` des deux pages légales utilisent l'URL Vercel faute de mieux — **à reprendre**.
- Les pages légales réutilisent la nav simplifiée des sous-pages (`cave.html`, `menu.html`) :
  marque + « ← Retour au site », sans burger. La règle CSS `.menu-page .nav .nav__resa` a été
  étendue à `.legal-page` pour que le bouton reste visible sur mobile.
