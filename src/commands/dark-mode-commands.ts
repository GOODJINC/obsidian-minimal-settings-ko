import MinimalTheme from '../main';

export function registerDarkModeCommands(plugin: MinimalTheme) {
  plugin.addCommand({
    id: 'toggle-minimal-dark-default',
    name: '다크 모드 사용(기본)',
    callback: () => {
      plugin.settings.darkStyle = 'minimal-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-dark-tonal',
    name: '다크 모드 사용(낮은 대비)',
    callback: () => {
      plugin.settings.darkStyle = 'minimal-dark-tonal';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-dark-black',
    name: '다크 모드 사용(순수 검정)',
    callback: () => {
      plugin.settings.darkStyle = 'minimal-dark-black';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkStyle();
    }
  });
}

