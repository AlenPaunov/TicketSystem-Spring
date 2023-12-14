package sirma.academy.ticketsystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sirma.academy.ticketsystem.model.Flight;
import sirma.academy.ticketsystem.service.FlightService;

import java.util.List;

@RestController
@RequestMapping("/api/flights")
public class FlightController {

    @Autowired
    private FlightService flightService;

    @GetMapping
    public ResponseEntity<?> getAllFlights() {
        List<Flight> flightList =  flightService.getAll();
        return new ResponseEntity<>(flightList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getFlightById(@PathVariable Long id) {
        Flight flight = flightService.getById(id);
        return new ResponseEntity<>(flight, HttpStatus.OK);
    }

}
