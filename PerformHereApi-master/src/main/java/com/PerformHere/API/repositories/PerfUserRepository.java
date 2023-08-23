package com.PerformHere.API.repositories;

import com.PerformHere.API.entities.PerfUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PerfUserRepository extends JpaRepository<PerfUser, String> {

}
