package com.PerformHere.API.controllers;

import com.PerformHere.API.entities.Votes;
import com.PerformHere.API.services.VotesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("votes")
public class VotesController {

    public VotesService votesService;

    public VotesController(VotesService votesService) {
        this.votesService = votesService;
    }

    @GetMapping("all")
    public List<Votes> getAllVotes() {
        return this.votesService.getAllVotes();
    }

    @GetMapping("user/{userId}")
    public List<Votes> getVotesByUser(@PathVariable("userId") String userId) {
        return this.votesService.getAllVotesByUser(userId);
    }

    @GetMapping("artist/{artistName}")
    public List<Votes> getVotesForArtist(@PathVariable("artistName") String artistName) {
        return this.votesService.getAllVotesForArtist(artistName);
    }

    @PutMapping("artist/{artistName}/{state}/{city}/{discountCode}")
    public List<Votes> updateDiscountCodes(@PathVariable String artistName, @PathVariable String state, @PathVariable String city, @PathVariable String discountCode) {
        return this.votesService.updateVotesWithDiscountCode(artistName, state, city, discountCode);
    }

    @PostMapping("add")
    public Votes saveVote(@RequestBody Votes vote) {
        return this.votesService.saveVote(vote);
    }

}
