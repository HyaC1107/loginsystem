
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill}	 
}
//******************************* build describe ************************************************ 
// 포트폴리오제시항목의 1. 
//let d1 = new DataSet("개발환경구축")// 메뉴별 타이틀입니다. menu.js에서 설정되어 있어야 하며 menu0.url = "?menu=0" 의 숫자와 data_sets 의 배열 인덱스와 동일해야 합니다.
// 포트폴리오 제시항목의 1-1
//d1.set_content("서브컨텐츠") // 각 메뉴별 화면을 구성하는 화면 구성요소입니다. 
// 포트폴리오 제시항목의 1-1 내용별 컨텐츠
//d1.set_img(항목별인덱스,{imgtitle:"요구사항명세",imgurl:"구글이미지주소",imglog:"이미지에대한 설명",sourceurl:"작성된 문서등 관련링크 주소"}) 
// 항목별 인덱스는 1-1 제시항목별 입력값인 정수 인덱스 입니다. set_content 인덱스 순서와 맞아야 합니다.
//  set_content는 입력순서별 인덱스로 0 부터 시작입니다.
let d1 = new DataSet("개발환경구축")//메인 타이틀 //메뉴번호
d1.set_content("사용자의 로그인 기능을 구현하여 로그인 사용자와 비로그인 사용자에 제공 서비스를 구분한다.")//서브 타이틀
d1.set_img(0,{imgtitle:"요구사항명세서 작성",imgurl:"https://drive.google.com/file/d/1ByVffdJIDtxmNzKoqSd9gLwfmScxr5nJ/view?usp=drive_link",imglog:"작성된 요구사항",sourceurl:"https://docs.google.com/document/d/1tWmSKKSthH6c-ZVRYLNpawcG5pldLqCci5fyvcdu6So/edit?usp=drive_link"})//이미지타이틀
d1.set_img(0,{imgtitle:"ER다이어그램 설계",imgurl:"https://drive.google.com/file/d/1EP83zfDC1Zt_UGxzl_xHBBJiCFAW9GdL/view?usp=drive_link",imglog:"ER 다이어그램",sourceurl:"https://drive.google.com/drive/folders/1waedsEZAte7v8TN055KBSps5PNo66gAa?usp=drive_link"})


