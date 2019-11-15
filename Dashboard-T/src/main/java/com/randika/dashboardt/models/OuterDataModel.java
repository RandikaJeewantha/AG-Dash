package com.randika.dashboardt.models;

import org.springframework.stereotype.Component;

@Component
public class OuterDataModel {
	
	private Object outerData;

	public Object getOuterData() {
		return outerData;
	}

	public void setOuterData(Object outerData) {
		this.outerData = outerData;
	}
}
