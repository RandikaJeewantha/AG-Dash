package com.randika.dashboardt.models;

import org.springframework.stereotype.Component;

@Component
public class InnerDataModel {
	
	private Object innerData;

	public Object getInnerData() {
		return innerData;
	}

	public void setInnerData(Object innerData) {
		this.innerData = innerData;
	}
}