### Node.js 버전 확인

-   node -v

### npm 버전 확인

-   npm -v

### 순수 리엑트 설치

| 명령어                                                  | 설명                           | 특징                                     |
| ------------------------------------------------------- | ------------------------------ | ---------------------------------------- |
| `npx create-react-app my-app`                           | **Create React App**(CRA) 사용 | 전통적인 방식, 설정 자동화, Webpack 기반 |
| `npm create vite@latest my-app`                         | Vite로 프로젝트 생성           | 빠름, 설정 유연, 최신 개발 방식          |
| `npm create vite@latest my-app -- --template react-swc` | Vite + React + SWC 사용        | Vite 기반 + SWC 컴파일러로 더 빠른 빌드  |

#### 상세 설명

1. npx create-react-app my-app  
   CRA(Create React App) 도구를 사용해서 리액트 앱을 생성  
   내부적으로 Webpack, Babel 등을 자동 설정  
   장점: 초보자에게 친숙하고 안정적  
   단점: 설정 수정이 어려움 (eject 없이 내부 설정 보기 힘듦), 무겁고 느림
   <code>npx create-react-app my-app</code>

2. npm create vite@latest my-app  
   Vite는 CRA보다 훨씬 빠른 프론트엔드 빌드 툴  
   npm create는 create-\* 스크립트를 실행하는 방법  
   기본 템플릿 선택 가능 (vanilla, react, vue, svelte 등)  
   CRA보다 더 빠른 개발 서버 시작 속도와 빌드 시간 제공  
   <code>npm create vite@latest my-app</code>

3. **_npm create vite@latest my-app -- --template react-swc_** ✅  
   위의 Vite 생성 명령에 템플릿을 명확히 지정  
   react-swc는 Babel 대신 SWC(Speedy Web Compiler) 사용  
   Go로 만든 초고속 컴파일러  
   빌드 속도, HMR(핫 리로딩) 속도 매우 빠름  
   <code>npm create vite@latest my-app -- --template react-swc</code>

#### 추천

| 상황                                        | 추천 명령어                                             |
| ------------------------------------------- | ------------------------------------------------------- |
| 빠르고 가벼운 최신 리액트 프로젝트 시작     | `npm create vite@latest my-app -- --template react-swc` |
| CRA 기반으로 익숙한 환경에서 시작하고 싶음  | `npx create-react-app my-app`                           |
| 템플릿 고르고 싶고, 설정 자유롭게 하고 싶음 | `npm create vite@latest`                                |

---

![기본설정](set.png)

---

#### 서버 실행

-   <code>npm run dev</code>

#### 확장 프로그램 설치

-   ES7+ React/Redux/React-Native snippets

#### .jsx 파일 기본 템플릿 셋팅

-   <code>rafce</code>

---

#### 리엑트안에서 절대경로

```
React 자체라기보다는, React 프로젝트에서 사용하는 빌드 도구 —
예를 들어:
Vite
Create React App (CRA)
Next.js (조금 다르지만 비슷한 개념 있음)
이런 도구들이 / 경로를 public/ 폴더로 고정해서 처리하도록 만들어져 있어요.

/는 실제로는 public 폴더 루트를 가리킴

왜 이렇게 동작하게 만들었을까?
이렇게 하면:
정적 자원(favicon, 로고, 외부 JS/CSS 파일 등)을 쉽게 다룰 수 있고
빌드 시 해당 자원들은 번들에 포함되지 않고 그대로 복사됨
상대 경로 문제 없이 /images/xx.jpg처럼 절대 경로로 바로 접근 가능함

⚠️ 주의할 점
public 폴더는 import로 접근할 수 없음. → src 파일에서는 그냥 URL처럼 /이미지.jpg로 써야 함
반대로 src 폴더 안의 파일은 반드시 import 해서 사용해야 함 → /로 접근 불가능
```

### 🍕

my-app4: props  
my-app5: useState(hooks)

-   Com4.jsx: login, logout  
    my-app6: useEffect(hooks)
