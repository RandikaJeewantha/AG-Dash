package com.randika.dashboardt.models;

import org.springframework.stereotype.Component;

@Component
public class EssentialPlantDataModel {
	
	private Object essentialPlantData;

	public Object getEssentialPlantData() {
		return essentialPlantData;
	}

	public void setEssentialPlantData(Object essentialPlantData) {
		this.essentialPlantData = essentialPlantData;
	}
}