Test Nest.js API avec TypeORM sur SQLite
===

## Lancement

> npm run start

# Users

## Get full list of users

### Request

`GET /users`

### Response Headers

Statut `200`

| Header Name       | Value   | 
|--------------------|--------|
| `Content-Type`             | `application/json` |

### Response Body

| Return Type       |
|--------------------|
| `Object[]`             |

| Object Field       | Type   | 
|--------------------|--------|
| `id`             | integer |
| `name`             | string |
| `email`             | string | 
| `password_hash` | string |

#### Example Response:

```json
[
  {
	"id": 1,
	"name": "JM",
	"email": "jm@exemple.fr",
	"password_hash": "99fa412e9b2201a01a0b9b0099b5dfea"
  }
]
```

# Auth

## User login

## Request

`POST /auth/login`

### Request Body

| Type       |
|--------------------|
| `Object`             |

| Object Field       | Type   | 
|--------------------|--------|
| `email`             | string |
| `password`             | string |

#### Example Request:

```json
{
  "email": "JM@exemple.fr",
  "password": "MySuperPassword"
}
```

### Response Headers

Statut `201`

| Header Name       | Value   | 
|--------------------|--------|
| `Content-Type`             | `application/json` |

### Response Body

| Return Type       |
|--------------------|
| `Object`             |

| Object Field       | Type   | 
|--------------------|--------|
| `token`             | string |

#### Example Response:

```json
{
  "token": "99fa412e9b2201a01a0b9b0099b5dfea"
}
```

# Categories

## Get full list of categories

### Request

`GET /categories`

### Response Headers

Statut `200`

| Header Name       | Value   | 
|--------------------|--------|
| `Content-Type`             | `application/json` |

### Response Body

| Return Type       |
|--------------------|
| `Object[]`             |

| Object Field       | Type   | 
|--------------------|--------|
| `id`             | integer |
| `index`             | integer |
| `label`             | string | 
| `description` | string |
| `products` | Object[] |

#### Example Response:

```json
[
  {
	"id": 1,
	"index": 1,
	"label": "Titres Unitaires",
	"description": "Correspondances illimitées dans l'heure suivant la première validation.",
	"products": [
	  {
		"id": 8,
		"label": "Carnet 10 x Ticket Parking+Transport",
		"description": "Carnet de 10 titre permettant de se garer dans l'un de nos 48 parkings réservés, ainsi que de faire l'aller-retour sur notre réseau de transport.\nValable pour tous les passagers de la voiture (jusqu'à 9)",
		"price": 3000,
		"category_id": 2,
		"thumbnail_url": null,
		"visible_public": false,
		"visible_authenticated": true
	  }
	]
  }
]
```

# Products

## Get full list of products

### Request

`GET /products`

### Request Headers

| Header Name       | Value   | 
|--------------------|--------|
| `user-token`             | token given from authentication |

### Response Headers

Statut `200`

| Header Name       | Value   | 
|--------------------|--------|
| `Content-Type`             | `application/json` |

### Response Body

| Return Type       |
|--------------------|
| `Object[]`             |

| Object Field       | Type   | 
|--------------------|--------|
| `id`             | integer |
| `label`             | string |
| `description`             | string | 
| `price` | integer |
| `category_id` | integer |
| `thumbnail_url` | string |
| `visible_public` | boolean |
| `visible_authenticated` | boolean |

#### Example Response:

```json
[
  {
	"id": 1,
	"label": "Titre Unitaire",
	"description": "Titre permettant de voyager sur l'ensemble du réseau.\nCorrespondances illimitées dans l'heure suivant la première validation.",
	"price": 150,
	"category_id": 1,
	"thumbnail_url": "https://picsum.photos/256/256",
	"visible_public": true,
	"visible_authenticated": false
  }
]
```

## Get full list of products

### Request

`GET /products/all`

### Response Headers

Statut `200`

| Header Name       | Value   | 
|--------------------|--------|
| `Content-Type`             | `application/json` |

### Response Body

| Return Type       |
|--------------------|
| `Object[]`             |

| Object Field       | Type   | 
|--------------------|--------|
| `id`             | integer |
| `label`             | string |
| `description`             | string | 
| `price` | integer |
| `category_id` | integer |
| `thumbnail_url` | string |
| `visible_public` | boolean |
| `visible_authenticated` | boolean |

#### Example Response:

```json
[
  {
	"id": 1,
	"label": "Titre Unitaire",
	"description": "Titre permettant de voyager sur l'ensemble du réseau.\nCorrespondances illimitées dans l'heure suivant la première validation.",
	"price": 150,
	"category_id": 1,
	"thumbnail_url": "https://picsum.photos/256/256",
	"visible_public": true,
	"visible_authenticated": false
  }
]
```

# Basket

## Get basket of currrent user

### Request

`GET /baskets`

### Request Headers

| Header Name       | Value   | 
|--------------------|--------|
| `user-token`             | token given from authentication |

### Response Headers

Statut `200`

| Header Name       | Value   | 
|--------------------|--------|
| `Content-Type`             | `application/json` |

### Response Body

| Return Type       |
|--------------------|
| `Object`             |

| Object Field       | Type   | 
|--------------------|--------|
| `userId`             | integer |
| `products`             | object[] |

#### Example Response:

```json
{
  "userId": 2,
  "quantities": { "1": 5, "2": 1},
  "products": [
	{
	  "id": 1,
	  "label": "Titre Unitaire",
	  "description": "Titre permettant de voyager sur l'ensemble du réseau.\nCorrespondances illimitées dans l'heure suivant la première validation.",
	  "price": 150,
	  "category_id": 1,
	  "thumbnail_url": "https://picsum.photos/256/256",
	  "visible_public": true,
	  "visible_authenticated": false
	}
  ]
}
```

## Add product to basket

### Request

`Patch /baskets/add`

### Request Headers

| Header Name       | Value   | 
|--------------------|--------|
| `user-token`             | token given from authentication |

### Request Body

| Return Type       |
|--------------------|
| `Object`             |

| Object Field       | Type   | 
|--------------------|--------|
| `userId`             | integer |
| `productId`             | integer |
#### Example Request:

```json
{
  "userId": 2,
  "productId": 2
}
```
### Response Headers

Statut `200`

| Header Name       | Value   | 
|--------------------|--------|
| `Content-Type`             | `application/json` |

### Response Body

| Return Type       |
|--------------------|
| `Object`             |

| Object Field       | Type   | 
|--------------------|--------|
| `userId`             | integer |
| `quantities`             | object {[ProductId: number]: Amount: number} |
| `products`             | object[] |

#### Example Response:

```json
{
  "userId": 2,
  "quantities": { "1": 5, "2": 1},
  "products": [
	{
	  "id": 1,
	  "label": "Titre Unitaire",
	  "description": "Titre permettant de voyager sur l'ensemble du réseau.\nCorrespondances illimitées dans l'heure suivant la première validation.",
	  "price": 150,
	  "category_id": 1,
	  "thumbnail_url": "https://picsum.photos/256/256",
	  "visible_public": true,
	  "visible_authenticated": false
	}
  ]
}
```