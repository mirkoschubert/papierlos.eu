# Mixins (API Documentation)

## Pages

## Templates

## Organisms

### +navbar(position = 'top', isfixed = true)

Renders a navigation bar in a header element. You can place it on either side.

#### Attributes

* **position**: (String) top, bottom, left, right
* **isfixed**: (Boolean) true, false

### +hero(size = 'medium', align = 'center')

Renders an Hero element. You should place it immediately after an navigation bar. It has a fixed size  and automatically implicates a fixed sizing when the navigation bar is on top or bottom.

#### Attributes

* **size**: (String) onethird, golden-top, small, medium, golden-bottom, twothirds, large, full
* **align**: (String) left, center, right
* **block**: (Molecules) or (Atoms)

## Molecules

## Atoms

### +logo()

Our own foldable logo - it's German and stands for **paperless**.

### +icon(icon, title, classes, to)

Renders an icon with a optional title with or without a link.

#### Attributes

* **icon**: (String) - the icon from `/assets/icons` (preferably SVGs)
* **title**: (String) - an title (optional)
* **classes**: (String) - additional classes (optional)
* **to**: (String) - a relative link, do not set for JavaScript purposes!

### +title(text)

### +subtitle(text)

### +description(text)
