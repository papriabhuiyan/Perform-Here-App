package com.PerformHere.API.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Votes {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Integer id;
    String userId;
    String artistName;
    String state;
    String city;
    String discountCode;

    public Votes() {

    }

    public Votes(Integer id, String userId, String artistName, String state, String city, String discountCode) {
        this.id = id;
        this.userId = userId;
        this.artistName = artistName;
        this.state = state;
        this.city = city;
        this.discountCode = discountCode;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public void setArtistName(String artistName) {
        this.artistName = artistName;
    }

    public void setState(String state) {
        this.state = state;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setDiscountCode(String discountCode) {
        this.discountCode = discountCode;
    }

    public Integer getId() {
        return id;
    }

    public String getUserId() {
        return userId;
    }

    public String getArtistName() {
        return artistName;
    }

    public String getState() {
        return state;
    }

    public String getCity() {
        return city;
    }

    public String getDiscountCode() {
        return discountCode;
    }

}