-   App.jsx: useEffect(()=>{},[의존값])  
     : [] – 한번만, 생략 – 랜더링 시 계속 실행, [값] – 값이 변경될 때마다 - Com1.jsx: [값] 코드 예시  
    my-app7: useEffect(hooks) – localStorage
-   Com1.jsx: 자동저장 메모장 코드 예시, status => 단축평가 사용
-   Com2.jsx: useEffect(()=>{},[]), 화면이 열릴 때 한번만 실행되는 메세지 코드 예시
-   Com3.jsx: useEffect(()=>{},[name]), 이름이 변경될 때마다 체크를해서 출력되는 코드 예시  
    my-app8: router (hooks) - react-router-dom: 코드 예시 - useNavigate: Nav2.jsx 코드 예시  
    my-app11: axios 설치방법, react+sass 폴더 디렉토리 구조 - 폴더구조: scss, com, pages, styles ...
-   Navbar 생성, BrowserRouter as Router 이름변경해서 활용방법 - 무한슬라이더 생성 (Home 페이지 슬라이드 적용완료)
-   Contact: jsx, scss 파일생성 및 IntersectionObserver 사용
-   axios (fetch 대용)

#### SASS 설치

-   프로젝트 폴더(my-app) 이동 후
-   <code>npm i sass</code>

#### SASS 파일

-   파일명: App.scss
-   <code>$main: skyblue;</code>
-   <code>body{ background-color: $main }</code>
-   <code>body{ .todoList{ h1 { } } }</code>
-   sass는 module화 시켜서 사용 (호출– import styles from './Acom01.module.scss';)
-   assets > sass 폴더 생성 후 파일보관
-   import styles from '../assets/scss/a.module.scss';

```
body{
    background-color: $main;
    .todoList{
        padding: 10px;

        h1 {
            <!-- &: 내가 가진 부모 -->
            &:hover {
                ...
            }

            &.on {
                ...
            }
        }
    }
}
```

-   *var.scss: *가 붙은 파일은 번역되지않음

```_var.scss
    $bgColor: skyblue;
    $mainSize: 25px;
    $radius: 10px;
```

#### \_파일 호출

@use './var' as \*; (use에서는 확장자, _ ❌) => Error발생이 많음  
@use './var' as v; (use에서는 확장자, _ ❌) => 많이 쓰임

#### 사용법

color: v.$main;

#### 반복 패턴 정의 (Mixin, include)

-   Mixin (따로 파일을 만들어서 불러옴 모듈처럼)
-   \_mixin.scss 파일명은 내마음대로 언더바 중요

```_mixin.scss
@use './var as v; // 정해진 변수를 사용하고싶을 때 use 활용

@mixin btnBase{
        // background-color: white;
        background-color: v.$main;
        padding: 10px;
        color: white;
        cursor: pointer;
        &:hover { // 호버됐을 때
            backgropund-color: darkblue;
        }
}
```

#### include

```
    @include btnBase;
```

#### 활용예

```a.scss
@use './var' as v; // 정해진 변수를 사용하고싶을 때 use 활용
@use  '.btnBase' as m;
@use 'sass:color'; // sass가 제공하는 color를 가져올 수 있음 ✨

@mixin btnBase{

        h2 {
            ...
        }

        h3 {
            font-size: 30px;
            &:hover { // h3을 hover시키면
                // 자기가 세팅한 색상을 넣으면됨
                background-color: color.adjust(blue); ✨
                // $lightness: -(어둡게), +(밝게)
                background-color: color.adjust($main, $lightness: -10%);  ✨

            }
        }

        .btn {
            @include m.btnBase;
            @include m.btnBase(20px); <= 이런식으로 매개변수를 넣으면 ✅
            @include m.btnBase(20px){
                color: red;  <= 오버라이드 된 코드 (기본코드+추가코드가 적용됨) 📍
            }

        }
}
```

#### Mixin에 prams 입력 가능

