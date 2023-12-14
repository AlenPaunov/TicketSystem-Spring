package sirma.academy.ticketsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sirma.academy.ticketsystem.model.Ticket;
import sirma.academy.ticketsystem.model.User;
import sirma.academy.ticketsystem.repository.TicketRepository;

import java.util.List;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    public List<Ticket> getTicketsByUser(User user) {
        return ticketRepository.findByUserId(user.getId());
    }

    public Ticket getById(Long id) {
        return ticketRepository.findById(id).orElse(null);
    }
}
