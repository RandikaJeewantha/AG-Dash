package com.randika.dashboardt.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import com.randika.dashboardt.models.InnerDataModel;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class InnerDataController {
	
	@Autowired
	InnerDataModel theInnerDataModel;
	
	Object innerData;
	
	@RequestMapping("InnerData")
	public Object theOuterDataController() throws InterruptedException {
		
		final FirebaseDatabase database = FirebaseDatabase.getInstance();
		DatabaseReference ref = database.getReference("/InnerData");
		
		ref.addValueEventListener(new ValueEventListener() {
			
			@Override
			public void onDataChange(DataSnapshot dataSnapshot) {
				
				Object innerData = dataSnapshot.getValue();
				theInnerDataModel.setInnerData(innerData);
			}
			
			@Override
			public void onCancelled(DatabaseError databaseError) {
					
				System.out.println("The read failed: " + databaseError.getCode());
			}
				
		});
		
		innerData = theInnerDataModel.getInnerData();
		System.out.println("Inner data : " +innerData );
		return innerData;
	}
	
}
