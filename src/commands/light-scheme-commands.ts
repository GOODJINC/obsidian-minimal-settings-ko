import MinimalTheme from '../main';

export function registerLightSchemeCommands(plugin: MinimalTheme) {
  plugin.addCommand({
    id: 'toggle-minimal-atom-light',
    name: '라이트 색 구성표를 Atom으로 변경',
    callback: () => {
      plugin.settings.lightScheme = 'minimal-atom-light';
      void plugin.saveData(plugin.settings);
      plugin.updateLightScheme();
      plugin.updateLightStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-ayu-light',
    name: '라이트 색 구성표를 Ayu로 변경',
    callback: () => {
      plugin.settings.lightScheme = 'minimal-ayu-light';
      void plugin.saveData(plugin.settings);
      plugin.updateLightScheme();
      plugin.updateLightStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-catppuccin-light',
    name: '라이트 색 구성표를 Catppuccin으로 변경',
    callback: () => {
      plugin.settings.lightScheme = 'minimal-catppuccin-light';
      void plugin.saveData(plugin.settings);
      plugin.updateLightScheme();
      plugin.updateLightStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-default-light',
    name: '라이트 색 구성표를 기본으로 변경',
    callback: () => {
      plugin.settings.lightScheme = 'minimal-default-light';
      void plugin.saveData(plugin.settings);
      plugin.updateLightScheme();
      plugin.updateLightStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-gruvbox-light',
    name: '라이트 색 구성표를 Gruvbox로 변경',
    callback: () => {
      plugin.settings.lightScheme = 'minimal-gruvbox-light';
      void plugin.saveData(plugin.settings);
      plugin.updateLightScheme();
      plugin.updateLightStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-eink-light',
    name: '라이트 색 구성표를 E-ink로 변경',
    callback: () => {
      plugin.settings.lightScheme = 'minimal-eink-light';
      void plugin.saveData(plugin.settings);
      plugin.updateLightScheme();
      plugin.updateLightStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-everforest-light',
    name: '라이트 색 구성표를 Everforest로 변경',
    callback: () => {
      plugin.settings.lightScheme = 'minimal-everforest-light';
      void plugin.saveData(plugin.settings);
      plugin.updateLightScheme();
      plugin.updateLightStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-flexoki-light',
    name: '라이트 색 구성표를 Flexoki로 변경',
    callback: () => {
      plugin.settings.lightScheme = 'minimal-flexoki-light';
      void plugin.saveData(plugin.settings);
      plugin.updateLightScheme();
      plugin.updateLightStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-macos-light',
    name: '라이트 색 구성표를 macOS로 변경',
    callback: () => {
      plugin.settings.lightScheme = 'minimal-macos-light';
      void plugin.saveData(plugin.settings);
      plugin.updateLightScheme();
      plugin.updateLightStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-notion-light',
    name: '라이트 색 구성표를 하늘로 변경',
    callback: () => {
      plugin.settings.lightScheme = 'minimal-notion-light';
      void plugin.saveData(plugin.settings);
      plugin.updateLightScheme();
      plugin.updateLightStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-nord-light',
    name: '라이트 색 구성표를 Nord로 변경',
    callback: () => {
      plugin.settings.lightScheme = 'minimal-nord-light';
      void plugin.saveData(plugin.settings);
      plugin.updateLightScheme();
      plugin.updateLightStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-rose-pine-light',
    name: '라이트 색 구성표를 Rosé Pine으로 변경',
    callback: () => {
      plugin.settings.lightScheme = 'minimal-rose-pine-light';
      void plugin.saveData(plugin.settings);
      plugin.updateLightScheme();
      plugin.updateLightStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-solarized-light',
    name: '라이트 색 구성표를 Solarized로 변경',
    callback: () => {
      plugin.settings.lightScheme = 'minimal-solarized-light';
      void plugin.saveData(plugin.settings);
      plugin.updateLightScheme();
      plugin.updateLightStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-things-light',
    name: '라이트 색 구성표를 Things로 변경',
    callback: () => {
      plugin.settings.lightScheme = 'minimal-things-light';
      void plugin.saveData(plugin.settings);
      plugin.updateLightScheme();
      plugin.updateLightStyle();
    }
  });
}

