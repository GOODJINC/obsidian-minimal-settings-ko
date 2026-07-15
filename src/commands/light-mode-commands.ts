import MinimalTheme from '../main';

export function registerLightModeCommands(plugin: MinimalTheme) {
  plugin.addCommand({
    id: 'toggle-minimal-light-default',
    name: '라이트 모드 사용(기본)',
    callback: () => {
      plugin.settings.lightStyle = 'minimal-light';
      void plugin.saveData(plugin.settings);
      plugin.updateLightStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-light-white',
    name: '라이트 모드 사용(전체 흰색)',
    callback: () => {
      plugin.settings.lightStyle = 'minimal-light-white';
      void plugin.saveData(plugin.settings);
      plugin.updateLightStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-light-tonal',
    name: '라이트 모드 사용(낮은 대비)',
    callback: () => {
      plugin.settings.lightStyle = 'minimal-light-tonal';
      void plugin.saveData(plugin.settings);
      plugin.updateLightStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-light-contrast',
    name: '라이트 모드 사용(높은 대비)',
    callback: () => {
      plugin.settings.lightStyle = 'minimal-light-contrast';
      void plugin.saveData(plugin.settings);
      plugin.updateLightStyle();
    }
  });
}

