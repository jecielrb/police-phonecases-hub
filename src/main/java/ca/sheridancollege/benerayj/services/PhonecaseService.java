package ca.sheridancollege.benerayj.services;

import java.util.List;

import org.springframework.stereotype.Service;

import ca.sheridancollege.benerayj.beans.Phonecase;

@Service
public interface PhonecaseService {
	public List<Phonecase> findAll();
	public Phonecase findById(Long id);
	public Phonecase save(Phonecase phonecase);
	public String deleteById(Long id);
}
