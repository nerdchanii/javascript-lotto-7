# javascript-lotto-precourse

## 기능목록

- [ ] 사용자의 입력과 관련된 기능
  - [ ] 잘못된 입력이 주어졌을 경우, `[ERROR]`로 시작하는 메시지를 출력하고 다시 입력을 받는다.
  - [ ] 사용자의 입력은 금액, 당첨번호, 보너스 번호를 받을 수 있다.

- [ ] 출력과 관련된 기능
  - [ ] 구매한 로또의 갯수를 출력한다.
  - [ ] 구매한 로또용지를 사용자에게 보여준다.
  - [ ] 당첨 통계를 보여줄 수 있다.

- [ ] 로또 구매기능
  - [ ] 사용자는 로또를 구매할 수 있다.
    - [ ] 사용자는 로또를 구매할 금액을 입력할 수 있다. 
    - [ ] 금액은 1,000원 단위로 입력 받아야 한다.
    - [ ] 단위가 맞지 않을 경우 예외 처리해야한다
    - [ ] 단위에 맞게 로또를 구매한다.

- [ ] 로또 발행기능
  - [ ] `MissionUtil.Random`을 이용하여 Random한 로또를 생성한다.
  - [x] 로또는 1~45까지의 숫자 중 6개를 가진다.
  - [x] 로또는 중복된 숫자를 가질 수 없다. 

- [ ] 로또 당첨번호 추첨기능
  - [ ] 당첨번호는 중복도되지 않는 숫자 6개와 보너스 번호 1개를 사용자로부터 입력받는다. 
  - [ ] 당첨은 1~5등까지 존재한다.
  - [ ] 당첨기준은 아래와 같다.
    - 1등: 6개 일치
    - 2등: 5개 일치 + 보너스 번호 일치
    - 3등: 5개 일치
    - 4등: 4개 일치
    - 5등: 3개 일치
  - [ ] 당첨금액은 아래와 같다.
    - 1등: 2,000,000,000원
    - 2등: 30,000,000원
    - 3등: 1,500,000원
    - 4등: 50,000원
    - 5등: 5,000원
  - [ ] 잘못된 입력이 주어졌을 경우, `[ERROR]`로 시작하는 메시지를 출력하고 다시 입력을 받는다.
  
- [ ] 로또 당첨금액 계산기능
  - [ ] 수익률을 계산한다.
  - [ ] 수익률은 아래와 같다. 당첨금액 / 구매금액 * 100
  - [ ] 수익률은 소수점 둘째자리까지 출력한다.

- [ ] 당첨 통계기능
  - [ ] 당첨번호와 로또를 비교하여 당첨 통계를 출력한다.
  - [ ] 템플릿은 다음과 같다.
  ```
  당첨통계
  ---
  n개 일치 (m원) - o개
  ...
  ...
  총 수익률은 p%입니다.
  ```

