# Aftership Card by [@myztillx](https://www.github.com/myztillx)

A copy of iantrich's [aftership-card](https://github.com/iantrich/aftership-card). Added configuration through the UI and ported to new lit version with the Boilerplate card as a template.

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)

(TODO: Insert Picture of the card.)

I am new to coding and frontend, especially Lit. I will do my best to address issue and keep this repository up to date.

## Installation

### HACS

Aftership Card is available as a custom repository in [HACS](https://hacs.xyz/).

1. Open HACS
2. Go to "Frontend"
3. Click the Overflow menu (three vertical dots) in the top right
   1. Choose "Custom repositories"
   2. Repository: `https://github.com/myztillx/aftership-card`
   3. Category: "Lovelace"
   4. Click Add
4. Click "+" in bottom right
5. Search for "aftership"
6. Download repository
7. See "After Installation" section

### Manual

1. Download `aftership-card.js` file from [latest](https://github.com/myztillx/aftership-card/releases/latest)
2. Place `aftership-card.js` file into `config/www` folder.
   1. I recommend creating another folder in `config/www` called `aftership-card` and placing it there.
3. See "After Installation" section

### After Installation

Add reference to the card as a resource.
**Using UI**

1. Settings → Dashboard → Menu (top right 3 dots) → Resources
2. Click "Add Resource" in the bottom right
   1. For HACS → URL: `/hacsfiles/aftership-card/aftership-card.js`
   2. For manual → URL: `/local/aftership-card/aftership-card.js`
3. Choose "JavaScript Module"

**Using YAML**

```yaml
resources:
  - url: /hacsfiles/aftership-card/aftership-card.js
    type: module
```

## Options

| Name   | Type   | Requirement  | Description               | Default     |
| ------ | ------ | ------------ | ------------------------- | ----------- |
| type   | string | **Required** | `custom:aftership-card`   |
| name   | string | **Optional** | Card name / title         | `Aftership` |
| entity | string | **Required** | Home Assistant entity ID. | `none`      |

## Usage

Clicking on the icon opens the tracking page on aftership.com.

Holding on the icon prompts the user for tracking deletion.

**UI Mode**

1. Search for card in UI mode (Custom: Aftership Card)
2. Configure card with parameters above.

**YAML mode**

```yaml
type: 'custom:aftership-card'
entity: sensor.aftership
name: Packages
```
