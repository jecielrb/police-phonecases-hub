package ca.sheridancollege.benerayj.bootstrap;

import java.util.ArrayList;
import java.util.Random;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import ca.sheridancollege.benerayj.beans.Phonecase;
import ca.sheridancollege.benerayj.beans.Police;
import ca.sheridancollege.benerayj.repositories.PhonecaseRepository;
import ca.sheridancollege.benerayj.repositories.PoliceRepository;
import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class BootstrapData implements CommandLineRunner {
	
	private PoliceRepository pRepo;
	private PhonecaseRepository pcRepo;
	
	@Override
	public void run(String... args) throws Exception {
		//sorry got lazy with names
		for(int i = 0; i<=3;i++) {
			pRepo.save(new Police("Police" + i));
		}
		
		Random rd = new Random();
		ArrayList<String> pArr = new ArrayList<String>();
		
		for(Police p: pRepo.findAll()) {
			pArr.add(p.getName());
		}
		
		
		for(int i = 0; i<=10;i++) {
			double price = (double)Math.round(rd.nextDouble(1.0, 50.0) * 100) / 100;//generate random price from 1 to 50, round to 2 dec place
			int quantity = Math.abs(rd.nextInt(100 - 1) + 1); //generate random quantity from 1 to 100
			pcRepo.save(new Phonecase(null, "Phonecase" + i, price, quantity, pArr.get(rd.nextInt(0, 4))));
		}

	}

}
