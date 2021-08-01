Test Nest.js API avec TypeORM sur SQLite
===

## Lancement

> npm run start

Users
---------------------

### Requête

`GET /users`

### Réponse Headers

Statut `200`

Content-Type `application/json`

#### Réponse Body


| Object Field       | Type   | 
|--------------------|--------|
| `id`             | string | .
| `index`             | string |
| `label`             | string | 
| `desciption` | string |

#### Example Response:

```json
{
  "id": 1,
  "index": 1,
  "label": "Titres Unitaires",
  "description": "Correspondances illimitées dans l'heure suivant la première validation."
}
```