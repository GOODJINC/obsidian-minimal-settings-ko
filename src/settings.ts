import { App, PluginSettingTab, SettingGroup } from 'obsidian';
import MinimalTheme from "./main";

export interface MinimalSettings {
  lightStyle: string;
  darkStyle: string;
  lightScheme: string;
  darkScheme: string;
  editorFont: string;
  colorfulHeadings: boolean;
  colorfulFrame: boolean;
  colorfulActiveStates: boolean,
  trimNames: boolean;
  labeledNav: boolean;
  bordersToggle: boolean;
  focusMode: boolean;
  lineHeight: number;
  lineWidth: number;
  lineWidthWide: number;
  maxWidth: number;
  imgGrid: boolean;
  tableWidth: string;
  iframeWidth: string;
  imgWidth: string;
  chartWidth: string;
  mapWidth: string;
  fullWidthMedia: boolean,
  minimalStatus: boolean,
  textNormal: number;
  textSmall: number;
  underlineInternal: boolean;
  underlineExternal: boolean;
  folding: boolean;
  lineNumbers: boolean;
  readableLineLength: boolean;
}

export const DEFAULT_SETTINGS: MinimalSettings = {
  lightStyle: 'minimal-light',
  darkStyle: 'minimal-dark',
  lightScheme: 'minimal-default-light',
  darkScheme: 'minimal-default-dark',
  editorFont: '',
  lineHeight: 1.5,
  lineWidth: 40,
  lineWidthWide: 50,
  maxWidth: 88,
  textNormal: 16,
  textSmall: 13,
  imgGrid: false,
  imgWidth: 'img-default-width',
  tableWidth: 'table-default-width',
  iframeWidth: 'iframe-default-width',
  mapWidth: 'map-default-width',
  chartWidth: 'chart-default-width',
  colorfulHeadings: false,
  colorfulFrame: false,
  colorfulActiveStates: false,
  trimNames: true,
  labeledNav: false,
  fullWidthMedia: true,
  bordersToggle: true,
  minimalStatus: true,
  focusMode: false,
  underlineInternal: true,
  underlineExternal: true,
  folding: true,
  lineNumbers: false,
  readableLineLength: false,
}

export class MinimalSettingsTab extends PluginSettingTab {
  plugin: MinimalTheme;

  constructor(app: App, plugin: MinimalTheme) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const {containerEl} = this;
    containerEl.empty();

    // Color scheme section
    const colorSchemeDesc = createFragment();
    colorSchemeDesc.appendText('더 많은 옵션은 ');
    colorSchemeDesc.appendChild(
      createEl('a', {
        text: 'Style Settings',
        href: 'obsidian://show-plugin?id=obsidian-style-settings',
      })
    );
    colorSchemeDesc.appendText(' 플러그인에서 설정할 수 있습니다. 자세한 내용은 ');
    colorSchemeDesc.appendChild(
      createEl('a', {
        text: '문서',
        href: 'https://minimal.guide/features/color-schemes',
      })
    );
    colorSchemeDesc.appendText('를 참고하세요.');

    const colorHeading = createFragment();
    colorHeading.createDiv({cls: 'setting-item-name', text: '색 구성표'});
    const colorDesc = colorHeading.createDiv({cls: 'setting-item-description'});
    colorDesc.appendChild(colorSchemeDesc);

