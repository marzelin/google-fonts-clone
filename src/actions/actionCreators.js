export const CLOSE_MENU_PANEL = 'CLOSE_MENU_PANEL';
export function closeMenuPanel() {
  return {
    type: CLOSE_MENU_PANEL
  };
}

export const OPEN_MENU_PANEL = 'OPEN_MENU_PANEL';
export function openMenuPanel() {
  return {
    type: OPEN_MENU_PANEL
  };
}

export const CLOSE_SEARCH_PANEL = 'CLOSE_SEARCH_PANEL';
export function closeSearchPanel() {
  return {
    type: CLOSE_SEARCH_PANEL
  };
}

export const OPEN_SEARCH_PANEL = 'OPEN_SEARCH_PANEL';
export function openSearchPanel() {
  return {
    type: OPEN_SEARCH_PANEL
  };
}

export const OPEN_THEME_CHOOSER = 'OPEN_THEME_CHOOSER';
export function openThemeChooser() {
  return {
    type: OPEN_THEME_CHOOSER
  };
}

export const CLOSE_THEME_CHOOSER = 'CLOSE_THEME_CHOOSER';
export function closeThemeChooser() {
  return {
    type: CLOSE_THEME_CHOOSER
  };
}

export const CHOOSE_THEME = 'CHOOSE_THEME';
export function chooseTheme(color) {
  return {
    type: CHOOSE_THEME,
    color: color
  };
}

export const CHANGE_FILTER = 'CHANGE_FILTER';
export function changeFilter(name, value) {
  return {
    type: CHANGE_FILTER,
    name,
    value
  };
}
