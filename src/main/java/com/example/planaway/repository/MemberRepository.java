package com.example.planaway.repository;


import com.example.planaway.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface MemberRepository extends JpaRepository<Member,Long> {

    Optional<Member> findByLoginId(String LoginId);
}
