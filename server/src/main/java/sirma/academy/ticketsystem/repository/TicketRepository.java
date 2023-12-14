package sirma.academy.ticketsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sirma.academy.ticketsystem.model.Ticket;
import sirma.academy.ticketsystem.model.TicketStatus;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket,Long> {
    List<Ticket> findByUserIdAndStatus(Long userId, TicketStatus status);
    List<Ticket> findByUserId(Long userId);
}
