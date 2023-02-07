# sakae

: next-app의 배포 사이트

## Specs

next Js 기반 프로젝트

- (React + typescript, scss)

### 디자인 패턴

아토믹 디자인

## SiteMap

### /project 페이지

경력과 진행해왔던 프로젝트를 확인하실 수 있습니다.

### /skills

사용가능한 스킬과 어느정도 역량을 가지고 있는 지에 대한 내용을 살펴보실 수 있습니다.

### /about

HyeYeong의 일 하는 스타일과 장 단점, 생각을 보실 수 있습니다.

### /contact

연락가능한 메일을 기재해두었습니다.

### /games

이 페이지 이하는 실험실로 구현해보고싶었던 소스코드나 기능을 테스트해보는 장소로 활용하고 있습니다.
페이지 내의 컴포넌트가 활성/비활성 되어있는 경우가 있습니다.

## git

### git action setting

push, pull_request

### commit rules

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 수정
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- refactor : 코드 리펙토링
- test : 테스트 코드, 리펙토링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정

### build 순서

$ git add out/ <br/>
$ git commit -m "deploy to gh-pages" <br/>
$ git subtree push --prefix out origin gh-pages
