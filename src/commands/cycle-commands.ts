import MinimalTheme from '../main';
import { lightStyles, darkStyles, tableWidthStyles, imgWidthStyles, iframeWidthStyles, chartWidthStyles, mapWidthStyles } from '../utils/constants';

export function registerCycleCommands(plugin: MinimalTheme) {
  plugin.addCommand({
    id: 'toggle-minimal-dark-cycle',
    name: '다크 모드 스타일 순환',
    callback: () => {
      plugin.settings.darkStyle = darkStyles[(darkStyles.indexOf(plugin.settings.darkStyle) + 1) % darkStyles.length];
      void plugin.saveData(plugin.settings);
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-light-cycle',
    name: '라이트 모드 스타일 순환',
    callback: () => {
      plugin.settings.lightStyle = lightStyles[(lightStyles.indexOf(plugin.settings.lightStyle) + 1) % lightStyles.length];
      void plugin.saveData(plugin.settings);
      plugin.updateLightStyle();
    }
  });

  plugin.addCommand({
    id: 'cycle-minimal-table-width',
    name: '표 너비 옵션 순환',
    callback: () => {
      plugin.settings.tableWidth = tableWidthStyles[(tableWidthStyles.indexOf(plugin.settings.tableWidth) + 1) % tableWidthStyles.length];
      void plugin.saveData(plugin.settings);
      plugin.refresh();
    }
  });

  plugin.addCommand({
    id: 'cycle-minimal-image-width',
    name: '이미지 너비 옵션 순환',
    callback: () => {
      plugin.settings.imgWidth = imgWidthStyles[(imgWidthStyles.indexOf(plugin.settings.imgWidth) + 1) % imgWidthStyles.length];
      void plugin.saveData(plugin.settings);
      plugin.refresh();
    }
  });

  plugin.addCommand({
    id: 'cycle-minimal-iframe-width',
    name: 'iframe 너비 옵션 순환',
    callback: () => {
      plugin.settings.iframeWidth = iframeWidthStyles[(iframeWidthStyles.indexOf(plugin.settings.iframeWidth) + 1) % iframeWidthStyles.length];
      void plugin.saveData(plugin.settings);
      plugin.refresh();
    }
  });

  plugin.addCommand({
    id: 'cycle-minimal-chart-width',
    name: '차트 너비 옵션 순환',
    callback: () => {
      plugin.settings.chartWidth = chartWidthStyles[(chartWidthStyles.indexOf(plugin.settings.chartWidth) + 1) % chartWidthStyles.length];
      void plugin.saveData(plugin.settings);
      plugin.refresh();
    }
  });

  plugin.addCommand({
    id: 'cycle-minimal-map-width',
    name: '지도 너비 옵션 순환',
    callback: () => {
      plugin.settings.mapWidth = mapWidthStyles[(mapWidthStyles.indexOf(plugin.settings.mapWidth) + 1) % mapWidthStyles.length];
      void plugin.saveData(plugin.settings);
      plugin.refresh();
    }
  });
}

