package ca.sheridancollege.benerayj.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ca.sheridancollege.benerayj.beans.Phonecase;

@Repository
public interface PhonecaseRepository extends JpaRepository<Phonecase, Long> {

}
