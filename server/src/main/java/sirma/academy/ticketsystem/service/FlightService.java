package sirma.academy.ticketsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sirma.academy.ticketsystem.model.Flight;
import sirma.academy.ticketsystem.repository.FlightRepository;

import java.util.List;

@Service
public class FlightService {
    @Autowired
    private FlightRepository flightRepository;

    public Flight getById(Long id){
        return flightRepository.findById(id).orElse(null);
    }
    public List<Flight> getAll(){
        return flightRepository.findAll();
    }
}
