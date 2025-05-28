# Vibe Stopwatch

React로 구현된 모던한 스톱워치 애플리케이션입니다.

## 주요 기능

### 1. 기본 타이머 기능
- 시작/정지/리셋 기능
- 밀리초 단위의 정밀한 시간 측정
- 직관적인 디스플레이

### 2. 랩 기록 기능
- 랩 타임 기록
- 랩 기록 삭제
- 랩 기록 통계 분석
  - 평균 랩 타임
  - 최소/최대 랩 타임
  - 표준편차 계산

### 3. 테마 지원
- 라이트/다크 모드 전환
- 사용자 테마 설정 저장
- 자동 테마 적용

## 기술 스택

- React 18
- Vite
- CSS Variables
- LocalStorage

## 시작하기

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

## 프로젝트 구조

```
src/
├── components/
│   └── Stopwatch.jsx    # 메인 스톱워치 컴포넌트
├── hooks/
│   ├── useTimer.js      # 타이머 로직
│   └── useLaps.js       # 랩 기록 관리
├── context/
│   └── ThemeContext.jsx # 테마 관리
└── App.jsx             # 루트 컴포넌트
```

## 사용된 주요 기술

### 커스텀 훅
- `useTimer`: 타이머 상태 및 로직 관리
- `useLaps`: 랩 기록 및 통계 관리

### Context API
- `ThemeContext`: 전역 테마 상태 관리

### 성능 최적화
- `useCallback`을 통한 함수 메모이제이션
- 조건부 렌더링을 통한 최적화

