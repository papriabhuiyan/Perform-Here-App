package com.PerformHere.API.entities;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class PerfUser {

    @Id
    String id;
    String firstName;
    String lastName;

    public PerfUser() {

    }

    public PerfUser(String id, String firstName, String lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }
}
