package com.PerformHere.API.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class PerfArtist {

    @Id
    String id;
    String stageName;
    String description;

    public PerfArtist() {

    }

    public PerfArtist(String id, String stageName, String description) {
        this.id = id;
        this.stageName = stageName;
        this.description = description;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setStageName(String stageName) {
        this.stageName = stageName;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public String getStageName() {
        return stageName;
    }

    public String getDescription() {
        return description;
    }
}
