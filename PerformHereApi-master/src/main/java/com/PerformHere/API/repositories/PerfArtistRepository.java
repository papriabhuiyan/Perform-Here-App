package com.PerformHere.API.repositories;

import com.PerformHere.API.entities.PerfArtist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PerfArtistRepository extends JpaRepository<PerfArtist, String> {

}
