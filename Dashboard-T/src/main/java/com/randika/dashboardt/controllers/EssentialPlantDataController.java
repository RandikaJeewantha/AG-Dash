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

import com.randika.dashboardt.models.EssentialPlantDataModel;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EssentialPlantDataController {
	
	@Autowired
	EssentialPlantDataModel theEssentialPlantDataModel;
	
	Object essentialPlantData;
	
	@RequestMapping("EssentialPlantData")
	public Object theOuterDataController() throws InterruptedException {
		
		final FirebaseDatabase database = FirebaseDatabase.getInstance();
		DatabaseReference ref = database.getReference("/PlantData/Tomato");
		
		ref.addValueEventListener(new ValueEventListener() {
			
			@Override
			public void onDataChange(DataSnapshot dataSnapshot) {
				
				Object essentialPlantData = dataSnapshot.getValue();
				theEssentialPlantDataModel.setEssentialPlantData(essentialPlantData);
			}
			
			@Override
			public void onCancelled(DatabaseError databaseError) {
					
				System.out.println("The read failed: " + databaseError.getCode());
			}
				
		});
		
		essentialPlantData = theEssentialPlantDataModel.getEssentialPlantData();
		System.out.println("Essential Plant Data : " +essentialPlantData );
		return essentialPlantData;
	}	
}
