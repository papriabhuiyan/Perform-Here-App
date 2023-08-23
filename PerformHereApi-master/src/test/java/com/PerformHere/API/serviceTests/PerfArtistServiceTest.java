package com.PerformHere.API.serviceTests;

import com.PerformHere.API.entities.PerfArtist;
import com.PerformHere.API.repositories.PerfArtistRepository;
import com.PerformHere.API.services.PerfArtistService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(SpringExtension.class)
public class PerfArtistServiceTest {
    @Mock
    private PerfArtistRepository perfArtistRepository;

    @InjectMocks
    private PerfArtistService perfArtistService;

    @Test
    public void getAllPerfArtistsTest(){
        perfArtistService.getAllArtists();
        verify(perfArtistRepository, times(1)).findAll();
    }

    @Test
    public void saveArtistTest(){
        PerfArtist perfArtist = new PerfArtist();
        perfArtist.setId("123098");
        perfArtist.setStageName("Lady Gaga");
        perfArtist.setDescription("I am a singer!");
        perfArtistService.saveArtist(perfArtist);
        verify(perfArtistRepository, times(1)).save(perfArtist);
    }

    @Test
    public void getArtistByIdTest(){
        String id= "123098";
        perfArtistService.getArtistById(id);
        verify(perfArtistRepository, times(1)).findById(id);
    }

}
