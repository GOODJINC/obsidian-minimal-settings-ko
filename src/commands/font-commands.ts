import MinimalTheme from '../main';

export function registerFontCommands(plugin: MinimalTheme) {
  plugin.addCommand({
    id: 'increase-body-font-size',
    name: '본문 글꼴 크기 늘리기',
    callback: () => {
      plugin.settings.textNormal = plugin.settings.textNormal + 0.5;
      void plugin.saveData(plugin.settings);
      plugin.setFontSize();
    }
  });

  plugin.addCommand({
    id: 'decrease-body-font-size',
    name: '본문 글꼴 크기 줄이기',
    callback: () => {
      plugin.settings.textNormal = plugin.settings.textNormal - 0.5;
      void plugin.saveData(plugin.settings);
      plugin.setFontSize();
    }
  });
}

