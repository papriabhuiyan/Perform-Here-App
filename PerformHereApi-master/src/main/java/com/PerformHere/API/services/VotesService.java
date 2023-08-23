package com.PerformHere.API.services;

import com.PerformHere.API.entities.Votes;
import com.PerformHere.API.repositories.VotesRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VotesService {

    public VotesRepository votesRepository;

    public VotesService(VotesRepository votesRepository) {
        this.votesRepository = votesRepository;
    }

    public List<Votes> getAllVotes() {
        return this.votesRepository.findAll();
    }

    public List<Votes> getAllVotesByUser(String userId) {
        return this.votesRepository.findAllVotesByUser(userId);
    }

    public List<Votes> getAllVotesForArtist(String artistName) {
        return this.votesRepository.findAllVotesForArtist(artistName);
    }

    public Votes saveVote(Votes vote) {
        return this.votesRepository.save(vote);
    }

    public List<Votes> updateVotesWithDiscountCode(String artistName, String state, String city, String discountCode) {
        List<Votes> votes = this.votesRepository.findAllVotesAtLocation(artistName, state, city);
        for(Votes v: votes) {
            Votes newVote = new Votes(v.getId(), v.getUserId(), v.getArtistName(), v.getState(), v.getCity(), discountCode);
            this.votesRepository.save(newVote);
        }

        return this.votesRepository.findAllVotesAtLocation(artistName, state, city);
    }

}
