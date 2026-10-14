package com.smt.HopeStep.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smt.HopeStep.Entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	 

}
