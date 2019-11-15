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
					"C:\\Users\\Randika Jeewantha\\Documents\\workspace-sts-3.9.9.RELEASE\\agri-project-642f2-firebase-adminsdk-k0iix-d4f94c15ae.json");
		} 
		
		catch (FileNotFoundException e) {
			
			e.printStackTrace();
		}

		FirebaseOptions options = null;
		try {
			options = new FirebaseOptions.Builder()
						.setCredentials(GoogleCredentials.fromStream(serviceAccount))
						.setDatabaseUrl("https://agri-project-642f2.firebaseio.com")
						.build();
		} 
		
		catch (IOException e) {
			
			e.printStackTrace();
		}
		
		FirebaseApp b = FirebaseApp.initializeApp(options);
		System.out.println("firebase : "+b);
	}
}
