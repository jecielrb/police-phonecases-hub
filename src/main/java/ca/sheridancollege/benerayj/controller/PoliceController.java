package ca.sheridancollege.benerayj.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.sheridancollege.benerayj.beans.Police;
import ca.sheridancollege.benerayj.services.PoliceService;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/police")
public class PoliceController {
	private PoliceService pService;
	
	@GetMapping(value={"/", ""})
	public List<Police> getCollection(){
		return pService.findAll();
	}
	
	@PostMapping(value= {"/", ""}, headers="Content-type=application/json")
	public String postCollection(@RequestBody Police police){
		Police p = pService.save(police);
		return "Record added at index " + p.getId();
		
	}
	
	@GetMapping(value={"/{id}"}, headers="Content-type=application/json")
	public Police getById(@PathVariable Long id) {
		return pService.findById(id);
	}
	
	@DeleteMapping(value={"/{id}"}, headers="Content-type=application/json")
	public String deleteById(@PathVariable Long id) {
		return pService.deleteById(id);
	}
	
}
