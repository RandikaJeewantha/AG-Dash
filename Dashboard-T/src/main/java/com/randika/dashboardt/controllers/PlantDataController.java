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

import com.randika.dashboardt.models.PlantDataModel;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PlantDataController {
	
	@Autowired
	PlantDataModel thePlantDataModel;
	
	Object plantData;
	
	@GetMapping("PlantData")
	public Object theOuterDataController() throws InterruptedException {
		
		final FirebaseDatabase database = FirebaseDatabase.getInstance();
		DatabaseReference ref = database.getReference("/PlantData/Tomato-01");
		
		ref.addValueEventListener(new ValueEventListener() {
			
			@Override
			public void onDataChange(DataSnapshot dataSnapshot) {
				
				Object plantData = dataSnapshot.getValue();
				thePlantDataModel.setPlantData(plantData);
			}
			
			@Override
			public void onCancelled(DatabaseError databaseError) {
					
				System.out.println("The read failed: " + databaseError.getCode());
			}
				
		});
		
		plantData = thePlantDataModel.getPlantData();
		System.out.println("Plant Data : " +plantData );
		return plantData;
	}	
}
