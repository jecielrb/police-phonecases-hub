package ca.sheridancollege.benerayj.services;

import java.util.List;

import org.springframework.stereotype.Service;

import ca.sheridancollege.benerayj.beans.Police;

@Service
public interface PoliceService {
	public List<Police> findAll();
	public Police findById(Long id);
	public Police findByName(String name);
	public String deleteById(Long id);
	public Police save(Police police);
}
