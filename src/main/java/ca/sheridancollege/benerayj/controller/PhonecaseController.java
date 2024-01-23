package ca.sheridancollege.benerayj.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.sheridancollege.benerayj.beans.Phonecase;
import ca.sheridancollege.benerayj.services.PhonecaseService;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/phonecase")
public class PhonecaseController {
	
	
	private PhonecaseService pcService;
	@GetMapping(value={"/", ""})
	public List<Phonecase> getCollection(){
		return pcService.findAll();
	}
	
	@PostMapping(value= {"/", ""}, headers="Content-type=application/json")
	public String postCollection(@RequestBody Phonecase phonecase){
		Phonecase pc = pcService.save(phonecase);
		return "Record added at index " + pc.getId();
		
	}
	
	@GetMapping(value={"/{id}"}, headers="Content-type=application/json")
	public Phonecase getById(@PathVariable Long id) {
		return pcService.findById(id); 
	}
	
	@DeleteMapping(value={"/{id}"}, headers="Content-type=application/json")
	public String deleteById(@PathVariable Long id) {
		return pcService.deleteById(id);
	}
}
