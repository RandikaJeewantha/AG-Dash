package com.randika.dashboardt.firebase;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

@Configuration
@Component
public class FirebaseConfig {

	public FirebaseConfig() {
		
		FileInputStream serviceAccount = null;
		
		try {
			serviceAccount = new FileInputStream(
					"C:\\Users\\Randika Jeewantha\\Documents\\workspace-sts-3.9.9.RELEASE\\project-firebase-ainsdkx-d4f94ju75ae.json");
		} 
		
		catch (FileNotFoundException e) {
			
			e.printStackTrace();
		}

		FirebaseOptions options = null;
		try {
			options = new FirebaseOptions.Builder()
						.setCredentials(GoogleCredentials.fromStream(serviceAccount))
						.setDatabaseUrl("https://project-.firebaseio.com")
						.build();
		} 
		
		catch (IOException e) {
			
			e.printStackTrace();
		}
		
		FirebaseApp b = FirebaseApp.initializeApp(options);
		System.out.println("firebase : "+b);
	}
}
