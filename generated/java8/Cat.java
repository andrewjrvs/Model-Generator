package com.barrettotte.models.very.deep.directory;

import com.barrettotte.models.common.Thing;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class Cat extends Thing {

    private String breed;

    private String color;


    @JsonProperty("breed")
    public String getBreed() {
        return breed;
    }
    @JsonProperty("breed")
    public void setBreed(final String breed) {
        this.breed = breed;
    }

    @JsonProperty("color")
    public String getColor() {
        return color;
    }
    @JsonProperty("color")
    public void setColor(final String color) {
        this.color = color;
    }
}

