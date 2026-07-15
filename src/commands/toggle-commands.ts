import MinimalTheme from '../main';

export function registerToggleCommands(plugin: MinimalTheme) {
  plugin.addCommand({
    id: 'toggle-hidden-borders',
    name: '사이드바 테두리 전환',
    callback: () => {
      plugin.settings.bordersToggle = !plugin.settings.bordersToggle;
      void plugin.saveData(plugin.settings);
      plugin.refresh();
    }
  });

  plugin.addCommand({
    id: 'toggle-colorful-headings',
    name: '다채로운 제목 색상 전환',
    callback: () => {
      plugin.settings.colorfulHeadings = !plugin.settings.colorfulHeadings;
      void plugin.saveData(plugin.settings);
      plugin.refresh();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-focus-mode',
    name: '집중 모드 전환',
    callback: () => {
      plugin.settings.focusMode = !plugin.settings.focusMode;
      void plugin.saveData(plugin.settings);
      plugin.refresh();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-colorful-frame',
    name: '창 프레임 강조 색상 전환',
    callback: () => {
      plugin.settings.colorfulFrame = !plugin.settings.colorfulFrame;
      void plugin.saveData(plugin.settings);
      plugin.refresh();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-img-grid',
    name: '이미지 격자 전환',
    callback: () => {
      plugin.settings.imgGrid = !plugin.settings.imgGrid;
      void plugin.saveData(plugin.settings);
      plugin.refresh();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-switch',
    name: '라이트/다크 모드 전환',
    callback: () => {
      plugin.updateTheme();
    }
  });
}

