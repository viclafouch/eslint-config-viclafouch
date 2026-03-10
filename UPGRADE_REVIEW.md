# Revue des mises à jour des dépendances

> Généré le 2026-03-10 — Fichier temporaire à supprimer après traitement.

---

## Table des matières

1. [ESLint 10 (FOCUS)](#eslint-10)
2. [typescript-eslint](#typescript-eslint)
3. [eslint-plugin-unicorn](#eslint-plugin-unicorn)
4. [eslint-plugin-react-hooks](#eslint-plugin-react-hooks)
5. [eslint-plugin-react](#eslint-plugin-react)
6. [eslint-plugin-testing-library](#eslint-plugin-testing-library)
7. [@next/eslint-plugin-next](#nexteslint-plugin-next)
8. [eslint-plugin-import](#eslint-plugin-import)
9. [Autres dépendances (pas de changements majeurs)](#autres-dépendances)

---

## ESLint 10

**Statut** : Stable, v10.0.3 (6 mars 2026)
**Version actuelle du projet** : `^9.24.0`

### Node.js requis

`^20.19.0 || ^22.13.0 || >=24` — Support de Node < 20.19, v21.x et v23.x supprimé.

### Breaking changes importants

| Changement | Impact sur le projet |
|---|---|
| `.eslintrc` legacy complètement supprimé | **Aucun** — déjà en flat config |
| `/* eslint-env */` comments produisent des erreurs | **Faible** — vérifier les projets consommateurs |
| Config lookup part du fichier linté (pas du CWD) | **Moyen** — impact potentiel en monorepo |
| `eslint:recommended` mis à jour : 3 nouvelles règles (`no-unassigned-vars`, `no-useless-assignment`, `preserve-caught-error`) | **Faible** — le projet n'utilise pas `eslint:recommended` directement |
| JSX reference tracking activé par défaut | **Positif** — `react/jsx-uses-vars` devient inutile |
| `context` deprecated members supprimés (getCwd, getFilename, getSourceCode, etc.) | **Critique pour les plugins** — les plugins doivent être compatibles |
| `SourceCode` deprecated methods supprimés | **Critique pour les plugins** |
| Minimatch v10 | **Faible** — vérifier les patterns glob |

### Compatibilité des plugins

| Plugin | Compatible ESLint 10 ? | Version minimum |
|---|---|---|
| `typescript-eslint` | Oui | `>=8.56.0` |
| `eslint-plugin-unicorn` | Oui | `>=63.0.0` |
| `eslint-plugin-testing-library` | Oui | `>=7.16.0` |
| `@eslint/compat` | Oui | `>=2.0.0` |
| `eslint-plugin-import` | **NON — BLOQUEUR** | PR #3230 en cours |
| `eslint-plugin-react` | Non confirmé | À tester |
| `eslint-plugin-react-hooks` | Non confirmé | À tester |
| `eslint-plugin-jsx-a11y` | Non confirmé | À tester |
| `eslint-plugin-prettier` | Non confirmé | À tester |
| `eslint-plugin-promise` | Non confirmé | À tester |
| `eslint-plugin-simple-import-sort` | Non confirmé | À tester |
| `eslint-plugin-react-native` | Non confirmé | À tester |
| `@next/eslint-plugin-next` | Non confirmé | À tester |

### Bloqueur principal

**`eslint-plugin-import` ne supporte pas ESLint 10.** Le PR #3230 est en cours. Alternative : migrer vers `eslint-plugin-import-x`.

### Actions à faire pour migrer (quand les bloqueurs seront levés)

1. Résoudre le bloqueur `eslint-plugin-import` (attendre le PR ou migrer vers `eslint-plugin-import-x`)
2. Mettre à jour `typescript-eslint` à `>=8.56.0`
3. Mettre à jour `eslint-plugin-unicorn` à `>=63.0.0`
4. Mettre à jour `eslint-plugin-testing-library` à `>=7.16.0`
5. Tester tous les autres plugins
6. Supprimer `react/jsx-uses-vars` si utilisé (JSX tracking natif)
7. Mettre à jour le peer dependency ESLint
8. Vérifier la compatibilité Node.js

### Verdict

**Migration non recommandée pour l'instant** à cause du bloqueur `eslint-plugin-import`. ESLint 9.x continue d'être maintenu (v9.39.4).

---

## typescript-eslint

**Version actuelle** : `^8.54.0`
**Dernière version** : `8.57.0` (9 mars 2026)
**Résolution automatique** : Oui (`^8.54.0` résout vers 8.57.0)

### Nouvelle règle intéressante

#### `strict-void-return` (disponible depuis 8.53.0)
- Interdit de passer une fonction qui retourne une valeur là où une fonction void est attendue
- Attrape les promesses non gérées, les générateurs ignorés, le code mort accidentel
- Nécessite le type-checking
- Pas dans les presets recommended par défaut — activation manuelle requise
- Complémentaire à `no-misused-promises` mais plus large (couvre aussi les non-Promise)

**Recommandation** : Considérer l'activation de `strict-void-return` dans `rules/typescript.mjs`.

### Changements notables

- **8.56.0** : Support ESLint v10 ajouté (range : `^8.57.0 || ^9.0.0 || ^10.0.0`)
- **8.55.0** : `defaultOptions` export deprecated (remplacé par `meta.defaultOptions`)
- **8.57.0** : Fix false positives sur `no-base-to-string`, `prefer-readonly`, `strict-void-return`

### Action recommandée

- Bumper le minimum à `^8.56.0` si on veut garantir la compatibilité ESLint v10
- Évaluer l'ajout de `@typescript-eslint/strict-void-return: 'error'`

---

## eslint-plugin-unicorn

**Version actuelle** : `^62.0.0`
**Dernière version** : `63.0.0` (10 février 2026)
**Résolution automatique** : Non (semver-major)

### Nouvelle règle

#### `unicorn/isolated-functions` (v63.0.0)
- Empêche les fonctions d'accéder aux variables de leur scope parent
- Utile pour : Next.js server actions, `makeSynchronous()`, fonctions sérialisées via `.toString()`
- Pas dans le preset `recommended` — activation manuelle requise

### Bug fixes notables

| Règle | Fix |
|---|---|
| `no-array-sort` | Ignore `.sort()` sans paramètres (moins de faux positifs) |
| `prefer-spread` | Ne trigger plus sur TypedArray/ArrayBuffer constructors |
| `prefer-export-from` | Fix namespace imports supprimant les type-imports |
| `expiring-todo-comments` | Ne flag plus les ESLint disable directives |
| `prefer-set-has` | Étendu à `Iterator#toArray()` et `String#split()` |

### ESLint 10

Compatibilité ESLint 10 ajoutée dans v63.0.0.

### Action recommandée

- Mettre à jour vers `^63.0.0` (nécessaire pour ESLint 10)
- Le fix `no-array-sort` est pertinent car le projet utilise `'unicorn/no-array-sort': 'error'`
- Évaluer l'ajout de `unicorn/isolated-functions` pour les server actions Next.js

---

## eslint-plugin-react-hooks

**Version actuelle** : `^7.0.1`
**Dernière version** : `7.0.1` (déjà à jour)

### Ce qui a changé depuis la v5 (pour contexte)

La v7.0.0 (octobre 2025) a introduit un changement majeur : **15 règles React Compiler** sont maintenant incluses dans le preset `recommended` par défaut :

- `react-hooks/globals`, `react-hooks/immutability`, `react-hooks/purity`, `react-hooks/refs`
- `react-hooks/set-state-in-effect`, `react-hooks/set-state-in-render`, `react-hooks/static-components`
- `react-hooks/preserve-manual-memoization`, `react-hooks/unsupported-syntax`
- Et 6 autres règles liées au React Compiler

**Impact** : Le projet définit les règles manuellement dans `rules/react-hooks.mjs`, donc ces règles Compiler ne sont PAS activées automatiquement. Aucun impact sauf si on utilise le preset `recommended` directement.

### Nouveautés dans les règles existantes

- Détection de `React.useEffect` (nom qualifié) en plus de `useEffect`
- Interdit `use` dans les blocs try/catch
- Setting `additionalEffectHooks` pour personnaliser les hooks d'effet

### Action recommandée

- Rien à faire — déjà à jour
- Considérer l'ajout de certaines règles React Compiler si les projets consommateurs utilisent le React Compiler

---

## eslint-plugin-react

**Version actuelle** : `^7.37.5`
**Dernière version** : `7.37.5` (déjà à jour)

### Changements non publiés (dans master, prochaine release)

#### Nouvelle règle à venir
- **`async-server-action`** : Force les React Server Actions (`'use server'`) à être `async`. Pertinent pour Next.js.

#### Améliorations à venir
- `jsx-no-leaked-render` : Option `ignoreAttributes`
- `jsx-sort-props` : Option `sortFirst`
- `jsx-no-literals` : Option `restrictedAttributes`
- `forbid-dom-props` : Option `disallowedValues`
- `jsx-key` : Meilleure détection dans les ternaires et expressions logiques

### v8 ?

Pas de date annoncée. Les PR `semver-major` ouvertes concernent surtout le drop de vieilles versions de Node/ESLint (qui n'impacterait pas ce projet).

### Action recommandée

- Rien à faire pour l'instant
- Quand la 7.38.0 sort, évaluer l'ajout de `react/async-server-action` dans `next.mjs`

---

## eslint-plugin-testing-library

**Version actuelle** : `^7.15.4`
**Dernière version** : `7.16.0` (17 février 2026)
**Résolution automatique** : Oui

### Changements

- **7.16.0** : Support ESLint v10
- **7.14.0** : Nouvelle règle **`prefer-user-event-setup`** (recommande `userEvent.setup()` avant les interactions)
- **7.15.0** : Bundle en CJS et ESM

### Action recommandée

- Bumper à `^7.16.0` pour le support ESLint v10 explicite
- Évaluer l'ajout de `testing-library/prefer-user-event-setup`

---

## @next/eslint-plugin-next

**Version actuelle** : `^16.1.6`
**Dernière version** : `16.1.6` (déjà à jour)

### Changements notables dans la v16

- Flat config est le format par défaut (legacy disponible via `recommended-legacy`)
- `next lint` supprimé — utiliser ESLint CLI directement
- `next build` ne lance plus le linting
- Types TypeScript inclus dans le package

### Note sur les sévérités

Le preset `recommended` upstream utilise `'warn'` pour 15 des 21 règles, ce qui entre en conflit avec la convention du projet (jamais de `'warn'`). Considérer un override vers `'error'` pour la cohérence.

### Action recommandée

- Rien à faire — déjà à jour
- Éventuellement overrider les `'warn'` en `'error'` dans `next.mjs` pour respecter la convention du projet

---

## eslint-plugin-import

**Version actuelle** : `^2.32.0`
**Dernière version** : `2.32.0` (pas de nouvelle version)

### Problème

- Projet quasi stagnant
- Pas de support ESLint 10 (PR #3230 en cours)
- Support flat config incomplet
- 117 dépendances

### Alternative : eslint-plugin-import-x

- Fork actif (dernière version : 4.16.1)
- 16 dépendances (vs 117)
- Resolver Rust (`unrs-resolver`) avec support des `exports` dans package.json
- Support natif flat config
- Support ESLint 8.57+, 9+ (et probablement 10)

### Action recommandée

- **Envisager sérieusement la migration vers `eslint-plugin-import-x`**, surtout pour débloquer ESLint 10
- Note : ce projet utilise principalement `simple-import-sort` pour le tri, donc l'impact de `eslint-plugin-import` est peut-être limité — vérifier quelles règles sont réellement utilisées

---

## Autres dépendances

### Pas de changements / déjà à jour

| Package | Version actuelle | Dernière version | Notes |
|---|---|---|---|
| `eslint-plugin-jsx-a11y` | `^6.10.2` | `6.10.2` | Aucune nouvelle release |
| `eslint-plugin-prettier` | `^5.5.5` | `5.5.5` | Déjà à jour |
| `eslint-plugin-promise` | `^7.2.1` | `7.2.1` | Aucune nouvelle release |
| `eslint-plugin-simple-import-sort` | `^12.1.1` | `12.1.1` | Stable, pas de changement |
| `eslint-plugin-react-native` | `^5.0.0` | `5.0.0` | Maintenance minimale |
| `prettier-plugin-curly` | `^0.4.1` | `0.4.1` | Pas de changement |
| `@total-typescript/ts-reset` | `^0.6.1` | `0.6.1` | Pas de changement |

### Mises à jour mineures (auto-résolues par semver)

| Package | Version actuelle | Dernière version | Changement |
|---|---|---|---|
| `@eslint/compat` | `^2.0.2` | `2.0.3` | Bump `@eslint/core` |
| `globals` | `^17.3.0` | `17.4.0` | Globals mis à jour |

---

## Résumé des actions prioritaires

### Court terme (faire maintenant)

1. **`eslint-plugin-unicorn`** : `^62.0.0` → `^63.0.0` (bug fixes, ESLint 10 ready)
2. **`typescript-eslint`** : `^8.54.0` → `^8.56.0` (ESLint 10 ready)
3. **`eslint-plugin-testing-library`** : `^7.15.4` → `^7.16.0` (ESLint 10 ready)

### Nouvelles règles à évaluer

| Règle | Plugin | Intérêt |
|---|---|---|
| `@typescript-eslint/strict-void-return` | typescript-eslint | Attrape les promesses non gérées et le code mort |
| `unicorn/isolated-functions` | unicorn | Server actions Next.js, fonctions sérialisées |
| `testing-library/prefer-user-event-setup` | testing-library | Best practice Testing Library |
| `react/async-server-action` | react (pas encore publié) | Server actions Next.js |

### Moyen terme (ESLint 10)

1. Résoudre le bloqueur `eslint-plugin-import` → migrer vers `eslint-plugin-import-x`
2. Vérifier la compatibilité de tous les plugins non confirmés
3. Tester la migration complète
4. Mettre à jour les peer dependencies

### Nettoyage optionnel

- Overrider les `'warn'` de `@next/eslint-plugin-next` en `'error'` dans `next.mjs`
- Supprimer `react/jsx-uses-vars` si utilisé (natif dans ESLint 10)
