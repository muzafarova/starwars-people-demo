# StarWars People

This is a demo app that displays a filterable list of StarWars's population.

## Project setup

### Development

```
npm i && npm run dev
```

### Production

#### Build

```
npm run build
```

### Preview the build

```
npm run preview
```

## Project structure

- `index.html` - root HTML document
- `/src/components` - responsible for presentation
  - `Base` prefix indicates a base-level reusable building block, e.g. `<BaseInput type="search" />` renders as `<input type="search" class="..." />`
  - `People` prefix indicates a building block of the People list view
- `/src/store` - responsible for state management
  - `people.ts` - data and methods assosiated with people info
  - `planets.ts` - planets related info
- `/src/formatters.ts` - reusable formatters e.g. `formatDate`
- `/src/api.ts` - responsible for API calls
- `/src/App.vue` - root vue component
- `/src/main.ts` - entry point
- `/src/pinia.ts` - state management plugin
