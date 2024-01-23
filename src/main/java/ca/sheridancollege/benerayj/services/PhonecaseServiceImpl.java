package ca.sheridancollege.benerayj.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import ca.sheridancollege.benerayj.beans.Phonecase;
import ca.sheridancollege.benerayj.repositories.PhonecaseRepository;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PhonecaseServiceImpl implements PhonecaseService {
	
	private PhonecaseRepository pcRepo;
	
	@Override
	public List<Phonecase> findAll() {
		// TODO Auto-generated method stub
		return pcRepo.findAll();
	}

	@Override
	public Phonecase findById(Long id) {
		// TODO Auto-generated method stub
		return pcRepo.findById(id).get();
	}

	@Override
	public Phonecase save(Phonecase phonecase) {
		// TODO Auto-generated method stub
		return pcRepo.save(phonecase);
	}

	@Override
	public String deleteById(Long id) {
		// TODO Auto-generated method stub
		Optional<Phonecase> pc = pcRepo.findById(id);
		if(pc.isPresent()) {
			pcRepo.deleteById(id);
		}else {
			return "Record not Deleted";
		}
		return "Record Deleted";
	}

}
