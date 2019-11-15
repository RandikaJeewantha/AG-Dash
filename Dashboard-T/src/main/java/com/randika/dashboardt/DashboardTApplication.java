package com.randika.dashboardt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.randika.dashboardt.firebase.FirebaseConfig;

@SpringBootApplication
public class DashboardTApplication {
	
	@Autowired
	FirebaseConfig theFirebaseConfig;

	public static void main(String[] args) {
		SpringApplication.run(DashboardTApplication.class, args);
	}

}
