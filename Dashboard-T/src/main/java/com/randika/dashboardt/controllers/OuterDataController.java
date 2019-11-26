package com.randika.dashboardt.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import com.randika.dashboardt.models.OuterDataModel;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class OuterDataController {
	
	@Autowired
	OuterDataModel theOuterDataModel;
	
	Object outerData;
	
	@GetMapping("OuterData")
	public Object theOuterDataController() throws InterruptedException {
		
		final FirebaseDatabase database = FirebaseDatabase.getInstance();
		DatabaseReference ref = database.getReference("/OuterData");
		
		ref.addValueEventListener(new ValueEventListener() {
			
			@Override
			public void onDataChange(DataSnapshot dataSnapshot) {
				
				Object outerData = dataSnapshot.getValue();
				theOuterDataModel.setOuterData(outerData);
			}
			
			@Override
			public void onCancelled(DatabaseError databaseError) {
					
				System.out.println("The read failed: " + databaseError.getCode());
			}
				
		});
		
		outerData = theOuterDataModel.getOuterData();
		System.out.println("Outer data : " +outerData );
		return outerData;
	}	
}
