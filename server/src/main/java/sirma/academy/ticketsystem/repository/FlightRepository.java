package sirma.academy.ticketsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sirma.academy.ticketsystem.model.Flight;

public interface FlightRepository extends JpaRepository<Flight, Long> {
}