```
@mixin btnBase($pad: 16px) {
    background-color: v.$main;
    padding: $pad; <= 반영됨 ✅
    ...
    @content; // 오버라이드 – btn만들때 추가하고싶은거 code로 작성가능 📍
    &:hover {
        background-color: blue;
    }
}
```

### router (hooks)

#### router 설치

-   npm i react-router-dom

#### router 버전확인

-   npm react-router-dom -v

#### import 시 순서 중요

-   import { BrowserRouter, Routes, Route } from 'react';

#### App.jsx 초기세팅

```App.jsx (학습용이라 App.jsx에 BrowserRouter활용해서 nav를 생성했음 )
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './com/Nav';
import Home from './com/Home';
import About from './com/About';
import Map from './com/Map';
// <Route>: 해당경로에 컴포넌트를 매칭
// <Routes>: 여러개의 <Route>들을 감싸는 컨테이너
// <BrowserRouter>: <Routes>를 사용할 수 있게 해주는 컨테이너
// <Route path="/about" element={<Com01 />}>
// <Link to="/about">회사소개</Link> => a 태그와 동일

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <h1> ... </h1> 태그가 있어도 상관없음
            <Routes>
                {/* 스크립에 비유하면 이 공간안에 랜더링됨 (예: Routes.innerHTML = code...) */}
                <Route path='/home' element={<Home />} />
                {/* element: 실제 연결시켜주는 옵션 */}
                <Route path='/about' element={<About />} />
                <Route path='/map' element={<Map />} />
            </Routes>

            ... Routes는 반복해도 상관없음
        </BrowserRouter>
    );
};

export default App;
```

#### 컴포넌트 페이지 Home, About, Map + Nav 필요 (Link 사용하기 위함)

```Nav.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './com/Nav';
import Home from './com/Home';
import About from './com/About';
import Map from './com/Map';
// <Route>: 해당경로에 컴포넌트를 매칭
// <Routes>: 여러개의 <Route>들을 감싸는 컨테이너
// <BrowserRouter>: <Routes>를 사용할 수 있게 해주는 컨테이너
// <Route path="/about" element={<Com01 />}>
// <Link to="/about">회사소개</Link> => a 태그와 동일

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                {/* 스크립에 비유하면 이 공간안에 랜더링됨 (예: Routes.innerHTML = code...) */}
                <Route path='/home' element={<Home />} />
                {/* element: 실제 연결시켜주는 옵션 */}
                <Route path='/about' element={<About />} />
                <Route path='/map' element={<Map />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
```

#### useNavigate 코드 예시

```Nav2.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Nav2 = () => {
    let navigator = useNavigate();
    return (
        <div>
            <button onClick={() => navigator('/home')}>홈으로</button>
            <button onClick={() => navigator('/about')}>회사소개</button>
            <button onClick={() => navigator('/map')}>오시는 길</button>
        </div>
    );
};

export default Nav2;
```

### 실무처럼 사용해보기

-   WHY? 리덕스 즉, 대용량 리엑트 처리할 때 충돌위험이 있어서 이런 방식을 선호

#### main.jsx

```main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> ✨
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

#### App.jsx

```App.jsx
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './com/Nav';
import Subpage from './com/Subpage';

function App() {
    return (
        <>
            <Nav />
            <hr />
            <Routes>
                <Route path='/home' element={<Subpage title='회사' sub='좋은 회사' />} />
                <Route path='/about' element={<Subpage title='회사소개' sub='무한상사' />} />
                <Route path='/contact' element={<Subpage title='문의' sub='게시판' />} />
            </Routes>
        </>
    );
}

export default App;
```

#### com > Nav.jsx, Subpage.jsx

#### axios 설치

> npm i axios

#### axios 버전확인

> npm axios -v

#### 패키지 삭제

> npm rm axios

#### 현재 적용된 패키지 정보

package.json

#### 페이드인아웃

#### 스크롤이벤트

#### intersectionObserve

#### axios 사용법, axios는 파싱한 채로 들고옴 ( json() )
> let { data } = await axios.get('/gallery.json'); // ✨  
#### axios import
> import axios from 'axios';  