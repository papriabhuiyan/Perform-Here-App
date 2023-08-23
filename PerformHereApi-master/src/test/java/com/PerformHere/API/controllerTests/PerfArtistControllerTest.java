package com.PerformHere.API.controllerTests;

import com.PerformHere.API.controllers.PerfArtistController;
import com.PerformHere.API.entities.PerfArtist;
import com.PerformHere.API.entities.PerfUser;
import com.PerformHere.API.services.PerfArtistService;
import com.PerformHere.API.services.PerfUserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@WebMvcTest(PerfArtistController.class)
public class PerfArtistControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @MockBean
    private PerfUserService perfUserService;

    @MockBean
    private PerfArtistService perfArtistService;

    @Test
    public void getAllPerfArtist() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.get("/perfArtists/all")
        );
        verify(perfArtistService, times(1)).getAllArtists();
    }

    @Test
    public void addArtistTest() throws Exception {
        PerfArtist perfArtist = new PerfArtist();
        perfArtist.setId("123098");
        perfArtist.setStageName("Lady Gaga");
        perfArtist.setDescription("I am a singer!");
        mockMvc.perform(
                MockMvcRequestBuilders.post("/perfArtists/add")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(perfArtist))
        );
        verify(perfArtistService, times(1)).saveArtist(any(PerfArtist.class));
    }

    @Test
    public void getArtistByIdTest() throws Exception{
        PerfArtist perfArtist = new PerfArtist();
        perfArtist.setId("123098");
        perfArtist.setStageName("Lady Gaga");
        perfArtist.setDescription("I am a singer!");
        when(perfArtistService.getArtistById(perfArtist.getId())).thenReturn(perfArtist);
        mockMvc.perform(
                MockMvcRequestBuilders.get("/perfArtists/123098")
        ).andExpect(MockMvcResultMatchers.status().isOk());
        verify(perfArtistService, times(1)).getArtistById("123098");
    }
}
