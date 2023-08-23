package com.PerformHere.API.services;

import com.PerformHere.API.entities.PerfUser;
import com.PerformHere.API.repositories.PerfUserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PerfUserService {

    public PerfUserRepository perfUserRepository;

    public PerfUserService(PerfUserRepository perfUserRepository) {
        this.perfUserRepository = perfUserRepository;
    }

    public List<PerfUser> getAllUsers() {
        return this.perfUserRepository.findAll();
    }

    public PerfUser saveUser(PerfUser user) {
        return this.perfUserRepository.save(user);
    }

    public PerfUser getUserById(String id) {
        return this.perfUserRepository.findById(id).orElse(null);
    }

    public PerfUser updateUser(PerfUser user) {
        return this.perfUserRepository.save(user);
    }

}
