package ca.sheridancollege.benerayj.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ca.sheridancollege.benerayj.beans.Police;

@Repository
public interface PoliceRepository extends JpaRepository<Police, Long> {
	
	public Optional<Police> findByName(String name);
}
