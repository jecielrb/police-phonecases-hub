package ca.sheridancollege.benerayj.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import ca.sheridancollege.benerayj.beans.Police;
import ca.sheridancollege.benerayj.repositories.PoliceRepository;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PoliceServiceImpl implements PoliceService {
	
	private PoliceRepository pRepo;
	@Override
	public List<Police> findAll() {
		return pRepo.findAll();
	}

	@Override
	public Police findById(Long id) {
		// TODO Auto-generated method stub
		return pRepo.findById(id).get();
	}

	@Override
	public Police findByName(String name) {
		// TODO Auto-generated method stub
		return pRepo.findByName(name).get();
	}
	
	@Override
	public String deleteById(Long id) {
		// TODO Auto-generated method stub
		Optional<Police> p = pRepo.findById(id);
		if(p.isPresent()) {
			pRepo.deleteById(id);
		}else {
			return "Record not Deleted";
		}
		return "Record Deleted";
	}

	@Override
	public Police save(Police police) {
		// TODO Auto-generated method stub
		return pRepo.save(police);
	}

}
