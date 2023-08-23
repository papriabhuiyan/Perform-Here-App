package com.PerformHere.API.repositories;

import com.PerformHere.API.entities.Votes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VotesRepository extends JpaRepository<Votes, Integer> {

    @Query("select v from Votes v where v.userId = ?1")
    List<Votes> findAllVotesByUser(String userId);

    @Query("select v from Votes v where v.artistName = ?1")
    List<Votes> findAllVotesForArtist(String artistName);

    @Query("select v from Votes v where v.artistName= ?1 and v.state = ?2 and v.city = ?3")
    List<Votes> findAllVotesAtLocation(String artistName, String state, String city);
}
