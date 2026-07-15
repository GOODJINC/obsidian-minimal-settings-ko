import MinimalTheme from '../main';

export function registerDarkSchemeCommands(plugin: MinimalTheme) {
  plugin.addCommand({
    id: 'toggle-minimal-atom-dark',
    name: '다크 색 구성표를 Atom으로 변경',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-atom-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-ayu-dark',
    name: '다크 색 구성표를 Ayu로 변경',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-ayu-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-catppuccin-dark',
    name: '다크 색 구성표를 Catppuccin으로 변경',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-catppuccin-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-dracula-dark',
    name: '다크 색 구성표를 Dracula로 변경',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-dracula-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-default-dark',
    name: '다크 색 구성표를 기본으로 변경',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-default-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-eink-dark',
    name: '다크 색 구성표를 E-ink로 변경',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-eink-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-everforest-dark',
    name: '다크 색 구성표를 Everforest로 변경',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-everforest-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-flexoki-dark',
    name: '다크 색 구성표를 Flexoki로 변경',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-flexoki-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-gruvbox-dark',
    name: '다크 색 구성표를 Gruvbox로 변경',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-gruvbox-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-macos-dark',
    name: '다크 색 구성표를 macOS로 변경',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-macos-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-nord-dark',
    name: '다크 색 구성표를 Nord로 변경',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-nord-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-notion-dark',
    name: '다크 색 구성표를 하늘로 변경',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-notion-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-rose-pine-dark',
    name: '다크 색 구성표를 Rosé Pine으로 변경',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-rose-pine-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-solarized-dark',
    name: '다크 색 구성표를 Solarized로 변경',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-solarized-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-things-dark',
    name: '다크 색 구성표를 Things로 변경',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-things-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });
}

