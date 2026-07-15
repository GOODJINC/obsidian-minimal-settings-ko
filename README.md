# Minimal Theme Settings 한국어

[kepano/obsidian-minimal-settings](https://github.com/kepano/obsidian-minimal-settings)의 비공식 한국어화 버전입니다. 원본 플러그인의 기능과 설정값은 유지하면서 설정 화면과 명령 팔레트 문구를 한국어로 제공합니다.

이 프로젝트는 원본의 [MIT 라이선스](LICENSE)를 따르며, 원작은 [Steph Ango (@kepano)](https://github.com/kepano)에게 있습니다.

## 버전 정보

- 원본 기준 버전: `8.2.3`
- 현재 한국어판 버전: `8.2.3-ko.1`
- 최신 릴리즈: [8.2.3-ko.1](https://github.com/GOODJINC/obsidian-minimal-settings-ko/releases/tag/8.2.3-ko.1)

## 문서

- [한국어 전체 문서](README.ko.md)
- [원본 영어 문서](README.en.md)
- [Minimal 공식 가이드](https://minimal.guide/)

## 설치

1. [Releases](https://github.com/GOODJINC/obsidian-minimal-settings-ko/releases)에서 최신 릴리즈의 `main.js`, `manifest.json`, `styles.css`를 받습니다.
2. Obsidian 볼트의 `.obsidian/plugins/obsidian-minimal-settings/` 폴더에 세 파일을 복사합니다.
3. Obsidian을 다시 불러온 뒤 **설정 → 커뮤니티 플러그인**에서 플러그인을 활성화합니다.

이 한국어판은 원본과 동일한 플러그인 ID를 사용합니다. 원본 플러그인과 동시에 활성화하지 말고, 원본 자동 업데이트도 꺼 두세요. 업데이트 시 한글화한 `main.js`가 덮어써질 수 있습니다.

## 원본 업데이트 반영

원본 변경 사항은 자동으로 반영되지 않습니다. 필요할 때만 아래 명령으로 원본 저장소의 변경을 가져와 한글화와 병합합니다.

```bash
git fetch upstream
git merge upstream/main
npm run build
```

같은 문구를 원본에서도 수정했다면 Git이 충돌을 알려줍니다. 새 영어 문구에 맞춰 한국어 번역을 정리한 뒤 다시 빌드하면 됩니다.

## 변경 사항

- 설정 화면의 제목, 설명, 드롭다운 옵션 한글화
- 명령 팔레트와 단축키 설정에 보이는 플러그인 명령 한글화
- 원본 기능 및 내부 설정 식별자는 변경하지 않음

