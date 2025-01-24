package com.itg.examp.test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.itg.examp.MemberService;

@SpringBootTest
public class MemberServiceTests {
	//경계값분석 : boundary analyze
	String[] rightId;
	String[] wrongId;
	String[] rightPw;
	String[] wrongPw;
	@Autowired
	MemberService ms;
	@BeforeEach
	public void setVariable() {
		rightId = new String[] {"aaaa","abcde","abcd","a@E3ool","bb#cc"};
		wrongId = new String[] {"aaa","abc","aa","a#c","123"};
		rightPw = new String[] {"123456","214#aa","aa#11aa","a@eegd","44AA@EE"};
		wrongPw = new String[] {"1177","214#a","#11aa","a@gd","AA@EE"};
	}
	@Test
	public void testId() {
		boolean res = false;
		System.out.println("=========rightId==========");
		for(int i=0;i<rightId.length;i++) {
			res = ms.checkId(rightId[i]);
			System.out.println("입력값: "+rightId[i]+" 예상출력값:true, 출력값: "+res);
			assertEquals(true, res,i+": 올바른 아이디 입니다. :");
		}
		System.out.println("=========wrongId==========");
		for(int i=0;i<wrongId.length;i++) {
			res = ms.checkId(wrongId[i]);
			System.out.println("입력값: "+wrongId[i]+" 예상출력값:false, 출력값: "+res);
			assertEquals(false,res,i+": 잘못된 아이디 입니다. :");
		}
	}
	@Test
	public void testPassword() {
		boolean res = false;
		System.out.println("=========rightPw==========");
		for(String pw : rightPw) {
			res = ms.checkPassword(pw);
			System.out.println("입력값: "+pw+" 예상출력값:true, 출력값: "+res);
			assertEquals(true, res,": 올바른 비밀번호 입니다. :");
		}
		System.out.println("=========wrongPw==========");
		for(String pw:wrongPw) {
			res = ms.checkPassword(pw);
			System.out.println("입력값: "+pw+" 예상출력값:false, 출력값: "+res);
			assertEquals(false,res,": 잘못된 비밀번호 입니다. :");
		}
	}
}