# KSA Seminar reservatoin KIOSK
한국과학영재학교 세미나실 예약 키오스크 프로그램입니다.

## Introduction
### Project Schedule
* 2021년 1학기 JAMS project
* 제작기간 : 2021/02/25 ~ 2021/06/13
* 사용기간 : 2021년 2학기부터 예정

### Team Member
| 이름 | 설명 |
| ------ | ----------------- |
| 김문수 | 하드웨어 제작 |
| 박주원 | UI/UX 디자인 |
| 이지원 | 소프트웨어 제작 |
| 이지형 | 기획 |

### Tech Stack
|  | 이름 | 설명 |
| -----| ----- | -----|
| ![](https://img.icons8.com/color/24/000000/javascript.png) | JavaScript | JavaScipt를 사용하여서 text 파일 저장 및 백엔드를 구성하였습니다. |
| ![](https://img.icons8.com/bubbles/24/000000/react.png) | Electron | Electron으로 데스크탑 application을 만들었습니다. |
| ![](https://img.icons8.com/color/24/000000/git.png) | Git | Git, Github을 사용하여서 버전관리를 하였습니다. |

## Getting Started

> This electron app was build with [electron-quick-start](https://github.com/electron/electron-quick-start).

```shell
# clone the repo
git clone https://github.com/jiwon79/KSA-reservation-KIOSK-electron-

# change into the repo directory
cd KSA-reservation-KIOSK-electron-

# install dependencies
npm install

# run
npm start
```
Then start electron program.

해당 프로그램은 KIOSK 모니터에 최적화 되어있어 노트북에서는 이상하게 보일 수 있습니다.

## How to Use
### Main Page, Modal Page, Overall Page
<img src="https://user-images.githubusercontent.com/59159410/123046321-ee85ca00-d436-11eb-98ff-41c545309368.PNG" width="300" align="left">
<img src="https://user-images.githubusercontent.com/59159410/123515530-bf8b8480-d6d2-11eb-8733-36bfc32643c9.png" width="300" align="left">
<img src="https://user-images.githubusercontent.com/59159410/123046336-f2195100-d436-11eb-8761-da61d246b3ca.PNG" width="300">

* 전체 세미나실의 예약현황을 볼 수 있습니다.
* 톱니버튼을 누르면 메인 모달창이 뜨면서 제작자 정보가 나옵니다.
* 세미나실 사진을 클릭하면 해당 세미나실 예약 페이지로 이동합니다.

### Reservation Page
<img src="https://user-images.githubusercontent.com/59159410/123046332-f0e82400-d436-11eb-8d2e-e639a108ec91.PNG" width="300" align="left">
<img src="https://user-images.githubusercontent.com/59159410/123046340-f2195100-d436-11eb-8233-6d9de64ba110.PNG" width="300" align="left">
<img src="https://user-images.githubusercontent.com/59159410/123046333-f180ba80-d436-11eb-8041-9c75c9ab69f3.PNG" width="300">

* 예약하고 싶은 시간을 선택한 후, 학번, 이름, 전화번호를 입력한 후 예약버튼을 누릅니다.
* 현재 예약 상태, 예약한 사람의 학번이 표시됩니다.
* 세미나실을 3시간 이상 예약한 경우 / 학번, 이름이 잘못된 경우 / 정보를 모두 입력하지 않았을 경우 modal 창이 뜹니다.
* 예약을 완료할 경우 예약 완료 페이지로 이동합니다.

### Reservation Cancel Page
<img src="https://user-images.githubusercontent.com/59159410/123046342-f2b1e780-d436-11eb-8247-ce289c298ddd.PNG" width="300" align="left">
<img src="https://user-images.githubusercontent.com/59159410/123046345-f3e31480-d436-11eb-8226-43a61347b65d.PNG" width="300" align="left">
<img src="https://user-images.githubusercontent.com/59159410/123046347-f3e31480-d436-11eb-8a7d-e903142ab43d.PNG" width="300">

* 학번, 이름, 전화번호를 입력하면 현재 예약 상태가 나오면서 취소할 수 있습니다
* 현재 예약한 시간중 취소할 시간을 클릭한 후 예약취소 버튼을 클릭하면 취소가 되고 완료페이지로 이동합니다.
