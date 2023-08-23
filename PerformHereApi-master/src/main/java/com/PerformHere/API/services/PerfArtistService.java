package com.PerformHere.API.services;

import com.PerformHere.API.entities.PerfArtist;
import com.PerformHere.API.repositories.PerfArtistRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PerfArtistService {
    public PerfArtistRepository perfArtistRepository;

    public PerfArtistService(PerfArtistRepository perfArtistRepository) {
        this.perfArtistRepository = perfArtistRepository;
    }

    public List<PerfArtist> getAllArtists() {
        return this.perfArtistRepository.findAll();
    }

    public PerfArtist saveArtist(PerfArtist artist) {
        return this.perfArtistRepository.save(artist);
    }

    public PerfArtist getArtistById(String id){ return this.perfArtistRepository.findById(id).orElse(null); }
}