    new SettingGroup(containerEl)
      .setHeading(colorHeading)
      .addSetting(setting => setting
        .setName('라이트 모드 색 구성표')
        .setDesc('라이트 모드에 적용할 미리 설정된 색상입니다.')
        .addDropdown(dropdown => dropdown
          .addOption('minimal-default-light','기본')
          .addOption('minimal-atom-light','Atom')
          .addOption('minimal-ayu-light','Ayu')
          .addOption('minimal-catppuccin-light','Catppuccin')
          .addOption('minimal-eink-light','E-ink (베타)')
          .addOption('minimal-everforest-light','Everforest')
          .addOption('minimal-flexoki-light','Flexoki')
          .addOption('minimal-gruvbox-light','Gruvbox')
          .addOption('minimal-macos-light','macOS')
          .addOption('minimal-nord-light','Nord')
          .addOption('minimal-rose-pine-light','Rosé Pine')
          .addOption('minimal-notion-light','하늘')
          .addOption('minimal-solarized-light','Solarized')
          .addOption('minimal-things-light','Things')
          .setValue(this.plugin.settings.lightScheme)
          .onChange((value) => {
            this.plugin.settings.lightScheme = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.updateLightScheme();
          })))
      .addSetting(setting => setting
        .setName('라이트 모드 배경 대비')
        .setDesc('사이드바와 본문 영역 사이의 대비 수준입니다.')
        .addDropdown(dropdown => dropdown
          .addOption('minimal-light','기본')
          .addOption('minimal-light-white','전체 흰색')
          .addOption('minimal-light-tonal','낮은 대비')
          .addOption('minimal-light-contrast','높은 대비')
          .setValue(this.plugin.settings.lightStyle)
          .onChange((value) => {
            this.plugin.settings.lightStyle = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.updateLightStyle();
          })))
      .addSetting(setting => setting
        .setName('다크 모드 색 구성표')
        .setDesc('다크 모드에 적용할 미리 설정된 색상입니다.')
        .addDropdown(dropdown => dropdown
          .addOption('minimal-default-dark','기본')
          .addOption('minimal-atom-dark','Atom')
          .addOption('minimal-ayu-dark','Ayu')
          .addOption('minimal-catppuccin-dark','Catppuccin')
          .addOption('minimal-dracula-dark','Dracula')
          .addOption('minimal-eink-dark','E-ink (베타)')
          .addOption('minimal-everforest-dark','Everforest')
          .addOption('minimal-flexoki-dark','Flexoki')
          .addOption('minimal-gruvbox-dark','Gruvbox')
          .addOption('minimal-macos-dark','macOS')
          .addOption('minimal-nord-dark','Nord')
          .addOption('minimal-rose-pine-dark','Rosé Pine')
          .addOption('minimal-notion-dark','하늘')
          .addOption('minimal-solarized-dark','Solarized')
          .addOption('minimal-things-dark','Things')
          .setValue(this.plugin.settings.darkScheme)
          .onChange((value) => {
            this.plugin.settings.darkScheme = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.updateDarkScheme();
          })))
      .addSetting(setting => setting
        .setName('다크 모드 배경 대비')
        .setDesc('사이드바와 본문 영역 사이의 대비 수준입니다.')
        .addDropdown(dropdown => dropdown
          .addOption('minimal-dark','기본')
          .addOption('minimal-dark-tonal','낮은 대비')
          .addOption('minimal-dark-black','순수 검정')
          .setValue(this.plugin.settings.darkStyle)
          .onChange((value) => {
            this.plugin.settings.darkStyle = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.updateDarkStyle();
          })));

