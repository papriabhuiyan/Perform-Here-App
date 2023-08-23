package com.PerformHere.API.serviceTests;

import com.PerformHere.API.entities.PerfUser;
import com.PerformHere.API.repositories.PerfUserRepository;
import com.PerformHere.API.services.PerfUserService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;


import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(SpringExtension.class)
public class PerfUserServiceTest {
    @Mock
    private PerfUserRepository perfUserRepository;

    @InjectMocks
    private PerfUserService perfUserService;

    @Test
    public void getAllPerfUsersTest(){
        perfUserService.getAllUsers();
        verify(perfUserRepository, times(1)).findAll();
    }

    @Test
    public void getUserByIdTest(){
        String id= "123098";
        perfUserService.getUserById(id);
        verify(perfUserRepository, times(1)).findById(id);
    }

    @Test
    public void saveUserTest(){
        PerfUser perfUser = new PerfUser();
        perfUser.setId("1011");
        perfUser.setFirstName("Serena");
        perfUser.setLastName("VanderWoodsen");
        perfUserService.saveUser(perfUser);
        verify(perfUserRepository, times(1)).save(perfUser);
    }
    @Test
    public void updateUserTest(){
        PerfUser perfUser = new PerfUser();
        perfUser.setId("1011");
        perfUser.setFirstName("Serena");
        perfUser.setLastName("VanderWoodsen");
        perfUserService.updateUser(perfUser);
        verify(perfUserRepository, times(1)).save(perfUser);
    }

}
