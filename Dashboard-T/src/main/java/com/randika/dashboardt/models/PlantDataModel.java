package com.randika.dashboardt.models;

import org.springframework.stereotype.Component;

@Component
public class PlantDataModel {
	
	private Object plantData;

	public Object getPlantData() {
		return plantData;
	}

	public void setPlantData(Object plantData) {
		this.plantData = plantData;
	}
}