    // Features section
    new SettingGroup(containerEl)
      .setHeading('기능')
      .addSetting(setting => setting
        .setName('주요 탐색 메뉴에 텍스트 레이블 표시')
        .setDesc('왼쪽 사이드바의 탐색 메뉴에 텍스트 레이블을 표시합니다.')
        .addToggle(toggle => toggle.setValue(this.plugin.settings.labeledNav)
          .onChange((value) => {
            this.plugin.settings.labeledNav = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('창 프레임에 강조 색상 적용')
        .setDesc('앱 상단 영역에 강조 색상을 적용합니다.')
        .addToggle(toggle => toggle.setValue(this.plugin.settings.colorfulFrame)
          .onChange((value) => {
            this.plugin.settings.colorfulFrame = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('활성 항목에 강조 색상 적용')
        .setDesc('활성 파일과 메뉴 항목에 강조 색상을 적용합니다.')
        .addToggle(toggle => toggle.setValue(this.plugin.settings.colorfulActiveStates)
          .onChange((value) => {
            this.plugin.settings.colorfulActiveStates = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('다채로운 제목 색상')
        .setDesc('제목 크기마다 서로 다른 색상을 적용합니다.')
        .addToggle(toggle => toggle.setValue(this.plugin.settings.colorfulHeadings)
          .onChange((value) => {
            this.plugin.settings.colorfulHeadings = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('미니멀 상태 표시줄')
        .setDesc('끄면 전체 너비의 상태 표시줄을 사용합니다.')
        .addToggle(toggle => toggle.setValue(this.plugin.settings.minimalStatus)
          .onChange((value) => {
            this.plugin.settings.minimalStatus = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('사이드바에서 파일 이름 줄이기')
        .setDesc('파일 이름이 한 줄에 들어가도록 말줄임표를 사용합니다.')
        .addToggle(toggle => toggle.setValue(this.plugin.settings.trimNames)
          .onChange((value) => {
            this.plugin.settings.trimNames = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('작업 공간 테두리')
        .setDesc('작업 공간 요소 사이에 구분선을 표시합니다.')
        .addToggle(toggle => toggle.setValue(this.plugin.settings.bordersToggle)
          .onChange((value) => {
            this.plugin.settings.bordersToggle = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('집중 모드')
        .setDesc('탭 표시줄과 상태 표시줄을 숨기며, 마우스를 올리면 표시합니다. 단축키로 전환할 수 있습니다.')
        .addToggle(toggle => toggle.setValue(this.plugin.settings.focusMode)
          .onChange((value) => {
            this.plugin.settings.focusMode = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('내부 링크 밑줄')
        .setDesc('내부 링크에 밑줄을 표시합니다.')
        .addToggle(toggle => toggle.setValue(this.plugin.settings.underlineInternal)
          .onChange((value) => {
            this.plugin.settings.underlineInternal = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('외부 링크 밑줄')
        .setDesc('외부 링크에 밑줄을 표시합니다.')
        .addToggle(toggle => toggle.setValue(this.plugin.settings.underlineExternal)
          .onChange((value) => {
            this.plugin.settings.underlineExternal = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('미디어 최대 너비')
        .setDesc('이미지와 동영상이 줄의 전체 너비를 채웁니다.')
        .addToggle(toggle => toggle.setValue(this.plugin.settings.fullWidthMedia)
          .onChange((value) => {
            this.plugin.settings.fullWidthMedia = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })));

    // Layout section
    const layoutDesc = createFragment();
    layoutDesc.appendText('이 옵션은 파일별로도 설정할 수 있습니다. 자세한 내용은 ');
    layoutDesc.appendChild(
      createEl('a', {
        text: '문서',
        href: 'https://minimal.guide/features/block-width',
      })
    );
    layoutDesc.appendText('를 참고하세요.');

    const layoutHeading = createFragment();
    layoutHeading.createDiv({cls: 'setting-item-name', text: '레이아웃'});
    const layoutDescDiv = layoutHeading.createDiv({cls: 'setting-item-description'});
    layoutDescDiv.appendChild(layoutDesc);

    new SettingGroup(containerEl)
      .setHeading(layoutHeading)
      .addSetting(setting => setting
        .setName('이미지 격자')
        .setDesc('연속된 이미지를 열로 배치합니다. 새 행을 만들려면 이미지 사이에 빈 줄을 하나 더 추가하세요.')
        .addToggle(toggle => toggle.setValue(this.plugin.settings.imgGrid)
          .onChange((value) => {
            this.plugin.settings.imgGrid = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('차트 너비')
        .setDesc('차트 블록의 기본 너비입니다.')
        .addDropdown(dropdown => dropdown
          .addOption('chart-default-width','기본')
          .addOption('chart-wide','넓은 줄 너비')
          .addOption('chart-max','최대 줄 너비')
          .addOption('chart-100','창 너비의 100%')
          .setValue(this.plugin.settings.chartWidth)
          .onChange((value) => {
            this.plugin.settings.chartWidth = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('iframe 너비')
        .setDesc('iframe 블록의 기본 너비입니다.')
        .addDropdown(dropdown => dropdown
          .addOption('iframe-default-width','기본')
          .addOption('iframe-wide','넓은 줄 너비')
          .addOption('iframe-max','최대 줄 너비')
          .addOption('iframe-100','창 너비의 100%')
          .setValue(this.plugin.settings.iframeWidth)
          .onChange((value) => {
            this.plugin.settings.iframeWidth = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('이미지 너비')
        .setDesc('이미지 블록의 기본 너비입니다.')
        .addDropdown(dropdown => dropdown
          .addOption('img-default-width','기본')
          .addOption('img-wide','넓은 줄 너비')
          .addOption('img-max','최대 줄 너비')
          .addOption('img-100','창 너비의 100%')
          .setValue(this.plugin.settings.imgWidth)
          .onChange((value) => {
            this.plugin.settings.imgWidth = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('지도 너비')
        .setDesc('지도 블록의 기본 너비입니다.')
        .addDropdown(dropdown => dropdown
          .addOption('map-default-width','기본')
          .addOption('map-wide','넓은 줄 너비')
          .addOption('map-max','최대 줄 너비')
          .addOption('map-100','창 너비의 100%')
          .setValue(this.plugin.settings.mapWidth)
          .onChange((value) => {
            this.plugin.settings.mapWidth = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('표 너비')
        .setDesc('표와 Dataview 블록의 기본 너비입니다.')
        .addDropdown(dropdown => dropdown
          .addOption('table-default-width','기본')
          .addOption('table-wide','넓은 줄 너비')
          .addOption('table-max','최대 줄 너비')
          .addOption('table-100','창 너비의 100%')
          .setValue(this.plugin.settings.tableWidth)
          .onChange((value) => {
            this.plugin.settings.tableWidth = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })));

    // Typography section
    new SettingGroup(containerEl)
      .setHeading('글꼴')
      .addSetting(setting => setting
        .setName('본문 글꼴 크기')
        .setDesc('본문에 사용할 글꼴 크기입니다(기본값: 16).')
        .addText(text => text.setPlaceholder('16')
          .setValue((this.plugin.settings.textNormal || '') + '')
          .onChange((value) => {
            this.plugin.settings.textNormal = parseFloat(value);
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.setFontSize();
          })))
      .addSetting(setting => setting
        .setName('작은 글꼴 크기')
        .setDesc('사이드바와 탭의 텍스트에 사용할 글꼴 크기입니다(기본값: 13).')
        .addText(text => text.setPlaceholder('13')
          .setValue((this.plugin.settings.textSmall || '') + '')
          .onChange((value) => {
            this.plugin.settings.textSmall = parseFloat(value);
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('줄 간격')
        .setDesc('텍스트의 줄 간격입니다(기본값: 1.5).')
        .addText(text => text.setPlaceholder('1.5')
          .setValue((this.plugin.settings.lineHeight || '') + '')
          .onChange((value) => {
            this.plugin.settings.lineHeight = parseFloat(value);
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('일반 줄 너비')
        .setDesc('한 줄에 표시할 문자 수입니다(기본값: 40).')
        .addText(text => text.setPlaceholder('40')
          .setValue((this.plugin.settings.lineWidth || '') + '')
          .onChange((value) => {
            this.plugin.settings.lineWidth = parseInt(value.trim());
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('넓은 줄 너비')
        .setDesc('넓은 요소에 표시할 한 줄당 문자 수입니다(기본값: 50).')
        .addText(text => text.setPlaceholder('50')
          .setValue((this.plugin.settings.lineWidthWide || '') + '')
          .onChange((value) => {
            this.plugin.settings.lineWidthWide = parseInt(value.trim());
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('최대 줄 너비(%)')
        .setDesc('창 안에서 줄이 차지할 수 있는 공간의 비율입니다(기본값: 88).')
        .addText(text => text.setPlaceholder('88')
          .setValue((this.plugin.settings.maxWidth || '') + '')
          .onChange((value) => {
            this.plugin.settings.maxWidth = parseInt(value.trim());
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName('편집기 글꼴')
        .setDesc('편집 모드에서 Obsidian 모양 설정의 본문 글꼴을 이 글꼴로 대체합니다.')
        .addText(text => text.setPlaceholder('')
          .setValue((this.plugin.settings.editorFont || '') + '')
          .onChange((value) => {
            this.plugin.settings.editorFont = value;
            void this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })));
  }
}