d1.set_content("목표 시스템 개발을 위한 적정한 언어를 선정하고 라이선스와 향후 지원사항을 참고하여 결정한다.")
d1.set_img(1,{imgtitle:"개발언어선정",imgurl:"https://drive.google.com/file/d/1pkM918IhEfsK4-HEauQOc5iykCRa3QOw/view?usp=drive_link",imglog:"자바언어기반 스프링프레임워크, html5, memberData file",sourceurl:"https://docs.google.com/document/d/1UvD1fZNL9yjLORwxgAW5vD6C-A_RwL1zcNan9RZqmys/edit?usp=drive_link"})//이미지타이틀
d1.set_img(1,{imgtitle:"open JDK",imgurl:"https://drive.google.com/file/d/119aGrjpD8KCH4ZEC-q3uY7ZCKuQgrKOB/view?usp=drive_link",imglog:"open JDK 23.0.1",sourceurl:"https://github.com/HyaC1107/loginsystem"})//이미지타이틀
d1.set_img(1,{imgtitle:"스프링프레임워크",imgurl:"https://drive.google.com/file/d/1HRUQhj2Tk6AzIW_NSRD59wGUAduJYTmW/view?usp=drive_link",imglog:"오픈소스 스프링프레임워크 v4.221",sourceurl:"https://github.com/HyaC1107/loginsystem"})//이미지타이틀
d1.set_img(1,{imgtitle:"html,css,js",imgurl:"https://drive.google.com/file/d/1qPd3XdNiErdPFH7uZZ0VnTAsR1Wh6e0t/view?usp=drive_link",imglog:"html5, CSS, Javascript",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d1.set_img(1,{imgtitle:"Mybatis3",imgurl:"https://drive.google.com/file/d/1pTxGW6os8tBko6qDtM6imzxDA9KBk57l/view?usp=drive_link",imglog:"DB를 쉽게 다룰수 있게 해주는  프레임워크",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d1.set_img(1,{imgtitle:"mariadb 11.6.2",imgurl:"https://drive.google.com/file/d/1ye9IoTwWezRL6xiVPpC0dNcHb9wCC9vl/view?usp=drive_link",imglog:"회원정보를 저장하는 mariaDB",sourceurl:"https://github.com/HyaC1107/loginsystem"})


d1.set_content("코딩개발도구와 테스트 및 빌드, 패키징, 배포등 개발 전반에 대한 필요한 환경을 설정한다.")
d1.set_img(2,{imgtitle:"개발환경 구축 명세",imgurl:"https://drive.google.com/file/d/1PIW1EuuWPbiaWsbSnSy7d9X4LB3vYcgi/view?usp=drive_link",imglog:"운영체제 및 개발에 필요한 환경을 고려하여 개발도구, 테스트도구, 빌드도구, 패키징도구, 형상관리도구등을 결정",sourceurl:"https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"개발도구 Spring for Eclipse",imgurl:"https://drive.google.com/file/d/1eOp3QXmqS2PcjLODUUFFMsBKa4BwA2eI/view?usp=drive_link",imglog:"자바 스프링 서버단 개발을 위한 도구",sourceurl:"https://github.com/HyaC1107/loginsystem"})//이미지타이틀
d1.set_img(2,{imgtitle:"개발도구 Visual Studio Code",imgurl:"https://drive.google.com/file/d/1ptpGELNS5RIfWq1pr8d9WSAPyFNF5yzU/view?usp=drive_link",imglog:"html,css,js 클라이언트단 개발을 위한 도구",sourceurl:"https://github.com/HyaC1107/loginsystem"})//이미지타이틀
d1.set_img(2,{imgtitle:"테스트도구 postman",imgurl:"https://drive.google.com/file/d/1tOdEYH7b6GWoOdzZCvTnMF8RG2UMjNTZ/view?usp=drive_link",imglog:"프로그램이 정상작동 여부를위한 테스트 도구",sourceurl:"https://github.com/HyaC1107/loginsystem"})//이미지타이틀
d1.set_img(2,{imgtitle:"빌드도구 gradle",imgurl:"https://drive.google.com/file/d/15dr-zJ7S5Vjacgq_DszTBx60DTBua0-T/view?usp=drive_link",imglog:"프로그램 빌드 및 외부 라이브러리 디펜더시를 위한 도구",sourceurl:"https://github.com/HyaC1107/loginsystem"})//이미지타이틀
d1.set_img(2,{imgtitle:"형상관리도구 git",imgurl:"https://drive.google.com/file/d/1DEMNf6ZCTYMGPubIOYAvLNeVqLL5GXAh/view?usp=drive_link",imglog:"프로그램의 전반적인 개발협업 및 버전관를 위한 도구",sourceurl:"https://github.com/HyaC1107/loginsystem"})//이미지타이틀

d1.set_fill("서버의 보안성과 각 수행기능별 패턴을 분리하기 위해 Spring WAS 와 사용자 View 기능을 위해 웹브라우져에서 일반적인 작동이 가능한 HTML5 를 구현하며 데이터베이스 연동 대신 파일로 회원목록 저장")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀

d2.set_content("공통모듈 구현")//서브 타이틀
d2.set_img(0,{imgtitle:"로그인, 로그아웃 모듈 구현",imgurl:"https://drive.google.com/file/d/1FtVS7IS0jWs_cyE3jz12oK-emPDCL2gv/view?usp=drive_link",imglog:"로그인 로그아웃 모듈 먼저 구현",sourceurl:"https://github.com/HyaC1107/loginsystem"})//이미지타이틀
d2.set_img(0,{imgtitle:"공통 모듈 분리",imgurl:"https://drive.google.com/file/d/1AwO5ssAyinQeqSwjdxi9HQO6QiOpagBN/view?usp=drive_link",imglog:"공통 모듈을 따로 js파일로 분리",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d2.set_img(0,{imgtitle:"분리된공통모듈테스트",imgurl:"https://drive.google.com/file/d/1njVldS8OVQnJ4f3_I0qdyuI9mZLO6hcU/view?usp=drive_link",imglog:"분리된 공통 모듈 정상작동되는지 테스트",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d2.set_img(0,{imgtitle:"공통 모듈 분리 적용",imgurl:"https://drive.google.com/file/d/1uF2q5I-glNup-o5FDeqksODawackux5W/view?usp=drive_link",imglog:"분리된 공통 모듈 적용",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d2.set_content("테스트케이스 작성")
d2.set_img(1,{imgtitle:"테스트케이스 작성",imglog:"테스트 케이스를 작성하여 테스트준비",imgurl:"https://drive.google.com/file/d/1PUPViZjw78YOKOxJ334Z-0DgniF8gfD_/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d2.set_content("단위테스트")
d2.set_img(2,{imgtitle:"junit 테스트 구현",imgurl:"https://drive.google.com/file/d/1WkIcwYIChQvCR7owe5ZUbFe8dkRNpbwL/view?usp=drive_link",imglog:"junit을 통해 회원가입 멤버의 아이디/비밀번호 유효성 검증 정상작동하는지 테스트 로직 설계",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d2.set_img(2,{imgtitle:"테스트 성공여부",imgurl:"https://drive.google.com/file/d/1j-KnR_Mmvw14MyOuvwBSLneXmQcZbEv2/view?usp=drive_link",imglog:"테스트 시행했을때 정상작동하는지 체크",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d2.set_img(2,{imgtitle:"테스트 출력값",imgurl:"https://drive.google.com/file/d/1_dw_aeuDBuPsS_sbSGs2BfKJpXkEFCEC/view?usp=drive_link",imglog:"테스트 했을시의 입력값, 예상 출력값, 실제 출력값표기",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d2.set_content("테스트 결과보고서")
d2.set_img(3,{imgtitle:"테스트결과보고서",imgurl:"https://drive.google.com/file/d/1FQdGD90mqCfcFKscN0UlzS39ouLBLAbD/view?usp=drive_link",imglog:"위 테스트에 기반하여 테스트 결과 보고서 작성",sourceurl:"https://github.com/HyaC1107/loginsystem"})

d2.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d2)

// menu3 =============================================================
// d2.set_img(3,{imgtitle:"",imgurl:"",sourceurl:"https://github.com/HyaC1107/loginsystem"})
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브타이틀
d3.set_img(0,{imgtitle:"회원가입 페이지",imglog:"회원가입페이지 UI구현",imgurl:"https://drive.google.com/file/d/1QQ0OwKXlSF8t_LMg9wmH62DzKMjs0Env/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_img(0,{imgtitle:"signupMember",imglog:"연동된 컨트롤러에서의 signup 구현",imgurl:"https://drive.google.com/file/d/1yxK73WiWVR8sF9oLfTk62gc2zqsUVSgY/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_img(0,{imgtitle:"signupService",imglog:"서비스로직에서 유효성 점검하는 로직 구현",imgurl:"https://drive.google.com/file/d/1YENcQ3CoK1httW6k9UZCWJ9tAqwR9aFI/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_img(0,{imgtitle:"memberModel",imglog:"회원가입할 회원 MODEL설계",imgurl:"https://drive.google.com/file/d/14dCbAqbAxd28PSICkbiigx6vK0x59v82/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_img(0,{imgtitle:"signupXML",imglog:"xml파일을 통해 DB에 저장",imgurl:"https://drive.google.com/file/d/11sFawm-1TT0hdQ_H7Xcxlnovpk5YQ2hy/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_img(0,{imgtitle:"서버수신스냅샷",imglog:"회원가입 성공시 서버에서 성공메시지출력",imgurl:"https://drive.google.com/file/d/1OnzkICUj-F6fmFgi_NbspdSekl6QSl5N/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_img(0,{imgtitle:"회원가입성공페이지",imglog:"회원가입 성공시 클라이언트에서 결과",imgurl:"https://drive.google.com/file/d/1m4b8xctYaGaoTzcfPgyUSes095-RUXdM/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_content("회원로그인구현")
d3.set_img(1,{imgtitle:"로그인 페이지",imglog:"로그인페이지 UI구현",imgurl:"https://drive.google.com/file/d/17Y0PvVtCL1VS5OhT54jlhl67EBi8JVgm/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_img(1,{imgtitle:"로그인 로직",imglog:"컨트롤러에서 로그인 로직 구현",imgurl:"https://drive.google.com/file/d/1oDCMyVnvZqR3ttVb9iZfHojqR9tfMbf1/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_img(1,{imgtitle:"로그인 데이터 송수신",imglog:"로그인데이터(아이디, 비밀번호) 송수신하도록 구현",imgurl:"https://drive.google.com/file/d/1s2C37dSebNob1f318N8Qh3TMg7S_ehrI/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_img(1,{imgtitle:"사용자 인증",imglog:"MODEL에서 DB접근후 인증",imgurl:"https://drive.google.com/file/d/1Aj51Jrg_bh7GHpFHGFhqFV1slKQaWhoq/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_img(1,{imgtitle:"로그인 세션",imglog:"로그인 세션인가받는 코드 구현",imgurl:"https://drive.google.com/file/d/185RddzjNCd6x118U5viS82oohWgsBMrZ/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_img(1,{imgtitle:"로그인 서버단 스냅샷",imglog:"멤버 로그인시 서버단에서 성공메시지 출력",imgurl:"https://drive.google.com/file/d/1aIFhM7Nu4y2l9MTyu7H44nTvO3lbpMDZ/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_img(1,{imgtitle:"로그인 결과",imglog:"클라이언트단에서 로그인 성공시 화면",imgurl:"https://drive.google.com/file/d/1WLuuvIdqJvJJ1aGlXjWjBJus1_S9FmaX/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_content("회원로그아웃구현")
d3.set_img(2,{imgtitle:"로그아웃구현",imglog:"컨트롤러에서 로그아웃 로직구현",imgurl:"https://drive.google.com/file/d/1m5g9ynOhxDuhpJ0Ha5rTw8i5wnrb59BD/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_img(2,{imgtitle:"로그아웃버튼",imglog:"로그인 후 로그아웃 버튼 위치",imgurl:"https://drive.google.com/file/d/1kLbOPp0dsAZgpXmhNFprD3bJZqbLVkv8/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_img(2,{imgtitle:"로그아웃 서버단",imglog:"로그아웃 클릭시 서버단에서 출력메시지",imgurl:"https://drive.google.com/file/d/1l_swryBvMPpBh0eN6mVBkcx6R6tDh0L-/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_img(2,{imgtitle:"로그아웃",imglog:"로그아웃 클릭시 결과화면",imgurl:"https://drive.google.com/file/d/1178BkLTWtIIju09SDz4mOmHvAx_7AOj0/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_content("회원리스트연동")
d3.set_img(3,{imgtitle:"회원리스트구현",imglog:"컨트롤로 수신 및 회원리스트 구현",imgurl:"https://drive.google.com/file/d/1jbzpX-Pip9aMZm9NCd1YNf07AlSwsh4y/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_img(3,{imgtitle:"세션확인",imglog:"회원리스트 세션확인",imgurl:"https://drive.google.com/file/d/1WlUbZhFnpP0H3H2GdnUnPYrfr_Y-IurA/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d3.set_img(3,{imgtitle:"회원리스트페이지구현",imglog:"로그인 후 회원리스트 보기를 클릭하여 리스트페이지 볼수있도록 ui구현",imgurl:"https://drive.google.com/file/d/1TSEHS55_Iv5x8OZIjehuyeFxDWrtLtnC/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀

d4.set_content("배치스케줄구현")//서브타이틀
d4.set_img(0,{imgtitle:"application.properties설정",imgurl:"https://drive.google.com/file/d/1PfM56onZgEj7c8Y1ztXTM-T1dTpW03uF/view?usp=drive_link",imglog:"application.properties에 batch추가",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d4.set_img(0,{imgtitle:"BatchConfiguration.java",imglog:"배치 작업 설정",imgurl:"https://drive.google.com/file/d/1ZmaSg55CqbzMYnv7eFmcUoUWuNaNPsmN/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d4.set_img(0,{imgtitle:"BatchSchedule.java",imglog:"배치프로그램을 스케줄이용해 5분마다 실행하도록 성정",imgurl:"https://drive.google.com/file/d/12dvYccM03dM4L5fss-tiOnBdKi-75wRh/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})
d4.set_content("배치프로그램테스트 구현")
d4.set_img(1,{imgtitle:"배치프로그램 테스트",imglog:"5분마다 배치프로그램이 정상작동되는지 테스트한 콘솔내용",imgurl:"https://drive.google.com/file/d/1Aqm9RCAcowefz5MLtdMWEuSuvkIj4yxP/view?usp=drive_link",sourceurl:"https://github.com/HyaC1107/loginsystem"})

d4.set_fill("배치프로그램을 통해 정해진 시간마다 일괄적인 요청을 처리하도록 설정")
data_sets.push(d4)
